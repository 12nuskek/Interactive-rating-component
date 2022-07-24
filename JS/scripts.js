let selected = 'not'

var thankyou = document.getElementById('thankyou');
var star = document.getElementById('star');
var text = document.getElementById('text');
var rating = document.getElementById('rating');
var submit = document.getElementById('submit');

if (selected == 'not'){
    //don't let submmit work
    console.log('selected not set');
}


var one = document.getElementById('1');
one.onclick = function() {
   var selected = '1'
   document.getElementById("selected").innerHTML = selected;
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
    document.getElementById("selected").innerHTML = selected;
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
    document.getElementById("selected").innerHTML = selected;
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
    document.getElementById("selected").innerHTML = selected;
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
    document.getElementById("selected").innerHTML = selected;
    console.log(selected);
    five.classList.add("selected");
    one.classList.remove("selected");
    two.classList.remove("selected");
    three.classList.remove("selected");
    four.classList.remove("selected");
}




    var submit = document.getElementById('submit');
    submit.onclick = function() {
        if (selected != 'not'||'1'){
            

           
            //don't let submmit work
            console.log('item selected proceed');
            thankyou.classList.remove("hidden");
            star.classList.add("hidden");
            text.classList.add("hidden");
            rating.classList.add("hidden");
            submit.classList.add("hidden");

        }else{
            console.log('No item selected');
        }

    }





//onclick set var as 12345

//if click changes reset var and choose new one

//unless var is set submit does nothing
//else var hides current html and displays Thank you message

//log rating to console