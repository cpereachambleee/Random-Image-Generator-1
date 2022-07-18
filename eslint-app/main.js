import './style.css'

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`

var form = document.getElementById("form");
var response;

//function to get the list of Images
var chek = async () => {
    var list = await fetch("https://picsum.photos/v2/list?limit=100");
    response = await list.json();
    return response;
};

form.addEventListener("submit", function (event) {
    event.preventDefault();
    chek();
    
    setTimeout(() => {
        const rNumber = Math.floor(Math.random() * 100) + 1; 
        var selectedURL = response[rNumber].download_url;
        var selectedAuthor = response[rNumber].author;
        var selectedID = response[rNumber].id;
        
        var image = document.getElementById("img");
        image.src = selectedURL;
        document.getElementById("author").innerHTML = selectedAuthor;
        document.getElementById("IDGet").innerHTML = selectedID;
    }, 1000);
});

