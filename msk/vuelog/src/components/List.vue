<template>
    <div>
        <div v-for="item in listItems" :key="item">
            <h4>{{item.title}}</h4>
            <p>{{item.content}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'List',
    props: {
        listItems: Array
    }
}
</script>

<style>

</style>