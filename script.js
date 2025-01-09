const imageGroups = {
  A: [
    { src: 'a1.jpg', text: 'Marcel Duchamp' },
    { src: 'a2.jpg', text: '' },
    { src: 'a3.jpg', text: '' },
    { src: 'a4.jpg', text: '' },
    //{ src: 'a5.jpg', text: '這是 a5 的描述文字' }
  ],
  B: [
    { src: 'b1.jpg', text: 'John Cage' },
    { src: 'b2.jpg', text: '' },
    { src: 'b3.jpg', text: '' },
    { src: 'b4.jpg', text: '' },
    //{ src: 'b5.jpg', text: '這是 b5 的描述文字' }
  ],
  C: [
    { src: 'c1.jpg', text: 'Joseph Beuys' },
    { src: 'c2.jpg', text: '' },
    { src: 'c3.jpg', text: '' },
    { src: 'c4.jpg', text: '' },
    //{ src: 'c5.jpg', text: '這是 c5 的描述文字' }
  ],
  D: [
    { src: 'd1.jpg', text: 'Yayoi Kusama' },
    { src: 'd2.jpg', text: '' },
    { src: 'd3.jpg', text: '' },
    { src: 'd4.jpg', text: '' },
    //{ src: 'd5.jpg', text: '這是 d5 的描述文字' }
  ],
  E: [
    { src: 'e1.jpg', text: 'Nam June Paik' },
    { src: 'e2.jpg', text: '' },
    { src: 'e3.jpg', text: '' },
    { src: 'e4.jpg', text: '' },
    //{ src: 'e5.jpg', text: '這是 e5 的描述文字' }
  ],
  F: [
    { src: 'f1.jpg', text: 'Marina Abramović' },
    { src: 'f2.jpg', text: '' },
    { src: 'f3.jpg', text: '' },
    { src: 'f4.jpg', text: '' },
    //{ src: 'f5.jpg', text: '這是 f5 的描述文字' }
  ],
  G: [
    { src: 'g1.jpg', text: 'Laurie Anderson' },
    { src: 'g2.jpg', text: '' },
    //{ src: 'g3.jpg', text: '這是 g3 的描述文字' },
    //{ src: 'g4.jpg', text: '這是 g4 的描述文字' },
    //{ src: 'g5.jpg', text: '這是 g5 的描述文字' }
  ],
  H: [
    { src: 'h1.jpg', text: 'Cindy Sherman' },
    { src: 'h2.jpg', text: '' },
    { src: 'h3.jpg', text: '' },
    //{ src: 'h4.jpg', text: '這是 h4 的描述文字' },
    //{ src: 'h5.jpg', text: '這是 h5 的描述文字' }
  ],
  I: [
    { src: 'i1.jpg', text: 'Thomas Demand' },
    { src: 'i2.jpg', text: '' },
    //{ src: 'i3.jpg', text: '這是 i3 的描述文字' },
    //{ src: 'i4.jpg', text: '這是 i4 的描述文字' },
    //{ src: 'i5.jpg', text: '這是 i5 的描述文字' }
  ]
};

const lastShownImages = {}; // 儲存每組上一次顯示的圖片

// 初始化事件監聽器
document.querySelectorAll('.photo').forEach(photo => {
  photo.addEventListener('click', () => handlePhotoClick(photo));
});

// 點擊事件處理
function handlePhotoClick(photo) {
  const group = photo.dataset.group;
  const randomImage = getUniqueRandomImage(imageGroups[group], group);
  const img = photo.querySelector('img');
  const description = photo.querySelector('.description');
  const originalSrc = img.src;

  // 更新圖片與文字
  img.src = randomImage.src;
  description.textContent = randomImage.text;
  description.classList.remove('hidden');
  description.classList.add('visible');

  // 1秒後翻回正面並隱藏文字
  setTimeout(() => {
    img.src = originalSrc;
    description.classList.remove('visible');
    description.classList.add('hidden');
  }, randomImage.duration || 1000);
}

// 獲取與上次不同的隨機圖片
function getUniqueRandomImage(images, group) {
  let randomImage;
  do {
    randomImage = images[Math.floor(Math.random() * images.length)];
  } while (randomImage.src === lastShownImages[group]);
  lastShownImages[group] = randomImage.src; // 更新為這次顯示的圖片
  return randomImage;
}