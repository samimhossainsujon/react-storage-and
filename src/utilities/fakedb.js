// use localStorage to mange cart data 
const addToDb = id => {
    let shoppingCart;

    // get the shopping cart from local storage
    const storedCard = localStorage.getItem('shopping-card');
    if (storedCard) {
        shoppingCart = JSON.parse(storedCard);

    } else {
        shoppingCart = {};

    }

    const quantity = shoppingCart[id];
    if (quantity) {
        console.log('already exists');
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
        //  localStorage.setItem(id, newQuantity);
    } else {
        // console.log('new items')
        // localStorage.setItem(id, 1);
        shoppingCart[id] = 1;
    }

    localStorage.setItem('shopping-card', JSON.stringify(shoppingCart));
}

const removeFromDb = id =>{
    const storedCard = localStorage.getItem('shopping-card');
   
    if (storedCard) {
        const shoppingCart = JSON.parse(storedCard);
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('shopping-card', JSON.stringify(shoppingCart));

            

        }

    }
}
export { addToDb, removeFromDb }