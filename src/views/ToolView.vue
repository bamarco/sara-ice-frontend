<template>
  <section class="flex flex-col space-y-5">
    <DH :h="1"> Skin Allergy Risk Assessment — SARA </DH>
    <CardBack>
      <section class="flex w-full items-center space-x-5">
        <div
          ref="dropZoneRef"
          class="flex size-full flex-col items-center justify-between space-y-2 border-2 border-dashed border-prose bg-box p-2">
          <p class="text-prose-subdued">drop .xlsx files here...</p>
          <ul>
            <li v-for="file in files" :key="file.name">
              <!-- TODO: use checksum rather than filename -->
              {{ file.name }}
            </li>
          </ul>
          <FunctionButton :on="open">
            <!-- TODO: Use OS file chooser on button press -->
            Import Inputs
          </FunctionButton>
        </div>
        <div class="flex min-w-fit flex-col items-center space-y-4">
          <LinkButton to="/static/dass-app-data.template.xlsx" download>
            Input Template
          </LinkButton>
          <LinkButton to="/docs/schemas/dass"> Input Description </LinkButton>
        </div>
      </section>
    </CardBack>
    <CardBack>
      <section class="flex items-center space-x-4">
        <div class="flex w-36 flex-col">
          <select class="rounded-lg border bg-box p-2 focus:border-alpha">
            <option selected>Geraniol</option>
            <option>more...</option>
          </select>
          <label class="text-prose-subdued">Substance</label>
        </div>
        <div class="flex space-x-4">
          <FunctionButton :on="simulate">
            <span v-if="!analysis"> "Run" Analysis </span>
            <span v-else> Clear Analysis </span>
          </FunctionButton>
          <LinkButton to="/docs/schemas/sara"> Output Description </LinkButton>
        </div>
      </section>
    </CardBack>
    <CardBack>
      <SubstanceAnalysis v-if="analysis" :substance="substance" :h="2" />
    </CardBack>
  </section>
</template>

<script setup>
import { computed, ref } from "vue";
import DH from "@/components/DynamicHeading.vue";
import FunctionButton from "@/components/FunctionButton.vue";
import LinkButton from "@/components/LinkButton.vue";
import CardBack from "@/components/CardBack.vue";
import SubstanceAnalysis from "@/components/SubstanceAnalysis.vue";
import report from "@/assets/example-report.json";
import { useDropZone, useFileDialog } from "@vueuse/core";

const dropZoneRef = ref();
const files = ref([]);
const substance = computed(() => report["SARA_Geraniol_DPRA_KERAT_HCLAT"]);
const analysis = ref(false);

const { open, onChange } = useFileDialog({
  accept: ".xlsx",
});

function onDrop(droppedFiles) {
  for (const file of droppedFiles) {
    files.value.push(file);
  }
}

function simulate() {
  analysis.value = !analysis.value;
}

onChange((selectedFiles) => onDrop(selectedFiles));

//const { isOverDropZone } =
useDropZone(dropZoneRef, {
  onDrop,
  dataTypes: [".xlsx"],
});
</script>
