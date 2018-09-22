const swApp = () => {

if('serviceWorker' in navigator){
	console.log('SW supported');
	navigator.serviceWorker.register('./sw.js', {scope: '/'})
	.then((res) => {
	console.log('SW registered', res);
    console.log('Scope:', response.scope, 'State:', response.active.state);

	})
	.catch((err)=> {
		console.log('SW not registered', err)
	})
	}
}

swApp();

// module.exports = swApp;

// function sw(){
//   if(navigator.serviceWorker){
//     console.log('Browser supports service worker');

//     navigator.serviceWorker.register('sw.js').then((response) => {
//       console.log('Scope:', response.scope, 'State:', response.active.state);
//     })
//     .catch((err) => {
//       console.log('Error: serviceWorker not registered', err);
//     });
//   }
// }
// sw();