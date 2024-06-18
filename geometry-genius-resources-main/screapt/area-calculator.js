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
    addToCalculationEntry('Triangle', area);
}

// Function to calculate the area of a rectangle
function calculateRectangleArea() {
    const width = getInputValue('rectangle-width');
    const length = getInputValue('rectangle-length');

    if (isNaN(width) || isNaN(length) || width <= 0 || length <= 0) {
        alert("Please enter valid positive numbers for width and length.");
        return;
    }

    const area = width * length;
    setElementInnerText('display-rectangle-area', area);
    addToCalculationEntry('Rectangle', area);
}

// Function to calculate the area of a parallelogram
function calculateParallelogramArea() {
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');

    if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
        alert("Please enter valid positive numbers for base and height.");
        return;
    }

    const area = base * height;
    setElementInnerText('display-parallelogram-area', area);
    addToCalculationEntry('Parallelogram', area);
}

// Function to calculate the area of an ellipse
function calculateEllipseArea() {
    const majorRadius = getInputValue('ellipse-major-radius');
    const minorRadius = getInputValue('ellipse-minor-radius');

    if (isNaN(majorRadius) || isNaN(minorRadius) || majorRadius <= 0 || minorRadius <= 0) {
        alert("Please enter valid positive numbers for major and minor radius.");
        return;
    }

    const area = Math.PI * majorRadius * minorRadius;
    setElementInnerText('display-ellipse-area', area.toFixed(2));
    addToCalculationEntry('Ellipse', area.toFixed(2));
}

// Function to calculate the area of a rhombus
function calculateRhombusArea() {
    const d1 = getInputValue('rhombus-diagonal1');
    const d2 = getInputValue('rhombus-diagonal2');

    if (isNaN(d1) || isNaN(d2) || d1 <= 0 || d2 <= 0) {
        alert("Please enter valid positive numbers for diagonals.");
        return;
    }

    const area = 0.5 * d1 * d2;
    setElementInnerText('display-rhombus-area', area);
    addToCalculationEntry('Rhombus', area);
}

// Function to calculate the area of a pentagon
function calculatePentagonArea() {
    const perimeter = getInputValue('pentagon-perimeter');
    const apothem = getInputValue('pentagon-apothem');

    if (isNaN(perimeter) || isNaN(apothem) || perimeter <= 0 || apothem <= 0) {
        alert("Please enter valid positive numbers for perimeter and apothem.");
        return;
    }

    const area = 0.5 * perimeter * apothem;
    setElementInnerText('display-pentagon-area', area);
    addToCalculationEntry('Pentagon', area);
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

// Add to calculation entry
function addToCalculationEntry(areaType, area) {
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount;
    const p = document.createElement('p');
    p.classList.add('my-2');
    p.innerHTML = `${count + 1} . ${areaType} ${area} cm<sup>2</sup> <button class="convert-btn bg-blue-300 px-4 rounded-md font-bold mt-4">Convert</button>`;
    calculationEntry.appendChild(p);

    // Add event listener for the new convert button
    p.querySelector('.convert-btn').addEventListener('click', function() {
        convertToSquareMeters(p, area);
    });
}

// Function to convert cm² to m²
function convertToSquareMeters(element, areaInCm) {
    const areaInM = (areaInCm / 10000).toFixed(4); // 1 m² = 10,000 cm²
    element.innerHTML = element.innerHTML.replace(`${areaInCm} cm<sup>2</sup>`, `${areaInM} m<sup>2</sup>`);
}

// Add event listeners to existing convert buttons
document.querySelectorAll('.convert-btn').forEach(button => {
    button.addEventListener('click', function() {
        const parentElement = button.parentElement;
        const areaInCm = parseFloat(parentElement.textContent.split(' ')[1]);
        convertToSquareMeters(parentElement, areaInCm);
    });
});
