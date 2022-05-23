function downloadObjectAsJson (exportObj, exportName) {
  var dataStr =
    'data:text/json;charset=utf-8,' +
    encodeURIComponent(JSON.stringify(exportObj))
  var downloadAnchorNode = document.createElement('a')
  downloadAnchorNode.setAttribute('href', dataStr)
  downloadAnchorNode.setAttribute('download', exportName + '.json')
  document.body.appendChild(downloadAnchorNode) // required for firefox
  downloadAnchorNode.click()
  downloadAnchorNode.remove()
}
document.querySelector('button').addEventListener('click', async e => {
  document.body.style.cursor = 'wait'
  document.querySelector('button').style.cursor = 'wait'
  console.log('gello')
  const url = 'https://compscrapper.herokuapp.com/'
  var headers = {}

  fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: headers
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.error)
      }
      return response.json()
    })
    .then(data => {
      downloadObjectAsJson(data, 'competences')
      console.log(data)
      document.body.style.cursor = 'pointer'
      document.querySelector('button').style.cursor = ''
    })
    .catch(function (error) {
      console.log(error)
    })
})
