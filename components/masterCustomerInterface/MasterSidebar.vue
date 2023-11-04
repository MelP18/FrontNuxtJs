<template>
    <div class="menu__component">
        <div class="menus w-36 bg-lime-200 h-[calc(100vh_-_67px)] flex bg-white border-r">
            <div class="menu__content w-full">
                <div class="menu__list flex flex-col justify-between h-full w-full">
                    <div class="menu__list__top
                    flex flex-col gap-4 h-full">
                        <div class="menu__bottom">
                            <div v-for="element in menuTop" class="menu__list__item
                            flex flex-col justify-center items-center border-r"
                                v-bind:class="element.isActive ? 'bg-[#01A4AE]/[.3]' : 'border-white'"
                                @click="">
                                <NuxtLink :to="element.router"
                                    class="block w-full flex flex-col justify-center items-center gap-2 py-2.5">
                                    <i :class="element.icon"></i>
                                    <h3 class="text-center text-sm">{{ element.title }}</h3>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                    <div class="menu__list__bottom 
                    flex flex-col justify-center items-center gap-5 ">
                        <div v-for="element in menuBottom" class="menu__list__item 
                        flex flex-col justify-center items-center">
                            <NuxtLink :to="element.router" class="block flex flex-col justify-center items-center gap-2">
                                <i :class="element.icon"></i>
                                <h3 class="text-center">{{ element.title }}</h3>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<script lang="ts" setup>
import { ref } from 'vue'

import { menuTop, menuBottom } from '../../database/menu'
/* 

const isActive = (element) => {
  
   element.isActive =!element.isActive;
   console.log('ok');
    
}; */
</script>
