//archive
const archive = document.querySelector("#screenshots .shot_container");
const row1 = document.querySelector("#screenshots .shot_container .row1");
const folder = "assets/grabs/";

console.log(folder, "123")

$.ajax({
  url : folder,
  success: function (data, i) {
    $(data).find("a").attr("href", function (i, val) {
      if( val.match(/\.(jpe?g|png|gif)$/) ) { 
        // if(i < 3) {
        //   $(row1).append(( "<img src='"+ folder + val +"'>" ));
        // } else {
        //   $(archive).append(( "<img src='"+ folder + val +"'>" ));
        // }
        $(archive).append(( "<img src='"+ folder + val +"'>" ));
      } 
    });
  }
});
