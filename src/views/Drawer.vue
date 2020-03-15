<template>
    <div>
        <button @click="toggleDrawer">
            My Profile
        </button>

        <!-- the property 'appear' can be added if you want the animation to happen as soon as you enter the page  -->
        <transition
            @before-enter="beforeEnter"
            @enter="enter"
            @leave="leave"
            :css="false"
        >
            <div
                class="drawer"
                v-if="isOpen"
            >
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </transition>
    </div>
</template>

<script>
    import Velocity from "velocity-animate";
    export default {
        data() {
            return {
                isOpen: false
            };
        },
        methods: {
            toggleDrawer() {
                this.isOpen = !this.isOpen;
            },
            beforeEnter(el) {
                el.style.opacity = 0;
                el.style.width = '0em';
            },
            enter(el, done) {
                Velocity(
                    el,
                    {
                        opacity: 1,
                        width: '12em'
                    },
                    {
                        duration: 1000,
                        // easing: 'easeOutCubic',
                        easing: [100, 5], // spring physics
                        complete: done
                    }
                );
            },
            leave(el, done) {
                Velocity(
                    el,
                    {
                        opacity: 0,
                        width: '0em'
                    },
                    {
                        duration: 500,
                        easing: 'easeInCubic',
                        complete: done
                    }
                );
            }
        },
    }
</script>

<style lang="scss" scoped>
    img {
        height: 2.5em;
        width: 2.5em;
        border-radius: 50%;
    }

    button {
        margin-top: 50px;
    }

    .drawer {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 12em;
        height: 20em;
        border-radius: 1%;
        background-color: #e0e0e0;
        box-shadow: 0.08em 0.03em 0.4em #ababab;
        padding-top: 0.7em;
    }
    .drawer div {
        height: 3.5em;
        width: 95%;
        margin-top: 0.6em;
        background-color: #f0f0f0;
        border: 0.02em solid #ababab;
        border-radius: 1%;
    }
</style>