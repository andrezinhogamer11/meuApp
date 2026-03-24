<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Mini App de Tarefas</ion-title>
      </ion-toolbar>
    </ion-header>
 
    <ion-content class="ion-padding">
 
      <div id="container">
        <h2>Bem-vindo!</h2>
        <p>Gerencie suas tarefas de forma simples.</p>
 
        <ion-button expand="block" @click="irParaTarefas">
          Ir para Tarefas
        </ion-button>
      </div>
 
    </ion-content>
  </ion-page>
 
</template>
 
<script setup lang="ts">
import { useRouter } from 'vue-router'
 
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton
} from '@ionic/vue'
 
const router = useRouter()
 
function irParaTarefas() {
  router.push('/tarefas')
}
</script>
<style scoped>
 #container {
  text-align: center;
 
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
 
/* Título */
h2 {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #222;
}
 
/* Descrição */
p {
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
}
 
/* Botão */
ion-button {
  --background: #3880ff;
  --border-radius: 12px;
  --box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  font-weight: bold;
}
 
/* Efeito ao passar o mouse */
ion-button:hover {
  --background: #2c6cd6;
}
</style>