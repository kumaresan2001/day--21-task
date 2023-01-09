var pageno = 1
async function unsplash(pageno){
    var api = `https://api.unsplash.com/photos?page=${pageno}&client_id=-701sqReVyOMwmAp_VO34FgGdhM-4VqK3S1GgKPeJxg&per_page=1000`

    console.log('data is loading');
    try{
        var data_fetch = await  fetch(api)  
        var final_out = data_fetch.json()
        var end_result = await final_out
        for(let i of end_result){
            var image_cre= document.createElement('img')
            image_cre.setAttribute('src',i.urls.thumb)
            document.querySelector('body').append(image_cre)
        }

        
        }

    
    catch(err){
        console.log(err);
        console.log('error');
    }
}

unsplash(1)


