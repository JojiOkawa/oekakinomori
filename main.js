
// XMLHttpRequestオブジェクトの作成
var request = new XMLHttpRequest();

// URLを開く
request.open('GET', "https://script.google.com/macros/s/AKfycbxafbXHnCT-AbarlGxzFO5RWITubteqSWgSq1fea7mlEgHnugVQ/exec", true);

var request = new XMLHttpRequest();

request.open('GET', 'https://jsonplaceholder.typicode.com/users/1', true);
request.responseType = 'json';

request.onload = function () {
  var data = this.response;
  console.log(data);
};

request.send();
