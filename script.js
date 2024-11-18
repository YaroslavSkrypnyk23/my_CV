document.addEventListener('DOMContentLoaded', () => {
    const mainInfo = document.querySelector('.container');
    const modalWindow = document.querySelector('.modal');
    const watchBtn = document.querySelector('.watch-btn');

    mainInfo.style.display = 'none';
    modalWindow.style.display = 'block';

    watchBtn.addEventListener('click', () => {
        modalWindow.style.display = 'none';
        mainInfo.style.display = 'flex';
    })
});




