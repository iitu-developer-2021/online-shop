/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper, {Navigation, Pagination, Parallax, Autoplay, Thumbs} from 'swiper';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
	// Список слайдерів
	// Перевіряємо, чи є слайдер на сторінці
	if (document.querySelector('.main-block__slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.main-block__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation, Pagination, Parallax, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 20,
			//autoHeight: true,
			speed: 800,
			parallax: true,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,


			// Ефекти
			//effect: 'fade',
			autoplay: {
				delay: 2000,
				disableOnInteraction: false,
			},


			// Пагінація

			pagination: {
				el: '.control-main-block__dots',
				clickable: true,
			},


			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			/*
			// Брейкпоінти
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// Події
			on: {
				init(swiper){
					const allSlides = document.querySelector('.fraction-control__all')
					allSlides.innerHTML = swiper.slides.length;
				},
				slideChange(swiper){
					const currentSlide = document.querySelector('.fraction-control__current')
					currentSlide.innerHTML = swiper.realIndex + 1 < 10 ? '0' + (swiper.realIndex + 1) : swiper.realIndex + 1
				}
			}
		});
	}

	if (document.querySelector('.product-slider__slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.product-slider__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation, Pagination, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 4,
			spaceBetween: 30,
			watchOverflow: false,
			//autoHeight: true,
			speed: 800,
			parallax: true,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,


			// Ефекти
			//effect: 'fade',

			autoplay: {
				delay: 2000,
				disableOnInteraction: false,
			},

			// Пагінація

			pagination: {
				el: '.product-slider__dots',
				clickable: true,
			},


			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Брейкпоінти
			breakpoints: {
				0: {
					slidesPerView: 1,
					spaceBetween: 10 ,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1370: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},

		});
	}

	if (document.querySelector('.products-new__slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.products-new__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation, Pagination, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			spaceBetween: 30,
			watchOverflow: false,
			//autoHeight: true,
			speed: 800,
			parallax: true,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,


			// Ефекти
			//effect: 'fade',

			autoplay: {
				delay: 2000,
				disableOnInteraction: false,
			},

			// Пагінація

			pagination: {
				el: '.products-new__dots',
				clickable: true,
			},


			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Брейкпоінти
			breakpoints: {
				0: {
					slidesPerView: 1,
					spaceBetween: 10,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				1370: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
			},

		});
	}

	if (document.querySelector('.images-product')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.images-product', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation, Pagination, Autoplay, Thumbs],
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			spaceBetween: 30,
			watchOverflow: false,
			//autoHeight: true,
			speed: 800,
			parallax: true,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,


			// Ефекти
			//effect: 'fade',

			autoplay: {
				delay: 2000,
				disableOnInteraction: false,
			},

			// Пагінація

			pagination: {
				el: '.products-new__dots',
				clickable: true,
			},


			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Брейкпоінти
			breakpoints: {
				0: {
					slidesPerView: 1,
					spaceBetween: 10,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				1370: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
			},

		});
	}

	if (document.querySelector('.main-product__images')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		const thumbsSwiper = new Swiper('.images-product__thumbs', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Thumbs, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 4,
			spaceBetween: 16,
			watchOverflow: false,
			breakpoints: {
				992: {
					slidesPerView: 2
				},
				1330: {
					slidesPerView: 4,
					spaceBetween: 16
				}
			}
		});

		new Swiper('.card-images-product__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Thumbs, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 30,
			watchOverflow: false,
			loop: true,
			autoplay: {
				delay: 2000,
				disableOnInteraction: false,
			},
			thumbs: {
				swiper: thumbsSwiper
			}
		});

	}
}
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск ініціалізації слайдерів
	initSliders();
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	//initSlidersScroll();
});