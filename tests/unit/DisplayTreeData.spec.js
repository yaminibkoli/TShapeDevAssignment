import {  mount } from '@vue/test-utils'
import DisplayTreeData from '@/components/DisplayTreeData.vue'

describe('DisplayTreeData.vue',  () => {
  const wrapper = mount(DisplayTreeData)
  it('It should load the component', () => {
    expect(wrapper.exists()).toBeTruthy(); 
    expect(wrapper.vm).toBeDefined(); 
  });
   it('tree data is not empty', () => {
      expect(wrapper.vm.convertedTreeData.length).toBeGreaterThan(0)
  });
  it('tree node click should open close dialog ', () => {
    expect(wrapper.vm.isNodeClose).toBe(false);
    wrapper.find('blocks-tree').trigger('node-click');
    expect(wrapper.vm.isNodeClose).toBe(true);
  });
  it('dialog open/close', () => {
    expect(wrapper.vm.isNodeClose).toBe(true);   
    wrapper.find('button').trigger('click');
    expect(wrapper.vm.isNodeClose).toBe(false);
  });
  

})
