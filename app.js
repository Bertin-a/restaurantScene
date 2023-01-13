isResturantOpen=true;

let menu={
    starter:
    [
        'Cured salmon with praws, pickled salad & dill lime creme fraiche', 
        'Baked feta with burst tomatoes & chilli honey', 'vegetable gyoza','charred spring & romesco',
        'cucumber prawn cocktail cups',
        'hot smoked salmon & beetroot platter'
    ],
    appetizers:
    [
    'Teriyaki pineapple meetballs',
    'fruit charcuterie board',
    'hot spinach artichoke dip',
    'orange-glazed meetballs'
    ],
    MainDish:
    [
    'Butter chicken',
    'Palak paneer',
    'Rogan Josh',
    'spicy pork vidoloo'
    ],
    Dessert:
    [
    'Apple pie',
    'Almond Malai Kulfi',
    'Lemon Tart',
    'Coconut Kheer'
    ]
}

let time=((ms)=>{
    return new Promise((resolve,reject)=>{
        if(isResturantOpen){
            setTimeout(resolve,ms)
        }
        else{
            reject(console.log('Sorry resturant is closed. Come again Mondays-Saturdays from 8am-10pm'))
        }
    })

})

let price = 0

async function priceToBePaid() {
    console.log('Starter cost: GHc 100')
    price+=100
    await time (8000)
    console.log('Appetizer cost: GHc 200')
    price+=200
    await time(9000)
    console.log('Main dish cost: GHc 200')
    price+=200
   await time(11000)
   console.log('Dessert Cost 150')
   price+=150

}

async function kitchen(){
    console.log('Chef receives order for table 1 and starts working on it')
    await time(10000)
    console.log(`${menu.starter[2]} starter for table 1 is ready`)
    priceToBePaid()
    await time (7000)
    console.log(`${menu.appetizers[1]} appetizer for table one is ready`)
    await time(8000)
    console.log(`${menu.MainDish[0]} main dish for table 1 is ready`)
    await time(10000)
    console.log(`${menu.Dessert[3]} dessert for table 1 is ready`)


}

async function order(){
    console.log('A day in our resturant')
    console.log('Customer enters the resturant')
    await time(5000);
    console.log("Waiter shows customer to a seat")
    await time(2000)
    console.log('Menu is given to the customer')
    console.log('customer is looking at the menu')
    await time(10000)
    console.log('Waiter arries to take customers order')
    console.log(`Customer orders, ${menu.starter[2]} for a starter, ${menu.appetizers[1]}, for an appetizer, ${menu.MainDish[0]} for a main dish and ${menu.Dessert[3]} for dessert`)
    console.log('Waiter takes order and places it at the kitchen')
    await time(2000)
    kitchen()
    console.log('Customer calls waiter to order for a drink')
    await time(2000)
    console.log('Waiter arrives with the drink')
    await time(9000)
    console.log('Waiter goes for food')
    await time(2000)
    console.log('Food arries and customer starts to eat')
    await time (8000)
    console.log('Waiter goes for food')
    await time(2000)
    console.log('Food arries and customer starts to eat')
    await time(9000)
    console.log('waiter goes for food')
    await time(2000)
    console.log('Food arries and customer starts to eat')
    await time(11000)
    console.log('Waiter goes for the dish')
    await time(2000)
    console.log('Food arries and customer starts to eat')
    await time(3000)
    console.log('customer calls for cheque')
    console.log('Waiter goes for the cheque and gives it to the customer')
    console.log('The total cost of the meal is: '+price)
    await time(2000)
    console.log('Customer pays the price of '+price)
    await time(2000)
    console.log('Waiter presents the customer with a cheque')
    console.log('customer leaves')
}

order()

