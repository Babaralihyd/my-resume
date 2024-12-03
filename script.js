var form = document.getElementById('form');
var resumDisplayElement = document.getElementById('form-see');
if (form && resumDisplayElement) {
    form.addEventListener('submit', function (event) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        event.preventDefault();
        // Retrieve input values safely
        var name = (_b = (_a = document.getElementById('name')) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : '';
        var fname = (_d = (_c = document.getElementById('fname')) === null || _c === void 0 ? void 0 : _c.value) !== null && _d !== void 0 ? _d : ''; // Corrected to match the ID in HTML
        var email = (_f = (_e = document.getElementById('email')) === null || _e === void 0 ? void 0 : _e.value) !== null && _f !== void 0 ? _f : ''; // Corrected to match the ID in HTML
        var phone = (_h = (_g = document.getElementById('phone')) === null || _g === void 0 ? void 0 : _g.value) !== null && _h !== void 0 ? _h : '';
        var address = (_k = (_j = document.getElementById('address')) === null || _j === void 0 ? void 0 : _j.value) !== null && _k !== void 0 ? _k : '';
        var education = (_m = (_l = document.getElementById('education')) === null || _l === void 0 ? void 0 : _l.value) !== null && _m !== void 0 ? _m : '';
        var experience = (_p = (_o = document.getElementById('experience')) === null || _o === void 0 ? void 0 : _o.value) !== null && _p !== void 0 ? _p : '';
        var information = (_r = (_q = document.getElementById('information')) === null || _q === void 0 ? void 0 : _q.value) !== null && _r !== void 0 ? _r : '';
        var skills = (_t = (_s = document.getElementById('skills')) === null || _s === void 0 ? void 0 : _s.value) !== null && _t !== void 0 ? _t : ''; // Corrected to match the ID in HTML
        // Check for missing required fields (example: name and email)
        if (!name || !email) {
            alert('Please fill out all required fields.');
            return;
        }
        // Generate the resume HTML
        var formHTML = "\n      <h2><b>Resume</b></h2>\n      <h3><b>Personal Information</b></h3>\n      <p><b>Name:</b> ".concat(name, "</p>\n      <p><b>Father's Name:</b> ").concat(fname, "</p>\n      <p><b>Email:</b> ").concat(email, "</p>\n      <p><b>Phone:</b> ").concat(phone, "</p>\n      <p><b>Address:</b> ").concat(address, "</p>\n      \n      <h3><b>Education</b></h3>\n      <p>").concat(education, "</p>\n      \n      <h3><b>Experience</b></h3>\n      <p>").concat(experience, "</p>\n      \n      <h3><b>Additional Information</b></h3>\n      <p>").concat(information, "</p>\n      \n      <h3><b>Skills</b></h3>\n      <p>").concat(skills, "</p>\n    ");
        // Display the generated HTML in the resume section
        resumDisplayElement.innerHTML = formHTML;
    });
}
else {
    console.error('The form or display element is missing.');
}
