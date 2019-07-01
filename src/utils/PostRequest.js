export default function postData (url, data, contentType = 'json', token = '') {
  contentType = contentType === 'form' ? 'application/x-www-form-urlencoded' : 'application/json'
  // data = contentType === 'json' ? JSON.stringify(data) : data
  data = JSON.stringify(data)
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': `${contentType}`,
      'x-auth-token': token
    },
    body: data
  })
    .then(response => response.json())
}
