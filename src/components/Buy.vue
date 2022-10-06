<template>
  <div class="container">
    <button class="buy-button" @click="expand()">Buy Now</button>
    <div ref="buyButton" class="buy-buttons">
      <a
        href="https://www.amazon.co.uk/Sixth-Amulet-epic-historical-fantasy-ebook/dp/B0BG8T8ZCN/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1664559617&sr=8-1"
        ><button class="buy-button">Kindle</button></a
      >
      <a
        href="https://www.amazon.co.uk/Sixth-Amulet-epic-historical-fantasy/dp/1739744926/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1664559617&sr=8-1"
        ><button class="buy-button">Hardback</button></a
      >
      <a
        href="https://www.amazon.co.uk/Sixth-Amulet-epic-historical-fantasy/dp/173974490X/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1664559617&sr=8-1"
        ><button class="buy-button">Softback</button></a
      >
      <a
        href="https://www.bookdepository.com/The-Sixth-Amulet-Miriam-Maddock/9781739744908"
        ><button class="buy-button">Book Depository</button></a
      >
      <a
        href="https://www.goodreads.com/book/show/62695806-the-sixth-amulet?ac=1&from_search=true&qid=XYsCzR4I31&rank=1"
        ><button class="buy-button">Goodreads</button></a
      >
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
  font-family: "STIXTwo";
}

.buy-button {
  font-size: 1.4rem;
  padding: 0.5rem 1rem;
  font-family: "STIXTwo";
  min-width: 8rem;
  min-height: 5rem;
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
