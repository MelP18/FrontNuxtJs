<template>
    <div class="wrapper overflow-x-hidden">
        <div class="wrapper__content">
            <div class="layouts">
                <masterCustomerInterfaceMasterHeader/>
            </div>
            <div class="flex">
                <masterCustomerInterfaceMasterSidebar/>
                <main>
                    <div class="main__content w-[calc(100vw_-_116px)] h-[calc(100vh_-_67px)] py-[35px] overflow-y-scroll overflow-x-hidden">
                        <div class="xl:container xl:mx-auto px-12">
                            <slot/>
                        </div>   
                    </div>
                </main>  
            </div>
        </div>
    </div>
</template>