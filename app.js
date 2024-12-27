

let products = [
    {
        image: "./img/image4.png",
        des: "рядом исторические парки и секверы",
        id: 1
    },
    {
        image: "./img/image5.png",
        des: "Польностью обустроенный",
        id: 2
    },
    {
        image: "./img/image6.png",
        des: "10 фонтанов на территории",
        id: 3
    },
    {
        image: "./img/image7.png",
        des: "6км велодорожек",
        id: 4
    },

];

let cards = document.querySelector(".cards");

cards.innerHTML = products.map((item) => {
    return `
 <div class="cards">
                <div class="card">
                    <img src="${item.image}" alt="">
                    <p>${item.des}</p>
                    
                </div>
               
            </div>
    
    `;
}).join("");