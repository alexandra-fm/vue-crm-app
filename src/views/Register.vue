<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <span class="card-title">{{ "MainTitle" | localize }}</span>
      <div class="input-field">
        <input
          id="email"
          type="text"
          v-model.trim="email"
          :class="{
            invalid:
              ($v.email.$dirty && !$v.email.required) ||
              ($v.email.$dirty && !$v.email.email),
          }"
        />
        <label for="email">Email</label>
        <small
          class="helper-text invalid"
          v-if="$v.email.$dirty && !$v.email.required"
          >{{ "Message_EmailRequired" | localize }}
        </small>
        <small
          class="helper-text invalid"
          v-else-if="$v.email.$dirty && !$v.email.email"
          >{{ "Message_EmailInValid" | localize }}
        </small>
      </div>
      <div class="input-field">
        <input 
          id="password" 
          type="password" 
          v-model="password"
          :class="{
            invalid:
              ($v.password.$dirty && !$v.password.required) ||
              ($v.password.$dirty && !$v.password.minLength),
          }"
        />
        <label for="password">{{ "Password" | localize }}</label>
        <small 
          class="helper-text invalid"
          v-if="$v.password.$dirty && !$v.password.required"
          >{{ "Message_EnterPassword" | localize }}
        </small>
        <small 
          class="helper-text invalid" 
          v-else-if="$v.password.$dirty && !$v.password.minLength"
          >{{ "Message_PasswordMinLength" | localize }}
          {{ $v.password.$params.minLength.min }}. 
          {{ "Message_PasswordLength" | localize }}
          {{ password.length }}
        </small>
      </div>
      <div class="input-field">
        <input 
          id="name" 
          type="text"
          v-model.trim="name"
          :class="{
            invalid:
              ($v.name.$dirty && !$v.name.required) ||
              ($v.password.$dirty && !$v.password.minLength),
          }"
        />
        <label for="name">{{ "Name" | localize }}</label>
        <small
          class="helper-text invalid"
          v-if="$v.name.$dirty && !$v.name.required"
          >{{ "Message_NameRequired" | localize }}
        </small>
      </div>
      <p>
        <label>
          <input type="checkbox" v-model="agree"/>
          <span>{{ "Agreement" | localize }}</span>
        </label>
      </p>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          {{ "Register" | localize }}
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        {{ "HaveAccount" | localize }}
        <router-link to="/Login">{{ "Login" | localize }}</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import localizeFilter from "@/filters/localize.filter";
import { email, required, minLength } from "vuelidate/lib/validators";

export default {
  name: "register",
  data: () => ({
    email: "",
    password: "",
    name: "",
    agree: false,
  }),
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(6) },
    name: { required },
    agree: { checked: (v) => v },
  },
  metaInfo() {
    return { title: localizeFilter("Register") };
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const formData = {
        email: this.email,
        password: this.password,
        name: this.name,
      }

      try {
        await this.$store.dispatch("register", formData);
        this.$router.push("/");
        // eslint-disable-next-line no-empty
      } catch (e) {}
    },
  },
}
</script>
