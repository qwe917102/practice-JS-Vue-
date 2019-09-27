var el = document.querySelectorAll('.titleClass');

console.log(el[0])

var elLan = el.length;
for (let i = 0; i < elLan; i++) {
    el[i].textContent = i+1
}
