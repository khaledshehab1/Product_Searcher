let products = {
    data: [{
            productName: "Regular White T-Shirt",
            category: "Topwear",
            price: "$30",
            image: "white-tshirt.jpg",
        },
        {
            productName: "Big short Skirt",
            category: "Bottomwear",
            price: "$49",
            image: "short-skirt.jpg",
        },
        {
            productName: "Sporty SmartWatch",
            category: "Watch",
            price: "$99",
            image: "sporty-smartwatch.jpg",
        },
        {
            productName: "Basic Kintted-top",
            category: "Topwear",
            price: "$29",
            image: "knitted-top.jpg",
        },
        {
            productName: "Black LAther Jacket",
            category: "Jacket",
            price: "$129",
            image: "black-leather-jacket.jpg",
        },
        {
            productName: "Stylish pink trousers",
            category: "Bottomwear",
            price: "$89",
            image: "pink-trousers.jpg",
        },
        {
            productName: "Brown Men's Jacket",
            category: "Jacket",
            price: "$189",
            image: "brown-jacket.jpg",
        },
        {
            productName: "Gray pants",
            category: "Bottomwear",
            price: "$49",
            image: "comfy-gray-pants.jpg",
        },

    ],
};

for (let i of products.data) {
    let card = document.createElement("div");

    card.classList.add("card", i.category, "hidden");

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer)

    let container = document.createElement("div");
    container.classList.add("container");

    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);

    let price = document.createElement("h6");
    price.innerText = i.price;
    container.appendChild(price);

    card.appendChild(container);
    document.getElementById("products").appendChild(card);

}

function chooseProduct(value) {
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });

    let elements = document.querySelectorAll(".card");

    elements.forEach((element) => {
        if (value == "all") {
            element.classList.remove("hidden");
        } else {
            if (element.classList.contains(value)) {
                element.classList.remove("hidden");
            } else {
                element.classList.add("hidden");
            }
        }
    });

}

let search = document.getElementById("search")
search.addEventListener("click", () => {
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");

    elements.forEach((element, index) => {
        if (element.innerText.includes(searchInput.toUpperCase())) {
            cards[index].classList.remove("hidden");
        } else {
            cards[index].classList.add("hidden");
        }
    });
});

window.onload = () => {
    filterProduct("all");
};