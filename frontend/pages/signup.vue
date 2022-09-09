<template>
  <v-row justify="center" class="fill-height">
    <v-col align-self="center" cols="4">
      <SignupForm></SignupForm>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import SignupForm from "../components/SignupForm.vue";
definePageMeta({
  layout: "login",
});
</script>
