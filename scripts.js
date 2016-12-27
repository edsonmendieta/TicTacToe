// When page is fully loaded...
window.onload = function() {

    var allBoxes = document.getElementsByClassName('box');

    for (var i = 0; i < allBoxes.length; i++) {

        allBoxes[i].style.borderColor = '#DFE0B3';
        allBoxes[i].style.width = '8em';
    }
}
