#!/usr/bin/env python3
"""
Post a tweet using undetected_chromedriver (stealth browser automation).
"""
import undetected_chromedriver as uc
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.keys import Keys
from selenium.common.exceptions import TimeoutException
from pathlib import Path
import json
import time
import sys
import os

SCRIPT_DIR = Path(__file__).parent
PROJECT_ROOT = SCRIPT_DIR.parent
COOKIES_PATH = PROJECT_ROOT / ".twitter-cookies-python.json"
ENV_PATH = PROJECT_ROOT / ".env"

def load_env():
    vars = {}
    with open(ENV_PATH) as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith("#"):
                continue
            if "=" in line:
                k, v = line.split("=", 1)
                vars[k.strip()] = v.strip()
    return vars

def wait_and_find(driver, by, value, timeout=15):
    return WebDriverWait(driver, timeout).until(
        EC.presence_of_element_located((by, value))
    )

def wait_visible(driver, by, value, timeout=15):
    return WebDriverWait(driver, timeout).until(
        EC.visibility_of_element_located((by, value))
    )

def save_cookies(driver):
    cookies = driver.get_cookies()
    COOKIES_PATH.write_text(json.dumps(cookies, indent=2))
    has_auth = any(c.get("name") == "auth_token" for c in cookies)
    print(f"  Cookies saved (auth_token: {'YES' if has_auth else 'NO'})")
    return has_auth

def load_cookies(driver):
    if not COOKIES_PATH.exists():
        return False
    cookies = json.loads(COOKIES_PATH.read_text())
    if not cookies:
        return False
    for c in cookies:
        try:
            driver.add_cookie(c)
        except Exception:
            pass
    return True

def login(driver, username, password):
    print("Logging in...")
    driver.get("https://x.com/login")
    time.sleep(4)

    # Find username input
    user_input = None
    for sel in ['input[name="username_or_email"]', 'input[autocomplete*="username"]', 'input[name="text"]']:
        try:
            el = wait_visible(driver, By.CSS_SELECTOR, sel, 5)
            if el:
                user_input = el
                print(f"  Found username input: {sel}")
                break
        except:
            continue

    if not user_input:
        print("  Inputs on page:")
        for el in driver.find_elements(By.CSS_SELECTOR, "input"):
            if el.is_displayed():
                print(f"    name={el.get_attribute('name')} auto={el.get_attribute('autocomplete')}")
        raise Exception("Could not find username input")

    user_input.send_keys(username)
    time.sleep(0.5)

    # Click Next/Continue
    for btn_text in ["Siguiente", "Next", "Continuar"]:
        try:
            btn = driver.find_element(By.XPATH, f'//button[contains(text(), "{btn_text}")] | //div[@role="button"][contains(text(), "{btn_text}")]')
            if btn.is_displayed():
                btn.click()
                time.sleep(2)
                break
        except:
            continue

    # Check for email verification
    try:
        email_input = WebDriverWait(driver, 3).until(
            EC.visibility_of_element_located((By.CSS_SELECTOR, 'input[autocomplete="email"], input[type="email"]'))
        )
        body = driver.find_element(By.TAG_NAME, "body").text
        import re
        email_match = re.search(r'[\w.+-]+@[\w-]+\.[\w.+-]+', body)
        email = email_match.group(0) if email_match else username
        print(f"  Email verification: {email}")
        email_input.send_keys(email)
        time.sleep(0.5)
        for btn_text in ["Siguiente", "Next", "Continuar", "Verificar"]:
            try:
                btn = driver.find_element(By.XPATH, f'//button[contains(text(), "{btn_text}")] | //div[@role="button"][contains(text(), "{btn_text}")]')
                if btn.is_displayed():
                    btn.click()
                    time.sleep(2)
                    break
            except:
                continue
    except:
        pass

    # Check for extra username step
    try:
        uname_field = WebDriverWait(driver, 3).until(
            EC.visibility_of_element_located((By.CSS_SELECTOR, 'input[data-testid="ocfEnterTextTextInput"], input[name="text"]'))
        )
        if uname_field:
            uname_field.send_keys(username)
            time.sleep(0.5)
            for btn_text in ["Siguiente", "Next", "Continuar"]:
                try:
                    btn = driver.find_element(By.XPATH, f'//button[contains(text(), "{btn_text}")] | //div[@role="button"][contains(text(), "{btn_text}")]')
                    if btn.is_displayed():
                        btn.click()
                        time.sleep(2)
                        break
                except:
                    continue
    except:
        pass

    # Password
    pw_input = wait_visible(driver, By.CSS_SELECTOR, 'input[type="password"], input[name="password"]', 10)
    pw_input.send_keys(password)
    time.sleep(0.5)

    # Click login button
    for btn_text in ["Iniciar sesión", "Log in", "Continuar"]:
        try:
            btn = driver.find_element(By.XPATH, f'//button[contains(text(), "{btn_text}")] | //div[@role="button"][contains(text(), "{btn_text}")]')
            if btn.is_displayed():
                btn.click()
                time.sleep(3)
                break
        except:
            continue

    # Wait for home
    try:
        WebDriverWait(driver, 30).until(lambda d: "/home" in d.current_url)
    except:
        pass

    print(f"  Final URL: {driver.current_url}")
    print("Login completed")

def post_tweet(driver, text):
    print(f"Posting tweet: {text[:60]}...")

    # Navigate to home
    url = driver.current_url
    if "/home" not in url:
        driver.get("https://x.com/home")
        time.sleep(4)

    print(f"  Current URL: {driver.current_url}")

    if "/home" not in driver.current_url:
        print("  Not on /home, session invalid")
        return False

    # Click Post button in sidebar
    for sel in ['[data-testid="SideNav_NewTweet_Button"]', 'a[href="/compose/post"]']:
        try:
            btn = WebDriverWait(driver, 5).until(
                EC.element_to_be_clickable((By.CSS_SELECTOR, sel))
            )
            btn.click()
            time.sleep(2)
            print(f"  Post button clicked: {sel}")
            break
        except:
            continue
    else:
        print("  No Post button found")
        return False

    # Find tweet textarea
    tweet_box = None
    for sel in ['[data-testid="tweetTextarea_0"]', '[role="textbox"]', '[contenteditable="true"]']:
        try:
            tb = WebDriverWait(driver, 5).until(
                EC.visibility_of_element_located((By.CSS_SELECTOR, sel))
            )
            if tb:
                tweet_box = tb
                break
        except:
            continue

    if not tweet_box:
        print("  No tweet textarea found")
        return False

    tweet_box.click()
    time.sleep(0.5)
    tweet_box.send_keys(text)
    time.sleep(1)

    # Click Post button
    for sel in ['[data-testid="tweetButtonInline"]', '[data-testid="tweetButton"]']:
        try:
            btn = WebDriverWait(driver, 5).until(
                EC.element_to_be_clickable((By.CSS_SELECTOR, sel))
            )
            if btn:
                btn.click()
                time.sleep(3)
                print(f"  Post button clicked: {sel}")
                break
        except:
            continue
    else:
        print("  No Post button found")
        return False

    print("✅ Tweet posted!")
    return True

def main():
    text = None
    for i, arg in enumerate(sys.argv):
        if arg.startswith("--text="):
            text = arg.split("=", 1)[1]
        elif arg == "--text" and i + 1 < len(sys.argv):
            text = sys.argv[i + 1]

    if not text:
        print("Usage: python scripts/post-tweet-python.py --text \"message\"")
        sys.exit(1)

    env = load_env()
    username = env.get("TWITTER_USERNAME", "PalabrasConctds")
    password = env.get("TWITTER_PASSWORD")

    if not password:
        print("❌ TWITTER_PASSWORD not found in .env")
        sys.exit(1)

    print("Starting undetected Chrome...")
    options = uc.ChromeOptions()
    options.add_argument("--no-sandbox")
    options.add_argument("--disable-gpu")

    driver = uc.Chrome(options=options, version_main=131, use_subprocess=True)

    try:
        # Try to use saved cookies
        has_cookies = load_cookies(driver)
        auth_valid = False

        if has_cookies:
            print("Cookies found, verifying session...")
            driver.get("https://x.com/home")
            time.sleep(3)
            print(f"  URL: {driver.current_url}")
            if "/home" in driver.current_url:
                print("✅ Valid session")
                auth_valid = True

        if not auth_valid:
            login(driver, username, password)
            if "/home" not in driver.current_url:
                print("❌ Login failed")
                return
            save_cookies(driver)

        result = post_tweet(driver, text)
        if result:
            save_cookies(driver)
        else:
            print("Retrying with re-login...")
            login(driver, username, password)
            post_tweet(driver, text)
            save_cookies(driver)

    finally:
        driver.quit()

    print("✅ Done!")

if __name__ == "__main__":
    main()
