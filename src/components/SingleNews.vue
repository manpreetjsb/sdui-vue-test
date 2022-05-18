<template>
  <div class="mx-5 my-2">
    <b-card bg-variant="dark" text-variant="white" :title="news.title">
      <b-card-text>Author : {{ news.author }}</b-card-text>
      <b-card-text>
        {{ news.body }}
      </b-card-text>
      <div class="float-end">
        <b-button variant="primary" @click="$emit('edit', news.id)"
          >Edit</b-button
        >
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  props: ["news"],
};
</script>
