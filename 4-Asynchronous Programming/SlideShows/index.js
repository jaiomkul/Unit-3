function storeImages() {

    let img = document.getElementById('url').value

    //Array of Object 

    let images = localStorage.getItem('images')
    console.log('images',images)

    if(images === null)
    {
        images = []
    }

    else {
        images = JSON.parse(localStorage.getItem('images'))
    }

    images.push(img)

    localStorage.setItem('images', JSON.stringify(images))

    
}