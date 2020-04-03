const ShopCart = (_ => {
    const removeButtons = document.getElementsByClassName('btn-cart-remove')
    const totalPrice = document.getElementsByClassName('cart-total-price')[0]
    const cartItems = document.getElementsByClassName('cart-item')
    const recordAddButtons = document.getElementsByClassName('records-add')
    const cartRows = document.getElementsByClassName('cart-items')[0]
    const quantityInputs = document.getElementsByClassName('cart-quantity-input')

    const quantityChanged = event => {
        let input = event.target
        if (isNaN(input.value) || input.value <= 1) {
            input.value = 1
        }
        updateTotalPrice()
    }

    const removeCartItem = event => {
        let btnClicked = event.target
        btnClicked.parentElement.parentElement.remove()
        updateTotalPrice()
    }

    const renderCartItem = (performer, title, price) => {
        let cartItem = document.createElement('div')
        cartItem.classList.add('cart-item')
        let cartPerformer = cartRows.getElementsByClassName('cart-performer')
        let cartTitleName = cartRows.getElementsByClassName('cart-titlename')
        for (let i = 0, j = 0; i < cartPerformer.length, j < cartTitleName.length; i++, j++) {
            if (cartPerformer[i].innerText == performer && cartTitleName[i].innerText == title) {
                return
            }
        }
        let cartItemContent = ''
        cartItemContent = `
        <div class="cart-title">
            <div class="cart-performer">${performer}</div>
            <div class="cart-titlename">${title}</div>
        </div>
        <div class="cart-details">
            <div class="cart-price">${price}</div>
            <input class="cart-quantiyi-input" type="number" value=1>
            <button class="btn btn-cart-remove" type="button">remove</button>
        </div>
    `
        cartItem.innerHTML = cartItemContent
        cartRows.append(cartItem)
        cartItem.getElementsByClassName('btn-cart-remove')[0].addEventListener('click', removeCartItem)
        cartItem.getElementsByClassName('cart-quantiyi-input')[0].addEventListener('change', quantityChanged)
    }

    const addItemToCart = event => {
        let btn = event.target
        let item = btn.parentElement.parentElement
        let recordPerformer = item.getElementsByClassName('records-performer')[0].innerText
        let recordTitle = item.getElementsByClassName('records-title')[0].innerText
        let recordPrice = item.getElementsByClassName('records-price')[0].innerText
        renderCartItem(recordPerformer, recordTitle, recordPrice)
        updateTotalPrice()
    }

    const updateTotalPrice = _ => {

        let total = 0
        for (let i = 0; i < cartItems.length; i++) {
            let cartItem = cartItems[i]
            console.log(cartItem)
            let priceElem = cartItem.getElementsByClassName('cart-price')[0]
            let quantityElem = cartItem.getElementsByClassName('cart-quantiyi-input')[0]
            let price = parseFloat(priceElem.innerText.replace('NT$', ''))
            let quantity = parseFloat(quantityElem.value)
            total += price * quantity
        }
        totalPrice.innerText = `NT$ ${total}`
    }

    const ready = () => {
        for (let i = 0; i < removeButtons.length; i++) {
            let btn = removeButtons[i]
            btn.addEventListener('click', removeCartItem)
        }

        for (let i = 0; i < recordAddButtons.length; i++) {
            let btn = recordAddButtons[i]
            btn.addEventListener('click', addItemToCart)
        }

        for (let i = 0; i < quantityInputs.length; i++) {
            let input = quantityInputs[i]
            input.addEventListener('change', quantityChanged)
        }
    }

    const init = _ => {
        ready();
    }

    return {
        init
    }


})();
export default ShopCart;