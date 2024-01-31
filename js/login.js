const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () =>
  container.classList.add('right-panel-active')
);

signInButton.addEventListener('click', () =>
  container.classList.remove('right-panel-active')
);

console.log('working');

console.log(signUpButton);
console.log(signInButton);
console.log(container);

const inYourFace = document.getElementById;

console.log(document.getElementById('signUp'));


document.addEventListener("DOMContentLoaded", function () {
  // Get the password and confirm password elements
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirmPassword");

  // Add an event listener to the confirm password input
  confirmPasswordInput.addEventListener("input", function () {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    // Check if passwords match
    if (password === confirmPassword) {
      // If passwords match, set label color to black
      confirmPasswordInput.style.color = "black";
    } else {
      // If passwords don't match, set label color to red
      confirmPasswordInput.style.color = "red";
    }
  });
});