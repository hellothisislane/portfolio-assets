$(function () { 
  count = 0; 
  wordsArray = ["an Illustrator", "an enigma", "a UX Designer", "not like the other girls"]; 
  setInterval(function () { 
    count++; 
    $("#word").fadeOut(0, function () { 
      $(this).text(wordsArray[count % wordsArray.length]).fadeIn(0); 
    }); 
  }, 1000); 
}); 
