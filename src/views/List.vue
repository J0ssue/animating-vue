<template>
    <div>
        <h1>List Page</h1>
        <div class="list-controls">
            <input
                type="text"
                v-model="newContact"
            >
            <button @click="addContact">add contact</button>
            <button @click="sortContacts">sort</button>
        </div>

        <transition-group
            appear
            name="slide-up"
            tag="ul"
        >
            <li
                v-for="(contact, i) in contacts"
                :key="i"
            >{{ contact }}</li>
        </transition-group>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                contacts: [
                    'Oscar Diaz',
                    'Josue Diaz',
                    'Mariana Sousa'
                ],
                newContact: '',
            };
        },
        methods: {
            addContact() {
                if (this.newContact.length === 0) {
                    return;
                }
                this.contacts.push(this.newContact);
                this.newContact = '';
            },
            sortContacts() {
                this.contacts.sort();
            }
        },
    }
</script>

<style lang="scss" scoped>
    input {
        width: 500px;
        display: inline-block;
        padding: 10px 25px;
        margin-right: 10px;
        border-radius: 5px;
        border: 1px solid gray;
        outline: none;
        font-size: 18px;
    }
    button:nth-of-type(1) {
        margin-right: 10px;
    }
    ul {
        list-style: none;
    }
</style>