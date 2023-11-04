<template>
    <div class="max-w-sm flex flex-col justify-evenly items-center h-screen">
        <div class="w-full flex flex-col gap-5">
            <h2 class="text-2xl ">BIENVENUE SUR L'ESPACE PERSONNEL ILEER</h2>
            <p class="text-gray-500 max-w-xs">Pour continuer, nous vous prions d'ajourner votre mot de passe</p>
        </div>
        <form class="w-full">
            <div class="flex flex-col gap-8">
                <div class="flex flex-col gap-2">
                    <label class="font-semibold ">Nouveau Password</label>
                    <input type="password" placeholder="Entrez le nouveau mot de passe"
                        class=" w-full border border-[#E4DCCF] rounded-lg p-1.5 outline-none placeholder:text-gray-500">
                </div>
                <div class="flex flex-col gap-2">
                    <label class="font-bold">Confirmation</label>
                    <input type="password" placeholder="Confirmez votre nouveau mot de passe"
                        class=" w-full border border-[#E4DCCF]  rounded-lg p-1.5 outline-none placeholder:text-gray-500">
                </div>
                <div class=" flex justify-end">
                    <button class="py-2 px-8  rounded-lg bg-[#00B2B8] text-white">Ajourner</button>
                </div>
            </div>
        </form>
    </div>
</template>

