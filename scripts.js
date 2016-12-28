// When page is fully loaded...
window.onload = function() {

    // Marks player turn
    var markType = 1;

    // All elements with '.box' class
    var allBoxes = document.getElementsByClassName('box');

    // Makes element border visible and expands width
    for (var i = 0; i < allBoxes.length; i++) {

        allBoxes[i].style.borderColor = '#DFE0B3';
        allBoxes[i].style.width = '8em';
    } // ends i for-loop

    //-----------------------------------------------------

    // Add click-listener on '.markBox' elements

    // All elements with '.markBox' class
    var markBoxes = document.getElementsByClassName('markBox');

    // Adds click-listener to '.markBox' elements
    for (var j = 0; j < markBoxes.length; j++) {

        markBoxes[j].addEventListener('click', function() {

            switch(markType) {
                case 1:
                    this.className += ' greenX';
                    markType = 2;
                    break;
                case 2:
                    this.className += ' blueO';
                    markType = 1;
            } // ends switch
        }); // ends click-function
    } // ends j for-loop


} // END ALL
