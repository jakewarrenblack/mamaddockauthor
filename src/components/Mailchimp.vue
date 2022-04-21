<template>
  <div id="mc_embed_signup">
    <form
      @submit.prevent="redirect()"
      action="https://mamaadockauthor.us14.list-manage.com/subscribe/post?u=fa07aa1683c597bd4ef14056f&amp;id=d311ec318a"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      class="validate"
      target="_blank"
      novalidate
    >
      <div id="mc_embed_signup_scroll">
        <h2>Subscribe</h2>
        <div class="mc-field-group">
          <label for="mce-EMAIL">Email Address</label>
          <input
            type="email"
            value=""
            name="EMAIL"
            required
            class="required email"
            id="mce-EMAIL"
          />
        </div>
        <div id="mce-responses" class="clear foot">
          <div
            class="response"
            id="mce-error-response"
            style="display: none"
          ></div>
          <div
            class="response"
            id="mce-success-response"
            style="display: none"
          ></div>
        </div>
        <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
        <div style="position: absolute; left: -5000px" aria-hidden="true">
          <input
            type="text"
            name="b_fa07aa1683c597bd4ef14056f_d311ec318a"
            tabindex="-1"
            value=""
          />
        </div>
        <div class="optionalParent">
          <div class="clear foot">
            <input
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              class="button"
            />
            <!-- <p class="brandingLogo"><a href="http://eepurl.com/hUkEIv" title="Mailchimp - email marketing made easy and fun"><img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg"></a></p> -->
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Mailchimp",
  methods: {
    redirect() {
      this.$router.push("/thanks");
    },
  },
};
</script>

<style scoped>
#mc_embed_signup {
  background: #fff;
  clear: left;
  font: 14px Helvetica, Arial, sans-serif;
  width: 600px;
  color: black !important;
  flex-direction: column;
}

#mc_embed_signup input {
  color: black !important;
}
</style>
