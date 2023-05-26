import {  mount } from '@vue/test-utils'
import App from '../../src/App.vue';
describe('App.vue',  () => {
    const wrapper = mount(
    App,{ 
    global:{
    stubs : { DisplayTreeData : true}}})
  it('It should load the component', () => {
    expect(wrapper.exists()).toBeTruthy(); 
    expect(wrapper.vm).toBeDefined(); 
  });
  it('It should contain the child component', () => {
    expect(wrapper.html()).toBe('<display-tree-data-stub></display-tree-data-stub>')
  });
})
