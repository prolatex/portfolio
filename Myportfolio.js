

const container1El = document.querySelector(".container1");

const careers = ["is Godwin", " i am a business developer", " i am a solar system designer", " i am an installer", " i am energy auditor", " i am an instructor", " i am a front end developer", " i am a computer hardware technician", " and i am a content creator"];

let careerMyportfolio = 1

let characterMyportfolio = 1;

updateText()

function updateText(){
    characterMyportfolio++
    container1El.innerHTML = `
    <h2>is Godwin ${careers[careerMyportfolio].
        slice(1,2) === "I" ? "" : ""} ${careers[careerMyportfolio].slice(1,characterMyportfolio)}</h2> 
    `;
    
    if(characterMyportfolio === careers[careerMyportfolio].length){
        careerMyportfolio++
        characterMyportfolio = 0
    }

    if(careerMyportfolio === careers.length)
    {
       careerMyportfolio = 1; 
    }
    setTimeout(updateText,400);

    }

 

              
                    
                                       
        
    
