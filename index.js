function writeCards(names, event) {
    let messages = []; // Create an empty array to store messages
  
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
  
    return messages;
  }
  
  // Test the function
  console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));

  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  
  // Test the function
  countDown(10);
  