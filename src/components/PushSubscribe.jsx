import { useState, useEffect, useCallback } from 'react';

const VAPID_PUBLIC_KEY = 'BBoTCQRG1YOMQy4kuYsLx5-jvO0yq28ExCDsZHZVMGcoyWuDp0YjMXbh8ox8_Kptd3zgqFdtEf-8xKLOtOI4cok';

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

export default function PushSubscribe() {
  const [status, setStatus] = useState('loading'); // loading | unsupported | denied | prompt | subscribed
  const [dismissed, setDismissed] = useState(() => localStorage.getItem('pc-push-dismissed') === 'true');

  const subscribe = useCallback(async (reg) => {
    try {
      const sub = await reg.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY),
      });
      // Send to server
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subscription: sub.toJSON() }),
      });
      setStatus('subscribed');
    } catch (err) {
      console.warn('Push subscription failed:', err);
      setStatus('prompt');
    }
  }, []);

  useEffect(() => {
    if (!('serviceWorker' in navigator && 'PushManager' in window)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setStatus('unsupported');
      return;
    }
    // Check current subscription state
    navigator.serviceWorker.ready.then(reg => {
      reg.pushManager.getSubscription().then(sub => {
        if (sub) {
          setStatus('subscribed');
        } else if (Notification.permission === 'denied') {
          setStatus('denied');
        } else if (Notification.permission === 'granted') {
          subscribe(reg);
        } else {
          setStatus('prompt');
        }
      });
    });
  }, [subscribe]);

  const handleSubscribe = async () => {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      const reg = await navigator.serviceWorker.ready;
      subscribe(reg);
    } else if (permission === 'denied') {
      setStatus('denied');
    }
  };

  const handleDismiss = () => {
    setDismissed(true);
    localStorage.setItem('pc-push-dismissed', 'true');
  };

  if (dismissed || status === 'loading' || status === 'subscribed' || status === 'unsupported' || status === 'denied') {
    return null;
  }

  return (
    <div className="fixed bottom-20 left-4 right-4 max-w-sm mx-auto z-50 animate-slide-up">
      <div className="bg-[var(--color-card-bg)] border border-[var(--color-border)] rounded-xl shadow-lg p-4">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
            <svg className="h-4 w-4 text-blue-600 dark:text-blue-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-[var(--color-text)]">¿Quieres recordatorios?</p>
            <p className="text-xs text-[var(--color-text-subtle)] mt-0.5">Recibe una notificación cuando haya un nuevo puzzle cada día.</p>
          </div>
        </div>
        <div className="flex gap-2 mt-3">
          <button
            onClick={handleSubscribe}
            className="flex-1 text-sm font-semibold py-2 px-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors cursor-pointer"
          >
            Activar
          </button>
          <button
            onClick={handleDismiss}
            className="text-sm py-2 px-3 rounded-lg bg-[var(--color-tile-default)] text-[var(--color-text-subtle)] hover:bg-[var(--color-border)] transition-colors cursor-pointer"
          >
            Ahora no
          </button>
        </div>
      </div>
    </div>
  );
}