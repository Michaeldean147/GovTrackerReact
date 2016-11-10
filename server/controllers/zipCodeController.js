const request = require('request-promise');

module.exports = (req, res) => {
  const zipCode = req.query.zip;
  return getLegislators(zipCode)
    .then(legislators => {
      res.status(200).json(legislators);
    })
    .catch(() => {
      res.status(200).send('Sunlight Labs is hosed');
    });
};

function getLegislators (zipCode) {
  return new Promise((resolve, reject) => {
    return request({
      url: `https://congress.api.sunlightfoundation.com/legislators/locate?zip=${zipCode}&apikey=API_KEY`,
      method: 'GET',
      simple: false,
      resolveWithFullResponse: true
    }).then(response => {
      if (response.statusCode >= 400) {
        console.log('YO THIS REJECTED', response.statusCode);
        reject(new Error(`Status code: ${response.statusCode}`));
      }
      else {
        console.log('YO THIS RESOLVED', response.body);
        resolve(response.body);
      }
    }).catch(err => {
      reject(err);
    });
  });

}
