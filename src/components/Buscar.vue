<template>
  <v-layout column align-center>
    <v-card>
      <v-card-title>Busque o alimentos</v-card-title>
        <v-card-text>
          <v-layout row wrap>
            <v-flex xs6>
              <v-text-field v-model="filtro" prepend-icon="search" label="Buscar"></v-text-field>
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
</template>

<script>
import jsonAlimento from '../assets/alimentos.json'

export default {
  data () {
    return {
      users: [],
      headers: [
        { text: 'Nome', value: 'descricao' }
      ],
      alimentos: [],
      filtro: ''
    }
  },
  created () {
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
    }
  }
}
</script>

