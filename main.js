 function toggleMode() {
    var body = document.getElementById("mode"); 
    
        body.style.backgroundColor = "#000"; // Set the background color for dark mode
     
      
    
}
function lightMode()
{
    var body = document.getElementById("mode"); 
    
        body.style.backgroundColor = "#FFF"; // Set the background color for light mode
       
    
}
function showMessageShop(event) {
    event.preventDefault();
    var msgElement = document.createElement('div');
    msgElement.textContent = 'Welcome To our Coffee Shop';
    msgElement.style.position = 'fixed';
    msgElement.style.top = '10px';
    msgElement.style.left = '50%';
    msgElement.style.transform = 'translateX(-50%)';
    msgElement.style.background = '#c7a17a';
    msgElement.style.color = 'white';
    msgElement.style.padding = '15px';
    msgElement.style.borderRadius = '5px';
    document.body.appendChild(msgElement);

    setTimeout(function () {
        document.body.removeChild(msgElement); //div part of the visible content on the webpage
    }, 2000);
}
 
function showMessage(event) {
    event.preventDefault();
    var msgElement = document.createElement('div');
    msgElement.textContent = 'Item added successfully!';
    msgElement.style.position = 'fixed';
    msgElement.style.top = '10px';
    msgElement.style.left = '50%';
    msgElement.style.transform = 'translateX(-50%)';
    msgElement.style.background = '#c7a17a';
    msgElement.style.color = 'white';
    msgElement.style.padding = '15px';
    msgElement.style.borderRadius = '5px';
    document.body.appendChild(msgElement);

    setTimeout(function () {
        document.body.removeChild(msgElement);
    }, 2000);
}
 //noha
 function showitemMessage(event) {
    event.preventDefault();
    var msgElement = document.createElement('div');
    msgElement.textContent = 'Item exist already';
    msgElement.style.position = 'fixed';
    msgElement.style.top = '10px';
    msgElement.style.left = '50%';
    msgElement.style.transform = 'translateX(-50%)';
    msgElement.style.background = '#c7a17a';
    msgElement.style.color = 'white';
    msgElement.style.padding = '15px';
    msgElement.style.borderRadius = '5px';
    document.body.appendChild(msgElement);

    setTimeout(function () {
        document.body.removeChild(msgElement);
    }, 2000);

}

function shownotexititemMessage(event) {
    event.preventDefault();
    var msgElement = document.createElement('div');
    msgElement.textContent = 'Item not exist yet';
    msgElement.style.position = 'fixed';
    msgElement.style.top = '10px';
    msgElement.style.left = '50%';
    msgElement.style.transform = 'translateX(-50%)';
    msgElement.style.background = '#c7a17a';
    msgElement.style.color = 'white';
    msgElement.style.padding = '15px';
    msgElement.style.borderRadius = '5px';
    document.body.appendChild(msgElement);

    setTimeout(function () {
        document.body.removeChild(msgElement);
    }, 2000);}
    
function openwin()
{
window.open("Untitled-1.html");
}