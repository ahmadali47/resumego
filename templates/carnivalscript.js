const obj = JSON.parse(localStorage.getItem("form"));

if (obj) {
    let lastname = obj["lname"].toUpperCase().trim();
    let firstname = obj["fname"].toUpperCase().trim();

    // document.getElementById("fname").innerHTML = firstname + `<span id="lname" name="lname"> ` + lastname + `</span>`;
    document.getElementById("fname").innerHTML = firstname;
    document.getElementById("lname").innerHTML = lastname;

    let title = obj["title"].toUpperCase().trim();
    document.getElementById("title").innerHTML = title;

    document.getElementById("address").innerHTML = `<i class="bi bi-house" viewBox="0 0 16 16"></i>` + ` ` + obj["address"];
    if (obj["address"] == "") {
        document.getElementById('address').style.display = 'none';
    }
    document.getElementById("phone").innerHTML = `<i class="bi bi-telephone" viewBox="0 0 16 16"></i>` + ` ` + obj["contact"];
    if (obj["contact"] == "") {
        document.getElementById('phone').style.display = 'none';
    }

    const string = obj["email"];
    const parts = string.split('@');
    const part1 = parts[0];
    const part2 = parts[1];

    document.getElementById("email").innerHTML = `<i class="bi bi-envelope" viewBox="0 0 16 16">` + ` ` + part1 + ` @` + part2;
    if (obj["email"] == "") {
        document.getElementById('email').style.display = 'none';
    }

    document.getElementById("about").innerHTML = obj["about"];
    if (obj["about"] == "") {
        document.getElementById('profile').style.display = 'none';
    }
}
if (!obj) {
    document.getElementById('profile').style.display = 'none';
}









// <!-- script for the skills  -->

const savedFields = JSON.parse(localStorage.getItem('inputFields'));
if (savedFields) {
    savedFields.forEach(field => {
        if (field.value == "") {

        } else {
            let text = document.getElementById("skillcontainer").innerHTML;
            document.getElementById("skillcontainer").innerHTML = text + "<li>" + field.value + "</li>"
        }
    });
}





// <!-- script for the languages  -->

const langFields = JSON.parse(localStorage.getItem('langFields'));
if (langFields) {
    langFields.forEach(field => {
        if (field.value == "") {

        } else {
            let text = document.getElementById("langcontainer").innerHTML;
            document.getElementById("langcontainer").innerHTML = text + "<li>" + field.value + "</li>"
        }
    });
}





// <!-- script for the custom  -->

const customFields = JSON.parse(localStorage.getItem('customFields'));
if (customFields) {
    customFields.forEach(field => {
        if (field.value == "") {

        } else {
            let text = document.getElementById("customcontainer").innerHTML;
            document.getElementById("customcontainer").innerHTML = text + "<li>" + field.value + "</li>"
        }
    });
}





// <!-- script for changing the colors -->

const storedclrdata = JSON.parse(localStorage.getItem('clrdata'));

if (storedclrdata) {
    const c1 = storedclrdata.c1;
    document.querySelector(':root').style.setProperty('--designclr', c1);
}


function lightenColor(hex, percent) {
    // Convert hex to RGB
    let r = parseInt(hex.substring(1, 3), 16);
    let g = parseInt(hex.substring(3, 5), 16);
    let b = parseInt(hex.substring(5, 7), 16);

    // Calculate the lighter values
    r = Math.min(255, Math.floor(r + (r * percent / 100)));
    g = Math.min(255, Math.floor(g + (g * percent / 100)));
    b = Math.min(255, Math.floor(b + (b * percent / 100)));

    // Convert back to hex and pad if necessary
    r = r.toString(16).padStart(2, '0');
    g = g.toString(16).padStart(2, '0');
    b = b.toString(16).padStart(2, '0');

    return `#${r}${g}${b}`;
}

let root = document.querySelector(':root');
let primcolor = getComputedStyle(root).getPropertyValue('--designclr').trim(); 
let seccolor = lightenColor(primcolor, 30); // Your lightenColor function here

root.style.setProperty('--designclr2', seccolor);









// <!-- script for the education data  -->

const storedEducationData = JSON.parse(localStorage.getItem('educationData'));

if (storedEducationData) {
    let data = ""; // Initialize the data variable

    storedEducationData.forEach((education) => {
        // Construct the HTML for each education section

        let inputText = education.detail;
        let lines = inputText.split(". ");
        let text = '';

        lines.forEach(line => {
            // Trim whitespace and check if the line is not empty
            let trimmedLine = line.trim();
            if (trimmedLine) {
                text += `<li>${trimmedLine}.</li>`; // Add the trimmed line with a period
            }
        });

        const newdata = `<h3>` + education.degree + `</h3>` +
            `<p>` + education.school + `</p>` +
            `<p class="date">` + education.year + `</p>` +
            // `<p>` + education.detail + `</p>`;
            `<ul>` + text + `</ul>`;

        data += newdata; // Append the newdata to the existing data
    });

    // Update the innerHTML of the container with the constructed data
    document.getElementById('edcontain').innerHTML = data;
}





// <!-- script for the experience data  -->

const storedExperienceData = JSON.parse(localStorage.getItem('experienceData'));

if (storedExperienceData) {
    let data = ""; // Initialize the data variable

    storedExperienceData.forEach((experience) => {
        // Construct the HTML for each experience section

        let inputText = experience.detail;
        let lines = inputText.split(". ");
        let text = '';

        lines.forEach(line => {
            // Trim whitespace and check if the line is not empty
            let trimmedLine = line.trim();
            if (trimmedLine) {
                text += `<li>${trimmedLine}.</li>`; // Add the trimmed line with a period
            }
        });

        const newdata = `<h3>` + experience.position + `</h3>` +
            `<p>` + experience.company + `</p>` +
            `<p class="date">` + experience.year + `</p>` +
            // `<p>` + experience.detail + `</p>`;
            `<ul>` + text + `</ul>`;

        data += newdata; // Append the newdata to the existing data
    });

    // Update the innerHTML of the container with the constructed data
    document.getElementById('expcontain').innerHTML = data;
}





// <!-- script for the sec1 data  -->

const storesec1Data = JSON.parse(localStorage.getItem('sec1Data'));

if (storesec1Data) {
    let data = ""; // Initialize the data variable

    storesec1Data.forEach((sec) => {
        // Construct the HTML for each sec section

        let inputText = sec.detail;
        let lines = inputText.split(". ");
        let text = '';

        lines.forEach(line => {
            // Trim whitespace and check if the line is not empty
            let trimmedLine = line.trim();
            if (trimmedLine) {
                text += `<li>${trimmedLine}.</li>`; // Add the trimmed line with a period
            }
        });

        const newdata = `<h3>` + sec.title + `</h3>` +
            `<p class="date">` + sec.year + `</p>` +
            // `<p>` + sec.detail + `</p>`;
            `<ul>` + text + `</ul>`;

        data += newdata; // Append the newdata to the existing data
    });

    // Update the innerHTML of the container with the constructed data
    document.getElementById('sec1contain').innerHTML = data;
}





// <!-- script for the sec2 data  -->

const storesec2Data = JSON.parse(localStorage.getItem('sec2Data'));

if (storesec2Data) {
    let data = ""; // Initialize the data variable

    storesec2Data.forEach((sec) => {
        // Construct the HTML for each sec section

        let inputText = sec.detail;
        let lines = inputText.split(". ");
        let text = '';

        lines.forEach(line => {
            // Trim whitespace and check if the line is not empty
            let trimmedLine = line.trim();
            if (trimmedLine) {
                text += `<li>${trimmedLine}.</li>`; // Add the trimmed line with a period
            }
        });

        const newdata = `<h3>` + sec.title + `</h3>` +
            `<p class="date">` + sec.year + `</p>` +
            // `<p>` + sec.detail + `</p>`;
            `<ul>` + text + `</ul>`;

        data += newdata; // Append the newdata to the existing data
    });

    // Update the innerHTML of the container with the constructed data
    document.getElementById('sec2contain').innerHTML = data;
}





// <!-- script to get the name of 2 custom sections  -->

const secs = JSON.parse(localStorage.getItem('secData'));

if (secs) {
    document.getElementById('sec1').innerHTML = secs.sec1;
    document.getElementById('sec2').innerHTML = secs.sec2;
    document.getElementById('custom').innerHTML = secs.custom;
}





// <!-- to set the propery to all the elements to display none if not in use  -->

const lang = JSON.parse(localStorage.getItem('langFields'));

if (!lang || Object.keys(lang).length === 0) {
    document.getElementById('languages').style.display = 'none';
}

const custom = JSON.parse(localStorage.getItem('customFields'));

if (!custom || Object.keys(custom).length === 0) {
    document.getElementById('customs').style.display = 'none';
}

const skills = JSON.parse(localStorage.getItem('inputFields'));

if (!skills || Object.keys(skills).length === 0) {
    document.getElementById('skills').style.display = 'none';
}

const experience = JSON.parse(localStorage.getItem('experienceData'));

if (!experience || Object.keys(experience).length === 0) {
    document.getElementById('experience').style.display = 'none';
}

const education = JSON.parse(localStorage.getItem('educationData'));

if (!education || Object.keys(education).length === 0) {
    document.getElementById('education').style.display = 'none';
}

const sec1 = JSON.parse(localStorage.getItem('sec1Data'));

if (!sec1 || Object.keys(sec1).length === 0) {
    document.getElementById('achievements').style.display = 'none';
}

const sec2 = JSON.parse(localStorage.getItem('sec2Data'));

if (!sec2 || Object.keys(sec2).length === 0) {
    document.getElementById('projects').style.display = 'none';
}



