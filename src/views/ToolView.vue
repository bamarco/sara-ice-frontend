<template>
  <section class="flex flex-col space-y-5">
    <DH :h="1"> Skin Allergy Risk Assessment — SARA </DH>
    <CardBack>
      <section class="flex w-full items-center space-x-5">
        <div class="flex flex-col">
          <a
            class="text-bravo underline hover:text-alpha"
            href="/static/dass-app-data.template.xlsx"
            download>
            Download DASS Input Template
          </a>
          <a
            class="text-bravo underline hover:text-alpha"
            href="/docs/schemas/dass">
            DASS Input Format Documentation
          </a>
        </div>
        <div
          ref="dropZoneRef"
          class="flex size-full flex-col items-center justify-between space-y-2 border-2 border-dashed border-prose bg-box p-2">
          <p class="text-prose-subdued">drop files here...</p>
          <ul>
            <li v-for="file in files" :key="file.name">
              <!-- TODO: use checksum rather than filename -->
              {{ file.name }}
            </li>
          </ul>
          <button
            class="rounded-full bg-alpha px-4 py-2 text-lg text-alpha-prose">
            <!-- TODO: Use OS file chooser on button press -->
            Import DASS Inputs
          </button>
        </div>
      </section>
    </CardBack>
    <CardBack>
      <section class="flex items-center space-x-5">
        <div class="flex w-36 flex-col">
          <select class="rounded-lg border bg-box p-2 focus:border-alpha">
            <option selected>Geraniol</option>
            <option>more...</option>
          </select>
          <label class="text-prose-subdued">Substance</label>
        </div>
        <div class="flex h-full items-start">
          <button
            class="rounded-full bg-alpha px-4 py-2 text-lg text-alpha-prose">
            Run Analysis
          </button>
        </div>
        <div class="flex">
          <a
            class="text-bravo underline hover:text-alpha"
            href="/docs/schemas/sara">
            SARA Output Format Documentation
          </a>
        </div>
      </section>
    </CardBack>
    <CardBack>
      <SubstanceAnalysis :substance="substance" :h="2" />
    </CardBack>
  </section>
</template>

<script setup>
import { computed, ref } from "vue";
import DH from "@/components/DynamicHeading.vue";
import CardBack from "@/components/CardBack.vue";
import SubstanceAnalysis from "@/components/SubstanceAnalysis.vue";
import report from "@/assets/example-report.json";
import { useDropZone } from "@vueuse/core";

const dropZoneRef = ref();
const files = ref([]);
const substance = computed(() => report["SARA_Geraniol_DPRA_KERAT_HCLAT"]);

function onDrop(droppedFiles) {
  for (const file of droppedFiles) {
    files.value.push(file);
  }
  console.log(files);
}

//const { isOverDropZone } =
useDropZone(dropZoneRef, {
  onDrop,
  //dataTypes: [],
});
</script>
