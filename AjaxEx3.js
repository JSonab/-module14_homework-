function useRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
  
    xhr.onload = function() {
      if (xhr.status != 200) {
        console.log('Статус ответа: ', xhr.status);
      } else {
        const result = JSON.parse(xhr.response);
        if (callback) {
          callback(result);
        }
      }
    };
  
    xhr.onerror = function() {
      console.log('Ошибка! Статус ответа: ', xhr.status);
    };
  
    xhr.send();
  };


const btnNode = document.querySelector(".btn");
const resultNode = document.querySelector('.j-result');


function displayResult(apiData) {
    let cards = '';

  
    apiData.forEach(item => {
      const cardBlock = `
        <div class="card">
          <img
            src="${item.thumbnailUrl}"
            class="card-image"
          />
          <p>${item.title}</p>
        </div>
      `;
      cards = cards + cardBlock;
    });
  
    resultNode.innerHTML = cards;
  }
  

  btnNode.addEventListener('click', () => {
    const input = parseInt(document.querySelector('input').value)
    if(input >= 1 || input <= 10){
        useRequest(`https://jsonplaceholder.typicode.com/photos?_limit=${input}`, displayResult);
    } else {
        console.log('число вне диапазона от 1 до 10');
    }
    })






  







