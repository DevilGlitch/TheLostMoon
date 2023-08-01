function processCommand() {
    const inputElement = document.getElementById('command-input');
    const command = inputElement.value.trim().toLowerCase();
    const redirections = {
      '1': 'https://throne.com/thelostmoon',
      '2': 'https://streamelements.com/thelostmoonxviii/tip',
      '3': 'https://ko-fi.com/thelostmoonxviii',
      '4': 'https://www.example.com',
      '5': 'https://www.dubby.gg/discount/TheLostMoon?ref=iKd2tcmAniQavk',
    };
  
    if (redirections.hasOwnProperty(command)) {
      const url = redirections[command];
      window.open(url, '_blank');
    } else {
      alert('Invalid command. Please enter a valid number from the options.');
    }
  
    // Clear the input field after processing the command
    inputElement.value = '';
  }
  
