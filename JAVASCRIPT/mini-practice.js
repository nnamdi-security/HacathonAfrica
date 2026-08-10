//Transform Data with ES6+
// You have a list of products. Use ES6+ features to clean and summarize the data.

// Given data:

const products = [
  { name: 'Laptop', price: 999, inStock: true },
  { name: 'Mouse', price: 25, inStock: false },
  { name: 'Keyboard', price: 75, inStock: true },
  { name: 'Monitor', price: 350, inStock: true },
];
// Complete these three steps in your answer:

// Use filter to get only in-stock products. filter: selects items that match a condition
const inStockProduct = products.filter(product => product.inStock);

// Use map to create an array of strings like 'Laptop - $999'. map: transforms each item into a new format
const productString = products.map(product => `${product.name} - $${product.price}`);

// Use reduce to calculate the total price of in-stock items. reduce: combines all items into one value
const totalPrice = inStockProduct.reduce((sum, product) => sum + product.price, 0);



