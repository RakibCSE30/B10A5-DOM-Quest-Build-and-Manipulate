
console.log('Heloo ja');

document.getElementById('donate-btn').addEventListener('click',function(event){
    event.preventDefault();
    // const amount=document.getElementById('input-amount').value;
    const amount =getValue('input-amount');
    // currentAmount=parseFloat(amount);
    const mainBalance=getInnerText('main-balance');
    console.log(amount ,mainBalance);
    


    
    // const balance=document.getElementById('main-balance').innerText;
    // mainBalance=parseFloat(balance);
    // const newBalance=amount+mainBalance;
    // console.log(amount,typeof(amount),typeof(currentAmount),balance ,newBalance);
    document.getElementById('main-balance').innerText=amount+mainBalance;
    
    
})