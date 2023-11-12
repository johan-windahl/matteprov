document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {

          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');

        });
      });
    }

  });

function printResults() {
    var printContainer = document.getElementById("results").cloneNode(true);
    var includeAnswerKey = document.getElementById("includeAnswerKey").checked;
    
    printContainer.id = ""; 

    var printWindow = window.open('Test', '_blank');
    printWindow.document.write('<html><head><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"><style> \
    @media print { \
    @page { \
        margin: 0.5cm; \
    }    \
    .new-page { \
        page-break-before: always; \
    } \
    body::before { \
    content: normal !important; \
    } \
    body { \
        margin: 0.5cm; \
    } \
    }</style></head><body>');
    printWindow.document.write('<h1 class="title has-text-centered">Matte Prov - Lycka till!</h1>');
    printWindow.document.write(printContainer.outerHTML);

    if (includeAnswerKey) {
        var answerKeyContent = document.getElementById("answerKeyElement").cloneNode(true);
        answerKeyContent.classList.remove("is-hidden");
        printWindow.document.write('<div class="new-page"></div>');
        printWindow.document.write('<h1 class="title has-text-centered">Facit</h1>');
        printWindow.document.write(answerKeyContent.outerHTML);
    }

    printWindow.document.write('</body></html>');
    printWindow.document.close();
    setTimeout(function () {
        printWindow.print();
    }, 200); // Vänta 1 sekund innan utskrift
}

function generateUniqueMultiplicationTest() {
    var startNumber = parseInt(document.getElementById("startNumber").value);
    var endNumber = parseInt(document.getElementById("endNumber").value);
    var numQuestions = parseInt(document.getElementById("numQuestions").value);
    var includeAnswerKey = document.getElementById("includeAnswerKey").checked;
    document.getElementById("printButton").disabled = false;
    var answerKeyContent = ""

    var resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";

    var answerKeyElement = document.getElementById("answerKeyElement");
    answerKeyElement.innerHTML = "";

    var combinations = [];
    for (var i = startNumber; i <= endNumber; i++) {
        for (var j = 1; j <= 10; j++) {
            combinations.push({ num1: i, num2: j });
        }
    }

    shuffleArray(combinations);

    for (var k = 0; k < numQuestions; k++) {
        var question = combinations[k].num1 + " * " + combinations[k].num2 + " = ";
        var answer = combinations[k].num1 * combinations[k].num2;
        resultsContainer.innerHTML += `
    <div class="column is-one-third">
        <div class="notification">${question}</div>
    </div>
`;

        if (includeAnswerKey) {
            answerKeyElement.innerHTML += `
        <div class="column is-one-third">
            <div class="notification">${question} ${answer}</div>
        </div>
    `;
        }
    }
}

function generateUniqueAdditionTest() {
    var startNumber = parseInt(document.getElementById("startNumber").value);
    var endNumber = parseInt(document.getElementById("endNumber").value);
    var numQuestions = parseInt(document.getElementById("numQuestions").value);
    var includeAnswerKey = document.getElementById("includeAnswerKey").checked;
    document.getElementById("printButton").disabled = false;
    var answerKeyContent = ""

    var resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";

    var answerKeyElement = document.getElementById("answerKeyElement");
    answerKeyElement.innerHTML = "";

    var combinations = [];
    for (var i = startNumber; i <= endNumber; i++) {
        for (var j = 1; j <= 10; j++) {
            combinations.push({ num1: i, num2: j });
        }
    }

    shuffleArray(combinations);

    for (var k = 0; k < numQuestions; k++) {
        var question = combinations[k].num1 + " + " + combinations[k].num2 + " = ";
        var answer = combinations[k].num1 + combinations[k].num2;
        resultsContainer.innerHTML += `
    <div class="column is-one-third">
        <div class="notification">${question}</div>
    </div>
`;

        if (includeAnswerKey) {
            answerKeyElement.innerHTML += `
        <div class="column is-one-third">
            <div class="notification">${question} ${answer}</div>
        </div>
    `;
        }
    }
}

function generateUniqueSubtractionTest() {
    var startNumber = parseInt(document.getElementById("startNumber").value);
    var endNumber = parseInt(document.getElementById("endNumber").value);
    var numQuestions = parseInt(document.getElementById("numQuestions").value);
    var includeAnswerKey = document.getElementById("includeAnswerKey").checked;
    document.getElementById("printButton").disabled = false;
    var answerKeyContent = "";

    var resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";

    var answerKeyElement = document.getElementById("answerKeyElement");
    answerKeyElement.innerHTML = "";

    var combinations = [];
    for (var i = startNumber; i <= endNumber; i++) {
        for (var j = 1; j <= 10; j++) {
            if (i >= j) { // Ensure num1 is greater than or equal to num2
                combinations.push({ num1: i, num2: j });
            }
        }
    }

    shuffleArray(combinations);

    for (var k = 0; k < numQuestions; k++) {
        var question = combinations[k].num1 + " - " + combinations[k].num2 + " = ";
        var answer = combinations[k].num1 - combinations[k].num2;
        resultsContainer.innerHTML += `
            <div class="column is-one-third">
                <div class="notification">${question}</div>
            </div>
        `;

        if (includeAnswerKey) {
            answerKeyElement.innerHTML += `
                <div class="column is-one-third">
                    <div class="notification">${question} ${answer}</div>
                </div>
            `;
        }
    }
}

function generateUniqueDivisionTest() {
    var startNumber = parseInt(document.getElementById("startNumber").value);
    var endNumber = parseInt(document.getElementById("endNumber").value);
    var numQuestions = parseInt(document.getElementById("numQuestions").value);
    var includeAnswerKey = document.getElementById("includeAnswerKey").checked;
    document.getElementById("printButton").disabled = false;
    var answerKeyContent = "";

    var resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";

    var answerKeyElement = document.getElementById("answerKeyElement");
    answerKeyElement.innerHTML = "";

    var validCombinations = [];

    // Create an array of valid combinations (division without decimals)
    for (var i = startNumber; i <= endNumber; i++) {
        for (var j = 2; j <= 10; j++) {
            if (i % j === 0 && i !== j) { // Check if division result is an integer and not division by 1 or itself
                validCombinations.push({ num1: i, num2: j });
            }
        }
    }

    // Ensure numQuestions is generated
    while (validCombinations.length < numQuestions) {
        var randomNum1 = Math.floor(Math.random() * (endNumber - startNumber + 1)) + startNumber;
        var randomNum2 = Math.floor(Math.random() * 9) + 2; // Random num2 from 2 to 10
        if (randomNum1 % randomNum2 === 0 && randomNum1 !== randomNum2) {
            validCombinations.push({ num1: randomNum1, num2: randomNum2 });
        }
    }

    shuffleArray(validCombinations);

    for (var k = 0; k < numQuestions; k++) {
        var question = validCombinations[k].num1 + " / " + validCombinations[k].num2 + " = ";
        var answer = validCombinations[k].num1 / validCombinations[k].num2;
        resultsContainer.innerHTML += `
            <div class="column is-one-third">
                <div class="notification">${question}</div>
            </div>
        `;

        if (includeAnswerKey) {
            answerKeyElement.innerHTML += `
                <div class="column is-one-third">
                    <div class="notification">${question} ${answer}</div>
                </div>
            `;
        }
    }
}




function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}