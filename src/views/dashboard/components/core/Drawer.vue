<template>
  <v-navigation-drawer
    id="core-navigation-drawer"
    v-model="drawer"
    :dark="barColor !== 'rgba(28, 26, 26, 1), rgba(55, 55, 55, 0.7)'"
    :expand-on-hover="expandOnHover"
    :right="$vuetify.rtl"
    :src="barImage"
    mobile-break-point="60"
    app
    width="260"
    v-bind="$attrs"
  >
    <template v-slot:img="props">
      <v-img :gradient="`to bottom, ${barColor}`" v-bind="props" />
    </template>

    <v-divider class="mb-1" />

    <v-list dense nav>
      <v-list-item>
        <v-list-item-avatar class="align-self-center" color="white" contain>
          <v-img
            src="https://images.unsplash.com/photo-1578859695220-856a4f5edd39?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGFya2luZ3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
            max-height="50"
          />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="display" v-text="profile.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider class="mb-2" />

    <v-list expand nav>
      <div />

      <template v-for="(item, i) in computedItems">
        <base-item-group v-if="item.children" :key="`group-${i}`" :item="item">
        </base-item-group>

        <base-item v-else :key="`item-${i}`" :item="item" />
      </template>

      <!-- Style cascading bug  -->
      <!-- https://github.com/vuetifyjs/vuetify/pull/8574 -->
      <div />
    </v-list>

    <template v-slot:append>
    <!-- //  <v-btn @click="logout"> -->
        <base-item
          :item="{
            click:logout,
            title: $t('Log Out'),
            icon: 'mdi-logout',
          }"
        />
      <!-- </v-btn> -->
    </template>
  </v-navigation-drawer>
</template>

<script>
// Utilities
import { mapActions, mapState } from "vuex";

// import { mapState } from "vuex";

export default {
  name: "DashboardCoreDrawer",

  props: {
    expandOnHover: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    items: [
      {
        icon: "mdi-view-dashboard",
        title: "dashboard",
        to: "/",
      },
      {
        icon: "mdi-account",
        title: "user",
        to: "/pages/user",
      },
      {
        icon: "mdi-account",
        title: "timeline",
        to: "/pages/timeline",
      },
      // {
      //   icon: "mdi-account",
      //   title: "rtl",
      //   to: "/pages/rtl",
      // },
      {
        title: "rcars",
        icon: "mdi-clipboard",
        to: "/tables/registered-cars",
      },
      {
        title: "ecars",
        icon: "mdi-clipboard-outline",
        to: "/tables/existing-cars",
      },
      {
        title: "transactions",
        icon: "mdi-truck-fast",
        to: "/tables/transactions",
      },
      {
        title: "invoices",
        icon: "mdi-chart-bubble",
        to: "/tables/invoices",
      },
      {
        title: "settings",
        icon: "mdi-react",
        to: "/pages/settings",
      },
    ],
  }),

  computed: {
    ...mapState(["barColor", "barImage"]),
    ...mapState("auth", ["logged"]),

    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set(val) {
        this.$store.commit("SET_DRAWER", val);
      },
    },
    computedItems() {
      return this.items.map(this.mapItem);
    },
    profile() {
      return {
        avatar: true,
        title: this.$t("Parking Billing System"),
      };
    },
  },

  methods: {
    mapItem(item) {
      return {
        ...item,
        children: item.children ? item.children.map(this.mapItem) : undefined,
        title: this.$t(item.title),
      };
    },
    ...mapActions("auth", ["logout"]),
  },
  watch: {
    logged: {
      handler() {
        this.$router.push("/login");
      },
      deep: true,
    },
  },
};
</script>

<style lang="sass">
@import '~vuetify/src/styles/tools/_rtl.sass'

#core-navigation-drawer
  .v-list-group__header.v-list-item--active:before
    opacity: .24

    .v-list-item
      &__icon--text,
      &__icon:first-child
        justify-content: center
        text-align: center
        width: 20px

        +ltr()
        margin-right: 24px
        margin-left: 12px !important

        +rtl()
        margin-left: 24px
        margin-right: 12px !important

    .v-list--dense
      .v-list-item
        &__icon--text,
        &__icon:first-child
          margin-top: 10px

    .v-list-group--sub-group
      .v-list-item
        +ltr()
        padding-left: 8px

        +rtl()
        padding-right: 8px

      .v-list-group__header
        +ltr()
        padding-right: 0

        +rtl()
        padding-right: 0

        .v-list-item__icon--text
          margin-top: 19px
          order: 0

        .v-list-group__header__prepend-icon
          order: 2

          +ltr()
          margin-right: 8px

          +rtl()
          margin-left: 8px
</style>
