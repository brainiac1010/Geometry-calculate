

function calculateTriangleArea() {
    // Get triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseFieldValueStr = baseField.value;
    const baseFieldValue = parseFloat(baseFieldValueStr);

    // Get triangle height value
    const heightField = document.getElementById('triangle-height');
    const heightFieldValueStr = heightField.value;
    const heightFieldValue = parseFloat(heightFieldValueStr);

    // Check if the inputs are valid numbers
    if (isNaN(baseFieldValue) || isNaN(heightFieldValue) || baseFieldValue <= 0 || heightFieldValue <= 0) {
        alert("Please enter valid positive numbers for base and height.");
        return;
    }

    // Calculate area
    const area = 0.5 * baseFieldValue * heightFieldValue;

    // Display area
    const displayArea = document.getElementById('display-area');
    displayArea.innerText = area; 
}





function calculateRectangleArea(){
//get rectangle width 
   const withFiled =document.getElementById('rectangle-width');
   const widthValue= withFiled.value;
   const width = parseFloat(widthValue);

//get rectangle langth

const langthFiled =document.getElementById('rectangle-length');

const langthValue = langthFiled.value;
const langth = parseFloat( langthValue);


// calculate area 

const rectangleArea = width* langth;
const displayRectangleArea = document.getElementById('display-rectangle-area');
displayRectangleArea.innerText=rectangleArea;


}



//reUsable function

function calculateParallelogramArea(){


    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');
    const area = base * height;
    setElementInnerText('display-parallelogram-area',area)
   
}
function calculateEllipseArea() {

    const majorRadious = getInputValue('Ellipse-major-radius');
    const mainorRadious = getInputValue('Ellipse-mainor-radius');

    const ellipseArea = Math.PI * majorRadious * mainorRadious;
    setElementInnerText('display-Ellipse-area', ellipseArea .toFixed(2));
}




function calculateRhombusArea(){
const d1 = getInputValue('Rhombus-diagonal1');
const d2 = getInputValue('Rhombus-diagonal2');
const rhombusArea = 0.5* d1 * d2;
setElementInnerText('display-Rhombus-area', rhombusArea );

}
//reusable function to get input fild value number
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}
//reusable set text ,p,div,etc 

function setElementInnerText(elementId,area){
    const textField = document.getElementById(elementId);
    textField.innerText = area;
}