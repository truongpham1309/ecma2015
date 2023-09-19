const url = "https://jsonplaceholder.typicode.com/photos";

const content = document.querySelector("#content");


fetch("https://jsonplaceholder.typicode.com/photos").then((response) => response.json()).then((data) => {
        content.innerHTML = ` ${data.map((item) =>{
        return `
            <div class="album">
                <h1>${item.title}</h1>
                <img src="${item.thumbnailUrl}">
            </div>
        `
    }).join(" ") }
    `
    })

window.addEventListener("scroll", () => {
    if(window.scrollY >= 40){
        
    }
})

