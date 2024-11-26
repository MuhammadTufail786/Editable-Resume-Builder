const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplay = document.getElementById("resume-display") as HTMLDivElement;


function generateResume(event: SubmitEvent): void {
    event.preventDefault(); 

    
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLTextAreaElement).value;
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;

 
    const resumeContent: string = `
        <h2>${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <hr>
        <h3>Education</h3>
        <p>${education}</p>
        <hr>
        <h3>Experience</h3>
        <p>${experience}</p>
        <hr>
        <h3>Skills</h3>
        <p>${skills}</p>
    `;

    resumeDisplay.innerHTML = resumeContent;


    resumeDisplay.setAttribute("contenteditable", "true");
}

form.addEventListener("submit", generateResume);
