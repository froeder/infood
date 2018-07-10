<template >
    <v-app>
        <v-navigation-drawer fixed v-model='drawer' app>
            <v-list>
                <v-list-tile value='true' v-for='(item, i) in items' :key='i' @click='linkto(item.linkpath)'>
                    <v-list-tile-action>
                        <v-icon v-html='item.icon'></v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar color='primary' fixed app>
            <v-toolbar-side-icon @click.stop='drawer = !drawer'></v-toolbar-side-icon>
            <v-toolbar-title v-text='title'></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon to='/report'>
                <v-icon>help</v-icon>
            </v-btn>
        </v-toolbar>
        <v-content>
            <router-view></router-view>
        </v-content>
    </v-app>

</template>

<script>

export default {
  data () {
    return {
      drawer: null,
      items: [
        {icon: 'home', title: 'Home', linkpath: '/'},
        {icon: 'search', title: 'Buscar', linkpath: '/buscar'}
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'LabAgenda',
      login: false,
      user_logged: ''
    }
  },
  name: 'App',
  methods: {
    linkto (pathname) {
      this.$router.push({ path: pathname })
    }
  }
}
</script>