<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import FormGenerator from '@/components/FormGenerator.vue'
import type { FormField } from '@/types'

const formFields = ref<FormField[]>([
  { type: 'input', label: 'Имя', name: 'firstName', placeholder: 'Введите имя', required: true },
  {
    type: 'input',
    label: 'Фамилия',
    name: 'lastName',
    placeholder: 'Введите фамилию',
    required: true,
  },
  { type: 'input', label: 'Email', name: 'email', placeholder: 'Введите email', required: true },
  { type: 'input', label: 'Телефон', name: 'phone', placeholder: 'Введите номер телефона' },
  {
    type: 'select',
    label: 'Страна',
    name: 'country',
    options: [
      { value: 'ru', text: 'Россия' },
      { value: 'us', text: 'США' },
      { value: 'de', text: 'Германия' },
      { value: 'fr', text: 'Франция' },
    ],
    required: true,
  },
  { type: 'checkbox', label: 'Согласие с условиями', name: 'terms' },
  { type: 'checkbox', label: 'Подписка на рассылку', name: 'subscribe' },
  {
    type: 'textarea',
    label: 'Комментарий',
    name: 'comment',
    placeholder: 'Введите ваш комментарий',
  },
  {
    type: 'textarea',
    label: 'Дополнительные пожелания',
    name: 'notes',
    placeholder: 'Введите пожелания',
  },
])

const formData = reactive<Record<string, string | boolean>>({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  country: '',
  terms: false,
  subscribe: false,
  comment: '',
  notes: '',
})

const emailError = computed(() => {
  return typeof formData.email === 'string' &&
    formData.email !== '' &&
    !formData.email.includes('@')
    ? 'Email должен содержать символ @'
    : ''
})
</script>

<template>
  <FormGenerator v-model="formData" :fields="formFields">
    <template #email="{ field }">
      <div class="email-wrapper">
        <input
          v-model="formData.email"
          :id="field.name"
          :placeholder="field.placeholder"
          :required="field.required"
          class="form-input"
          type="email"
        />
        <span v-if="emailError" class="error-message">{{ emailError }}</span>
      </div>
    </template>
  </FormGenerator>
</template>

<style scoped lang="scss">
.email-wrapper {
  display: flex;
  flex-direction: column;
}

.form-input {
  padding: 8px;
  border: 1px solid $border-color;
  border-radius: 4px;
}

.error-message {
  color: $cancel-color;
  font-size: 12px;
  margin-top: 4px;
}
</style>
