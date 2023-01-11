<template>
  <div class="home">
    <div>
      <v-card color="#f0f3fa" class="appbarbor elevation-0 rounded-0 px-4">
        <v-row no-gutters>
          <v-col cols="6">
            <div>
              <img src="@/assets/Mynt_pro_logo.svg" width="100px">
            </div>
          </v-col>
          <v-col cols="6" class="my-auto text-right">
            <div class="menusty">
              <v-menu open-on-hover down offset-y transition="slide-y-transition">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn tile v-bind="attrs" v-on="on" class="rounded-lg elevation-0" small fab color="#F5F5F5">
                    <v-avatar>
                      <!-- <span class="white--text font-weight-bold title text-uppercase"></span> -->
                      <v-icon color="white" size="32">mdi-account-circle</v-icon>
                    </v-avatar>
                  </v-btn>
                </template>
                <v-card class="pa-2 rounded-lg elevation-0">
                  <v-list class="pb-3 pt-0">
                    <v-list-item class="pl-4 pr-0 mb-4">
                      <v-list-item-content>
                        <v-list-item-title class="title font-weight-bold">CHANDRASEKAR GOWRI</v-list-item-title>
                        <v-list-item-subtitle class="subtitle-1 font-weight-bold">ZE1A40</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>

                    <v-btn @click="logout()" class="elevation-0 ml-4" text color="blue"
                      style="background-color: aliceblue !important">
                      <span class="font-weight-bold">Logout</span>
                    </v-btn>
                  </v-list>
                </v-card>
              </v-menu>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </div>
    <div>
      <TVChartContainer />
    </div>
    <div></div>

  </div>
</template>

<script>
import TVChartContainer from '../components/TVChartContainer.vue';


export default {
  components: {
    TVChartContainer
  }
}
</script>

<style>
.appbarbor {
  border-bottom: 4px solid rgba(0, 0, 0, 0.10) !important;
}

.v-menu__content {
  box-shadow: none !important;
  border: thin solid rgba(0, 0, 0, 0.12) !important;
}
</style>
