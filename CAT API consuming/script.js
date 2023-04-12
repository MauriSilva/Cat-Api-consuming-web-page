    let url = "https://api.thecatapi.com/v1/images/search?limit=2"

    function pegaImagem(){
    fetch(url)
    .then((response)=> response.json())
    .then((data) => {
        let imagesData = data;
        imagesData.map(function(imageData) {
    
            let image = document.createElement('img');
            image.src = imageData.url;
            let grid = document.getElementById("grid");
            grid.appendChild(image);
    });
});
}