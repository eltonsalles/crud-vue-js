<template>
  <div>
    <form class="page-content" novalidate autocomplete="off">
      <section class="page-content__left-part">
        <h4 class="page-content__title">Dados da empresa</h4>
        <div
            class="input-group"
            :class="{ 'input-group--error': $v.companyData.fantasyName.$error }">
          <input
              class="input-group__field"
              type="text"
              id="fantasy-name"
              maxlength="255"
              :class="{ 'input-group__field--active': companyData.fantasyName }"
              v-model="companyData.fantasyName">
          <label class="input-group__label" for="fantasy-name">Nome Fantasia</label>
        </div>
        <div
            class="input-group"
            :class="{ 'input-group--error': $v.companyData.socialName.$error }">
          <input
              class="input-group__field"
              type="text"
              id="social-name"
              maxlength="255"
              :class="{ 'input-group__field--active': companyData.socialName }"
              v-model="companyData.socialName">
          <label class="input-group__label" for="social-name">Razão Social</label>
        </div>
        <div
            class="input-group"
            :class="{ 'input-group--error': $v.companyData.cnpj.$error }">
          <input
              class="input-group__field"
              type="text"
              id="cnpj"
              maxlength="18"
              v-mask="'##.###.###/####-##'"
              :class="{ 'input-group__field--active': companyData.cnpj }"
              v-model="companyData.cnpj">
          <label class="input-group__label" for="cnpj">CNPJ</label>
        </div>
        <div
            class="input-group"
            :class="{ 'input-group--error': $v.companyData.stateRegistration.$error }">
          <input
              class="input-group__field"
              type="text"
              id="state-registration"
              maxlength="255"
              v-mask="'###.###.###.###'"
              :class="{ 'input-group__field--active': companyData.stateRegistration }"
              v-model="companyData.stateRegistration">
          <label class="input-group__label" for="state-registration">Inscrição Estadual</label>
        </div>
        <div
            class="input-group"
            :class="{ 'input-group--error': $v.companyData.municipalRegistration.$error }">
          <input
              class="input-group__field"
              type="text"
              id="municipal-registration"
              maxlength="255"
              v-mask="'###.###.###.###'"
              :class="{ 'input-group__field--active': companyData.municipalRegistration }"
              v-model="companyData.municipalRegistration">
          <label
              class="input-group__label" for="municipal-registration">Inscrição Municipal</label>
        </div>
        <m-select
            :class="{ 'select-group--error': $v.companyData.financialOfficer.$error }"
            label="Responsável Financeiro"
            :options="financialOfficer.options"
            :selected="financialOfficer.selected"
            v-model="companyData.financialOfficer"></m-select>
      </section>
      <section class="page-content__right-part">
        <h4 class="page-content__title">Endereço</h4>
        <div
            class="input-group"
            :class="{ 'input-group--error': $v.companyData.address.cep.$error }">
          <input
              class="input-group__field"
              type="text"
              id="cep"
              maxlength="9"
              v-mask="'#####-###'"
              :class="{ 'input-group__field--active': companyData.address.cep }"
              v-model="companyData.address.cep"
              @keyup="searchAddress">
          <label class="input-group__label" for="cep">CEP</label>
        </div>
        <div class="form-group">
          <div
              class="input-group input-group--size-3"
              :class="{ 'input-group--error': $v.companyData.address.address.$error }">
            <input
                class="input-group__field"
                type="text"
                id="address"
                maxlength="255"
                :class="{ 'input-group__field--active': companyData.address.address }"
                v-model="companyData.address.address">
            <label class="input-group__label" for="address">Endereço</label>
          </div>
          <div
              class="input-group input-group--size-1"
              :class="{ 'input-group--error': $v.companyData.address.number.$error }">
            <input
                class="input-group__field"
                type="text"
                id="number"
                maxlength="255"
                :class="{ 'input-group__field--active': companyData.address.number }"
                v-model="companyData.address.number">
            <label class="input-group__label" for="number">Número</label>
          </div>
        </div>
        <div class="form-group">
          <div
              class="input-group"
              :class="{ 'input-group--error': $v.companyData.address.complement.$error }">
            <input
                class="input-group__field"
                type="text"
                id="complement"
                maxlength="255"
                :class="{ 'input-group__field--active': companyData.address.complement }"
                v-model="companyData.address.complement">
            <label class="input-group__label" for="complement">Complemento</label>
          </div>
          <div
              class="input-group"
              :class="{ 'input-group--error': $v.companyData.address.district.$error }">
            <input
                class="input-group__field"
                type="text"
                id="district"
                maxlength="255"
                :class="{ 'input-group__field--active': companyData.address.district }"
                v-model="companyData.address.district">
            <label class="input-group__label" for="district">Bairro</label>
          </div>
        </div>
        <div class="form-group">
          <div
              class="input-group"
              :class="{ 'input-group--error': $v.companyData.address.city.$error }">
            <input
                class="input-group__field"
                type="text"
                id="city"
                maxlength="255"
                :class="{ 'input-group__field--active': companyData.address.city }"
                v-model="companyData.address.city">
            <label class="input-group__label" for="city">Cidade</label>
          </div>
          <div
              class="input-group"
              :class="{ 'input-group--error': $v.companyData.address.state.$error }">
            <input
                class="input-group__field"
                type="text"
                id="state"
                maxlength="255"
                :class="{ 'input-group__field--active': companyData.address.state }"
                v-model="companyData.address.state">
            <label class="input-group__label" for="state">Estado</label>
          </div>
        </div>
        <section>
          <h4 class="page-content__title page-content__title--not-margin">Selecionar produto</h4>
          <div class="form-group">
            <m-checkbox
                :class="{ 'checkbox-group--error': $v.companyData.products.$error }"
                v-for="(product, index) in checkboxProducts"
                :key="index"
                :label="product.label"
                :checkbox-checked="product.checkboxChecked"
                @input="checkedProduct"></m-checkbox>
          </div>
        </section>
        <section class="page-content__actions">
          <button
              class="btn btn--next"
              @click.prevent="nextForm">
            Próximo<i class="icon-right icon-sharp-arrow_forward-24px"></i>
          </button>
        </section>
      </section>
    </form>
    <m-toasts class="toasts--danger" :is-show="isShowToasts" @closeToasts="showToasts = false">
      <p>{{ message }}</p>
    </m-toasts>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import cloneObject from '../../../../support/helper/cloneObject';

import Checkbox from '../../../../components/checkbox/Checkbox.vue';
import Select from '../../../../components/select/Select.vue';
import Toasts from '../../../../components/toasts/Toasts.vue';

import CompanyData from '../../../../support/model/CompanyData';
import Address from '../../../../domains/services/Address';

const companyData = cloneObject(CompanyData.inputs);
const address = new Address();

export default {
  name: 'CompanyData',

  components: {
    'm-checkbox': Checkbox,
    'm-select': Select,
    'm-toasts': Toasts,
  },

  computed: {
    isShowToasts() {
      return this.showToasts;
    },
  },

  data() {
    return {
      companyData,
      showToasts: false,
      financialOfficer: {
        selected: null,
        options: [
          { id: 1, label: 'a' },
          { id: 2, label: 'b' },
          { id: 3, label: 'c' },
        ],
      },
      checkboxProducts: [
        { checkboxChecked: false, label: 'Sem juros' },
        { checkboxChecked: false, label: 'Gestão' },
        { checkboxChecked: false, label: 'Financie 50%' },
        { checkboxChecked: false, label: 'Financie 25%' },
      ],
      message: '',
    };
  },

  validations: {
    companyData: CompanyData.validations,
  },

  methods: {
    ...mapActions(['changeWildcardActive', 'changeCompanyData']),

    checkedProduct(checkbox) {
      const indexExistingItem = this.companyData.products
        .findIndex(elem => elem.toLowerCase() === checkbox.value.toLowerCase());

      if (indexExistingItem === -1) {
        this.companyData.products.push(checkbox.value);
      } else {
        this.companyData.products.splice(indexExistingItem, 1);
      }
    },

    searchAddress() {
      if (this.companyData.address.cep.length === 9) {
        this.fillAddress('...');
        address
          .search(this.companyData.address.cep)
          .then((result) => {
            this.companyData.address.address = result.address;
            this.companyData.address.district = result.district;
            this.companyData.address.city = result.city;
            this.companyData.address.state = result.state;
          })
          .catch((error) => {
            console.log(error);
            this.showToasts = true;
            this.message = 'Não foi possível encontrar o endereço para o CEP informado.';
            this.fillAddress();
          });
      }
    },

    fillAddress(value = null) {
      this.companyData.address.address = value;
      this.companyData.address.district = value;
      this.companyData.address.city = value;
      this.companyData.address.state = value;
    },

    nextForm() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.showToasts = true;
        this.message = 'Existem campos pendentes e/ou não preenchidos.';
      } else {
        this.changeCompanyData(cloneObject(this.companyData));
        this.changeWildcardActive(1);
        this.$router.push({ name: 'campus' });
      }
    },

    checkCompanyDataState() {
      const companyDataState = this.$store.state.college.companyData;
      if (companyDataState.products.length > 0) {
        this.$v.$reset();
        this.companyData = cloneObject(companyDataState);

        this.financialOfficer.selected = this.financialOfficer.options
          .find(item => item.id === this.companyData.financialOfficer);

        this.checkboxProducts.forEach((item, index) => {
          if (this.companyData.products.findIndex(product => product === item.label) !== -1) {
            this.checkboxProducts[index].checkboxChecked = true;
          }
        });
      } else {
        this.companyData = cloneObject(CompanyData.inputs);
      }
    },
  },

  created() {
    this.checkCompanyDataState();
  },
};
</script>
