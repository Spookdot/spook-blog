<template>
  <div>
    <div v-for="post in posts.data" :key="post.id">
      <h1>{{ post.attributes.title }}</h1>
      <div>{{ post.attributes.content }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Post } from "~/types";
import { Strapi4Response } from "@nuxtjs/strapi";

const client = useStrapiClient();

const posts = await client<Strapi4Response<Post>>("posts", {
  headers: {
    Authorization: "Bearer " + process.env.API_TOKEN,
  },
});
</script>
