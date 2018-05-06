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
        choice = $( this ).text();
      });
      //inside of each tr, look for the flag listed, and do something
      var counter = 0;
      $('#pending > tbody > tr').each(function(){
        $(this).find('td').each(function() {
          var cell = $(this).text();
          cell = $.trim(cell);
          console.log(cell + choice);
          if(cell === choice){
            alert("match found");
            $(this).closest('tr').css("background","blue");
          }
        });
      });
    }
  );
});
