// Filter Portfolio
// if (targetElement.classList.contains('portfolio__navigation-button') && !targetElement.classList.contains('activeportfolio')) {
//   const activeElement = document.querySelector(`.portfolio__navigation-button.activeportfolio`);
//   const elements = document.querySelectorAll(`.portfolio__tabs-item`);
//   const elementType = targetElement.dataset.workType;

//   activeElement.classList.remove('activeportfolio');
//   targetElement.classList.add('activeportfolio');

//   elements.forEach(element => {
//     !elementType || element.dataset.workType === elementType ? element.hidden = false : element.hidden = true;
//   });
// }

// const list = document.querySelector('.portfolio__navigation');
// const items = document.querySelectorAll('.portfolio__tabs-item');
// const listItems = document.querySelectorAll('.portfolio__navigation-button');

// function filter() {
//     list.addEventListener('click', event => {
//         const targetId = event.target.dataset.id;
//         const target = event.target;

//         if(target.classList.contains('portfolio__navigation-button')) {
//             listItems.forEach(listItem => listItem.classList.remove('activefilter'));
//             target.classList.add('activefilter');
//         }

//         switch(targetId) {
//             case 'all':
//                 getItems('portfolio__tabs-item');
//                 break
//             case 'screen-printing':
//                 getItems('targetId');
//                 break
//             case 'coating':
//                 getItems('targetId');
//                 break
//             case 'hot-stamping':
//                 getItems('targetId');
//                 break
//         }
//     });
// }
// filter();

// function getItems(className) {
//     items.forEach(item => {
//         if (item.classList.contains(className)) {
//             item.style.display = 'block';
//         } else {
//             item.style.display = 'none';
//         }
//     })
// }

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("portfolio__tabs-item");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}

// Show filtered elements
function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("portfolio__navigation");
var btns = btnContainer.getElementsByClassName("portfolio__navigation-button");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("activefilter");
    current[0].className = current[0].className.replace(" activefilter", "");
    this.className += " activefilter";
  });
}