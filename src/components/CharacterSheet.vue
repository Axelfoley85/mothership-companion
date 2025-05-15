<!-- Charactersheet design for mothership RPG -->
<template>
    <div class="a4-frame max-w-[210mm] mx-auto p-2 font-mono">
        <div class="grid grid-cols-2 gap-3">
            <div class="grid gap-2">
                <div>
                    <p class="text-4xl font-bold text-center uppercase">Mothership</p>
                    <p class="text-2xl font-bold text-center uppercase">Character Sheet</p>
                </div>
                <div class="labeled-input-container">
                    <label class="input-label">Player</label>
                    <input class="one-liner-input" v-model="character.player" />
                </div>
                <div class="labeled-input-container">
                    <label class="input-label">Character Name</label>
                    <input class="one-liner-input" v-model="character.name" />
                </div>
                <div class="labeled-input-container">
                    <label class="input-label">Class</label>
                    <input class="one-liner-input" v-model="character.class" />
                </div>

                <div class="labeled-input-container skill-field-container">
                    <label class="input-label">Skills</label>
                    <textarea class="skill-textarea" v-model="character.skills" />
                </div>
                <div class="labeled-input-container equipment-field-container">
                    <label class="input-label">Equipment</label>
                    <textarea class="equipment-textarea" v-model="character.equipment" />
                </div>
            </div>

            <div class="grid gap-2">
                <div class="stats-container">
                    <!-- STATS -->
                    <p class="text-center">STATS</p>
                    <div class="grid grid-cols-4 justify-items-center">
                        <!-- LABELS -->
                        <p class="text-center">Strength</p>
                        <p class="text-center">Speed</p>
                        <p class="text-center">Intellect</p>
                        <p class="text-center">Combat</p>
                        <input class="unlabeled-input stat-input" v-model.number="character.strength" />
                        <input class="unlabeled-input stat-input" v-model.number="character.speed" />
                        <input class="unlabeled-input stat-input" v-model.number="character.intellect" />
                        <input class="unlabeled-input stat-input" v-model.number="character.combat" />
                    </div>
                </div>

                <!-- SAVES -->
                <div class="stats-container">
                    <p class="text-center">SAVING ROLLS</p>
                    <div class="grid grid-cols-3 justify-items-center">
                        <!-- LABELS -->
                        <p class="text-center">Sanity</p>
                        <p class="text-center">Fear</p>
                        <p class="text-center">Body</p>
                        <input class="unlabeled-input stat-input" v-model.number="character.sanity" />
                        <input class="unlabeled-input stat-input" v-model.number="character.fear" />
                        <input class="unlabeled-input stat-input" v-model.number="character.body" />
                    </div>
                </div>

                <div class="stats-container">
                    <p class="text-center">VITALS MONITORING</p>
                    <div class="grid grid-cols-3 justify-items-center">
                        <p class="text-center">Health</p>
                        <p class="text-center">Wounds</p>
                        <p class="text-center">Stress</p>
                        <input class="unlabeled-input stat-input vitals-field" v-model.number="character.hp" />
                        <input class="unlabeled-input stat-input vitals-field" v-model.number="character.wounds" />
                        <input class="unlabeled-input stat-input vitals-field" v-model.number="character.stress" />
                        <div v-for="i in 3" :key="i" class="text-[8px]">
                            <p class="text-center whitespace-nowrap">Current/Max</p>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-2 justify-items-center stats-container">
                    <div>
                        <p class="text-center">ARMOR POINTS</p>
                        <input class="unlabeled-input stat-input" v-model.number="character.armor" />
                    </div>
                    <div>
                        <p class="text-center">Credits</p>
                        <input class="unlabeled-input stat-input" v-model.number="character.credits" />
                    </div>
                </div>


                <div class="labeled-input-container weapons-field-container">
                    <label class="input-label">Weapons</label>
                    <textarea class="weapons-textarea" v-model="character.weapons" />
                </div>
            </div>

        </div>
    </div>
</template>

<script lang="ts" setup>
import { useCharacterStore } from '@/stores/character'

const character = useCharacterStore()
</script>
