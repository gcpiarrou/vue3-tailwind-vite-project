<template>
    <transition
			enter-class="opacity-0"
			enter-active-class="ease-out transition-medium"
			enter-to-class="opacity-100"
			leave-class="opacity-100"
			leave-active-class="ease-out transition-medium"
			leave-to-class="opacity-0"
    >
        <div
            @keydown.esc="onClickFunction"
            v-if="visible"
            class="z-10 fixed inset-0 transition-opacity"
        >
            <div
                @click="onClickFunction"
                class="absolute inset-0 bg-black opacity-50"
                tabindex="0"
            ></div>
        </div>
    </transition>
</template>

<script>
export default {
    props: {
            visible: Boolean,
            onClickFunction: Function,
        },
}
</script>