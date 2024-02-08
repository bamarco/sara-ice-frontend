<template>
  <section class="flex flex-col space-y-5">
    <DH :h="1"> Glossary </DH>
    <CardBack
      class="flex flex-col"
      v-for="[word, info] in Object.entries(glossary)"
      v-bind:key="word"
    >
      <DH :h="2">{{ word }}</DH>
      <p>{{ info.definition }}</p>
      <ul v-if="info.urls">
        <li v-for="url in info.urls" v-bind:key="url">
          <a :href="url">{{ url }}</a>
        </li>
      </ul>
    </CardBack>
  </section>
</template>

<script setup>
import DH from "@/components/DynamicHeading.vue";
import CardBack from "@/components/CardBack.vue";
import glossary from "@/assets/glossary.json";
</script>

<style></style>
