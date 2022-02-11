function copyText() {
  const content = document.querySelector('#shortValue').placeholder
  navigator.clipboard.writeText(content)
  alert(`Copied the short url: ${content}`)
}