const questions = {
    "The period from 1865 to 1877 of reuniting and rebuilding the South following the end of the Civil War":"Reconstruction",
    "The Reconstruction plans of Lincoln and Johnson who believed it was the executive's power to rebuild the South. It was the first round of the Reconstruction, from 1863 to the spring of 1866.":"Presidential Reconstruction",
    "Passed in 1870 and 1871. They are also known as the Ku Klux Klan Acts. They prohibited the states from discriminating against voters on the basis of race and gave the federal government the power to supersede the state courts and prosecute violations of the law.":"Enforcement Acts",
    "A nickname southern Democrats gave to southern Republicans who were in control of the government during Reconstruction":"Scalawags",
    "Means loyalty.":"Allegiance",
    "The act empowered the President to suspend the writ of habeas corpus to combat the Ku Klux Klan and other white supremacy organizations during the Reconstruction Era. The act was the last of three Enforcement Acts passed by the United States Congress from 1870 to 1871 during the Reconstruction Era to combat attacks upon the suffrage rights of African Americans.":"Ku Klux Klan Act of 1871",
    "Passed in April 1866, it declared blacks citizens of the U.S. and gave the federal government the power to intervene in state affairs to protect the rights of citizens.":"Civil Rights Act of 1866",
    "A nickname southern Democrats gave to northern newcomers who led the hated Republican governments during Reconstruction":"Carpetbaggers",
    "The system that allowed farmers to get more credit. They used harvested crops to pay back their loans.":"Crop Lein System",
    "Paper money that was not supported by gold. This money became widely circulated during the Civil War.":"Greenbacks",
    "During this period of reconstruction, the southern states were occupied by the Union army and many steps to guarantee the rights of blacks were taken. The Radical Republicans also had Johnson impeached in 1867.":"Congressional Reconstruction",
    "The Republican president who took office in 1877. He was the governor of Ohio who the Republicans nominated because he was untouched by the corruption of the Grant administration.":"Rutherford B. Hayes",
    "This faction was in control of the congressional Reconstruction. This group struggled from 1866-1870 to extend equal rights to all Americans.":"Radical Republicans",
    "Lincoln's assassin.":"John Wilks Booth",
    "Vice President from Teneessee who became president upon Lincoln's death.":"Andrew Johnson",
    "Lincoln's Reconstruction plan, which required that 10% of voters in a state pledge loyalty to the U.S. before that state could rejoin the Union.":"Ten Percent Plan",
    "The 13th, 14th, and 15th amendment.":"Reconstruction Amendments",
    "The Secretary of War who was appointed under Lincoln and aligned with the Radical Republicans. Johnson dismissed Stanton in defiance of the Tenure of Office Act in 1867, believing the act to be unconstitutional. This led to the House impeaching Johnson.":"Edwin Stanton",
    "The presidential candidate who was a Democrat from New York. He won the popular vote in the election of 1876, but because in three Southern states the votes were contested. The Democrats threatened to send the election to the House of Representatives.":"Samuel J. Tilden",
    "A scandal, exposed in 1875, involving diversion of tax revenues in a conspiracy among government agents, politicians, whiskey distillers, and distributors.":"Whiskey Ring",
    "An African American Republican senator from the South during the Reconstruction Era.":"Blanch K. Bruce",
    "An African American from Mississippi who took the Senate seat once held by Jefferson Davis. Revels was a Republican, and many ex-Confederates resented him and other black representatives.":"Hiram Revels",
    "The last of the civil rights reforms passed by Congress during the Reconstruction era. This act guaranteed blacks equal accommodations in public places and prohibited courts from excluding them from juries. However, this act was poorly enforced because Republicans were moving on to other issues and the Southern aristocrats had regained control of the South.":"Civil Rights Acts of 1875",
    "The act empowered the President to suspend the writ of habeas corpus to combat the Ku Klux Klan and other white supremacy organizations during the Reconstruction Era. The act was the last of three Enforcement Acts passed by the United States Congress from 1870 to 1871 during the Reconstruction Era to combat attacks upon the suffrage rights of African Americans.":"Ku Klux Klan Act of 1871",
    "The most famous Radical Republican representing Pennsylvania in the House of Representatives who hoped the revolutionize southern society through an extended period of military rule where blacks could exercise their civil rights, would be educated in public schools, and receive lands confiscated from former plantation owners.":"Thaddeus Stevens",
    "Southern laws that limited the freedom of African Americans by attempting to keep them as close as possible to the condition of slavery.":"Black Codes",
    "The amendment that made slavery illegal throughout the United States":"Thirteenth Amendment",
    "The Amendment making any person born in the U.S. a citizen and guaranteeing such citizens equal protection under the law.":"Fourteenth Amendment",
    "The Amendment guaranteeing the right to vote to African American men.":"Fiveteenth Amendment",
    "A white supremacy group founded in 1867 by an ex-Confederate general Nathaniel Bedford Forrest. This group intimidated freemen by burning black-owned buildings and flogging/murdering blacks who tried to vote. The group also intimidated Republicans and any other person who they saw as helping the blacks.":"Ku Klux Klan",
    "A system in which farm laborers give most of their crop to their landowner as rent and keep only some for themselves.":"Sharecropping",
    "Passed through Congress in 1864, this bill was far stricter than Lincoln's 10% Plan and required 50 percent of the voters of a state to take the loyalty oath and permitted only non-Confederates to vote for a new state constitution. It was backed by the Radical Republicans, who thought Lincoln's plan would allow the southern aristocrats to assume power again and deny equality to blacks in the South.":"Wade-Davis Bill",
    "In 1867, Congress passed this act that prohibited the president from removing a federal official or military commander without the approval of the Senate. Congress passed this act to protect the Radical Republicans in Johnson's cabinet, including Secretary of War Edwin Stanton. Congress used this act as grounds for Johnson's impeachment.":"Tenure of Office Act",
    "The process of bringing charges of wrongdoing against an elected official such as the U.S. President.":"Impeachment",
    "Also known as the Military Reconstruction Act, passed into law on March 2, 1867 over the veto of President Andrew Johnson. The act applied to all the ex-Confederate states in the South, except Tennessee who had already ratified the Fourteenth Amendment.":"First Reconstruction Act",
    "Allowed by the 15th Amendment for Black men to vote.":"Black Suffurage",
    "Insiders gave stock to influential members of Congress. This was to avoid investigation of the high profits they were making from government subsidies for building the transcontinental railroad.":"Credit Mobilier Scandel",
    "This Act that removed the last of the restrictions on ex-Confederates, except for the top leaders. This allowed many of these conservative Democrats to retake control of state governments":"Amnesty Act of 1872",
    "Agreement in which Southern Democrats accepted Republican Rutherford B. Hayes's election to the presidency in 1876 in exchange for removing federal troops from the South.":"Comnpromise of 1877",
    "An organization established by Congress to provide relief for all the South's poor people. Its greatest success was in the area of establishing schools.":"Freedmen's Bureau",
    "A clause in the Fourteenth Amendment that prohibits states and local governments from depriving a person of life, liberty, or property without certain steps to ensure fairness.":"Due Process of Law",
    "Resolved by the U.S. Supreme Court in 1873, ruled that a citizen's 'privileges and immunities,' as protected by the Constitution's Fourteenth Amendment against the states, were limited to those spelled out in the Constitution and did not include many rights given by the individual states. Was the Court's first interpretation of the Fourteenth Amendment, arguably the most important addition to the Constitution after the Bill of Rights.":"Slaughterhouse Case",
    "Four year economic depression caused by overspeculation on railroads and western lands, and worsened by Grant's poor fiscal response (refusing to coin silver)":"Panic of 1873"
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
 
 
 
 