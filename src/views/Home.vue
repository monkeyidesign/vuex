<template>
  <div class="home">
    <p>{{ titleStore }}</p>
    <p>{{ totalYear(dateOfBirth) }}</p>
    <p :title="title">testing</p>
    <button @click="clickedButton">clickedButton</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      title: "Samreaksa",
      dateOfBirth: 1983
    };
  },
  computed: mapState({
    titleStore: state => state.initialStore.titleData
  }),
  methods: {
    totalYear: dateOfBirth => {
      return new Date().getFullYear() - dateOfBirth;
    },
    clickedButton: () => alert("clickedButton")
  }
};
</script>
