const signupButton = document.getElementById("btn-signup");
const loginButton = document.getElementById("btn-login");

const signupModal = document.getElementById("signupModal");
const loginModal = document.getElementById("loginModal");

const closeSignup = document.getElementById("closeSignup");
const closeLogin = document.getElementById("closeLogin");

const signupForm = document.getElementById("signupForm");
const loginForm = document.getElementById("loginForm");
signupButton.addEventListener("click", function () {

    signupModal.style.display = "flex";
});
loginButton.addEventListener("click", function () {
    loginModal.style.display = "flex";
});
closeSignup.addEventListener("click", function () {
    signupModal.style.display = "none";
});
closeLogin.addEventListener("click", function () {
    loginModal.style.display = "none";
});
window.addEventListener("click", function (event) {
    if (event.target === signupModal) {

        signupModal.style.display = "none";

    }

    if (event.target === loginModal) {

        loginModal.style.display = "none";

    }
});
signupForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("signupName").value;
    const role = document.getElementById("userRole").value;
    alert(
        "Welcome to GlowLaunch, " +
        name +
        "!\n\nYour role: " +
        role +
        "\n\nYour account information has been submitted."
    );

    signupForm.reset();

    signupModal.style.display = "none";

});
loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    alert("Login submitted successfully!");

    loginForm.reset();

    loginModal.style.display = "none";

});
document
    .getElementById("forgotPassword")
    .addEventListener("click", function (event) {

        event.preventDefault();

        const email = prompt(
            "Enter your email address to reset your password:"
        );

        if (email) {

            alert(
                "If an account exists for " +
                email +
                ", a password reset link will be sent."
            );

        }

    });