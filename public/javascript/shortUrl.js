function randomChart(arr) {
  const passwordRandomIndex = Math.floor(Math.random() * arr.length)
  return arr[passwordRandomIndex]
}

function shortUrl() {
  const chart = 'abcdefghijklmnopqrstuvwxyzABCDEFQHIJKLMNOPQRSTUVWXYZ0123456789'
  const collection = chart.split('')

  let password = ''
  for (let i = 0; i < 5; i++) {
    password += randomChart(collection)
  }
  return password
}

module.exports = shortUrl