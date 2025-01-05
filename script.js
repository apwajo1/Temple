const imageGroups = {
  A: [
    { src: 'a1.jpg', text: 'Marcel Duchamp' },
    //{ src: 'a2.jpg', text: '這是 a2 的描述文字' },
    //{ src: 'a3.jpg', text: '這是 a3 的描述文字' },
    //{ src: 'a4.jpg', text: '這是 a4 的描述文字' },
    //{ src: 'a5.jpg', text: '這是 a5 的描述文字' }
  ],
  B: [
    { src: 'b1.jpg', text: 'John Cage' },
    //{ src: 'b2.jpg', text: '這是 b2 的描述文字' },
    //{ src: 'b3.jpg', text: '這是 b3 的描述文字' },
    //{ src: 'b4.jpg', text: '這是 b4 的描述文字' },
    //{ src: 'b5.jpg', text: '這是 b5 的描述文字' }
  ],
  C: [
    { src: 'c1.jpg', text: 'Joseph Beuys' },
    //{ src: 'c2.jpg', text: '這是 c2 的描述文字' },
    //{ src: 'c3.jpg', text: '這是 c3 的描述文字' },
    //{ src: 'c4.jpg', text: '這是 c4 的描述文字' },
    //{ src: 'c5.jpg', text: '這是 c5 的描述文字' }
  ],
  D: [
    { src: 'd1.jpg', text: 'Yayoi Kusama' },
    //{ src: 'd2.jpg', text: '這是 d2 的描述文字' },
    //{ src: 'd3.jpg', text: '這是 d3 的描述文字' },
    //{ src: 'd4.jpg', text: '這是 d4 的描述文字' },
    //{ src: 'd5.jpg', text: '這是 d5 的描述文字' }
  ],
  E: [
    { src: 'e1.jpg', text: 'Nam June Paik' },
    //{ src: 'e2.jpg', text: '這是 e2 的描述文字' },
    //{ src: 'e3.jpg', text: '這是 e3 的描述文字' },
    //{ src: 'e4.jpg', text: '這是 e4 的描述文字' },
    //{ src: 'e5.jpg', text: '這是 e5 的描述文字' }
  ],
  F: [
    { src: 'f1.jpg', text: 'Marina Abramović' },
    //{ src: 'f2.jpg', text: '這是 f2 的描述文字' },
    //{ src: 'f3.jpg', text: '這是 f3 的描述文字' },
    //{ src: 'f4.jpg', text: '這是 f4 的描述文字' },
    //{ src: 'f5.jpg', text: '這是 f5 的描述文字' }
  ],
  G: [
    { src: 'g1.jpg', text: 'Laurie Anderson' },
    //{ src: 'g2.jpg', text: '這是 g2 的描述文字' },
    //{ src: 'g3.jpg', text: '這是 g3 的描述文字' },
    //{ src: 'g4.jpg', text: '這是 g4 的描述文字' },
    //{ src: 'g5.jpg', text: '這是 g5 的描述文字' }
  ],
  H: [
    { src: 'h1.jpg', text: 'Cindy Sherman' },
    //{ src: 'h2.jpg', text: '這是 h2 的描述文字' },
    //{ src: 'h3.jpg', text: '這是 h3 的描述文字' },
    //{ src: 'h4.jpg', text: '這是 h4 的描述文字' },
    //{ src: 'h5.jpg', text: '這是 h5 的描述文字' }
  ],
  I: [
    { src: 'i1.jpg', text: 'Thomas Demand' },
    //{ src: 'i2.jpg', text: '這是 i2 的描述文字' },
    //{ src: 'i3.jpg', text: '這是 i3 的描述文字' },
    //{ src: 'i4.jpg', text: '這是 i4 的描述文字' },
    //{ src: 'i5.jpg', text: '這是 i5 的描述文字' }
  ]
};

// 初始化事件監聽器
document.querySelectorAll('.photo').forEach(photo => {
  photo.addEventListener('click', () => handlePhotoClick(photo));
});

// 點擊事件處理
function handlePhotoClick(photo) {
  const group = photo.dataset.group;
  const randomImage = getRandomImage(imageGroups[group]);
  const img = photo.querySelector('img');
  const description = photo.querySelector('.description');
  const originalSrc = img.src;

  // 更新圖片與文字
  img.src = randomImage.src;
  description.textContent = randomImage.text;
  description.classList.remove('hidden');
  description.classList.add('visible');

  // 1秒後翻回原圖並隱藏文字
  setTimeout(() => {
    img.src = originalSrc;
    description.classList.remove('visible');
    description.classList.add('hidden');
  }, 1000);
}

// 隨機選擇圖片與文字
function getRandomImage(images) {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}
