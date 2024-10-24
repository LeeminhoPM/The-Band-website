// slider
let currentIndex = 0;
const images = document.querySelectorAll('.slider-images img');
console.log(images.length);

function autoSlide() {
    images.forEach(image => image.style.display = 'none');
    if (currentIndex >= images.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    images[currentIndex].style.display = 'block';
    setTimeout(autoSlide, 2500);
}

window.onload = autoSlide();

function showSlide(index) {
    currentIndex = (images.length + index) % images.length;
    images.forEach(image => image.style.display = 'none');
    images[currentIndex].style.display = 'block';
}

function next() {
    showSlide(currentIndex + 1);
}

function prev() {
    showSlide(currentIndex - 1);
}

// Menu
var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight;

// Đóng mở menu
mobileMenu.onclick = function() {
    var isClosed = header.clientHeight === headerHeight;
    if (isClosed) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
}

// Tự động đóng menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    
    menuItem.onclick = function() {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.contains('subnav');
        if (!isParentMenu) {
            header.style.height = null;
        } else {
            event.preventDefault();
        }
    }
}

// Modal
const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.js-modal-container')
const modalClose = document.querySelector('.js-modal-close')

// Hàm hiện modal mua vé (thêm class open vào modal)
function showBuyTickets() {
    modal.classList.add('open')
}

// Lặp qua từng the button và nghe hành vi click
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets)
}

// Hàm ẩn modal mua vé (gỡ bỏ class open của class modal)
function closeBuyTickets() {
    modal.classList.remove('open')
}

// Nghe hành vi click vào button close
modalClose.addEventListener('click', closeBuyTickets)

modal.addEventListener('click', closeBuyTickets)

modalContainer.addEventListener('click', function(event) {
    event.stopPropagation()
})