<template>
  <ul>
    <li v-for="page in pages" :key="page.path">
      <router-link :to="page.path">{{page.text}}</router-link>
    </li>
  </ul>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'top',
  components: {
  },
  data(){
    return {
      pages:[
        {path:'/sandbox01', text:'Sandbox01'}
      ]
    }
  }
}
</script>
