document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");
    const output = document.getElementById("formOutput");

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        // Get values
        let name = document.getElementById("fullname").value;
        let email = document.getElementById("email").value;
        let subject = document.getElementById("subject").value;
        let message = document.getElementById("message").value;

        let projectType = document.querySelector('input[name="project_type"]:checked');
        let projectValue = projectType ? projectType.value : "Not selected";

        // Display on page
        output.innerHTML = `
            <h3>Submitted Data:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong> ${message}</p>
            <p><strong>Project Type:</strong> ${projectValue}</p>
        `;

        form.reset();
    });

});