//archive
const archive = document.querySelector("#screenshots .shot_container");
const row1 = document.querySelector("#screenshots .shot_container .row1");
const folder = "../assets/grabs/";


$.ajax({
  url : folder,
  success: function (data, i) {
    $(data).find("a").attr("href", function (i, val) {
      if( val.match(/\.(jpe?g|png|gif)$/) ) { 
        $(archive).append(( "<img src='"+ folder + val +"'>" ));
      } 
    });
  }
});
