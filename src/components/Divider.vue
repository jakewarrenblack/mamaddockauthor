<template>
  <header>
    <div class="container">
      <div class="divider">♦</div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Divider",
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
@import "../assets/colors.css";

.container {
  /* width: 100vw; */
  min-height: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--silver);
}
.divider {
  font-family: "Share Tech Mono", monospace;
  color: var(--white);
  font-size: 6vh;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.45);

  display: flex;
  justify-content: center;
  align-items: center;
}

.divider::before,
.divider::after {
  content: "";
  display: block;
  height: 0.035em;
  min-width: 30vw;
}

.divider::before {
  background: linear-gradient(to left, rgba(999, 999, 999, 1), var(--silver));
  margin-right: 4vh;
}

.divider::after {
  background: linear-gradient(to right, rgba(999, 999, 999, 1), var(--silver));
  margin-left: 4vh;
}
</style>
