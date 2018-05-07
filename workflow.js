/*
//  Initialize display
*/

$(function(){
  $('#pending').css('display','block');
});


/*
// When the options dropdown changes, read the selection that was given and make that the choice.
// Then, scrub inside each tr element and look within each td provided to find the cell that matches the choice
*/
$(function(){
  $(".options").change(
    function(){
      var choice = "";
      $( "select option:selected" ).each(function() {
        choice = $( this ).text();
      });
      //inside of each tr, look for the flag listed, and do something
      $('table tr').not(':first').css("background","white");
      $('#pending > tbody > tr').each(function(){
        $(this).find('td').each(function() {
          var cell = $(this).text();
          cell = $.trim(cell);
          if(cell === choice){
            $(this).closest('tr').css("background","beige");
          }
        });
      });
    }
  );
});

$(function(){
  $('input').click(function(){
    var check = $(this).val();
    $(this).closest('td').addClass('hideElement');
    $(this).closest('tr').children('.flag').text(check);
  });
});
