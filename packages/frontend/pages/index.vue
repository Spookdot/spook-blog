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

definePageMeta({
  middleware: ["strapi-auth"],
});

const client = useStrapiClient();
const token = useStrapiToken();

const posts = await client<Strapi4Response<Post>>("posts", {
  headers: {
    Authorization: "Bearer " + token,
  },
});
</script>
