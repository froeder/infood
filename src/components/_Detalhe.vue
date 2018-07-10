<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-card>
          <v-card-title>Detalhes Nutricionais</v-card-title>
            <v-card-text>
              <v-card>
                <v-card-title>{{this.alimentos.descricao}}</v-card-title>
                <v-card-text>
                  <p>Info</p>
                  <p>Teste</p>
                  <p>Teste</p>
                </v-card-text>
              </v-card>
            </v-card-text>
          <v-card-actions>
            <v-btn to="/buscar"> <v-icon>arrow_back</v-icon> Voltar</v-btn>
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
      users: [],
      headers: [
        { text: 'Nome', value: 'descricao' }
      ],
      alimentos: [],
      filtro: ''
    }
  },
  created () {
    this.alimentos = []
    for (var i = 0; i < jsonAlimento.length; i++) {
      if (jsonAlimento[i]._id === this.$route.params.id) {
        this.alimentos = jsonAlimento[i]
      }
    }
    console.log(this.alimentos)
  }
}
</script>
