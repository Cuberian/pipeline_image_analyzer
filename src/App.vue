<template>
  <v-app>
    <v-app-bar
      app
      color="green"
      dark
    >
      <span class="mr-2 text-h4">PIPELINE IMAGE ANALYZER</span>
    </v-app-bar>

    <v-main class="mt-6">
      <v-card
        elevation="0"
        width="30vw"
        height="75vh"
        style="border: 1px solid gray; margin-left: 50px">
        <v-card-title>
          Фильтры:
        </v-card-title>
        <hr/>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
