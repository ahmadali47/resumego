// for the form data 

function refresh() {
    location.reload();
}

const form = document.getElementById("form");

function store() {

    // preventDefault();

    const fd = new FormData(form);
    const obj = Object.fromEntries(fd);
    const json = JSON.stringify(obj);

    localStorage.setItem("form", json);

}

document.getElementById('form').addEventListener('input', function (event) {
    event.preventDefault();
    store();
})

// for the image data taking and saving in local storage 

function saveImage() {
    const input = document.getElementById('imageInput');
    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = function () {
        // Store image in local storage
        localStorage.setItem('storedImage', reader.result);
    };

    if (file) {
        reader.readAsDataURL(file);
    }
}

document.getElementById('imageInput').addEventListener('input', function (event) {
    event.preventDefault();
    saveImage();
});


// for showing the local storage data in input fields also 

function loadFormData() {
    const obj = JSON.parse(localStorage.getItem("form"));

    if (obj) {

        const firstname = obj["fname"];
        document.getElementById('fname').value = firstname;

        const lastname = obj["lname"];
        document.getElementById('lname').value = lastname;

        const title = obj["title"];
        document.getElementById('title').value = title;

        const address = obj["address"];
        document.getElementById("address").value = address;

        const contact = obj["contact"];
        document.getElementById("contact").value = contact;

        const email = obj["email"];
        document.getElementById("email").value = email;

        const about = obj["about"];
        document.getElementById("about").value = about;

    };

}
document.addEventListener('DOMContentLoaded', loadFormData());









// for skills section

var skillCount = 0;

// Function to save input fields to local storage
function saveToLocalStorage() {
    const inputFields = document.querySelectorAll('.input-group input');
    const data = [];
    inputFields.forEach((input) => {
        data.push({ id: input.id, value: input.value });
    });
    localStorage.setItem('inputFields', JSON.stringify(data));
}

// Function to load input fields from local storage
function loadFromLocalStorage() {
    const savedFields = JSON.parse(localStorage.getItem('inputFields'));
    if (savedFields) {
        savedFields.forEach(field => {
            addskillfield(field.id, field.value);
        });
    }
}

// Function to add a new input field
function addskillfield(id = null, value = '') {
    // Increment the field eduCount for new fields
    if (!id) {
        skillCount++;
        id = 'inputField-' + skillCount;
    } else {
        // Update the field eduCount to match the highest ID number
        const currentFieldNum = parseInt(id.split('-')[1]);
        if (currentFieldNum > skillCount) {
            skillCount = currentFieldNum;
        }
    }

    // Create a new div to hold the input field and delete icon
    const inputGroup = document.createElement('div');
    inputGroup.className = 'input-group';

    // Create a new input element with a unique ID and set its value if provided
    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.id = id;
    inputField.value = value;
    inputField.placeholder = 'Enter your text here...';

    // Add event listener to update local storage when input value changes
    inputField.addEventListener('input', saveToLocalStorage);

    // Create a delete icon
    const deleteIcon = document.createElement('span');
    deleteIcon.className = 'delete-icon';
    deleteIcon.innerHTML = '⌫'; // Using the '✖' symbol for the delete icon

    // Append the input field and delete icon to the input group div
    inputGroup.appendChild(inputField);
    inputGroup.appendChild(deleteIcon);

    // Add the input group to the container
    document.getElementById('skills').appendChild(inputGroup);

    deleteIcon.onclick = function () {
        delete_check(deleteIcon, inputGroup); // Pass the deleteIcon and inputlang to delete_check
    };

    // Save the current state to local storage
    saveToLocalStorage();
}

// Add event listener to the "Add Input Field" button
document.getElementById('skadd').addEventListener('click', function (event) {
    event.preventDefault();
    addskillfield(); // Add a new input field without predefined ID or value
});









// for education section 

var eduCount = 0;

// Function to add a new education section
function addEducationSection(educationData = {}) {
    eduCount++;

    const container = document.getElementById('education-container');

    const educationDiv = document.createElement('div');
    educationDiv.className = 'education-section';
    educationDiv.id = `education-section-${eduCount}`;

    const degreeInput = document.createElement('input');
    degreeInput.type = 'text';
    degreeInput.placeholder = 'Degree';
    degreeInput.id = `degree-${eduCount}`;
    degreeInput.value = educationData.degree || '';

    const schoolInput = document.createElement('input');
    schoolInput.type = 'text';
    schoolInput.placeholder = 'School/University';
    schoolInput.id = `school-${eduCount}`;
    schoolInput.value = educationData.school || '';

    const yearInput = document.createElement('input');
    yearInput.type = 'text';
    yearInput.placeholder = 'Year of Graduation';
    yearInput.id = `year-${eduCount}`;
    yearInput.value = educationData.year || '';

    const detailInput = document.createElement('textarea');
    detailInput.type = 'text';
    detailInput.placeholder = 'Description';
    detailInput.id = `detail-${eduCount}`;
    detailInput.className = 'about';
    detailInput.value = educationData.detail || '';

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';

    educationDiv.appendChild(degreeInput);
    educationDiv.appendChild(schoolInput);
    educationDiv.appendChild(yearInput);
    educationDiv.appendChild(detailInput);
    educationDiv.appendChild(deleteButton);

    deleteButton.onclick = function () {
        delete_check2(event, deleteButton, educationDiv); // Pass the deleteIcon and inputlang to delete_check
    };


    container.appendChild(educationDiv);

    // Save to local storage
    saveEducationData();
}

// Function to save education data to local storage
function saveEducationData() {
    const educationData = [];

    for (let i = 1; i <= eduCount; i++) {
        const section = document.getElementById(`education-section-${i}`);
        if (section) {
            const sectionData = {
                degree: section.querySelector(`#degree-${i}`).value,
                school: section.querySelector(`#school-${i}`).value,
                year: section.querySelector(`#year-${i}`).value,
                detail: section.querySelector(`#detail-${i}`).value
            };
            educationData.push(sectionData);
        }
    }

    localStorage.setItem('educationData', JSON.stringify(educationData));
}

// Function to load education data from local storage
function loadEducationData() {
    const storedEducationData = JSON.parse(localStorage.getItem('educationData'));

    if (storedEducationData) {
        storedEducationData.forEach((education, index) => {
            addEducationSection(education);
        });
    }
}

// Listen for input changes and save to local storage

document.getElementById('edadd').addEventListener('click', function (event) {
    event.preventDefault();
    addEducationSection();
});

document.getElementById('education-container').addEventListener('input', saveEducationData);









// for experience section 

var expCount = 0;

// Function to add a new experience section
function addExperienceSection(experienceData = {}) {
    expCount++;

    const container = document.getElementById('experience-container');

    const experienceDiv = document.createElement('div');
    experienceDiv.className = 'experience-section';
    experienceDiv.id = `experience-section-${expCount}`;

    const positionInput = document.createElement('input');
    positionInput.type = 'text';
    positionInput.placeholder = 'Position';
    positionInput.id = `position-${expCount}`;
    positionInput.value = experienceData.position || '';

    const companyInput = document.createElement('input');
    companyInput.type = 'text';
    companyInput.placeholder = 'Company/Place';
    companyInput.id = `company-${expCount}`;
    companyInput.value = experienceData.company || '';

    const yearInput = document.createElement('input');
    yearInput.type = 'text';
    yearInput.placeholder = 'e.g. 2021 - 2023';
    yearInput.id = `year-${expCount}`;
    yearInput.value = experienceData.year || '';

    const detailInput = document.createElement('textarea');
    detailInput.type = 'text';
    detailInput.placeholder = 'Write about your job experience and duties';
    detailInput.id = `detail-${expCount}`;
    detailInput.classList.add('about', 'bullet');
    detailInput.value = experienceData.detail || '';


    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';

    experienceDiv.appendChild(positionInput);
    experienceDiv.appendChild(companyInput);
    experienceDiv.appendChild(yearInput);
    experienceDiv.appendChild(detailInput);
    experienceDiv.appendChild(deleteButton);

    container.appendChild(experienceDiv);

    deleteButton.onclick = function () {
        delete_check2(event, deleteButton, experienceDiv); // Pass the deleteIcon and inputlang to delete_check
    };

    // Save to local storage
    saveExperienceData();
}

// Function to save experience data to local storage
function saveExperienceData() {
    const experienceData = [];

    for (let i = 1; i <= expCount; i++) {
        const section = document.getElementById(`experience-section-${i}`);

        if (section) {
            
            const sectionData = {
                position: section.querySelector(`#position-${i}`).value,
                company: section.querySelector(`#company-${i}`).value,
                year: section.querySelector(`#year-${i}`).value,
                detail: section.querySelector(`#detail-${i}`).value
                
            };
            experienceData.push(sectionData);
        }
    }

    localStorage.setItem('experienceData', JSON.stringify(experienceData));
}

// Function to load experience data from local storage
function loadExperienceData() {
    const storedExperienceData = JSON.parse(localStorage.getItem('experienceData'));

    if (storedExperienceData) {
        storedExperienceData.forEach((experience, index) => {
            addExperienceSection(experience);
        });
    }
}

// Listen for input changes and save to local storage

document.getElementById('expadd').addEventListener('click', function (event) {
    event.preventDefault();
    addExperienceSection(); // Add a new input field without predefined ID or value
});

document.getElementById('experience-container').addEventListener('input', saveExperienceData);









// for section 1 

var sec1Count = 0;

// Function to add a new experience section
function addSection1(sec1Data = {}) {
    sec1Count++;

    const container = document.getElementById('sec1-container');

    const sec1Div = document.createElement('div');
    sec1Div.className = 'sec1-section';
    sec1Div.id = `sec1-section-${sec1Count}`;

    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.placeholder = 'Title';
    titleInput.id = `title-${sec1Count}`;
    titleInput.value = sec1Data.title || '';

    const yearInput = document.createElement('input');
    yearInput.type = 'text';
    yearInput.placeholder = 'e.g. 2021';
    yearInput.id = `year-${sec1Count}`;
    yearInput.value = sec1Data.year || '';

    const detailInput = document.createElement('textarea');
    detailInput.type = 'text';
    detailInput.placeholder = 'Write about ...';
    detailInput.id = `detail-${sec1Count}`;
    detailInput.className = 'about';
    detailInput.value = sec1Data.detail || '';


    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';

    sec1Div.appendChild(titleInput);
    sec1Div.appendChild(yearInput);
    sec1Div.appendChild(detailInput);
    sec1Div.appendChild(deleteButton);

    container.appendChild(sec1Div);

    deleteButton.onclick = function () {
        delete_check2(event, deleteButton, sec1Div); // Pass the deleteIcon and inputlang to delete_check
    };

    // Save to local storage
    savesec1Data();
}

// Function to save sec1 data to local storage
function savesec1Data() {
    const sec1Data = [];

    for (let i = 1; i <= sec1Count; i++) {
        const section = document.getElementById(`sec1-section-${i}`);
        if (section) {
            const sectionData = {
                title: section.querySelector(`#title-${i}`).value,
                year: section.querySelector(`#year-${i}`).value,
                detail: section.querySelector(`#detail-${i}`).value,
            };
            sec1Data.push(sectionData);
        }
    }

    localStorage.setItem('sec1Data', JSON.stringify(sec1Data));
}

// Function to load sec1 data from local storage
function loadsec1Data() {
    const storedsec1Data = JSON.parse(localStorage.getItem('sec1Data'));

    if (storedsec1Data) {
        storedsec1Data.forEach((sec1, index) => {
            addSection1(sec1);
        });
    }
}

// Listen for input changes and save to local storage

document.getElementById('sec1add').addEventListener('click', function (event) {
    event.preventDefault();
    addSection1(); // Add a new input field without predefined ID or value
});

document.getElementById('sec1-container').addEventListener('input', savesec1Data);









// for section 2

var sec2Count = 0;

// Function to add a new experience section
function addSection2(sec1Data = {}) {
    sec2Count++;

    const container = document.getElementById('sec2-container');

    const sec2Div = document.createElement('div');
    sec2Div.className = 'sec2-section';
    sec2Div.id = `sec2-section-${sec2Count}`;

    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.placeholder = 'Title';
    titleInput.id = `title-${sec2Count}`;
    titleInput.value = sec1Data.title || '';

    const yearInput = document.createElement('input');
    yearInput.type = 'text';
    yearInput.placeholder = 'e.g. 2021';
    yearInput.id = `year-${sec2Count}`;
    yearInput.value = sec1Data.year || '';

    const detailInput = document.createElement('textarea');
    detailInput.type = 'text';
    detailInput.placeholder = 'Write about ...';
    detailInput.id = `detail-${sec2Count}`;
    detailInput.className = 'about';
    detailInput.value = sec1Data.detail || '';

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';

    sec2Div.appendChild(titleInput);
    sec2Div.appendChild(yearInput);
    sec2Div.appendChild(detailInput);
    sec2Div.appendChild(deleteButton);

    container.appendChild(sec2Div);

    deleteButton.onclick = function () {
        delete_check2(event, deleteButton, sec2Div);
    };

    // Save to local storage
    savesec2Data();
}

// Function to save sec2 data to local storage
function savesec2Data() {
    const sec2Data = [];

    for (let i = 1; i <= sec2Count; i++) {
        const section = document.getElementById(`sec2-section-${i}`);
        if (section) {
            const sectionData = {
                title: section.querySelector(`#title-${i}`).value,
                year: section.querySelector(`#year-${i}`).value,
                detail: section.querySelector(`#detail-${i}`).value,
            };
            sec2Data.push(sectionData);
        }
    }

    localStorage.setItem('sec2Data', JSON.stringify(sec2Data));
}

// Function to load sec2 data from local storage
function loadsec2Data() {
    const storedsec2Data = JSON.parse(localStorage.getItem('sec2Data'));

    if (storedsec2Data) {
        storedsec2Data.forEach((sec2, index) => {
            addSection2(sec2);
        });
    }
}

// Listen for input changes and save to local storage

document.getElementById('sec2add').addEventListener('click', function (event) {
    event.preventDefault();
    addSection2(); // Add a new input field without predefined ID or value
});

document.getElementById('sec2-container').addEventListener('input', savesec2Data);









// when inner html changes in customfield and sec1 and sec2 heading then save the changes 

document.getElementById('sec1').addEventListener('input', function (event) {
    event.preventDefault();
    secsdata(); // Add a new input field without predefined ID or value
});
document.getElementById('sec2').addEventListener('input', function (event) {
    event.preventDefault();
    secsdata(); // Add a new input field without predefined ID or value
});
document.getElementById('custom').addEventListener('input', function (event) {
    event.preventDefault();
    secsdata(); // Add a new input field without predefined ID or value
});

function secsdata() {

    const secData = {
        sec1: document.getElementById("sec1").innerHTML,
        sec2: document.getElementById("sec2").innerHTML,
        custom: document.getElementById("custom").innerHTML
    };

    localStorage.setItem('secData', JSON.stringify(secData));
}

function loadsecsData() {
    const storedsecData = JSON.parse(localStorage.getItem('secData'));

    if (storedsecData) {

        const sec1 = storedsecData.sec1;
        document.getElementById('sec1').innerHTML = sec1;

        const sec2 = storedsecData.sec2;
        document.getElementById('sec2').innerHTML = sec2;

        const custom = storedsecData.custom;
        document.getElementById('custom').innerHTML = custom;
    };
}









// for language section

var langCount = 0; // Counter to generate unique IDs

// Function to save input fields to local storage
function saveToLocal() {
    const langFields = document.querySelectorAll('.input-lang input');
    const data = [];
    langFields.forEach((input) => {
        data.push({ id: input.id, value: input.value });
    });
    localStorage.setItem('langFields', JSON.stringify(data));
}

// Function to load lang fields from local storage
function loadFromLocal() {
    const savedFields = JSON.parse(localStorage.getItem('langFields'));
    if (savedFields) {
        savedFields.forEach(field => {
            addlangfield(field.id, field.value);
        });
    }
}

// Function to add a new lang field
function addlangfield(id = null, value = '') {
    // Increment the field eduCount for new fields
    if (!id) {
        langCount++;
        id = 'langField-' + langCount;
    } else {
        // Update the field eduCount to match the highest ID number
        const currentFieldNum = parseInt(id.split('-')[1]);
        if (currentFieldNum > langCount) {
            langCount = currentFieldNum;
        }
    }

    // Create a new div to hold the lang field and delete icon
    const inputlang = document.createElement('div');
    inputlang.className = 'input-lang';

    // Create a new lang element with a unique ID and set its value if provided
    const langField = document.createElement('input');
    langField.type = 'text';
    langField.id = id;
    langField.value = value;
    langField.placeholder = 'e.g. German(basic, intermediate, fluent, native)';

    // Add event listener to update local storage when lang value changes lang
    langField.addEventListener('input', saveToLocal);

    // Create a delete icon
    const deleteIcon = document.createElement('span');

    deleteIcon.className = 'delete-icon';
    deleteIcon.innerHTML = '⌫'; // Using the '✖' symbol for the delete icon

    // Append the lang field and delete icon to the lang group div
    inputlang.appendChild(langField);
    inputlang.appendChild(deleteIcon);

    // Add the lang group to the container
    document.getElementById('lang-container').appendChild(inputlang);

    deleteIcon.onclick = function () {
        delete_check(deleteIcon, inputlang); // Pass the deleteIcon and inputlang to delete_check
    };

    // Save the current state to local storage
    saveToLocal();
}

// Add event listener to the "Add Input Field" button
document.getElementById('langadd').addEventListener('click', function (event) {
    event.preventDefault();
    addlangfield(); // Add a new lang field without predefined ID or value
});









// for custom field

var customCount = 0; // Counter to generate unique IDs

// Function to save input fields to local storage
function cussaveToLocal() {
    const customFields = document.querySelectorAll('.input-custom input');
    const data = [];
    customFields.forEach((input) => {
        data.push({ id: input.id, value: input.value });
    });
    localStorage.setItem('customFields', JSON.stringify(data));
}

// Function to load custom fields from local storage
function loadFromcusLocal() {
    const savedFields = JSON.parse(localStorage.getItem('customFields'));
    if (savedFields) {
        savedFields.forEach(field => {
            addcustomfield(field.id, field.value);
        });
    }
}

// Function to add a new custom field
function addcustomfield(id = null, value = '') {
    // Increment the field eduCount for new fields
    if (!id) {
        customCount++;
        id = 'customField-' + customCount;
    } else {
        // Update the field eduCount to match the highest ID number
        const currentFieldNum = parseInt(id.split('-')[1]);
        if (currentFieldNum > customCount) {
            customCount = currentFieldNum;
        }
    }

    // Create a new div to hold the custom field and delete icon
    const inputcustom = document.createElement('div');
    inputcustom.className = 'input-custom';

    // Create a new custom element with a unique ID and set its value if provided
    const customField = document.createElement('input');
    customField.type = 'text';
    customField.id = id;
    customField.value = value;
    customField.placeholder = '';

    // Add event listener to update local storage when custom value changes custom
    customField.addEventListener('input', cussaveToLocal);

    // Create a delete icon
    const deleteIcon = document.createElement('span');

    deleteIcon.className = 'delete-icon';
    deleteIcon.innerHTML = '⌫'; // Using the '✖' symbol for the delete icon

    // Append the custom field and delete icon to the custom group div
    inputcustom.appendChild(customField);
    inputcustom.appendChild(deleteIcon);

    // Add the custom group to the container
    document.getElementById('custom-container').appendChild(inputcustom);

    deleteIcon.onclick = function () {
        delete_check(deleteIcon, inputcustom); // Pass the deleteIcon and inputcustom to delete_check
    };

    // Save the current state to local storage
    cussaveToLocal();
}

// Add event listener to the "Add Input Field" button
document.getElementById('customadd').addEventListener('click', function (event) {
    event.preventDefault();
    addcustomfield(); // Add a new custom field without predefined ID or value
});









// save the color button input to local storage
function colorsave() {

    const clrdata = {
        c1: document.getElementById('clrmain').value
    };

    localStorage.setItem('clrdata', JSON.stringify(clrdata));
}

document.getElementById('clrmain').addEventListener('input', function (event) {
    event.preventDefault();
    colorsave();
});

function loadclrdata() {
    const storedclrdata = JSON.parse(localStorage.getItem('clrdata'));

    if (storedclrdata) {

        const c1 = storedclrdata.c1;
        document.getElementById('clrmain').value = c1;

    }
}









let lastScroll_Top = 0;
const pannel = document.getElementById('pannel-box');

window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (getComputedStyle(navbar).position === 'sticky') {
        // Scrolling up when navbar is sticky
        pannel.style.top = '5.2rem';
        pannel.style.right = '1rem';
    } else if (scrollTop >= 50) {
        // Scrolling down
        pannel.style.top = '1rem';
        pannel.style.right = '1rem';
        lastScroll_Top = scrollTop;  // Update the last scroll position
    } else if (scrollTop >= 40) {
        // Scrolling down
        pannel.style.top = '2rem';
        pannel.style.right = '1rem';
        lastScroll_Top = scrollTop;  // Update the last scroll position
    } else if (scrollTop >= 30) {
        // Scrolling down
        pannel.style.top = '2.9rem';
        pannel.style.right = '1rem';
        lastScroll_Top = scrollTop;  // Update the last scroll position
    } else if (scrollTop >= 20) {
        // Scrolling down
        pannel.style.top = '3.5rem';
        pannel.style.right = '1rem';
        lastScroll_Top = scrollTop;  // Update the last scroll position
    } else if (scrollTop >= 10) {
        // Scrolling down
        pannel.style.top = '4.4rem';
        pannel.style.right = '1rem';
        lastScroll_Top = scrollTop;  // Update the last scroll position
    }

    // Prevent negative scroll values
    lastScroll_Top = scrollTop <= 0 ? 0 : scrollTop;
});









// Load existing fields from local storage on page load
window.onload = function () {
    loadFromLocalStorage();
    loadEducationData();
    loadExperienceData();
    loadsec1Data();
    loadsec2Data();
    loadsecsData();
    loadFromLocal();
    loadclrdata();
    loadFromcusLocal();
};









function delete_check(deleteIcon, div) {
    // Create a new div to hold the delete confirmation buttons
    const deldiv = document.createElement('div');
    deldiv.className = 'deldiv';

    // Style the delete confirmation div (you can customize the styling)
    deldiv.style.position = 'absolute';

    // Get the position of the delete icon
    const rect = deleteIcon.getBoundingClientRect();

    // Position the confirmation box right next to the delete icon
    deldiv.style.top = `${rect.top + window.scrollY + -24}px`; // Adjust for scroll position
    deldiv.style.left = `${rect.left + window.scrollX + -90}px`; // Add a slight offset

    // Create Cancel button
    const cancel = document.createElement('button');
    cancel.id = 'cancel';
    cancel.textContent = 'Cancel';
    cancel.addEventListener('click', function () {
        deldiv.remove(); // Remove the confirmation dialog on cancel
        document.removeEventListener('click', outsideClickListener);
    });

    // Create Confirm button
    const confirm = document.createElement('button');
    confirm.id = 'confirm';
    confirm.textContent = 'Confirm';
    confirm.addEventListener('click', function () {
        div.remove(); // Remove the lang field on confirm

        saveToLocal();
        saveToLocalStorage();
        cussaveToLocal();

        deldiv.remove(); // Remove the confirmation dialog after deletion
        document.removeEventListener('click', outsideClickListener);
    });

    // Append the Cancel and Confirm buttons to the confirmation div
    deldiv.appendChild(cancel);
    deldiv.appendChild(confirm);

    // Append the confirmation div to the body
    document.body.appendChild(deldiv);

    function outsideClickListener(e) {
        if (!deldiv.contains(e.target) && !deleteIcon.contains(e.target)) {
            deldiv.remove(); // Remove the confirmation dialog if clicked outside
            document.removeEventListener('click', outsideClickListener); // Remove event listener for outside click
        }
    }

    // Add the event listener to detect clicks outside the deldiv
    setTimeout(() => {
        document.addEventListener('click', outsideClickListener);
    }, 0);
}









function delete_check2(event, deleteIcon, div) {

    event.preventDefault();

    // Create a new div to hold the delete confirmation buttons
    const deldiv = document.createElement('div');
    deldiv.className = 'deldiv';

    // Style the delete confirmation div (you can customize the styling)
    deldiv.style.position = 'absolute';

    // Get the position of the delete icon
    const rect = deleteIcon.getBoundingClientRect();

    // Position the confirmation box right next to the delete icon
    deldiv.style.top = `${rect.top + window.scrollY + -25}px`; // Adjust for scroll position
    deldiv.style.left = `${rect.left + window.scrollX + -12}px`; // Add a slight offset

    // Create Cancel button
    const cancel = document.createElement('button');
    cancel.id = 'cancel';
    cancel.textContent = 'Cancel';
    cancel.addEventListener('click', function () {
        deldiv.remove(); // Remove the confirmation dialog on cancel
        document.removeEventListener('click', outsideClickListener); // Remove event listener for outside click
    });

    // Create Confirm button
    const confirm = document.createElement('button');
    confirm.id = 'confirm';
    confirm.textContent = 'Confirm';
    confirm.addEventListener('click', function () {
        div.remove(); // Remove the lang field on confirm

        saveEducationData();
        saveExperienceData();
        savesec1Data();
        savesec2Data();

        deldiv.remove(); // Remove the confirmation dialog after deletion
        document.removeEventListener('click', outsideClickListener); // Remove event listener for outside click
    });

    // Append the Cancel and Confirm buttons to the confirmation div
    deldiv.appendChild(cancel);
    deldiv.appendChild(confirm);

    // Append the confirmation div to the body
    document.body.appendChild(deldiv);

    // Function to handle clicks outside the deldiv
    function outsideClickListener(e) {
        if (!deldiv.contains(e.target) && !deleteIcon.contains(e.target)) {
            deldiv.remove(); // Remove the confirmation dialog if clicked outside
            document.removeEventListener('click', outsideClickListener); // Remove event listener for outside click
        }
    }

    // Add the event listener to detect clicks outside the deldiv
    setTimeout(() => {
        document.addEventListener('click', outsideClickListener);
    }, 0); // Timeout ensures the click event doesn't immediately trigger on the current click
}