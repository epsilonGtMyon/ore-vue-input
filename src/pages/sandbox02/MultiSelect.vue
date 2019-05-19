<template>
  <div ref="componentRoot" class="combo-box01">
    <input type="text" readonly :value="selectedText" @click="showSelection">
    <div class="container" v-if="visible">
      <ul class="items">
        <template v-for="item in items">
          <li :key="item.value" @click="selected(item)">
            <div>
              <input type="checkbox" onclick="return false"/>
              {{item.text}}</div>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>

//TODO 値選択時の実装、それをUIへ反映
export default {
  name: "MultiSelect",
  props: {
    value: {
      required: true,
      type: Array
    },
    items: {
      required: true,
      type: Array
    }
  },
  data() {
    return {
      visible: false
    };
  },
  beforeDestroy() {
    this.hide();
  },
  methods: {
    showSelection() {
      if (!this.visible) {
        this.visible = true;
        document.addEventListener("click", this.handleClick, true);
      }
    },
    hide() {
      if (this.visible) {
        this.visible = false;
        document.removeEventListener("click", this.handleClick, true);
      }
    },
    selected(item) {
      console.log(`selected:${item.value}, ${item.text}`)
      //TODO 
    },

    handleClick(ev) {
      if (this.isOutSide(ev.target)) {
        //対象外の領域をクリックされたら閉じる
        this.hide();
      }
    },
    isOutSide(eventTarget) {
      for (let t = eventTarget; t; t = t.parentNode) {
        if (t === this.$refs.componentRoot) {
          return false;
        }
      }

      return true;
    }
  },
  computed: {
    selectedText() {
      return 1;
    }
  }
};
</script>
<style lang="scss" scoped>
.combo-box01 {
  position: relative;
  div.container {
    position: absolute;
    top: 1.5rem;
    left: 0;

    max-height: 15rem;
    max-width: 100rem;
    overflow-x: auto;
    border-style: solid;
    border-width: 1px;
    border-color: gray;

    ul.items {
      margin: 0;
      padding-left: 0;
      background-color: white;
      li {
        cursor:pointer;
        padding: 0.25rem 1rem;
        list-style-type: none;
      }
      li:hover {
        background-color: rgba(0, 0, 0, 0.05);
      }
    }
  }
}
</style>
