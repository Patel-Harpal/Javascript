//Multiplication of 5 :-
/* let num=prompt("enter the number : ");
if(num%5==0){
    console.log(num,"is multiple of 5");
}else{
    console.log(num,"is NOT multiple of 5");
} */

//swapping number :-
/* method 1
let a=10;
let b=20;

console.log("before swapping A :",a," B : ",b);
let temp=a;
a=b;
b=temp;
console.log("after swapping A :",a," B : ",b); */

//method 2
/* let a=25;
let b=50;

console.log("before swapping A :",a," B : ",b);
a=a+b;
b=a-b;
a=a-b;
console.log("after swapping A :",a," B : ",b); */

//Totsl,average,percentage :-
/* let ac=parseInt(prompt("enter the marks of account : "));
let state=parseInt(prompt("enter the marks of state : "));
let ba=parseInt(prompt("enter the marks of ba : "));
let eco=parseInt(prompt("enter the marks of eco : "));
let eng=parseInt(prompt("enter the marks of english : "));
let total=ac+state+ba+eco+eng;
console.log("Total of 5 subject : ",total);
let avg=total/5;
console.log("average of 5 subject : ",avg);
let per=(total/500)*100;
console.log("percentage is ",per); */

//Array with price of 5 items.all item have 10% OFF on them change the array to final price after applying offer.
/* let item=[250,645,300,900,50];
for(let i=0;i<item.length;i++){
    offer=item[i]/10;
    item[i]-=offer;
}
console.log(item); */

//given array of numbers print the square of each value using the forEach loop.
/* let number=[2,3,4,5];
number.forEach((val)=>{
    console.log(val*val);
});
 */

//map method in array
/* let arr=[2,3,4,5,6];
let newarr=arr.map((val)=>{
    return val*2;
});
console.log(newarr); */

//filter method in array
/* let arr=[1,2,3,4,5,6,7,8,9,10];
let newarr=arr.filter((val)=>{
    return val%2==0;
});
console.log(newarr); */

//reduce method in array
/* let arr=[1,2,3,4,5];
let output=arr.reduce((preval,currval)=>{
    return preval+currval;
});
console.log(output); */

// practice question :- the a number n as input from user cerate an array of number from 1 to n.
//use the reduce method to calculate sum of all number in the array.
//use the reduce method to calculate product of all number in the array.
/* let n=prompt("enter the number : ");
let arr=[];
for(let i=1;i<=n;i++){
    arr[i-1]=i;
}
console.log(arr);
let sum=arr.reduce((perval,currval)=>{
    return perval+currval;
});
console.log("sum is : ",sum);
let facorial=arr.reduce((perval,currval)=>{
    return perval*currval;
});
console.log(`factorial of 1 to ${n} is : ${facorial}`); */

//DOM manipulation
/* let div=document.querySelector("div");
let val=div.getAttribute("id");
console.log(val);
let setval=div.setAttribute("id","container");
console.log(setval);
div.style.backgroundColor="yellow";
div.style.width="100px";
div.style.height="100px";
div.innerText="this conatin the data";
div.style.textAlign="center"; */

//insert elements
/* let div=document.querySelector("div");
div.style.backgroundColor="yellow";
div.style.width="100px";
div.style.height="100px";
div.innerText=" this conatin the data  ";
div.style.textAlign="center"; 
 */
//create the element using js
/* let newbtn=document.createElement("button");
 newbtn.innerText="click me";
 newbtn.style.backgroundColor="aqua";
 newbtn.style.color="red";
 document.querySelector("div").append(newbtn);
 //document.querySelector("div").prepend(newbtn);
 //document.querySelector("div").before(newbtn);
 //document.querySelector("div").after(newbtn); */
