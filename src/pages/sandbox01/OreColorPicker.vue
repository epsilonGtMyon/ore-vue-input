<template>
  <div class="ore-color-picker" style="position:relative">
    <input ref="input" type="text" @click="show" :value="value" readonly>
    <span :style="decidedColorStyle">■</span>
    <template v-if="visible">
      <div ref="area" class="area">
        <div style="width:100%;height:40px;" :style="previewStyle"></div>
        <table>
          <tr>
            <td class="color-name">R({{r}})</td>
            <td>
              <input v-model.number="r" type="range" min="0" max="255">
            </td>
          </tr>
          <tr>
            <td>G({{g}})</td>
            <td>
              <input v-model.number="g" type="range" min="0" max="255">
            </td>
          </tr>
          <tr>
            <td>B({{b}})</td>
            <td>
              <input v-model.number="b" type="range" min="0" max="255">
            </td>
          </tr>
          <tr>
            <td>color</td>
            <td>
              {{hexValue}}
            </td>
          </tr>
        </table>
        <div>
          <button @click="decide">決定</button>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
//オレオレカラーピッカー

export default {
  name: "OreColorPicker",
  props: {
    value: {
      type: String
    }
  },
  data() {
    return {
      visible: false,
      r: 0,
      g: 0,
      b: 0,
      decided:"#000000",
    };
  },
  beforeDestroy() {
    this.hide();
  },
  methods: {
    decide() {
      this.decided = this.hexValue
      this.$emit("input", this.decided);

      this.hide();
    },

    //--------------------------
    show() {
      if (!this.visible) {
        this.visible = true;
        document.addEventListener("click", this.handleClick, false);
      }
    },
    hide() {
      if (this.visible) {
        this.visible = false;
        document.removeEventListener("click", this.handleClick, false);

        this.r = parseInt(this.decided.substr(1, 2), 16)
        this.g = parseInt(this.decided.substr(3, 2), 16)
        this.b = parseInt(this.decided.substr(5, 2), 16)
      }
    },
    handleClick(ev) {
      if (this.isOutSide(ev.target)) {
        //対象外の領域をクリックされたら閉じる
        this.hide();
      }
    },
    isOutSide(eventTarget) {
      if (eventTarget === this.$refs.input) {
        return false;
      }

      for (let t = eventTarget; t; t = t.parentNode) {
        if (t === this.$refs.area) {
          return false;
        }
      }

      return true;
    }
  },
  computed: {
    hexValue() {
      //r,g,bから16進数の形式に
      const val = [this.r, this.g, this.b]
        .map(x => x.toString(16))
        .map(x => x.toUpperCase())
        .map(x => `0${x}`.slice(-2))
        .join("");

      return `#${val}`;
    },
    previewStyle() {
      const style = {};
      style["background-color"] = this.hexValue;
      return style;
    },
    decidedColorStyle(){
      const style = {};
      style["color"] = this.decided;
      return style;
    }
  }
};
</script>
<style lang="scss" scoped>
.ore-color-picker {
  position: relative;
  div.area {
    position: absolute;
    width: 250px;
    height: 200px;
    background-color: white;

    z-index: 100;
    border: 1px solid rgb(100, 100, 100);
    border-radius: 5px;

    .color-name {
      width: 80px;
    }
  }
}
</style>
