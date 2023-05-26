import {  mount } from '@vue/test-utils'
import DisplayTreeData from '@/components/DisplayTreeData.vue'

describe('DisplayTreeData.vue',  () => {
  const wrapper = mount(DisplayTreeData)
  it('It should load the component', () => {
   
    expect(wrapper.exists()).toBeTruthy(); // component exists - test case 1
    expect(wrapper.vm).toBeDefined(); // it  data and functions can be called- test case 1
  });
   it('tree data is not empty', () => {
    // console.log("text###################",wrapper.vm.convertedTreeData);
    expect(wrapper.vm.convertedTreeData.length).toBeGreaterThan(0)
  });
  it('tree node click should open close data ', () => {
    // console.log("text###################",wrapper.vm.convertedTreeData);
    expect(wrapper.vm.isNodeClose).toBe(false);
    wrapper.find('blocks-tree').trigger('node-click');
    expect(wrapper.vm.isNodeClose).toBe(true);
  });
  it('dialog close', () => {
    // console.log("text###################",wrapper.vm.convertedTreeData);
    expect(wrapper.vm.isNodeClose).toBe(true);
    
    wrapper.find('button').trigger('click');
    //wrapper.trigger('nodeCloseClicked');
    //  wrapper.vm.NodecloseCliked();
    expect(wrapper.vm.isNodeClose).toBe(false);
  });
  

})
