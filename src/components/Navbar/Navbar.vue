<template>
    <div class="p-3 bg-[#3A7AFE]">
        <div class="h-[70] flex items-center">
            <h1 class="text-center font-[700] text-[16px] rounded-full p-2 border bg-white">Logo <br>Name</h1>
            <div v-for="link in navlink" :key="link.id" class="flex items-center">
                <router-link :to="link.link" class="px-6 py-[13px] grid justify-center items-center rounded-l-full text-[14px] text-white hover:text-[#FFFFFF] hover:bg-[#7EBA34]"
                >
                <i :class="link.icon" class="text-[14px] mx-auto"></i>
                <span class="">{{ link.title }}</span>
                </router-link>                
            </div>
        </div>
        <div class=" flex">
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from "vue";
    import { NavLinks } from '../../constants/NavLinks';
    import { useRouter } from "vue-router";

    const navlink = ref(NavLinks);
    const router = useRouter();
</script>

<style lang="scss" scoped>

</style>