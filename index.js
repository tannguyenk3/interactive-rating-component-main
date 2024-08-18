const numberRating = document.querySelectorAll('.number-rating p');
const btn = document.querySelector('.btn');
const cardRating = document.querySelector('.card-rating');
const cardResult = document.querySelector('.card-result');
const textResults = document.querySelector('.text-results');
const goBack = document.querySelector('.go-back');

numberRating.forEach(number => {
    number.addEventListener('click', () => {
        // Remove the 'selected' class from all numbers
        numberRating.forEach(ifSelected => {
            ifSelected.classList.remove('selected');
        });
        // Add the 'selected' class to the clicked number
        number.classList.add('selected');
    });
});

btn.addEventListener('click', () => {
    const selected = document.querySelector('.selected');
    if(selected === null) {
        alert("Please select at least one rating!!!");
    } else {
        cardResult.style.display = 'block';
        cardRating.style.display = 'none';
        textResults.textContent = `You selected ${selected.textContent} out of 5`;
    }
});

goBack.addEventListener('click', () => {
    location.reload();
});

