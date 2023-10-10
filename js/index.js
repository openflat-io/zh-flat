const tabs = document.querySelectorAll(".navs p")
tabs.forEach((item, i) => {
    item.onclick = function () {
        if (i === 2) {
            let activeBtn = document.querySelector(".navs p.active")
            activeBtn.classList.remove("active")
            this.classList.add("active")
        } else {
            alert('当前页面没有内容')
        }
    }
})

const titleSwiper = document.querySelectorAll('.navs-item span')
const activeSpan = document.querySelectorAll(".navs-item div")
let preIndex = 0
titleSwiper.forEach((item, i) => {
    item.onclick = function () {
        titleSwiper[preIndex].classList.remove("none")
        item.classList.add("none")
        activeSpan[i].classList.remove("none")
        activeSpan[i].classList.add("active-2")
        activeSpan[preIndex].classList.remove("active-2")
        activeSpan[preIndex].classList.add("none")
        preIndex = i
    }
})

const mask = document.querySelector('.mask')
const open_img = document.querySelector('.nav-open img')
const mask_open = document.querySelector('.mask-open')
const nav = document.querySelector("#nav")
const spans = document.querySelectorAll(".top-meuns span")
const subnav_items = document.querySelectorAll(".subnav_item")
let maskIndex = 0

spans.forEach((item, i) => {
    item.onclick = function () {
        subnav_items[i].classList.remove("subnav_item")
        subnav_items[maskIndex].classList.add("subnav_item")
        maskIndex = i
    }
})

open_img.addEventListener("click", function () {
    mask.style.display = 'block'
})

mask_open.addEventListener("click", function () {
    mask.style.display = 'none'
})

window.addEventListener('load', function () {
    const box = document.querySelector('.box');
    const right = box.querySelector('.right-1');
    const left = box.querySelector('.left-2');
    const ul = box.querySelector('ul');
    const ul_lis = ul.querySelectorAll('li');
    const ol = box.querySelector('ol');
    let num = 0;
    let circle = 0;
    let flag = true;

    box.addEventListener('mouseenter', function () {
        clearInterval(timer);
    });
    box.addEventListener('mouseleave', function () {
            right.click();
    });
    const timer = setInterval(function () {
        right.click();
    }, 2000);
    for (let i = 0; i < ul_lis.length; i++) {
        let li = document.createElement('li');
        li.className = 'current';
        li.setAttribute('index', i);
        ol.appendChild(li);
        li.addEventListener('click', function () {
            for (let i = 0; i < ol.children.length; i++) {
                ul_lis[i].style.opacity = '0';//排他思想：全部图片设置为透明
                ol.children[i].className = 'current';
            } 
            this.className = 'current white';
            let index = this.getAttribute('index');
            ul_lis[index].style.opacity = '1';//留下需要显示的图片
            num = index;
            circle = index;
        });
    }
    right.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num == ul.children.length - 1) {
                num = 0;
            }
            num++;
            if (num == 4) { num = 0; }
            for (let i = 0; i < ol.children.length; i++) {
                ul_lis[i].style.opacity = '0';
            }
            ul_lis[num].style.opacity = '1';
            flag = true;
            circle++;
            if (circle == ol.children.length) {
                circle = 0;
            }
            circlechange();
        }
    });
    function circlechange() {
        for (let i = 0; i < ol.children.length; i++) {
            ol.children[i].className = 'current';
        }
        ol.children[circle].className = 'current white';
    };
    left.addEventListener('click', function () {
        if (flag) {
            flag = false;
            //实现无缝滚动
            if (num == 0) {
                num = ul.children.length - 1;
            }
            num--;
            if (num == -1) { num = 4; }
            for (let i = 0; i < ol.children.length; i++) {
                ul_lis[i].style.opacity = '0';
            }
            ul_lis[num].style.opacity = '1';
            flag = true;
            circle--;
            if (circle < 0) {
                circle = ol.children.length - 1;
            }
            circlechange();
        }
    });
});
