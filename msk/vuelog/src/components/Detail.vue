<template>
  <div>
      <h2>{{listItems[id].number}}. {{listItems[id].title}}</h2>
      <p>{{listItems[id].content}}</p>
      <p>{{listItems[id].date}}</p>
  </div>
</template>

<script>
export default {
    name: 'Detail',
    props: {
        listItems: Array
    },
    data() {
        return {
            id: this.$route.params.id
        }
    }
}
</script>

<style>

</style>