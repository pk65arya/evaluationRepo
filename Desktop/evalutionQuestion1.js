
let product1=
{
  "id": 1,               
  "customerName": 'pkKumar',     
  "items": [{'name':'phone','price':5000,'quantity':1}],  
  "status": 'pending',           
  "createdAt":Date.now()         
}

function createOrderManager(){
  let orderObj=[];
  return{
    addOrder(order){
        orderObj.push(order);
        
    },
    
    updateOrder(Id,data){
      let index=orderObj.forEach((ele,i)=>{
        if(ele.id===Id){
          return i;
        }else{
          return -1;
        }
      });
      
      if(index==-1){
        console.log(`invalid product`)
      }else{
        orderObj[index]={...orderObj[index],...data};
        console.log(`order update successfully`)
        
      }
    },
    
    fillterOrder(status){
      let ans=orderObj.filter((ele)=>{
        return ele.status===status;
      });
      if(ans.length==0){
        return `no item ${status}`;
      }
      return JSON.stringify(ans);
    },
    
    sortOrder(by){
      if(by==='Date'){
        let ans=orderObj.sort((a,b)=>{
          return a.localeCompare(b);
        })
      }else if(by=='status'){
        let ans=orderObj.sort((a,b)=>{
          return a.localeCompare(b);
        })
      }else{
          console.log("erroe");
        }
    },
    
    getTotalRevenue(){
      return orderObj.reduce((a,b)=>{
            return a+ b.items.reduce((sum,item)=> sum+item.price*item.quantity,0);
         
           
    
             },0)
             
      
    },
    
    exportOrder(){
      return JSON.stringify(orderObj);
    }
  }
}

let orderProcess=createOrderManager();

orderProcess.addOrder(product1);
console.log(orderProcess.fillterOrder('pending'));

console.log(orderProcess.getTotalRevenue());
console.log(orderProcess.exportOrder());



