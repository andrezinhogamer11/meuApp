import { ref, computed, watch } from 'vue'

export function useTarefas() {
  const tarefas = ref([])
  const busca = ref('')
  const filtroAtivo = ref('todas')

  const filtradas = computed(() => {
    const termo = busca.value.toLowerCase()
    return tarefas.value
      .filter(t => t.texto.toLowerCase().includes(termo))
      .filter(t => {
        if (filtroAtivo.value === 'pendentes') return !t.feita
        if (filtroAtivo.value === 'feitas') return t.feita
        return true
      })
  })

  const totalPendentes = computed(
    () => tarefas.value.filter(t => !t.feita).length
  )

  function adicionar(texto) {
    if (!texto.trim()) return
    tarefas.value.push({
      id: Date.now(),
      texto,
      feita: false
    })
  }

  function remover(id) {
    tarefas.value = tarefas.value.filter(t => t.id !== id)
  }

  function concluir(id) {
    const t = tarefas.value.find(t => t.id === id)
    if (t) t.feita = !t.feita
  }

  watch(totalPendentes, (v) => {
    if (v === 0 && tarefas.value.length > 0) {
      alert('🎉 Todas concluídas!')
    }
  })

  return {
    tarefas, busca, filtroAtivo, filtradas,
    adicionar, remover, concluir
  }
}