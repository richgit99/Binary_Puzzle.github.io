const modal = document.getElementById("modal");
const open_modal = document.getElementById("open_button");
const close_modal = document.getElementById("close_button");
const body = document.body;
const conatainer_for_puzzle = document.getElementById("conatainer_for_puzzle");


open_modal.addEventListener("click",function(){

modal.show();

// body.style.filter = 'blur(2px)';
conatainer_for_puzzle.style.marginTop = '22em';


});

close_modal.addEventListener("click",function(){
    conatainer_for_puzzle.style.marginTop = '0em';
    modal.close();
});

if(innerWidth < 400){
    open_modal.addEventListener("click",function(){

        modal.show();
        
        // body.style.filter = 'blur(2px)';
        conatainer_for_puzzle.style.marginTop = '24em';
        
        
        });
        
        close_modal.addEventListener("click",function(){
            conatainer_for_puzzle.style.marginTop = '0em';
            modal.close();
        });


}

else if(innerWidth > 700){

    open_modal.addEventListener("click",function(){

        modal.show();
        
        // body.style.filter = 'blur(2px)';
        conatainer_for_puzzle.style.marginTop = '20em';
        
        
        });
        
        close_modal.addEventListener("click",function(){
            conatainer_for_puzzle.style.marginTop = '0em';
            modal.close();
        });



}

const b11 = document.getElementById("11");
// const b12 = document.getElementById("12");
// const b13 = document.getElementById("13");
const b14 = document.getElementById("14");
const b15 = document.getElementById("15");
const b16 = document.getElementById("16");

// const b21 = document.getElementById("21");
const b22 = document.getElementById("22");
// const b23 = document.getElementById("23");
// const b24 = document.getElementById("24");
const b25 = document.getElementById("25");
const b26 = document.getElementById("26");

// const b31 = document.getElementById("31");
// const b32 = document.getElementById("32");
const b33 = document.getElementById("33");
// const b34 = document.getElementById("34");
const b35 = document.getElementById("35");
const b36 = document.getElementById("36");


const b41 = document.getElementById("41");
// const b42 = document.getElementById("42");
const b43 = document.getElementById("43");
const b44 = document.getElementById("44");
// const b45 = document.getElementById("45");
const b46 = document.getElementById("46");

const b51 = document.getElementById("51");
const b52 = document.getElementById("52");
const b53 = document.getElementById("53");
// const b54 = document.getElementById("54");   
const b55 = document.getElementById("55");
const b56 = document.getElementById("56");

// const b61 = document.getElementById("61");
const b62 = document.getElementById("62");
const b63 = document.getElementById("63");
// const b64 = document.getElementById("64");
const b65 = document.getElementById("65");
// const b66 = document.getElementById("66");

const all_bts = document.getElementById("all_bts");

const date = document.getElementById("date");

date.innerText = Date();


const start_game = document.getElementById("start_game");
const reset_value = document.getElementById("reset_value");
const submit_game = document.getElementById("submit_button");

var joke = 0;

const result_sentence = document.getElementById("result_sentence");

const result_analysis = document.getElementById("result_analysis");

start_game.onclick = function () {

    start_game.remove();

    var list_of_buttons = [b11, b14, b15, b16, b22, b25, b26, b33, b35, b36, b41, b43, b44, b46, b51, b52, b53, b55, b56, b62, b63, b65];

    var zero_list = [b11, b15, b22, b33, b36, b41, b43, b52, b56, b63, b65];
    var one_list = [b14, b16, b25, b26, b35, b44, b46, b51, , b53, b55, b62];

    reset_value.onclick = function () {

        list_of_buttons.forEach(element => {
            element.textContent = '';
        });


    }


    list_of_buttons.forEach(element => {

        var checker = 0;

        element.onclick = function () {

            checker += 1;


            // alert(checker);

            if (checker % 2 == 0) {

                element.textContent = '0';
                // alert(checker);
                console.log(checker);

            }
            else if (checker % 2 == 1) {
                // alert(checker);
                element.textContent = '1';
            }

        }


    });


    submit_game.onclick = function () {

        result_analysis.style.marginTop = '2em';
        reset_value.remove();
        submit_game.remove();


    
        // Result analysis section

const green_sample_box = document.getElementById("green_sample_box");
const red_sample_box = document.getElementById("red_sample_box");
const orange_sample_box = document.getElementById("orange_sample_box");

green_sample_box.style.width = "10%";
green_sample_box.style.backgroundColor = 'green';
green_sample_box.style.height = '5vh';
green_sample_box.style.border = '1px solid black';


red_sample_box.style.width = "10%";
red_sample_box.style.backgroundColor = 'red';
red_sample_box.style.height = '5vh';
red_sample_box.style.border = '1px solid black';

orange_sample_box.style.width = "10%";
orange_sample_box.style.backgroundColor = 'orange';
orange_sample_box.innerText = "?";
// orange_sample_box.style.paddingTop = '0.5em';
// orange_sample_sen.style.fontWeight = 'bold';
orange_sample_box.style.height = '5vh';
orange_sample_box.style.border = '1px solid black';


const green_sample_sen = document.getElementById("green_sample_sen");
const red_sample_sen = document.getElementById("red_sample_sen");
const orange_sample_sen = document.getElementById("orange_sample_sen");


green_sample_sen.innerText = ": Indicates right answer";
red_sample_sen.innerText = ": Indicates wrong answer";
orange_sample_sen.innerText = ": Indicates incomplete answer";

result_analysis.style.backgroundColor = 'lightblue';
result_analysis.style.border = '2px solid black';

 
        const new_restart_button = document.createElement('button');
      
        new_restart_button.innerText = '';
        new_restart_button.style.marginBottom = '1em';

 
const restart_link = document.createElement("a");
restart_link.textContent = 'Play Again ?';
restart_link.style.textDecoration = 'none';
new_restart_button.append(restart_link);


        new_restart_button.style.width = '40%';
        new_restart_button.classList.add("reset_value");
        new_restart_button.setAttribute("id", "reset_value");


        all_bts.append(new_restart_button);


        new_restart_button.onclick = function () {
            window.location.reload();

        }


        list_of_buttons.forEach(element => {

            if (element.textContent == '') {
                element.textContent = "?";
                element.style.background = 'orange';
                element.style.border = 'none';

                result_sentence.setAttribute("class", "result_sentence");

                result_sentence.style.padding = '0.5em 0.3em 0.5em';
                result_sentence.innerHTML = 'You failed, Better luck next time !!!';


            }


        });


        zero_list.forEach(element => {

            if (element.textContent == '1') {

                element.style.backgroundColor = 'red';
                element.style.border = 'none';
                result_sentence.setAttribute("class", "result_sentence");

                result_sentence.style.padding = '0.5em 0.3em 0.5em';
                result_sentence.innerHTML = 'You failed, Better luck next time !!!';
            }

            else if (element.textContent == '0') {

                element.style.backgroundColor = 'green';
                element.style.border = 'none';

            }


        });

        one_list.forEach(element => {

            if (element.textContent == '0') {

                element.style.backgroundColor = 'red';
                element.style.border = 'none';


                result_sentence.setAttribute("class", "result_sentence");

                result_sentence.style.padding = '0.5em 0.3em 0.5em';
                result_sentence.innerHTML = 'You failed, Better luck next time !!!';


            }


            else if (element.textContent == '1') {
                element.style.backgroundColor = 'green';
                element.style.border = 'none';

                result_sentence.setAttribute("class", "result_sentence");
                result_sentence.style.padding = '0.5em 0.3em 0.5em';
              
            }



        });


        if (b11.textContent == '0' && b14.textContent == '1' && b15.textContent == '0' && b16.textContent == '1'
            && b22.textContent == '0' && b25.textContent == '1' && b26.textContent == '1'
            && b33.textContent == '0' && b35.textContent == '1' && b36.textContent == '0'
            && b41.textContent == '0' && b43.textContent == '0' && b44.textContent == '1' && b46.textContent == '1'
            && b51.textContent == '1' && b52.textContent == '0' && b53.textContent == '1' && b55.textContent == '1' && b56.textContent == '0'
            && b62.textContent == '1' && b63.textContent == '0' && b65.textContent == '0') {

            alert("You won");

            const wining_line = document.createElement("p");
            wining_line.setAttribute("class", "result_sentence");
            wining_line.innerText = 'Congratulations you solved the entire puzzle right !!! ';
            result_sentence.append(wining_line);



            list_of_buttons.forEach(element => {


                element.style.background = 'green';
                element.style.border = 'none';

            }

            );


        }



    }



}



