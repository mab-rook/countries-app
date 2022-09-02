let searchBtn = document.querySelector('#search_btn')
let countryInp = document.querySelector('#country_inp')
let result = document.querySelector('#result')
searchBtn.addEventListener("click", () => {
  let countryName = countryInp.value;
  let finalURL = axios.get(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
    .then(res => {
      console.log(res.data)
      result.innerHTML = `
      <img src="${res.data[0].flags.svg}" class="flag-img">
      <h2>${res.data[0].name.common}</h2>
      <div class="wrapper">
        <div class="data-wrapper">
          <h4>capital:</h4>
          <span>${res.data[0].capital[0]}</span>
        </div>
      </div>
      <div class="wrapper">
        <div class="data-wrapper">
          <h4>continent:</h4>
          <span>${res.data[0].continents[0]}</span>
        </div>
      </div>
      <div class="wrapper">
        <div class="data-wrapper">
          <h4>population:</h4>
          <span>${res.data[0].population}</span>
        </div>
      </div>
      <div class="wrapper">
        <div class="data-wrapper">
          <h4>currency:</h4>
          <span>${res.data[0].currencies[Object.keys(res.data[0].currencies)].name} - ${Object.keys(res.data[0].currencies)[0]}</span>
        </div>
      </div>
      <div class="wrapper">
        <div class="data-wrapper">
          <h4>common languages:</h4>
          <span>${Object.values(res.data[0].languages).toString().split(',').join(', ')} </span>
        </div>
      </div>`
      
    })
  
  // fetch(finalURL)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data[0])
  //     console.log(data[0].capital[0])
  //     console.log(data[0].flags.svg)
  //     console.log(data[0].name.common)
  //     console.log(data[0].continents[0])
  //     console.log(Object.keys(data[0].currencies)[0])
  //     console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
  //     console.log(Object.values(data[0].languages).toString().split(',').join(', '))
  //     result.innerHTML = `
      //     <img src="${data[0].flags.svg}" class="flag-img">
      //     <h2>${data[0].name.common}</h2>
      //     <div class="wrapper">
      //       <div class="data-wrapper">
      //         <h4>capital:</h4>
      //         <span>${data[0].capital[0]}</span>
      //       </div>
      //     </div>
      //     <div class="wrapper">
      //       <div class="data-wrapper">
      //         <h4>continent:</h4>
      //         <span>${data[0].continents[0]}</span>
      //       </div>
      //     </div>
      //     <div class="wrapper">
      //       <div class="data-wrapper">
      //         <h4>population:</h4>
      //         <span>${data[0].population}</span>
      //       </div>
      //     </div>
      //     <div class="wrapper">
      //       <div class="data-wrapper">
      //         <h4>currency:</h4>
      //         <span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)[0] }</span>
      //       </div>
      //     </div>
      //     <div class="wrapper">
      //       <div class="data-wrapper">
      //         <h4>common languages:</h4>
      //         <span>${Object.values(data[0].languages).toString().split(',').join(', ')} </span>
      //       </div>
      //     </div>
      //     `
      //   })
      //   .catch(e => {
      //     if (countryName.length == 0) {
      //       result.innerHTML = `<h3>the input field cannot be empty</h3>
        
      //       `
      //     } else {
      //       result.innerHTML = `<h3>please enter a valid country name.</h3>`
      //     }
      //     console.log(e)
      //   })
  
    })