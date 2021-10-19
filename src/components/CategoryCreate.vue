/* eslint-disable no-empty */
<template>
  <div class="col s12 m6">
    <div>
      <div class="page-subtitle">
        <h4>{{ "Сreate" | localize }}</h4>
      </div>

      <form @submit.prevent="submitHandler">
        <div class="input-field">
          <input 
            id="name" 
            type="text"
            v-model="title"
            :class="{ 
              invalid: $v.title.$dirty && !$v.title.required 
            }"
          />
          <label for="name">{{ "Title" | localize }}</label>
          <span 
            class="helper-text invalid"
            v-if="$v.title.$dirty && !$v.title.required"
          >
            {{ "Message_EnterCategoryTitle" | localize }}
          </span>
        </div>

        <div class="input-field">
          <input 
            id="limit"
            type="number"
            v-model.number="limit"
            :class="{ 
              invalid: $v.limit.$dirty && !$v.limit.minValue 
            }"
          />
          <label for="limit">{{ "Limit" | localize }}</label>
          <span 
            class="helper-text invalid"
            v-if="$v.limit.$dirty && !$v.limit.minValue"
          >
            {{ "Message_MinValue" | localize }}
            {{ $v.limit.$params.minValue.min }}
          </span>
        </div>

        <button class="btn waves-effect waves-light" type="submit">
          {{ "Сreate" | localize }}
          <i class="material-icons right">send</i>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import localizeFilter from "@/filters/localize.filter";
import { required, minValue } from "vuelidate/lib/validators";

export default {
  data: () => ({
    title: "",
    limit: 10,
  }),
  validations: { 
    title: { required },
    limit: { required, minValue: minValue(10) },
  },
  mounted() {
    window.M.updateTextFields();
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }

      try {
        // eslint-disable-next-line no-unused-vars
        const category = await this.$store.dispatch("createCategory", {
          title: this.title,
          limit: this.limit,
        });

        this.title = "";
        this.limit = 10;
        this.$v.$reset();
        this.$message(localizeFilter("Message_CreateCategory"));
        this.$emit("created", category);
      // eslint-disable-next-line no-empty
      } catch (e) {}
    }
  }
}
</script>