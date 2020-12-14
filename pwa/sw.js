var cachStatic="static-v3"
self.addEventListener("install",function (event){
	console.log('install')
})
//some csssss
self.addEventListener("activate",function(event){
	console.log('activate')
    return clients.claim();
})
self.addEventListener('fetch', function (event) {
	console.log('fetch')
});