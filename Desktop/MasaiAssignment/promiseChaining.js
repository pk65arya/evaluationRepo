//Question: Chained Promises for Order Processing

// You are building an order processing system that works in multiple steps. Each step depends on the result of the previous step. Your task is to implement this system using JavaScript Promises where:

// 1️⃣ The first promise fetches the order ID (a 2-digit number).

// 2️⃣ The second promise processes the order using the order ID and returns a 2-digit processing code.

// 3️⃣ The third promise confirms the order using the processing code and returns a 2-digit confirmation number.

// 4️⃣ Finally, another function calculateFinalResult() runs a promise to fetch an additional integer and combines it with the confirmation number to return a final result.

// Requirements:
// ✅ Each step must use a Promise and be dependent on the previous step's result.

// ✅ The final function should return a new promise that resolves to the final result.

// Example Flow:
// placeOrder()
//   .then((orderId) => processOrder(orderId)) 
//   .then((processingCode) => confirmOrder(processingCode))  
//   .then((confirmationNumber) => calculateFinalResult(confirmationNumber))  
//   .then((finalResult) => console.log(`Final Result: ${finalResult}`))  
//   .catch((error) => console.log(`Error: ${error}`));


function fetchOrderId(){
 
  return new Promise((res,rej)=>{
    let orderId=Math.floor(Math.random()*100);
    setTimeout(()=>{
            if(orderId){
              res(orderId)
            }else{
              rej(`invalid orderId.`)
            }
    },2000);
  })
}

function processOrder(orderId){
  return new Promise((res,rej)=>{
    let processingCode=Math.floor(Math.random()*100);
    setTimeout(()=>{
      if(orderId)
        res(processingCode);
      else
      rej(`no orderId found`);
    },1000)
  })
}

function confirmOrder(processingCode){
  return new Promise((res,rej)=>{
    let confirmationNumber=Math.floor(Math.random()*100);
    setTimeout(()=>{
      if(processingCode)
        res(confirmationNumber);
      else
      rej(`invalid procssing code`)
    },1000)
  })
}

function finalResult(confirmationNumber){
  return new Promise((res,rej)=>{
    let extraNumber=Math.floor(Math.random()*100);
    setTimeout(()=>{
        if(confirmationNumber){
          let finalResult=confirmationNumber+extraNumber;
          res({finalResult,extraNumber});
        }else{
          rej('failed')
        }
    },1000)
  })
}





function placeOrder(){
  fetchOrderId()
  .then((orderId)=>{
      console.log(`ORDER ID: ${orderId}`)
    return  processOrder(orderId);
  })
  .then((processingCode)=>{
        console.log(`Processing Code: ${processingCode}`)
      return  confirmOrder(processingCode);
  })
  .then((confirmationNumber)=>{
    console.log(`Confirmation Number: ${confirmationNumber}`)
   return finalResult(confirmationNumber);
  })
  .then(({finalResult,extraNumber})=>{
    console.log(`Extra Number: ${extraNumber}`)
    console.log(`Final result: ${finalResult}`)
  })
  .catch((error)=>{
        console.log(`error: ${error}`);
  })
}

placeOrder();
