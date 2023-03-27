interface Counter {
  increment(): number;
}

function createCounter(): Counter {
  let count = 0;

  function increment() {
    count++;
    return count;
  }

  return {
    increment
  };
}

const counter = createCounter();

const incrementButton = document.getElementById(
  "increment-button"
) as HTMLButtonElement;
const countSpan = document.getElementById("count") as HTMLSpanElement;

incrementButton.addEventListener("click", () => {
  const currentCount = counter.increment();
  countSpan.innerText = currentCount.toString();
});
