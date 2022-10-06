import tabs from './modules/tabs';
import timer from './modules/timer';
import cards from './modules/cards';
import modal, {openModal} from './modules/modal';
import forms from './modules/forms';
import slider from './modules/slider';
import calc from './modules/calc';

window.addEventListener('DOMContentLoaded', function() {

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    timer('.timer', '2022-10-11');
    cards();
    modal('[data-modal]', '.modal', modalTimerId);
    forms('form', modalTimerId);
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        currentCounter: '#current',
        totalCounter: '#total',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner',
        slide: '.offer__slide',
    });
    calc();

});