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
            <v-btn 
              v-for="jsonAlimento in alimentos" 
              :key="jsonAlimento._id">
              {{jsonAlimento.descricao}}
            </v-btn>
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
      alimentos: [],
      filtro: ''
    }
  },
  created () {
    for (var i = 0; i < jsonAlimento.length; i++) {
      this.alimentos[i] = jsonAlimento[i]
    }
    console.log(this.alimentos)
  },
  methods: {
    buscar () {
      console.log(this.filtro)
    }
  }
}
</script>

