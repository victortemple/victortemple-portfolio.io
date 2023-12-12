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