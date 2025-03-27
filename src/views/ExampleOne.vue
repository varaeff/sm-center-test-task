<script setup lang="ts">
import { ref, reactive } from 'vue'
import FormGenerator from '@/components/FormGenerator.vue'
import type { FormField } from '@/types'

const formFields = ref<FormField[]>([
  { type: 'input', label: 'Имя', name: 'name', placeholder: 'Введите имя', required: true },
  {
    type: 'select',
    label: 'Страна',
    name: 'country',
    options: [
      { value: 'ru', text: 'Россия' },
      { value: 'us', text: 'США' },
    ],
  },
  { type: 'checkbox', label: 'Согласие с условиями', name: 'terms' },
  { type: 'textarea', label: 'Комментарий', name: 'comment', placeholder: 'Введите комментарий' },
])

const formData = reactive<Record<string, string | boolean>>({
  name: '',
  country: '',
  terms: false,
  comment: '',
})
</script>

<template>
  <FormGenerator v-model="formData" :fields="formFields" />
</template>
