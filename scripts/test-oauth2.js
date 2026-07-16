// Probar OAuth 2.0 Access Token del portal
const TOKEN = "b2NVcER6M0JqSU90UHBFRkRDWDNlAk0K5STA4dW01WEpxMi1fUTJDZ2syNHER0jE30DIyNDU30TU3MzM6MToxOmF00jE";

async function main() {
  console.log("Testing OAuth 2.0 token...\n");

  // Verificar identidad
  const me = await fetch("https://api.twitter.com/2/users/me", {
    headers: { Authorization: `Bearer ${TOKEN}` },
  });
  console.log("Whoami:", me.status);
  console.log(await me.json());
}

main().catch(e => console.error(e));