class fetch {
  constructor(URI = "", method = "GET") {
    this.request = new XMLHttpRequest();
    this.request.open(method, URI);
    this.request.onload = function () {
      if (this?.request?.status === 200) {
        return JSON.parse(this.responseText);
      }
    };

    this.request.onerror = function () {
      console.log(`Network Error`);
    };

    this.request.onprogress = function (event) {
      console.log(`Received ${event.loaded} of ${event.total}`);
    };
  }

  send() {
    this.request.send();
  }

  getData() {
    return JSON.parse(this.request.responseText);
  }
}

const todoService = new fetch(
  "https://jsonplaceholder.typicode.com/todos/",
  "GET"
);
todoService.send();

setTimeout(() => {
  console.log(todoService.getData());
}, 2000);
