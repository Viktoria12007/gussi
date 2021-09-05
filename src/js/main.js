import '../../node_modules/focus-visible/dist/focus-visible';
import '../../node_modules/just-validate/dist/js/just-validate';
// import Inputmask from "inputmask";
import Swiper from 'swiper/bundle';
// import '../../node_modules/jquery-ui-1.12.1.custom/external/jquery/jquery'
// import '../../node_modules/jquery-ui/jquery-ui.min.js'
let $ = require("jquery");
require("jquery-ui/ui/widgets/accordion");
import '../scss/main.scss';
import '../index.html';
// import $ from 'jquery';



window.addEventListener('DOMContentLoaded', function(){
  const plus = document.querySelector('.plus');
  const minus = document.querySelector('.minus');
  let productSwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    allowTouchMove: false,
    autoHeight: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    pagination: {
      el: '.product-pagination',
      type: 'fraction',
      clickable: false,
      renderFraction:(currentClass, totalClass) => {
        return '<div class="' + currentClass +'"></div>' + 
        '<svg class="product-pagination__icon" width="16" height="1" viewBox="0 0 16 1" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="15.5" y1="0.5" x2="0.5" y2="0.500001" stroke="#ffffff" stroke-linecap="round"/></svg>'
         +
        '<div class="' + totalClass +'"></div>'
      },
      formatFractionCurrent:(number) => {
         return '0' + number
      },
      formatFractionTotal:(number) => {
        return '0' + number
     },
    },
    navigation: {
      nextEl: '.product-button-next',
      prevEl: '.product-button-prev',
    },
  })
  $( function() {
    $( "#accordion" ).accordion({
      collapsible: true,
      heightStyle: "content",
      header: "h3",
      active: false,
    //   beforeActivate: () => {
    //     // $(plus).show();
    //     // $(minus).hide();
    //     plus.style.display = 'block';
    //     minus.style.display = 'none';
    // },
    //   activate: () => {
    //     console.log(true);
    //     // $(plus).hide();
    //     // $(minus).show();
    //     plus.style.display = 'none';
    //     minus.style.display = 'block';
    //   }
    });
  });
    // document.querySelector('#burger').addEventListener('click', function() {
    // document.querySelector('#menu').classList.toggle('is-active')
    // })
    // document.querySelector('#close').addEventListener('click', function() {
    // document.querySelector('#menu').classList.remove('is-active')
    // })

    // if ($(".ui-accordion-content").hasClass('ui-accordion-content-active')) {
    //   console.log(true)
    // }
  //   function checkActivateAccordion () {
  //   let accordionContent = document.querySelectorAll(".ui-accordion-content");
  //   console.log(accordionContent);
  //   $('#accor')
  //   accordionContent.forEach(el => {
  //     if (el.classList.contains('ui-accordion-content-active')) {
  //       console.log(true)
  //     }
  //   })
  // }
})




// let selector = document.querySelectorAll('input[type="tel"]');
// selector = Array.from(selector);

// let im = new Inputmask('+7 (999) 999-99-99');
// im.mask(selector);






// const fileInput = document.querySelector('input[type="file"]');

// fileInput.addEventListener('change', (e) => {
// 	let files = e.currentTarget.files;
// 	console.log(files);

// 	if (files.length) {
//     const namesFiles = [];
//     files = Array.from(files);
//     files.forEach((el) => {
//       namesFiles.push(el.name);
//     })
//     console.log(namesFiles);
// 		fileInput.closest('label').querySelector('span').textContent = namesFiles.join(', ');
// 	}
//   else {
// 		fileInput.closest('label').querySelector('span').textContent = 'Прикрепить файл';
// 	}

// });






// let validateForms = function(selector, rules, successModal, yaGoal) {
// 	new window.JustValidate(selector, {
// 		rules: rules,
//     messages: {
//       name: {
//         required: 'Как к вам можно обращаться?',
//         minLength: 'Имя должно содержать минимум 2 символа',
//         maxLength: 'Имя должно содержать не более 30 символов'
//       },
//       company: {
//         required: 'Как называется ваша компания?',
//         minLength: 'Название компании должно содержать минимум 2 символа',
//         maxLength: 'Название компании должно содержать не более 40 символов'
//       },
//       message: {
//         required: 'Пожалуйста, введите сообщение',
//         minLength: 'Ваше сообщение должно содержать минимум 5 символов',
//         maxLength: 'Ваше сообщение должно содержать не более 300 символов'
//       },
//       tel: {
//         required: 'Укажите ваш телефон',
//         function: 'Пожалуйста, введите правильный номер'
//       },
//       email: {
//         required: 'Укажите ваш e-mail',
//         email: 'Пожалуйста, введите правильный e-mail',
//         minLength: 'Ваш e-mail должен содержать минимум 6 символов',
//         maxLength: 'Ваш e-mail должен содержать не более 50 символов'
//       }
//     },
// 		submitHandler: function(form) {
// 			let formData = new FormData(form);

// 			let xhr = new XMLHttpRequest();

// 			xhr.onreadystatechange = function() {
// 				if (xhr.readyState === 4) {
// 					if (xhr.status === 200) {
// 						console.log('Отправлено');
// 					}
// 				}
// 			}

// 			xhr.open('POST', 'mail.php', true);
// 			xhr.send(formData);

// 			form.reset();

// 			// fileInput.closest('label').querySelector('span').textContent = 'Прикрепить файл';
// 		}
// 	});
// }

// validateForms('.application-form', { name: {required: true, minLength: 2, maxLength: 30}, company: {required: true, minLength: 2, maxLength: 40}, message: {required: true, minLength: 5, maxLength: 300}, email: {required: true, email: true, minLength: 6, maxLength: 50}, tel: {required: true, function: () => {
  
//   for (let value of selector) {
   
//     const phone = value.inputmask.unmaskedvalue();
//     return Number (phone) && phone.length === 10
//   }

// }} }, '.thanks-popup', 'send goal');
