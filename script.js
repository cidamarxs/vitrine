fetch('https://graph.facebook.com/v12.0/me/albums?fields=id,name,photos{images,source}&access_token=EAAGqjg3xJhUBO4wnRBwwwBPGSKxlZCYgV7c6RBJXDoZCMgZBcRkQ4PRKfyF4G4TZA2VEYZBOpJMN8UwLYZCyY3ZB803vQSqi4V2eQErPP1ayJPYpMaKD1avZAcDINPfEYkfuFl6GtD8cbhy2v7OHkekGibjhP41kZACu8ZAVZCPasjKYWldgd0wYQeaAB4ZAKKLGE1YkX5te2EYeDub3ijt7zS1pO20ZB1RrPo89lzIWHVhWNm9nDkpU87eh5m4rn01YZD')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Manipule os dados recebidos conforme necessário
  })
  .catch(error => console.error('Erro:', error));
  fetch('https://graph.facebook.com/v12.0/me/albums?fields=id,name,photos{images,source}&access_token=YOUR_ACCESS_TOKEN')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Manipule os dados recebidos conforme necessário
  })
  .catch(error => console.error('Erro:', error));
