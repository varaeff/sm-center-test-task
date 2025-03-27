<script setup lang="ts">
import { defineProps, computed, toRefs } from 'vue'
import { useFormStore } from '@/stores/formStore'
import type { FormField } from '@/types'

interface Props {
  fields: FormField[]
  modelValue: Record<string, string | boolean>
}

const props = defineProps<Props>()
const formStore = useFormStore()

const formData = computed(() => toRefs(props.modelValue))

const handleSubmit = () => {
  formStore.saveForm(props.modelValue)
  resetForm()
  formStore.toggleShowData(true)
}

const handleCancel = () => {
  resetForm()
}

const resetForm = () => {
  Object.keys(formData.value).forEach((key) => {
    const field = formData.value[key]
    field.value = typeof field.value === 'boolean' ? false : ''
  })
}
</script>

<template>
  <div class="generator">
    <form class="form-generator" @submit.prevent="handleSubmit">
      <div v-for="field in fields" :key="field.name" class="form-group">
        <label :for="field.name">{{ field.label }}</label>

        <slot :name="field.name" v-bind="{ field, value: formData[field.name] }">
          <input
            v-if="field.type === 'input'"
            v-model="formData[field.name].value"
            :id="field.name"
            :placeholder="field.placeholder"
            :required="field.required"
            class="form-input"
            type="text"
          />

          <select
            v-else-if="field.type === 'select'"
            v-model="formData[field.name].value"
            :id="field.name"
            class="form-select"
          >
            <option v-for="option in field.options" :key="option.value" :value="option.value">
              {{ option.text }}
            </option>
          </select>

          <textarea
            v-else-if="field.type === 'textarea'"
            v-model="formData[field.name].value as string"
            :id="field.name"
            :placeholder="field.placeholder"
            class="form-textarea"
          ></textarea>

          <input
            v-else-if="field.type === 'checkbox'"
            type="checkbox"
            v-model="formData[field.name].value"
            :id="field.name"
            class="form-checkbox"
          />
        </slot>
      </div>

      <div class="form-actions">
        <button type="submit" class="btn btn-save">Сохранить</button>
        <button type="button" @click="handleCancel" class="btn btn-cancel">Отмена</button>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.generator {
  @include flex-center;
}

.form-generator {
  @include flex-column;
  width: 400px;
  gap: 16px;
  padding: 20px;
  background: $form-background-color;
  border-radius: 8px;
  box-shadow: 0 2px 10px $main-color;
}

.form-group {
  @include flex-column;
  gap: 5px;
}

.form-input,
.form-textarea,
.form-select {
  padding: 8px;
  border: 1px solid $border-color;
  border-radius: 4px;
}

.form-textarea {
  resize: vertical;
  height: 2rem;
  min-height: 2rem;
  max-height: 10rem;
}

.form-checkbox {
  width: 20px;
  height: 20px;
}

.form-actions {
  @include flex-center;
  gap: 10px;
}

.btn {
  @include btn;
}

.btn:hover {
  box-shadow: 0 2px 10px #000;
}

.btn:active {
  box-shadow: none;
}

.btn-save {
  background: $submit-color;
}

.btn-cancel {
  background: $cancel-color;
}
</style>
