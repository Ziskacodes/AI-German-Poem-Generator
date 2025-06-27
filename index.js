function generatePoem (event) {
    event.preventDefault();
    let poemElement= document.querySelector(".poem");
   new Typewriter('#poem', {
        strings: ['Generating Poem'],
        autoStart: true,
        delay: 150,
      });;
    
}
document.querySelector("form").addEventListener("submit", generatePoem)
