import { current } from "env-entry"

export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}, current is ${current}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
