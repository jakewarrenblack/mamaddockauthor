<template>
  <div class="container">
    <button class="buy-button" @click="expand()">Buy Now</button>
    <div ref="buyButton" class="buy-buttons">
      <button class="buy-button">Amazon</button>
      <button class="buy-button">Goodreads</button>
      <button class="buy-button">Easons</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Buy",
  components: {},
  data() {
    return { drawerOpen: false, counter: 0 };
  },
  mounted() {},
  methods: {
    expand() {
      console.log("yeehaw");
      if (this.counter % 2 == 0) {
        this.$refs.buyButton.classList.remove("fadeSlideB");
        this.$refs.buyButton.classList.add("fadeSlideF");
      } else {
        this.$refs.buyButton.classList.remove("fadeSlideF");
        this.$refs.buyButton.classList.add("fadeSlideB");
      }
      this.counter++;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
}

.buy-buttons {
  opacity: 0;
  display: none;
}

.fadeSlideF {
  display: flex;
  animation: fadeSlideF 0.5s ease-in-out forwards;
}

.fadeSlideB {
  display: flex;
  animation: fadeSlideB 0.5s ease-in-out backwards;
}

.buy-buttons button {
  margin: auto 2rem;
}

.buy-button {
  font-size: 1.4rem;
  padding: 0.5rem 1rem;
}

.buy-button {
  background: var(--crimson);
  border: none;
  color: var(--white);
}

.buy-buttons button {
  color: var(--white);
  border: 2px solid var(--crimson);
  background: transparent;
}

button:hover {
  cursor: pointer;
}

@media only screen and (max-width: 767px) {
  .container {
    flex-direction: column;
    width: 100%;
  }

  .fadeSlideB {
    display: none;
  }

  .buy-buttons {
    margin-top: 1rem;
    /* display: flex; */
    flex-direction: column;
  }

  .buy-buttons button {
    margin: 1rem 0;
  }

  .fadeSlideF {
    animation: fadeSlideF_mobile 0.5s ease-in-out forwards;
  }

  .fadeSlideB {
    animation: fadeSlideB_mobile 0.5s ease-in-out backwards;
  }
}

@keyframes fadeSlideF_mobile {
  0% {
    opacity: 0;
    transform: translateY(-20%);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
@keyframes fadeSlideB_mobile {
  0% {
    opacity: 1;
    transform: translateY(0%);
  }
  100% {
    opacity: 0;
    transform: translateY(-20%);
    display: none !important;
  }
}

@keyframes fadeSlideF {
  0% {
    opacity: 0;
    transform: translateX(-20%);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}
@keyframes fadeSlideB {
  0% {
    opacity: 1;
    transform: translateX(0%);
  }
  100% {
    opacity: 0;
    transform: translateX(-20%);
  }
}
</style>
