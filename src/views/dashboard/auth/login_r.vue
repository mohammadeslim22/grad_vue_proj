<template>
  <div
    :style="{
      'background-image': 'url(' + require('@/assets/login.jpg') + ')',
    }"
  >
    <v-row justify="center" dense style="height: 100vh">
      <v-col cols="3"></v-col>
      <v-col cols="6">
        <v-card outlined>
          <v-card-title> {{ $t("login") }} </v-card-title>
          <v-card-text>
            <v-form class="mx-auto col-11" ref="form">
              <v-text-field
                v-model="user.empUserName"
                outlined
                rounded
                dense
                :label="$t('email')"
                prepend-inner-icon="fas fa-envelope"
                type="email"
              ></v-text-field>
              <v-text-field
                v-model="user.empPassword"
                outlined
                rounded
                dense
                :label="$t('password')"
                prepend-inner-icon="fas fa-lock"
                type="password"
              ></v-text-field>
              <div class="col-12 text-center">
                <v-btn text class="text-justify" to="/reset_password">{{
                  $t("forgot_password")
                }}</v-btn>
              </div>
              <v-btn block color="primary" @click="login(user)">
                {{ $t("login") }}
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
window.axios = require("axios").create({
  headers: {
    "Content-Type": "application/json",
  },
});

export default {
  data() {
    return {
      user: {
        empUserName: "",
        empPassword: "",
      },
      email: {
        label: "Email",
      },
      password: {
        label: "Password",
      },
      roles: [
        {
          id: 0,
          name: this.$t("user"),
        },
        {
          id: 1,
          name: this.$t("admin"),
        },
      ],
    };
  },
  mounted() {},
  computed: mapState({
    logged: (state) => state.auth.logged,
  }),
  watch: {
    logged: function (value) {
      if (value) {
        this.$router.push("/");
      }
    },
  },
  methods: {
    ...mapActions("auth", ["login"]),
  },
  beforeCreate() {
    if (this.$store.state.auth.logged) {
      this.$router.push("/");
    }
  },
};
</script>