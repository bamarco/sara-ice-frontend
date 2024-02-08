<template>
  <section class="flex flex-wrap">
    <DH :h="h" class="w-full">
      {{ substance.label }}
      <span title="SARA ID"> — {{ substance.saraId }}</span>
    </DH>

    <DH :h="h + 1"> CAS Registry Number </DH>
    <p title="CAS RN">{{ substance.casNumber }}</p>

    <DH :h="h + 1">Chemical Names</DH>
    <p>{{ substance.chemicalNames }}</p>

    <div
      class="flex"
      v-for="[k, v] in Object.entries(substance.data)"
      v-bind:key="k"
    >
      <DH :h="h + 1">{{ k }}</DH>
      <p>{{ v }}</p>
    </div>

    <div v-for="[k, v] in Object.entries(substance.samples)" v-bind:key="k">
      <DH :h="h + 1"> {{ k }} </DH>
      <p>{{ v[0] }}, {{ v[1] }}, {{ v[2] }} ...</p>
    </div>
  </section>
</template>

<script setup>
import DH from "@/components/DynamicHeading.vue";
const props = defineProps(["substance", "h"]);
</script>
