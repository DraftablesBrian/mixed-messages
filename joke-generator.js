// JavaScript program to display a random joke

// Array of jokes
const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "I told my wife she should embrace her mistakes. She gave me a hug.",
    "Why do we tell actors to 'break a leg'? Because every play has a cast.",
    "Parallel lines have so much in common. It’s a shame they’ll never meet.",
    "Why couldn't the bicycle stand up by itself? It was two tired.",
    "What do you call fake spaghetti? An impasta.",
    "I would tell you a joke about an invisible man, but I can't see it catching on.",
    "I've got a great joke about construction, but I'm still working on it.",
    "What do you call cheese that isn't yours? Nacho cheese.",
    "Why don’t skeletons fight each other? They don’t have the guts."
  ];
  
  // Function to generate a random joke
  function getRandomJoke() {
    const index = Math.floor(Math.random() * jokes.length);
    return jokes[index];
  }
  
  // Display a random joke
  console.log(getRandomJoke());
  