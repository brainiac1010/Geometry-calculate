

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

