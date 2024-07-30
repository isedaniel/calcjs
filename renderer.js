const $ = (selector) => document.querySelector(selector);

const $screen = $('input');

document.querySelectorAll('input[value]').forEach((e) => {
  e.addEventListener('click', () => {
    $screen.value += e.value;
  });
});
