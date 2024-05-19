const header = document.getElementById("header");
const sidebar = document.getElementById("sidebar");
let timeout; // Variable to store the timeout reference

document.addEventListener("mousemove", () => {
  // Reset the timeout whenever the mouse moves
  clearTimeout(timeout);

  // Set the opacity back to 1 (fully visible)
  header.style.opacity = 1;
  sidebar.style.opacity = 1;

  // Set a new timeout to fade after a period of inactivity
  timeout = setTimeout(() => {
    header.style.opacity = 0; // Fade out
    sidebar.style.opacity = 0; // Fade out
  }, 2000); // Adjust this value to control the fade delay (in milliseconds)
});