$(document).ready(function(){
  const typedValueArray = [];
  const typedValueElement = document.getElementById('typed-value');

  //push typed value into array after each click
  $('#add-item').on('click', function(event) {
    event.preventDefault();
    typedValueArray.push(typedValueElement.value);
    console.log(typedValueArray);
    //clear input field
    typedValueElement.value = '';
    let text = "";
    //append array elements to a list
    for (let i = 0; i < typedValueArray.length; i++) {
      text += "<li>" + typedValueArray[i] + "</li>";
      }
    document.getElementById("form-output").innerHTML = text;
    $('#form-output').show();
    });
  });
