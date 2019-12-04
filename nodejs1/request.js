const request = require('request');

var options = {
  hostname: 'localhost',
  port: 3000
};

const countRequests = process.argv[2];
const typeRequests = process.argv[3];

if ((typeRequests !== 'P' && typeRequests !== 'S') || (!countRequests)) {
  console.log(`Необходимо указать 2 параметра:
  1. - количество запросов
  2. - тип запросов - параллельный (P) или последовательный (S)`);
}

async function foo(cnt, type) {
  for (let i = 0; i < cnt; i++) {
    if (type == 'S') {
      let res = await get();
      console.log(res.body);
    }
    else if (type == 'P') {
      let res = get().then((res) => console.log(res.body));
    }
  }
}

function getRequest() {
  return new Promise((resolve) => {
    request.get('http://127.0.0.1:3000', function (error, res) {
      resolve(res);
    })
  })
}

sendRequest(countRequests, typeRequests)