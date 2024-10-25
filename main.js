/**
 * Unit 2 Summative Task - Geometry Helper
 * ICS3 - Mr. Brash 🐿️
 * 
 * Read README.md and YOUR_Task.md 
 **/ 

// Follow the rules
'use strict';

/*** Event Listeners ***/
document.getElementById("zeros").addEventListener("click", zeros);
document.getElementById("vertex").addEventListener("click", vertex);
document.getElementById("rect_prism_volume").addEventListener("click", rect_prism_volume);
document.getElementById("sphere_volume").addEventListener("click", sphere_volume);
document.getElementById("sphere_area").addEventListener("click", sphere_area);
document.getElementById("slope1").addEventListener("click", slope1);
document.getElementById("length1").addEventListener("click", length1);
document.getElementById("midpoint").addEventListener("click", midpoint);
/*** Functions ***/
function delta(a, b) {
    let answer=(a-b)
    return answer
}

function slope(x1, y1, x2, y2) {
    let answer = (y2 - y1) / (x2 - x1)
    return answer
}

function avg(n1, n2) {
    let answer = ( n1 + n2 ) / 2
    return answer
}

// Round to the nearest `decimals` number of decimals
function round(value, decimals) {
    return Math.round(value * 10**decimals) / 10**decimals;
}

// Round to the user's number of decimals
function round_user(value) {
    // Get the number of decimals from the "rounding" box
    let d = Number(document.getElementById("rounding").value)
    let answer = Math.round(value * 10**d) / 10**d;
    return answer
}

function length(x1, y1, x2, y2) {
    let answer_1 =(delta(x2, x1)) **2 
    let answer_2 =(delta(y2, y1)) **2
    let x = Math.sqrt(answer_1)
    let y = Math.sqrt(answer_2)
    let z = `${x}, ${y}`
    return z
}


function rect_prism_volume() {
    let length_2 = Number(document.getElementById("length_2").value)
    let width = Number(document.getElementById("width").value)
    let hieght = Number(document.getElementById("hieght").value)
    let answer = (length_2 * width * hieght)
    document.getElementById("geo_output").textContent=answer
}

function sphere_volume() {
    let radius = Number(document.getElementById("radius").value);
    let volume = 4/3 * Math.PI * (radius)
    let round = round_user(volume)
    document.getElementById("answer").textContent = round
}

    function sphere_area() {
        let radius = Number(document.getElementById("radius").value);
        let volume = 4 * (Math.PI * (radius))
        document.getElementById("answer").textContent = volume
        let round = round_user(volume)
    document.getElementById("answer").textContent = round
    }

    function slope1() {
        let x1 = Number(document.getElementById("x1").value);
        let y1 = Number(document.getElementById("y1").value);
        let x2 = Number(document.getElementById("x2").value);
        let y2 = Number(document.getElementById("y2").value);
        let answer = slope(x1, y1, x2, y2);
        let round = round_user(answer);
        document.getElementById("answer1").textContent = round;
    }
     
    // Calculate the length of a line
    function length1() {
        let x1 = Number(document.getElementById("x1").value);
        let y1 = Number(document.getElementById("y1").value);
        let x2 = Number(document.getElementById("x2").value);
        let y2 = Number(document.getElementById("y2").value);
        let answer = length(x1, y1, x2, y2);
        let round = round_user(answer);
        document.getElementById("answer1").textContent = round; 
    }
    
    // Calculate the midpoint of two points on a line
    function midpoint() {
        let x1 = Number(document.getElementById("x1").value);
        let y1 = Number(document.getElementById("y1").value);
        let x2 = Number(document.getElementById("x2").value);
        let y2 = Number(document.getElementById("y2").value);
        let answer_one = avg(x1, x2);
        let answer_two = avg(y1, y2);
        let newanswer = `The answer was ${answer_one}, ${answer_two}`;
        document.getElementById("answer1").textContent = newanswer;
    }
    
    


// Calculate the y-value of a parabola from standand form
function y_quad(a, b, c, x) {
    let y = (a * x ** 2 + (b * x) + c);
    return y
}


function zeros() {
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let c = Number(document.getElementById("c").value);
 
    
    let discriminant = b ** 2 - 4 * a * c;

    if (discriminant < 0) {
        document.getElementById("answer2").textContent = "No real roots exist (discriminant is negative).";
        return;
    }
 
    let positive = (-b + Math.sqrt(discriminant)) / (2 * a);
    let negative = (-b - Math.sqrt(discriminant)) / (2 * a);
    let pos = round_user(positive)
    let neg = round_user(negative)
    document.getElementById("answer2").textContent = `Roots: ${pos}, ${neg}`;
}


// Determine the vertex of a quadratic using user-inputs for a, b, and 
function vertex() {
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let c = Number(document.getElementById("c").value);
    let x = Number(document.getElementById("x").value);
    let x1 = y_quad(a, b); 
    let y = (a * x ** 2 + (b * x) + c); 
    console.log(x1,y)
    document.getElementById("answer2").textContent = `The Vertex is ${x1}, ${y};`
}