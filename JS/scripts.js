let selected = 'not'


if (selected == 'not'){
    //don't let submmit work
    console.log('selected not set');
}


var one = document.getElementById('1');
one.onclick = function() {
    selected = '1'
    console.log(selected);
    one.classList.add("selected");


    two.classList.remove("selected");
    three.classList.remove("selected");
    four.classList.remove("selected");
    five.classList.remove("selected");


}

var two = document.getElementById('2');
two.onclick = function() {
    selected = '2'
    console.log(selected);
    two.classList.add("selected");
    one.classList.remove("selected");
    three.classList.remove("selected");
    four.classList.remove("selected");
    five.classList.remove("selected");
}

var three = document.getElementById('3');
three.onclick = function() {
    selected = '3'
    console.log(selected);
    three.classList.add("selected");
    one.classList.remove("selected");
    two.classList.remove("selected");
    four.classList.remove("selected");
    five.classList.remove("selected");
}


var four = document.getElementById('4');
four.onclick = function() {
    selected = '4'
    console.log(selected);
    four.classList.add("selected");
    one.classList.remove("selected");
    two.classList.remove("selected");
    three.classList.remove("selected");
    five.classList.remove("selected");
}


var five = document.getElementById('5');
five.onclick = function() {
    selected = '5'
    console.log(selected);
    five.classList.add("selected");
    one.classList.remove("selected");
    two.classList.remove("selected");
    three.classList.remove("selected");
    four.classList.remove("selected");
}




    var submit = document.getElementById('submit');
    submit.onclick = function() {
        if (selected != 'not'){
            //don't let submmit work
            console.log('item selected proceed');
            three.classList.remove("selected");
            thankyou.classList.remove("hidden");
        }else{
            console.log('No item selected');
        }

    }








//onclick set var as 12345

//if click changes reset var and choose new one

//unless var is set submit does nothing
//else var hides current html and displays Thank you message

//log rating to console