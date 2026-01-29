const products=document.getElementById('products')
const cartItems=document.getElementById('cart-items')
const cartTotal=document.getElementById('cart-total')
const checkoutBtn=document.getElementById('checkoutBtn')


const productLists= [
    {
      id: 1,
      name: "Wireless Headphones",
      description: "Over-ear wireless headphones with noise cancellation.",
      price: 79.99,
      image: "https://shorturl.at/t2hIK"
    },
    {
      id: 2,
      name: "Smart Watch",
      description: "Fitness smart watch with heart rate and sleep tracking.",
      price: 99.99,
      image: "https://shorturl.at/yy1vp"
    },
    {
      id: 3,
      name: "Laptop Backpack",
      description: "Water-resistant backpack for laptops up to 15.6 inches.",
      price: 39.99,
      image: "https://shorturl.at/78gDu"
    },
    {
      id: 4,
      name: "Bluetooth Speaker",
      description: "Portable Bluetooth speaker with deep bass sound.",
      price: 49.99,
      image: "https://shorturl.at/zC5Gu"
    },
    
  ];
  
let cart=[]
function addToCart(productId){
    const product=productLists.find(p=>p.id===productId)
    if(product){
        cart.push(product)
        renderCart()
    }
}
function renderCart(){
    cartItems.innerHTML=''
    let total=0
    cart.forEach(item=>{
        const li=document.createElement('li')
        const btn=document.createElement('button')
        li.textContent=`${item.name} - $${item.price.toFixed(2)}`
        btn.textContent='Remove'
        btn.addEventListener('click',()=>{
            cart=cart.filter(i=>i.id!==item.id)
            renderCart()
        }
        )
        btn.style.marginLeft='10px'
        li.appendChild(btn)
        cartItems.appendChild(li)
        total+=item.price
    })
    cartTotal.textContent=`Total: $${total.toFixed(2)}`


}

  productLists.map(product=>{
    const productCard=document.createElement('div')
    productCard.className='product-card'
    productCard.innerHTML=`
    <img src="${product.image}" alt="${product.name}" width='100' >
    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <p>$${product.price.toFixed(2)}</p>
    <button data-id="${product.id}">Add to Cart</button>
    `
    products.appendChild(productCard)
    productCard.addEventListener('click',e=>{
        if(e.target.tagName==='BUTTON'){
            addToCart(product.id)
        }
    }
    )
  }
  )

  checkoutBtn.addEventListener('click',()=>{
    if(cart.length===0){
        alert('Your cart is empty!')
        return
    }
    alert('Checkout successful! Total amount: '+cartTotal.textContent)
    cart=[]
    renderCart()
  }
    )

renderCart()
