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

      <ion-button expand="block" @click="adicionarNova">
        Adicionar
      </ion-button>

      <p v-if="filtradas.length === 0">
        Nenhuma tarefa cadastrada. Adicione a primeira!
      </p>

      <ion-list v-if="filtradas.length > 0">
        <CardTarefa
          v-for="t in filtradas"
          :key="t.id"
          :tarefa="t"
          @remover="remover"
          @concluir="concluir"
        />
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
IonButtons,
IonBackButton
} from '@ionic/vue'

import { useTarefas } from '../composables/useTarefas'
import CardTarefa from '../components/CardTarefa.vue'

const {
  filtradas, adicionar, remover, concluir
} = useTarefas()

const novaTarefa = ref("")

function adicionarNova() {
  adicionar(novaTarefa.value)
  novaTarefa.value = ""
}
</script>