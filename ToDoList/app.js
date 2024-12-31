const headerNavbar = document.querySelector(".header__navbar");
const headerNavbarColor = document.querySelector(".header__navbar-color");
//click header navbar
headerNavbar.addEventListener('click', ()=>{
    if (headerNavbarColor.style.display == 'block'){
        headerNavbarColor.style.display = 'none';
    } else {
        headerNavbarColor.style.display = 'block';
    }
});
//off event when click outside
document.addEventListener("click", (e)=>{
    if (!headerNavbarColor.contains(e.target) && !headerNavbar.contains(e.target)){
        headerNavbarColor.style.display = 'none';  
    }
});
//stop event click when inside headerNavbarColor
headerNavbarColor.addEventListener('click', (e)=>{
    e.stopPropagation();
});
//set backgroundcolor for 'navbar__color'
const listNavbarColor = document.querySelectorAll('.navbar__color');
listNavbarColor.forEach( colorDiv =>{
    const classes = Array.from(colorDiv.classList);
    const colorClass = classes.find ( cls => /^[A-Fa-f0-9]{6}$/.test(cls))
    if (colorClass) {
        colorDiv.style.backgroundColor = `#${colorClass}`;
    }
})
//selected navbar color & set backgroundcolor for 'app'
const app = document.querySelector('.app');
const footer = document.querySelector('.footer');
listNavbarColor.forEach( colorDiv =>{
    colorDiv.addEventListener('click', ()=>{
        listNavbarColor.forEach( div => {
            div.classList.remove('active');
        });
        colorDiv.classList.add('active');
        document.documentElement.style.setProperty('--bg-color', `#${colorDiv.classList[1]}`)
        // app.style.backgroundColor = `#${colorDiv.classList[1]}`;
        // app.style.backgroundColor = window.getComputedStyle(colorDiv).backgroundColor;
    })
})
//icon footer
const footerContent = document.querySelector('.footer__content');
const iconCircle = document.querySelector('.icon-circle')
const iconPlus = document.querySelector('.icon-plus')
const inputToDo = document.querySelector('.inputToDo');
//event click in footer
footerContent.addEventListener('click', () => {
    const iconCircleDisplay = window.getComputedStyle(iconCircle).display;  
    if (iconCircleDisplay === 'none') {
        iconCircle.style.display = 'block';  
        iconPlus.style.display = 'none';    
        !inputToDo.focus(); 
    } 
});
document.addEventListener ('click', (e) => {
    if (!footerContent.contains(e.target)) {
        iconCircle.style.display = 'none';
        iconPlus.style.display = 'block';
    }
})
const listItem = document.querySelector('.item__ongoing');
//add item from input to list item
inputToDo.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && inputToDo.value.trim() !== '') {
        const newItem = document.createElement('div');
        newItem.classList.add('item');
        //add icon 
        const icon1 = document.createElement('i');
        icon1.classList.add('fa-regular', 'fa-circle', 'item-icon', 'icon-ongoing');
        newItem.appendChild(icon1);
        const icon2 = document.createElement('i');
        icon2.classList.add('fa-regular', 'fa-circle-check', 'item-icon', 'icon-check');
        newItem.appendChild(icon2);
        const icon3 = document.createElement('i');
        icon3.classList.add('fa-solid', 'fa-circle-check', 'item-icon', 'icon-check-done');
        newItem.appendChild(icon3);
        const input = document.createElement('input')
        input.type = 'text';
        input.value = inputToDo.value.trim();
        input.readOnly = true;
        input.classList.add('input__item');
        newItem.appendChild(input);

        listItem.appendChild(newItem);
        inputToDo.value = '';

        addHoverEvent(newItem);
    }
});
