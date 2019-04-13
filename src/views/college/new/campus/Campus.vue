<template>
  <section class="page-content">
    <form class="page-content__left-part" novalidate autocomplete="off">
      <h4 class="page-content__title">Dados do Campus</h4>
      <div
          class="input-group"
          :class="{ 'input-group--error': $v.campus.campusName.$error }">
        <input
            class="input-group__field"
            type="text"
            id="campus-name"
            maxlength="255"
            :class="{ 'input-group__field--active': campus.campusName }"
            v-model="campus.campusName">
        <label class="input-group__label" for="campus-name">Nome do campus</label>
      </div>
      <div class="form-group">
        <div
            class="input-group"
            :class="{ 'input-group--error': $v.campus.responsible.$error }">
          <input
              class="input-group__field"
              type="text"
              id="responsible"
              maxlength="255"
              :class="{ 'input-group__field--active': campus.responsible }"
              v-model="campus.responsible">
          <label class="input-group__label" for="responsible">Responsável</label>
        </div>
        <div
            class="input-group"
            :class="{ 'input-group--error': $v.campus.telephone.$error }">
          <input
              class="input-group__field"
              type="text"
              id="telephone"
              maxlength="15"
              v-mask="['(##) ####-####', '(##) #####-####']"
              :class="{ 'input-group__field--active': campus.telephone }"
              v-model="campus.telephone">
          <label class="input-group__label" for="telephone">Telefone</label>
        </div>
      </div>
      <div
          class="input-group input-group--not-margin-top"
          :class="{ 'input-group--error': $v.campus.address.cep.$error }">
        <input
            class="input-group__field"
            type="text"
            id="cep"
            maxlength="9"
            v-mask="'#####-###'"
            :class="{ 'input-group__field--active': campus.address.cep }"
            v-model="campus.address.cep"
            @keyup="searchAddress">
        <label class="input-group__label" for="cep">CEP</label>
      </div>
      <div class="form-group">
        <div
            class="input-group input-group--size-3"
            :class="{ 'input-group--error': $v.campus.address.address.$error }">
          <input
              class="input-group__field"
              type="text"
              id="address"
              maxlength="255"
              :class="{ 'input-group__field--active': campus.address.address }"
              v-model="campus.address.address">
          <label class="input-group__label" for="address">Endereço</label>
        </div>
        <div
            class="input-group input-group--size-1"
            :class="{ 'input-group--error': $v.campus.address.number.$error }">
          <input
              class="input-group__field"
              type="text"
              id="number"
              maxlength="255"
              :class="{ 'input-group__field--active': campus.address.number }"
              v-model="campus.address.number">
          <label class="input-group__label" for="number">Número</label>
        </div>
      </div>
      <div class="form-group">
        <div
            class="input-group"
            :class="{ 'input-group--error': $v.campus.address.complement.$error }">
          <input
              class="input-group__field"
              type="text"
              id="complement"
              maxlength="255"
              :class="{ 'input-group__field--active': campus.address.complement }"
              v-model="campus.address.complement">
          <label class="input-group__label" for="complement">Complemento</label>
        </div>
        <div
            class="input-group"
            :class="{ 'input-group--error': $v.campus.address.district.$error }">
          <input
              class="input-group__field"
              type="text"
              id="district"
              maxlength="255"
              :class="{ 'input-group__field--active': campus.address.district }"
              v-model="campus.address.district">
          <label class="input-group__label" for="district">Bairro</label>
        </div>
      </div>
      <div class="form-group">
        <div
            class="input-group"
            :class="{ 'input-group--error': $v.campus.address.city.$error }">
          <input
              class="input-group__field"
              type="text"
              id="city"
              maxlength="255"
              :class="{ 'input-group__field--active': campus.address.city }"
              v-model="campus.address.city">
          <label class="input-group__label" for="city">Cidade</label>
        </div>
        <div
            class="input-group"
            :class="{ 'input-group--error': $v.campus.address.state.$error }">
          <input
              class="input-group__field"
              type="text"
              id="state"
              maxlength="255"
              :class="{ 'input-group__field--active': campus.address.state }"
              v-model="campus.address.state">
          <label class="input-group__label" for="state">Estado</label>
        </div>
      </div>
      <button
          class="btn btn--outline btn--rounded-edges btn--add-campus"
          @click.prevent="addCampus">Adicionar Campus</button>
    </form>
    <section class="page-content__right-part">
      <h4 class="page-content__title">Lista de Campus</h4>
      <m-list
          :list-title="list.title"
          :list="list.data"
          @removeItem="removeItemListCampus"></m-list>
      <section class="page-content__actions">
        <router-link
            tag="button"
            class="btn btn--come-back"
            :to="{ name: 'company-data' }"
            @click.native="changeWildcardActive(0)">
          <i class="icon-left icon-arrow-left"></i>Voltar
        </router-link>
        <button
            class="btn btn--next"
            @click.prevent="nextForm">
          Próximo<i class="icon-right icon-arrow-right"></i>
        </button>
      </section>
    </section>
    <m-toasts class="toasts--danger" :is-show="isShowToasts" @closeToasts="showToasts = false">
      <p>{{ message }}</p>
    </m-toasts>
  </section>
</template>

<script>
import { mapActions } from 'vuex';
import cloneObject from '../../../../support/helper/cloneObject';

import List from '../../../../components/list/List.vue';
import campus from '../../../../support/model/Campus';
import Toasts from '../../../../components/toasts/Toasts.vue';
import Address from '../../../../domains/services/Address';

const address = new Address();

export default {
  name: 'Campus',

  components: {
    'm-list': List,
    'm-toasts': Toasts,
  },

  computed: {
    isShowToasts() {
      return this.showToasts;
    },
  },

  data() {
    return {
      campus: campus.inputs,
      showToasts: false,
      listCampus: [],
      list: {
        title: ['Nome do Campus', 'Responsável', 'Telefone'],
        data: [],
      },
      message: '',
    };
  },

  validations: {
    campus: campus.validations,
  },

  methods: {
    ...mapActions(['changeWildcardActive', 'changeCampus']),

    searchAddress() {
      if (this.campus.address.cep.length === 9) {
        this.fillAddress('...');
        address
          .search(this.campus.address.cep)
          .then((result) => {
            this.campus.address.address = result.address;
            this.campus.address.district = result.district;
            this.campus.address.city = result.city;
            this.campus.address.state = result.state;
          })
          .catch((error) => {
            this.showToasts = true;
            this.message = error.message;
            this.fillAddress();
          });
      }
    },

    fillAddress(value = null) {
      this.campus.address.address = value;
      this.campus.address.district = value;
      this.campus.address.city = value;
      this.campus.address.state = value;
    },

    addCampus() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.showToasts = true;
        this.message = 'Existem campos pendentes e/ou não preenchidos.';
      } else {
        this.list.data.push({
          campusName: this.campus.campusName,
          responsible: this.campus.responsible,
          telephone: this.campus.telephone,
        });
        this.listCampus.push(cloneObject(this.campus));
        this.clearCampus();
      }
    },

    clearCampus() {
      this.$v.$reset();
      this.campus.campusName = null;
      this.campus.responsible = null;
      this.campus.telephone = null;
      this.campus.address.cep = null;
      this.campus.address.address = null;
      this.campus.address.number = null;
      this.campus.address.complement = null;
      this.campus.address.district = null;
      this.campus.address.city = null;
      this.campus.address.state = null;
    },

    removeItemListCampus(index) {
      this.list.data.splice(index, 1);
      this.listCampus.splice(index, 1);
      this.changeCampus(this.listCampus);
    },

    nextForm() {
      if (this.listCampus.length === 0) {
        this.showToasts = true;
        this.message = 'Não é possível avançar sem adicionar um campus.';
      } else {
        this.changeCampus(this.listCampus);
        this.changeWildcardActive(2);
        this.$router.push({ name: 'course' });
      }
    },

    checkCampusState() {
      const campusState = this.$store.state.college.campus;
      if (campusState.length > 0) {
        campusState.forEach((item) => {
          this.list.data.push({
            campusName: item.campusName,
            responsible: item.responsible,
            telephone: item.telephone,
          });
          this.listCampus.push(cloneObject(item));
        });
      }
    },
  },

  created() {
    this.checkCampusState();
  },
};
</script>

<style lang="postcss" scoped>
 @import "Campus.css";
</style>
