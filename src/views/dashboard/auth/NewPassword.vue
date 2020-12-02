<template>
  <v-row justify="center" dense>
    <v-col cols="6">
      <v-card outlined>
        <v-card-title>
          {{ $t("new_password_form") }}
        </v-card-title>
        <v-card-text>
          <v-form class="mx-auto col-11" ref="form">
            <v-text-field
              v-model="user.passwrod"
              outlined
              rounded
              dense
              :label="email.label"
              prepend-inner-icon="mdi-lock"
              type="password"
            ></v-text-field>
            <v-text-field
              v-model="user.password"
              outlined
              rounded
              dense
              :label="email.label"
              prepend-inner-icon="mdi-lock"
              type="password"
            ></v-text-field>
            <v-btn block color="primary" @click="reset_password(user)">
              {{ $t("save") }}
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      email: {
        label: "Email",
      },
      password: {
        label: "Password",
      },
    };
  },
  methods: {
    ...mapActions(["login"]),
  },
  beforeCreate() {
    if (this.$store.state.auth.loggedIn) {
      this.$router.push("/");
    }
  },
};
</script>