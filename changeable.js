
document.getElementById('cl2').style.backgroundColor = '#fcc0b6';
document.getElementById('cl3').style.backgroundColor = '#9cc3c4';
document.getElementById('cl4').style.backgroundColor = '#bcd7a7';
document.getElementById('cl5').style.backgroundColor = '#ff908a';


const tempclr = JSON.parse(localStorage.getItem('template'));

if (tempclr === 'templates/cabin.html') {
    document.getElementById('cl1').style.backgroundColor = '#f6f0e4';
} else if (tempclr === "templates/coffee.html") {
    document.getElementById('cl1').style.backgroundColor = '#995a17';
} else if (tempclr === 'templates/monospace.html') {
    document.getElementById('cl1').style.backgroundColor = '#888484';
} else if (tempclr === 'templates/playwrite.html') {
    document.getElementById('cl1').style.backgroundColor = '#d9e7f0';
} else if (tempclr === 'templates/carnival.html') {
    document.getElementById('cl1').style.backgroundColor = '#9ce1d8';
}

document.getElementById('cl1').onclick = () => {

    let rgbString = document.getElementById('cl1').style.backgroundColor;
    let rgbValues = rgbString.match(/\d+/g);
    let r = parseInt(rgbValues[0]);
    let g = parseInt(rgbValues[1]);
    let b = parseInt(rgbValues[2]);
    let hexColor = "#" + ((1 << 24) + (r << 16) + (g << 8) + b)
        .toString(16)
        .slice(1)
        .toUpperCase();


    const cl1 = {
        c1: hexColor
    }
    localStorage.setItem('clrdata', JSON.stringify(cl1));
    location.reload();
};
document.getElementById('cl2').onclick = () => {

    let rgbString = document.getElementById('cl2').style.backgroundColor;
    let rgbValues = rgbString.match(/\d+/g);
    let r = parseInt(rgbValues[0]);
    let g = parseInt(rgbValues[1]);
    let b = parseInt(rgbValues[2]);
    let hexColor = "#" + ((1 << 24) + (r << 16) + (g << 8) + b)
        .toString(16)
        .slice(1)
        .toUpperCase();


    const cl1 = {
        c1: hexColor
    }
    localStorage.setItem('clrdata', JSON.stringify(cl1));
    location.reload();
};
document.getElementById('cl3').onclick = () => {

    let rgbString = document.getElementById('cl3').style.backgroundColor;
    let rgbValues = rgbString.match(/\d+/g);
    let r = parseInt(rgbValues[0]);
    let g = parseInt(rgbValues[1]);
    let b = parseInt(rgbValues[2]);
    let hexColor = "#" + ((1 << 24) + (r << 16) + (g << 8) + b)
        .toString(16)
        .slice(1)
        .toUpperCase();


    const cl1 = {
        c1: hexColor
    }
    localStorage.setItem('clrdata', JSON.stringify(cl1));
    location.reload();
};
document.getElementById('cl4').onclick = () => {

    let rgbString = document.getElementById('cl4').style.backgroundColor;
    let rgbValues = rgbString.match(/\d+/g);
    let r = parseInt(rgbValues[0]);
    let g = parseInt(rgbValues[1]);
    let b = parseInt(rgbValues[2]);
    let hexColor = "#" + ((1 << 24) + (r << 16) + (g << 8) + b)
        .toString(16)
        .slice(1)
        .toUpperCase();


    const cl1 = {
        c1: hexColor
    }
    localStorage.setItem('clrdata', JSON.stringify(cl1));
    location.reload();
};
document.getElementById('cl5').onclick = () => {

    let rgbString = document.getElementById('cl5').style.backgroundColor;
    let rgbValues = rgbString.match(/\d+/g);
    let r = parseInt(rgbValues[0]);
    let g = parseInt(rgbValues[1]);
    let b = parseInt(rgbValues[2]);
    let hexColor = "#" + ((1 << 24) + (r << 16) + (g << 8) + b)
        .toString(16)
        .slice(1)
        .toUpperCase();


    const cl1 = {
        c1: hexColor
    }
    localStorage.setItem('clrdata', JSON.stringify(cl1));
    location.reload();
};









const val = JSON.parse(localStorage.getItem('template'));

if (!val) {
    document.getElementById('pannel').style.display = 'none';
    document.getElementById('pannel-b').style.display = 'static';
} else {
    document.getElementById('pannel').style.display = 'block';
    document.getElementById('pannel-b').style.display = 'none';
    document.getElementById('cvIframe').src = val;
}









const temp = JSON.parse(localStorage.getItem('template'));
if (temp === "templates/retro.html") {
    document.getElementById('picture').style.display = 'none';
    document.getElementById('clrsection').style.display = 'none';
}
else if (temp === "templates/carnival.html") {
    document.getElementById('picture').style.display = 'none';
}
else if (temp === "templates/coffee.html") {
    document.getElementById('picture').style.display = 'none';
}
else {
    document.getElementById('picture').style.display = 'inline-block';
    document.getElementById('clrsection').style.display = 'block';
}