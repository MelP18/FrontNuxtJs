<template>
    <div class="max-w-sm flex flex-col justify-evenly h-screen">
        <div class="w-full">
            <h2 class="text-2xl text-center">BIENVENUE SUR L'ESPACE PERSONNEL ILEER</h2>
        </div>
        <form class="w-full">
            <div class="flex flex-col gap-8">
                <div class="flex flex-col gap-2">
                    <label class="font-bold">Code d'accès</label>
                    <input type="password" placeholder="Taper le code d'accès ici"
                        class=" w-full border border-[#E4DCCF]  rounded-lg p-1.5 outline-none placeholder:text-gray-500">
                </div>
                <NuxtLink to="/customer/customerAuth/change-password">Mot de Passe oublié?</NuxtLink>

                <div class=" flex justify-end">
                    <button class="py-2 px-8  rounded-lg bg-[#00B2B8] text-white">Connexion</button>
                </div>
            </div>
        </form>
        <div class="flex gap-2 justify-center">
            <p >Si vous êtes nouveau, contactez</p>
            <NuxtLink to="" class="text-[#01A4AE] font-bold">ilerer</NuxtLink>
        </div>
    </div>
</template>