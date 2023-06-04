
window.addEventListener('load',() => {
    const value = localStorage.getItem('pageValue');
    document.getElementById("result").innerHTML = value;
})