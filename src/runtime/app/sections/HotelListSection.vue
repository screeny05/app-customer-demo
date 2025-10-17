<script lang="ts">
import { defineSection, definitionToProps } from "#imports";
import { HotelBase } from "../../shared/tokens/Hotel";

export const definition = defineSection({
  component: "HotelListSection",
  studio: {
    label: "Hotel List",
  },
  slots: [
    {
      name: "demoSlot",
      studio: {
        label: "Demo Slot",
      },
    },
  ],
  schema: [
    {
      label: "Data",
      fields: [
        {
          label: "Hotels Source",
          type: "query",
          entityType: "Hotel",
          name: "hotels",
          components: [HotelBase],
        },
      ],
    },
  ],
});
</script>

<script setup lang="ts">
const props = defineProps(definitionToProps(definition));
</script>

<template>
  <div>
    <h1>Hotel Detail</h1>
    <details>
      <summary class="caption-m">Show raw Hotel data</summary>
      <pre>{{ props.hotels }}</pre>
    </details>
    <div v-for="hotel in props.hotels?.entities ?? []" :key="hotel.id">
      <h2 class="heading-l">{{ hotel.components.base.name }}</h2>
      <p>{{ hotel.components.base.description }}</p>
    </div>

    <!-- This slot has been added for demo purposes to show how to use slots in sections -->
    <slot name="demoSlot" />
  </div>
</template>
