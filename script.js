window.onload = function() {
    let profilePic = document.getElementById('profile-pic');
    profilePic.style.transition = "all 2s";  // Durée de l'animation

    // Appliquer une animation de zoom
    profilePic.style.transform = "scale(1)"; // Taille initiale

    // Délai pour que l'image apparaisse avec effet
    setTimeout(function() {
        profilePic.style.transform = "scale(1.2)"; // Zoom avant
    }, 500);
};
