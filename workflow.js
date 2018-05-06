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
        choices += $( this ).text() + " ";
      });
      //split choices up, if need be, and read the values, only displaying tr's that have a 'flag' of the choices listed.
    }
  );
});
