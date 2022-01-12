<template>
  <div id="container">
    <div id="nav_header_contain">
      <Navbar />
      <section id="header">
        <div class="header_container">
          <div class="hero_text">
            <h3 class="author_short_desc">Lorem ipsum Ipsum Dolor Sit Amet</h3>
            <h1 class="author_name">M.A Maddock</h1>
          </div>
          <div class="img_contain">
            <div class="img_contain_content">
              <h4 class="two-rem STIXTwo">Latest Release</h4>
              <h2 class="four-rem STIXTwo">Title of book to be re-released</h2>
            </div>
          </div>
        </div>
      </section>
    </div>

    <section id="short_bio">
      <div class="short_bio_container">
        <h6>
          M. A. Maddock is an Irish author, currently living in Dublin, Ireland.
        </h6>
      </div>
    </section>
    <Divider />
    <section id="full_bio">
      <div
        class="full_bio_container d-flex justify-space-between align-items-center"
      >
        <div class="author_image"></div>
        <div class="author_bio_text">
          <h2 class="author_bio_title">About the Author</h2>
          <h5 class="author_bio_body">
            Asking an Irish person to write a ‘few’ words about themselves is,
            putting it mildly, almost impossible! But, here goes. I was born and
            raised in Dublin, Ireland. Having dabbled in other ‘interests’ over
            the years (I won’t bore you), in the background, however, I was
            always an avid reader, with words constantly floating around in my
            mind yet doing nothing about them, in a literary sense. I used to
            always say, ‘One day, I’ll write that book,’ but never seemed to get
            around to doing it. I think the mere thought of putting those
            words—along with my imagination—to literary use was daunting,
            therefore, always putting it off. That is, until 2011 when I finally
            took the plunge and picked up that pen and notebook (still have
            them, too). I began to string those words into sentences, then
            paragraphs, then pages, eventually joining them together to create
            my first novel—The Sixth Amulet - Book One. Then my imagination had
            other plans; it didn’t want to stop at just one. Why would it? And
            so, one novel turned into two, then three, then … Who knows where it
            will end?
            <br /><br />
            I believe everyone has a story to tell, a potential book tucked away
            inside them, dying to get out. And all that’s needed to create it,
            is a simple recipe: a pen and a notebook. So, open your mind and let
            your imagination roam through the endless possibilities it has to
            offer … then simply write!
            <br /><br />
            Many people have asked me, “Why Scotland? And why Balloch?” Well, it
            was while on my first trip there (around 2005), visiting good
            friends in Balloch, that I fell in love with the place. Always the
            perfect hosts each time I visit, Billy, Ciara and Megan are so lucky
            to live a stone’s throw from Balloch Castle, on the stunning shores
            of Loch Lomond (well worth a visit if you happen to be passing
            through). Anyway, it just seemed right to set The Sixth Amulet in
            this location. And who knows? Maybe I’ll retire there … one day.
          </h5>
        </div>
      </div>
    </section>
    <section id="book_images">
      <div id="example">
        <carousel-3d :inverse-scaling="1500" :space="800">
          <slide v-for="slide in slides" :index="slide.img" :key="slide.img">
            <!-- <span class="title">You know</span>
            <p>
              You know, being a test pilot isn't always the healthiest business
              in the world.
            </p> -->
            <img
              class="carousel_img"
              :src="require(`@/assets/review_images/${slide.img}.jpg`)"
            />
            <span class="carousel_img_caption">{{ slide.caption }}</span>
          </slide>
        </carousel-3d>
      </div>
    </section>
  </div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";
import Navbar from "@/components/Navbar";
import Divider from "@/components/Divider";
import * as THREE from "three";
import Vanta from "vanta/dist/vanta.fog.min";

export default {
  name: "Home",
  components: {
    Navbar,
    Divider,
    Carousel3d,
    Slide,
  },
  data() {
    return {
      slides: [
        {
          img: 0,
          caption: "The lotus flower - engraved on Asai Nara’s Katana sword.",
        },
        { img: 1, caption: "The Kelpie – a Scottish mythical creature." },
        {
          img: 2,
          caption:
            "fictional map of the lower Highlands - circa late 1500’s early 1600’s – by Lewis Hickson - Instagram    fantasy_map_cartographer",
        },
        { img: 3, caption: "The Kelpie – a Scottish mythical creature." },
        {
          img: 4,
          caption: "Scottish dirk (dagger) belonging to Eleanor Shaw.",
        },
        {
          img: 5,
          caption:
            "Oran Shaw’s coffer (chest) - contains hidden secrets from his past.",
        },
        {
          img: 6,
          caption:
            "The Shaw crest (broach) – made from solid silver. Oran had this made especially for himself, to give him a sense of ‘belonging’, linking him to his ancestors who were of Pictish origin.",
        },
      ],
    };
  },
  methods: {},
  mounted() {
    this.vantaEffect = Vanta({
      el: "#nav_header_contain",
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      highlightColor: 0x460303,
      midtoneColor: 0x780e04,
      lowlightColor: 0x70707,
      baseColor: 0x20202,
      blurFactor: 0.41,
      speed: 0.4,
      zoom: 1,
    });
  },
  beforeDestroy() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy();
    }
  },
};
</script>

<style scoped>
@import "../assets/colors.css";
#container {
  background: var(--silver);
}
#header {
  /* background: var(--crimson); */
  position: relative;
}
.header_container {
  position: relative;
  z-index: 1;
  max-width: 1575px;
  margin: auto;
}
#header:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 160px;
  bottom: 0;
  left: 0;
  background-color: var(--silver);
  z-index: 0;
}
#short_bio {
  background: var(--silver);
}
.short_bio_container {
  color: var(--white);
  position: relative;
  z-index: 1;
  max-width: 1575px;
  margin: auto;
  font-family: "Prociono";
  font-size: 5rem;
}
#short_bio h6 {
  margin: 0 auto;
  width: 100%;
  max-width: 1040px;
  padding: 120px 0;
}
/* .header_img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-top: -5%;
  position: relative;
  z-index: -1;
  filter: brightness(0.4);
} */
.img_contain {
  margin-top: -5%;
  height: 50rem;
  background-image: url("https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80");
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  /* filter: brightness(0.5); */

  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
}

.img_contain_content {
}
.hero_text {
  text-align: center;
  color: var(--white);
}
.author_short_desc {
  font-size: 2rem;
  font-weight: 500;
  margin: 0;
  padding: 0;
}
.author_name {
  margin-top: 2rem;
  margin-bottom: 0;
  font-size: 10rem;
  font-family: "STIXTwo";
  letter-spacing: 2rem;
}

/* Author full bio section */
.author_image {
  background-image: url("https://images.gr-assets.com/authors/1628960457p5/21176498.jpg");
}

.full_bio_container {
  max-width: 1800px;
  margin: auto;
}

.author_image {
  background-attachment: fixed;
  background-size: contain;
  background-repeat: no-repeat;
  height: 55rem;
  width: 75%;
  padding: m;
  margin: 4rem 4rem 0 0;
  filter: blur(5px);
  /* clip-path: polygon(
    5% 5%,
    100% 0%,
    100% 75%,
    75% 75%,
    75% 100%,
    50% 75%,
    0% 75%
  ); */
}

.author_bio_text {
  width: 75%;
  margin: 4rem 3rem 3rem 4rem;
  text-align: left;
}

#full_bio {
  background: var(--silver);
}

.author_bio_body {
  font-size: 1.1rem;
  font-weight: 300;
  line-height: 2.4rem;
  color: var(--white);
  font-family: "Prociono";
  margin-top: 0.5rem;
}

.author_bio_title {
  font-size: 4rem;
  color: var(--crimson);
  font-family: "STIXTwo";
  margin-bottom: 0;
  padding-bottom: 0;
}

/* Book gallery */

#book_images {
  background: var(--silver);
  padding: 5rem 0;
}

.carousel_img {
  position: relative;
}

.carousel_img_caption {
  color: transparent;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  text-align: center;
}

.carousel_img_caption:hover {
  color: white;
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
}

/* Helpers */

.two-rem {
  font-size: 2rem;
}

.four-rem {
  font-size: 4rem;
}

.prociono {
  font-family: "Prociono", serif;
}

.STIXTwo {
  font-family: "STIXTwo", serif;
}

.d-flex {
  display: flex;
}

.justify-content-center {
  justify-content: center;
}

.justify-space-between {
  justify-content: space-between;
}

.justify-space-around {
  justify-content: space-around;
}

.align-items-center {
  align-items: center;
}

@media only screen and (max-width: 600px) {
  .author_short_desc {
    font-size: 1.5rem;
  }
  .author_name {
    font-size: 3rem;
  }
}
@media only screen and (max-width: 600px) {
  .author_short_desc {
    font-size: 1.5rem;
  }
  .author_name {
    letter-spacing: 0.5rem;
  }
  .four-rem {
    font-size: 3rem;
  }
  .short_bio_container {
    font-size: 4rem;
  }
  .author_image {
    margin: 0;
    background-size: cover;
    height: 30rem;
    background-position: center;
  }
  .author_bio_text {
    margin: 0;
    text-align: center;
  }
  .full_bio_container {
    flex-direction: column;
    text-align: center;
  }
}
</style>
