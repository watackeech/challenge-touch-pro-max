<template>
  <v-container fluid fill-height>
    <v-row align="center">
      <NuxtLink to="/tower">
        <NuxtImg
          class="tower-image"
          src="/images/tower.png"
          sizes="100vw sm:10vw md:10vw"
        />
      </NuxtLink>
      <NuxtImg src="/images/bg_school.jpg" sizes="100vw sm:100vw md:100vw" />
    </v-row>
    <NuxtLoadingIndicator />
  </v-container>
</template>

<style scoped>
.tower-image {
  position: absolute;
  left: 20%;
  top: 30%;
  transform: translateX(-50%);
}
</style>
