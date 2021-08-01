// Creation of a constructor in the Orders made by customers
let CustomerOrder = function(typeOfPizza, pizzaSize, crust,toppings, deliveryOption, pizzaNumberTotal, deliveryLocation ){

    this.typeOfPizza = typeOfPizza;
    this.pizzaSize = pizzaSize;
    this.crust = crust;
    this.toppings = toppings;
    this.deliveryOption = deliveryOption;
    this.pizzaNumberTotal = pizzaNumberTotal;
    this.deliveryLocation = deliveryLocation;
}

// Creation of an object for the prizes of the various commodities
CustomerOrder.prototype.kiruiPlace = { 
    name: "kirui pizza place",

    pizzaSizePrice: [
        {default: 0}, 
        {small: 300}, 
        {medium: 500}, 
        {large: 700}],

    pizzaCrustPrice: [
        {default: 0}, 
        {crispy: 300}, 
        {stuffed: 320}, 
        {glutten_free: 400}],

    deliveryPrice: 100,

    toppingPrice: [
        {default: 0}, 
        {potato_sausage_bacon: 400}, 
        {black_olives_anchovies_capers: 600},
        {mixed_sliced_mushrooms_and_garlic: 800}
    ]
}


$(document).ready(function(){
$("button#customizeOrder").click(function(event){

    event.preventDefault();

    let typeOfPizza = $("#pizzaTypes").val();
    let pizzaSize = $("#pizzaSize").val();
    let crust = $("#crust").val();
    let toppings = $("#toppings").val();
    let deliveryOption = $("input[name='delivery']").val()
    let pizzaNumberTotal = parseInt($("#pizzaNumberTotal").val());
    let deliveryLocation = $("#location").val();
       
    
    $(".formOutput").show()
    // A situation whereby a new customer comes in
    let customerOrder = new CustomerOrder(typeOfPizza, pizzaSize, crust, toppings, deliveryOption, pizzaNumberTotal, deliveryLocation );

    // Calculation of the possible orders for the small pizza



    // Case 1 : application of the control flow
    if (pizzaSize == "small" && crust == "crispy" && toppings == "potato_sausage_bacon" && deliveryOption == "on"){
        let totalPrice = (customerOrder.kiruiPlace.pizzaSizePrice[1].small + 
            customerOrder.kiruiPlace.pizzaCrustPrice[1].crispy + 
            customerOrder.kiruiPlace.toppingPrice[1].potato_sausage_bacon + 
            customerOrder.kiruiPlace.deliveryPrice) * pizzaNumberTotal;

        let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Small - KSh. ${customerOrder.kiruiPlace.pizzaSizePrice[1].small} </p>
            <p>Crust: Crispy - KSh. ${customerOrder.kiruiPlace.pizzaCrustPrice[1].crispy} </p>
            <p>Toppings: Potato, Sausage and Bacon - KSh. ${customerOrder.kiruiPlace.toppingPrice[1].potato_sausage_bacon}</p>
            <p>Delivery: - KSh. ${customerOrder.kiruiPlace.deliveryPrice}</p> // Case 9 : application of the control flow
            <hr>
            <p>Total: - KSh. ${totalPrice}
        `;
        $(".formOutput").html(orderSummary);
        alert("your pizza will be delivered at " + deliveryLocation)
    }

    // Case 2 : application of the control flow
    if (pizzaSize == "small" && crust == "crispy" && toppings == "black_olives_anchovies_capers" && deliveryOption == "on"){
        let totalPrice = (customerOrder.kiruiPlace.pizzaSizePrice[1].small + 
            customerOrder.kiruiPlace.pizzaCrustPrice[1].crispy + 
            customerOrder.kiruiPlace.toppingPrice[1].potato_sausage_bacon + 
            customerOrder.kiruiPlace.deliveryPrice) * pizzaNumberTotal;
        
            let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Small - KSh. ${customerOrder.kiruiPlace.pizzaSizePrice[1].small} </p>
            <p>Crust: Crispy - KSh. ${customerOrder.kiruiPlace.pizzaCrustPrice[1].crispy} </p>
            <p>Toppings: Potato, Sausage and Bacon - KSh. ${customerOrder.kiruiPlace.toppingPrice[1].potato_sausage_bacon}</p>
            <p>Delivery: - KSh. ${customerOrder.kiruiPlace.deliveryPrice}</p> // Case 9 : application of the control flow
            <hr>
            <p>Total: - KSh. ${totalPrice}
        `;
        $(".formOutput").html(orderSummary);
        alert("your pizza will be delivered at " + deliveryLocation)
    }
     // Case 3 : application of the control flow
     if (pizzaSize == "small" && crust == "crispy" && toppings == "mixed_sliced_mushrooms_and_garlic" && deliveryOption == "on"){
        let totalPrice = (customerOrder.kiruiPlace.pizzaSizePrice[1].small + 
            customerOrder.kiruiPlace.pizzaCrustPrice[1].crispy + 
            customerOrder.kiruiPlace.toppingPrice[1].potato_sausage_bacon + 
            customerOrder.kiruiPlace.deliveryPrice) * pizzaNumberTotal;
    
            let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Small - KSh. ${customerOrder.kiruiPlace.pizzaSizePrice[1].small} </p>
            <p>Crust: Crispy - KSh. ${customerOrder.kiruiPlace.pizzaCrustPrice[1].crispy} </p>
            <p>Toppings: Potato, Sausage and Bacon - KSh. ${customerOrder.kiruiPlace.toppingPrice[1].potato_sausage_bacon}</p>
            <p>Delivery: - KSh. ${customerOrder.kiruiPlace.deliveryPrice}</p> // Case 9 : application of the control flow
            <hr>
            <p>Total: - KSh. ${totalPrice}
        `;
        $(".formOutput").html(orderSummary);
        alert("your pizza will be delivered at " + deliveryLocation)
    }


    // Case 4 : application of the control flow
    if (pizzaSize == "small" && crust == "stuffed" && toppings == "potato_sausage_bacon" && deliveryOption == "on"){
        let totalPrice = (customerOrder.kiruiPlace.pizzaSizePrice[1].small + 
            customerOrder.kiruiPlace.pizzaCrustPrice[1].crispy + 
            customerOrder.kiruiPlace.toppingPrice[1].potato_sausage_bacon + 
            customerOrder.kiruiPlace.deliveryPrice) * pizzaNumberTotal;
        
            let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Small - KSh. ${customerOrder.kiruiPlace.pizzaSizePrice[1].small} </p>
            <p>Crust: Crispy - KSh. ${customerOrder.kiruiPlace.pizzaCrustPrice[1].crispy} </p>
            <p>Toppings: Potato, Sausage and Bacon - KSh. ${customerOrder.kiruiPlace.toppingPrice[1].potato_sausage_bacon}</p>
            <p>Delivery: - KSh. ${customerOrder.kiruiPlace.deliveryPrice}</p> // Case 9 : application of the control flow
            <hr>
            <p>Total: - KSh. ${totalPrice}
        `;
        $(".formOutput").html(orderSummary);
        alert("your pizza will be delivered at " + deliveryLocation)
    }

     // Case 5 : application of the control flow
     if (pizzaSize == "small" && crust == "stuffed" && toppings == "black_olives_anchovies_capers" && deliveryOption == "on"){
        let totalPrice = (customerOrder.kiruiPlace.pizzaSizePrice[1].small + 
            customerOrder.kiruiPlace.pizzaCrustPrice[1].crispy + 
            customerOrder.kiruiPlace.toppingPrice[1].potato_sausage_bacon + 
            customerOrder.kiruiPlace.deliveryPrice) * pizzaNumberTotal;
        
            let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Small - KSh. ${customerOrder.kiruiPlace.pizzaSizePrice[1].small} </p>
            <p>Crust: Crispy - KSh. ${customerOrder.kiruiPlace.pizzaCrustPrice[1].crispy} </p>
            <p>Toppings: Potato, Sausage and Bacon - KSh. ${customerOrder.kiruiPlace.toppingPrice[1].potato_sausage_bacon}</p>
            <p>Delivery: - KSh. ${customerOrder.kiruiPlace.deliveryPrice}</p> // Case 9 : application of the control flow
            <hr>
            <p>Total: - KSh. ${totalPrice}
        `;
        $(".formOutput").html(orderSummary);
        alert("your pizza will be delivered at " + deliveryLocation)
    }

     // Case 6 : application of the control flow
     if (pizzaSize == "small" && crust == "stuffed" && toppings == "mixed_sliced_mushrooms_and_garlic" && deliveryOption == "on"){
        let totalPrice = (customerOrder.kiruiPlace.pizzaSizePrice[1].small + 
            customerOrder.kiruiPlace.pizzaCrustPrice[1].crispy + 
            customerOrder.kiruiPlace.toppingPrice[1].potato_sausage_bacon + 
            customerOrder.kiruiPlace.deliveryPrice) * pizzaNumberTotal;
        
            let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Small - KSh. ${customerOrder.kiruiPlace.pizzaSizePrice[1].small} </p>
            <p>Crust: Crispy - KSh. ${customerOrder.kiruiPlace.pizzaCrustPrice[1].crispy} </p>
            <p>Toppings: Potato, Sausage and Bacon - KSh. ${customerOrder.kiruiPlace.toppingPrice[1].potato_sausage_bacon}</p>
            <p>Delivery: - KSh. ${customerOrder.kiruiPlace.deliveryPrice}</p> // Case 9 : application of the control flow
            <hr>
            <p>Total: - KSh. ${totalPrice}
        `;
        $(".formOutput").html(orderSummary);
        alert("your pizza will be delivered at " + deliveryLocation)
    }

    // Case 8 : application of the control flow
    if (pizzaSize == "small" && crust == "glutten_free" && toppings == "potato_sausage_bacon" && deliveryOption == "on"){
        let totalPrice = (customerOrder.kiruiPlace.pizzaSizePrice[1].small + 
            customerOrder.kiruiPlace.pizzaCrustPrice[1].crispy + 
            customerOrder.kiruiPlace.toppingPrice[1].potato_sausage_bacon + 
            customerOrder.kiruiPlace.deliveryPrice) * pizzaNumberTotal;
        
            let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Small - KSh. ${customerOrder.kiruiPlace.pizzaSizePrice[1].small} </p>
            <p>Crust: Crispy - KSh. ${customerOrder.kiruiPlace.pizzaCrustPrice[1].crispy} </p>
            <p>Toppings: Potato, Sausage and Bacon - KSh. ${customerOrder.kiruiPlace.toppingPrice[1].potato_sausage_bacon}</p>
            <p>Delivery: - KSh. ${customerOrder.kiruiPlace.deliveryPrice}</p> // Case 9 : application of the control flow
            <hr>
            <p>Total: - KSh. ${totalPrice}
        `;
        $(".formOutput").html(orderSummary);
        alert("your pizza will be delivered at " + deliveryLocation)
    }

    // Case 9 : application of the control flow
    if (pizzaSize == "small" && crust == "glutten_free" && toppings == "black_olives_anchovies_capers" && deliveryOption == "on"){
        let totalPrice = (customerOrder.kiruiPlace.pizzaSizePrice[1].small + 
            customerOrder.kiruiPlace.pizzaCrustPrice[1].crispy + 
            customerOrder.kiruiPlace.toppingPrice[1].potato_sausage_bacon + 
            customerOrder.kiruiPlace.deliveryPrice) * pizzaNumberTotal;
        
            let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Small - KSh. ${customerOrder.kiruiPlace.pizzaSizePrice[1].small} </p>
            <p>Crust: Crispy - KSh. ${customerOrder.kiruiPlace.pizzaCrustPrice[1].crispy} </p>
            <p>Toppings: Potato, Sausage and Bacon - KSh. ${customerOrder.kiruiPlace.toppingPrice[1].potato_sausage_bacon}</p>
            <p>Delivery: - KSh. ${customerOrder.kiruiPlace.deliveryPrice}</p> // Case 9 : application of the control flow
            <hr>
            <p>Total: - KSh. ${totalPrice}
        `;
        $(".formOutput").html(orderSummary);
        alert("your pizza will be delivered at " + deliveryLocation)
    }

     // Case 9 : application of the control flow
     if (pizzaSize == "small" && crust == "glutten_free" && toppings == "mixed_sliced_mushrooms_and_garlic" && deliveryOption == "on"){
        let totalPrice = (customerOrder.kiruiPlace.pizzaSizePrice[1].small + 
            customerOrder.kiruiPlace.pizzaCrustPrice[1].crispy + 
            customerOrder.kiruiPlace.toppingPrice[1].potato_sausage_bacon + 
            customerOrder.kiruiPlace.deliveryPrice) * pizzaNumberTotal;
        
            let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Small - KSh. ${customerOrder.kiruiPlace.pizzaSizePrice[1].small} </p>
            <p>Crust: Crispy - KSh. ${customerOrder.kiruiPlace.pizzaCrustPrice[1].crispy} </p>
            <p>Toppings: Potato, Sausage and Bacon - KSh. ${customerOrder.kiruiPlace.toppingPrice[1].potato_sausage_bacon}</p>
            <p>Delivery: - KSh. ${customerOrder.kiruiPlace.deliveryPrice}</p> // Case 9 : application of the control flow
            <hr>
            <p>Total: - KSh. ${totalPrice}
        `;
        $(".formOutput").html(orderSummary);
        alert("your pizza will be delivered at " + deliveryLocation)
    }


     // Calculation of the possible orders for the medium pizza
    


    // Case 1 : application of the control flow
    if (pizzaSize == "medium" && crust == "crispy" && toppings == "potato_sausage_bacon" && deliveryOption == "on"){
        let totalPrice = (customerOrder.kiruiPlace.pizzaSizePrice[1].small + 
            customerOrder.kiruiPlace.pizzaCrustPrice[1].crispy + 
            customerOrder.kiruiPlace.toppingPrice[1].potato_sausage_bacon + 
            customerOrder.kiruiPlace.deliveryPrice) * pizzaNumberTotal;
        
            let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Small - KSh. ${customerOrder.kiruiPlace.pizzaSizePrice[1].small} </p>
            <p>Crust: Crispy - KSh. ${customerOrder.kiruiPlace.pizzaCrustPrice[1].crispy} </p>
            <p>Toppings: Potato, Sausage and Bacon - KSh. ${customerOrder.kiruiPlace.toppingPrice[1].potato_sausage_bacon}</p>
            <p>Delivery: - KSh. ${customerOrder.kiruiPlace.deliveryPrice}</p> // Case 9 : application of the control flow
            <hr>
            <p>Total: - KSh. ${totalPrice}
        `;
        $(".formOutput").html(orderSummary);
        alert("your pizza will be delivered at " + deliveryLocation)
    }

    // Case 1 : application of the control flow
    if (pizzaSize == "medium" && crust == "crispy" && toppings == "black_olives_anchovies_capers" && deliveryOption == "on"){
        let totalPrice = (customerOrder.kiruiPlace.pizzaSizePrice[1].small + 
            customerOrder.kiruiPlace.pizzaCrustPrice[1].crispy + 
            customerOrder.kiruiPlace.toppingPrice[1].potato_sausage_bacon + 
            customerOrder.kiruiPlace.deliveryPrice) * pizzaNumberTotal;
        
            let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Small - KSh. ${customerOrder.kiruiPlace.pizzaSizePrice[1].small} </p>
            <p>Crust: Crispy - KSh. ${customerOrder.kiruiPlace.pizzaCrustPrice[1].crispy} </p>
            <p>Toppings: Potato, Sausage and Bacon - KSh. ${customerOrder.kiruiPlace.toppingPrice[1].potato_sausage_bacon}</p>
            <p>Delivery: - KSh. ${customerOrder.kiruiPlace.deliveryPrice}</p> // Case 9 : application of the control flow
            <hr>
            <p>Total: - KSh. ${totalPrice}
        `;
        $(".formOutput").html(orderSummary);
        alert("your pizza will be delivered at " + deliveryLocation)
    }

     // Case 2 : application of the control flow
     if (pizzaSize == "medium" && crust == "crispy" && toppings == "mixed_sliced_mushrooms_and_garlic" && deliveryOption == "on"){
        let totalPrice = (customerOrder.kiruiPlace.pizzaSizePrice[1].small + 
            customerOrder.kiruiPlace.pizzaCrustPrice[1].crispy + 
            customerOrder.kiruiPlace.toppingPrice[1].potato_sausage_bacon + 
            customerOrder.kiruiPlace.deliveryPrice) * pizzaNumberTotal;
        
            let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Small - KSh. ${customerOrder.kiruiPlace.pizzaSizePrice[1].small} </p>
            <p>Crust: Crispy - KSh. ${customerOrder.kiruiPlace.pizzaCrustPrice[1].crispy} </p>
            <p>Toppings: Potato, Sausage and Bacon - KSh. ${customerOrder.kiruiPlace.toppingPrice[1].potato_sausage_bacon}</p>
            <p>Delivery: - KSh. ${customerOrder.kiruiPlace.deliveryPrice}</p> // Case 9 : application of the control flow
            <hr>
            <p>Total: - KSh. ${totalPrice}
        `;
        $(".formOutput").html(orderSummary);
        alert("your pizza will be delivered at " + deliveryLocation)
    }

    // Case 3 : application of the control flow
    if (pizzaSize == "medium" && crust == "stuffed" && toppings == "potato_sausage_bacon" && deliveryOption == "on"){
        let totalPrice = (customerOrder.kiruiPlace.pizzaSizePrice[1].small + 
            customerOrder.kiruiPlace.pizzaCrustPrice[1].crispy + 
            customerOrder.kiruiPlace.toppingPrice[1].potato_sausage_bacon + 
            customerOrder.kiruiPlace.deliveryPrice) * pizzaNumberTotal;
        
            let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Small - KSh. ${customerOrder.kiruiPlace.pizzaSizePrice[1].small} </p>
            <p>Crust: Crispy - KSh. ${customerOrder.kiruiPlace.pizzaCrustPrice[1].crispy} </p>
            <p>Toppings: Potato, Sausage and Bacon - KSh. ${customerOrder.kiruiPlace.toppingPrice[1].potato_sausage_bacon}</p>
            <p>Delivery: - KSh. ${customerOrder.kiruiPlace.deliveryPrice}</p> // Case 9 : application of the control flow
            <hr>
            <p>Total: - KSh. ${totalPrice}
        `;
        $(".formOutput").html(orderSummary);
        alert("your pizza will be delivered at " + deliveryLocation)
    }

     // Case 4: application of the control flow
     if (pizzaSize == "medium" && crust == "stuffed" && toppings == "black_olives_anchovies_capers" && deliveryOption == "on"){
        let totalPrice = (customerOrder.kiruiPlace.pizzaSizePrice[1].small + 
            customerOrder.kiruiPlace.pizzaCrustPrice[1].crispy + 
            customerOrder.kiruiPlace.toppingPrice[1].potato_sausage_bacon + 
            customerOrder.kiruiPlace.deliveryPrice) * pizzaNumberTotal;
        
            let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Small - KSh. ${customerOrder.kiruiPlace.pizzaSizePrice[1].small} </p>
            <p>Crust: Crispy - KSh. ${customerOrder.kiruiPlace.pizzaCrustPrice[1].crispy} </p>
            <p>Toppings: Potato, Sausage and Bacon - KSh. ${customerOrder.kiruiPlace.toppingPrice[1].potato_sausage_bacon}</p>
            <p>Delivery: - KSh. ${customerOrder.kiruiPlace.deliveryPrice}</p> // Case 9 : application of the control flow
            <hr>
            <p>Total: - KSh. ${totalPrice}
        `;
        $(".formOutput").html(orderSummary);
        alert("your pizza will be delivered at " + deliveryLocation)
    }

     // Case 5 : application of the control flow
     if (pizzaSize == "medium" && crust == "stuffed" && toppings == "mixed_sliced_mushrooms_and_garlic" && deliveryOption == "on"){
        let totalPrice = (customerOrder.kiruiPlace.pizzaSizePrice[1].small + 
            customerOrder.kiruiPlace.pizzaCrustPrice[1].crispy + 
            customerOrder.kiruiPlace.toppingPrice[1].potato_sausage_bacon + 
            customerOrder.kiruiPlace.deliveryPrice) * pizzaNumberTotal;
        
            let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Small - KSh. ${customerOrder.kiruiPlace.pizzaSizePrice[1].small} </p>
            <p>Crust: Crispy - KSh. ${customerOrder.kiruiPlace.pizzaCrustPrice[1].crispy} </p>
            <p>Toppings: Potato, Sausage and Bacon - KSh. ${customerOrder.kiruiPlace.toppingPrice[1].potato_sausage_bacon}</p>
            <p>Delivery: - KSh. ${customerOrder.kiruiPlace.deliveryPrice}</p> // Case 9 : application of the control flow
            <hr>
            <p>Total: - KSh. ${totalPrice}
        `;
        $(".formOutput").html(orderSummary);
        alert("your pizza will be delivered at " + deliveryLocation)
    }

    // Case 6 : application of the control flow
    if (pizzaSize == "medium" && crust == "glutten_free" && toppings == "potato_sausage_bacon" && deliveryOption == "on"){
        let totalPrice = (customerOrder.kiruiPlace.pizzaSizePrice[1].small + 
            customerOrder.kiruiPlace.pizzaCrustPrice[1].crispy + 
            customerOrder.kiruiPlace.toppingPrice[1].potato_sausage_bacon + 
            customerOrder.kiruiPlace.deliveryPrice) * pizzaNumberTotal;
        
            let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Small - KSh. ${customerOrder.kiruiPlace.pizzaSizePrice[1].small} </p>
            <p>Crust: Crispy - KSh. ${customerOrder.kiruiPlace.pizzaCrustPrice[1].crispy} </p>
            <p>Toppings: Potato, Sausage and Bacon - KSh. ${customerOrder.kiruiPlace.toppingPrice[1].potato_sausage_bacon}</p>
            <p>Delivery: - KSh. ${customerOrder.kiruiPlace.deliveryPrice}</p> // Case 9 : application of the control flow
            <hr>
            <p>Total: - KSh. ${totalPrice}
        `;
        $(".formOutput").html(orderSummary);
        alert("your pizza will be delivered at " + deliveryLocation)
    }

    //Case 7 : application of the control flow
    if (pizzaSize == "medium" && crust == "glutten_free" && toppings == "black_olives_anchovies_capers" && deliveryOption == "on"){
        let totalPrice = (customerOrder.kiruiPlace.pizzaSizePrice[1].small + 
            customerOrder.kiruiPlace.pizzaCrustPrice[1].crispy + 
            customerOrder.kiruiPlace.toppingPrice[1].potato_sausage_bacon + 
            customerOrder.kiruiPlace.deliveryPrice) * pizzaNumberTotal;
        
            let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Small - KSh. ${customerOrder.kiruiPlace.pizzaSizePrice[1].small} </p>
            <p>Crust: Crispy - KSh. ${customerOrder.kiruiPlace.pizzaCrustPrice[1].crispy} </p>
            <p>Toppings: Potato, Sausage and Bacon - KSh. ${customerOrder.kiruiPlace.toppingPrice[1].potato_sausage_bacon}</p>
            <p>Delivery: - KSh. ${customerOrder.kiruiPlace.deliveryPrice}</p> // Case 9 : application of the control flow
            <hr>
            <p>Total: - KSh. ${totalPrice}
        `;
        $(".formOutput").html(orderSummary);
        alert("your pizza will be delivered at " + deliveryLocation)
    }

     // Case 9 : application of the control flow
     if (pizzaSize == "medium" && crust == "glutten_free" && toppings == "mixed_sliced_mushrooms_and_garlic" && deliveryOption == "on"){
        let totalPrice = (customerOrder.kiruiPlace.pizzaSizePrice[1].small + 
            customerOrder.kiruiPlace.pizzaCrustPrice[1].crispy + 
            customerOrder.kiruiPlace.toppingPrice[1].potato_sausage_bacon + 
            customerOrder.kiruiPlace.deliveryPrice) * pizzaNumberTotal;
        
            let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Small - KSh. ${customerOrder.kiruiPlace.pizzaSizePrice[1].small} </p>
            <p>Crust: Crispy - KSh. ${customerOrder.kiruiPlace.pizzaCrustPrice[1].crispy} </p>
            <p>Toppings: Potato, Sausage and Bacon - KSh. ${customerOrder.kiruiPlace.toppingPrice[1].potato_sausage_bacon}</p>
            <p>Delivery: - KSh. ${customerOrder.kiruiPlace.deliveryPrice}</p> // Case 9 : application of the control flow
            <hr>
            <p>Total: - KSh. ${totalPrice}
        `;
        $(".formOutput").html(orderSummary);
        alert("your pizza will be delivered at " + deliveryLocation)
    }


     // Calculation of the possible orders for the  pizza
    


    //  // Case 1 : application of the control flow
    if (pizzaSize == "large" && crust == "crispy" && toppings == "potato_sausage_bacon" && deliveryOption == "on"){
        let totalPrice = (customerOrder.kiruiPlace.pizzaSizePrice[1].small + 
            customerOrder.kiruiPlace.pizzaCrustPrice[1].crispy + 
            customerOrder.kiruiPlace.toppingPrice[1].potato_sausage_bacon + 
            customerOrder.kiruiPlace.deliveryPrice) * pizzaNumberTotal;
        
            let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Small - KSh. ${customerOrder.kiruiPlace.pizzaSizePrice[1].small} </p>
            <p>Crust: Crispy - KSh. ${customerOrder.kiruiPlace.pizzaCrustPrice[1].crispy} </p>
            <p>Toppings: Potato, Sausage and Bacon - KSh. ${customerOrder.kiruiPlace.toppingPrice[1].potato_sausage_bacon}</p>
            <p>Delivery: - KSh. ${customerOrder.kiruiPlace.deliveryPrice}</p> // Case 9 : application of the control flow
            <hr>
            <p>Total: - KSh. ${totalPrice}
        `;
        $(".formOutput").html(orderSummary);
        alert("your pizza will be delivered at " + deliveryLocation)
    }

    //  // Case 2 : application of the control flow
    if (pizzaSize == "large" && crust == "crispy" && toppings == "black_olives_anchovies_capers" && deliveryOption == "on"){
        let totalPrice = (customerOrder.kiruiPlace.pizzaSizePrice[1].small + 
            customerOrder.kiruiPlace.pizzaCrustPrice[1].crispy + 
            customerOrder.kiruiPlace.toppingPrice[1].potato_sausage_bacon + 
            customerOrder.kiruiPlace.deliveryPrice) * pizzaNumberTotal;
        
            let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Small - KSh. ${customerOrder.kiruiPlace.pizzaSizePrice[1].small} </p>
            <p>Crust: Crispy - KSh. ${customerOrder.kiruiPlace.pizzaCrustPrice[1].crispy} </p>
            <p>Toppings: Potato, Sausage and Bacon - KSh. ${customerOrder.kiruiPlace.toppingPrice[1].potato_sausage_bacon}</p>
            <p>Delivery: - KSh. ${customerOrder.kiruiPlace.deliveryPrice}</p> // Case 9 : application of the control flow
            <hr>
            <p>Total: - KSh. ${totalPrice}
        `;
        $(".formOutput").html(orderSummary);
        alert("your pizza will be delivered at " + deliveryLocation)
    }

     //  // Case 3 : application of the control flow
     if (pizzaSize == "large" && crust == "crispy" && toppings == "mixed_sliced_mushrooms_and_garlic" && deliveryOption == "on"){
        let totalPrice = (customerOrder.kiruiPlace.pizzaSizePrice[1].small + 
            customerOrder.kiruiPlace.pizzaCrustPrice[1].crispy + 
            customerOrder.kiruiPlace.toppingPrice[1].potato_sausage_bacon + 
            customerOrder.kiruiPlace.deliveryPrice) * pizzaNumberTotal;
        
            let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Small - KSh. ${customerOrder.kiruiPlace.pizzaSizePrice[1].small} </p>
            <p>Crust: Crispy - KSh. ${customerOrder.kiruiPlace.pizzaCrustPrice[1].crispy} </p>
            <p>Toppings: Potato, Sausage and Bacon - KSh. ${customerOrder.kiruiPlace.toppingPrice[1].potato_sausage_bacon}</p>
            <p>Delivery: - KSh. ${customerOrder.kiruiPlace.deliveryPrice}</p> // Case 9 : application of the control flow
            <hr>
            <p>Total: - KSh. ${totalPrice}
        `;
        $(".formOutput").html(orderSummary);
        alert("your pizza will be delivered at " + deliveryLocation)
    }


    //  // Case 4 : application of the control flow
    if (pizzaSize == "large" && crust == "stuffed" && toppings == "potato_sausage_bacon" && deliveryOption == "on"){
        let totalPrice = (customerOrder.kiruiPlace.pizzaSizePrice[1].small + 
            customerOrder.kiruiPlace.pizzaCrustPrice[1].crispy + 
            customerOrder.kiruiPlace.toppingPrice[1].potato_sausage_bacon + 
            customerOrder.kiruiPlace.deliveryPrice) * pizzaNumberTotal;
        
            let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Small - KSh. ${customerOrder.kiruiPlace.pizzaSizePrice[1].small} </p>
            <p>Crust: Crispy - KSh. ${customerOrder.kiruiPlace.pizzaCrustPrice[1].crispy} </p>
            <p>Toppings: Potato, Sausage and Bacon - KSh. ${customerOrder.kiruiPlace.toppingPrice[1].potato_sausage_bacon}</p>
            <p>Delivery: - KSh. ${customerOrder.kiruiPlace.deliveryPrice}</p> // Case 9 : application of the control flow
            <hr>
            <p>Total: - KSh. ${totalPrice}
        `;
        $(".formOutput").html(orderSummary);
        alert("your pizza will be delivered at " + deliveryLocation)
    }

     //  // Case 5 : application of the control flow
     if (pizzaSize == "large" && crust == "stuffed" && toppings == "black_olives_anchovies_capers" && deliveryOption == "on"){
        let totalPrice = (customerOrder.kiruiPlace.pizzaSizePrice[1].small + 
            customerOrder.kiruiPlace.pizzaCrustPrice[1].crispy + 
            customerOrder.kiruiPlace.toppingPrice[1].potato_sausage_bacon + 
            customerOrder.kiruiPlace.deliveryPrice) * pizzaNumberTotal;
        
            let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Small - KSh. ${customerOrder.kiruiPlace.pizzaSizePrice[1].small} </p>
            <p>Crust: Crispy - KSh. ${customerOrder.kiruiPlace.pizzaCrustPrice[1].crispy} </p>
            <p>Toppings: Potato, Sausage and Bacon - KSh. ${customerOrder.kiruiPlace.toppingPrice[1].potato_sausage_bacon}</p>
            <p>Delivery: - KSh. ${customerOrder.kiruiPlace.deliveryPrice}</p> // Case 9 : application of the control flow
            <hr>
            <p>Total: - KSh. ${totalPrice}
        `;
        $(".formOutput").html(orderSummary);
        alert("your pizza will be delivered at " + deliveryLocation)
    }
     //  // Case 6 : application of the control flow
     if (pizzaSize == "large" && crust == "stuffed" && toppings == "mixed_sliced_mushrooms_and_garlic" && deliveryOption == "on"){
        let totalPrice = (customerOrder.kiruiPlace.pizzaSizePrice[1].small + 
            customerOrder.kiruiPlace.pizzaCrustPrice[1].crispy + 
            customerOrder.kiruiPlace.toppingPrice[1].potato_sausage_bacon + 
            customerOrder.kiruiPlace.deliveryPrice) * pizzaNumberTotal;
        
            let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Small - KSh. ${customerOrder.kiruiPlace.pizzaSizePrice[1].small} </p>
            <p>Crust: Crispy - KSh. ${customerOrder.kiruiPlace.pizzaCrustPrice[1].crispy} </p>
            <p>Toppings: Potato, Sausage and Bacon - KSh. ${customerOrder.kiruiPlace.toppingPrice[1].potato_sausage_bacon}</p>
            <p>Delivery: - KSh. ${customerOrder.kiruiPlace.deliveryPrice}</p> // Case 9 : application of the control flow
            <hr>
            <p>Total: - KSh. ${totalPrice}
        `;
        $(".formOutput").html(orderSummary);
        alert("your pizza will be delivered at " + deliveryLocation)
    }

    //  // Case 7 : application of the control flow
    if (pizzaSize == "large" && crust == "glutten_free" && toppings == "potato_sausage_bacon" && deliveryOption == "on"){
        let totalPrice = (customerOrder.kiruiPlace.pizzaSizePrice[1].small + 
            customerOrder.kiruiPlace.pizzaCrustPrice[1].crispy + 
            customerOrder.kiruiPlace.toppingPrice[1].potato_sausage_bacon + 
            customerOrder.kiruiPlace.deliveryPrice) * pizzaNumberTotal;
        
            let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Small - KSh. ${customerOrder.kiruiPlace.pizzaSizePrice[1].small} </p>
            <p>Crust: Crispy - KSh. ${customerOrder.kiruiPlace.pizzaCrustPrice[1].crispy} </p>
            <p>Toppings: Potato, Sausage and Bacon - KSh. ${customerOrder.kiruiPlace.toppingPrice[1].potato_sausage_bacon}</p>
            <p>Delivery: - KSh. ${customerOrder.kiruiPlace.deliveryPrice}</p> // Case 9 : application of the control flow
            <hr>
            <p>Total: - KSh. ${totalPrice}
        `;
        $(".formOutput").html(orderSummary);
        alert("your pizza will be delivered at " + deliveryLocation)
    }

    //  // Case 8 : application of the control flow
    if (pizzaSize == "large" && crust == "glutten_free" && toppings == "black_olives_anchovies_capers" && deliveryOption == "on"){
        let totalPrice = (customerOrder.kiruiPlace.pizzaSizePrice[1].small + 
            customerOrder.kiruiPlace.pizzaCrustPrice[1].crispy + 
            customerOrder.kiruiPlace.toppingPrice[1].potato_sausage_bacon + 
            customerOrder.kiruiPlace.deliveryPrice) * pizzaNumberTotal;
        
            let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Small - KSh. ${customerOrder.kiruiPlace.pizzaSizePrice[1].small} </p>
            <p>Crust: Crispy - KSh. ${customerOrder.kiruiPlace.pizzaCrustPrice[1].crispy} </p>
            <p>Toppings: Potato, Sausage and Bacon - KSh. ${customerOrder.kiruiPlace.toppingPrice[1].potato_sausage_bacon}</p>
            <p>Delivery: - KSh. ${customerOrder.kiruiPlace.deliveryPrice}</p> // Case 9 : application of the control flow
            <hr>
            <p>Total: - KSh. ${totalPrice}
        `;
        $(".formOutput").html(orderSummary);
        alert("your pizza will be delivered at " + deliveryLocation)
    }

     //  // Case 9 : application of the control flow
     if (pizzaSize == "large" && crust == "glutten_free" && toppings == "mixed_sliced_mushrooms_and_garlic" && deliveryOption == "on"){
        let totalPrice = (customerOrder.kiruiPlace.pizzaSizePrice[1].small + 
            customerOrder.kiruiPlace.pizzaCrustPrice[1].crispy + 
            customerOrder.kiruiPlace.toppingPrice[1].potato_sausage_bacon + 
            customerOrder.kiruiPlace.deliveryPrice) * pizzaNumberTotal;
        
            let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Small - KSh. ${customerOrder.kiruiPlace.pizzaSizePrice[1].small} </p>
            <p>Crust: Crispy - KSh. ${customerOrder.kiruiPlace.pizzaCrustPrice[1].crispy} </p>
            <p>Toppings: Potato, Sausage and Bacon - KSh. ${customerOrder.kiruiPlace.toppingPrice[1].potato_sausage_bacon}</p>
            <p>Delivery: - KSh. ${customerOrder.kiruiPlace.deliveryPrice}</p> // Case 9 : application of the control flow
            <hr>
            <p>Total: - KSh. ${totalPrice}
        `;
        $(".formOutput").html(orderSummary);
        alert("your pizza will be delivered at " + deliveryLocation)
    }

    
    
    
});
});

$(document).ready(function(){
    $("#radioDelivery").click(function(){
        $("#locationDetails").show()
    })
})