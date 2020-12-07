<template>
  <v-container id="transactions" fluid tag="section">
    <!-- <base-v-component
      heading="Cars at the Moment"
      link="components/simple-tables"
    /> -->

    <base-material-card
      icon="mdi-clipboard-text"
      title="Transactions"
      class="px-5 py-3"
      @sheetclick="test"
    >
      <v-row>
        <v-text-field v-model="carNo.carNumber" label="Car No."></v-text-field>
        <v-radio-group v-model="carNo.transactionType" row>
          <v-radio
            v-for="n in [0,1]"
            :key="n"
            :label="n==0?'Entry':'Exit'"
            :value="n"


          ></v-radio>
        </v-radio-group>
      </v-row>

      <v-data-table
        :headers="headers"
        :items="transactions"
        :options.sync="options"
        :server-items-length="count"
        :loading="!loaded"
        class="elevation-1"
      ></v-data-table>
      <!-- <v-simple-table>
        <thead>
          <tr>
            <th class="primary--text subtitle-1">Transaction No.</th>
            <th class="primary--text subtitle-1">Car No.</th>
            <th class="primary--text subtitle-1">User</th>
            <th class="primary--text subtitle-1">Transaction Time</th>
            <th class="primary--text subtitle-1">Type</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="trn in transactions" :key="trn.id">
            <td>{{ trn.id }}</td>
            <td>{{ trn.carNumber }}</td>
            <td>{{ trn.userId }}</td>
            <td>{{ new Date(trn.transaction_Time).toLocaleString() }}</td>
            <td>{{ trn.transactionType }}</td>
          </tr>
        </tbody>
      </v-simple-table> -->
    </base-material-card>

    <!-- <div class="py-3" />
    <base-material-card
      color="success"
      dark
      icon="mdi-clipboard-plus"
      title="Table on Dark Background"
      class="px-5 py-3"
    >
      <v-simple-table>
        <thead>
          <tr>
            <th class="primary--text subtitle-1">Transaction No.</th>
            <th class="primary--text subtitle-1">Car No.</th>
            <th class="primary--text subtitle-1">User</th>
            <th class="primary--text subtitle-1">Transaction Time</th>
            <th class="primary--text subtitle-1">Type</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="trn in transactions" :key="trn.id">
            <td>{{ trn.id }}</td>
            <td>{{ trn.carNumber }}</td>
            <td>{{ trn.userId }}</td>
            <td>{{ new Date(trn.transaction_Time).toLocaleString() }}</td>
            <td>{{ trn.transactionType }}</td>
          </tr>
        </tbody>
      </v-simple-table>
    </base-material-card> -->
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      options: {},
      carNo: {
        carNumber: "",
        transactionType:0
      },
      headers: [
        {
          text: "Transaction No.",
          align: "start",
          sortable: false,
          value: "id",
        },
        { text: "Car No.", value: "carNumber" },
        { text: "User", value: "userId" },
        { text: "Transaction Time", value: "transaction_Time" },

        { text: "Type", value: "transactionType" },
      ],
    };
  },
  computed: {
    ...mapState("transaction", {
      transactions: (state) => state.Transactions,
      loaded: (state) => state.loaded,
      count: (state) => state.count,
    }),
  },
  mounted() {
    this.$store.dispatch("transaction/index", this.options);
  },
  watch: {
    options: {
      handler() {
        this.$store.dispatch("transaction/index", this.options);
      },
      deep: true,
    },
  },
  methods: {
    test() {
      this.$store.dispatch("transaction/store", this.carNo);
      this.carNo.carNumber=""
    },
  },
};
</script>

<style>
</style>