<template>
  <section class="flex flex-wrap space-x-4">
    <DH :h="h"> {{ substance.name }} </DH>

    <section class="flex flex-col">
      <DH :h="h + 1">Assay Inputs</DH>
      <div
        v-for="assay in substance.assays"
        class="flex w-36 flex-col space-x-1 bg-card"
        v-bind:key="assay">
        <span class="rounded-lg border bg-box p-2">
          {{ assay }}
        </span>
        <label class="text-prose-subdued">Assay Input</label>
      </div>
    </section>

    <section class="flex flex-col">
      <DH :h="h + 1">Expected</DH>
      <div class="flex w-36 flex-col space-x-1 bg-card">
        <div class="flex items-end space-x-2">
          <span class="rounded-lg border bg-box p-2">{{
            substance["Expected ED01"]
          }}</span>
          <span class="font-semibold">µg cm<sup>2</sup></span>
        </div>
        <label class="flex text-prose-subdued">Expected ED01</label>
      </div>
    </section>

    <section class="flex flex-col">
      <DH :h="h + 1">GHS Probabilities</DH>
      <div class="flex w-36 flex-col space-x-1 bg-card">
        <span class="rounded-lg border bg-box p-2">{{
          substance["Prob (GHS 1A)"]
        }}</span>
        <label class="text-prose-subdued">Prob (GHS 1A)</label>
      </div>
      <div class="flex w-36 flex-col space-x-1 bg-card">
        <span class="rounded-lg border bg-box p-2">{{
          substance["Prob (GHS 1B)"]
        }}</span>
        <label class="text-prose-subdued">Prob (GHS 1B)</label>
      </div>
      <div class="flex w-36 flex-col space-x-1 bg-card">
        <span class="rounded-lg border bg-box p-2">{{
          substance["Prob (NC)"]
        }}</span>
        <label class="text-prose-subdued">Prob (NC)</label>
      </div>
    </section>

    <section class="flex flex-col">
      <DH :h="h + 1">GHS Classifications</DH>
      <div class="flex w-36 flex-col space-x-1 bg-card">
        <span class="rounded-lg border bg-box p-2">{{ substance.ghsBin }}</span>
        <label class="text-prose-subdued">GHS <sub>BIN</sub></label>
      </div>
      <div class="flex w-36 flex-col space-x-1 bg-card">
        <span class="rounded-lg border bg-box p-2">{{ substance.ghsSub }}</span>
        <label class="text-prose-subdued">GHS <sub>SUB</sub></label>
      </div>
      <div class="flex w-36 flex-col space-x-1 bg-card">
        <span class="rounded-lg border bg-box p-2">{{
          substance.ghsBorder
        }}</span>
        <label class="text-prose-subdued">GHS <sub>BORDER</sub></label>
      </div>
    </section>
  </section>
</template>

<script setup>
import DH from "@/components/DynamicHeading.vue";
defineProps(["substance", "h"]);
</script>

<style></style>
