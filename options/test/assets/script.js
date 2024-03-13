const questions = {
    "The period from 1865 to 1877 of reuniting and rebuilding the South following the end of the Civil War":"Reconstruction",
    "The Reconstruction plans of Lincoln and Johnson who believed it was the executive's power to rebuild the South. It was the first round of the Reconstruction, from 1863 to the spring of 1866.":"Presidential Reconstruction",
    "Passed in 1870 and 1871. They are also known as the Ku Klux Klan Acts. They prohibited the states from discriminating against voters on the basis of race and gave the federal government the power to supersede the state courts and prosecute violations of the law.":"Enforcement Acts",
    "":"Scalawags",
    "":"Allegiance",
    "":"Ku Klux Klan Act of 1871",
    "":"Civil Rights Act of 1866",
    "":"Carpetbaggers",
    "":"",
    "":"",
    "":"",
    "":"",
    "":"",
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
    // Other questions and answers...
 };
 
 
 function shuffleQuestionsAndAnswers() {
    const shuffledQuestions = Object.keys(questions).sort(() => Math.random() - 0.5);
    const shuffledAnswers = shuffledQuestions.map(question => questions[question]);
 
 
    return {
        questions: shuffledQuestions,
        answers: shuffledAnswers
    };
 }
 
 
 function buildQuestions() {
    const container = document.getElementById("questions-container");
    const { questions: shuffledQuestions, answers: shuffledAnswers } = shuffleQuestionsAndAnswers();
 
 
    for (let i = 0; i < shuffledQuestions.length; i++) {
        const label = document.createElement("label");
        label.textContent = shuffledQuestions[i];
 
 
        const input = document.createElement("input");
        input.type = "text";
        input.classList.add("answer-input");
 
 
        container.appendChild(label);
        container.appendChild(input);
        container.appendChild(document.createElement("br"));
    }
 
 
    // Store the shuffled answers in a data attribute for later validation
    container.dataset.shuffledAnswers = JSON.stringify(shuffledAnswers);
 }
 
 
 function submitAnswers() {
    let score = 0;
    const inputs = document.querySelectorAll(".answer-input");
    const shuffledAnswers = JSON.parse(document.getElementById("questions-container").dataset.shuffledAnswers);
 
 
    inputs.forEach((input, index) => {
        const userAnswer = input.value.trim().toLowerCase();
        const correctAnswer = shuffledAnswers[index].toLowerCase();
 
 
        if (userAnswer === correctAnswer) {
            score++;
        }
    });
 
 
    alert(`You scored ${score}/${shuffledAnswers.length}.`);
 }
 
 
 // Build questions when the page loads
 document.addEventListener("DOMContentLoaded", buildQuestions);
 
 
 
 