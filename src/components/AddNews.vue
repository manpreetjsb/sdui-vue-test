<template>
  <div>
    <b-container fluid="sm">
      <b-form @submit="onSubmit" @reset="onReset">
        <b-form-group id="title" label-for="title">
          <b-form-input
            id="title"
            v-model="form.title"
            type="text"
            placeholder="Enter Title"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label-for="input-2" class="mt-2">
          <b-form-input
            id="author"
            v-model="form.author"
            placeholder="Enter Author"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-3" label-for="New Body" class="mt-2">
          <b-form-input
            id="body"
            v-model="form.body"
            placeholder="New Body"
            required
          ></b-form-input>
        </b-form-group>
        <div class="m-3">
          <b-button type="submit" variant="primary" class="me-2"
            >Add News</b-button
          >
          <b-button type="reset" variant="danger">Reset</b-button>
        </div>
      </b-form>
    </b-container>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import { mapActions } from "vuex";
import router from "../router";
export default {
  data() {
    return {
      form: {
        id: uuidv4(),
        title: "",
        author: "",
        body: "",
      },
    };
  },
  computed: {},
  methods: {
    ...mapActions(["addNews"]),
    onSubmit(event) {
      event.preventDefault();
      this.addNews(this.form);
      router.push("home");
    },
    onReset(event) {
      event.preventDefault();
      this.form.id = "";
      this.form.title = "";
      this.form.author = "";
      this.form.body = "";
    },
  },
};
</script>
