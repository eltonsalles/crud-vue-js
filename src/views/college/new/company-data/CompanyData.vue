<template>
  <section class="page-content">
    <section class="page-content__left-part">
      <h4 class="page-content__title">Dados da empresa</h4>
      <div class="input-group">
        <input
            class="input-group__field"
            type="text"
            id="fantasy-name"
            maxlength="255"
            :class="{ 'input-group__field--active': companyData.fantasyName }"
            v-model="companyData.fantasyName">
        <label class="input-group__label" for="fantasy-name">Nome Fantasia</label>
      </div>
      <div class="input-group">
        <input
            class="input-group__field"
            type="text"
            id="social-name"
            maxlength="255"
            :class="{ 'input-group__field--active': companyData.socialName }"
            v-model="companyData.socialName">
        <label class="input-group__label" for="social-name">Nome Fantasia</label>
      </div>
      <div class="input-group">
        <input
            class="input-group__field"
            type="text"
            id="cnpj"
            maxlength="255"
            :class="{ 'input-group__field--active': companyData.cnpj }"
            v-model="companyData.cnpj">
        <label class="input-group__label" for="cnpj">CNPJ</label>
      </div>
      <div class="input-group">
        <input
            class="input-group__field"
            type="text"
            id="state-registration"
            maxlength="255"
            :class="{ 'input-group__field--active': companyData.stateRegistration }"
            v-model="companyData.stateRegistration">
        <label class="input-group__label" for="state-registration">Inscrição Estadual</label>
      </div>
      <div class="input-group">
        <input
            class="input-group__field"
            type="text"
            id="municipal-registration"
            maxlength="255"
            :class="{ 'input-group__field--active': companyData.municipalRegistration }"
            v-model="companyData.municipalRegistration">
        <label
            class="input-group__label" for="municipal-registration">Inscrição Municipal</label>
      </div>
      <div class="input-group">
        <input
            class="input-group__field"
            type="text"
            id="financial-officer"
            maxlength="255"
            :class="{ 'input-group__field--active': companyData.financialOfficer }"
            v-model="companyData.financialOfficer">
        <label class="input-group__label" for="financial-officer">Responsável Financeiro</label>
      </div>
    </section>
    <section class="page-content__right-part">
      <h4 class="page-content__title">Endereço</h4>
      <div class="input-group">
        <input
            class="input-group__field"
            type="text"
            id="cep"
            maxlength="255"
            :class="{ 'input-group__field--active': companyData.cep }"
            v-model="companyData.cep">
        <label class="input-group__label" for="cep">CEP</label>
      </div>
      <div class="form-group">
        <div class="input-group input-group--size-3">
          <input
              class="input-group__field"
              type="text"
              id="address"
              maxlength="255"
              :class="{ 'input-group__field--active': companyData.address }"
              v-model="companyData.address">
          <label class="input-group__label" for="address">Endereço</label>
        </div>
        <div class="input-group input-group--size-1">
          <input
              class="input-group__field"
              type="text"
              id="number"
              maxlength="255"
              :class="{ 'input-group__field--active': companyData.number }"
              v-model="companyData.number">
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
              :class="{ 'input-group__field--active': companyData.complement }"
              v-model="companyData.complement">
          <label class="input-group__label" for="complement">Complemento</label>
        </div>
        <div class="input-group">
          <input
              class="input-group__field"
              type="text"
              id="district"
              maxlength="255"
              :class="{ 'input-group__field--active': companyData.district }"
              v-model="companyData.district">
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
              :class="{ 'input-group__field--active': companyData.city }"
              v-model="companyData.city">
          <label class="input-group__label" for="city">Cidade</label>
        </div>
        <div class="input-group">
          <input
              class="input-group__field"
              type="text"
              id="state"
              maxlength="255"
              :class="{ 'input-group__field--active': companyData.state }"
              v-model="companyData.state">
          <label class="input-group__label" for="state">Estado</label>
        </div>
      </div>
      <section>
        <h4 class="page-content__title page-content__title--not-margin">Selecionar produto</h4>
        <div class="form-group">
          <m-checkbox label="Sem juros"></m-checkbox>
          <m-checkbox label="Gestão"></m-checkbox>
          <m-checkbox label="Financie 50%"></m-checkbox>
          <m-checkbox label="Financie 25%"></m-checkbox>
        </div>
      </section>
      <section class="page-content__actions">
        <router-link
            class="btn btn--next"
            :to="{ name: 'campus' }"
            @click.native="changeWildcardActive(1)">
          Próximo<i class="icon-right icon-sharp-arrow_forward-24px"></i>
        </router-link>
      </section>
    </section>
  </section>
</template>

<script>
import { mapActions } from 'vuex';

import Checkbox from '../../../../components/checkbox/Checkbox.vue';

export default {
  name: 'CompanyData',

  components: {
    'm-checkbox': Checkbox,
  },

  data() {
    return {
      companyData: {
        fantasyName: null,
        socialName: null,
        cnpj: null,
        stateRegistration: null,
        municipalRegistration: null,
        financialOfficer: null,
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

  methods: {
    ...mapActions(['changeWildcardActive']),
  },
};
</script>

<style lang="postcss" scoped>
 @import "CompanyData.css";
</style>
