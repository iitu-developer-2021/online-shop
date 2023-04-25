// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


function initMenuGoBack(){
    const categoriesBlock = document.querySelector('.menu-catalog__back');
    const submenuBlock = document.querySelector('.submenu-catalog__back');

    if(categoriesBlock){
        categoriesBlock.addEventListener('click', () => {
            document.documentElement.classList.remove('catalog-open');
            if(document.querySelector('._submenu-opened')){
                document.querySelector('._submenu-opened').classList.remove('_submenu-opened')
            }
            if(document.querySelector('._submenu-show')){
                document.querySelector('._submenu-show').classList.remove('_submenu-show')
            }
        })
    }

    if(submenuBlock){
        submenuBlock.addEventListener('click', () => {
            document.documentElement.classList.remove('submenu-open');
            if(document.querySelector('._submenu-opened')){
                document.querySelector('._submenu-opened').classList.remove('_submenu-opened')
            }
            if(document.querySelector('._submenu-show')){
                document.querySelector('._submenu-show').classList.remove('_submenu-show')
            }
        })
    }
}

function initNavigationCategoryOpen(){
    const categoriesBlock = document.querySelector('.menu-top-header__link--catalog');
    if(categoriesBlock){
        categoriesBlock.addEventListener('click', (event) => {
            document.documentElement.classList.add('catalog-open');
            event.preventDefault()
        });
    }
}

function initDynamicNavigationClasses(){
    const navigationBlocks = document.querySelectorAll('.submenu-catalog__block');
    if(navigationBlocks.length){
        Array.from(navigationBlocks).forEach(navigationBlock => {
            const navigationItemLength = navigationBlock.querySelectorAll('.submenu-catalog__category').length
            navigationBlock.classList.add(`submenu-catalog__block--${navigationItemLength}`)
        })
    }
}

function initNavigationClickHandler(){
    const navigationList = document.querySelectorAll('[data-parent]');
    Array.from(navigationList).forEach((navigationItem) => {
        navigationItem.addEventListener('click', navigationClickHandler)
    })

    function navigationClickHandler(e){
        const target = e.target;
        const submenuId = target.dataset?.parent || null;
        if(submenuId){
            const submenu = document.querySelector(`[data-submenu="${submenuId}"]`);
            const activeNavigationItem = document.querySelector('._submenu-active');
            const activeSubmenu = document.querySelector('._submenu-opened');
            const activeBlock = document.querySelector('.submenu-open');

            if(activeNavigationItem && activeNavigationItem !== target && activeSubmenu){
                activeNavigationItem.classList.remove('_submenu-active');
                activeSubmenu.classList.remove('_submenu-opened');
                document.documentElement.classList.remove('submenu-open')
            }

            if(submenu){
                target.classList.toggle('_submenu-active')
                submenu.classList.toggle('_submenu-opened')
                document.documentElement.classList.toggle('submenu-open')
            }
            else
                console.log('Упс, нет такого подменю')
        }
        e.preventDefault()
    }
}

initNavigationClickHandler()
initDynamicNavigationClasses()
initNavigationCategoryOpen()
initMenuGoBack()