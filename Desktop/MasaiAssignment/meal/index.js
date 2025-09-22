const input=document.getElementById("input");
const searchBtn=document.getElementById("searchbtn");
const result=document.getElementById("result"); 



async function renderdata(query){
  result.innerHTML="";
  try {
    const res=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${query}`);
    const data=await res.json();

data.meals.forEach((ele)=>{
  const div=document.createElement('div');
div.className="card";
  div.innerHTML=`
  <div>
  <img src="${ele.strMealThumb}" alt="${ele.strMeal}" width="180px">
  <p><strong>${ele.strMeal}</strong></p>
  <p><strong>${ele.strCategory}</strong></p>
  <p><strong>${ele.strArea}</strong></p>
  </div>

  `
  result.appendChild(div);
})
    
  } catch (error) {
    console.log(error.message);
  }
}


searchBtn.addEventListener("click",()=>{
  setTimeout(()=>{
    renderdata(input.value);
  });

  },1000)
window.addEventListener("DOMContentLoaded",renderdata("a"));
