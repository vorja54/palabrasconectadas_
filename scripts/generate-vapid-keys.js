// Genera un par de llaves VAPID para notificaciones push web
// Ejecutar: node scripts/generate-vapid-keys.js

import webpush from 'web-push';

const vapidKeys = webpush.generateVAPIDKeys();

console.log('=== VAPID Keys ===');
console.log(`VAPID_PUBLIC_KEY=${vapidKeys.publicKey}`);
console.log(`VAPID_PRIVATE_KEY=${vapidKeys.privateKey}`);
console.log('');
console.log('Add these to your Cloudflare Pages environment variables:');
console.log('- Go to Cloudflare Dashboard > Pages > laconexiondeldia > Settings > Environment variables');
console.log('- Add both VAPID_PUBLIC_KEY and VAPID_PRIVATE_KEY');
console.log('');
console.log('VAPID_SUBJECT (also needed):');
console.log('mailto:admin@laconexiondeldia.com');