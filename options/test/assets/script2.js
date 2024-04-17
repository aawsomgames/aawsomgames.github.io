const questions = {
    "He was a co-founder of the Standard Oil Company, which dominated the oil industry and was the first great U.S. business trust.":"John D. Rockefeller",
    "Investigative journalists who awakened middle class readers to the conditions in industrial America.":"Muckraker",
    "26th president, known for: conservationism, trust-busting, Hepburn Act, safe food regulations, Square Deal, Panama Canal, Great White Fleet, Nobel Peace Prize for negotiation of peace in Russo-Japanese War":"President Theodore Roosevelt",
    "A Scottish American industrialist who led the enormous expansion of the American steel industry in the late 19th century.":"Andrew Carnegie",
    "Refers to the industrialists or big business owners who gained huge profits by paying their employees extremely low wages. They also drove their competitors out of business by selling their products cheaper than it cost to produce it. Then when they controlled the market, they hiked prices high above original price.":"Robber Baron",
    "He supported the National Reclamation Act of 1902 and designated the money from public land sales for water management in arid western areas. Set aside over 200 million acres of public land as national forests, mineral reserves, and water power sites. Created the national park service act.":"Theodore Roosevelt's Conservation Movement",
    "This 1906 work by Upton Sinclair pointed out the abuses of the meat packing industry. The book led to the passage of the 1906 Meat Inspection Act.":"The Jungle",
    "Muckraker who shocked the nation when he published The Jungle, a novel that revealed gruesome details about the meat packing industry in Chicago.":"Upton Sinclair",
    "Provided that federal inspectors visit meatpacking plants to ensure that they met minimum standards of sanitation.":"Meat Inspection Act",
    "Forbade the manufacture or sale of mislabeled or adulterated food or drugs, it gave the government broad powers to ensure the safety and efficacy of drugs in order to abolish the 'patent' drug trade.":"Food and Drug Administration",
    "A leading muckraker and magazine editor, she exposed the corruption of the oil industry with her 1904 work A History of Standard Oil.":"Ida Tarbell",
    "A book about Rockefeller's monopoly over the oil business and unethical tactics, sympathetically portraying the plight of Pennsylvania's independent oil workers":"History of Standard Oil",
    "American oil producing, transporting, refining, and marketing company. Established in 1870 as a corporation in Ohio, it was the largest oil refiner in the world.":"Standard Oil Company",
    "A form of journalism in which reporters deeply investigate a single topic of interest, often involving crime, political corruption, or corporate wrongdoing":"investigative journalism",
    "A system of economic production based on the private ownership of property and the contractual exchange for profit of goods, labor, ad money.":"capitalism",
    "A Danish immigrant, he became a reporter who pointed out the terrible conditions of the tenement houses of the big cities where immigrants lived during the late 1800s. He wrote How The Other Half Lives in 1890.":"Jacob Riis",
    "A reporter, who in essence tells (or supports) a story through the use of images that they capture":"Photojournalist",
    "Book that pointed out the horrible conditions of urban immigrants.":"How the Other Half Lives",
    "A multifamily urban dwelling, usually overcrowded and unsanitary":"tenement housing",
    "A set of rules that specify the minimum standards for constructed objects such as buildings and non building structures. ":"municipal housing codes",
    "This woman was a reformer and pacifist best known for her 1889 founding of Hull House, an early settlement house that provided various educational and cultural activities for poor immigrants.":"Jane Addams",
    "This was one response to the problem of over-population in the cities. These were staffed by members of the educated middle class, and they sought to help immigrant families adapt to the language and customs of their new country.":"settlement house movement",
    "Settlement home designed as a welfare agency for needy families. It provided social and educational opportunities for working class people in the neighborhood as well as improving some of the conditions caused by poverty.":"Hull House",
    "Founded in 1909 to abolish segregation and discrimination, to oppose racism and to gain civil rights for African Americans, got Supreme Court to declare grandfather clause unconstitutional":"National Association for the Advancement of Colored People",
    "Preschool and day care for black children":"Ida B. Wells",
    "Were racial segregation laws enacted after the Reconstruction period in Southern United States":"Jim Crow",
    "Supreme Court doctrine established in the case of Plessy v. Ferguson. Allowed state-required racial segregation in places of public accommodation as long as the facilities were equal":"separate but equal",
    "28th president of the United States, known for World War I leadership, created Federal Reserve, Federal Trade Commission, Clayton Antitrust Act, progressive income tax, lower tariffs, women's suffrage (reluctantly), Treaty of Versailles, sought 14 points post-war plan, League of Nations (but failed to win U.S. ratification), won Nobel Peace Prize":"Woodrow Wilson",
    "1/8 black and could easily pass as a white man, sat in the section of a railroad car that was for 'whites only.' and was arrested after he refused to move.":"Homer Plessy",
    "This movement sought to improve life in the industrial age by making moderate political changes and social improvements through governmental action.":"Progressive Movement",
    "Movement of farmers in the late 1800s to become politically involved to protect their interest in America; movement wanted to expand the money supply and regulate Big Business.":"Populist Movement",
    "The corrupt acquisition of funds, through outright theft or embezzling or through questionably legal methods like kickback or insider trading":"graft",
    "A party organization that recruits voter loyalty with tangible incentives and is characterized by a high degree of control over member activity":"political machine",
    "A political organization within the Democratic Party in New York city (late 1800's and early 1900's) seeking political control by corruption and bossism":"Tammany Hall",
    "Amendment that stated that Senators were now elected by popular vote from the citizens.":"Seventeenth Amendment",
    "Voters can instruct the legislature to consider a specific bill.":"initiative",
    "People could directly vote on things, and policy issues.":"referendum",
    "Voters can remove a public official from office.":"recall",
    "Economic liberalism that believes in unrestricted private enterprise and no government interference in the economy.":"laissez-faire",
    "People condered about the enviornment and wanted to preserve it":"environmentalist",
    "Established in 1905 added nearly 150 million acres of national forests, controlled their use, and regulated their harvest":"national forest service",
    "Wilson 1914, prevent corporations from owning monopolies":"Clayton Anti-Trust Legislation",
    "Any government activity designed to kill trusts or monopolies":"Trust-buster",
    "Republican Senator from Wisconsin - ran for president under the Progressive Party - proponent of Progressivism and a vocal opponent of railroad trusts, bossism, World War I, and the League of Nations":"Robert La Follotte"
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