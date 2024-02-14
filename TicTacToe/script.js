const player1NameInput = document.querySelector("#namePlayer1");
const player2NameInput = document.querySelector("#namePlayer2");
const player1NameOutput = document.querySelector("#player1Tag");
const player2NameOutput = document.querySelector("#player2Tag");
const mainContaienr = document.querySelector("#mainSection")
const form = document.querySelector("#userInfoForm");
const submit = document.querySelector("#submit-btn");

submit.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Validate player names (optional)
    if (player1NameInput.value.trim() === '' || player2NameInput.value.trim() === '') {
        // Handle empty names, e.g., show an error message
        alert('Please enter valid player names.');
        return;
    }

    form.style.display = "none"; // Hide the form
    mainContaienr.style.display = "block"
    player1NameOutput.textContent = player1NameInput.value;
    player2NameOutput.textContent = player2NameInput.value;

});











// const promptBtn = document.querySelector(".prompt-btn")
// const promptContainer = document.querySelector("#resultPromptContainer")

// promptBtn.addEventListener("click", () => {
//     promptContainer.style.display = "none"
// })