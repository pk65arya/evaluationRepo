const input=document.getElementById("input");
const searchBtn=document.getElementById("searchbtn");
const result=document.getElementById("result"); 

let ans=[];
searchBtn.addEventListener("click",()=>render(input.value));

async function render(query){

  try {
   const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    if(!res.ok){
      throw new Error("error");
    }

    const data=await res.json();
     console.log(data.meals[0].strMeal);
  } catch (error) {
    return error.message;
  }
}