var elList = document.querySelector('.hero__list')
var elHero = document.querySelector('.hero')
var elNavLink = document.querySelector('.nav__item__link')
var elNavLink1 = document.querySelector('.nav__item__link1')
var elNavLink2 = document.querySelector('.nav__item__link2')
var elNavLink3 = document.querySelector('.nav__item__link3')
var elNavLink4 = document.querySelector('.nav__item__link4')
var elModal = document.querySelector('.biography__modal')
var elBody = document.querySelector('body')
var elShadow = document.querySelector('.modal__shadow__simple')
var elBlogInp1 = document.querySelector('.blog__input1')
var elBlogInp2 = document.querySelector('.blog__input2')
var elBlogInp3 = document.querySelector('.blog__input3')
var elBlogSelect = document.querySelector('.blog__select')
var elBlogTitle = document.querySelector('.blog__title')


elBlogSelect.value = '+'


// var elBlogInp3 = Number

function left(){
   elList.style.transform = 'translateX(-400px)' 
   elHero.classList = ('hero__third')
   elNavLink.style.color = 'white'
   elNavLink1.style.color = 'white'
   elNavLink2.style.color = 'white'
   elNavLink3.style.color = 'white'
   elNavLink4.style.color = 'white'
   elNavLink.style.backgroundColor = 'transparent'
    elNavLink1.style.backgroundColor = 'transparent'
    elNavLink2.style.backgroundColor = 'transparent'
    elNavLink3.style.backgroundColor = 'transparent'
    elNavLink4.style.backgroundColor = 'transparent'
   
   
}
function right(){
    elList.style.transform = 'translateX(-200px)'    
    elHero.classList = ('hero__second')
    elNavLink.style.color = 'white'
    elNavLink1.style.color = 'white'
    elNavLink2.style.color = 'white'
    elNavLink3.style.color = 'white'
    elNavLink4.style.color = 'white'
    elNavLink.style.backgroundColor = 'black'
    elNavLink1.style.backgroundColor = 'black'
    elNavLink2.style.backgroundColor = 'black'
    elNavLink3.style.backgroundColor = 'black'
    elNavLink4.style.backgroundColor = 'black'

}
function enter(){
    elList.style.transform = 'translateX(00px)'    

    elHero.classList = ('hero')
    elNavLink.style.color = 'black'
    elNavLink1.style.color = 'black'
    elNavLink2.style.color = 'black'
    elNavLink3.style.color = 'black'
    elNavLink4.style.color = 'black'
    elNavLink.style.backgroundColor = 'transparent'
    elNavLink1.style.backgroundColor = 'transparent'
    elNavLink2.style.backgroundColor = 'transparent'
    elNavLink3.style.backgroundColor = 'transparent'
    elNavLink4.style.backgroundColor = 'transparent'
   
}
function modalOpen(){
    elModal.classList.add('biography__modal__open')
    elShadow.classList.add('modal__shadow')
    elBody.style.overflow = 'hidden'
}
function modalClose(){
    elModal.classList.remove('biography__modal__open')
    elShadow.classList.remove('modal__shadow')

    elBody.style.overflow = 'auto'

}
function sendReset(){
    if(elBlogInp1.value == elBlogInp1.value.toLowerCase() && elBlogInp2.value == elBlogInp2.value.toLowerCase()){
        alert('If you left the informations about you correctly, I will call you soon')
    }
    
    elBlogInp1.value = ''
    elBlogInp2.value = ''
    elBlogInp3.value = ''
    elBlogSelect.value = ''
}