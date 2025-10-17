<script lang="ts">
import { defineBlock, definitionToProps } from "#imports";

export const definition = defineBlock({
  component: "CustomTextBlock",
  studio: {
    label: "Custom Text Block",
  },
  slots: [],
  schema: [
    {
      // Missing "label" adds fields directly below the sidebar-header in the studio
      fields: [
        {
          label: "Text",
          type: "richtext",
          name: "content",
        },
      ],
    },
    {
      label: "Fields Demo",
      fields: [
        {
          label: "Text",
          type: "text",
          name: "text",
        },
        {
          label: "Textarea",
          type: "textarea",
          name: "textarea",
        },
        {
          label: "Number",
          type: "number",
          name: "number",
        },
        {
          label: "Select",
          type: "select",
          name: "select",
          options: [
            {
              label: "Option 1",
              value: "option1",
            },
            {
              label: "Option 2",
              value: "option2",
            },
          ],
        },
        {
          label: "Toggle Button",
          type: "toggle_button",
          name: "toggleButton",
          options: [
            {
              label: "Option 1",
              value: "option1",
              icon: "boxSolid",
            },
            {
              label: "Option 2",
              value: "option2",
              icon: "boxDashed",
            },
          ],
        },
        {
          label: "Icon",
          type: "icon",
          name: "icon",
        },
        {
          label: "Color",
          type: "color",
          name: "color",
        },
        {
          label: "Media",
          type: "media",
          name: "media",
        },
        {
          label: "Checkbox",
          type: "checkbox",
          name: "checkbox",
        },
        {
          label: "Radio",
          type: "radio",
          name: "radio",
          options: [
            {
              label: "Option 1",
              value: "option1",
            },
            {
              label: "Option 2",
              value: "option2",
            },
          ],
        },
        {
          label: "Array",
          type: "array",
          name: "array",
          schema: [
            {
              fields: [
                {
                  label: "Text",
                  type: "text",
                  name: "text",
                },
              ],
            },
          ],
        },
        {
          label: "Object",
          type: "object",
          name: "object",
          schema: [
            {
              label: "Text",
              fields: [
                {
                  label: "Text",
                  type: "text",
                  name: "text",
                },
              ],
            },
          ],
        },
        {
          type: "content_alignment",
          name: "contentAlignment",
          label: "Content Alignment",
        },
        {
          type: "info",
          name: "info",
          description: "This is an info field",
        },
        {
          type: "link",
          name: "link",
          label: "Link",
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
    <h1>Custom Text Block</h1>
    <div v-html="props.content" />
    <details>
      <summary class="caption-m">Show "Custom Text Block" data</summary>
      <pre>{{ props }}</pre>
    </details>
  </div>
</template>
