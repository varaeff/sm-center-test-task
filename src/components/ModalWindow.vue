<script setup lang="ts">
import { useFormStore } from '@/stores/formStore'

const formStore = useFormStore()

const closeModal = () => {
  formStore.toggleShowData(false)
}
</script>

<template>
  <div class="modal">
    <div class="modal-content">
      <h2>Form data</h2>
      <div class="user-data">
        <p v-for="(value, index) in formStore.formData" :key="index">
          <strong>{{ index }}:</strong> {{ value }}
        </p>
      </div>
      <div class="btns">
        <button class="close-btn" @click="closeModal">Close</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal {
  @include modal;
}

.modal-content {
  background: $form-background-color;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
}

.user-data {
  margin: 1rem 0;
}

.user-data p {
  margin: 5px 0;
}

.btns {
  @include flex-center;
  gap: 10px;
}

.close-btn {
  @include btn;
  background: $cancel-color;
  margin: 0 auto;
}

.close-btn:hover {
  box-shadow: 0 2px 10px #000;
}

.close-btn:active {
  box-shadow: none;
}
</style>
