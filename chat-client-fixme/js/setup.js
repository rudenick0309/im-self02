//This one calls the Parse server to grab data, and sends it to processData
var getData = function () {
  // your code HERE
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      return json;
    });
};

var displayData = function (data, user) {
  // your code HERE
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: document.querySelector(".userIdInput").value,
      body: document.querySelector(".userInput").value,
      userId: 10,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};

{
  /* <div class="chat-room"></div> */
}
//postData??
