<template>
  <div>
    クリックしたらなんか出る
    <Comp01/>

    <hr>
    <div>
      <PseudoTooltip>
        ここにマウスをあててみる
        <div
          slot="tooltip-content"
          style="width:200px;height:200px;background-color:rgb(150,230,150)"
        >お名前は
          <input type="text" v-model="yourName"/>
        </div>
      </PseudoTooltip>
    </div>
    入力した名前：<input type="text" :value="yourName" readonly>
    
    <hr>
    おれおれからーぴっかー（車輪の再発明みたいなやつ）
    <OreColorPicker v-model="yourColor"/>
  </div>
</template>

<script>
import Comp01 from "./Comp01";
import PseudoTooltip from "./PseudoTooltip";
import OreColorPicker from "./OreColorPicker"

export default {
  name: "sandbox01",
  data(){
    return {
      yourName:"",
      yourColor:"",
    }
  },
  components: {
    Comp01,
    OreColorPicker,
    PseudoTooltip,
  }
};
</script>

<style lang="scss" scoped>
</style>
