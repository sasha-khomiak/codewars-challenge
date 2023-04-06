// Напишіть функцію addItemToBasket, яка буде за допомогою методу find перевіряти, чи є вже такий продукт в кошику
// Якщо він є, то потроібно оновити його в коризні
// Якщо немає, то потрібно додати новий продукт до кошику покупок

// Після цього порахувати суму всіх покупок і вивести total;

let total = 0;

const tShirt = {
  id: 33,
  title: 'T-shirt',
  price: 99,
  count: 1,
}

const jeans = {
  id: 29,
  title: 'Jeans',
  price: 199,
  count: 1,
}


let basketItems = [
  {
    id: 28,
    title: 'iPhone 14',
    price: 1599,
    count: 3,
  },
  {
    id: 29,
    title: 'Jeans',
    price: 199,
    count: 2,
  }
];

function addItemToBasket(product) {
    const { id: productId } = product;

    const currentProduct = basketItems.find(({ id }) => id === productId);
    // return currentProduct;

    if (currentProduct) {
        return basketItems.map(item => {
            const { id, count } = item;
            if (id === productId) {
                return {
                    ...item,
                    count: count + 1,
                };
            }
            else { return item }
        })
    }

    else { 
        return [...basketItems, product];
    }

}
 
console.table(basketItems);

basketItems = addItemToBasket(tShirt);

basketItems = addItemToBasket(jeans);

console.table(basketItems);


// console.log(addItemToBasket(tShirt));
// console.log(addItemToBasket(jeans));