// sw.js
const cacheName = 'v1';
const cacheFiles= [
			'/',
			'/public',
			'/index.html'
			]

self.addEventListener('install', (e) => {

	e.waitUntil(
		caches.open(cacheName)
	.then((cache) => {
	console.log('Service Worker caching')
		return caches.addAll(cacheFiles);
	})
	.catch((err) => {
		console.log(err)
	})

	console.log('Service Worker installing!')
});


self.addEventListener('activate', (e) => {

	e.waitUntil()
	.then((res) => {
		console.log(res)
	})
	.catch((err) => {
		console.log(err)
	})

	console.log('Service Worker installing!')
});


self.addEventListener('fetch', (e) => {



	console.log('Service Worker installing!')
});