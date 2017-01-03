// When page is fully loaded...
window.onload = function() {

    var won = 'no';

    // Turn Count
    var turn = 0;

    // computer chose box?
    var placed = 'no';

    // Win Paths
    var paths = [['row1', 0],['row2', 0],['row3', 0],['col1', 0],['col2', 0],['col3', 0],['diag1', 0],['diag2', 0]];

    // var winPath1 = document.getElementsByClassName(paths[0][0]);
    //
    // for (var w = 0; w < winPath1.length; w++) {
    //
    //     var finalClass = winPath1[w].classList.item(winPath1[w].classList.length - 1);
    //
    //     console.log(finalClass);
    // }


    // Line-win start-point Boxes -------------
        var one1 = document.getElementById('one1');
        var two1 = document.getElementById('two1');
        var three1 = document.getElementById('three1');
        var one2 = document.getElementById('one2');
        var one3 = document.getElementById('one3');
    //-----------------------------------------

    // Line-win box outer-box styles ----------
        var boxStylesWidth = window.getComputedStyle(one1);
        var boxStylesHeight = window.getComputedStyle(one2);
    //-----------------------------------------

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

    // Adds click-listener to 'box' elements
    for (var j = 0; j < markBoxes.length; j++) {

        markBoxes[j].addEventListener('click', function() {

            var lastClass = this.classList.item(this.classList.length - 1);

            // Only execute if box isn't already used.
            if (lastClass !== 'greenX' && (lastClass !== 'blueO' && won == 'no' && (turn % 2 === 0))) {

                turn += 1;

                // ''amount' value' determined by markType
                var amount = 1
                //---------------------------------------
                //'path' updated based on box clicked
                switch(this.parentNode.id) {
                    case 'one1':
                        paths[0][1] += amount; //row1
                        paths[3][1] += amount; //col1
                        paths[6][1] += amount; // diag1
                        break;
                    case 'one2':
                        paths[0][1] += amount; //row1
                        paths[4][1] += amount; //col4
                        break;
                    case 'one3':
                        paths[0][1] += amount; //row1
                        paths[5][1] += amount; //col3
                        paths[7][1] += amount; //diag2
                        break;
                    case 'two1':
                        paths[1][1] += amount; //row2
                        paths[3][1] += amount; //col1
                        break;
                    case 'two2':
                        paths[1][1] += amount; //row2
                        paths[4][1] += amount; //col4
                        paths[6][1] += amount; // diag1
                        paths[7][1] += amount; //diag2
                        break;
                    case 'two3':
                        paths[1][1] += amount; //row2
                        paths[5][1] += amount; //col3
                        break;
                    case 'three1':
                        paths[2][1] += amount; //row3
                        paths[3][1] += amount; //col1
                        paths[7][1] += amount; //diag2
                        break;
                    case 'three2':
                        paths[2][1] += amount; //row3
                        paths[4][1] += amount; //col4
                        break;
                    case 'three3':
                        paths[2][1] += amount; //row3
                        paths[5][1] += amount; //col3
                        paths[6][1] += amount; // diag1
                } //ends switch 1

                // Appends X or O depending on turn----------------

                    this.className += ' greenX';
                    var ex = document.createTextNode('X');
                    this.appendChild(ex);
                //-------------------------------------------------

                // Checks for 'three-in-a-row' (win)
                for (var e = 0; e < paths.length && won == 'no'; e++) {

                    if (paths[e][1] == 3 || paths[e][1] == 15) {

                        won = 'yes';
                        console.log('won!');

                        //where line goes
                        switch(paths[e][0]) {
                            case 'row1':
                                // box where line starts from.
                                var lineStart = document.getElementById('lineR1');

                                // width of box line starts from
                                var width = boxStylesWidth.getPropertyValue('width');
                                console.log(width);

                                // turns above px value into array elements
                                var widthNum = width.split('');
                                console.log(widthNum);

                                // removes 'px' from array
                                widthNum.pop();
                                widthNum.pop();

                                // value is now solely a number w/o 'px'
                                widthNum = widthNum.join('');

                                // makes line the length of win path
                                var lineW = widthNum * 3;
                                console.log(lineW);

                                // sets this length as the width value of line
                                lineStart.style.width = lineW + 'px';

                                // Resets line length
                                setTimeout(function(){

                                    lineStart.style.width = 0;

                                }, 2000);

                                break;
                            case 'row2':
                                // box where line starts from.
                                var lineStart = document.getElementById('lineR2');

                                // width of box line starts from
                                var width = boxStylesWidth.getPropertyValue('width');
                                console.log(width);

                                // turns above px value into array elements
                                var widthNum = width.split('');
                                console.log(widthNum);

                                // removes 'px' from array
                                widthNum.pop();
                                widthNum.pop();

                                // value is now solely a number w/o 'px'
                                widthNum = widthNum.join('');

                                // makes line the length of win path
                                var lineW = widthNum * 3;
                                console.log(lineW);

                                // sets this length as the width value of line
                                lineStart.style.width = lineW + 'px';

                                // Resets line length
                                setTimeout(function(){

                                    lineStart.style.width = 0;

                                }, 2000);

                                break;
                            case 'row3':
                                var lineStart = document.getElementById('lineR3');

                                // width of box line starts from
                                var width = boxStylesWidth.getPropertyValue('width');
                                console.log(width);

                                // turns above px value into array elements
                                var widthNum = width.split('');
                                console.log(widthNum);

                                // removes 'px' from array
                                widthNum.pop();
                                widthNum.pop();

                                // value is now solely a number w/o 'px'
                                widthNum = widthNum.join('');

                                // makes line the length of win path
                                var lineW = widthNum * 3;
                                console.log(lineW);

                                // sets this length as the width value of line
                                lineStart.style.width = lineW + 'px';

                                // Resets line length
                                setTimeout(function(){

                                    lineStart.style.width = 0;

                                }, 2000);

                                break;
                            case 'col1':
                                var lineStart = document.getElementById('lineC1');

                                // height of box line starts from
                                var height = boxStylesHeight.getPropertyValue('height');
                                console.log(height);

                                // turns above px value into array elements
                                var heightNum = height.split('');
                                console.log(heightNum);

                                // removes 'px' from array
                                heightNum.pop();
                                heightNum.pop();

                                // value is now solely a number w/o 'px'
                                heightNum = heightNum.join('');

                                // makes line the length of win path
                                var lineH = heightNum * 3;
                                console.log(lineH);

                                // sets this length as the width value of line
                                lineStart.style.height = lineH + 'px';

                                // Resets line length
                                setTimeout(function(){

                                    lineStart.style.height = 0;

                                }, 2000);

                                break;
                            case 'col2':
                                var lineStart = document.getElementById('lineC2');

                                // height of box line starts from
                                var height = boxStylesHeight.getPropertyValue('height');
                                console.log(height);

                                // turns above px value into array elements
                                var heightNum = height.split('');
                                console.log(heightNum);

                                // removes 'px' from array
                                heightNum.pop();
                                heightNum.pop();

                                // value is now solely a number w/o 'px'
                                heightNum = heightNum.join('');

                                // makes line the length of win path
                                var lineH = heightNum * 3;
                                console.log(lineH);

                                // sets this length as the width value of line
                                lineStart.style.height = lineH + 'px';

                                // Resets line length
                                setTimeout(function(){

                                    lineStart.style.height = 0;

                                }, 2000);

                                break;

                            case 'col3':
                                var lineStart = document.getElementById('lineC3');

                                // height of box line starts from
                                var height = boxStylesHeight.getPropertyValue('height');
                                console.log(height);

                                // turns above px value into array elements
                                var heightNum = height.split('');
                                console.log(heightNum);

                                // removes 'px' from array
                                heightNum.pop();
                                heightNum.pop();

                                // value is now solely a number w/o 'px'
                                heightNum = heightNum.join('');

                                // makes line the length of win path
                                var lineH = heightNum * 3;
                                console.log(lineH);

                                // sets this length as the width value of line
                                lineStart.style.height = lineH + 'px';

                                // Resets line length
                                setTimeout(function(){

                                    lineStart.style.height = 0;

                                }, 2000);

                                break;

                            case 'diag1':
                                var lineStart = document.getElementById('lineD1');

                                // width of box line starts from
                                var width = boxStylesWidth.getPropertyValue('width');
                                console.log(width);

                                // turns above px value into array elements
                                var widthNum = width.split('');
                                console.log(widthNum);

                                // removes 'px' from array
                                widthNum.pop();
                                widthNum.pop();

                                // value is now solely a number w/o 'px'
                                widthNum = widthNum.join('');

                                // makes line the length of win path
                                var lineW = widthNum * 4.2;
                                console.log(lineW);

                                // sets this length as the width value of line
                                lineStart.style.width = lineW + 'px';

                                // Resets line length
                                setTimeout(function(){

                                    lineStart.style.width = 0;

                                }, 2000);

                                break;

                            case 'diag2':
                            var lineStart = document.getElementById('lineD2');

                            // width of box line starts from
                            var width = boxStylesWidth.getPropertyValue('width');
                            console.log(width);

                            // turns above px value into array elements
                            var widthNum = width.split('');
                            console.log(widthNum);

                            // removes 'px' from array
                            widthNum.pop();
                            widthNum.pop();

                            // value is now solely a number w/o 'px'
                            widthNum = widthNum.join('');

                            // makes line the length of win path
                            var lineW = widthNum * 4.2;
                            console.log(lineW);

                            // sets this length as the width value of line
                            lineStart.style.width = lineW + 'px';

                            // Resets line length
                            setTimeout(function(){
                                // Resets line-length
                                lineStart.style.width = 0;

                            }, 2000);

                        } // ends win-line switch

                        // RESET-----RESET-----RESET-----RESET-----RESET---

                        // After line is gone
                        setTimeout(function(){

                            // Iterates over '.markBox' elements
                            for (var q = 0; q < markBoxes.length; q++) {

                                // Removes x's and O's
                                if (markBoxes[q].firstChild) {

                                    markBoxes[q].removeChild(markBoxes[q].childNodes[0]);
                                }

                                // Removes last class: 'greenX'/'blueO'
                                switch(markBoxes[q].classList[1]) {
                                    case 'greenX':
                                        markBoxes[q].classList.remove('greenX');
                                        break;
                                    case 'blueO':
                                        markBoxes[q].classList.remove('blueO');
                                } // ends switch
                            } // ends 'q' for-loop

                            // resets 'paths' elements[1] value
                            for (var r = 0; r < paths.length; r++) {

                                paths[r][1] = 0;
                            }
                            //----------------------------------

                            // resets 'won', 'turn', 'markType' vars
                            won = 'no';
                            markType = 1;
                            turn = 0;

                        }, 3000);


                        // END OF RESET--------------------------------------


                    } // ends win 'if'
                } // ends 'e' for-loop

                // IF DRAW: RESET---RESET-------

                if (turn == 9 && won == 'no') {

                    setTimeout(function(){

                        // Iterates over '.markBox' elements
                        for (var q = 0; q < markBoxes.length; q++) {

                            // Removes x's and O's
                            if (markBoxes[q].firstChild) {

                                markBoxes[q].removeChild(markBoxes[q].childNodes[0]);
                            }

                            // Removes last class: 'greenX'/'blueO'
                            switch(markBoxes[q].classList[1]) {
                                case 'greenX':
                                    markBoxes[q].classList.remove('greenX');
                                    break;
                                case 'blueO':
                                    markBoxes[q].classList.remove('blueO');
                            } // ends switch
                        } // ends 'q' for-loop

                        // resets 'paths' elements[1] value
                        for (var r = 0; r < paths.length; r++) {

                            paths[r][1] = 0;
                        }
                        //----------------------------------

                        // resets 'won', 'turn', 'markType' vars
                        won = 'no';
                        markType = 1;
                        turn = 0;

                    }, 2000);
                } // Ends DRAW 'if'

                //COMPUTERS TURN-----------------
                setTimeout(compTurn, 1000);
                //-------------------------------

            } // ends 'if': the one immediately after click
        }); // ends click-function
    } // ends 'j' for-loop

    // FUNCTION: COMPUTER's TURN-----------------------------
    function compTurn(){

        if (turn % 2 !== 0) {

            turn += 1;

            var ohText = document.createTextNode('O');

            for (var n = 0; n < 4 && placed == 'no'; n++){

                for (var v = 0; v < 8 && placed == 'no'; v++){

                    switch(n){
                        case 0:
                            if(paths[v][0] == 2) {
                                findExactBox();
                            } // End IF
                            break;
                        case 1:
                            if(paths[v][0] == 10) {
                                findExactBox();
                            } // End IF
                            break;
                        case 2:
                            if(paths[v][0] == 5) {
                                findExactBox();
                            } // End IF
                            break;
                        case 3:
                            if(paths[v][0] >= 0) {
                                findExactBox();
                            } // End IF
                            break;
                    } // Switch
                } // INNER-LOOP (used for win-path looping)
            } // OUTER-LOOP (used for each conditional)
        } // IF: odd turn
    } //compTurn
    //-------------------------------------------------------

    function findExactBox(){
        // has win-path of marker been found?
        placed = 'yes';
        // has place of marker been found?
        var foundEmpty = 'no';
        // The 3 boxes of this win-path
        var winPath = document.getElementsByClassName(paths[v][0]);
        // Loops over 3 boxes to find empty one
        for (var t = 0; t < winPath.length && foundEmpty == 'no'; t++){

            // Last class of element
            var finalClass = winPath[t].classList.item(winPath[t].classList.length - 1);

            //IF box is empty...
            if (finalClass !== 'green' && finalClass !== 'blueO'){

                // Ends loop
                foundEmpty = 'yes';

                // Adds 'blueO' class to element
                this.className += ' blueO';

                // Adds 'O' to box
                this.appendChild(ohText);

                // Adds 5 to related appro. win-path
                switch(this.parentNode.id){
                    case 'one1':
                        paths[0][1] += 5; //row1
                        paths[3][1] += 5; //col1
                        paths[6][1] += 5; // diag1
                        break;
                    case 'one2':
                        paths[0][1] += 5; //row1
                        paths[4][1] += 5; //col4
                        break;
                    case 'one3':
                        paths[0][1] += 5; //row1
                        paths[5][1] += 5; //col3
                        paths[7][1] += 5; //diag2
                        break;
                    case 'two1':
                        paths[1][1] += 5; //row2
                        paths[3][1] += 5; //col1
                        break;
                    case 'two2':
                        paths[1][1] += 5; //row2
                        paths[4][1] += 5; //col4
                        paths[6][1] += 5; // diag1
                        paths[7][1] += 5; //diag2
                        break;
                    case 'two3':
                        paths[1][1] += 5; //row2
                        paths[5][1] += 5; //col3
                        break;
                    case 'three1':
                        paths[2][1] += 5; //row3
                        paths[3][1] += 5; //col1
                        paths[7][1] += 5; //diag2
                        break;
                    case 'three2':
                        paths[2][1] += 5; //row3
                        paths[4][1] += 5; //col4
                        break;
                    case 'three3':
                        paths[2][1] += 5; //row3
                        paths[5][1] += 5; //col3
                        paths[6][1] += 5; // diag1
                } // win-path switch
                // Checks for 'three-in-a-row' (win)
                for (var e = 0; e < paths.length && won == 'no'; e++) {

                    if (paths[e][1] == 3 || paths[e][1] == 15) {

                        won = 'yes';
                        console.log('won!');

                        //where line goes
                        switch(paths[e][0]) {
                            case 'row1':
                                // box where line starts from.
                                var lineStart = document.getElementById('lineR1');

                                // width of box line starts from
                                var width = boxStylesWidth.getPropertyValue('width');
                                console.log(width);

                                // turns above px value into array elements
                                var widthNum = width.split('');
                                console.log(widthNum);

                                // removes 'px' from array
                                widthNum.pop();
                                widthNum.pop();

                                // value is now solely a number w/o 'px'
                                widthNum = widthNum.join('');

                                // makes line the length of win path
                                var lineW = widthNum * 3;
                                console.log(lineW);

                                // sets this length as the width value of line
                                lineStart.style.width = lineW + 'px';

                                // Resets line length
                                setTimeout(function(){

                                    lineStart.style.width = 0;

                                }, 2000);

                                break;
                            case 'row2':
                                // box where line starts from.
                                var lineStart = document.getElementById('lineR2');

                                // width of box line starts from
                                var width = boxStylesWidth.getPropertyValue('width');
                                console.log(width);

                                // turns above px value into array elements
                                var widthNum = width.split('');
                                console.log(widthNum);

                                // removes 'px' from array
                                widthNum.pop();
                                widthNum.pop();

                                // value is now solely a number w/o 'px'
                                widthNum = widthNum.join('');

                                // makes line the length of win path
                                var lineW = widthNum * 3;
                                console.log(lineW);

                                // sets this length as the width value of line
                                lineStart.style.width = lineW + 'px';

                                // Resets line length
                                setTimeout(function(){

                                    lineStart.style.width = 0;

                                }, 2000);

                                break;
                            case 'row3':
                                var lineStart = document.getElementById('lineR3');

                                // width of box line starts from
                                var width = boxStylesWidth.getPropertyValue('width');
                                console.log(width);

                                // turns above px value into array elements
                                var widthNum = width.split('');
                                console.log(widthNum);

                                // removes 'px' from array
                                widthNum.pop();
                                widthNum.pop();

                                // value is now solely a number w/o 'px'
                                widthNum = widthNum.join('');

                                // makes line the length of win path
                                var lineW = widthNum * 3;
                                console.log(lineW);

                                // sets this length as the width value of line
                                lineStart.style.width = lineW + 'px';

                                // Resets line length
                                setTimeout(function(){

                                    lineStart.style.width = 0;

                                }, 2000);

                                break;
                            case 'col1':
                                var lineStart = document.getElementById('lineC1');

                                // height of box line starts from
                                var height = boxStylesHeight.getPropertyValue('height');
                                console.log(height);

                                // turns above px value into array elements
                                var heightNum = height.split('');
                                console.log(heightNum);

                                // removes 'px' from array
                                heightNum.pop();
                                heightNum.pop();

                                // value is now solely a number w/o 'px'
                                heightNum = heightNum.join('');

                                // makes line the length of win path
                                var lineH = heightNum * 3;
                                console.log(lineH);

                                // sets this length as the width value of line
                                lineStart.style.height = lineH + 'px';

                                // Resets line length
                                setTimeout(function(){

                                    lineStart.style.height = 0;

                                }, 2000);

                                break;
                            case 'col2':
                                var lineStart = document.getElementById('lineC2');

                                // height of box line starts from
                                var height = boxStylesHeight.getPropertyValue('height');
                                console.log(height);

                                // turns above px value into array elements
                                var heightNum = height.split('');
                                console.log(heightNum);

                                // removes 'px' from array
                                heightNum.pop();
                                heightNum.pop();

                                // value is now solely a number w/o 'px'
                                heightNum = heightNum.join('');

                                // makes line the length of win path
                                var lineH = heightNum * 3;
                                console.log(lineH);

                                // sets this length as the width value of line
                                lineStart.style.height = lineH + 'px';

                                // Resets line length
                                setTimeout(function(){

                                    lineStart.style.height = 0;

                                }, 2000);

                                break;

                            case 'col3':
                                var lineStart = document.getElementById('lineC3');

                                // height of box line starts from
                                var height = boxStylesHeight.getPropertyValue('height');
                                console.log(height);

                                // turns above px value into array elements
                                var heightNum = height.split('');
                                console.log(heightNum);

                                // removes 'px' from array
                                heightNum.pop();
                                heightNum.pop();

                                // value is now solely a number w/o 'px'
                                heightNum = heightNum.join('');

                                // makes line the length of win path
                                var lineH = heightNum * 3;
                                console.log(lineH);

                                // sets this length as the width value of line
                                lineStart.style.height = lineH + 'px';

                                // Resets line length
                                setTimeout(function(){

                                    lineStart.style.height = 0;

                                }, 2000);

                                break;

                            case 'diag1':
                                var lineStart = document.getElementById('lineD1');

                                // width of box line starts from
                                var width = boxStylesWidth.getPropertyValue('width');
                                console.log(width);

                                // turns above px value into array elements
                                var widthNum = width.split('');
                                console.log(widthNum);

                                // removes 'px' from array
                                widthNum.pop();
                                widthNum.pop();

                                // value is now solely a number w/o 'px'
                                widthNum = widthNum.join('');

                                // makes line the length of win path
                                var lineW = widthNum * 4.2;
                                console.log(lineW);

                                // sets this length as the width value of line
                                lineStart.style.width = lineW + 'px';

                                // Resets line length
                                setTimeout(function(){

                                    lineStart.style.width = 0;

                                }, 2000);

                                break;

                            case 'diag2':
                            var lineStart = document.getElementById('lineD2');

                            // width of box line starts from
                            var width = boxStylesWidth.getPropertyValue('width');
                            console.log(width);

                            // turns above px value into array elements
                            var widthNum = width.split('');
                            console.log(widthNum);

                            // removes 'px' from array
                            widthNum.pop();
                            widthNum.pop();

                            // value is now solely a number w/o 'px'
                            widthNum = widthNum.join('');

                            // makes line the length of win path
                            var lineW = widthNum * 4.2;
                            console.log(lineW);

                            // sets this length as the width value of line
                            lineStart.style.width = lineW + 'px';

                            // Resets line length
                            setTimeout(function(){
                                // Resets line-length
                                lineStart.style.width = 0;

                            }, 2000);

                        } // ends win-line switch

                        // RESET-----RESET-----RESET-----RESET-----RESET---

                        // After line is gone
                        setTimeout(function(){

                            // Iterates over '.markBox' elements
                            for (var q = 0; q < markBoxes.length; q++) {

                                // Removes x's and O's
                                if (markBoxes[q].firstChild) {

                                    markBoxes[q].removeChild(markBoxes[q].childNodes[0]);
                                }

                                // Removes last class: 'greenX'/'blueO'
                                switch(markBoxes[q].classList[1]) {
                                    case 'greenX':
                                        markBoxes[q].classList.remove('greenX');
                                        break;
                                    case 'blueO':
                                        markBoxes[q].classList.remove('blueO');
                                } // ends switch
                            } // ends 'q' for-loop

                            // resets 'paths' elements[1] value
                            for (var r = 0; r < paths.length; r++) {

                                paths[r][1] = 0;
                            }
                            //----------------------------------

                            // resets 'won', 'turn', 'markType' vars
                            won = 'no';
                            turn = 0;

                        }, 3000);


                        // END OF RESET--------------------------------------


                    } // ends win 'if'
                } // ends 'e' for-loop
                // IF DRAW: RESET---RESET-------

                if (turn == 9 && won == 'no') {

                    setTimeout(function(){

                        // Iterates over '.markBox' elements
                        for (var q = 0; q < markBoxes.length; q++) {

                            // Removes x's and O's
                            if (markBoxes[q].firstChild) {

                                markBoxes[q].removeChild(markBoxes[q].childNodes[0]);
                            }

                            // Removes last class: 'greenX'/'blueO'
                            switch(markBoxes[q].classList[1]) {
                                case 'greenX':
                                    markBoxes[q].classList.remove('greenX');
                                    break;
                                case 'blueO':
                                    markBoxes[q].classList.remove('blueO');
                            } // ends switch
                        } // ends 'q' for-loop

                        // resets 'paths' elements[1] value
                        for (var r = 0; r < paths.length; r++) {

                            paths[r][1] = 0;
                        }
                        //----------------------------------

                        // resets 'won', 'turn', 'markType' vars
                        won = 'no';
                        turn = 0;

                    }, 2000);
                } // Ends DRAW 'if'
            } // IF: finalClass
        }// end loop
    } //compBoxFound -------------------------------------------------------

} // END ALL
