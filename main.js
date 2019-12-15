let x = document.getElementById('but');
let y = document.getElementById('demo');

x.onclick = () => {
    let u = user.value;
    y.innerHTML = `<img src="https://api.adorable.io/avatars/285/${u}">`;
}