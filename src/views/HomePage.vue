<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Mini App de Tarefas</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">

      <h2>Bem-vindo</h2>
      <p>Gerencie suas tarefas facilmente.</p>

      <ion-button expand="block" @click="$router.push('/tarefas')">
        Ir para Tarefas
      </ion-button>

    </ion-content>
  </ion-page>
</template>

<script setup>
import {
IonPage,
IonHeader,
IonToolbar,
IonTitle,
IonContent,
IonButton
} from '@ionic/vue'


</script>