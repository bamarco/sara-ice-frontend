<template>
  <button
    :onclick="on"
    class="rounded-full bg-alpha px-4 py-2 text-lg text-alpha-prose">
    <slot />
  </button>
</template>

<script setup>
defineProps(["on"]);
</script>
