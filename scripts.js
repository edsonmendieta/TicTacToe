// When page is fully loaded...
window.onload = function() {

    var allBoxes = document.getElementsByClassName('box');

    for (var i = 0; i < allBoxes.length; i++) {

        allBoxes[i].style.borderColor = '#DFE0B3';
        allBoxes[i].style.width = '8em';
    } // ends i for-loop

    //-----------------------------------------------------

    // Add click-listener on '.markBox' elements

    var markBoxes = document.getElementsByClassName('markBox');

    for (var j = 0; j < markBoxes.length; j++) {

        markBoxes[j].addEventListener('click', function() {

            this.className += ' newClass';
        });
    } // ends j for-loop

}
