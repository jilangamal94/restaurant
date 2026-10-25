let dishes = [
    {name: "كفتة مشوي علي الفحم" , price: 200 , type: "مشويات ", image :" images/kofta.jpg"},
    {name: "   كباب " , price: 250 , type: "مشويات" , image :" images/kabab.jpg"},
    {name: "ريش ضاني" , price: 300 , type: "مشويات" , image :" images/ryash.jpg"},
    {name: "طرب" , price: 200 , type: "مشويات" , image :" images/kofta.jpg"},
    {name: "كنافة سادة " , price:50  , type: "حلويات" , image :" images/konafa.jpg"},
    {name: " كنافة نوتيلا" , price:70  , type: "حلويات" , image :" images/konafa.jpg"},
    {name: " بسبوسة سادة" , price:50  , type: "حلويات" , image :" images/basbosa.jpg"},
    {name: "بسبوسة بالنوتيلا " , price:70  , type: "حلويات" , image :" images/basbosa.jpg"},
    {name: "كيك العسل " , price:100  , type: "حلويات" , image :" images/honey-cack.jpg"},
    {name: "مولتن كيك " , price:110  , type: "حلويات" , image :" images/molten-cack.jpg"},
    {name: "شاي " , price:30  , type: "مشروبات ساخنة" , image :" images/tea.jpg"},
    {name: " قهوة" , price: 30 , type: "مشروبات ساخنة" , image :" images/coffee.jpg"},
    {name: " كابتشنو" , price:40  , type: "مشروبات ساخنة" , image :" images/latih.jpg"},
    {name: "نسكافيه " , price: 40 , type: "مشروبات ساخنة" , image :" images/capo.jpg"},
    {name: "هوت شوكلت " , price:70  , type: "مشروبات ساخنة" , image :" images/latih.jpg"},
    {name: "ايس كوفي " , price: 80 , type: "مشروبات ساقعة" , image :" images/ice-coffee.jpg"},
    {name: "سموزي مانجو " , price:80  , type: "مشروبات ساقعة" , image :" images/mango.jpg"},
    {name: "سموزي فراولة " , price:70  , type: "مشروبات ساقعة" , image :" images/strowberry.jpg"},
    {name: "عصير برتقال " , price: 50 , type: "مشروبات ساقعة" , image :" images/orange.jpg"},
];

let menuList = document.getElementById("menu-list");
let filterBtns = document.querySelectorAll(".filter-btn");

function showDishes(list){
    let card = list.map(function(dish){
        return `<div class="card show">
        <img src="${dish.image}" alt="${dish.name}">
g        <h3>${dish.name}</h3>
        <p>${dish.price}</p>
        <span>${dish.type}</span>
        </div>`;           
    });
    menuList.innerHTML = card.join("");
}

filterBtns.forEach(function (btn){
  btn.addEventListener("click", function(){
    let type = btn.dataset.type;
    filterBtns.forEach(function(b){
        b.classList.remove("active");
    });
    btn.classList.add("active");
    let filtered = type === "all"
    ? dishes
    : dishes.filter(function(dish){
        return dish.type === type;
    });
    showDishes(filtered);
  });   
});

showDishes(dishes);
let burger = document.querySelector(".burger");
let nav = document.querySelector(".nav");
burger.addEventListener("click", function(){
    nav.classList.toggle("open");
});