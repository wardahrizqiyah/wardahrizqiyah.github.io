data = [{
    'img1': 'assets/hasilnya.jpg',
    'img2': 'assets/hasilnya.jpg',
    'tittle': 'Web E-commerce',
    'subtitle': 'Zenit',
    'desc': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, excepturi."
}, {
    'img1': 'assets/hasilnya.jpg',
    'img2': 'assets/hasilnya.jpg',
    'tittle': 'Web Design',
    'subtitle': 'The Gallery',
    'desc': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, excepturi."
}]

var container = document.querySelector('.container-project')

data.forEach(element => {
    container.innerHTML +=
    `<div class="project">
    <div class="img-project">
        <img src="`+element.img1+`" alt="">
        <img src="${element.img2}" alt="">
    </div>
    <div class="desc-project">
        <h1>${element.title}</h1>
        <h2>${element.subtitle}</h2>
        <p>${element.desc}</p>
    </div>
    <button class="read-more">Read More</button>
</div>`

});

