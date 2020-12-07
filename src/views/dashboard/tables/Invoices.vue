<template>
  <v-container id="invoices" fluid tag="section">
    <!-- <base-v-component
      heading="Cars at the Moment"
      link="components/simple-tables"
    /> -->

    <base-material-card
      icon="mdi-clipboard-text"
      title="Invoices"
      class="px-5 py-3"
    >
      <v-data-table
        :headers="headers"
        :items="invoices"
        :options.sync="options"
        :server-items-length="count"
        :loading="!loaded"
        class="elevation-1"
      ></v-data-table>
      <!-- <v-simple-table>
        <thead>
          <tr>
            <th class="primary--text subtitle-1">ID</th>
            <th class="primary--text subtitle-1">Car No.</th>
            <th class="primary--text subtitle-1">User</th>
            <th class="primary--text subtitle-1">Amount</th>
            <th class="primary--text subtitle-1">Total Hours</th>
            <th class="primary--text subtitle-1">Time</th>
            <th class="text-right primary--text subtitle-1">Hourly rate</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="inv in invoices" :key="inv.id">
            <td>{{ inv.id }}</td>
            <td>{{ inv.carNumber }}</td>
            <td>{{ inv.userId }}</td>
            <td>{{ inv.invoiceAmount }}</td>
            <td>{{ inv.totalHors }}</td>
            <td>{{ new Date(inv.time).toLocaleString() }}</td>
            <td class="text-right">{{ inv.InvoiceHourNumber }}</td>
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
            <th class="primary--text subtitle-1">ID</th>
            <th class="primary--text subtitle-1">Car No.</th>
            <th class="primary--text subtitle-1">User</th>
            <th class="primary--text subtitle-1">Amount</th>
            <th class="primary--text subtitle-1">Total Time</th>
            <th class="text-right primary--text subtitle-1">Time</th>
            <th class="primary--text subtitle-1">Hourly rate</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="inv in invoices" :key="inv.id">
            <td>{{ inv.id }}</td>
            <td>{{ inv.carNumber }}</td>
            <td>{{ inv.userId }}</td>
            <td>{{ inv.invoiceAmount }}</td>
            <td>{{ inv.totalHors }}</td>
            <td>{{ new Date(inv.time).toLocaleString() }}</td>
            <td class="text-right">{{ inv.InvoiceHourNumber }}</td>
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
      headers: [
        {
          text: "ID",
          align: "start",
          sortable: false,
          value: "id",
        },
        { text: "Car No.", value: "carNumber" },
        { text: "User", value: "userId" },
        { text: "Amount", value: "invoiceAmount" },

        { text: "Total Time", value: "totalHors" },
        { text: "Issue Date", value: "time" },
        { text: "Invoice Hour Rate", value: "InvoiceHourNumber" },
      ],
    };
  },
  computed: {
    ...mapState("invoice", {
      invoices: (state) => state.invoices,
      loaded: (state) => state.loaded,
      count: (state) => state.count,
    }),
  },
  mounted() {
    this.$store.dispatch("invoice/index");
  },
  watch: {
    options: {
      handler() {
        this.$store.dispatch("invoice/index", this.options);
      },
      deep: true,
    },
  },
};
</script>

<style>
</style>