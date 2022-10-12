// ! 1
// const btns = document.querySelectorAll('.tabs__top-btn');
// const content = document.querySelectorAll('.tabs__content');
// const tabs = document.querySelector('.tabs');

// function removeActiveClass(parent) {
//   parent.forEach((item) => item.classList.remove('active'));
// }

// function addActiveClass(el) {
//   el.classList.add('active');
// }

// tabs.addEventListener('click', (e) => {
//   removeActiveClass(btns);
//   addActiveClass(e.target);

//   content.forEach((item) => {
//     if (e.target.dataset.tab === item.dataset.content) {
//       removeActiveClass(content);

//       addActiveClass(item);
//     }
//   });
// });

// ! 2
function tabs(parent) {
  const parentEl = document.querySelector(parent);
  const tabBtns = Array.from(parentEl.querySelectorAll('.tabs__top-btn'));
  const tabContent = Array.from(parentEl.querySelectorAll('.tabs__content'));

  tabBtns[0].classList.add('active');
  tabContent[0].classList.add('active');

  let activeBtn = tabBtns[0];
  let activeContent = tabContent[0];

  tabBtns.forEach((el) => {
    el.addEventListener('click', onTabBtnClick);
  });

  function onTabBtnClick(e) {
    const btn = e.target.closest('.tabs__top-btn');
    const indexBtn = tabBtns.indexOf(btn);

    changeBtn(btn);
    changeContent(indexBtn);
  }

  function changeBtn(btn) {
    if (btn.classList.contains('active')) {
      return;
    }

    activeBtn.classList.remove('active');
    btn.classList.add('active');
    activeBtn = btn;
  }

  function changeContent(index) {
    activeContent.classList.remove('active');
    tabContent[index].classList.add('active');
    activeContent = tabContent[index];
  }
}
tabs('.tabs.tabs--tabs-1');
tabs('.tabs.tabs--tabs-2');

// ! 3
// const tabs = document.querySelectorAll('.tabs__top-btn');
// const contents = document.querySelectorAll('.tabs__content');

// tabs.forEach((tab, index) => {
//   tab.addEventListener('click', (e) => {
//     contents.forEach((el) => {
//       el.classList.remove('active');
//     });

//     tabs.forEach((el) => {
//       el.classList.remove('active');
//     });

//     tab.classList.add('active');
//     contents[index].classList.add('active');
//   });
// });


// ! 4