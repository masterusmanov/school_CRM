<template>
    <div class="w-[200px] h-screen bg-[#3A7AFE]">
        <div class="ml-4 grid justify-between mt-[10px]">
            <ul class="2xl:space-y-1 font-medium mt-[16px] w-[185px]">
                <li v-for="link in navlink" :key="link.id">
                <router-link
                    :to="link.link"
                    class="w-full px-6 py-[11px] 2xl:py-[13px] flex items-center rounded-l-full text-[14px] 2xl:text-[14px] text-white hover:text-black hover:bg-white"
                >
                    <i :class="link.icon" class="text-[16px] 2xl:text-[20px]"></i>
                    <span class="ml-3">{{ link.title }}</span>
                </router-link>
                </li>
            </ul>
        </div>
        <div class="grid my-[15px] 2xl:my-[20px]">
            <button @click="toggleDropdown" class="flex gap-2 items-center ml-[70px]"><i class="fas fa-user-alt bg-white p-3 rounded-full text-[20px] 2xl:text-[24px]"></i><span><i class="fas fa-angle-down text-white"></i></span></button>
            <ul v-if="isOpen" class="meniul my-[20px]">
                <li v-for="option in options" :key="option" @click="selectOption(option)" class="menuli grid">
                    <button class="hover:text-white font-[700] text-[14px] 2xl:text-[16px]">{{ option.title }}</button>
                    <button class="hover:text-red-500 font-[700] text-[14px] 2xl:text-[16px">{{ option.btn }}</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from "vue";
    import { NavLinks } from '../..//constants/NavLinks';
    import { useRouter } from "vue-router";

    const navlink = ref(NavLinks);
    const router = useRouter();
    const isOpen = ref(false)
    
    const options = [
        {
            title: "John Doe",
            btn: "Chiqish"
        }
    ]

    const toggleDropdown = () => {
    isOpen.value = !isOpen.value
    }

    const selectOption = (option) => {
    selected.value = option
    isOpen.value = false
    }
</script>

<style lang="scss" scoped>
  .router-link-exact-active {
  background-color: white;
  color: black;
}


.meniul {
  list-style-type: none;
  padding: 0 30px;
  margin: 0;
}

.menuli {
  cursor: pointer;
  padding: 8px;
  margin: 2px 0;
}

::-webkit-scrollbar{
    width: 10px;
}

::-webkit-scrollbar-track{
    background: #073843;
}

::-webkit-scrollbar-thumb{
    background: #b2bbc0;
}

::-webkit-scrollbar-thumb:hover{
    background: #6d7274;
}


</style>