<template>
  <a
    class="rounded border border-prose bg-bravo p-2 text-bravo-prose hover:text-prose"
    :href="to"
    :download="download">
    <slot />
  </a>
</template>

<script setup>
defineProps(["to", "download"]);
</script>
