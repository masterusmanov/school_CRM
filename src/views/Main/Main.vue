<template>
    <div class="grid gap-2">
      <div>
        <h1 class="text-[28px] font-[700]">Statistika</h1>
        <div class=" flex gap-6 justify-center my-[25px]">
            <fieldset v-for="el in cards" key="el.id" class="shadow-xl shadow-slate-400 border-gray-500 w-1/3 rounded-xl p-5">
              <legend><i :class="el.icon" class="text-[24px] 2xl:text-[42px] bg-gray-300 p-3 text-white rounded-xl" :style="{ backgroundColor: el.color }"></i></legend>
              <h3 class=" text-[20px] 2xl:text-[28px] font-[700] text-right h-[40px] 2xl:h-[50px] px-[20px] text-[#464ECB]">{{ el.title }}</h3>
              <p class="text-[28px] 2xl:text-[32px] font-[700] text-gray-500 text-right h-[50px] my-[20px] mr-[30px]">{{ el.count }}</p>
              <div class="border mx-5 rounded-md">
                <div class="bg-[#3F80EA] h-[15px] 2xl:h-[20px] rounded-md flex justify-center items-center text-white font-[500]" :style="{width: el.percentage + '%'}">{{ el.percentage }}%</div>
              </div>  
              <p class="2xl:my-[15px] px-5 text-gray-500 font-[600] text-[14px] 2xl:text-[16px]">{{ el.title }}({{ el.percentage }}%)</p>
            </fieldset>
        </div>
      </div>
      <div class="h-[46vh] 2xl:h-[50vh]  border">
      <h3 class="text-[28px] font-[700] my-[35px]">Yangiliklar</h3>
        <!-- <div class="w-full 2xl:grid grid-cols-3 gap-6 hidden">
          <div v-for="el in news" key="el.id" class="w-full shadow-xl shadow-slate-400 rounded-xl border-4 p-5">
            <h3 class="text-[24px] font-[700] h-[50px]">{{ el.title }}</h3>
            <p class="my-[15px] text-justify">{{ el.description.slice(0, 400) }}</p>
            <router-link to="#" class="text-blue-600 font-[700] float-right my-[15px]">Batafsil</router-link>
          </div>
        </div>
        <div class="w-full grid grid-cols-3 gap-6 2xl:hidden">
          <div v-for="el in news" key="el.id" class="w-full shadow-xl shadow-slate-400 border-4 p-5">
            <h3 class="text-[20px] h-[50px] font-[700]">{{ el.title }}</h3>
            <p class="text-justify">{{ el.description.slice(0, 100) }}</p>
            <router-link to="#" class="text-blue-600 font-[700] float-right mt-[15px]">Batafsil</router-link>
          </div>
        </div> -->
        <SliderNews/>
      </div>
    </div>
</template>

<script setup>
import SliderNews from '../../components/SliderNews/SliderNews.vue';

const cards = [
    {
        title: "Jami o'quvchilar soni",
        count: 500,
        icon: "fas fa-user-graduate",
        percentage: "80",
        color: "#3F80EA"
    },
    {
        title: "Jami o'qituvchi va xodimlar soni",
        count: 50,
        icon: "fas fa-user-cog",
        percentage: "70",
        color: "#6397AF"
    },
    {
        title: "Kunlik o'rtacha davomati",
        count: 16,
        icon: "fa fa-check-square-o",
        percentage: "90",
        color: "#98D4B0"
    }
];


</script>

<style lang="scss" scoped>
  
</style>
