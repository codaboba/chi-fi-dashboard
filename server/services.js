const axios = require('axios');

const url = 'https://data.cityofchicago.org/resource/cwig-ma7x.json?';

const test = async () => {
  const { data } = await axios({
    method: 'get',
    url,
    params: {
      $where: 'zip=60654 AND inspection_date > "2018-01-01T00:00:00.00"',
      $order: 'inspection_date desc',
      $limit: 1,
    },
  });

  return data;
};

module.exports = { test };
