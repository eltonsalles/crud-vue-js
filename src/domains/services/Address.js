/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */

import axios from 'axios';

export default class Address {
  constructor() {
    this._http = null;
    this._init();
  }

  _init() {
    this._http = axios.create({
      baseURL: 'https://viacep.com.br/ws/',
    });
  }

  search(cep) {
    return new Promise((resolve, reject) => {
      const value = cep.toString().replace(/\D/g, '');

      if (value.length === 8) {
        resolve(this._http
          .get(`${value}/json/`)
          .then((response) => {
            if ('erro' in response.data) {
              throw new Error(`Nenhum endereço encontrado para o CEP: ${value}.`);
            }

            return {
              address: response.data.logradouro,
              number: null,
              complement: null,
              district: response.data.bairro,
              city: response.data.localidade,
              state: response.data.uf,
            };
          })
          .catch((error) => {
            console.log(error);
            throw new Error('Não foi possível encontrar o endereço para o CEP informado.');
          }));
      }

      reject(new Error('Não foi informado um valor válido para o CEP.'));
    });
  }
}
