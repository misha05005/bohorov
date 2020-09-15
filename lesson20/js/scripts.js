const price_symbol = '$'
let cars = {
    car_1: {
        img: 'img/img-1.webp' ,
        car:'Audi',
        model:'A6', 
        age :'2014' , 
        price : '20900' },
    car_2: {
        img: 'img/img-2.webp' ,
        car:'Mazda',
        model:'6', 
        age :'2015' , 
        price : '5500' },
    car_3: {
        img: 'img/img-3.webp' ,
        car:'Hyundai',
        model:'Tucson IDEAL', 
        age :'2018' , 
        price : '25800' },
    car_4: {
        img: 'img/img-4.webp' ,
        car:'Mazda',
        model:'6 Grand Touring', 
        age :'201' , 
        price : '13600' },
    car_10:{
        img: 'img/img-5.webp' ,
        car:'Ford',
        model:'Focus SE flex fuel', 
        age :'2015' , 
        price : '8800' },
    car_5: {
        img: 'img/img-6.webp' ,
        car:'Porsche',
        model:'Panamera', 
        age :'2010' , 
        price : '25000' },
    car_6: {
        img: 'img/img-7.webp' ,
        car:'Mercedes-Benz',
        model:'CLS 220 Shooting', 
        age :'201' , 
        price : '39500' },
    car_7: {
        img: 'img/img-8.webp' ,
        car:'Nissan',
        model:'X-Trail 4x4 GAZ', 
        age :'2010' , 
        price : '17500' },
    car_8: {
        img: 'img/img-9.webp' ,
        car:'opel',
        model:'Zafira ERODYNAMIC OPS SPORT', 
        age :'2009' , 
        price : '7490' },
    car_9: {
        img: 'img/img-10.webp',
        car:'BMW',
        model:'X5 M', 
        age :'2019' , 
        price : '92000' }
};

console.log(cars);

let div = document.createElement('div');
div.className = 'cars-list';
document.body.append(div);

for (let key in cars) {
    let child = document.createElement('div');
    child.className = 'cars-list_item';
    child.innerHTML = `<div class="cars-list_item-area">
            <div class="cars-list_item-img">
                <img src="${cars[key].img}" title="${cars[key].car}">
            </div>
            <div class="cars-list_item-content">
                <h2>${cars[key].car} ${cars[key].model}</h2>
                <div class="cars-list_item-price">
                    ${price_symbol} ${cars[key].price}
                </div>
                <div class="cars-list_item-age">
                  год ${cars[key].age}
                </div>
            </div>
        </div>`;
    div.append(child);
}
