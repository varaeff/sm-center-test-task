<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { useFormStore } from './stores/formStore'
import ModalWindow from './components/ModalWindow.vue'

const route = useRoute()
const activeLink = ref(route.path)
const formStore = useFormStore()

watchEffect(() => {
  activeLink.value = route.path
})
</script>

<template>
  <header>
    <h1 class="title">Тестовое задание для НИЦ "Системы управления"</h1>
    <div class="nav">
      <nav>
        <RouterLink to="/" :class="{ active: activeLink === '/' }">example1</RouterLink>
        <RouterLink to="/example2" :class="{ active: activeLink === '/example2' }"
          >example2</RouterLink
        >
        <RouterLink to="/example3" :class="{ active: activeLink === '/example3' }"
          >example3</RouterLink
        >
      </nav>
    </div>
  </header>

  <RouterView />
  <ModalWindow v-if="formStore.showData" />
</template>

<style scoped lang="scss">
.title {
  @include flex-center;
  margin-bottom: 0;
}

.nav {
  @include flex-center;
  line-height: 1;
  display: flex;
  flex-direction: row;
  padding: 1rem;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid;
}

nav a:first-of-type {
  border: 0;
}

nav a:visited {
  color: $visited-color;
}

nav a:hover {
  color: $active-color;
}

nav a.active {
  color: $active-color;
  font-weight: bold;
}
</style>
