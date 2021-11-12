/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
  console.log('cart: ' + cart);

}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  const tableElem = document.getElementById('cart');
  // start iteration at 1 to keep header row
  // for (let i = 0; i < tableElem.rows.length; i += 1) {
  //   tableElem.deleteRow(i);
  // }

}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  const tableElem = document.getElementById('cart');
  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

  for (let i = 0; i < cart.items.length; i += 1) {

    const tableRowElem = document.createElement('tr');
    tableElem.appendChild(tableRowElem);
    // test data row
    const testTableDataElem = document.createElement('td');
    tableRowElem.appendChild(testTableDataElem);

    console.log('table.rows[0].cells.length = ' + table.rows[0].cells.length)

    for (let j = 0; j < table.rows[0].cells.length; j += 1) {
      const tableDataElem = document.createElement('td');
      tableRowElem.appendChild(tableDataElem);

      if (j === 0) {
        tableDataElem.textContent = 'Delete Link'; // Update Later
      } else if (j === 1) {
        tableDataElem.textContent = cart.items[i].quantity;
      } else if (j === 2) {
        tableDataElem.textContent = cart.items[i].product;
      }
    }
  }


}


function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();