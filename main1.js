function validateForm() {
    var x = document.forms["contact"]["firstname"].value;
    var z = document.forms["contact"]["lastname"].value;
    var y = document.forms["contact"]["subject"].value;

    if (x == "" || z == "" || y == "") {
        alert("Please fill in all the required fields");
        return false;
    }
}

//subscribe
function validate()
    {
    var x = document.forms["subscribe"]["gmail"].value;
    if (x =="") 
    {
    alert("please,fill the field of Email");
    return false;
    }
}
function myrating()
    {
        window.alert("Thanks for your Rating!");
        
        
    }


