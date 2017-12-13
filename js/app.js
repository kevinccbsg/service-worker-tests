// Resgister service worker

if ('serviceWorker' in navigator) {
  console.log('Service worker exists');
  navigator.serviceWorker
  .register('/js/service-worker.js')
  .then((registration) => {
    console.log('Service worker Resgistered:',registration);
  })
  .catch((err) => {
    console.log('Service worker Error:', err);
  });

} else {
  console.warn('Service worker not supported');
}