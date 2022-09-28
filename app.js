// const container;
const error = "The Date must be Less or Equal to today date"
let userDate = document.querySelector("#dob");
userDate.addEventListener("change",getAge)
let dateInput, today;

// to fetch date from user date input
function getAge() {
    dateInput = new Date(userDate.value);
    today = new Date();
    let displayError = document.querySelector(".error")

    if(dateInput > today){
        document.querySelector("#years").textContent = " "
        document.querySelector("#months").textContent = " "
        document.querySelector("#days").textContent = " "
        displayError.style.display = "block";
        displayError.textContent = error
    }else{
        displayError.style.display = "none";
        calcAge();
    }
   
}

// to calculate age
function calcAge() {
    // to fetch year, month, date from user date input
    let userYear = dateInput.getFullYear();  
    let userMonth = dateInput.getMonth();
    let userDay = dateInput.getDate();

    // to fetch year, month, date from current date
    let currentYear = today.getFullYear();  
    let currentMonth = today.getMonth();
    let currentDay = today.getDate();

    // to get difference
    let diffYear = Math.abs(userYear - currentYear);
    let diffMonth = Math.abs( userMonth - currentMonth);
    let diffDate = Math.abs( userDay - currentDay);

    displayAge(diffYear,diffMonth,diffDate)
}

// to display calculated difference
function displayAge(year,month,date) {
    document.querySelector("#years").textContent = year
    document.querySelector("#months").textContent = month
    document.querySelector("#days").textContent = date
}

