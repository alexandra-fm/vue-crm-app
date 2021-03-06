<template>
  <div>
    <div class="page-title">
      <h3>{{ "PlanningTitle" | localize }}</h3>
      <h4>{{ info.bill | currency("RUB") }}</h4>
    </div>

    <Loader v-if="loading" />

    <p class="center" v-else-if="!categories.length">
      {{ "NoData" | localize }}
      <router-link to="/Categories">{{
        "AddFirstCategory" | localize
      }}</router-link>
    </p>

    <section v-else>
      <div v-for="cat of categories" :key="cat.id">
        <p>
          <strong>{{ cat.title }}:</strong>
          {{ cat.spend | currency }} {{ "Of" | localize }} {{ cat.limit | currency }}
        </p>
        <div class="progress" v-tooltip="cat.tooltip" data-position="top">
          <div
            class="determinate"
            :class="[cat.progressColor]"
            :style="{ width: cat.progressPercent + '%' }"
          ></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import currencyFilter from "@/filters/currency.filter";
import localizeFilter from "@/filters/localize.filter";

export default {
  name: "planning",
  data: () => ({
    loading: true,
    categories: [],
  }),
  metaInfo() {
    return { title: localizeFilter("PlanningTitle") };
  },
  computed: {
    ...mapGetters(["info"])
  },
  async mounted() {
    // eslint-disable-next-line no-unused-vars
    const records = await this.$store.dispatch("fetchRecords");
    // eslint-disable-next-line no-unused-vars
    const categories = await this.$store.dispatch("fetchCategories");

    this.categories = await categories.map(cat => {
      const spend = records
        .filter((r) => r.categoryId === cat.id)
        .filter((r) => r.type === "outcome")
        .reduce((total, record) => {
          return (total += record.amount);
        }, 0);

      const percent = (100 * spend) / cat.limit;
      const progressPercent = percent > 100 ? 100 : percent;
      // eslint-disable-next-line prettier/prettier
      const progressColor = percent < 60
        ? 'green'
        : percent < 100
          ? 'yellow'
          : 'red';

      const tooltipValue = cat.limit - spend;
      const tooltip = `${
        tooltipValue < 0 ? localizeFilter("MoreThan") : localizeFilter("Stayed")
      }  ${currencyFilter(Math.abs(tooltipValue))}`;

      return {
        ...cat,
        progressPercent,
        progressColor,
        spend,
        tooltip,
      }
    })

    this.loading = false;
  },
}
</script>
