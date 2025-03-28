<template>
  <div>
    <button class="buy-button" @click="expand()">Buy Now</button>
    <div v-if="this.options" class="container">
      <div v-for="option in this.options" :key="option.link">
        <div ref="buyButton" class="buy-buttons">
          <a href="option.link"
            ><button class="buy-button">{{ option.name }}</button></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Buy",
  props: {
    options: {
      type: Array,
      default: () => [],
    },
  },
  components: {},
  data() {
    return { drawerOpen: false, counter: 0 };
  },
  mounted() {},
  methods: {
    expand() {
      // Loop through all the buyButton refs
      this.$refs.buyButton.forEach((button) => {
        if (this.counter % 2 === 0) {
          button.classList.remove("fadeSlideB");
          button.classList.add("fadeSlideF");
        } else {
          button.classList.remove("fadeSlideF");
          button.classList.add("fadeSlideB");
        }
      });
      this.counter++;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  width: 80%;
  flex-wrap: wrap;
}

.container div {
  padding: 1rem 1rem 1rem 0;
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
  font-family: "STIXTwo";
}

.buy-button {
  font-size: 1.4rem;
  padding: 0.5rem 1rem;
  font-family: "STIXTwo";
  min-width: 8rem;
  min-height: 5rem;
  padding-left: 0;
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
  height: 100%;
  padding: 0 1rem;
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
    width: 100%;
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
