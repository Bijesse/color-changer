var colors = ["cyan", "aliceblue", "darkmagenta", "gold", "azure", "green", "moccasin"];

var index = 0;

$( document ).ready(function() 
{
    $('#button').click(function change(){
  
  if(index == colors.length) {
    index = 0;
  }
  

    $("body").css("background-color", colors[index]);
  //console.log(colors[index]);
  
  index++;
});

});
