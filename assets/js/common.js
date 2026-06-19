const gNav = document.querySelector('#gnav');

document.querySelector('#btn-menu').addEventListener('click',function(){
    if(gNav.classList.contains('open')){
        gNav.classList.remove('open');
        gNav.classList.add('close');
        setTimeout(function(){
            gNav.classList.remove('close');
        },300);
    }else{
        gNav.classList.add('open');
    }
});