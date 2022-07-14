var x;

function start() {
    let images_arr = JSON.parse(localStorage.getItem('images'))

    let slider_img = document.getElementById('slider')

    let i=0

     x = setInterval(function (){

        if(i==images_arr.length)
        {
            i=0
        }
        slider_img.src = images_arr[i]
        i = i+1;
        console.log('i', i)
    }, 100)

}

function stop() {

    clearInterval(x)
}