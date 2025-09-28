const obj = JSON.parse(localStorage.getItem("form"));

if (obj) {
    let lastname = obj["lname"].toUpperCase().trim();
    let firstname = obj["fname"].toUpperCase().trim();

    document.getElementById("fname").innerHTML = firstname + `<span id="lname" name="lname"> ` + lastname + `</span>`;

    let title = obj["title"].toUpperCase().trim();
    document.getElementById("title").innerHTML = title;

    document.getElementById("email").innerHTML = obj['email'];
    if (obj["email"] == "") {
        document.getElementById('email').style.display = 'none';
    }
    document.getElementById("phone").innerHTML = obj["contact"];
    if (obj["contact"] == "") {
        document.getElementById('phone').style.display = 'none';
    }

    document.getElementById("address").innerHTML = obj["address"];
    if (obj["address"] == "") {
        document.getElementById('address').style.display = 'none';
    }
    
    document.getElementById("about").innerHTML = obj["about"];
    if (obj["about"] == "") {
        document.getElementById('profile').style.display = 'none';
    }
}
if (!obj) {
        document.getElementById('profile').style.display = 'none';
}

window.onload = function () {
    // Retrieve image from local storage
    const storedImage = localStorage.getItem('storedImage');

    if (storedImage) {
        // Display the image
        document.getElementById('pic').src = storedImage;
    }
};









// <!-- script for the skills  -->

const savedFields = JSON.parse(localStorage.getItem('inputFields'));
if (savedFields) {
    savedFields.forEach(field => {
        if (field.value == "") {

        } else {
            let text = document.getElementById("skillcontainer").innerHTML;
            document.getElementById("skillcontainer").innerHTML = text + "<li>" + "• " + field.value + "</li>"
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
            `<p class="date">` + education.year + `</p>`+
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

const img = localStorage.getItem('storedImage');

if (!img) {
    document.getElementById('pic').style.display = 'none';
}

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