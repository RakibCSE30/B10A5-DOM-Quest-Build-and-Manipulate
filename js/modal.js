
console.log('Heloo ja');

document.getElementById('donate-btn').addEventListener('click',function(event){
    event.preventDefault();
    const amount=document.getElementById('input-amount').value;
    currentAmount=parseFloat(amount);
    const balance=document.getElementById('main-balance').innerText;
    mainBalance=parseFloat(balance);
    const newBalance=currentAmount+mainBalance;
    console.log(amount,typeof(amount),typeof(currentAmount),balance ,newBalance);
    document.getElementById('main-balance').innerText=newBalance;
    
    
})