

function header() {
   //header
   let doc = document;
   let body = doc.body;
   let wrapper = doc.querySelector('.wrapper')
   let header = doc.createElement('header');
   header.classList.add('header');
   //top
   let header__top = doc.createElement('div');

   let topWrapper = doc.createElement('div');
   let topNav = doc.createElement('div');
   let topUl = doc.createElement('ul');
   let topLiOne = doc.createElement('li');

   let prisent = doc.createElement('div');
   let prisent_link = doc.createElement('a');
   let prisent_link_one = doc.createElement('a');
   let prisent_link_two = doc.createElement('a');

   let topLiTwo = doc.createElement('li');
   let li_a = doc.createElement('a');

   let top_right = doc.createElement('div');

   let sell = doc.createElement('div');
   let sell_a_one = doc.createElement('a');
   let sell_a_two = doc.createElement('a');

   let lang = doc.createElement('div');
   let lang_box = doc.createElement('div');
   let lang_btn_one = doc.createElement('button');
   let lang_btn_two = doc.createElement('button');
   let lang_btn_tre = doc.createElement('button');


   //top class;
   header__top.classList.add('header__top');

   topWrapper.classList.add('header__top--container');
   topWrapper.classList.add('container');

   topNav.classList.add('header__top-nav');

   prisent.classList.add('prisent');
   prisent_link.className = 'prisent__button hdr-btn';
   prisent_link.innerText = '0% Рассрочка'
   prisent_link_one.className = 'prisent__button hdr-btn';
   prisent_link_one.innerText = 'Скидки'
   prisent_link_two.className = 'prisent__button hdr-btn';
   prisent_link_two.innerText = 'Розыгрыши'
   prisent_link.href = '#'
   prisent_link_one.href = '#'
   prisent_link_two.href = '#'

   li_a.classList.add('cart');
   li_a.href = '#';
   li_a.innerText = 'Карта сайта';

   top_right.className = 'header__top-right-block hd-rg';

   sell.className = "hd-rg__sell-wrapper hd-sell";

   sell_a_one.classList.add('hd-sell__tell-phone');
   sell_a_one.innerText = '+998 (71) 202 202 1'
   sell_a_one.href = '#'

   sell_a_two.classList.add('hd-sell__btn', 'hdr-btn');
   sell_a_two.innerText = 'Продавайте на olcha';
   sell_a_two.href = '#';

   lang.className = 'hd-rg__lang-wrapper lang';
   lang_box.classList.add('lang__btn-box');
   lang_btn_one.classList.add('lang__btn');
   lang_btn_one.innerText = 'Ўзб';

   lang_btn_two.classList.add('lang__btn');
   lang_btn_two.innerText = 'O\'z';

   lang_btn_tre.classList.add('lang__btn');
   lang_btn_tre.innerText = 'Рус';
   //top append 
   header__top.append(topWrapper);
   topWrapper.append(topNav, top_right);
   topNav.append(topUl)
   topNav.append(topLiOne, topLiTwo);
   topLiOne.append(prisent);
   prisent.append(prisent_link, prisent_link_one, prisent_link_two);
   topUl.append(topLiOne, topLiTwo);
   topLiTwo.append(li_a)
   top_right.append(sell, lang);
   sell.append(sell_a_one, sell_a_two);
   lang.append(lang_box);
   lang_box.append(lang_btn_one, lang_btn_two, lang_btn_tre);

   //down
   let header_down = doc.createElement('div');
   header_down.classList.add('header__down');
   let downWrapper = doc.createElement('div');
   downWrapper.className = 'header__down--container container';

   let left = doc.createElement('div');
   left.className = 'header__down--left dw-left';

   let left_a = doc.createElement('a');
   left_a.href = '#';
   let left_img = doc.createElement('img');
   left_img.src = './img/logo-red.e48e0ab8.svg';
   left_img.alt = 'Logo';
   left_img.classList.add('dw-left__logo');
   left_a.append(left_img);


   let left_btn = doc.createElement('button');
   left_btn.classList.add('dw-left__btn')
   left_btn.innerHTML = '<span class="material-icons">menu</span> Каталог'
   left.append(left_a, left_btn);

   let center = doc.createElement('div');
   center.className = 'header__down--center-input-box box-in';

   let center_in = doc.createElement('input');
   center_in.classList.add('box-in__input');
   center_in.type = 'text';

   let search = doc.createElement('siv');
   search.classList.add('search');

   let search_span = doc.createElement('span');
   search_span.classList.add('material-icons');
   search_span.innerText = 'search';
   search.append(search_span);
   center.append(center_in, search)
   const map = {
      1: 'bar_chart',
      2: 'favorite_border',
      3: 'shopping_cart',
      4: 'person',
   }
   const map_text = {
      1: 'Сравнение',
      2: 'Избранные',
      3: 'Корзина',
      4: 'Войти',
   }

   let right = doc.createElement('div');
   right.className = 'header__down--right dw-right';
   for (let i of [1, 2, 3, 4]) {
      let right_item = doc.createElement('div');
      right_item.classList.add('dw-right__item');
      let itemSpan = doc.createElement('span');
      itemSpan.classList.add("material-icons");
      itemSpan.innerHTML = map[i];
      let itemText = doc.createElement('p');
      itemText.classList.add("dw-right__item-text");
      itemText.innerHTML = map_text[i];
      right_item.append(itemSpan, itemText);
      right.append(right_item)
   }

   downWrapper.append(left, center, right);
   header_down.append(downWrapper);
   header.append(header__top, header_down);
   console.log(header);
   wrapper.append(header);
}
let doc = document;
let wrapper = doc.querySelector('.wrapper')
let item = doc.createElement('div');
item.classList.add('buy-item');
let item_top = doc.createElement('div');
item_top.classList.add('buy-item__top');
let item_img = doc.createElement('img');
item_img.src = './img/1VXbCH7l6wAiEIMeNukc20vHMYIsf67lteqdI8Xoc9uYTbHzxzBkkmP3Ku1E.jpg';
item_img.classList.add('buy-item__top-img');
item_top.append(item_img);

let item_down = doc.createElement('div');

let item_title = doc.createElement('div');
let item_price = doc.createElement('div');
let item_sup_price = doc.createElement('div');
let item_box = doc.createElement('div');
let item_btn_one = doc.createElement('button');
item_btn_one.classList.add('buy-item__down-btn-cart')
item_btn_one.innerHTML = '<span class="material-icons">shopping_cart</span>'
let item_btn_two = doc.createElement('button');
item_btn_two.classList.add('buy-item__down-btn')

item_btn_two.innerHTML ='В рассрочку'
item_box.classList.add('buy-item__down-btn-box');
item_down.classList.add('buy-item__down');
item_title.classList.add('buy-item__down-title');
item_price.classList.add('buy-item__down-price');
item_sup_price.classList.add('buy-item__down-sup-price');
item_title.innerHTML = 'Lorem ipsum dolor sit amet consectetur.';
item_price.innerHTML = '<span>1000</span>сум';
item_sup_price.innerHTML = '<span>1000</span>сум X &nbsp;<span class="n"> 6</span>&nbsp; мес';
item_box.append(item_btn_one, item_btn_two);
item_down.append(item_title, item_price ,item_sup_price ,item_box)

item.append(item_top , item_down);
header()
wrapper.append(item)