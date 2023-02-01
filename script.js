//For Next Button


const form = document.querySelector("form"),
    nextBtn = form.querySelector(".nextBtn"),
    // nextBtn = document.getElementsByClassName('nextBtn')
backBtn = form.querySelector(".backBtn"),
    // subBtn=form.querySelector(".subBtn"),
    allInput = form.querySelectorAll(".first input");


nextBtn.addEventListener("click", () => {
    allInput.forEach(input => {
        if (input.value != "") {
            form.classList.add('secActive');

        } else {
            form.classList.remove('secActive');
            // alert("input is empty");

        }

    });
})
backBtn.addEventListener("click", () => form.classList.remove('secActive'));




//For Storage
function test() {
    var uid = document.getElementById("Name").value;
    var birth = document.getElementById("birth").value;
    var email = document.getElementById("email").value;
    var father = document.getElementById("fname").value;
    var mother = document.getElementById("mname").value;
    var gender = document.getElementById("gen1").value;
    var nation = document.getElementById("nan1").value;
    var address = document.getElementById("add1").value;
    var city = document.getElementById("city").value;
    var number = document.getElementById("num1").value;
    var number2 = document.getElementById("num2").value;
    var hsc = document.getElementById("HSC1").value;
    var hsc2 = document.getElementById("HSC2").value;
    var file = document.getElementById("file").value;
    var score = document.getElementById("Score1").value;
    var Inst = document.getElementById("SSC1").value;
    var board = document.getElementById("SSC2").value;
    var file2 = document.getElementById("file2").value;
    var score2 = document.getElementById("Score").value;
    var current = document.getElementById("current").value;
    var education = document.getElementById("Education").value;
    var over = document.getElementById("overal").value;
    var Mark = document.getElementById("mark").value;
    var back = document.getElementById("backlog").value;




    // Storing data

    var uid1 = localStorage.setItem("uid", uid);
    var birth1 = localStorage.setItem("birth", birth);
    var email1 = localStorage.setItem("email", email);
    var father1 = localStorage.setItem("father", father);
    var mother1 = localStorage.setItem("mother", mother);
    var gender1 = localStorage.setItem("gender", gender);
    var nation1 = localStorage.setItem("nation", nation);
    var address1 = localStorage.setItem("address", address);
    var city1 = localStorage.setItem("city", city);
    var number1 = localStorage.setItem("number", number);
    var number2_1 = localStorage.setItem("number2", number2);
    var h1 = localStorage.setItem("hsc", hsc);
    var h2 = localStorage.setItem("hsc2", hsc2);
    var file1 = localStorage.setItem("file", file);
    var score1 = localStorage.setItem("score", score);
    var Inst1 = localStorage.setItem("Inst", Inst);
    var board1 = localStorage.setItem("board", board);
    var file2_1 = localStorage.setItem("file2", file2);
    var score2_1 = localStorage.setItem("score2", score2);
    var current1 = localStorage.setItem("current", current);
    var education1 = localStorage.setItem("education", education);
    var over1 = localStorage.setItem("over", over);
    var mark1 = localStorage.setItem("Mark", Mark);
    var back = localStorage.setItem("back", back);

}










//For validation




const form1 = document.querySelector("form");
//  const sub1=form1.querySelector(".subBtn")
const sub1 = document.getElementsByClassName("subBtn")








nextBtn.addEventListener('click', (event) => {
    event.preventDefault();
    // console.log('submit partial');
})



const isEmail = (email_1) => {
    var atSymbol = email_1.indexOf("@");
    if (atSymbol < 1) return false;
    var dot = email_1.lastIndexOf('.');
    if (dot <= atSymbol + 3) return false;
    if (dot === email_1.length - 1) return false;
    return true;
}
function validate() {
    const userName = document.getElementById('Name');
    const uid_2 = new String(userName.value).trim();

    const email1=document.getElementById('email');
    const Email_3=new String(email1.value).trim();

    const num=document.getElementById('num1');
    const numb_1=new String(num.value).trim();

    
    const father_name=document.getElementById('fname');
    const father_name1=new String(father_name.value).trim();

    const mother_name=document.getElementById('mname');
    const mother_name_1=new String(mother_name.value).trim();

    const addr=document.getElementById('add1');
    const addr_1=new String(addr.value).trim();

    const numbe=document.getElementById('num2');
    const numbe_1=new String(numbe.value).trim();
    




    ///validation
    if (uid_2 === "") {

        setErrorMsg(document.getElementById('user'), 'Name can not be empty');

    } else if (uid_2.length <= 2) {
        setErrorMsg(document.getElementById('user'), 'Name min 3 char');

    }
    else {
        console.log("rudra")
        setSuccessmsg(Name);
    }





    //email
    if (Email_3 === "") {
        setErrorMsg(document.getElementById('email1'), 'email can not be empty');

    } else if (!isEmail(Email_3)) {
        setErrorMsg(document.getElementById('email1'), 'Not a valid Email');

    }
    else {
        setSuccessmsg(email1);
    }





    //father name
    if (father_name1 === "") {
        setErrorMsg(document.getElementById('name1'), 'Name can not be empty');

    } else if (father_2.length <= 2) {
        setErrorMsg(document.getElementById('name1'), 'Name min 3 char');

    }
    else {
        setSuccessmsg(fname);
    }





    // mothername
    if (mother_name_1 === "") {
        setErrorMsg(document.getElementById('name2'), 'Name can not be empty');

    } else if (mother_name_1.length <= 2) {
        setErrorMsg(document.getElementById('name2'), 'Name min 3 char');

    }
    else {
        setSuccessmsg(mname);
    }




    //adress
    if (addr_1 === "") {
        setErrorMsg(document.getElementById('add'), 'Address can not be empty');
    }
    else{
        setSuccessmsg(add1);
    }

    





    // telephone_1
    if (numb_1 === "") {
        setErrorMsg(document.getElementById('num'), 'Number can not be empty');

    } else if (numb_1.length != 10) {
        setErrorMsg(document.getElementById('num'), 'Number min 10 ');

    }
    else {
        setSuccessmsg(num);
    }




    // telephone_2
    if (numbe_1 === "") {
        setErrorMsg(document.getElementById('num3'), 'Name can not be empty');

    } else if (numbe_1.length != 10) {
        setErrorMsg(document.getElementById('num3'), 'Number min 10 ');

    }
    else {
        setSuccessmsg(num3);
    }




}

function setErrorMsg(input, errormsgs) {
    const inputFields=input.parentElement;
    // const p=inputFields.querySelector('p');
    inputFields.className="input-fields error";
    // console.log(errormsgs, input);
    
    input.innerText = errormsgs;
    //  inputFields.className="input-fields error";
    //  input.errormsgs.visibility="visible";
     document.getElementById('user').style.visibility="visible";
     document.getElementById('email1').style.visibility="visible";
     document.getElementById('name1').style.visibility="visible";
    document.getElementById('name2').style.visibility="visible";
    document.getElementById('num').style.visibility="visible";
    document.getElementById('add').style.visibility="visible";
    document.getElementById('num3').style.visibility="visible";

     
     


}
function setSuccessmsg(input) {
    const inputFields = input.parentElement;
    inputFields.className = "input-fields success";
    // document.querySelector('p').style.visibility="hidden";
    // input.successmsgs.visibility = "hidden";
    document.getElementById('user').style.display="none";
    document.getElementById('email1').style.display="none";
    document.getElementById('name1').style.display="none";
    document.getElementById('name2').style.display="none";
    document.getElementById('num').style.display="none";
    document.getElementById('add').style.display="none";
    document.getElementById('num3').style.display="none";


}


function isValid() {
    console.log("isValid");
    validate();
}


