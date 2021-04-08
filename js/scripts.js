$(document).ready(function(){
  let typedValueArray = [];
  let capitalizedItemsArray = [];
  const typedValueElement = document.getElementById('typed-value');

  //push inputted typed value into array after each click
  $('#add-item').on('click', function(event) {
    event.preventDefault();
    $('#typed-value').each(function() {
      typedValueArray.push(typedValueElement.value);
      //clear input field and log array to console
      typedValueElement.value = '';
      console.log(typedValueArray);
    });
    //capitalize each element and add to new array
    typedValueArray.forEach(function(element) {
    let elementToUpperCase = element.toUpperCase();
    capitalizedItemsArray.push(elementToUpperCase);
    });
  });
  //make every element uppercase and push to new array
  $('#compile-list').on('click', function(event) {
    //list capitalized array elements on page
    for (let i = 0; i < capitalizedItemsArray.length -1; i++) {
      $('#form-output').text(`Item: ${capitalizedItemsArray[i]}, `);
    };
    $('#form-output').show();

  });
})


