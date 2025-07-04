const { createElement } = require("react");

console.log("Heloo ja");

document
  .getElementById("donate-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // const amount=document.getElementById('input-amount').value;
    const amount = getValue("input-amount");

    if (isNaN(amount) || amount <= 0) {
      alert("❌ Please enter a valid donation amount.");
    //   hideModal('donate-btn');
      return;
    }
    // currentAmount=parseFloat(amount);
    const mainBalance = getInnerText("main-balance");
    console.log(amount, mainBalance);

    const p= createElement('p');
    p.innerText=`Added: ${amount} Tk New balance ${mainBalance}`;
    console.log(p);
    
    document.getElementById('his-id').appendChild(p);
    

    // const balance=document.getElementById('main-balance').innerText;
    // mainBalance=parseFloat(balance);
    // const newBalance=amount+mainBalance;
    // console.log(amount,typeof(amount),typeof(currentAmount),balance ,newBalance);
    document.getElementById("main-balance").innerText = amount + mainBalance;
  });




//   history button
document.getElementById('history-btn').addEventListener('click',function(){
    console.log('history buuu');
    window.location.href='/history.html';


    

    
})


 
