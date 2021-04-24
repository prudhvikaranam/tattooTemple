document.onreadystatechange = function() {
  if (document.readyState !== "complete") {
      document.querySelector("body").style.visibility = "hidden";
      document.querySelector("#loader").style.visibility = "visible";
  } else {
      document.querySelector("#loader").style.display = "none";
      document.querySelector("body").style.visibility = "visible";
  }
};


(function(){
  let backGroundImages = ['./assets/background.jpg','./assets/background1.jpg','./assets/background2.jpg']
  let i = 0;
  setInterval(() => {
      if(i < backGroundImages.length){
        console.log();
        document.getElementById('landingContainer').style.backgroundImage =  'url(' + backGroundImages[i] + ')';
        i++;
      }else{
        i = 0;
      }
  }, 5000);
})();


function studioName(element, speed) {
  let text = element.innerHTML;
  element.innerHTML = "";
  var i = 0;
  let timer = setInterval(function () {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
      const name = document.getElementById("name");
      studioQuote(name, 0);
    }
  }, speed);
}

const h1 = document.getElementById("h1");

studioName(h1, 50);

function studioQuote(element, speed) {
  let text = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
  element.innerHTML = "";
  var i = 0;
  let timer = setInterval(function () {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}


