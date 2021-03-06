/* eslint-disable */
import Vue from 'vue';
Vue.use(require('vue-shortkey'))
import { shallowMount } from '@vue/test-utils';
import FindFilter from '@/components/application/Find/findFilter';
import store from '@/store'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

describe('FindFilter.vue', () => {

    let component;
    beforeEach(() => {
        component = shallowMount(FindFilter, {store: store});
    });

   it("renders a FindFilter component", () => {
     expect(component.element).toMatchSnapshot();
   })

  // Add other tests specific to this component and not its sub-components
});
