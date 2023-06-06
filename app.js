addEventListener('DOMContentLoaded', () => {
    const btn_menu = document.querySelector('.btn_menu')
    if (btn_menu){
        btn_menu.addEventListener('click',() => {
            const nav_list = document.querySelector('.nav-list')
            nav_list.classList.toggle('show')
        })
    }
})