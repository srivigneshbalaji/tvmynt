<template>
  <div class="home">
    <div>
      <div>
      <TVChartContainer />
    </div>
      <v-snackbar class="pt-6 pr-6" style="z-index: 2 !important;" transition="slide-x-reverse-transition"
        v-model="snackbar" :timeout="10000" :value="true" :color="snackbarclr" absolute outlined top right>
        <v-icon class="mr-2" :color="snackbarclr">mdi-alert-outline</v-icon>
        {{ snackmsgbar }}
      </v-snackbar>
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
                  <v-avatar color="teal" size="32" v-bind="attrs" v-on="on">
                    <span v-if="ssologinfo == 'ZebullOk'" class="white--text font-weight-bold title text-uppercase">{{
                      cliname.slice(0, 1)
                    }}</span>
                  </v-avatar>
                </template>
                <v-card class="py-2 rounded-lg elevation-0">
                  <v-list-item v-if="ssologinfo == 'ZebullOk'" class="pl-4 pr-0">
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

   
  </div>
</template>

<script>
import axios from 'axios'
import { apiurl } from '../../apiUrl.js'
import TVChartContainer from '../../components/TVChartContainer.vue';

export default {
  data: () => ({
    /* eslint-disable */
    snackbar: false,
    snackbarclr: 'default',
    snackmsgbar: "",

    ssologinfo: "",
    logininfo: "",
    authcode: "",

    cliid: "",
    cliname: "",
    usession: "",
  }),

  components: {
    TVChartContainer
  },

  mounted() {

    this.authcode = new URL(window.location.href).searchParams.get("authCode");
    console.log("authcode", this.authcode)
    var axiosThis = this;

    if (this.authcode != null) {
      var logininfo = "ZebullOk";
      localStorage.setItem("loginway", logininfo);
      localStorage.setItem("lastway", logininfo);

      // console.log("zebull", this.cliname)
      var axiosThis = this;

      if (this.authcode) {
        var ssoconfig = {
          method: "post",
          url: `${apiurl}/ssoclient_check?code=` + this.authcode,
          headers: {},
        };

        axios(ssoconfig)
          .then(function (response) {
            console.log("ssosignin sso", response.data);
            if (response.data.client_code !== undefined) {
              localStorage.setItem("userid", response.data.client_code);
              localStorage.setItem("username", response.data.clientName);
              localStorage.setItem("usession", response.data.clientsession);

              axiosThis.ssologinfo = localStorage.getItem("loginway");
              axiosThis.cliid = localStorage.getItem("userid");
              axiosThis.usession = localStorage.getItem("usession");
              axiosThis.cliname = localStorage.getItem("username");
              console.log("cliixzxzd sso", axiosThis.ssologinfo, axiosThis.cliid, axiosThis.usession, axiosThis.cliname);
            } else if ((axiosThis.cliid == null) || (axiosThis.usession == null) || (axiosThis.cliname == null)) {
              axiosThis.$router.push("/");
            }
            else {
              axiosThis.$router.push("/");
            }

          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
    // else {
    //   var lastout = localStorage.getItem("lastway");

    //   console.log("logininfo", this.logininfo)
    //   this.usernotfound = false;
    //   this.snackbar = true;
    //   if (lastout != null) {
    //     console.log("logininfo if", this.logininfo, this.authcode)

    //     this.snackmsgbar = "Session expired, Kindly Sign in again.";
    //     setTimeout(function () {
    //       axiosThis.$router.push("/");
    //     }, 2000);
    //   } else {
    //     console.log("logininfo else", this.logininfo, this.authcode)

    //     this.snackmsgbar = "User not found, Kindly Sign in.";
    //     setTimeout(function () {
    //       axiosThis.$router.push("/");
    //     }, 2000);
    //   }
    //   this.snackbarclr = 'warning';
    //   localStorage.removeItem("lastway");
    // }
  },

  methods: {
    logout() {
      if ((this.cliname != null) && (this.ssologinfo == "ZebullOk") && (this.authcode != null)) {
        localStorage.removeItem("loginway");
        localStorage.removeItem("userid");
        localStorage.removeItem("usession");
        localStorage.removeItem("username");
        this.$router.push("/");
        window.location.reload();
      }
      // this.$router.push("/");
      // window.location.reload();
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
