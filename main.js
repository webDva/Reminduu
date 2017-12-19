function displayThanks(event) {
    if (event.keyCode == 13) {
        document.getElementById("message").innerHTML = "Thanks, baka, I'll remind you.";
        return false;
    } 
    else {
        return true;
    }
}