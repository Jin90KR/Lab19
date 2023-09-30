const apiKey = "vQTs8PcXem474t8mjRWjUJ9xp0OTcc6t_Z7u9jB8mfw"
const inputData = document.querySelector(".search input");
const searchBtn = document.getElementById("search_btn");
const dogCards = document.querySelector(".cards");
const moreLoadBtn = document.getElementById("moreload_btn");
let pageNum = 0;

async function getRandomDogs() {
    pageNum = pageNum + 1;
    let inputValue = inputData.value;
    const data = await fetch(`https://api.unsplash.com/search/photos?page=${pageNum}&query=${inputValue}&client_id=${apiKey}&per_page=12`)
    const jsonData = await data.json();
    console.log(pageNum);
    console.log(inputValue);
    console.log(jsonData.results);
   
    jsonData.results.forEach(boximg => {
        console.log(boximg)
        const cardElement = document.createElement("div");
        const imgElement = document.createElement("img");
        const descriptionElement = document.createElement("p");
        cardElement.classList.add("card");
        imgElement.src = boximg.links.download;
        descriptionElement.innerText = boximg.alt_description;
       
        dogCards.appendChild(cardElement);
        cardElement.appendChild(imgElement);
        cardElement.appendChild(descriptionElement);
        console.log(imgElement)
    })
}

function resetImg() {
    while(dogCards.firstChild)
        dogCards.removeChild(dogCards.firstChild);
    pageNum = 0;
}

searchBtn.addEventListener("click", () => {
    resetImg()
    getRandomDogs()
})

moreLoadBtn.addEventListener("click", () => {
    getRandomDogs()
})