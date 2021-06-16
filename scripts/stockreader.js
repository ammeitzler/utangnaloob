$(document).ready(function(){

  const wrapper = document.getElementById("wrapper");
  const colors = ["color1", "color2", "color3", "color4"]
  let n = 8;
  let json_data = [];

  function fillBoard(selected){
    selected.forEach(function(item) {
        //author
        let newSpan_author = document.createElement("span");
        newSpan_author.classList.add("author");
        newSpan_author.innerHTML = item.author + ":";
        const color = colors[Math.floor(Math.random()*colors.length)];
        newSpan_author.classList.add(color);
        //comment
        let newSpan_comment = document.createElement("span");
        newSpan_comment.classList.add("comment");
        newSpan_comment.innerHTML = item.text;

        let newDiv = document.createElement("div");
        newDiv.classList.add("box")
        newDiv.appendChild(newSpan_author);
        newDiv.appendChild(newSpan_comment);
        wrapper.appendChild(newDiv);
    });
    wrapper.scrollTop = wrapper.scrollHeight;
    updateBoard();
  }
  
  function getText(n) {
    $.getJSON("../data/data.json", function(data){
      console.log(data);
      json_data = data;
      // Shuffle array
      const shuffled = json_data.sort(() => 0.5 - Math.random());
      // Get sub-array of first n elements after shuffled
      let selected = shuffled.slice(0, n);
      fillBoard(selected)
    }).fail(function(){
        console.log("An error has occurred.");
    });
  }

  getText(n)


  function getIndividualText(n) {
    const shuffled = json_data.sort(() => 0.5 - Math.random());
    let selected = shuffled.slice(0, n);
    if(selected) {
      // console.log(selected)
      //author
      let newSpan_author = document.createElement("span");
      newSpan_author.classList.add("author");
      newSpan_author.innerHTML = selected[0].author + ":";
      const color = colors[Math.floor(Math.random()*colors.length)];
        newSpan_author.classList.add(color);
      //comment
      let newSpan_comment = document.createElement("span");
      newSpan_comment.classList.add("comment");
      newSpan_comment.innerHTML = selected[0].text

      let newDiv = document.createElement("div");
      newDiv.classList.add("box")
      newDiv.appendChild(newSpan_author);
      newDiv.appendChild(newSpan_comment);
      wrapper.appendChild(newDiv);
    }
  }

  function updateBoard() {
    n = 1;
    getIndividualText(n);
    setTimeout(updateBoard, 2000);
    // setTimeout(updateBoard, 4000);
    //updateScroll
    wrapper.scrollTop = wrapper.scrollHeight;
  }

})

