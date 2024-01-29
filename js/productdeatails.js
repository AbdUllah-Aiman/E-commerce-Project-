import { Product } from './productsmodule.js';
import { products } from './data.js';

document.addEventListener('DOMContentLoaded', () => {

    function updateProductDetailPage(productDetails) {
        debugger;
        document.getElementById('product-category').innerText = `${productDetails.categoryPath}`;
        document.getElementById('product-name').innerText = productDetails.name;
        document.getElementById('product-price').innerText = `Price: $${productDetails.price}`;
        document.getElementById('product-description').innerText = ` ${productDetails.description}`;
        document.getElementById('product-image').src = productDetails.image;

      
        displayRelatedProducts(productDetails.category, productDetails.id);
    }

    function displayRelatedProducts(category, currentProductId) {
        const relatedProductsContainer = document.getElementById('related-products');
        relatedProductsContainer.innerHTML = '';

        const relatedProducts = products.filter(product => product.category === category && product.id !== currentProductId);

        let relatedProductDiv;

        
        relatedProducts.forEach(relatedProduct => {
            if(relatedProduct.id !== currentProductId)
            {
                relatedProductDiv = document.createElement('div');
            relatedProductDiv.classList.add('related-product');
            relatedProductDiv.innerHTML = `
                <img src="${relatedProduct.image}" />
                <p>${relatedProduct.category}</p>
                <h2>${relatedProduct.name}</h2>
                <p>Price: $${relatedProduct.price}</p>`;
            }
            else{
                return;
            }

            const hoverIcon = document.createElement('div');
            hoverIcon.classList.add('hover-icon');
            hoverIcon.innerHTML = `<i class="fa-solid fa-basket-shopping"></i>`;

            hoverIcon.addEventListener('click', function () {
                addToCart(relatedProduct.id);
            });

            relatedProductDiv.appendChild(hoverIcon);
            relatedProductsContainer.appendChild(relatedProductDiv);
        });
    }

    let productDetails;
    let cart = {};

    try {
        const cartString = localStorage.getItem('cart');

        if (cartString) {
            cart = JSON.parse(cartString);
        }
    } catch (error) {
        console.error("Can't get cart from localStorage:", error);
    }

    const total = document.querySelector('.total');
    const cardquantity = document.querySelector('.cardquantity');
    const addtocart = document.getElementById('addToCartButton');
    const checkoutButton = document.querySelector('.checkbtn');
    let listCard;

    const productId = getProductIdFromLocalStorage();

    if (productId) {
        productDetails = getProductDetails(productId);

        if (productDetails) {
            updateProductDetailPage(productDetails);
        } else {
            alert('Product not found');
        }
    } else {
        alert('Product ID not provided');
    }

    const pluspro = document.querySelector(".plus");
    const minuspro = document.querySelector(".minus");
    const numbe = document.querySelector(".num");

    let number = 1;

    pluspro.addEventListener("click", () => {
        if (productDetails && number < productDetails.quantity) {
            number++;
            numbe.innerText = number;
            changequantity(productId, number);
        } else {
            console.log("Cannot add more, reached the maximum quantity");
        }
        reloadCard();
    });

    minuspro.addEventListener("click", () => {
        if (number === 1) {
            console.log("Can't decrease below 1");
        } else {
            number--;
            numbe.innerText = number;
            changequantity(productId, -1);
        }
        reloadCard();
    });

    listCard = document.querySelector('.ulCard');
    addtocart.addEventListener('click', function () {
        const productId = productDetails.id;

        
        if (!cart[productId]) {
            cart[productId] = {
                id: productDetails.id,
                name: productDetails.name,
                price: productDetails.price,
                image: productDetails.image,
                cardquantity: number
            };
        } else if (cart[productId].cardquantity >= productDetails.quantity) {
            console.log("Can't add more.");
        } else {
            cart[productId].cardquantity += number;
        }
        number = 1;
        saveCartToLocalStorage();
        reloadCard();
    });

    reloadCard();

    function reloadCard() {
        let count = 0;
        let totalprice = 0;

        const listCard = document.querySelector('.listCard');
        listCard.innerHTML = '';

        for (const productId in cart) {
            const productDetails = cart[productId];
            totalprice += productDetails.price * productDetails.cardquantity;
            count += productDetails.cardquantity;

            const newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div>
                    <img src="${productDetails.image}" />
                </div>
                <h2>${productDetails.name}</h2>
                <div class="plusevent">
                    <span class="minus">-</span>
                    <span class="num">${productDetails.cardquantity}</span>
                    <span class="plus">+</span>
                </div>
                <p>$${productDetails.price * productDetails.cardquantity}</p>
                <button class="remove-button" data-product-id="${productId}">
                    <i class="fa-regular fa-circle-xmark"></i>
                </button>
            `;

            const minus = newDiv.querySelector('.minus');
            const plus = newDiv.querySelector('.plus');
            minus.addEventListener('click', function () {
                changequantity(productId, -1);
            });

            plus.addEventListener('click', function () {
                changequantity(productId, 1);
            });

            function changequantity(productId, quantityChange) {
                const product = cart[productId];
                if (product) {
                    if (quantityChange > 0 && product.cardquantity >= productDetails.quantity) {
                        console.log("Cannot add more.");
                    } else {
                        product.cardquantity += quantityChange;
                        if (product.cardquantity <= 0) {
                            delete cart[productId];
                        }
                        saveCartToLocalStorage();
                        reloadCard();
                    }
                }
            }

            listCard.appendChild(newDiv);
        }

        total.innerText = totalprice.toLocaleString();
        cardquantity.innerText = count;

        const removeButtons = document.querySelectorAll('.remove-button');
        removeButtons.forEach(button => {
            button.addEventListener('click', function () {
                const productId = this.getAttribute('data-product-id');
                removeProductFromCart(productId);
            });
        });
    }

    function removeProductFromCart(productId) {
        if (cart[productId]) {
            delete cart[productId];
            saveCartToLocalStorage();
            reloadCard();
        }
    }

    function saveCartToLocalStorage() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    function getProductIdFromLocalStorage() {
        return localStorage.getItem('selectedProductId');
    }

    function getProductDetails(productId) {
        const productJSON = localStorage.getItem(productId);
        return productJSON ? JSON.parse(productJSON) : null;
    }

    checkoutButton.addEventListener('click', function () {
        if (Object.keys(cart).length === 0) {
            console.log("cart is empty");
            return;
        }

        saveCartToLocalStorage();
        window.location.href = 'checkout.html';
    });
});

