 



self.addEventListener('fetch', event => {

    console.log('urls ' + event.request.url);

    // If error request then
    const resp = fetch( event.request )
        .then( resp => {
            console.log(resp.headers);
            console.log(resp.ok);
            console.log(resp.status);
            return resp.ok ? resp : fetch('img/main.jpg');
            
        });

    
    event.respondWith(resp);



});




