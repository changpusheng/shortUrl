const homeButton = document.querySelector('#homeForm')
const inputValue = document.querySelector('#submitToData')

function inputValueSplit() {
  let inputValueSplite = ''
  for (let i = 0; i < 8; i++) {
    inputValueSplite += inputValue.value.split("")[i]
  }
  return inputValueSplite
}

homeButton.addEventListener('submit', function submitToData(event) {
  if (inputValue.value === '') {
    event.stopPropagation()
    event.preventDefault()
    alert('請輸入正確的網址')
  } else if (inputValueSplit() !== "https://") {
    event.stopPropagation()
    event.preventDefault()
    alert('請輸入正確的網址')
  }
})
