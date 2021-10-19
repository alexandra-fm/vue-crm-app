<template>
  <div>
    <div class="page-title">
      <h3>{{ "ProfileTitle" | localize }}</h3>
    </div>

    <form class="form" @submit.prevent="submitHandler">
      <div class="input-field">
        <input
          id="description"
          type="text"
          v-model="name"
          :class="{
            invalid: $v.name.$dirty && !$v.name.required,
          }"
        />
        <label for="description">{{ "Name" | localize }}</label>
        <span
          class="helper-text invalid"
          v-if="$v.name.$dirty && !$v.name.required"
          >{{ "InvalidName" | localize }}</span
        >
      </div>

      <div class="switch">
        <label>
          Eng
          <input type="checkbox" v-model="isRuLocale" />
          <span class="lever"></span>
          Rus
        </label>
      </div>

      <button class="btn waves-effect waves-light" type="submit">
        {{ "Update" | localize }}
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>
</template>

<script>
import localizeFilter from "@/filters/localize.filter";
import { mapGetters, mapActions } from "vuex";
import { required } from "vuelidate/lib/validators";

export default {
  data: () => ({
    name: "",
    isRuLocale: true,
  }),
  validations: {
    name: { required },
  },
  metaInfo() {
    return { title: localizeFilter("ProfileTitle") };
  },
  computed: {
    ...mapGetters(["info"]),
  },
  mounted() {
    this.isRuLocale = this.info.locale === "ru-RU"
    this.name = this.info.name;
    setTimeout(() => {
      window.M.updateTextFields();
    }, 0);
  },
  methods: {
    ...mapActions(["updateInfo"]),
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }

      try {
        await this.updateInfo({
          name: this.name,
          locale: this.isRuLocale ? "ru-RU" : "en-US"
        })
        // eslint-disable-next-line no-empty
      } catch (e) {}
    },
  },
};
</script>

<style scoped>
.switch {
  margin-bottom: 2rem;
}
</style>
