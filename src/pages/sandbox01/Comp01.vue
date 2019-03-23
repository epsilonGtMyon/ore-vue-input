<template>
  <div class="comp01" style="position:relative">
    <input ref="input" type="text" @click="show">
    <template v-if="visible">
      <div ref="area" class="area">
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    };
  },
  beforeDestroy() {
    this.hide();
  },
  methods: {
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
  }
};
</script>
<style lang="scss" scoped>
.comp01 {
  position: relative;
  div.area {
    position: absolute;
    width: 150px;
    height: 150px;
    background-color: white;

    z-index: 100;
    border: 1px solid red;
  }
}
</style>
