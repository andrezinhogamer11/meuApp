<script setup>
const props = defineProps(['tarefa'])
const emit = defineEmits(['remover', 'concluir'])
</script>

<template>
  <ion-item>
    <ion-label
      :style="props.tarefa.feita ? 'text-decoration: line-through' : ''"
      @click="emit('concluir', props.tarefa.id)"
    >
      {{ props.tarefa.texto }}
    </ion-label>

    <ion-button
      color="danger"
      fill="clear"
      slot="end"
      @click="emit('remover', props.tarefa.id)"
    >
      Remover
    </ion-button>
  </ion-item>
</template>