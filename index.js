const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  let checkboxValues = '';

  for (let i = 0; i < checkboxes.length; i++) {
    checkboxValues += checkboxes[i].value + ', ';
  }

  window.location.href = `mailto:hannalova1991@gmail.com?subject=Checkbox Results&body=${checkboxValues}`;
});