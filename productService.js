async function getProduct(productId) {
    const apiUrl = `https://fakestoreapi.com/products/${productId}`;
    const response = await fetch(apiUrl);
    const product = await response.json();

    return product;
}

module.exports = getProduct;
