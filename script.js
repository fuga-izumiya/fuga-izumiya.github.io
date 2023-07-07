"use strict"

const smoke = document.getElementById('smoke');
const topDiv = document.getElementById('top-div');
const logo = document.getElementById('logo');
const header = document.getElementById("header");
const car = document.getElementById("car");
const video = document.getElementsByTagName("video")[0];

window.addEventListener('DOMContentLoaded', function () {
    smoke.style.visibility = 'hidden';
    topDiv.style.visibility = 'hidden';
    header.style.visibility = 'hidden';
    car.style.visibility = 'hidden';

    window.addEventListener('scroll', function () {
        if (500 < window.scrollY) {
            smoke.style.visibility = 'visible';
            smoke.classList.add('view');
            topDiv.style.visibility = 'visible';
            topDiv.classList.add('view');
        } else {
            smoke.classList.remove('view');
            topDiv.classList.remove('view');
        }

        if (1600 < window.scrollY) {
            header.style.visibility = 'visible';
            header.classList.add('view');
        } else {
            header.classList.remove('view');
        }

        if (2550 < window.scrollY) {
            car.style.visibility = 'visible';
            car.classList.add('view');
        } else {
            car.classList.remove('view');
        }

        if (50 < window.scrollY) {
            logo.style.visibility = 'visible';
            logo.classList.add('view');
        } else {
            logo.classList.remove('view');
        }

        if (3700 < window.scrollY) {
            video.style.visibility = 'visible';
            video.classList.add('view');
        } else {
            video.classList.remove('view');
        }
    });
});
