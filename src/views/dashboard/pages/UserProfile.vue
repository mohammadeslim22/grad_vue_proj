<template>
  <v-container id="user-profile" fluid tag="section">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <base-material-card>
          <template v-slot:heading>
            <div class="display-2 font-weight-light">Edit Profile</div>

            <div class="subtitle-1 font-weight-light">
              Complete your profile
            </div>
          </template>

          <v-form>
            <v-container class="py-0">
              <v-row>
                <v-col cols="12" md="4">
                  <v-text-field
                    class="purple-input"
                    label="User Name"
                    v-model="user.empName"
                  />
                </v-col>

                <v-col cols="12" md="8">
                  <v-text-field
                    label="Email Address"
                    class="purple-input"
                    v-model="user.empUserName"
                  />
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field
                    label="First Name"
                    class="purple-input"
                    v-model="user.firstName"
                  />
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field
                    label="Last Name"
                    class="purple-input"
                    v-model="user.lastName"
                  />
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    label="Adress"
                    class="purple-input"
                    v-model="user.empAddress"
                  />
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field label="City" disabled class="purple-input" />
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field label="Country" disabled class="purple-input" />
                </v-col>
                <v-col cols="12" class="text-right">
                  <v-btn color="success" class="mr-0" @click="update(user)">
                    Update Profile
                  </v-btn>
                </v-col>

                <!-- <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    class="purple-input"
                    label="Postal Code"
                    type="number"
                    disabled
                  />
                </v-col>

                <v-col cols="12">
                  <v-textarea
                    class="purple-input"
                    label="About Me"
                    value="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  />
                </v-col>

                <v-col
                  cols="12"
                  class="text-right"
                >
                  <v-btn
                    color="success"
                    class="mr-0"
                  >
                    Update Profile
                  </v-btn>
                </v-col> -->
              </v-row>
            </v-container>
          </v-form>
        </base-material-card>
      </v-col>

      <v-col cols="12" md="4" v-if="user.role == 1">
        <base-material-card
          class="v-card-profile"
          avatar="https://images.pexels.com/photos/1209978/pexels-photo-1209978.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        >
          <v-card-text class="text-center">
            <h6 class="display-1 mb-1 grey--text">Prking Manager</h6>

            <h4 class="display-2 font-weight-light mb-3 black--text">
              {{ user.empName }}
            </h4>

            <p class="font-weight-light grey--text"></p>
            <v-dialog v-model="dialog" persistent max-width="600px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="success"
                  rounded
                  class="mr-0"
                  v-bind="attrs"
                  v-on="on"
                >
                  Add Employee
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="headline">User Profile</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          label="user name*"
                          required
                          v-model="newUser.empName"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          label=" first name*"
                          required
                          hint="employee last name"
                          v-model="newUser.firstName"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          label=" last name*"
                          hint="employee last name"
                          persistent-hint
                          required
                          v-model="newUser.lastName"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          label="Email*"
                          required
                          v-model="newUser.empUserName"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          label="Password*"
                          required
                          type="password"
                          v-model="newUser.empPassword"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          label="Address*"
                          type="Email"
                          required
                          v-model="newUser.empAddress"
                        ></v-text-field>
                      </v-col>
                      <!-- <v-col cols="12" md="6" sm="6">
                        <v-text-field
                          label="City"
                          disabled
                          class="purple-input"
                        />
                      </v-col>

                      <v-col cols="1" md="6" sm="6">
                        <v-text-field
                          label="Country"
                          disabled
                          class="purple-input"
                        />
                      </v-col> -->
                      <v-col cols="1" md="10">
                        <small>*indicates required field</small>
                      </v-col>
                      <v-col cols="1" md="2">
                        <v-switch
                          v-model="newUser.role"
                          :label="newUser.role ? 'Admin' : 'User'"
                        ></v-switch>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="dialog = false">
                    Close
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="register">
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-card-text>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      currentuser: {},
      dialog: false,
      // adminSwitch: false,
      newUser: {
        firstName: "",
        lastName: "",
        empUserName: "",
        empPassword: "",
        empAddress: "",
        empName: "",
        role: false,
        // role: this.adminSwitch ==true? 1 : 0,
      },
    };
  },
  computed: {
    ...mapState("auth", {
      user: (state) => state.user,
    }),
  },
  mounted() {
    // this.$store.dispatch("auth/index");
  },
  methods: {
    ...mapActions("auth", ["update"]),
    register() {
      this.dialog = false;
      this.$store.dispatch("auth/store", this.newUser);
      this.newUser.firstName="";
      this.newUser.lastName="";
      this.newUser.empUserName="";
      this.newUser.empPassword="";
      this.newUser.empAddress="";
      this.newUser.empName=""
      this.newUser.role=false;
    },
  },
};
</script>
