const contentContainer = document.querySelector('.content-container');
const newPostBtn = document.querySelector('.new-post-btn');
const cancelBtn = document.querySelector('.cancel-btn');
const addNoteForm = document.getElementById('add-note-form');
const bgOverlay = document.querySelector('.bg-overlay');

newPostBtn.addEventListener('click', () => {
  addNoteForm.toggleAttribute('hidden');
  bgOverlay.toggleAttribute('hidden');
  document.body.style.overflow = 'hidden';
});
cancelBtn.addEventListener('click', () => {
  addNoteForm.toggleAttribute('hidden');
  bgOverlay.toggleAttribute('hidden');
  document.body.style.overflow = 'scroll';
});

const createElement = (tagName, className, parentNode, textContent) => {
  const elementName = document.createElement(tagName);
  elementName.classList.add(className);
  parentNode.appendChild(elementName);
  elementName.textContent = textContent;
  return elementName;
};

const cards = createElement('div', 'cards', contentContainer);

fetch('/displayData')
  .then((result) => result.json())
  .then((posts) => {
    posts.forEach((post) => {
      const card = createElement('div', 'card', cards);
      const cardCategory = createElement('span', 'card-category', card, post.category);
      const cardTitle = createElement('h2', 'card-title', card, post.title);
      const cardExcerpt = createElement('p', 'card-excerpt', card, post.content);
      const cardAuthor = createElement('span', 'card-author', card, `${post.first_name} ${post.last_name}`);
      const cardDate = createElement('span', 'card-date', card, post.date_created);
    });
  });
