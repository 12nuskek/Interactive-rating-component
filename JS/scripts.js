
if (selected == null){
    //don't let submmit work
    console.log('selected not set');
}


var one = document.getElementById('1');
one.onclick = function() {
    var selected = '1'
    console.log(selected);
}

var two = document.getElementById('2');
two.onclick = function() {
    var selected = '2'
    console.log(selected);
}






//onclick set var as 12345

//if click changes reset var and choose new one

//unless var is set submit does nothing
//else var hides current html and displays Thank you message

//log rating to console