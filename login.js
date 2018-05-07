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
        //Email, Password
        $.get( "http://ec2-18-220-98-102.us-east-2.compute.amazonaws.com/login.php", data , null )
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
        var temp = "ec2-18-220-98-102.us-east-2.compute.amazonaws.com/register.php";
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();

        if(dd<10) {
           dd = '0'+dd
        } 

        if(mm<10) {
            mm = '0'+mm
        } 

        today = mm + '-' + dd + '-' + yyyy;
        var temp2 = "&registerDate=";
        temp = temp.concat(temp2);
        var url = temp.concat(today);
        alert(url);
        //encrypt(data);
        //Name, Email, Role, RegisterDate, Password
        $.post( url, data )
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
