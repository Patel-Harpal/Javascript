//callback      --------------------------------------------------------------------
/* function sum(a,b){
    console.log("Sum is:",(a+b));
}
function calculator(a,b,sumcallback){
    sumcallback(a,b);
}
calculator(1,2,sum); */

//callback hell --------------------------------------------------------------------
/* function getdata(dataid,getnextdata){
    setTimeout(()=>{
        console.log("data ",dataid);
        if(getnextdata){
            getnextdata();
        }
    },2000);
}
getdata(1,
    ()=>{
        getdata(2,
            ()=>{
                getdata(3,
                    ()=>{
                    getdata(4);
            });
        });
    }
); */
//promise     --------------------------------------------------------------------
/* const getpromise = () => {
  return new Promise((resolve, reject) => {
    console.log("i am promise");
    resolve("success");
  });
};

let promis = getpromise();
promis.then((res) => {
  console.log(res);
  console.log(promis);
}); */
//promise chain --------------------------------------------------------------------
/* function getdata(dataid) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data ", dataid);
      resolve("sucess");
    }, 2000);
  });
}
getdata(1)
  .then((res) => {
    return getdata(2);
  })
  .then((res) => {
    return getdata(3);
  })
  .then((res) => {
    return getdata(4);
  }); */
//Async-Await  ---------------------------------------------------------------------
/* function getdata(dataid) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data ", dataid);
      resolve("sucess");
    }, 3000);
  });
}
(async function getalldata() {
  console.log("getting data1....");
  await getdata(1);
  console.log("getting data2....");
  await getdata(2);
  console.log("getting data3....");
  await getdata(3);
  console.log("getting data4....");
  await getdata(4);
})();
 */
