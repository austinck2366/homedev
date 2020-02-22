<template>
<nav>
      <v-toolbar 
      dark
      app
      >
        <v-spacer></v-spacer>
        <v-toolbar-title>Stock Trader</v-toolbar-title>
  
        <v-spacer></v-spacer>
        
  
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
  
        <v-btn icon @click="drawer = !drawer" >
          <v-icon>mdi-heart</v-icon>
        </v-btn>
  
        <v-app-bar-nav-icon class= "grey--text" @click="drawer = !drawer" ></v-app-bar-nav-icon>
      </v-toolbar>

    <v-navigation-drawer 
    dark  
    app 
    :expand-on-hover="expandOnHover"
    v-model="drawer"
    >
         <v-container>
            <router-link to="/stocktrader/portfolio"><a>Stock Portfolio</a></router-link>
        </v-container>
         <v-container>
            <router-link to="/stocktrader/stocks" ><a>Stocks</a></router-link>
        </v-container>
        <v-spacer></v-spacer>
            <v-container>
                <router-link to="/"><a>Austin's Home Portfolio</a></router-link>
            </v-container>


    </v-navigation-drawer>
    <div class="row">
        <div class="col-md-12">
        </div>
    </div>
</nav>
</template>

<script>
import navbar from "../../components/Navbar.vue";
export default {
        name: "Header",
        components: {
            navbar
        },
        data () {
            return{
            drawer: false,
            expandOnHover: false,

        }
        }
}
</script>

