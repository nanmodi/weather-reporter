let api='79e553cd6220ca34234c358560c1570e';

let text=document.querySelector(".text");
let searchbtn=document.querySelector(".btn");
let mainic=document.querySelector(".ic");
let temp=document.querySelector(".temp");
let city=document.querySelector(".city");
let wind=document.querySelector('.w');
let humid=document.querySelector('.h');
let weath=document.querySelector('.weather');
let tempicon=['snow.png','mist.png','rain.png','drizzle.png','clear.png','clouds.png']
async function info()
{
  let value=text.value;
  console.log(value);
  let out= await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${value}&appid=${api}`);
  let outjs=await out.json();
  let t=outjs.main.temp;
  let ci=outjs.name;
  temp.innerText=t+'°C';
  city.innerText=ci;
  wind.innerText=outjs.wind.speed+'km/hr';
  humid.innerText=outjs.main.humidity+'%';
  if(outjs.weather[0].main=='Snow')
  {

    mainic.src=tempicon[0];
    
  }
  if(outjs.weather[0].main=='Mist')
  {

    mainic.src=tempicon[1];
    
  }
  if(outjs.weather[0].main=='Rain')
  {

    mainic.src=tempicon[2];
    
  }
  if(outjs.weather[0].main=='Drizzle')
  {

    mainic.src=tempicon[3];
    
  }
  if(outjs.weather[0].main=='Clear')
  {

    mainic.src=tempicon[4];
    
  }
  if(outjs.weather[0].main=='Clouds')
  {

    mainic.src=tempicon[5];
    
  }
  
weath.style.display='block';
  console.log(outjs);
}
searchbtn.addEventListener("click",info);