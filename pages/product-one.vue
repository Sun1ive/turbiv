<template>
  <v-container>
    <v-layout justify-center align-center>
      <v-flex xs10 sm6 lg4>
        <h1>hello there</h1>
      </v-flex>
      <v-flex xs10 sm6 lg4>
        
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    obj: '',
  }),
  mounted() {
    console.log(this.$router);
    console.log(this.$route);
  },
};
</script>

<style scoped>

</style>
