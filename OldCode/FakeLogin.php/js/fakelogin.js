window.onload = function(e){
    if(window.location.search.substring(1) === 'invalid'){
        var error = document.createElement('div');
        error.classList.add('error');
        error.innerHTML = 'Invalid Authentication';
        document.getElementById('fields').appendChild(error);
    }
};
