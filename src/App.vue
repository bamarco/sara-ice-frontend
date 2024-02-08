<template>
  <!-- TODO: dark:look-dark -->
  <div
    class="look-light feel-paper place-web flex size-full min-h-screen flex-col bg-backdrop bg-cover text-prose">
    <header
      class="flex size-full min-h-fit min-w-fit items-center justify-between px-2 backdrop-blur-sm">
      <img class="h-10 sm:h-14" src="/static/ice-logo-small.png" />
      <nav class="flex min-h-fit min-w-fit space-x-1 bg-canvas sm:space-x-2">
        <RouterLink
          v-slot="{ isActive }"
          v-for="[label, route] in routes"
          v-bind:key="label"
          :to="route"
          class="flex">
          <span
            v-if="isActive"
            class="flex rounded bg-delta/80 p-2 text-delta-prose hover:bg-clip-padding hover:backdrop-blur-sm sm:px-4 sm:py-3 sm:text-lg">
            {{ label }}
          </span>
          <span
            v-else
            class="flex rounded bg-card/60 p-2 text-bravo hover:bg-charlie hover:bg-clip-padding hover:font-bold hover:text-alpha hover:backdrop-blur-sm sm:px-4 sm:py-3 sm:text-lg">
            {{ label }}
          </span>
        </RouterLink>
      </nav>
    </header>
    <div class="flex min-h-screen justify-center bg-canvas backdrop-blur-sm">
      <main class="flex w-192 flex-col">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
const routes = [
  ["Tool", "/"],
  ["Substances", "/substances"],
  ["Glossary", "/glossary"],
  ["About", "/about"],
];
</script>
