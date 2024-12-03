const form = document.getElementById('form') as HTMLFormElement;
const resumDisplayElement = document.getElementById('form-see') as HTMLDivElement;

if (form && resumDisplayElement) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Retrieve input values safely
    const name = (document.getElementById('name') as HTMLInputElement)?.value ?? '';
    const fname = (document.getElementById('fname') as HTMLInputElement)?.value ?? '';  // Corrected to match the ID in HTML
    const email = (document.getElementById('email') as HTMLInputElement)?.value ?? ''; // Corrected to match the ID in HTML
    const phone = (document.getElementById('phone') as HTMLInputElement)?.value ?? '';
    const address = (document.getElementById('address') as HTMLInputElement)?.value ?? '';
    const education = (document.getElementById('education') as HTMLTextAreaElement)?.value ?? '';
    const experience = (document.getElementById('experience') as HTMLTextAreaElement)?.value ?? '';
    const information = (document.getElementById('information') as HTMLTextAreaElement)?.value ?? '';
    const skills = (document.getElementById('skills') as HTMLTextAreaElement)?.value ?? '';  // Corrected to match the ID in HTML

    // Check for missing required fields (example: name and email)
    if (!name || !email) {
      alert('Please fill out all required fields.');
      return;
    }

    // Generate the resume HTML
    const formHTML = `
      <h2><b>Resume</b></h2>
      <h3><b>Personal Information</b></h3>
      <p><b>Name:</b> ${name}</p>
      <p><b>Father's Name:</b> ${fname}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Address:</b> ${address}</p>
      
      <h3><b>Education</b></h3>
      <p>${education}</p>
      
      <h3><b>Experience</b></h3>
      <p>${experience}</p>
      
      <h3><b>Additional Information</b></h3>
      <p>${information}</p>
      
      <h3><b>Skills</b></h3>
      <p>${skills}</p>
    `;

    // Display the generated HTML in the resume section
    resumDisplayElement.innerHTML = formHTML;
  });
} else {
  console.error('The form or display element is missing.');
}
