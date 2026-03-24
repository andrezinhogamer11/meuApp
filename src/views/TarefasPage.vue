<script setup lang="ts">
import { ref } from 'vue';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonList, IonItem, IonInput, IonButton, IonSegment, IonSegmentButton, IonLabel } from '@ionic/vue';
import { useTarefas } from '../composables/useTarefas';
import CardTarefa from '../components/CardTarefa.vue';

const { tarefas, busca, filtroAtivo, filtradas,
  totalPendentes, adicionar, remover, concluir } = useTarefas();

const novaTarefa = ref('');

function adicionarNova() {
  adicionar(novaTarefa.value);
  novaTarefa.value = '';
}
</script>

<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Minhas Tarefas ({{ totalPendentes }} pendentes)</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonList>
        <IonItem>
          <IonInput
            v-model="novaTarefa"
            placeholder="Adicionar nova tarefa"
            @keyup.enter="adicionarNova()"
          />
          <IonButton @click="adicionarNova()">Adicionar</IonButton>
        </IonItem>

        <IonItem>
          <IonInput
            v-model="busca"
            placeholder="Buscar tarefas"
          />
        </IonItem>

        <IonSegment v-model="filtroAtivo">
          <IonSegmentButton value="todas">
            <IonLabel>Todas</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="pendentes">
            <IonLabel>Pendentes</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="feitas">
            <IonLabel>Feitas</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        <CardTarefa
          v-for="tarefa in filtradas"
          :key="tarefa.id"
          :tarefa="tarefa"
          @remover="remover"
          @concluir="concluir"
        />
      </IonList>
    </IonContent>
  </IonPage>
</template>
