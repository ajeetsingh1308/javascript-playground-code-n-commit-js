const form = document.querySelector('form')

//Printing these line fo code will send empty value, thefore we put in a function which is performend on some event.

  // const height = parseInt(document.querySelector('#height').value);
  // const weight = parseInt(document.querySelector('#weight').value);

form.addEventListener('submit', function(e){
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');
  const bmiWeightGuide = document.querySelector('#bmi-weight-guide');

  if(height === ''|| height < 0 || isNaN(height)){
    result.innerHTML = `Please give a valid height ${height}`

  }else if(weight === ''|| weight < 0 || isNaN(weight)){
    result.innerHTML = `Please give a valid weight ${weight}`
  }else{
    const bmi = (weight / ((height * height) / 10000));
    result.innerHTML = `<span>${bmi.toFixed(2)}</span>`;

    if(bmi< 18.6){
      bmiWeightGuide.innerHTML = `Under Weight `;

    }else if(bmi >= 18.6 && bmi <=24.9){
      bmiWeightGuide.innerHTML = `Normal Range`;

    }else{
      bmiWeightGuide.innerHTML = `Overweight`;

    }

  }
});
