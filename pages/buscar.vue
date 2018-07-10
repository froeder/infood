<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card>
        <v-card-title>Welcome to the Vuetify + Nuxt.js template</v-card-title>
        <v-card-text v-for="jsonAlimento in alimentos" :key="jsonAlimento._id">
          <v-btn>{{jsonAlimento.descricao}}</v-btn>
        </v-card-text>
        <v-card-actions>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import jsonAlimento from '../assets/alimentos.json'

export default {
  data () {
    return {
      alimentos: []
    }
  },
  created () {
    for (var i = 0; i < jsonAlimento.length; i++) {
      this.alimentos[i] = jsonAlimento[i]
    }
    console.log(this.alimentos)
  }
}
</script>

