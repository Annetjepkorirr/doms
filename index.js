let child = document.getElementById('container').style.backgroundColor = 'silver'
console.log(child);

document.getElementById('title').style.color = 'green'

document.getElementById('fruity').style.textTransform = 'uppercase'
document.getElementById('veggies').style.textTransform = 'uppercase'

let fruits = document.createElement('fruList')
fruits.innerHTML = "Kiwi"
document.getElementById('fruList').appendChild(fruits)



let kales = document.createElement('vegList')
kales.innerHTML = "Spinach"
document.getElementById('vegList').appendChild(kales)