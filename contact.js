const form = document.querySelector("form");
const nameField = form.querySelector('input[placeholder="Enter your name"]');
const emailField = form.querySelector('input[placeholder="Enter your email"]');
const phoneField = form.querySelector('input[placeholder="Enter your phone"]');
const websiteField = form.querySelector('input[placeholder="Enter your website"]');
const messageField = form.querySelector("textarea");
const msgSpan = document.getElementById("form-msg");

// دالة إظهار الرسالة بلون
function showMessage(text, color) {
    msgSpan.style.display = "inline";
    msgSpan.textContent = text;
    msgSpan.style.color = color;   // 👈 تغيير اللون مباشرة
}

// إخفاء الرسالة أول ما يبدأ يكتب
[nameField, emailField, phoneField, websiteField, messageField].forEach(field => {
    field.addEventListener("input", () => {
        msgSpan.style.display = "none";
    });
});

form.addEventListener("submit", function(e) {
    e.preventDefault(); // منع الريلود

    showMessage("Sending your message...", "gray");

    setTimeout(() => {
        let name = nameField.value.trim();
        let email = emailField.value.trim();
        let phone = phoneField.value.trim();
        let website = websiteField.value.trim();
        let message = messageField.value.trim();

        if (name === "" || email === "" || phone === "" || website === "" || message === "") {
            showMessage("All fields are required!", "red");
        } 
        else if (!email.includes("@")) {
            showMessage("Enter a valid email address!", "red");
        } 
        else if (!/^\d+$/.test(phone)) {
            showMessage("Phone number must contain digits only!", "red");
        } 
        else {
            showMessage("Your message has been sent", "#2E2B70"); // بنفسجي
            form.reset();
        }
    }, 1500);
});
