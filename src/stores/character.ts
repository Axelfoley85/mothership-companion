// stores/character.ts
import { defineStore } from 'pinia'

export interface CharacterData {
  player: string
  name: string
  class: string
  strength?: number
  speed?: number
  intellect?: number
  combat?: number
  hp?: number
  wounds?: number
  stress?: number
  sanity?: number
  fear?: number
  body?: number
  armor?: number
  credits?: number
  skills: string
  equipment: string
  weapons: string
}

export const useCharacterStore = defineStore('character', {
  state: (): CharacterData => ({
    player: '',
    name: '',
    class: '',
    strength: undefined,
    speed: undefined,
    intellect: undefined,
    combat: undefined,
    hp: undefined,
    wounds: undefined,
    stress: undefined,
    sanity: undefined,
    fear: undefined,
    body: undefined,
    armor: undefined,
    credits: undefined,
    skills: '',
    equipment: '',
    weapons: ''
  })
})
