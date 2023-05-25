<template>
    <div style="overflow:hidden">
    <div class="row">
    <div class="col-sm-6" style="padding-right:0px !important">
        <h1 class="header">Details of Tress Nodes </h1>
            <div v-if="isNodeClose" class="detail-dialog">
               <label  v-if="selectedNode">  {{ selectedNode.label  }} 
                <br>
                 {{  selectedNode.description  }}</label>
                <button @click="NodecloseCliked" class="close-btn">X</button>
            </div>
    </div>
    <div class="col-sm-6" style=" border-left: dashed 2px #007066; padding-left: 0px!important;">
        <h1 class="header">Tree Structure</h1>
            <div >
                <blocks-tree  
                    :data="dataToBindTree" 
                    :horizontal="true"
                    :collapsable="false" 
                    :labelWidth ="74"
                    @node-click = "displaydata">
                </blocks-tree>
            </div>
    </div>
  </div>
</div>
  
</template>
<script>
  import { defineComponent,ref,reactive } from 'vue';
  import { treeData } from '../services/GetAllNodeData';
  export default defineComponent({
  setup() {
   let isNodeClose = ref(false);
   const selectedNode = ref(null);
   let selectedNodeId = "";
   const nodes= {};
   let dataToBindTree = {};
   let convertedTreeData = treeData;
   //To Convert the JSON/Array of Object data to tree-block lib format
   convertedTreeData.forEach((item) =>{
      nodes[item.name] = {label: item.name, description: item.description, children:[]};
    });
    convertedTreeData.forEach(item=>{
      const node = nodes[item.name];
      const parentNode = nodes[item.parent];
      if(parentNode){
        parentNode.children.push(node);
      }else{
        dataToBindTree = reactive(node);
      }
    })
    //To display the Tree Node details on left panel
    const displaydata = (node,state) => {
            selectedNode.value = state;          
            if(node.currentTarget.style.backgroundColor == "rgb(255, 193, 0)" ) {
                node.currentTarget.style.backgroundColor="white"
                isNodeClose.value = false;
            }
            else {
                node.currentTarget.style.backgroundColor="rgb(255, 193, 0)";
                isNodeClose.value = true;
            }
            //Deselect the previous node
            if(selectedNodeId && node.currentTarget.style.backgroundColor !="white" && selectedNodeId !=  node.currentTarget){
                selectedNodeId.style.backgroundColor = "white";   
            }
            selectedNodeId = node.currentTarget;
        }
        //To close the node detail dialog-box
        function NodecloseCliked()  {
            isNodeClose.value = !isNodeClose.value;
            selectedNodeId.style.backgroundColor = 'white';      
      }
  
        return {
            displaydata,
            selectedNode,
            convertedTreeData,
            nodes,
            dataToBindTree,
            isNodeClose,
            NodecloseCliked,
            selectedNodeId,
            
        }
    }
  })
  </script>
  <style scoped>
    .header{
        margin-top: 0px;
        padding: 10px;
        background-color: #ffc100;
        justify-content: center;
        display: flex;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        color: #007066;
     }
    .detail-dialog{
        position: relative;
        font-size: large;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        box-shadow: 0 5px 8px rgba(0.2, 0.2, 0.2, 0.3);
         border: solid 2px #007066;
         margin: 15px;
         border-radius: 16px;
         padding: 30px;
     }
     .close-btn{
        position: absolute;
        top: 10px;
        right: 10px;
     }
  </style>