let result = document.querySelector('#result');
let count = 0

const addCount = () => showResult(++count);
const decrementCount = () => showResult(--count);
const showResult = (count) => result.innerHTML = count;