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
        alert(data);
        return false;
    });
});
