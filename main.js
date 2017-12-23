if (storageAvailable('localStorage')) {
  // Yippee! We can use localStorage awesomeness
}
else {
  // Too bad, no localStorage for us
}

if(localStorage.getItem('reminder')) {
    document.getElementById('usersReminder').value = localStorage.getItem('reminder');
}

function displayThanks(event) {
    if (event.keyCode == 13) {
        remember();
        return false;
    } 
    else {
        return true;
    }
}

function remember() {
    localStorage.setItem('reminder', document.getElementById('usersReminder').value);
    document.getElementById("message").innerHTML = "📓 Thanks, baka, I'll remind you the next time you visit this page. 📓";    
}

function storageAvailable(type) {
    try {
        var storage = window[type],
            x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage.length !== 0;
    }
}