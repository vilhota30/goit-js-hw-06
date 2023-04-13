const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incremenBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');

const counter = {
    value: 0,
    increment() {
        this.value += 1;
    },

    decrement() {
        this.value -= 1;
    },
};

decrementBtn.addEventListener('click', function () {
    counter.decrement();
    console.log(counter);
    valueEl.textContent = counter.value;
});

incremenBtn.addEventListener('click', function () {
    counter.increment();
    console.log(counter);
    valueEl.textContent = counter.value;
}); 

