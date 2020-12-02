<template>
  <v-container id="user-profile" fluid tag="section">
    <v-row justify="left">
      <v-col cols="12" md="8">
        <base-material-card>
          <template v-slot:heading>
            <div class="display-2 font-weight-light">Settings</div>
            <div class="subtitle-1 font-weight-light">Update Your settings</div>
          </template>

          <v-form>
            <v-container class="py-0">
              <v-row>
                <v-col cols="12" md="8">
                  <v-text-field
                    v-model="settings[0].value"
                    :label="settings[0].Name"
                  />
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field
                    class="purple-input"
                    :label="settings[1].Name"
                    v-model="settings[1].value"
                  />
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    v-model="settings[2].value"
                    :label="settings[2].Name"
                    class="purple-input"
                  />
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="settings[3].value"
                    :label="settings[3].Name"
                    class="purple-input"
                  />
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field
                    label="Country"
                    class="purple-input"
                    disabled
                  />
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field
                    class="purple-input"
                    label="Postal Code"
                    type="number"
                    disabled
                  />
                </v-col>
                <v-col cols="12" class="text-right">
                  <v-btn color="success" class="mr-0" @click="update(settings)"> Save Settings </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return{
        setting: {
    }  
    }
  
  },
  computed: {
    ...mapState("settings", {
      settings: (state) => state.settings,
      loaded: (state) => state.loaded,
      count: (state) => state.count,
    }),
  },
  mounted() {
    this.$store.dispatch("settings/index");

  },
  methods:{
      ...mapActions("settings",["update"])
  }
};
</script>

<style>
</style>