<template>

<ion-button
 :key=""
v-for="(value, indice) in 5"
:key=""
 
></ion-button>


</template>

<script setup>
import { defineProps } from 'vue';
import { IonButton } from '@ionic/vue';

const props = defineProps({
    total : {type: Number, default:0}
})
</script>

<script scoped >
.amarelo{
    color: yellow
}
</script>