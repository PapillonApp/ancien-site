// get store link
const download_links = {
    googleplay: "https://play.google.com/store/apps/details?id=plus.pronote.app",
    appstore: "https://apps.apple.com/fr/app/papillon-votre-vie-scolaire/id1662669707",
    github: "https://github.com/PapillonApp/Papillon/releases/latest"
}

function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/huawei/i.test(userAgent)) {
        return "Huawei";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    // macOS detection
    if (navigator.platform.toUpperCase().indexOf('MAC')>=0) {
        return "macOS";
    }

    return "unknown";
}

var os = getMobileOperatingSystem();

if (os == "iOS" || os == "macOS") {
    document.getElementById("download_link").href = download_links.appstore;
    document.getElementById("service").innerText = "depuis l'App Store";
}
else if (os == "Android") {
    document.getElementById("download_link").href = download_links.googleplay;
    document.getElementById("service").innerText = "depuis Google Play";
}
else if (os == "Huawei") {
    document.getElementById("download_link").href = download_links.github;
    document.getElementById("service").innerText = "Télécharger l'APK";
}
else {
    document.getElementById("download_link").href = download_links.github;
    document.getElementById("service").innerText = "depuis GitHub";
}

// get latest version
fetch("https://api.github.com/repos/PapillonApp/Papillon/releases/latest")
    .then(response => response.json())
    .then(data => {
        let version = data.tag_name;
        document.getElementById("version").innerText = "v" + version;
    });

// parallax
var scene = document.getElementById('header_image');
var parallaxInstance = new Parallax(scene);

// scrollreveal
function titleReveal(delay) {
    return { 
        distance: '20px',
        origin: 'bottom',
        opacity: 0,
        duration: 500,
        scale: 0.9,
        delay: delay
    }
}

ScrollReveal().reveal('.title', titleReveal(0));
ScrollReveal().reveal('.description', titleReveal(100));
ScrollReveal().reveal('#download_options', titleReveal(200));

// inner list
// repeat 3x the content of .ENT_inner_list
var inner_list = document.getElementsByClassName("ENT_inner_list");
for (var i = 0; i < inner_list.length; i++) {
    inner_list[i].innerHTML = inner_list[i].innerHTML.repeat(4);
}

// dropdown 
function showDropdown() {
    document.getElementById("more_dropdown_content").classList.toggle("show");
}

// if click outside dropdown, close it
window.onclick = function(event) {
    // check if target is in #more_dropdown_content or #more_dropdown or in an element inside #more_dropdown_content
    if (!event.target.matches('#more_dropdown_content') && !event.target.matches('#more_dropdown') && !event.target.closest('#more_dropdown_content') && !event.target.closest('#more_dropdown')) {
        document.getElementById("more_dropdown_content").classList.remove("show");
    }
}