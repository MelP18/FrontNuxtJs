<template>
    <div class="report__table__component w-full h-full flex flex-col gap-14">
        <div class="flex justify-between items-center">
            <div class="flex gap-4 items-center">
                <i>flèche</i>
                <h2 class="text-xl font-bold">Mes documents</h2>
            </div>
            <div>
                <NuxtLink to="" class="flex gap-2 items-center py-2 px-4  rounded-lg bg-[#00B2B8]">
                    <i class=" text-white font-semibold">+</i>
                    <h2 class=" text-white font-semibold">Ajouter un document</h2>
                </NuxtLink>
            </div>
        </div>
        <div class="report__table__content  w-full h-full py-5">
            <table class="w-full h-full">
                <thead class="text-left ">
                    <th class="py-2.5 px-5 text-left w-1/6 font-normal">Type</th>
                    <th class="py-2.5 px-5 text-left w-1/6 font-normal">Nom</th>
                    <th class="py-2.5  px-5 text-left font-normal">Date</th>
                    <th class="py-2.5  px-5 text-left w-1/6 font-normal">Action</th>
                </thead>
                <tbody v-for="element in document">
                    <tr class="border-y border-gray-300">
                        <td class="py-1.5  px-5">
                            <i :class=element.type></i>
                        </td>
                        <td class="line-clamp-1 py-1.5 px-5">
                            <p>{{ element.name }}</p>
                        </td>
                        <td class="py-1.5  px-5 w-1/5">{{ element.date }}</td>

                        <td class="py-1.5  px-5 w-1/5 font-bold">
                            <button class="font-bold" 
                                    @click="openAction(element)">{{ element.action }}
                            </button>
                            <div v-if="activeAction && activeAction.id == element.id" @click="closeAction" 
                            class="absolute overlay top-0 right-0  flex flex-col gap-2 bg-gray-100 p-5 shadow-[0px_1px_5px] shadow-gray-400 rounded-xl ">
                                <NuxtLink to="" class="text-gray-500">Ouvrir</NuxtLink>
                                <NuxtLink to="" class="text-gray-500">Télécharger</NuxtLink>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { document } from '../../../database/document'
import type {Document} from '../../../Types/document'

const activeAction = ref(null)
const openAction = (element:Document | any) =>{
  activeAction.value = element
}
const closeAction = (event)  =>{
    if (activeAction.value) {
        if (!event.target.closest('.overlay')) {
          activeAction.value = null
    }
}
}
</script>

  

