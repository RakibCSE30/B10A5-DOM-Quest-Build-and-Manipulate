function getValue(id){
    const  innerValue=document.getElementById(id).value;
    const value=parseFloat(innerValue);
    return value;

}

function getInnerText(id){
    const  innerText=document.getElementById(id).innerText;
    const text=parseFloat(innerText);
    return text;
}

// Show modal
function showModal(id) {
  document.getElementById(id).classList.remove('hidden');
}

// Hide modal
function hideModal(id) {
  document.getElementById(id).classList.add('hidden');
}


function showModal() {
  document.getElementById('donation-modal').checked = true;
}

