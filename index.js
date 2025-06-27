function displayPoem (response) {
    console.log("poem generating");
    new Typewriter('#poem', {
         strings: [response.data.answer],
         autoStart: true,
         delay: 100,
       });
    (response.data.answer);
}

function generatePoem (event) {
    event.preventDefault();
    console.log("erster Schritt")
let userInstruction = document.querySelector("#user-instructions");
let apiKey = "o264bt8e7db718ffba5d20417c0b8fa3";
let context = "You are an expert who provides poems. Your mission is to generate a 4 line poem in basic HTML. Make sure to follow the user instruction.";
let prompt = `User instruction: Generate a short german poem about ${userInstruction.value}`;
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

console.log("Erstelle Gedicht");
console.log(`Prompt about ${userInstruction.value}`)

axios.get(apiUrl).then(displayPoem);
  
    
}
document.querySelector("form").addEventListener("submit", generatePoem)
