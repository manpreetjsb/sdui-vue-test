<template>
  <div>
    <h1>News Feed</h1>
    <div class="m-5 inline">
      <label class="sr-only" for="inline-form-input-name"></label>
      <b-form-input
        id="inline-form-input-name"
        class="mb-2 mr-sm-2 mb-sm-0"
        placeholder="Search by Title"
        v-model="search"
      ></b-form-input>
    </div>
    <div class="filter-container">
      <b-form-select
        v-model="orderByDataKey"
        :options="dataKeyInputOptions"
      ></b-form-select>
      <b-form-select
        v-model="orderByAscDesc"
        :options="orderByInputOptions"
      ></b-form-select>
    </div>
    <single-news
      v-for="news in news"
      :key="news.id"
      :news="news"
      @edit="openForm"
    />
    <add-edit-news-modal
      :modalShow="showForm"
      @close="hideForm"
      :newsId="newsId"
    />
    <b-button
      class="addNewsbtn"
      @click="openForm(null)"
      size="lg"
      variant="primary"
      ><b-icon-plus></b-icon-plus
    ></b-button>
  </div>
</template>

<script>
import SingleNews from "./SingleNews";
import lodash from "lodash";
import { mapGetters } from "vuex";
import AddEditNewsModal from "./AddEditNewsModal";
export default {
  components: { SingleNews, AddEditNewsModal },
  data() {
    return {
      search: "",
      orderByDataKey: "title",
      orderByAscDesc: "asc",
      dataKeyInputOptions: [
        { value: "title", text: "Title" },
        { value: "author", text: "Author" },
        { value: "body", text: "Body" },
      ],
      orderByInputOptions: [
        { value: "asc", text: "ASC" },
        { value: "desc", text: "DESC" },
      ],
      showForm: false,
      newsId: null,
    };
  },
  computed: {
    ...mapGetters(["getNewsFeed"]),
    news() {
      const _news = this.getNewsFeed.filter((n) =>
        n.title.toLowerCase().includes(this.search.toLowerCase())
      );
      return lodash.orderBy(_news, this.orderByDataKey, this.orderByAscDesc);
    },
  },
  methods: {
    openForm(id) {
      this.newsId = id;
      this.showForm = true;
    },
    hideForm() {
      this.showForm = false;
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.addNewsbtn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  font-size: 40px;
  display: grid;
  align-content: center;
  align-items: center;
  justify-content: center;
}
.filter-container {
  text-align: right;
  margin: 24px 3rem;
}
select {
  margin: 0 4px;
  font-size: 18px !important;
  width: 150px;
  height: 36px;
  padding: 0 14px;
  color: inherit;
}
</style>
