<template>
  <section class="flex flex-col space-y-5">
    <DH :h="1">About ICE</DH>
    <CardBack>
      <p>
        ICE provides high-quality curated data and appropriate tools to support
        development and evaluation of new, revised, and alternative methods.
      </p>
    </CardBack>
    <CardBack>
      <section>
        <DH :h="2">Clarification Needed</DH>
        <ul class="list-disc pl-8">
          <li>
            What information needs to be added about ICE in general (<a
              class="text-ice-blue"
              href="https://ice.ntp.niehs.nih.gov/About">The full ICE about page</a>)?
          </li>
          <li>
            What information needs to be added about SARA-ICE in particular?
          </li>
          <li>
            Are there any publications or whitepapers that need to be included?
          </li>
          <li>
            What information needs to be added concerning local deployment (e.g.
            How is the model different than the online version if at all)?
          </li>
          <li>
            What information needs to be added about private vs pulic data (e.g.
            What data is provided with SARA-ICE local deployment, Is the private
            data processed with SARA-ICE looked at differently than the provided
            data from a regulatory or scientific perspective)?
          </li>
          <li>
            Does anything need to be added, removed, or clarified in the
            <RouterLink class="text-ice-blue" to="/glossary">Glossary</RouterLink>?
          </li>
          <li>
            Any copyrights, licenses, or other legal notices that need to be
            included?
          </li>
        </ul>
      </section>
    </CardBack>
    <CardBack>
      <section>
        <DH :h="2">Tool</DH>
        <p>
          The ICE
          <RouterLink class="text-ice-blue" to="/">Skin Allergy Risk Assessment (SARA)</RouterLink>
          tool.
        </p>
      </section>
    </CardBack>
  </section>
</template>

<script setup>
import { RouterLink } from "vue-router";
import DH from "@/components/DynamicHeading.vue";
import CardBack from "@/components/CardBack.vue";
</script>

<style></style>
