// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

$(function() {
    $("#loginForm").submit(function() {
        var data = $(this).serialize().split("&");
        $.get( "ec2-18-220-98-102.us-east-2.compute.amazonaws.com/login.php", data , null )
        .done(
            alert( "success" );
        )
        .fail( 
            alert( "error" );
        )
    });
});

$(function() {
    $("#registerForm").submit(function() {
        var data = $(this).serialize().split("&");
        $.post( "ec2-18-220-98-102.us-east-2.compute.amazonaws.com/register.php", data );
        alert("Account Registered!");
    });
});
        
