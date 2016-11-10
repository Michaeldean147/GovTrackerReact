import request from './request';

export default function (zipCode) {
  const requestData = {
    zip: zipCode
  };

  return request('/zipCode', {
    data: requestData,
    method: 'GET',
    contentType: 'application/json'
  }).then((response) => {
    console.log('YO DAWG',response);
  });
}
