<template>
  <v-row justify="center" class="fill-height">
    <v-col align-self="center" cols="4">
      <v-card color="grey-lighten-4">
        <v-form>
          <v-card-title>Sign In</v-card-title>
          <v-divider />

          <v-card-text>
            <v-text-field></v-text-field>
            <v-text-field></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="grey-lighten-2" block variant="elevated"
              >Sign In</v-btn
            >
            <v-spacer />
          </v-card-actions>
        </v-form>

        <v-divider />

        <v-card-actions>
          <v-spacer />
          <v-btn color="grey-lighten-2" block variant="elevated">Sign Up</v-btn>
          <v-spacer />
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "login",
});
</script>
