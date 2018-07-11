<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-card>
          <v-card-title>Busque o alimentos</v-card-title>
            <v-card-text>
              <v-layout row wrap>
                <v-flex xs6>
                  <v-text-field v-model="filtro" prepend-icon="search" label="Buscar"></v-text-field>
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
                    label="What state are you from?"
                    solo-inverted
                  ></v-autocomplete>
                </v-flex>
                <v-flex xs6>
                  <v-btn color="success" @click="buscar()" block>Buscar</v-btn>
                </v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex md12 xs12>
                  <router-link 
                      v-for="jsonAlimento in alimentos" 
                      :key="jsonAlimento._id"
                      :to="{
                                name: 'Detalhe',
                                params: {id: jsonAlimento._id }
                              }">
                    <v-btn>
                      {{jsonAlimento.descricao}}
                    </v-btn>
                  </router-link>
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
      console.log(this.states[i])
    }
  },
  watch: {
    search (val) {
      val && val !== this.select && this.querySelections(val)
    }
  },
  methods: {
    buscar () {
      this.alimentos = []
      for (var i = 0; i < jsonAlimento.length; i++) {
        if (this.filtro.toLowerCase() === jsonAlimento[i].descricao.split(',')[0].toLowerCase()) {
          this.alimentos.push(jsonAlimento[i])
        }
      }
    },
    detalhar (alimentos) {
      console.log(alimentos._id)
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


