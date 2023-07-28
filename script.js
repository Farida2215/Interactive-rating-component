var form = document.getElementById("form")
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        const optionValue = selectedOption.value;
        const h = document.getElementsByTagName("h1")[0];
        const p = document.getElementsByTagName("p")[0];
        const img = document.getElementsByTagName("img")[0];
        const feedbackContainer = document.getElementsByClassName("container")[0];
        const sp = document.getElementsByClassName("sp")[0];
        const feedbackForm = document.getElementById("form");
        form.style.display = "none";
        sp.textContent = "You selected " + optionValue + " out of 5";
        sp.style.textAlign = "center";
        sp.style.height = "2rem";
        sp.style.paddingTop = ".5rem";
        sp.style.marginBottom = "1rem";
        h.textContent = "Thank you!";
        h.style.textAlign = "center"
        p.style.textAlign = "center"
        p.textContent = "We appreciate you taking the time to give a rating. If you ever need more support,don’t hesitate to get in touch!";
        img.src = "illustration-thank-you.svg";
        img.style.width = "162px";
        img.style.height = "108px";
        feedbackContainer.classList.add("submitted");
    }
});