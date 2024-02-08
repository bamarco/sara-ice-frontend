<template>
  <section class="flex flex-col space-y-5">
    <DH :h="1">Substances</DH>
    <section>
      <CardBack>
        <SubstanceDescription :substance="substance" :h="2" />
      </CardBack>
    </section>
  </section>
</template>

<script setup>
import { computed } from "vue";
import SubstanceDescription from "@/components/SubstanceDescription.vue";
import DH from "@/components/DynamicHeading.vue";
import CardBack from "@/components/CardBack.vue";
import substances from "@/assets/example-substances.json";

const substance = computed(() => substances["SARA_Geraniol_DPRA_KERAT_HCLAT"]);
</script>
