let h = document.getElementsByClassName('textH');
let s = 0;
window.addEventListener('scroll', function () {
    if (window.scrollY <= 600) {
        s = Math.round(window.scrollY / 10 + 25);
        h[0].style.fontSize = s + 'px';
    }
    if (window.scrollY >= 700) {
        console.log(s - Math.round((window.scrollY - 700) / 25));
        h[1].style.fontSize = s - Math.round((window.scrollY - 700) / 10) + 'px';
    }
    if ((window.scrollY >= 170)&&(window.scrollY<=500)) {
        this.document.getElementsByClassName('text')[0].style.marginLeft=(window.scrollY-170)/2+'px';
        this.document.getElementsByClassName('line')[0].style.width=(275+(window.scrollY-170)/2)+'px';
    }
    if ((window.scrollY >= 180)&&(window.scrollY<=550)){
        this.document.getElementsByClassName('image')[0].style.right=(10+(window.scrollY-180)/2)+'px'
    }
})
function clickT(event) {
    window.scroll({
        top: 850,
        behavior: "smooth"
    })
}
function clickB(event) {
    window.scroll({
        top: 0,
        behavior: "smooth"
    })
}