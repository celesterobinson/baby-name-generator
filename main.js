function generateName() {
    var lastName = document.getElementById("last-name").value;
    var display = document.getElementById("baby-name");

    var gender;
    if(document.getElementById('boy').checked){
        gender = 'boy';
    }
    else if(document.getElementById('girl').checked){
        gender = 'girl';
    }

    if (!lastName) {
        alert('Please enter your last name!');
    } else if (gender){
        var firstName = getRandomName(gender);
        var middleName = getRandomName(gender);
        display.innerText = firstName + ' ' + middleName + ' ' + lastName;
    } else {
        alert('You must select a gender.')
    }
}

function getRandomName(gender) {
    if (gender === 'boy') {
        return boys[Math.floor(Math.random()*boys.length)];
    } else {
        return girls[Math.floor(Math.random()*girls.length)];
    }
}

function changeBackground(hexcode){
    document.body.style.backgroundColor = hexcode;
    var display = document.getElementById('baby-name');
    display.innerText = ' ';
}