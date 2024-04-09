const errorContainer = document.getElementById('errorContainer');
const errorMessage = document.getElementById('errorMessage');

function displayError(message) {
    errorMessage.textContent = message;
    errorContainer.style.display = 'block'; // Show the error container

    // Toggle visibility (blink) every 500ms (half a second)
    const blinkInterval = setInterval(() => {
        errorMessage.style.visibility = (errorMessage.style.visibility === 'hidden') ? 'visible' : 'hidden';
    }, 500);

    // Clear the blinking interval after 5 seconds (5000ms)
    setTimeout(() => {
        clearInterval(blinkInterval);
        errorContainer.style.display = 'none'; // Hide the error container after blinking stops
    }, 5000); // Adjust the time as needed
}

// Example usage:
displayError("This is an error message.");
const farmAnimals = 'cow horse sheep pig chicken';
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ')
const [bessie, , dolly, babe, little] = farmAnimals.split(' ')
const [blackAndWhite, , black, pink, ] = farmAnimals.split(' ')

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const [red, orange, yellow, green, blue, indigo, violet] = colors
const [r, o, y, g, b,, v] = colors
const indg = colors[5]

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};


const {muppetName, color, song, job, partner} = muppet

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};
const {song2, song4} = {...nestedMuppet.album.theMuppetMovie}
const {nestedJob, nestedPartner} = nestedMuppet
const {muppetName, color, song, job, partner} = muppet

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};
const {song2, song4} = {...nestedMuppet.album.theMuppetMovie}
const {nestedJob, nestedPartner} = nestedMuppet


const errorContainer = document.getElementById('errorContainer');
const errorMessage = document.getElementById('errorMessage');

function displayError(message) {
    errorMessage.textContent = message;
    errorContainer.style.display = 'block'; // Show the error container

    // Toggle visibility (blink) every 500ms (half a second)
    const blinkInterval = setInterval(() => {
        errorMessage.style.visibility = (errorMessage.style.visibility === 'hidden') ? 'visible' : 'hidden';
    }, 500);

    // Clear the blinking interval after 5 seconds (5000ms)
    setTimeout(() => {
        clearInterval(blinkInterval);
        errorContainer.style.display = 'none'; // Hide the error container after blinking stops
    }, 5000); // Adjust the time as needed
}
const errorContainer = document.getElementById('errorContainer');
const errorMessage = document.getElementById('errorMessage');

function displayError(message) {
    errorMessage.textContent = message;
    errorContainer.style.display = 'block'; // Show the error container

    // Toggle visibility (blink) every 500ms (half a second)
    const blinkInterval = setInterval(() => {
        errorMessage.style.visibility = (errorMessage.style.visibility === 'hidden') ? 'visible' : 'hidden';
    }, 500);

    // Clear the blinking interval after 5 seconds (5000ms)
    setTimeout(() => {
        clearInterval(blinkInterval);
        errorContainer.style.display = 'none'; // Hide the error container after blinking stops
    }, 5000); // Adjust the time as needed
}
