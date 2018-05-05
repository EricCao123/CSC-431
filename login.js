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
        //NEW CODE
        var account = new Object();
        account.username = data[0];
        account.password = data[1];
        //
        $.get( "ec2-18-220-98-102.us-east-2.compute.amazonaws.com/login.php", data , null )
            .done(function() {
                alert( "success" );
            })
            .fail(function() {
                alert( "error" );
            });
    });
});

$(function() {
    $("#registerForm").submit(function() {
        var data = $(this).serialize().split("&");
        //encrypt(data);
        $.post( "ec2-18-220-98-102.us-east-2.compute.amazonaws.com/register.php", data )
            .done(function() {
                alert( "success" );
            })
            .fail(function() {
                alert( "error" );
            });
    });
});
        
function encrypt(data){
    var account = new Object();
    account.username = data[0];
    account.password = data[1];
    //be able to encrypt here, CryptoJS seems like a library to consider
}
