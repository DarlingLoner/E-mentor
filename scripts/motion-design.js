const question = document.querySelectorAll('.accordion-question'),
      answer = document.querySelectorAll('.accordion-answer'),
      closeBtn = document.querySelectorAll('.accordion-close');

question.forEach((item, i) => {
    

    item.addEventListener('click', () => {
        if (answer[i].classList.contains('accordion-answer-active')) {
            answer[i].style.height = 0;
        } else {
            answer[i].style.height = answer[i].scrollHeight + 'px';
        }
        answer[i].classList.toggle('accordion-answer-active');
        closeBtn[i].classList.toggle('accordion-close-active');
    });
});