<template>
  <v-row justify="center" class="fill-height">
    <v-col align-self="center" cols="4">
      <login-form></login-form>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import LoginForm from "../components/LoginForm.vue";
definePageMeta({
  layout: "login",
});
</script>
