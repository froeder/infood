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
                :key="jsonAlimento._id"
                @click="detalhar(jsonAlimento)"
                >
                {{jsonAlimento.descricao}}
              </v-btn>
            </v-flex>
          </v-layout>
          <v-tabs
            dark
            color="cyan"
            show-arrows
          >
            <v-tabs-slider color="yellow"></v-tabs-slider>

            <v-tab
              v-for="jsonAlimento in alimentos" 
              :key="jsonAlimento._id"
              :href="'#tab-' + jsonAlimento._id"
            >
              {{jsonAlimento.descricao}}
            </v-tab>

            <v-tabs-items>
              <v-tab-item
                v-for="jsonAlimento in alimentos" 
                :key="jsonAlimento._id"
                :href="'tab-' + jsonAlimento._id"
              >
                <v-card flat>
                  <v-card-text>{{ text }}</v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </v-tabs>
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
  },
  methods: {
    buscar () {
      this.alimentos = []
      for (var i = 0; i < jsonAlimento.length; i++) {
        if (this.filtro === jsonAlimento[i].descricao.split(',')[0]) {
          this.alimentos.push(jsonAlimento[i])
        }
      }
    },
    detalhar (alimentos) {
      console.log(alimentos)
    }
  }
}
</script>

