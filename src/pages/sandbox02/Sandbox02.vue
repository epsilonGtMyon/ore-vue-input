<template>
  <div>
    <MultiSelect v-model="selected" :items="items"/>

    <div>aaaa</div>
  </div>
</template>

<script>
import MultiSelect from "./MultiSelect.vue";

export default {
  name: "Sandbox02",
  components: {
    MultiSelect
  },
  data() {
    return {
      items: [],
      selected: []
    };
  },
  mounted() {
    this.items = [];

    for (let i = 1; i < 30; i++) {
      this.items.push({ value: i, text: `選択肢[${i}]です。` });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
