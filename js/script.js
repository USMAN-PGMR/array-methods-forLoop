// for date,year
var now = new Date();
var year = now.getFullYear(year)
document.getElementById("year").innerText = year

// clear input field 
document.getElementById('clear').onclick = function(){
    document.getElementById('search').value=""
}
// clear output
function clearOutput(){
    document.getElementById('output').innerHTML=""
}

// simple alert 
function simpleAlert(){
    let input=document.getElementById('search').value
    if (input !=00){
        // document.getElementById('output').innerHTML=input    
        alert(input)
    } else {
        alert('please fill input field')
    }
}
// print my name 
function printMyName() {
    let Input = document.getElementById('search').value
    if (Input != 00) {
        document.getElementById('output').innerHTML = Input
    }
    else {
        alert('Please fill input field')
        return
    }
}

// orignal statement 
let cities = ["Faisalabad", "Lahore", "Karachi", "Islamabad", "Burewala", "Sheikhupura", "Kashmir"]
// document.getElementById("orignalString").innerHTML = cities
for (let i = 0; i < cities.length; i++) {
    // text += cars[i] + "<br>";
    document.getElementById("oraginalString").innerHTML += i + 1 + ") " +" " + cities[i]+" "
}

// print all citites
function allCities() {
    document.getElementById("output").innerHTML = ""
    for (let i = 0; i < cities.length; i++) {
        document.getElementById("output").innerHTML += i + 1 + ") " + " " + cities[i] + " "
    }

}
// add cities 

function addCity() {
    let allCities = cities.slice()
    let newCity = document.getElementById("search").value
    allCities.push(newCity)
    if (newCity != 00) {
        document.getElementById("output").innerHTML = ""
        for (let i = 0; i < allCities.length; i++) {
            document.getElementById("output").innerHTML += i + 1 + ") " + " " + allCities[i]+" "
        }
    }
    else {
        alert('Please fill input field')
        return
    }
}

// generate table 

function table() {
    let number = document.getElementById('search').value;
    if (!number) {
        alert("Please enter a number");
        return;
    }
    else {
        document.getElementById('output').innerHTML = " ";
        for (let index = 1; index <= 10; index++) {

            document.getElementById('output').innerHTML += number + " * " + index + " = " + number * index + "<br>";
        }
    }
}