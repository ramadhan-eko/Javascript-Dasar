// DOM selection
// document.getElementById() -> element 
// const judul = document.getElementById('judul');
// judul.style.color = 'red';
// judul.style.backgroundColor = '#ccc';

// document.getElementsByTagName -> HTMLCollection
// const p = document.getElementsByTagName('p');

// for(let i = 0; i<p.length; i++) {
// 	p[i].style.backgroundColor = 'lightblue';
// }

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';

// document.getElementByClassName -> HTMLCollection
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'Ini diubah dari javascript';

// document.querySelector() -> Element
const p4 = document.querySelector('#b p');
p4.style.Color = 'green';
p4.style.fontSize = '30px';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange';

// document.querySelectorAll()

const p2 = document.querySelectorAll('p');
for (let i = 0; i < p2.length; i++) {
	p2[i].style.backgroundColor = 'lightblue';
}

// element.setAttribute()
const a = document.querySelector('section#a a');

// Buat element baru
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraf Baru');

// Simpan tulisan ke dalam paragraf
pBaru.appendChild(teksPBaru);

// Simpan pBaru di akhir section
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Item Baru');
liBaru.appendChild(teksLiBaru);

const ul = document.querySelector('section#b ul');
const li3 = ul.querySelector('li:nth-child(2)');
ul.insertBefore(liBaru, li3);

const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

const sectionB = document.getElementById('b');
const p5 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Judul Baru!');

h2Baru.appendChild(teksH2Baru);
sectionB.replaceChild(h2Baru, p5);

pBaru.style.backgroundColor = 'lightgreen';
li3.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';

