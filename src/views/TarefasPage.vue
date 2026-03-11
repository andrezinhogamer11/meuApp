<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>

        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>

        <ion-title>Tarefas</ion-title>

      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">

      <ion-item>
        <ion-input
          v-model="novaTarefa"
          placeholder="Digite uma tarefa"
        ></ion-input>
      </ion-item>

      <ion-button expand="block" @click="adicionarTarefa">
        Adicionar
      </ion-button>

      <p v-if="tarefas.length === 0">
        Nenhuma tarefa cadastrada. Adicione a primeira!
      </p>

      <ion-list v-if="tarefas.length > 0">
        <ion-item v-for="(tarefa, index) in tarefas" :key="index">

          <ion-label>{{ tarefa }}</ion-label>

          <ion-button
            color="danger"
            slot="end"
            @click="removerTarefa(index)"
          >
            Remover
          </ion-button>

        </ion-item>
      </ion-list>

    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue'

import {
IonPage,
IonHeader,
IonToolbar,
IonTitle,
IonContent,
IonItem,
IonInput,
IonButton,
IonList,
IonLabel,
IonButtons,
IonBackButton
} from '@ionic/vue'

const novaTarefa = ref("")
const tarefas = ref([])

function adicionarTarefa() {

  if (novaTarefa.value.trim() === "") {
    return
  }

  tarefas.value.push(novaTarefa.value)

  novaTarefa.value = ""
}

function removerTarefa(index) {
  tarefas.value.splice(index, 1)
}
</script>