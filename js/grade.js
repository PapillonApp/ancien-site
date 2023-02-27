const urlParams = new URLSearchParams(window.location.search);
const data = atob(urlParams.get('g')).split('$');

// set timeout to remove loading screen
setTimeout(function () {
    document.getElementById('loading').style.display = 'none';
}, 1000);