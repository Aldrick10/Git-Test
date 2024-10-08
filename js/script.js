// Sélectionner tous les boutons avec la classe 'likeButton'
var likeButtons = document.querySelectorAll('.likeButton');

likeButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        var likeIcon = button.querySelector('.likeIcon');
        var likeText = button.querySelector('.likeText');

        if (likeText.style.color === 'blue') {
            // Revenir à l'état initial (noire)
            likeIcon.src = './img/miniature_unlike.png'; // Image de pouce gris
            likeText.style.color = 'black';
        } else {
            // Passer à l'état "aimé" (bleu)
            likeIcon.src = './img/miniature_like.png'; // Image de pouce bleu
            likeText.style.color = 'blue';
        }
    });
});
