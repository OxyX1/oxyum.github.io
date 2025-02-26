fetch('http://shortline.proxy.rlwy.net:16258/cloudbrowser')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
