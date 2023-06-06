const outputElement=document.querySelector('#output');
const copyElement=document.querySelector('#btn-copy');
const lengthElement=document.querySelector('#length');
const numberElement=document.querySelector('#numbers');
const capitalElement=document.querySelector('#capital');
const smallElement=document.querySelector('#small');
const symbolsElement=document.querySelector('#symbols');
const frm=document.querySelector('#frm');

copyElement.addEventListener('click',async()=>{
    const pass = outputElement.value;
    if(pass){
        await navigator.clipboard.writeText(pass)
        alert('Password Copied ')
    }
    else{
        alert("There is No Password")
    }
});


function generateRandamChar(min,max){
    const limit =max-min+1;
    return String.fromCharCode( Math.floor(Math.random()*limit)+min);
}
function CapitalValue(){
    return generateRandamChar(65,90);
}
function SmallValue(){
    return generateRandamChar(97,122);
}
function numberValue(){
    return generateRandamChar(48,57);
}
function SymbolsValue(){ 
    const symbol = "`~!@#$%^&*()_+[{]};:.,?/|=-";
    return symbol[Math.floor(Math.random()*symbol.length)];
}

const functionArray =[
    {
        element:numberElement,
        fun:numberValue
    },
    {
        element:capitalElement,
        fun:CapitalValue
    },
    {
        element:smallElement,
        fun:SmallValue
    },
    {
        element: symbolsElement,
        fun:SymbolsValue
    }
    ];

frm.addEventListener('submit',(event)=>{
    event.preventDefault();
    const limit = lengthElement.value
    let generatePassword = " ";
    const funArray = functionArray.filter(({element})=>element.checked);

    for(i=0;i<limit;i++){
        const index = Math.floor(Math.random()*funArray.length);
        const letter=funArray[index].fun();
        generatePassword+=letter;
    }
    outputElement.value=generatePassword;


})