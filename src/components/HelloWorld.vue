<template>
    <div class="hello">
        <button
            @click="toggleModal"
            v-if="!isOpen"
        >Open</button>
        <transition name="fade">
            <div
                class="modal"
                v-if="isOpen"
            >
                <button @click="toggleModal">Close</button>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "HelloWorld",
        data() {
            return {
                isOpen: false
            };
        },
        methods: {
            toggleModal() {
                this.isOpen = !this.isOpen;
            }
        },
    };
</script>

<style scoped lang="scss">
</style>
