function showsidebar(){
const sidebar = document.querySelector('.sidebar')
sidebar.style.display = 'flex'

const changeBtnColor = document.querySelector('.sidebar-menu-btn')
changeBtnColor.style.color = '#fff'
};

function hideSideBar(){
const hide = document.querySelector('.sidebar')
hide.style.display = 'none'

const changeBtnColor = document.querySelector('.sidebar-menu-btn')
changeBtnColor.style.color = '#000000'
};


const cookieBox = document.querySelector(".mainwrapper .wrapper"),

acceptBtn = document.querySelector(".cookie-button .item");

acceptBtn.onclick = ()=> {
    document.cookie = "CookieBy=TempleVictorSambo; max-age="+60*60*24*30;

    if(document.cookie){
        cookieBox.classList.add("hide");
    }
    else{
        alert("Cookie can't be set!");
    }
}

let checkCookie = document.cookie.indexOf("CookieBy=TempleVictorSambo");
checkCookie != -1 ?  cookieBox.classList.add("hide"):  cookieBox.classList.remove("hide");