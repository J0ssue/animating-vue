<template>
    <div>
        <div id="container">
            <img
                class="paws first"
                src="../assets/images/paws.png"
                alt=""
            >
            <img
                class="paws second"
                src="../assets/images/paws.png"
                alt=""
            >
            <img
                class="paws third"
                src="../assets/images/paws.png"
                alt=""
            >
            <img
                class="paws fourth"
                src="../assets/images/paws.png"
                alt=""
            >
            <img
                id="fox"
                src="../assets/images/fox.png"
                alt=""
            >
        </div>
        <button @click="play">play</button>
    </div>
</template>

<script>
    import gsap from "gsap";
    let masterTl = gsap.timeline();
    export default {
        methods: {
            play() {
                masterTl.add(this.pawsTl()),
                    masterTl.add(this.foxTl()),
                    masterTl.play();
            },
            pawsTl() {
                let tl = gsap.timeline();
                tl.to('.first', {
                    opacity: 1,
                    scale: 1,
                    duration: 0.5,
                    ease: 'bounce.out'
                });
                tl.to('.second', {
                    opacity: 1,
                    scale: 1,
                    duration: 0.5,
                    ease: 'bounce.out'
                });
                tl.to('.third', {
                    opacity: 1,
                    scale: 1,
                    duration: 0.5,
                    ease: 'bounce.out'
                });
                tl.to('.fourth', {
                    opacity: 1,
                    scale: 1,
                    duration: 0.5,
                    ease: 'bounce.out'
                });

                return tl;
            },
            foxTl() {
                let tl = gsap.timeline();
                tl.to('#fox', {
                    opacity: 1,
                    filter: 'blur(0)',
                    scale: 1,
                    duration: 0.4,
                    ease: 'slow'
                });
                return tl;
            }
        },
    }
</script>

<style lang="scss" scoped>
    #container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 5em;
    }

    #fox {
        height: 8em;
        width: 8em;
        opacity: 0;
        filter: blur(2px);
    }

    .paws {
        transform: scale(0);
        width: 2.5em;
        height: 2.5em;
        margin-top: 50px;
        margin-right: 0.8em;
        opacity: 0;
    }

    button {
        margin-top: 5em;
    }
</style>