import renderApi from '@api/render-api';

renderApi.auth('rnd_TcqV0fuUES1YXBEfEk7dTsC49haO');
renderApi.listServices({includePreviews: 'true', limit: '20'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));