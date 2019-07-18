<template>
  <div class="prolist">
    <ul>
      <li v-for="(item, index) of prolist" :key="index">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    prolist: {
      type: Array,
      default: () => []
    }
  }
}
</script>
