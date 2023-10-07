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
        // timer = null;
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

        //添加注册事件  排他思想
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
    // ol.children[0].className = 'current white';
    // 2.点击右侧按钮一 次, 图片往左播放一张, 以此类推, 左侧按钮同理。

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

            //变量控制小圆圈的变化
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

            flag = true;//一次只执行完毕才可以点击下一次
            //变量控制小圆圈的变化
            circle--;
            if (circle < 0) {
                circle = ol.children.length - 1;
            }

            circlechange();
        }

    });

});
