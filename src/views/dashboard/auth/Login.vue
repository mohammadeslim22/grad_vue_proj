<template>
  <div class="container" id="secure">
    <v-container id="login">
      <v-layout row  id="pad">
        <v-flex xs6 sm6 offset-sm3>
          <v-card>
            <v-card-text>
              <v-container>
                <form @submit.prevent="onSignup">
                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field
                        name="email"
                        label="Mail"
                        id="email"
                        v-model="email"
                        type="email"
                        required
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field
                        name="password"
                        label="Password"
                        id="password"
                        v-model="password"
                        type="password"
                        required
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field
                        name="confirmPassword"
                        label="Confirm Password"
                        id="confirmPassword"
                        v-model="confirmPassword"
                        type="password"
                        :rules="[comparePasswords]"
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs12>
                      <v-btn type="submit">Sign up</v-btn>
                    </v-flex>
                  </v-layout>
                </form>
              </v-container>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  computed: {
    comparePasswords() {
      return this.password !== this.confirmPassword
        ? "Passwords do not match"
        : "";
    },
    user() {
      return this.$store.getters.user;
    },
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push("/");
      }
    },
  },
  methods: {
    onSignup() {
      this.$store.dispatch("signUserUp", {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<style scoped>
#secure {
  background-color: #585858;
  border: 1px solid #8317ff;
  padding: 20px;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
}
#login {
  width: 1000px;
  border: 1px solid #0b37ff;
  background-color: #6a34ff;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
  position: relative;
}
#pad {
  margin-left: auto;
  margin-right: auto;
  margin: auto;
   position: relative;
  /* top: 50%;
  left: 50%; */
  /* margin-right: -50%; */
  /* transform: translate(-50%, -50%); */
}
</style>