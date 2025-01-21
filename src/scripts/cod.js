function toggleMenu() {
  const nav = document.querySelector('.nav');
  nav.classList.toggle('show');
}

document.addEventListener('click', function (event) {
  const nav = document.querySelector('.nav');
  const menu = document.querySelector('.menu');
  
 
  if (!nav.contains(event.target) && !menu.contains(event.target)) {
    nav.classList.remove('show');
  }
});

function openModal(title, imageSrc, description, price) {
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalImage').src = imageSrc;
  document.getElementById('modalDescription').textContent = description;
  document.getElementById('modalPrice').textContent = price;

  document.getElementById('modalOverlay').style.display = 'flex';
}

function closeModal() {
  document.getElementById('modalOverlay').style.display = 'none';
}

//loadModal();


const container = document.querySelector('.container-blog');
  const postsArray = Array.from(container.children);
  let index = 0;
  
  function showNextPost() {
      postsArray.forEach((post, i) => {
          post.style.display = i === index ? 'block' : 'none';
      });
      index = (index + 1) % postsArray.length;
  }
  
  setInterval(showNextPost, 4000); 

  showNextPost();
