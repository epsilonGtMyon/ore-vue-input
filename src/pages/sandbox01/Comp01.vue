<template>
  <div class="comp01" style="position:relative">
    <input type="text" @click="show" />
    <div class="area" v-if="visible"></div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      visible:false
    }
  },
  methods:{
    show(){
      this.visible = true;
    }
  }
}
</script>
<style lang="scss" scoped>
.comp01{
  position:relative;
  div.area{
    position:absolute;
    width:150px;
    height:150px;
    background-color:white;
    
    z-index:100;
    border:1px solid red;
  }

}
</style>
