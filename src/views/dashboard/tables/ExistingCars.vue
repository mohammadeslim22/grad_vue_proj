<template>
  <v-container id="existing-cars" fluid tag="section">
    <!-- <base-v-component
      heading="Cars at the Moment"
      link="components/simple-tables"
    /> -->

    <base-material-card
      icon="mdi-clipboard-text"
      title="Cars at the Moment"
      class="px-5 py-3"
    >
     <v-data-table
        :headers="headers"
        :items="cars"
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
            <th class="primary--text subtitle-1">State</th>
            <th class="text-right primary--text subtitle-1">Last Time Entry</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="car in cars" :key="car.id">
            <td>{{ car.id }}</td>
            <td>{{ car.carNumber }}</td>
            <td>{{ car.status }}</td>
            <td class="text-right">22-11-2020</td>
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
            <th class="primary--text subtitle-1">State</th>
            <th class="text-right primary--text subtitle-1">Last Time Entry</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="car in cars" :key="car.id">
            <td>{{ car.id }}</td>
            <td>{{ car.carNumber }}</td>
            <td>{{ car.status }}</td>
            <td class="text-right">22-11-2020</td>
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
        { text: "State", value: "status" },
        { text: "Entry Time ", value: "last_Time_entry" },

      ],
    };
  },
  computed: {
    ...mapState("car", {
      cars: (state) => state.cars,
      loaded: (state) => state.loaded,
      count: (state) => state.count,
    }),
  },
  mounted() {
    this.$store.dispatch("car/existedCars",this.options);
  },
    watch: {
    options: {
      handler() {
        this.$store.dispatch("car/existedCars", this.options);
      },
      deep: true,
    },
  },
};
</script>

<style>
</style>