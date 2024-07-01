document.write("<br>");
document.write("<h3>Question no 01</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques1() ">Click Me</button>');
document.write("<br>");
document.write("<br>");
function ques1() {
    var empty = []
    var resultDiv = document.getElementById("pere");
    resultDiv.innerHTML = 'var empty = [];<br><br>';
}
document.write('<div id="pere"></div>')
// question no 2

document.write("<h3>Question no 02</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques2();">Click Me</button>');
function ques2() {
    var matrix = [
        [0, 1, 2, 3]
        [1, 0, 1, 2]
        [2, 1, 0, 1]
    ]
    var resultDiv = document.getElementById("per");
    resultDiv.innerHTML = ' <br>var matrix = [<br>[0, 1, 2, 3]<br>[1, 0, 1, 2]<br>[2, 1, 0, 1]<br>];';
}
document.write('<div id="per"></div>')
document.write("<br>");
document.write("<br>");

//question no 3

document.write("<h3>Question no 03</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques3()">Click Me</button>');
function ques3() {
    for (var i = 1; i <= 10; i++) {
        console.log(i);
    };
    var resultDiv = document.getElementById("cont");
    resultDiv.innerHTML = `1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>`

}

document.write('<div id="cont"></div>')
document.write("<br>");
document.write("<br>");

//question no 4

document.write("<h3>Question no 04</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques4()">Click Me</button>');
function ques4() {
    var number = parseInt(prompt("Enter the number for multiplication table:"));
    var length = parseInt(prompt("Enter the length of the table:"));
    console.log(`Multiplication Table of ${number} up to ${length} terms:`);
    for (var i = 1; i <= length; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
        // document.write(`${number} x ${i} = ${number * i}`);
    }
    var resultDiv = document.getElementById("con");
    resultDiv.innerHTML = `<h3>Go to console <br> See the result<h3/>`
};
document.write('<div id="con"></div>')
document.write("<br>");
document.write("<br>");
//question no 5
document.write("<h3>Question no 05</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques5()">Click Me</button>');
// 
function ques5() {
    let fruits = ["Apple", "Banana", "Mango", "Orange", "Stawberry"];
    // document.write(`<h3>Array Items</h3>`)
    for (var i = 0; i < fruits.length; i++) {
        // document.write(`<p>${fruits[i]}</p>`);
        console.log(fruits[i]);
    }

    for (var a = 0; a < fruits.length; a++) {
        // document.write(`<div cl/ass="card"><p>Element at index ${a} is ${fruits[a]}</p></div>`);
        console.log(`Element at index ${a} is ${fruits[a]}`)
    }

    var resultDiv = document.getElementById("perea");
    resultDiv.innerHTML = `<h3>Array Items</h3><p>Apple</p><p>Banana</p><p>Mango</p><p>Orange</p><p>Stawberry</p><div class="card"><p>Element at index 0 is Apple</p></div><div class="card"><p>Element at index 1 is Banana</p></div><div class="card"><p>Element at index 2 is Mango</p></div><div class="card"><p>Element at index 3 is Orange</p></div><div class="card"><p>Element at index 4 is Stawberry</p></div>`
}
document.write('<div id="perea"></div>')
document.write("<br>");
document.write("<br>");

//question no 6

document.write("<h3>Question no 06</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques6()"">Click Me</button>');
function ques6() {
    // Forward Counting 
    console.log("Forward Counting")
    for (var a = 1; a < 16; a++) {
        console.log(a)
    }

    // Reverse Counting 
    console.log("Reverse Counting")
    for (var a = 10; a >= 0; a--) {
        console.log(a)
    }


    // Even Number Counting 
    console.log("Even Number Counting")
    for (var a = 0; a <= 20; a += 2) {
        console.log(a)
    }

    // ODD Number Counting 
    console.log('ODD Number Counting')
    for (var a = 1; a <= 20; a += 2) {
        console.log(a)
    }


    // Series Counting 
    console.log("Series Counting")
    for (var a = 2000; a <= 20000; a += 2000) {
        console.log(a)
    }
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<body><h3>Forward Counting</h3><span>1 ,</span><span>2 ,</span><span>3 ,</span><span>4 ,</span><span>5 ,</span><span>6 ,</span><span>7 ,</span><span>8 ,</span><span>9 ,</span><span>10 ,</span><span>11 ,</span><span>12 ,</span><span>13 ,</span><span>14 ,</span><span>15 ,</span><h3>Reverse Counting</h3><span>10 ,</span><span>9 ,</span><span>8 ,</span><span>7 ,</span><span>6 ,</span><span>5 ,</span><span>4 ,</span><span>3 ,</span><span>2 ,</span><span>1 ,</span><span>0 ,</span><h3>Even Number Counting</h3><span>0 ,</span><span>2 ,</span><span>4 ,</span><span>6 ,</span><span>8 ,</span><span>10 ,</span><span>12 ,</span><span>14 ,</span><span>16 ,</span><span>18 ,</span><span>20 ,</span><h3>ODD Number Counting</h3><span>1 ,</span><span>3 ,</span><span>5 ,</span><span>7 ,</span><span>9 ,</span><span>11 ,</span><span>13 ,</span><span>15 ,</span><span>17 ,</span><span>19 ,</span><h3>Series Counting</h3><span>2000 ,</span><span>4000 ,</span><span>6000 ,</span><span>8000 ,</span><span>10000 ,</span><span>12000 ,</span><span>14000 ,</span><span>16000 ,</span><span>18000 ,</span><span>20000 ,</span></body>`
}
document.write('<div id="result"></div>')
document.write("<br>");
document.write("<br>");


//question no 7

document.write("<h3>Question no 07</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques7()">Click Me</button>');
function ques7() {
    var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
    var userInputItem = prompt("Welcome to My Bakery! What do you want to order");
    for (var a = 0; a < A.length; a++) {
        if (A.includes(userInputItem)) {
            alert(userInputItem + ' is available at index ' + A.indexOf(userInputItem) + ' in our Bakery');
            break;
        } else {
            alert(userInputItem + ' is not available in our Bakery');
            break;
        }
    }
}
document.write("<br>");
document.write("<br>");


//question no 8

document.write("<h3>Question no 08</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques8()">Click Me</button>');
function ques8() {
    var arr = [24, 53, 78, 91, 12];
    alert(arr + '\rIdentify! In the given number.');
    var userI = parseInt(prompt('Put the number!'));
    if (userI === arr[3]) {
        alert('The largest number is 91')
    } else if (userI === arr[4]) {
        alert('The Smallest number is 12')
    } else if (userI === arr[0, 1, 2]) {
        alert('The middle Number')
    } else {
        alert('Not a number!')
    }
}
document.write("<br>");
document.write("<br>");

//question no 9

document.write("<h3>Question no 09</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques9()">Click Me</button>');
function ques9() {
    var arr = [24, 53, 78, 91, 12];
    alert(arr + '\rIdentify! In the given number.');
    var userI = parseInt(prompt('Put the number!'));
    if (userI === arr[3]) {
        alert('The largest number is 91')
    } else if (userI === arr[4]) {
        alert('The Smallest number is 12')
    } else if (userI === arr[0, 1, 2]) {
        alert('The middle Number')
    } else {
        alert('Not a number!')
    }
}
document.write("<br>");
document.write("<br>");

//question no 10

document.write("<h3>Question no 10</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques10()">Click Me</button>');
function ques10() {
    console.log(`Multiples of "5" ranging 1 to 100`);
    for (a = 1; a < 21; a++) {
        console.log(5 * a)
    }
    var resultDiv = document.getElementById("resu");
    resultDiv.innerHTML = `<h3>Multiples of "5" ranging 1 to 100</h3><span>5 ,</span><span>10 ,</span><span>15 ,</span><span>20 ,</span><span>25 ,</span><span>30 ,</span><span>35 ,</span><span>40 ,</span><span>45 ,</span><span>50 ,</span><span>55 ,</span><span>60 ,</span><span>65 ,</span><span>70 ,</span><span>75 ,</span><span>80 ,</span><span>85 ,</span><span>90 ,</span><span>95 ,</span><span>100 ,</span>`
}
document.write('<div id="resu"></div>')
document.write("<br>");
document.write("<br>");

document.write('<div style="color: blue;background-color: black;"><br><h1>Best OF luck<span style="font-size:50px;">👋</span></h1><br></div>')//&#128075
