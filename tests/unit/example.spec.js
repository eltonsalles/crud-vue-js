/* eslint no-unused-expressions: ["off", { "allowShortCircuit": false, "allowTernary": false,
 "allowTaggedTemplates": false }] */

import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Login from '../../src/views/login/Login.vue';

describe('Login.vue', () => {
  // it('teste de teste unitário com vue', () => {
  //   const msg = 'new message';
  //   const wrapper = shallowMount(HelloWorld, {
  //     propsData: { msg },
  //   });
  //   expect(wrapper.text()).to.include(msg);
  // });

  it('teste de teste unitário com vue', () => {
    const wrapper = shallowMount(Login, {
      stubs: ['router-link'],
    });

    expect(wrapper.contains('.login')).to.be.true;
  });
});
