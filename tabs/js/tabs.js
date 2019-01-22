'use strict';

const tabsContent = document.querySelector('.tabs-content').children;
const tabsNav = document.querySelector('.tabs-nav');
const childTabs = tabsNav.children;
const firstTab = tabsNav.firstElementChild;

tabsNav.removeChild(firstTab);

Array.from(tabsContent).forEach((article) => {
  const clone = firstTab.cloneNode(true);
  const childTab = tabsNav.appendChild(clone);
  childTab.firstElementChild.textContent = article.dataset.tabTitle;
  childTab.firstElementChild.classList = `fa ${article.dataset.tabIcon}`;
  article.classList.add('hidden');
});

Array.from(childTabs).forEach(tab => tab.addEventListener('click', activeTab));

function activeTab() {
  Array.from(childTabs).forEach(child => child.classList.remove('ui-tabs-active'));
  this.classList.add('ui-tabs-active');
  activeArticle(this);
}

function activeArticle(article) {
  const activeArticle = Array.from(tabsContent).find(child => article.textContent === child.dataset.tabTitle);
  Array.from(tabsContent).forEach(child => child.classList.add('hidden'));
  activeArticle.classList.remove('hidden');
}

function onLoad(article, firstTab) {
  article.classList.remove('hidden');
  firstTab.classList.add('ui-tabs-active');
}

onLoad(tabsContent[0], tabsNav.children[0]);
