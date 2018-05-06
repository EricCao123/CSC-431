/*
//  Initialize display
*/

$(function(){
  $('#pending').css('display','block');
});

$(function(){
  
  $(".options").change(
    //when .options changes
    function(){
      //run the function
      var choice = "";
      //for each selected value, read the selection and add them to the string choices
      $( "select option:selected" ).each(function() {
        choice += $( this ).text();
      });
      //inside of each tr, look for the flag listed, and do something
      $('#pending > tbody > tr').each(function(){
        $(this).find('td').each(function() {
          if($(this).text() == choice){
            $(this).closest().css("background","blue");
          }
        });
      });
    }
  );
});
