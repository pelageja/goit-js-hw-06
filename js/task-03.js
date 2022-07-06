const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];



const galleryEl = document.querySelector('.gallery');

images.forEach(el => {
  galleryEl.insertAdjacentHTML(
    'beforeend',
    `<li><img src = "${el.url}" alt = "${el.alt}"  width = "150" height = "100" /></li>`,
  );
});

galleryEl.style.cssText = "list-style-type:none; display: flex; justify-content: space-around;"

 
console.log(galleryEl);





