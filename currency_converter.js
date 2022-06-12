const input = require('readline-sync');
let result = 0;
let USD =1;
let JPY =113.5;
let EUR =0.89;
let RUB =74.36;
let GBP =0.75;
console.log("Welcome to Currency Converter!");
console.log (USD +" USD equals  " + USD + " USD");
console.log (USD +" USD equals  " + JPY + " JPY");
console.log (USD +" USD equals  " + EUR + " EUR");
console.log (USD +" USD equals  " + RUB + " RUB");
console.log (USD +" USD equals  " + GBP + " GBP");

function init(){
console.log("What do you want to convert?");  
let inputfrom = (input.question("From: ").toUpperCase());  
let from = datafrom(inputfrom); 
if (isNaN(from)){
console.log(from);
}
else{
  let inputuser = (input.question("To: ").toUpperCase());
  let to = datato(inputuser);
  if (isNaN(to)){
    console.log(to);
  }
  else{
    let amount = dataamount()
    if (isNaN(amount)){
      console.log(amount);
    }
    else{
      result = (amount/from)*to;
      console.log(`Result: ${amount} ${inputfrom} equals ${result.toFixed(4)} ${inputuser}`);
    }
  }
}
}

function datafrom(inputfrom){
  
  if (inputfrom === "USD"){
    inputfrom = USD;
    return inputfrom; 
  }
  else if (inputfrom === "JPY"){
    inputfrom = JPY;
    return inputfrom;
  }
  else if (inputfrom === "EUR"){
    inputfrom = EUR;
    return inputfrom;
  }
  else if (inputfrom === "RUB"){
    inputfrom= RUB;
    return inputfrom;
  }
  else if (inputfrom=== "GBP"){
    inputfrom= GBP;
    return inputfrom;
  }
  else{
    return "Unknown currency";
  }
}

function datato(inputuser){
  
  if (inputuser === "USD"){
    inputuser = USD;
    return inputuser;  
  }
  else if (inputuser === "JPY"){
    inputuser = JPY;
    return inputuser;
  }
  else if (inputuser === "EUR"){
    inputuser = EUR;
    return inputuser;
  }
  else if (inputuser === "RUB"){
    inputuser = RUB;
    return inputuser;
  }
  else if (inputuser === "GBP"){
    inputuser= GBP;
    return inputuser;
  }
  else{
    return "Unknown currency";
  }
}

function dataamount(){
  let inputamount = input.question("Amount: ");
  if (inputamount >=1){
    return inputamount;
  }
  else if (inputamount < 1){
    return "The amount can not be less than 1.";
  }
  else {
    return "The amount has to be a number";
  }
}

let election = 0;
let c = 0;
a = 1; 
 while(a == 1){
 console.log("What do you want to do?");
 console.log("1-Convert currencies 2-Exit program");
 election = input.question("");
 c = parseInt(election)
 if(c === 1){
  init();
  a = 1;
 }
 else if(c===2){
  console.log("Have a nice day!")
  a=2;
 }
 else{
  console.log("Unknown input")
  a = 1
 }
 }

 
  
  
 
 




