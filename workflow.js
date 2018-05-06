/*
//  Initialize display
*/

$(function(){
  $('#pending').css('display','block');
});

$(function(){
  //when .options changes, read the value.
  $(".options").change(
    function(){
      alert($(this).text());
    }
  );
});
