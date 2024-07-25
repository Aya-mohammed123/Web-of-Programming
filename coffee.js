function validateForm() {
    var x = document.forms["myform"]["username"].value;
    if (x =="") {
    alert("please,fill the field of username");
    return false;
    }
}

function validateForm()
    {
    var x = document.forms["myform"]["password"].value;
    if (x =="") 
    {
    alert("please,fill the field of password");
    return false;
    }
}

function myfunction() {
    console.log("Button clicked!");
    window.location.href = "Untitled-1.html";
  }