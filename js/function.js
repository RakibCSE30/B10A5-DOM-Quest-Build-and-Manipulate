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