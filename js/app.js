const submit_btn = document.querySelector('.submit-btn');
const card_content_1 = document.querySelector('.card-content-1')
const card_content_2 = document.querySelector('.card-content-2')
const rating_btn = document.querySelectorAll('.rating-btn');
const score = document.querySelector('.score');
let rating_value = 3;

onSubmit = () => {
    card_content_1.classList.add('hide');
    card_content_2.classList.remove('hide');
    score.textContent = rating_value;
}

ratingHandler = (e) => {
    rating_btn.forEach(btn => {
        btn.classList.remove('active');
    });

    if(e.target.classList.contains('rating-btn')){
        e.target.classList.add('active');
    } else {
        e.target.parentElement.classList.add('active');
    }

    rating_value = e.target.textContent;
}

submit_btn.addEventListener('click', onSubmit);
rating_btn.forEach(btn => {
    btn.addEventListener('click', ratingHandler);
});



// console.log(rating_btn);