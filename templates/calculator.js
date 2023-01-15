document.getElementById('calculator-form').addEventListener('submit', function(e) {
  e.preventDefault();  // Prevent the form from being submitted

  // Get the values of the form inputs
  var x = document.getElementById('x').value;
  var y = document.getElementById('y').value;
  var op = document.getElementById('op').value;

  // Call the calculate function and store the result
  var result = calculate(x, y, op);

  // Display the result in the result div element
  document.getElementById('result').innerHTML = result;
});
