// 1.51 minute  video
let serial = 0;

document.getElementById('first-card').addEventListener('click', function(){
    serial+=1;
    //get the data from html using id
    const productName = document.getElementById('first-name').innerText;
    const productPrice = document.getElementById('first-price').innerText;
    const productQuantity = document.getElementById('first-quantity').innerText;
    const priceTotal = parseInt(productPrice) * parseInt(productQuantity) ;
    // pass the data
    displayData(productName,productPrice,productQuantity,priceTotal);
    document.getElementById('first-card').setAttribute('disabled', true);
})
document.getElementById('third-card').addEventListener('click', function(){
    serial+=1;
    //get the data from html using id
    const productName = document.getElementById('third-name').innerText;
    const productPrice = document.getElementById('third-price').innerText;
    const productQuantity = document.getElementById('third-quantity').innerText;

    const priceTotal = parseInt(productPrice) * parseInt(productQuantity) ;
   
    // pass the data
    displayData(productName,productPrice,productQuantity,priceTotal)
})
document.getElementById('fourth-card').addEventListener('click', function(){
    serial+=1;
    //get the data from html using id
    const productName = document.getElementById('fourth-name').innerText;
    const productPrice = document.getElementById('fourth-price').innerText;
    const productQuantity = document.getElementById('fourth-quantity').innerText;

    const priceTotal = parseInt(productPrice) * parseInt(productQuantity) ;
   
    // pass the data
    displayData(productName,productPrice,productQuantity,priceTotal)
})

// using event object from browser 
document.getElementById('second-card').addEventListener('click', function(e){
    serial+=1;
    // console.log(e.target.parentNode.parentNode.children[0].innerText);

    const pName = e.target.parentNode.parentNode.children[0].innerText;
    const pPrice = e.target.parentNode.parentNode.children[2].children[0].innerText;
    const pQuantity = e.target.parentNode.parentNode.children[3].children[0].innerText;

    const sumTotal = parseInt(pPrice) + parseInt(pQuantity);
    
    displayData(pName, pPrice,pQuantity, sumTotal);

})

// last card
document.getElementById('last-card').addEventListener('click', function(){
    const productName = document.getElementById('last-name').innerText;
    const productPrice = document.getElementById('last-price').value;
    const productQuantity = document.getElementById('last-quantity').value;
    const sumTotal = parseInt(productPrice) * parseInt(productQuantity);
    displayData(productName, productPrice, productQuantity,sumTotal);

})

// Common function to display data 
function displayData(productName,productPrice,productQuantity,priceTotal){
    // console.log('called');
    const container = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${serial}</td>
        <td>${productName}</td>
        <td>${productPrice}</td>
        <td>${productQuantity}</td>
        <td>${priceTotal}</td>
    `;
    container.appendChild(tr);
}




