let key = "AIzaSyDYPQlRF7hh6fCifZT9sClMNQIGjLLWfdQ";
//let url = `https://youtube.googleapis.com/youtube/v3/search?key=${key}&=${userInput}&type=video`;

let container = document.getElementById("container");

// const getData = arync() =>{
async function getData(){
    try{
        
        let userInput = document.getElementById("searchTerm").value;
        console.log(userInput)
        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${userInput}&key=${key}&type=video&maxResults=30&part=snippet`);
        let data = await res.json();
        //console.log("data:", data);

        let videoList = data.items;
        displayData(videoList); 

    } catch(error){
        console.log("error:", error)
    }  
}

const displayData = (videosArray) => {

    container.innerHTML = "";

   // console.log(videosArray);

    videosArray.forEach((video) => {
        // console.log(video)
        // videoId = video.id.videoId
        // console.log(videoId)

        const {
            id: { videoId },
        } = video; 


        let videoCard = document.createElement('div');

        let iFrame = document.createElement('iframe')
        iFrame.src = `https://www.youtube.com/embed/${videoId}`;

        videoCard.append(iFrame);
        container.append(videoCard);

    });
};


