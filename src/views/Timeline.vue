<template>
    <div>
        <img
            class="runner first"
            src="../assets/images/cultura.jpg"
            alt=""
        >
        <img
            class="runner second"
            src="../assets/images/gastronomia-e-vinhas.jpg"
            alt=""
        >
        <img
            class="runner third"
            src="../assets/images/natureza.jpg"
            alt=""
        >
    </div>
</template>

<script>
    import gsap from "gsap";

    export default {
        mounted() {
            // timeline will go here 
            let tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
            tl.to('.first', {
                x: 700,
                duration: 2,
                ease: 'expo.out'
            });
            tl.to('.second', {
                x: 700,
                duration: 2,
                ease: 'expo.out'
            }, '<.5');
            tl.to('.third', {
                x: 700,
                duration: 2,
                ease: 'expo.out'
            }, '<');
            // calculates duration of the time it took all the animations to run:
            console.log(tl.duration());
        },
    }
</script>

<style lang="scss" scoped>
    .runner {
        display: block;
        height: 5em;
        width: 5em;
        margin-top: 1.5em;
    }
</style>