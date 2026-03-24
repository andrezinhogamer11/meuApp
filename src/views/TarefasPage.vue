<template>
  <IonPage>
    <IonHeader shadow="flat">
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton default-href="/" />
        </IonButtons>
        <IonTitle>Minhas Tarefas</IonTitle>
      </IonToolbar>
    </IonHeader>
 
    <IonContent class="ion-padding">
      <!-- Campo de Busca (Opcional, mas recomendado pelo escopo) -->
      <IonItem>
        <IonInput v-model="busca" placeholder="Pesquisar tarefa..." />
      </IonItem>
 
      <!-- Campo de Nova Tarefa -->
      <IonItem>
        <IonInput v-model="novaTarefa" placeholder="Digite uma nova tarefa" />
      </IonItem>
 
      <IonButton expand="block" @click="adicionarNova">
        Adicionar Tarefa
      </IonButton>
 
      <!-- Filtros (Tarefa 1: filtradas usa o filtroAtivo) -->
      <div class="ion-padding-top">
        <IonLabel>Pendentes: {{ totalPendentes }}</IonLabel>
      </div>
 
      <!-- Estado vazio -->
      <p v-if="filtradas.length === 0" class="ion-text-center">
        Nenhuma tarefa encontrada.
      </p>
 
      <!-- Lista de tarefas usando o componente filho (Tarefa 2 e 3) -->
      <div v-else>
        <CardTarefa
          v-for="item in filtradas"
          :key="item.id"
          :tarefa="item"
          @remover="remover"
          @concluir="concluir"
        />
      </div>
 
    </IonContent>
  </IonPage>
</template>
 
<script setup lang="ts">
import { ref } from 'vue'
import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
  IonItem, IonInput, IonButton, IonButtons, IonBackButton, IonLabel
} from '@ionic/vue'
 
// Importando o Composable e o Componente que você criou
import { useTarefas } from '../composables/useTarefas'
import CardTarefa from '../components/CardTarefa.vue'
 
// Extraindo as variáveis e funções do Composable
const {
  busca,
  filtradas,
  totalPendentes,
  adicionar,
  remover,
  concluir
} = useTarefas()
 
const novaTarefa = ref('')
 
function adicionarNova() {
  if (novaTarefa.value.trim()) {
    adicionar(novaTarefa.value)
    novaTarefa.value = '' // Limpa o campo após adicionar
  }
}
</script>