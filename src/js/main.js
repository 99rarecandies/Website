//        first_name+last_name
$( document ).ready(function() {
    function myfunction() {
        var first_name = document.getElementById("first_name").value;
        var last_name = document.getElementById("last_name").value;
        document.getElementById("full_name").innerHTML = first_name + " " + last_name;
    }
});
