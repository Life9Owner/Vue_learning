<template>
  <SlotsBase>
    <div>
      <h3>Slot head</h3>
      <p>Slot content</p>
      <p>Slot content</p>
      <p>Slot tail</p>
    </div>
  </SlotsBase>
  <EmitObj v-on:emiting="Toggle">
    {{ "Slot Message:"+message }}
    <br>
    <!-- useless message -->
  </EmitObj>
  {{ message }}
  <PropsObj v-bind:imgsrc = 'good.url' 
                   v-bind:info = "good.info" :price ="good.price"></PropsObj>

</template>

<script>
import  SlotsBase from "./components/SlotsBase.vue";
import  EmitObj from "./components/Emit.vue";
import PropsObj from './components/Props.vue';
// import fa from '../public/img/图片1.jpg'
export default {
  data:function()
  { 
      return {

        message:"",
        good:{
              url :  require('../public/img/图片1.jpg'),
              info : '魅族手机',
              price : 2000
          }
              
      }
  },
  components: {
    SlotsBase,
    EmitObj,
    PropsObj
  },
  methods: {
    Toggle:function(param)
    {
        this.message=param;
        console.log("toggle_Emit()...");
    }
  },
};
</script>
