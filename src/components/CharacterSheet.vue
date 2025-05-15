<template>
  <div class="max-w-2xl mx-auto p-4 grid gap-4 text-white bg-zinc-900 min-h-screen font-mono">
    <h1 class="text-3xl font-bold text-center uppercase">Mothership Character</h1>
    <input v-model="character.player" placeholder="Player Name" />
    <input v-model="character.name" placeholder="Character Name" />
    <input v-model="character.class" placeholder="Class" />
    <input v-model.number="character.strength" placeholder="Strength" />
    <input v-model.number="character.speed" placeholder="Speed" />
    <input v-model.number="character.intellect" placeholder="Intellect" />
    <input v-model.number="character.combat" placeholder="Combat" />
    <input v-model.number="character.hp" placeholder="HP" />
    <input v-model.number="character.sanity" placeholder="Sanity" />
    <input v-model.number="character.fear" placeholder="Fear" />
    <input v-model.number="character.body" placeholder="Body" />
    <input v-model.number="character.armor" placeholder="Armor Points" />
    <input v-model.number="character.credits" placeholder="Credits" />
    <textarea v-model="character.skills" placeholder="Skills" />
    <textarea v-model="character.equipment" placeholder="Equipment" />
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
input,
textarea {
  @apply w-full p-2 bg-zinc-800 border border-zinc-700 rounded;
}
</style>
