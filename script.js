const text = document.getElementById('text');
const count = document.getElementById('count');

text.addEventListener('input', () => {
  const length = text.value.length;
  count.innerText = `${length}`;
});
