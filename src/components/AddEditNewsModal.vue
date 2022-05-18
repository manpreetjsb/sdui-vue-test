<template>
  <div>
    <b-modal
      v-model="showForm"
      @ok="handleOk"
      @hidden="handleCancel"
      centered
      :title="!newsId ? 'Add News' : 'Edit News'"
    >
      <b-container fluid="sm">
        <b-form @submit="onSubmit">
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
          <b-button type="submit" ref="submitBtn" v-show="false" />
        </b-form>
      </b-container>
    </b-modal>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      form: {
        id: "",
        title: "",
        author: "",
        body: "",
      },
      showForm: false,
    };
  },
  props: { modalShow: Boolean, newsId: String },
  computed: {
    ...mapGetters(["getNewsById"]),
  },
  watch: {
    modalShow() {
      this.showForm = this.modalShow;
      if (this.newsId) {
        this.openEditMode();
      }
    },
  },

  methods: {
    ...mapActions(["addNews", "updateNews"]),
    openEditMode() {
      const formEdit = this.getNewsById(this.newsId);
      this.form.id = formEdit.id;
      this.form.title = formEdit.title;
      this.form.body = formEdit.body;
      this.form.author = formEdit.author;
    },

    onSubmit(event) {
      event.preventDefault();
      if (this.newsId) {
        const updatedNews = { ...this.form, id: this.newsId };
        this.updateNews(updatedNews);
      } else {
        const newNews = { ...this.form, id: uuidv4() };
        this.addNews(newNews);
      }

      this.$emit("close");
    },
    handleOk(event) {
      event.preventDefault();
      this.$refs.submitBtn.click();
    },
    handleCancel(event) {
      event.preventDefault();
      this.handleFormReset();
      this.$emit("close");
    },
    handleFormReset() {
      this.form.id = "";
      this.form.title = "";
      this.form.author = "";
      this.form.body = "";
    },
  },
};
</script>
<style>
.close {
  border: none;
  background: transparent;
  font-size: 30px;
}
</style>
