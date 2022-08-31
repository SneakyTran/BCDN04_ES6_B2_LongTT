let dataGlasses = [
    {
        id: "G1",
        src: "./img/g1.jpg",
        virtualImg: "./img/v1.png",
        brand: "Armani Exchange",
        name: "Bamboo wood",
        color: "Brown",
        price: 150,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? ",
    },
    {
        id: "G2",
        src: "./img/g2.jpg",
        virtualImg: "./img/v2.png",
        brand: "Arnette",
        name: "American flag",
        color: "American flag",
        price: 150,
        description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio.",
    },
    {
        id: "G3",
        src: "./img/g3.jpg",
        virtualImg: "./img/v3.png",
        brand: "Burberry",
        name: "Belt of Hippolyte",
        color: "Blue",
        price: 100,
        description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
        id: "G4",
        src: "./img/g4.jpg",
        virtualImg: "./img/v4.png",
        brand: "Coarch",
        name: "Cretan Bull",
        color: "Red",
        price: 100,
        description: "In assumenda earum eaque doloremque, tempore distinctio.",
    },
    {
        id: "G5",
        src: "./img/g5.jpg",
        virtualImg: "./img/v5.png",
        brand: "D&G",
        name: "JOYRIDE",
        color: "Gold",
        price: 180,
        description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?",
    },
    {
        id: "G6",
        src: "./img/g6.jpg",
        virtualImg: "./img/v6.png",
        brand: "Polo",
        name: "NATTY ICE",
        color: "Blue, White",
        price: 120,
        description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
        id: "G7",
        src: "./img/g7.jpg",
        virtualImg: "./img/v7.png",
        brand: "Ralph",
        name: "TORTOISE",
        color: "Black, Yellow",
        price: 120,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam.",
    },
    {
        id: "G8",
        src: "./img/g8.jpg",
        virtualImg: "./img/v8.png",
        brand: "Polo",
        name: "NATTY ICE",
        color: "Red, Black",
        price: 120,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim.",
    },
    {
        id: "G9",
        src: "./img/g9.jpg",
        virtualImg: "./img/v9.png",
        brand: "Coarch",
        name: "MIDNIGHT VIXEN REMIX",
        color: "Blue, Black",
        price: 120,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet.",
    },
];

let loadGlasses = () => {
    let content = ``;
    dataGlasses.map((item) => {
        content += `
            <div class="col-4">
                <img style="cursor: pointer;" onclick="wearGlass('${item.id}')" class="img-fluid" src="${item.src}" alt="">
            </div>
        `;
    });
    document.querySelector("#vglassesList").innerHTML = content;
};
loadGlasses();

let wearGlass = (id) => {
    dataGlasses.map((item) => {
        if (item.id === id) {
            let { virtualImg, brand, name, color, price, description } = item;
            document.querySelector("#avatar").innerHTML = `
                <img src="${virtualImg}" alt="">
            `;
            document.querySelector("#glassesInfo").innerHTML = `
                <h4>${name} - ${brand}(${color})</h4>
                <a href="#" class="price">${price}</a>
                <span>Stocking</span>
                <p>${description}</p>
            `;
            document.querySelector("#glassesInfo").style.display = "block";
        }
    });
};

let removeGlasses = (isRemove) => {
    if (isRemove) {
        document.querySelector(".vglasses__model img").style.display = "block";
    } else {
        document.querySelector(".vglasses__model img").style.display = "none";
    }
};
window.removeGlasses = removeGlasses;
window.wearGlass = wearGlass;
