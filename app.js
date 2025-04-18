const URL="https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_S7aGIvYPhXmLiuRosBeSRFqrgoRo5CBUGRmWE0xm&currencies=INR%2CUSD%2CCAD";
const dropdown=document.querySelectorAll("#select");
let btn=document.querySelector("button");

for (let select of dropdown){
    for (code in countryList){
        let newOption=document.createElement("option");
        newOption.innerText=code;
        newOption.value=code;
        select.append(newOption);
        if (select.name==="from" && code==="INR")
        {
            newOption.selected=true;
        }
        if (select.name==="to" && code==="USD")
            {
                newOption.selected=true;
            }
    }
    select.addEventListener("change",(e)=>{
        updateflag(e.target);
    })

}




function updateflag(element){
    let country=countryList[element.value];
    let img=element.parentElement.querySelector("img");
    img.src=`https://flagsapi.com/${country}/flat/64.png`;
    
}





btn.addEventListener("click",async (e)=>{
    e.preventDefault();
    let amount=document.querySelector(".amount input");
    if (amount.value==="" || amount.value<1){
        amount.value=1;
    }
    let fromcurrency=document.querySelector(".select1");
let from=fromcurrency.value;
let tocurrency=document.querySelector(".select2");
let to=tocurrency.value;
    let newurl=`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_S7aGIvYPhXmLiuRosBeSRFqrgoRo5CBUGRmWE0xm&currencies=${from}%2C${to}`;
    let response=await fetch(newurl);
    let data=await response.json();
    let msg=document.querySelector(".msg");
    let val=(data.data[to]/data.data[from])*amount.value;
    msg.innerText=val;
    
})