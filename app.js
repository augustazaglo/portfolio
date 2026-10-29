const { projects, experience, processStages } = window.portfolioContent;
const galleryItems = projects.flatMap(project => project.images?.length
  ? project.images.map((photo, index) => ({
    ...project,
    ...photo,
    id: `${project.id}-${index + 1}`,
    title: photo.title || `${project.title} ${String(index + 1).padStart(2, '0')}`
  }))
  : [project]);
const grid = document.querySelector('#project-grid');
document.querySelector('.filter[data-filter="all"] span').textContent = String(galleryItems.length).padStart(2, '0');

function makeElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

processStages.forEach((stage, index) => {
  const item = makeElement('li', 'process-stage');
  const imageWrap = makeElement('div', 'process-image');
  const image = makeElement('img');
  image.src = stage.image;
  image.alt = stage.alt;
  image.loading = 'lazy';
  if (stage.position) image.style.objectPosition = stage.position;
  if (stage.fit) image.style.objectFit = stage.fit;
  imageWrap.append(image);
  const number = makeElement('span', 'process-stage-number', `0${index + 1}`);
  number.setAttribute('aria-hidden', 'true');
  item.append(imageWrap, number, makeElement('h3', '', stage.title), makeElement('p', '', stage.description));
  document.querySelector('#process-sequence').append(item);
});

function renderProjects(filter = 'all') {
  grid.replaceChildren();
  galleryItems.filter(project => filter === 'all' || project.category === filter).forEach(project => {
    const figure = makeElement('figure', 'project');
    figure.dataset.category = project.category;
    const imageWrap = makeElement('div', 'project-image');
    const image = makeElement('img');
    image.src = project.image;
    image.alt = project.alt;
    image.loading = 'lazy';
    if (project.fit) image.style.objectFit = project.fit;
    imageWrap.append(image, makeElement('span', 'project-number', String(galleryItems.indexOf(project) + 1).padStart(2, '0')));
    const caption = makeElement('figcaption');
    const meta = makeElement('div', 'project-meta');
    meta.append(makeElement('span', '', project.label), makeElement('span', '', project.year));
    caption.append(meta, makeElement('h3', '', project.title));
    figure.append(imageWrap, caption);
    grid.append(figure);
  });
}

document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.filter').forEach(filter => {
    const selected = filter === button;
    filter.classList.toggle('active', selected);
    filter.setAttribute('aria-pressed', String(selected));
  });
  renderProjects(button.dataset.filter);
}));

experience.forEach(item => {
  const article = makeElement('article', 'timeline-entry');
  const copy = makeElement('div');
  copy.append(makeElement('h3', '', item.title), makeElement('p', 'timeline-place', item.place));
  article.append(makeElement('span', 'timeline-period', item.period), copy, makeElement('p', 'timeline-description', item.description));
  document.querySelector('#timeline').append(article);
});

document.querySelectorAll('dialog').forEach(dialog => {
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
});

const menu = document.querySelector('.menu-button');
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  document.querySelector('.header').classList.toggle('menu-open', open);
});
document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => {
  menu.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-label', 'Open navigation');
  document.querySelector('.header').classList.remove('menu-open');
}));
document.querySelector('#show-credits').addEventListener('click', () => document.querySelector('#credits-dialog').showModal());
document.querySelector('#print-portfolio').addEventListener('click', () => window.print());
window.addEventListener('beforeprint', () => renderProjects());
window.addEventListener('afterprint', () => renderProjects(document.querySelector('.filter.active').dataset.filter));
renderProjects();
