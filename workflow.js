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
      var choices = "";
      //for each selected value, read the selection and add them to the string choices
      $( "select option:selected" ).each(function() {
        choice += $( this ).text();
      });
      //inside of each tr, look for the flag listed, and do something
      $('tr').each(function(){
        $(this).find('td').each(function() {
          if($(this).text() == choice){
            
          }
        });
      });
      //split choices up, if need be, and read the values, only displaying tr's that have a 'flag' of the choices listed.
    }
  );
});
