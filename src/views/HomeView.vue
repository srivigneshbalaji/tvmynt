<template>
  <div class="home">
    <div>
      <v-card class="appbarbor elevation-0 rounded-0 pl-2 pr-1">
        <v-row no-gutters>
          <v-col class="my-auto" cols="6">
            <div>
              <img src="@/assets/Mynt_pro_logo.svg" width="90px">
            </div>
          </v-col>
          <v-col cols="6" class="my-auto text-right">
            <div class="menusty">
              <v-menu down offset-y transition="slide-y-transition">
                <template v-slot:activator="{ on, attrs }">
                  <!-- <v-btn  class="rounded-lg elevation-0" fab > -->
                  <v-avatar color="teal" size="32" v-bind="attrs" v-on="on">
                    <span class="white--text font-weight-bold title text-uppercase">{{ cliname.slice(0, 1) }}</span>
                    <!-- <v-icon color="white">mdi-account-circle</v-icon> -->
                    <!-- <img src="@/assets/user.svg" alt=""> -->
                  </v-avatar>
                  <!-- </v-btn> -->
                </template>
                <v-card class="py-2 rounded-lg elevation-0">
                  <v-list-item class="pl-4 pr-0">
                    <v-list-item-avatar color="teal" class="text-center">
                      <p class="white--text font-weight-bold headline text-uppercase mb-0 ml-3">{{
                        cliname.slice(0, 1)
                      }}</p>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title class="font-weight-bold">{{ cliname }}</v-list-item-title>
                      <v-list-item-subtitle class="font-weight-bold">{{ cliid }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider class="my-2"></v-divider>
                  <v-list>
                    <v-list-item-group>
                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title>Profile Settings</v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title>Account and Billing</v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                      <v-divider class="my-2"></v-divider>
                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title>Help Center</v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title>What's new</v-list-item-title>
                        </v-list-item-content>
                        <v-list-item-content class="text-center">
                          <v-list-item-title><v-badge content="11" color="#f7525f"></v-badge></v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title>Dark color theme</v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>
                  <v-divider class="my-2"></v-divider>
                  <v-list-item @click="logout()">
                    <v-list-item-content>
                      <v-list-item-title>Sign Out</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
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
import axios from 'axios'
import { apiurl } from '../apiUrl.js'
import TVChartContainer from '../components/TVChartContainer.vue';

export default {
  data: () => ({
    clientname: "",
    session: "",
    clientId: "",

    cliid: "",
    cliname: "",
  }),
  components: {
    TVChartContainer
  },
  mounted() {
    var axiosthis = this;
    var authcode = new URL(window.location.href).searchParams.get("authCode");

    if (authcode) {
      // console.log("aut", authcode);
      var confiigg = {
        method: "post",
        url: `${apiurl}/ssoclient_check?code=` + authcode,
        headers: {},
      };

      axios(confiigg)
        .then(function (response) {
          console.log(response.data);
          if (response.data.client_code !== undefined) {
            axiosthis.session = response.data.clientsession;
            axiosthis.clientId = response.data.client_code;
            axiosthis.clientname = response.data.clientName

            localStorage.setItem("userid", axiosthis.clientId);
            localStorage.setItem("username", axiosthis.clientname);
            localStorage.setItem("usession", axiosthis.session);

            axiosthis.cliid = localStorage.getItem("userid");
            var secid = localStorage.getItem("usession");
            axiosthis.cliname = localStorage.getItem("username");
            console.log("cliixzxzd", axiosthis.cliid, secid, axiosthis.cliname);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    if ((axiosthis.clientId == null) && (axiosthis.session == null)) {
      axiosthis.$router.push("/");
    }


  },
  methods: {
    logout() {
      localStorage.removeItem("userid");
      localStorage.removeItem("username");
      localStorage.removeItem("usession");
      this.$router.push("/")
      window.location.reload();
    },
  }
}
</script>

<style>
.appbarbor {
  border-bottom: 4px solid #E0E3EB !important;
}

.v-menu__content {
  border: none !important;
  box-shadow: 0 2px 4px #0003 !important;
  border-radius: 2px !important;
}
</style>
