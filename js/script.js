// Card row 1
function addToItemList1() {
    // const item1 = document.getElementById('items1');
    const itemName1 = getTheItemName('items1');
    setSelectedItemToPurchasedList(itemName1);

    const price1 = getTheItemPrice('price1');
    const totalPrice1 = calculateTheTotalPriceAndDiscount(price1);
    console.log(price1);
}

function addToItemList2() {
    const itemName2 = getTheItemName('items2');
    setSelectedItemToPurchasedList(itemName2);

    const price2 = getTheItemPrice('price2');
    const totalPrice2 = calculateTheTotalPriceAndDiscount(price2);
    console.log(price2);
}

function addToItemList3() {
    const itemName3 = getTheItemName('items3');
    setSelectedItemToPurchasedList(itemName3);

    const price3 = getTheItemPrice('price3');
    const totalPrice3 = calculateTheTotalPriceAndDiscount(price3);
    console.log(price3);
}

// Card row 2
function addToItemList4() {
    const itemName4 = getTheItemName('items4');
    setSelectedItemToPurchasedList(itemName4);

    const price4 = getTheItemPrice('price4');
    const totalPrice4 = calculateTheTotalPriceAndDiscount(price4);
    console.log(price4);
}
function addToItemList5() {
    const itemName5 = getTheItemName('items5');
    setSelectedItemToPurchasedList(itemName5);

    const price5 = getTheItemPrice('price5');
    const totalPrice5 = calculateTheTotalPriceAndDiscount(price5);
    console.log(price5);
}
function addToItemList6() {
    const itemName6 = getTheItemName('items6');
    setSelectedItemToPurchasedList(itemName6);

    const price6 = getTheItemPrice('price6');
    const totalPrice6 = calculateTheTotalPriceAndDiscount(price6);
    console.log(price6);
}

// Card row 3
function addToItemList7() {
    const itemName7 = getTheItemName('items7');
    setSelectedItemToPurchasedList(itemName7);

    const price7 = getTheItemPrice('price7');
    const totalPrice7 = calculateTheTotalPriceAndDiscount(price7);
    console.log(price7);
}
function addToItemList8() {
    const itemName8 = getTheItemName('items8');
    setSelectedItemToPurchasedList(itemName8);

    const price8 = getTheItemPrice('price8');
    const totalPrice8 = calculateTheTotalPriceAndDiscount(price8);
    console.log(price8);
}
function addToItemList9() {
    const itemName9 = getTheItemName('items9');
    setSelectedItemToPurchasedList(itemName9);

    const price9 = getTheItemPrice('price9');
    const totalPrice9 = calculateTheTotalPriceAndDiscount(price9);
    console.log(price9);
}

// common function to get item name
function getTheItemName(item) {
    const itemName = document.getElementById(item);
    const itemNameString = itemName.innerText;
    return itemNameString;
}

function getCouponCode(item) {
    const itemName = document.getElementById(item);
    const itemNameString = itemName.value;
    return itemNameString;
}

// common function to get Each Item price.
function getTheItemPrice(price) {
    const itemPrice = document.getElementById(price);
    const itemPriceString = itemPrice.innerText;
    const itemPriceValue = parseFloat(itemPriceString);
    return itemPriceValue;
}

function updateThePrice(elementId, setPrice) {
    const itemUpdatePrice = document.getElementById(elementId);
    const itemUpdatePriceString = itemUpdatePrice.innerText;
    const itemUpdatePriceValue = parseFloat(itemUpdatePriceString);

    // updating the price
    itemUpdatePrice.innerText = setPrice;
}

function setSelectedItemToPurchasedList(itemName) {
    console.log(itemName);
    const itemList = document.getElementById('itemList');


    const count = itemList.childElementCount;

    // creating html element
    const p = document.createElement('p');
    // by template string
    p.innerHTML = `${count + 1}. ${itemName}`;

    itemList.appendChild(p);
}

function setSelectedItemPriceToGetTotalPrice(totalPrice) {
    const showCalculation = document.getElementById('showCalculation');
    const div = document.createElement('div');

    // div.innerHTML = `
    // <p>Total price: <span id="totalPrice">00</span></p>
    // <p>Discount : <span id="discount">00</span></p>
    // <p>Total: <span id="total">00</span></p>
    // `
    // const initialPrice = 
}

function calculateTheTotalPriceAndDiscount(itemPrice) {
    enablePurchaseButton(itemPrice);
    const previousTotal = getTheItemPrice('totalPrice');
    const discount = getTheItemPrice('discount');
    const total = getTheItemPrice('total');
    // console.log(previousTotal, total);

    const totalPrice = previousTotal + itemPrice;
    // console.log(totalPrice);

    if (totalPrice >= 200) {
        enableApplyButton();
    }

    // UPDATING THE TOTAL PRICE IF COUPON CODE APPLIED
    document.getElementById('apply').addEventListener('click', function () {
        const couponCode = getCouponCode('promoCode');
        // console.log(couponCode);

        if (couponCode == 'SELL200') {
            // console.log('successful');
            if (totalPrice >= 200) {
                const discountAmount = (totalPrice * 20) / 100;
                console.log(discountAmount);
                updatedTotalPrice = totalPrice - discountAmount;
                console.log(updatedTotalPrice);

                // UPDATING THE DISCOUNT VALUE
                updateThePrice('discount', discountAmount);


                // UPDATING THE FINAL PRICE
                updateThePrice('total', updatedTotalPrice);

                // const finalPrice = document.getElementById('total');
                // const updateFinalPriceString = finalPrice.innerText;
                // const updateFinalPriceValue = parseFloat(updateFinalPriceString);
                // finalPrice.innerText = updatedTotalPrice;
            }
        }
    })

    // UPDATING THE TOTAL PRICE
    updateThePrice('totalPrice', totalPrice);

    // const updatePrice = document.getElementById('totalPrice');
    // const updatePriceString = updatePrice.innerText;
    // const updatePriceValue = parseFloat(updatePriceString);
    // updatePrice.innerText = totalPrice;
}


// ENABLE BUTTON AND CLEAR CALCULATION SECTION AFTER PURCHASE
const applyButton = document.getElementById('apply');
applyButton.style.backgroundColor = '#d4d6d8';

function enableApplyButton() {
    const applyButton = document.getElementById('apply')
    applyButton.style.backgroundColor = '#E527B2';
    applyButton.disabled = false;
}

function enablePurchaseButton(itemPrice) {
    const purchaseButton = document.getElementById('purchaseButton')
    if (itemPrice > 0) {
        purchaseButton.disabled = false;
    }
}

function clearAllDivSection() {
    const clearDiv = document.getElementById('itemList');
    clearDiv.innerHTML = '';

    const clearCalculation = document.getElementById('showCalculation');
    clearCalculation.innerHTML = '';
}
