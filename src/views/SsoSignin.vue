<template>
  <div class="signupbgclr">
    <v-container fill-height class="SsoView">
      <v-card class="mx-auto my-auto elevation-0 py-8 pb-1 rounded-lg text-center">
        <div class="px-4 px-sm-6 px-md-8">
          <div class="pb-4">
            <img src="@/assets/Mynt_pro_logo.svg" width="40%">
          </div>
          <div class="pb-16">
            <img src="@/assets/tvlogo.svg" width="60%">
          </div>

          <!-- <img src="@/assets/Group 277.svg" class="mt-2 mb-6" width="100%"> -->
          <v-card-action>

            <v-btn to="/tv" outlined plain :ripple="false" block large class="btnout mb-2 rounded-md">
              <span style="color:black;">
                sign in with ZEBULL
              </span>
            </v-btn>

            <v-row no-gutters class="my-4">
              <v-col cols="5">
                <v-divider class="mx-2 mt-2" color="#DBE3EA"></v-divider>
              </v-col>
              <v-col cols="2">
                <p class="text-center caption mb-0"> or </p>
              </v-col>
              <v-col cols="5">
                <v-divider class="mx-2 mt-2" color="#DBE3EA"></v-divider>
              </v-col>
            </v-row>

            <v-btn href="https://oa.zebull.in" target="_blank" outlined plain :ripple="false" block large
              class="btnout mb-2 rounded-md"><span style="color:black;">
                Open an account
              </span></v-btn>
          </v-card-action>

          <v-card-subtitle style="font-size:11px;" class="text-center">
            <p style="color:#858B95;">By continuing with ZEBU, you agree our Terms and Privacy Policy
            </p>
          </v-card-subtitle>
        </div>
      </v-card>
    </v-container>
  </div>
</template>

<script>
// import { appurl } from "../../apiUrl.js";

export default {
  data: () => ({}),
  methods: {
    // signin() {
    //   // console.log("pressed");
    //   location.href = `https://zebull.in/?mode=SSO&vendor=MyZebu&redirectUrl=${appurl}/gsec`;

    // },
  },
};
</script>

<style>
.v-application,
.v-application .display-1,
.v-application .headline,
.v-application .title,
.v-application .subtitle-1,
.v-application .subtitle-2,
.v-application .body-1,
.v-application .body-2,
.v-application .caption,
.v-application .overline {
  font-family: -apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif !important;
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;
}

.btnout {
  border: thin solid rgba(0, 0, 0, 0.12) !important;
}

::-webkit-scrollbar {
  width: 0;
}

.signupbgclr {
  background-color: white !important;
  height: 100vh !important;
  overflow-y: hidden !important;
}

.SsoView {
  height: 100vh !important;
  overflow-y: scroll !important;
}

@media only screen and (max-width: 600px) {
  .signupbgclr {
    background-color: white !important;
  }

  .btn:hover {
    background-color: #ECEEF0 !important;
  }
}
</style>