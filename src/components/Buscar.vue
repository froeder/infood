<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-card>
          <v-card-title>Filtrar alimentos</v-card-title>
            <v-card-text>
              <v-layout row wrap>
                <v-flex xs12>
                  <!--<v-text-field v-model="filtro" prepend-icon="search" label="Buscar"></v-text-field>-->
                  <v-autocomplete
                    :loading="loading"
                    :items="items"
                    :search-input.sync="search"
                    v-model="select"
                    cache-items
                    class="mx-3"
                    flat
                    hide-no-data
                    hide-details
                    label="Digite o nome alimento"
                  ></v-autocomplete>
                </v-flex>
                <v-flex block xs12>
                  <v-btn color="success" @click="buscar(select)" block>
                    <v-icon>search</v-icon>
                    Buscar
                  </v-btn>
                </v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex md12 xs12>
                  <v-card 
                      v-for="jsonAlimento in alimentos" 
                      :key="jsonAlimento._id">
                    <v-card-title><h3>{{jsonAlimento.descricao || 'Aguarde'}}</h3></v-card-title>
                    <v-card-text>
                      <p><strong>Cálcio:</strong> {{jsonAlimento.calcio}}</p>
                      <p><strong>Carboidratos:</strong> {{jsonAlimento.carboidrato}}</p>
                      <p><strong>Cinzas:</strong> {{jsonAlimento.cinzas}}</p>
                      <p><strong>Cobre:</strong> {{jsonAlimento.cobre}}</p>
                      <p><strong>Colesterol:</strong> {{jsonAlimento.colesterol}}</p>
                      <p><strong>Energia - kcal:</strong> {{jsonAlimento.energia.kcal}}</p>
                      <p><strong>Energia - kj:</strong> {{jsonAlimento.energia.kj}}</p>
                      <p><strong>Ferro:</strong> {{jsonAlimento.ferro}}</p>
                      <p><strong>Fibra Alimentar: </strong>{{jsonAlimento.fibra_alimentar}}</p>
                      <p><strong>Fósforo:</strong> {{jsonAlimento.fosforo}}</p>
                      <p><strong>Lipídeos:</strong> {{jsonAlimento.lipideos}}</p>
                      <p><strong>Magnésio:</strong> {{jsonAlimento.magnesio}}</p>
                      <p><strong>Manganes</strong> {{jsonAlimento.manganes}}</p>
                      <p><strong>Niacina:</strong> {{jsonAlimento.niacina}}</p>
                      <p><strong>Piridoxina:</strong> {{jsonAlimento.piridoxina}}</p>
                      <p><strong>Potássio:</strong> {{jsonAlimento.potassio}}</p>
                      <p><strong>Proteina:</strong> {{jsonAlimento.proteina}}</p>
                      <p><strong>RAE:</strong> {{jsonAlimento.rae}}</p>
                      <p><strong>RE:</strong> {{jsonAlimento.re}}</p>
                      <p><strong>Retinol:</strong> {{jsonAlimento.retinol}}</p>
                      <p><strong>Riboflavina:</strong> {{jsonAlimento.riboflavina}}</p>
                      <p><strong>Sodio:</strong> {{jsonAlimento.sodio}}</p>
                      <p><strong>Tiamina:</strong> {{jsonAlimento.tiamina}}</p>
                      <p><strong>Umidade:</strong> {{jsonAlimento.umidade}}</p>
                      <p><strong>Vitamina C:</strong> {{jsonAlimento.vitamina_c}}</p>
                      <p><strong>Zinco</strong> {{jsonAlimento.zinco}}</p>
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-card-text>
          <v-card-actions>
          </v-card-actions>
        </v-card>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import jsonAlimento from '../assets/alimentos.json'

export default {
  data () {
    return {
      alimentos: [],
      filtro: '',
      loading: false,
      items: [],
      search: null,
      select: null,
      states: []
    }
  },
  created () {
    for (var i = 0; i < jsonAlimento.length; i++) {
      this.states.push(jsonAlimento[i].descricao)
    }
  },
  watch: {
    search (val) {
      val && val !== this.select && this.querySelections(val)
    }
  },
  methods: {
    buscar (select) {
      this.alimentos = []
      for (var i = 0; i < jsonAlimento.length; i++) {
        if (this.select === jsonAlimento[i].descricao) {
          this.alimentos.push(jsonAlimento[i])
        }
      }
    },
    querySelections (v) {
      this.loading = true
      // Simulated ajax query
      setTimeout(() => {
        this.items = this.states.filter(e => {
          return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
        })
        this.loading = false
      }, 500)
    }
  }
}
</script>

<style>
  a{
    text-decoration: none
  }
</style>


