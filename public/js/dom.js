const contentContainer = document.querySelector('.content-container');
const newPostBtn = document.querySelector('.new-post-btn');
const cancelBtn = document.querySelector('.cancel-btn');
const addNoteForm = document.getElementById('add-note-form');
const bgOverlay = document.querySelector('.bg-overlay');
const titleInput = document.querySelector('.post-title');
const contentInput = document.querySelector('.post-excerpt');
const categoryInput = document.querySelector('.post-category');

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
      createElement('span', 'card-category', card, post.category);
      createElement('h2', 'card-title', card, post.title);
      createElement('p', 'card-excerpt', card, post.content);
      createElement('span', 'card-author', card, `${post.first_name} ${post.last_name}`);
      createElement('span', 'card-date', card, post.date_created);
    });
  });

addNoteForm.addEventListener('submit', () => {
  fetch('/addData', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    // eslint-disable-next-line max-len
    body: JSON.stringify({
      // eslint-disable-next-line max-len
      title: titleInput.value, content: contentInput.value, category: categoryInput.value, user_id: 1,
    }),
  });
});
