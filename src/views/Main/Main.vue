<template>
    <div class="grid gap-2">
      <div>
        <h1 class="text-[28px] font-[700]">Statistika</h1>
        <div class=" flex gap-6 justify-center my-[25px]">
            <fieldset v-for="el in cards" key="el.id" class="shadow-xl shadow-slate-400 border-gray-500 w-1/3 rounded-xl p-5">
              <legend><i :class="el.icon" class="text-[32px] 2xl:text-[42px] bg-gray-300 p-3 text-white rounded-xl" :style="{ backgroundColor: el.color }"></i></legend>
              <h3 class=" text-[24px] 2xl:text-[28px] font-[700] text-right h-[50px] px-[20px] text-[#464ECB]">{{ el.title }}</h3>
              <p class="text-[32px] font-[700] text-gray-500 text-right h-[50px] my-[20px] mr-[30px]">{{ el.count }}</p>
              <div class="border mx-5 rounded-md">
                <div class="bg-[#3F80EA] h-[20px] rounded-md flex justify-center items-center text-white font-[500]" :style="{width: el.percentage + '%'}">{{ el.percentage }}%</div>
              </div>  
              <p class="my-[15px] px-5 text-gray-500 font-[600] text-[14px] 2xl:text-[16px]">{{ el.title }}({{ el.percentage }}%)</p>
            </fieldset>
        </div>
      </div>
      <div class="h-[40vh] 2xl:h-[90vh] border">
       
      </div>
    </div>
</template>

<script setup>
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
        title: "Fanlar soni",
        count: 16,
        icon: "fa fa-book",
        percentage: "100",
        color: "#98D4B0"
    }
];
const news = [
    {
        title: "Maktab ichki tartib nizomi",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam harum fugit similique debitis possimus, ut sunt cum consectetur reiciendis recusandae impedit dicta, iusto aperiam. Praesentium labore quisquam quod quaerat, amet, dolorum quam veniam aliquid odio necessitatibus repudiandae laboriosam, excepturi ad.",
    },
    {
        title: "Maktab davomatini yaxshilash bo'yicha nizom",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam harum fugit similique debitis possimus, ut sunt cum consectetur reiciendis recusandae impedit dicta, iusto aperiam. Praesentium labore quisquam quod quaerat, amet, dolorum quam veniam aliquid odio necessitatibus repudiandae laboriosam, excepturi ad.",
    },
    {
        title: "Maktab ichki nizomi",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam harum fugit similique debitis possimus, ut sunt cum consectetur reiciendis recusandae impedit dicta, iusto aperiam. Praesentium labore quisquam quod quaerat, amet, dolorum quam veniam aliquid odio necessitatibus repudiandae laboriosam, excepturi ad.",
    },
];

</script>

<style lang="scss" scoped>
  
</style>
