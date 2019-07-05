import axios from 'axios';

const url = 'https://data.cityofchicago.org/resource/cwig-ma7x.json';

export const addRow = async offset => {
  const { data } = await axios({
    method: 'get',
    url,
    params: {
      $limit: 1,
      $where: 'inspection_date > "2018-01-01T00:00:00.00"',
      $order: 'inspection_date asc',
      $offset: offset,
    },
  });
  return data;
};
