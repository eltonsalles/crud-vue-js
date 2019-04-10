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
    const value = cep.toString().replace(/\D/g, '');
    if (value !== '') {
      const pattern = /^[0-9]{8}$/;
      if (pattern.test(value)) {
        return this._http
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
            throw new Error(`Erro ao consultar o CEP. ${error}`);
          });
      }

      throw new Error('O CEP não possui 8 dígitos');
    } else {
      throw new Error('Não foi informado nenhum valor para o CEP.');
    }
  }
}
