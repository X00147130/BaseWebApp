
function myFunction() {
  // use jQuery ($ is shorthand) to find the div on the page and then change the html
  // jQuery can do a lot of crazy stuff so make sure to google around to find out more

  $("#demo").html("#Maldonado is King");

  // 'img-circle' is a bootstrap thing! Check out more here: http://getbootstrap.com/css/
  $("#pastor-image").append(`<img class="img" src="images/pastor.jpg" />`);
  $("#maldonado-image").append(`<img class="img" src="images/maldonado.jpg" />`);
}

