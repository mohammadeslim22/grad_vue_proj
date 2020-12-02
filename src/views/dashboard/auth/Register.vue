<template>
  <v-row justify="center" dense>
    <v-col cols="6">
      <v-card outlined>
        <v-card-title> {{ $t("register_new_tenant") }} </v-card-title>
        <v-card-text>
          <v-form class="mx-auto col-11" ref="form">
            <v-text-field
              v-model="user.name"
              outlined
              rounded
              dense
              :label="$t('name')"
              prepend-inner-icon="fas fa-user"
              type="email"
            ></v-text-field>
            <v-text-field
              v-model="user.username"
              outlined
              rounded
              dense
              :label="$t('username')"
              prepend-inner-icon="fas fa-user"
              type="email"
              :rules="rules.unique_username"
              validate-on-blur
            ></v-text-field>
            <v-text-field
              v-model="user.address"
              outlined
              rounded
              dense
              :label="$t('address')"
              prepend-inner-icon="fas fa-map-marker-alt"
              type="text"
            ></v-text-field>
            <v-text-field
              v-model="user.email"
              outlined
              rounded
              dense
              :label="$t('email')"
              prepend-inner-icon="fas fa-envelope"
              type="email"
              :rules="rules.unique_user_email"
              validate-on-blur
            ></v-text-field>
            <v-text-field
              v-model="user.password"
              outlined
              rounded
              dense
              :label="$t('password')"
              prepend-inner-icon="fas fa-lock"
              type="password"
            ></v-text-field>
            <v-text-field
              v-model="user.subdomain"
              outlined
              rounded
              dense
              :label="$t('subdomain')"
              prepend-inner-icon="fas fa-globe"
              type="text"
              :rules="rules.unique_subdmain"
              validate-on-blur
            ></v-text-field>

            <div class="col-12 text-center">
              <v-btn text class="text-justify" to="/login">{{
                $t("already_have_account")
              }}</v-btn>
            </div>
            <v-btn block dark color="primary" @click="register(user)">
              {{ $t("register") }}
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      menu: false,
      date: null,
      user: {
        data: {
          username: "",
          display_name: "",
          email: "",
          password: "",
          birth_date: null,
        },
        labels: {
          username: this.$t("username"),
          display_name: this.$t("display_name"),
          email: this.$t("email"),
          password: this.$t("password"),
          birth_date: this.$t("birth_date"),
        },
      },
      rules: {
        unique_username: [
          (username) => {
            if (username.length > 0) {
              this.$store.dispatch("tenant/index", {
                name: "username",
                value: username,
              });
              if (this.all.length != 0) return this.$t("username_is_used");
              else return true;
            }
            return true;
          },
        ],
        unique_user_email: [
          (email) => {
            if (email.length > 0) {
              this.$store.dispatch("tenant/index", {
                name: "email",
                value: email,
              });
              if (this.all.length != 0) return this.$t("email_is_used");
              else return true;
            }
            return true;
          },
        ],
        unique_subdmain: [
          (subdomain) => {
            if (subdomain.length > 0) {
              this.$store.dispatch("tenant/index", {
                name: "subdomain",
                value: subdomain,
              });
              if (this.all.length != 0) return this.$t("subdomain_is_used");
              else return true;
            }
            return true;
          },
        ],
      },
      errors: {},
    };
  },
  methods: {

    ...mapActions(["register"]),
    save(date) {
      this.$refs.menu.save(date);
    },
  },
  computed: {
    ...mapState("tenant", ["all"]),
  },
  beforeCreate() {
    if (this.$store.state.auth.loggedIn) {
      this.$router.push("/");
    }
  },
};
</script>