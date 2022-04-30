<template>
  <section id="signup" className="gradient-gray">
    <div id="mlb2-CODE" className="ml-subscribe-form ml-subscribe-form-Gqf4Gb">
      <div className="ml-vertical-align-center">
        <div className="subscribe-form ml-block-success" style="display: none">
          <div className="form-section">
            <p>{{ this.message }}</p>
          </div>
        </div>
        <form
          @submit.prevent="submit()"
          className="ml-block-form"
          action="https://assets.mailerlite.com/jsonp/36718/forms/53733104166111057/subscribe"
          data-id="CODE"
          data-code="CODE"
          method="POST"
          target="_blank"
        >
          <div className="subscribe-form">
            <div className="form-section">
              <div
                className="form-group ml-field-email ml-validate-required ml-validate-email"
              >
                <input
                  v-model="email"
                  required
                  type="email"
                  name="fields[email]"
                  className="form-control signup-text"
                  placeholder="Email address"
                  autoComplete="email"
                  spellCheck="false"
                  autoCapitalize="off"
                  autoCorrect="off"
                />
                <input type="hidden" name="ml-submit" value="1" />
                <button type="submit" className="primary signup-button">
                  Subscribe
                </button>
                <button
                  disabled
                  style="display: none"
                  type="button"
                  className="loading"
                >
                  Submitting...
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Mailerlite",
  data() {
    return {
      email: "",
      message: "",
    };
  },
  mounted() {},
  methods: {
    submit() {
      axios
        .post(
          `https://assets.mailerlite.com/jsonp/36718/forms/53733104166111057/subscribe`,
          {
            fields: {
              email: this.email,
            },
          }
        )
        .then(() => {
          console.log(this.email);
          this.$router.push("/thanks");
          this.message = "Thank you, you have successfully subscribed!";
        })
        .catch(() => {
          this.$router.push("/");
          this.message =
            "Sorry, something went wrong with the previous form submission";
        });
    },
  },
};
</script>

<style scoped></style>
