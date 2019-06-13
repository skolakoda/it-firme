export default function postData (url, data, contentType = 'json', auth = false) {
  contentType = contentType === 'form' ? 'application/x-www-form-urlencoded' : 'application/json'
  data = contentType === 'json' ? JSON.stringify(data) : data
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': `${contentType}`
    },
    body: data
  })
    .then(response => response.json())
}
