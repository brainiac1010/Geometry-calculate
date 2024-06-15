// Function to calculate the area of a triangle
function calculateTriangleArea() {
    const base = getInputValue('triangle-base');
    const height = getInputValue('triangle-height');

    if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
        alert("Please enter valid positive numbers for base and height.");
        return;
    }

    const area = 0.5 * base * height;
    setElementInnerText('display-area', area);
}

// Function to calculate the area of a rectangle
function calculateRectangleArea() {
    const width = getInputValue('rectangle-width');
    const length = getInputValue('rectangle-length');

    if (isNaN(width) || isNaN(length) || width <= 0 || length <= 0) {
        alert('Please enter valid positive numbers for width and length.');
        return;
    }

    const area = width * length;
    setElementInnerText('display-rectangle-area', area);
}

// Function to calculate the area of a parallelogram
function calculateParallelogramArea() {
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');

    if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
        alert('Please enter valid positive numbers for base and height.');
        return;
    }

    const area = base * height;
    setElementInnerText('display-parallelogram-area', area);
}

// Function to calculate the area of an ellipse
function calculateEllipseArea() {
    const majorRadius = getInputValue('ellipse-major-radius');
    const minorRadius = getInputValue('ellipse-minor-radius');

    if (isNaN(majorRadius) || isNaN(minorRadius) || majorRadius <= 0 || minorRadius <= 0) {
        alert('Please enter valid positive numbers for major and minor radius.');
        return;
    }

    const area = Math.PI * majorRadius * minorRadius;
    setElementInnerText('display-ellipse-area', area.toFixed(2));
}

// Function to calculate the area of a rhombus
function calculateRhombusArea() {
    const d1 = getInputValue('rhombus-diagonal1');
    const d2 = getInputValue('rhombus-diagonal2');

    if (isNaN(d1) || isNaN(d2) || d1 <= 0 || d2 <= 0) {
        alert('Please enter valid positive numbers for diagonals.');
        return;
    }

    const area = 0.5 * d1 * d2;
    setElementInnerText('display-rhombus-area', area);
}

// Function to calculate the area of a pentagon
function calculatePentagonArea() {
    const perimeter = getInputValue('pentagon-perimeter');
    const apothem = getInputValue('pentagon-apothem');

    if (isNaN(perimeter) || isNaN(apothem) || perimeter <= 0 || apothem <= 0) {
        alert('Please enter valid positive numbers for perimeter and apothem.');
        return;
    }

    const area = 0.5 * perimeter * apothem;
    setElementInnerText('display-pentagon-area', area);
}

// Reusable function to get input field value as a number
function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const value = parseFloat(inputField.value);
    return value;
}

// Reusable function to set text content of an element
function setElementInnerText(elementId, value) {
    const textField = document.getElementById(elementId);
    textField.innerText = value;
}
