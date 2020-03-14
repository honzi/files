'use strict';

function calculate_height(){
    document.getElementById('height').value = document.getElementById('width').value
      * (document.getElementById('ratio-height').value / document.getElementById('ratio-width').value);
}

function calculate_width(){
    document.getElementById('width').value = document.getElementById('height').value
      * (document.getElementById('ratio-width').value / document.getElementById('ratio-height').value);
}
