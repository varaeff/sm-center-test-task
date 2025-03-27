import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { FormValues } from '@/types'

export const useFormStore = defineStore('form', () => {
  const formData = ref<FormValues>({} as FormValues)
  const showData = ref(false)

  function saveForm(newData: FormValues) {
    formData.value = { ...newData }
    console.log('Form data saved:', formData.value)
  }

  function toggleShowData(value: boolean) {
    showData.value = value
  }

  return { formData, showData, saveForm, toggleShowData }
})
