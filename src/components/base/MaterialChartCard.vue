<template>
  <base-material-card
    class="v-card--material-chart"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-slot:heading>
      <chartist
        :data="c.data"
        :event-handlers="c.eventHandlers"
        :options="c.options"
        :ratio="c.ratio"
        :responsive-options="c.responsiveOptions"
        :type="c.type"
        style="max-height: 150px;"
      />
    </template>

    <slot
      slot="reveal-actions"
      name="reveal-actions"
    />

    <slot />

    <slot
      slot="actions"
      name="actions"
    />
  </base-material-card>
</template>

<script>
import { mapState } from "vuex";
  export default {
    name: 'MaterialChartCard',

    inheritAttrs: false,

    props: {
      data: {
        type: Object,
        default: () => ({}),
      },
      eventHandlers: {
        type: Array,
        default: () => ([]),
      },
      options: {
        type: Object,
        default: () => ({}),
      },
      ratio: {
        type: String,
        default: undefined,
      },
      responsiveOptions: {
        type: Array,
        default: () => ([]),
      },
      type: {
        type: String,
        required: true,
        validator: v => ['Bar', 'Line', 'Pie'].includes(v),
      },
    },
    computed:{
    ...mapState("statistics", {
      myseries: (state) => state.transactions,
      loaded:(state)=> state.loaded
    }),
    c:function(){
      return {
        data:this.data,
        eventHandlers: this.eventHandlers,
        options : this.options,
        ratio:this.ratio,
        responsiveOptions:this.responsiveOptions,
        type:this.type
      }
    }
},
  watch: {
    loaded: {
      handler() {
        console.log(this.emailsSubscriptionChart.data.series[0])
        console.log("this is before injection emailsSubscriptionChart.data")
        this.emailsSubscriptionChart.data.series[0]=this.myseries;
        console.log(this.emailsSubscriptionChart.data.series[0])
        console.log("watcher is watching ")
        this.$router.push("/");
      },
      deep: true,
    },
  },
  }
</script>

<style lang="sass">
  .v-card--material-chart
    p
      color: #999

    .v-card--material__heading
      max-height: 185px

      .ct-label
        color: inherit
        opacity: .7
        font-size: 0.975rem
        font-weight: 100

      .ct-grid
        stroke: rgba(255, 255, 255, 0.2)

      .ct-series-a .ct-point,
      .ct-series-a .ct-line,
      .ct-series-a .ct-bar,
      .ct-series-a .ct-slice-donut
          stroke: rgba(255,255,255,.8)

      .ct-series-a .ct-slice-pie,
      .ct-series-a .ct-area
          fill: rgba(255,255,255,.4)
</style>
