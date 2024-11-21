/// Create an array named products to hold all product object literals
const products = [
  {
      name: "Cherry",
      price: 2.5,
      quantity: 0,
      productId: 1,
      image: "/images/cherry.jpg"
  },
  {
      name: "Orange",
      price: 1.2,
      quantity: 0,
      productId: 2,
      image: "/images/orange.jpg"
  },
  {
      name: "Strawberry",
      price: 3.0,
      quantity: 0,
      productId: 3,
      image: "/images/strawberry.jpg"
  }
];

// Declare an empty array named cart
const cart = [];

// Function to add a product to the cart
function addProductToCart(productId) {
  const product = products.find(p => p.productId === productId);
  if (product) {
      if (!cart.includes(product)) {
          cart.push(product);
      }
      product.quantity++;
  }
}

// Function to increase the quantity of a product in the cart
function increaseQuantity(productId) {
  const product = cart.find(p => p.productId === productId);
  if (product) {
      product.quantity++;
  }
}

// Function to decrease the quantity of a product in the cart
function decreaseQuantity(productId) {
  const product = cart.find(p => p.productId === productId);
  if (product) {
      product.quantity--;
      if (product.quantity === 0) {
          removeProductFromCart(productId);
      }
  }
}

// Function to remove a product from the cart
function removeProductFromCart(productId) {
  const productIndex = cart.findIndex(p => p.productId === productId);
  if (productIndex !== -1) {
      cart[productIndex].quantity = 0;
      cart.splice(productIndex, 1);
  }
}

// Function to calculate the total cost of products in the cart
function cartTotal() {
  return cart.reduce((total, product) => total + product.price * product.quantity, 0);
}

// Function to empty the cart
function emptyCart() {
  cart.forEach(product => (product.quantity = 0));
  cart.length = 0;
}

// Function to handle payment
function pay(amount) {
  const total = cartTotal();
  return amount - total;
}

// Exporting all the functions and variables for testing
module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay,
  emptyCart
};



module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
}
