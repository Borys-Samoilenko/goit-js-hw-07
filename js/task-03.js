const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const imgList = document.querySelector('#gallery');

// const makeImgListItem = ({ url, alt }) => {
//   const listItem = document.createElement('li');

//   const imgItem = document.createElement('img');
//   imgItem.src = url;
//   imgItem.alt = alt;

//   listItem.append(imgItem);

//   return listItem;
// };

// const elements = images.map(makeImgListItem);

// imgList.append(...elements);
const imgList = document.querySelector('#gallery');

const makeImgListMarkup = ({ url, alt }) => {
  return `<li class='item-style'><img class='imgitem' src='${url}' alt ='${alt}'></img></li>`;
};

const gallery = images.map(makeImgListMarkup).join('');
imgList.insertAdjacentHTML('afterbegin', gallery);
