<script setup lang="ts">
import { ref, reactive } from 'vue'
import FormGenerator from '@/components/FormGenerator.vue'
import type { FormField } from '@/types'

const formFields = ref<FormField[]>([
  {
    type: 'input',
    label: 'Фамилия',
    name: 'lastName',
    placeholder: 'Введите фамилию',
    required: true,
  },
  { type: 'input', label: 'Возраст', name: 'age', placeholder: 'Введите возраст', required: true },
  {
    type: 'select',
    label: 'Город',
    name: 'city',
    options: [
      { value: 'moscow', text: 'Москва' },
      { value: 'spb', text: 'Санкт-Петербург' },
      { value: 'kazan', text: 'Казань' },
    ],
  },
  { type: 'checkbox', label: 'Подписаться на новости', name: 'subscribe' },
  { type: 'textarea', label: 'Комментарий', name: 'comment', placeholder: 'Введите комментарий' },
])

const formData = reactive<Record<string, string | boolean>>({
  lastName: '',
  age: '',
  city: '',
  subscribe: false,
  comment: '',
})
</script>

<template>
  <FormGenerator v-model="formData" :fields="formFields" />
</template>
