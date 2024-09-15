<script setup>
import Sidebar from '../components/Sidebar/Sidebar.vue';
// import Navbar from '../components/Navbar/Navbar.vue';

</script>

<template>
  <div class="flex gap-5">
    <Sidebar/>
    <main class=" w-full p-5">
      <router-view></router-view>
    </main>
  </div>
</template>
