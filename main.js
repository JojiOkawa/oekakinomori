
// XMLHttpRequestオブジェクトの作成
var request = new XMLHttpRequest();

// URLを開く
request.open('GET', "https://script.google.com/macros/s/AKfycbxafbXHnCT-AbarlGxzFO5RWITubteqSWgSq1fea7mlEgHnugVQ/exec", true);
request.responseType = 'json';

request.onload = function () {
  var data = this.response;
  console.log(data);
};

request.send();
