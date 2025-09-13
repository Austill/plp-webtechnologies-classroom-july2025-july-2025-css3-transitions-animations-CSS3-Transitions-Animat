// --- Part 2: Functions (parameters, return values, scope) ---

// Global variable
let globalValue = "I am global";

// Function with parameter + return value
function doubleNumber(num) {
  return num * 2;
}

// Function showing local scope
function localScopeDemo() {
  let localValue = "I am local";
  return localValue;
}

// Display results
document.getElementById("doubleResult").textContent = doubleNumber(5);
document.getElementById("scopeResult").textContent = globalValue;
// console.log(localScopeDemo()); // would log "I am local"

// --- Part 3: JS triggers CSS animation ---

const animateBtn = document.getElementById("animateBtn");
const jsBox = document.getElementById("jsBox");

// Function to trigger animation
function triggerAnimation(element, animationClass) {
  element.classList.add(animationClass);
  // remove after animation so it can be reused
  setTimeout(() => element.classList.remove(animationClass), 1000);
}

// Event listener
animateBtn.addEventListener("click", () => {
  triggerAnimation(jsBox, "animate");
});
