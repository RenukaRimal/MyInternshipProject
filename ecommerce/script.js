let cloths = document.getElementById("cloths");
let reviews = document.getElementById("reviews");
let contacts = document.getElementById("contacts");

cloths.addEventListener("click", function(){
    cloths.style.color="red";
    reviews.style.color="black";
    contacts.style.color="black";
    blogs.style.color="black";

})

reviews.addEventListener("click", function(){
    cloths.style.color="black";
    reviews.style.color="red";
    contacts.style.color="black";
    blogs.style.color="black";

})
contacts.addEventListener("click", function(){
    cloths.style.color="black";
    reviews.style.color="black";
    contacts.style.color="red";
    blogs.style.color="black";

})

let cart = []; // Initialize an empty cart array

// Function to add an item to the cart
function addToCart(name, price) {
    const item = {
        name: name,
        price: parseFloat(price),
    };
    cart.push(item);
    updateCartCount(); // Update the cart count in the navigation
}

// Function to update the cart count in the navigation
function updateCartCount() {
    const cartCountSpan = document.querySelector(".cart-count");
    const cartCount = cart.length;
    cartCountSpan.textContent = cartCount;
}

// Add a click event listener to all "Add To Cart" buttons
const addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const name = button.getAttribute("data-name");
        const price = button.getAttribute("data-price");
        addToCart(name, price);
    });
});

function removeFromCart(index) {
    cart.splice(index, 1);
    displayCartItems(); // Update the displayed cart items
    updateCartCount(); // Update the cart count in the navigation
}

// Function to display cart items on the cart page
function displayCartItems() {
    const cartItemsContainer = document.getElementById("cart-items");
    cartItemsContainer.innerHTML = ""; // Clear existing cart items

    cart.forEach((item, index) => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");

        // Create HTML for cart item (customize as needed)
        cartItem.innerHTML = `
            <p>${item.name} - $${item.price.toFixed(2)}</p>
            <button class="remove-from-cart" data-index="${index}">Remove</button>
        `;

        // Add a click event listener to the "Remove" button
        const removeButton = cartItem.querySelector(".remove-from-cart");
        removeButton.addEventListener("click", () => {
            const itemIndex = removeButton.getAttribute("data-index");
            removeFromCart(itemIndex);
        });

        cartItemsContainer.appendChild(cartItem);
    });
}

let login = document.getElementById("login");

login.addEventListener("click", function(){
    let loginPage = document.querySelector(".loginPage").style.display="block";
 
})

let loged = document.getElementById("loged");

loged.addEventListener("click", function(){
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");

    if(email.value == "" || pass.value == ""){
        alert("Please Enter Email Password")
    }else{
        alert("You Loged In")
        document.querySelector(".loginPage").style.display="none";
    }

})

let submit = document.getElementById("submit");

submit.addEventListener("click", function(){
    console.log("Aa");
    let names = document.getElementById("name");
    let password = document.getElementById("pass");

    console.log(names.value);
    if(names.value == "" || password == ""){
        alert("Please Enter Name and Password")
    }else{
        alert("Thanks for connecting")
    }
})
