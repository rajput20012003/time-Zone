//const address=document.querySelector(".add")
let container=document.querySelector(".container1");

let timezone=document.querySelector(".timezone");
let lat=document.querySelector(".lat");
let long=document.querySelector(".long");
let offset_std=document.querySelector(".offset_std");
let offset_std_sec=document.querySelector(".offset_std_sec");
let offset_dst=document.querySelector(".offset_dst");
let offset_dst_sec=document.querySelector(".offset_dst_sec");
let country=document.querySelector(".country");
let postcode=document.querySelector(".postcode");
let city=document.querySelector(".city");

let timezone1=document.querySelector(".timezone1");
let lat1=document.querySelector(".lat1");
let long1=document.querySelector(".long1");
let offset_std1=document.querySelector(".offset_std1");
let offset_std_sec1=document.querySelector(".offset_std_sec1");
let offset_dst1=document.querySelector(".offset_dst1");
let offset_dst_sec1=document.querySelector(".offset_dst_sec1");
let country1=document.querySelector(".country1");
let postcode1=document.querySelector(".postcode1");
let city1=document.querySelector(".city1");

// const lat=46.73917926727481;
// const lon=2.3276588684885837;

fetch("https://api.geoapify.com/v1/geocode/reverse?lat=25.599304852883094&lon=85.18710881063907&format=json&apiKey=8087ccd5ee3c4f5daf93d6a770d08930")
  .then(response => response.json())
  .then(result =>{
      console.log(result.results[0])
       timezone.innerText=result.results[0].timezone.name;
       lat.innerText=result.results[0].lat;
       long.innerText=result.results[0].lon;
       offset_std.innerText=result.results[0].timezone.offset_STD;
       offset_std_sec.innerText=result.results[0].timezone.offset_STD_seconds;
       offset_dst.innerText=result.results[0].timezone.offset_DST;
       offset_dst_sec.innerText=result.results[0].timezone.offset_DST_seconds;
       country.innerText=result.results[0].country;
       postcode.innerText=result.results[0].postcode;
       city.innerText=result.results[0].city;
  })
  .catch(error => console.log('error', error));

   function show(){
    // Get the input element by its ID 
    let inputField = document.getElementById("myInput"); 
    let body=document.querySelector(".black")
          
    // Get the value of the input field 
    let value = inputField.value; 

    if(value==""){
        container.style.display="none"; 
        let div=document.createElement("p");
        div.innerText="Please Enter Address";
        div.style.color="red";
        body.append(div);
    }else{
     fetch(`https://api.geoapify.com/v1/geocode/search?text=${value + " "}&format=json&apiKey=8087ccd5ee3c4f5daf93d6a770d08930`)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        timezone1.innerText=result.results[0].timezone.name;
       lat1.innerText=result.results[0].lat;
       long1.innerText=result.results[0].lon;
       offset_std1.innerText=result.results[0].timezone.offset_STD;
       offset_std_sec1.innerText=result.results[0].timezone.offset_STD_seconds;
       offset_dst1.innerText=result.results[0].timezone.offset_DST;
       offset_dst_sec1.innerText=result.results[0].timezone.offset_DST_seconds;
       country1.innerText=result.results[0].country;
       postcode1.innerText=result.results[0].postcode;
       city1.innerText=result.results[0].city;
    })
      .catch(error => console.log('error', error));
      container.style.display="contents";}

   }