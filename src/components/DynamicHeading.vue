<template>
  <h1
    class="boder-alpha border-b pb-2 text-xl font-bold text-alpha"
    v-if="h == 1"
  >
    <slot />
  </h1>
  <h2 class="text-lg font-semibold text-bravo" v-else-if="h == 2">
    <slot />
  </h2>
  <h3 class="max-w-fit font-semibold" v-else-if="h == 3">
    <slot />
  </h3>
  <h4 v-else-if="h == 4"><slot /></h4>
  <h5 v-else-if="h == 5"><slot /></h5>
  <h6 v-else><slot /></h6>
</template>

<script setup>
const props = defineProps(["h"]);
</script>

<style></style>
