//Hamburger menu
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
burger.addEventListener('click', ()=> menu.classList.toggle('show-menu'));

// CARE GUIDE - Toggle "See more" / "See less"
document.querySelectorAll('.see-more').forEach(button => {
    button.addEventListener('click', () => {
    const target = document.getElementById(button.dataset.target);
    target.classList.toggle('hidden');
    button.textContent = target.classList.contains('hidden') ? 'See more' : 'See less';
    });
});

//SEARCH - Search history + redirect to Google
const form = document.querySelector('form');
const input = document.getElementById('search-input');
const historyList = document.getElementById('search-history');

if(form){
form.addEventListener('submit', e => {
    e.preventDefault();
    const query = input.value.trim();
    if(!query) return;
    const li = document.createElement('li');
    li.innerHTML = `<span>${query}</span> <button onclick="this.parentNode.remove()">✖</button>`;
    li.querySelector('span').addEventListener('click', ()=> {
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
    });
    historyList.prepend(li);
    input.value = '';
});
}