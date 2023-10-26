const freezed_buttons = [...document.getElementsByClassName("freezed_button")] as HTMLButtonElement[];
const to_be_filled_buttons = [...document.getElementsByClassName("to_be_filled")] as HTMLButtonElement[];
const submit_button = document.getElementById("submit_button") as HTMLButtonElement;
const to_be_ones = [...document.getElementsByClassName("to_be_one")] as HTMLButtonElement[];
const to_be_zeros = [...document.getElementsByClassName("to_be_zero")] as HTMLButtonElement[];

const biggest_container = document.getElementById("biggest_container") as HTMLDivElement;

const footer = document.getElementById('footer') as HTMLDivElement;

const result_container = document.getElementById("result_container") as HTMLDivElement;

const result = document.getElementById("result") as HTMLDivElement;
// const reason_for_losing = document.getElementById("reason") as HTMLDivElement;

// alert("bruh , Typescript is just awesome. I will use it forever"); 

const retry_button = document.getElementById("retry_button") as HTMLButtonElement;

freezed_buttons.forEach((each_freezed_button) => {
    each_freezed_button.disabled = true;
});

let counter: number = 0;

var one_counter: number = 0;
var zero_counter: number = 0;


function refresh():void {
    window.location.reload();
}

to_be_filled_buttons.forEach((each_button) => {
    each_button.onclick = function () {

        counter++;

        if (counter % 2 == 0) {
            each_button.innerText = "1"
        }

        else {
            each_button.innerText = "0";
        }
    }

}); 

submit_button.onclick = function () {

footer.style.position = 'static';

retry_button.style.display = 'block';

    biggest_container.style.flexDirection = 'row';

    var i: number = 0;

    result.style.display = 'block';
    result_container.style.display = 'block';

    submit_button.remove();

    to_be_filled_buttons.forEach((e) => {
        e.disabled = true;
        e.classList.add("after_submitting");

    });

    for (let i in to_be_ones) {
        if (to_be_ones[i].innerText == "1") {
            one_counter++;
            to_be_ones[i].style.backgroundColor = 'lightgreen';
        }

        else{
            to_be_ones[i].style.backgroundColor = 'rgb(119, 244, 119)';
        }
    }


    for (let i in to_be_zeros) {
        if (to_be_zeros[i].innerText == "0") {
            zero_counter++;
            to_be_zeros[i].style.backgroundColor = 'green';

        }
        else{
            to_be_zeros[i].style.backgroundColor = 'red';
        }
    }

    if (one_counter == 10 && zero_counter == 11) {
        result.innerText = 'Congratutaions , You Won the game';
        // ignore this errors as this effect is from a CDN 
        // confetti();
        // confetti();
        // confetti();
        // confetti();
        // confetti();
        // confetti();

    }

    else {

        result.innerText = "Oops !!! , You lost";
        result.style.backgroundColor = 'red';
        result.style.color = 'white';
        result.style.border = '2px solid darkred';


    }

}

