<template>
    <div class="w-full h-screen flex overflow-hidden">

        <div class="flex flex-col justify-center items-center w-2/4 h-full">
            <slot />
        </div>
        <div class="w-2/4 bg-[#EDDBC8] h-full flex justify-center items-center">
            <masterCustomerAuthMasterRight/>
        </div>
    </div>
</template>