<template>
    <div class="grid grid-cols-2 gap-2">
        <div class="max-w-2xl mx-auto p-4 grid gap-2 text-white font-mono">
            <h1 class="text-3xl font-bold text-center uppercase">Mothership Character</h1>
            <input v-model="character.player" placeholder="Player Name" />
            <input v-model="character.name" placeholder="Character Name" />
            <input v-model="character.class" placeholder="Class" />
            <input v-model.number="character.hp" placeholder="HP" />
            <textarea v-model="character.equipment" placeholder="Equipment" />
            <input v-model.number="character.credits" placeholder="Credits" />
        </div>
        <div class="max-w-2xl mx-auto p-4 grid gap-2 text-white font-mono">
            <div class="grid grid-cols-4 gap-1">
                <input v-model.number="character.strength" placeholder="Strength" />
                <input v-model.number="character.speed" placeholder="Speed" />
                <input v-model.number="character.intellect" placeholder="Intellect" />
                <input v-model.number="character.combat" placeholder="Combat" />
            </div>

            <div class="border border-zinc-300 rounded-2xl p-1">
                <p class="text-center">Saves</p>
                <div class="grid grid-cols-3 gap-1">
                    <input v-model.number="character.sanity" placeholder="Sanity" />
                    <input v-model.number="character.fear" placeholder="Fear" />
                    <input v-model.number="character.body" placeholder="Body" />
                    <p class="text-center">Sanity</p>
                    <p class="text-center">Fear</p>
                    <p class="text-center">Body</p>
                </div>
            </div>
            <textarea v-model="character.skills" placeholder="Skills" />
            <input v-model.number="character.armor" placeholder="Armor Points" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

interface CharacterData {
    player: string
    name: string
    class: string
    strength: number
    speed: number
    intellect: number
    combat: number
    hp: number
    sanity: number
    fear: number
    body: number
    armor: number
    credits: number
    skills: string
    equipment: string
}

const character = reactive<CharacterData>({
    player: '',
    name: '',
    class: '',
    strength: 0,
    speed: 0,
    intellect: 0,
    combat: 0,
    hp: 0,
    sanity: 0,
    fear: 0,
    body: 0,
    armor: 0,
    credits: 0,
    skills: '',
    equipment: '',
})
</script>

<style scoped>
    @reference "../assets/main.css";

    textarea {
    @apply w-full p-2 bg-zinc-800 border border-zinc-700 rounded-xl;
    }

    input {
        @apply w-full p-2 bg-zinc-800 border border-zinc-700 rounded-xl;
    }
</style>
