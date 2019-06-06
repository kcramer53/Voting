$(document).ready(function() {
  var age = parseInt(prompt("Please state your age"));
  // var over18 = confirm ("are you over 18? If yes, please proceed or click cancel for no.")

  if (age > 18) {
    $('#voter').show();
  } else if (age === 18) {
    alert("Make your vote count!");
    $('#voter').show();
  } else {
    $('#under-18').show();
  }
});
