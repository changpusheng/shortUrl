function copyText() {
  const content = document.querySelector('#shortValue')
  navigator.clipboard.writeText(content.placeholder)
  alert(`複製網址成功 \n ${content.placeholder}`)
}