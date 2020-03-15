<template>
    <div id="app">
        <router-link to="/">home</router-link> /
        <router-link to="/about">about</router-link>/
        <router-link to="/list">list</router-link>/
        <router-link to="/drawer">drawer</router-link>/
        <router-link to="/simple">simple</router-link>/
        <router-link to="/stagger">stagger</router-link>/
        <router-link to="/state">state</router-link>/
        <router-link to="/timeline">timeline</router-link>/
        <router-link to="/master">master</router-link>/
        <transition
            name="slide-fade"
            mode="out-in"
        >
            <router-view />
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>
