<!DOCTYPE html>
<html>
<head>
  <title>API REST De Países</title>
</head>
<body>
  <h1>Lista dos Países</h1>
  <ul id="country-list"></ul>

  <script>
    // Função para fazer a requisição à API
    function fetchData() {
      const apiUrl = 'https://restcountries.com/v3.1/all';

      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const countryList = document.getElementById('country-list');

          // Itera sobre os dados dos países e cria elementos HTML para exibição
          data.forEach(country => {
            const li = document.createElement('li');
            li.textContent = country.name.common;
            countryList.appendChild(li);
          });
        })
        .catch(error => {
          console.error('Ocorreu um erro:', error);
        });
    }

    // Funçao que consome API
    fetchData();
  </script>
</body>
</html>

