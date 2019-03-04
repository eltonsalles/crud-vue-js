<template>
  <section class="campus-data">
    <section class="campus-data__general">
      <h4 class="campus-data__title">Dados do Campus</h4>
      <div class="input-group">
        <input
            class="input-group__field"
            type="text"
            id="campus-name"
            maxlength="255"
            :class="{ 'input-group__field--active': campusData.campusName }"
            v-model="campusData.campusName">
        <label class="input-group__label" for="campus-name">Nome do campus</label>
      </div>
      <div class="form-group">
        <div class="input-group">
          <input
              class="input-group__field"
              type="text"
              id="responsible"
              maxlength="255"
              :class="{ 'input-group__field--active': campusData.responsible }"
              v-model="campusData.responsible">
          <label class="input-group__label" for="responsible">Responsável</label>
        </div>
        <div class="input-group">
          <input
              class="input-group__field"
              type="text"
              id="telephone"
              maxlength="255"
              :class="{ 'input-group__field--active': campusData.telephone }"
              v-model="campusData.telephone">
          <label class="input-group__label" for="telephone">Telefone</label>
        </div>
      </div>
      <div class="input-group input-group--not-margin-top">
        <input
            class="input-group__field"
            type="text"
            id="cep"
            maxlength="255"
            :class="{ 'input-group__field--active': campusData.cep }"
            v-model="campusData.cep">
        <label class="input-group__label" for="cep">CEP</label>
      </div>
      <div class="form-group">
        <div class="input-group input-group--size-3">
          <input
              class="input-group__field"
              type="text"
              id="address"
              maxlength="255"
              :class="{ 'input-group__field--active': campusData.address }"
              v-model="campusData.address">
          <label class="input-group__label" for="address">Endereço</label>
        </div>
        <div class="input-group input-group--size-1">
          <input
              class="input-group__field"
              type="text"
              id="number"
              maxlength="255"
              :class="{ 'input-group__field--active': campusData.number }"
              v-model="campusData.number">
          <label class="input-group__label" for="number">Número</label>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <input
              class="input-group__field"
              type="text"
              id="complement"
              maxlength="255"
              :class="{ 'input-group__field--active': campusData.complement }"
              v-model="campusData.complement">
          <label class="input-group__label" for="complement">Complemento</label>
        </div>
        <div class="input-group">
          <input
              class="input-group__field"
              type="text"
              id="district"
              maxlength="255"
              :class="{ 'input-group__field--active': campusData.district }"
              v-model="campusData.district">
          <label class="input-group__label" for="district">Bairro</label>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <input
              class="input-group__field"
              type="text"
              id="city"
              maxlength="255"
              :class="{ 'input-group__field--active': campusData.city }"
              v-model="campusData.city">
          <label class="input-group__label" for="city">Cidade</label>
        </div>
        <div class="input-group">
          <input
              class="input-group__field"
              type="text"
              id="state"
              maxlength="255"
              :class="{ 'input-group__field--active': campusData.state }"
              v-model="campusData.state">
          <label class="input-group__label" for="state">Estado</label>
        </div>
      </div>
      <button class="btn btn--outline btn--rounded-edges btn--add-campus">Adicionar Campus</button>
    </section>
    <section class="campus-data__list"></section>
  </section>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Campus',

  methods: {
    ...mapActions(['changeWildcardActive']),
  },

  data() {
    return {
      campusData: {
        campusName: null,
        responsible: null,
        telephone: null,
        cep: null,
        address: null,
        number: null,
        complement: null,
        district: null,
        city: null,
        state: null,
      },
    };
  },
};
</script>

<style lang="postcss" scoped>
 @import "Campus.css";
</style>
