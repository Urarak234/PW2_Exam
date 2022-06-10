theInput = document.getElementById('theInput');

theInput.addEventListener('focusout', (event) => {
    if(typeof Number(theInput.value) == 'number'){
        theInput.value = "0";
    }  
});
