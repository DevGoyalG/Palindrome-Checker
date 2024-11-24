const txtInput = document.querySelector(".inputs input"),
checkBtn = document.querySelector(".inputs button"),
infoTxt = document.querySelector(".info-txt");
let filterInput;

checkBtn.addEventListener("click", () => {
    // splitting user input char, reversing the, and joining them in a single word
    let reverseInput = filterInput.split("").reverse().join("");
    infoTxt.style.display = "block";
    if(filterInput != reverseInput){
        return infoTxt.innerHTML = `No, <span>'${txtInput.value}'</span> isn't a palindrome!</span>`;
    }
    infoTxt.innerHTML = `Yes, <span>'${txtInput.value}'</span> is a palindrome!</span>`;
});

txtInput.addEventListener("keyup", () => {
    //removing spaces & all special characters from entered value 
    filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    if(filterInput){
        return checkBtn.classList.add("active");
    }
    infoTxt.style.display = "none";
    checkBtn.classList.remove("active");

});