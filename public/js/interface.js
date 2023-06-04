
// let ids = [];
// (function () {
//   let elements = document.getElementsByTagName("path");
//   for (let i = 0; i < elements.length; i++) {
//     let element = elements[i];
//     if (element.id) {
//         ids.push(element.getAttribute("name"));
//     }
//   }
//   ids.sort();
// })();

// sessionStorage.setItem('options',JSON.stringify(ids));


// const elementId = "argentina";
// fetch('/book/', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({ elementId })
// })
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));



const elementId = "argentina";
fetch(`/?elementId=${elementId}`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));