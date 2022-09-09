<script setup lang="ts">
import { mdiKey, mdiEmail } from "@mdi/js";
</script>

<template>
  <v-card>
    <v-form>
      <v-card-title>Sign In</v-card-title>
      <v-divider />

      <v-card-text>
        <v-text-field label="Email" :prepend-icon="mdiEmail"></v-text-field>
        <v-text-field
          type="password"
          label="Password"
          :prepend-icon="mdiKey"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          type="submit"
          size="large"
          color="primary"
          block
          variant="elevated"
          >Sign In</v-btn
        >
        <v-spacer />
      </v-card-actions>
    </v-form>

    <v-divider />

    <v-card-actions>
      <v-spacer />
      <v-btn
        size="large"
        color="secondary"
        to="/signup"
        block
        variant="elevated"
        >Sign Up</v-btn
      >
      <v-spacer />
    </v-card-actions>
  </v-card>
</template>
