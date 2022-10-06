function slider ({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}) {
    // SLIDER

    const slides = document.querySelectorAll(slide),
          slider = document.querySelector(container),
          sliderArrowPrev = document.querySelector(prevArrow),
          sliderArrowNext = document.querySelector(nextArrow),
          sliderCurrentSlide = document.querySelector(currentCounter),
          sliderTotalSlide = document.querySelector(totalCounter),
          sliderWrapper = document.querySelector(wrapper),
          slidesField = document.querySelector(field),
          widthSliderField = window.getComputedStyle(sliderWrapper).width;

    let numberOfSlide = 1,
        dotsPac = [];

    if (slides.length < 10) {
        sliderTotalSlide.innerHTML = `0${slides.length}`;
    } else {
        sliderTotalSlide.innerHTML = slides.length;
    }

    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';
    sliderWrapper.style.overflow = 'hidden';

    slidesField.style.width = slides.length * 100 + '%';
    slides.forEach(card => {
        card.style.width = widthSliderField;
    });

    slider.style.position = 'relative';

    const indicators = document.createElement('ol');
    indicators.classList.add('carousel-indicators');
    indicators.style.cssText = `
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    `;

    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement ('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;
        `;

        dotsPac.push(dot);

        indicators.append(dot);
    }

    function showCurrentDotForSlide () {
        dotsPac.forEach((dot, i) => {
            if (i == numberOfSlide - 1) {
                dot.style.opacity = '1';
            } else {
                dot.style.opacity = '.5';
            }
        });
    }
    showCurrentDotForSlide();

    function deleteNotDigits (str) {
        return +str.replace(/\D/g, "");
    }

    function listSlides () {
        let slidePositionInWrapper = (numberOfSlide - 1) * deleteNotDigits(widthSliderField);
        slidesField.style.transform = `translateX(-${slidePositionInWrapper}px)`;
    }

    function showNumberOfSlide (num = 1) {
        sliderCurrentSlide.innerHTML = num;
    }
    showNumberOfSlide();

    sliderArrowNext.addEventListener('click', () => {
        if (numberOfSlide == slides.length) {
            numberOfSlide = 1;
        } else {
            numberOfSlide++;
        }
        listSlides();
        showNumberOfSlide(numberOfSlide);
        showCurrentDotForSlide();
    });

    sliderArrowPrev.addEventListener('click', () => {
        if (numberOfSlide == 1) {
            numberOfSlide = slides.length;
        } else {
            numberOfSlide--;
        }
        listSlides();
        showNumberOfSlide(numberOfSlide);
        showCurrentDotForSlide();
    });

    dotsPac.forEach((dot) => {
        dot.addEventListener('click', (e) => {
            let i = e.target.getAttribute('data-slide-to');
            numberOfSlide = i;
            listSlides();
            showNumberOfSlide(numberOfSlide);
            showCurrentDotForSlide();
        });
    });
}

export default slider;