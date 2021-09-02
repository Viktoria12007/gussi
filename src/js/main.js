import '../../node_modules/focus-visible/dist/focus-visible';
import '../../node_modules/just-validate/dist/js/just-validate';
// import Inputmask from "inputmask";
import '../scss/main.scss';
import '../index.html';
// import $ from 'jquery';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';


window.addEventListener('DOMContentLoaded', function(){
  var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
  // $( function() {
  //   $( "#accordion" ).accordion({
  //     collapsible: true,
  //     heightStyle: "content",
  //     header: "h3",
  //   });
  // });
    // document.querySelector('#burger').addEventListener('click', function() {
    // document.querySelector('#menu').classList.toggle('is-active')
    // })
    // document.querySelector('#close').addEventListener('click', function() {
    // document.querySelector('#menu').classList.remove('is-active')
    // })
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