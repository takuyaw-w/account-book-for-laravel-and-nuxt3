<template>
  <v-app class="original-gradient">
    <v-main>
      <v-container class="fill-height">
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
.original-gradient {
  background-image: linear-gradient(
    90deg,
    rgba(187, 252, 168, 1),
    rgba(194, 255, 233, 1)
  );
}
</style>
