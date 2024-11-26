// Target form and resume display container
var form = document.getElementById("resume-form");
var resumeDisplay = document.getElementById("resume-display");
// Function to generate and display the resume
function generateResume(event) {
    event.preventDefault(); // Prevent form submission reload
    // Get form input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    // Create resume HTML content
    var resumeContent = "\n        <h2>".concat(name, "</h2>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <hr>\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n        <hr>\n        <h3>Experience</h3>\n        <p>").concat(experience, "</p>\n        <hr>\n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n    ");
    // Populate resume-display with generated content
    resumeDisplay.innerHTML = resumeContent;
    // Make resume editable
    resumeDisplay.setAttribute("contenteditable", "true");
}
// Add event listener to the form
form.addEventListener("submit", generateResume);
