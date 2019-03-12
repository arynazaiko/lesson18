let tds = document.querySelectorAll('td');

// tds.forEach((td) => {
//   td.onclick = (e) => {
//     e.stopPropagation();
//     console.log('клик на td')
//   }
// });

var table = document.querySelector('table');
// table.onclick = function(e) {
//   // console.log('клик на table')
//   console.log(e.target.tagName);
//   if (e.target.tagName !== 'TD')  return;
//   e.target.style.background = e.target.style.background ? null : 'red';
// }

// document.body.onclick = function() {
//   console.log('клик на body')
// }

// document.documentElement.onclick = function() {
//   console.log('клик на html')
// }

table.addEventListener('click', () => {
  console.log('table');
}, true);
document.body.addEventListener('click', () => {
  console.log('body');
}, true);
document.documentElement.addEventListener('click', () => {
  console.log('html');
}, true);