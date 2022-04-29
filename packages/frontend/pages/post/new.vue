<template>
  <input type="text" v-model="title" />
  <textarea cols="30" rows="10" v-model="content"></textarea>
  <input type="button" value="Post" @click="onSubmit" />
</template>

<script setup lang="ts">
import { Post } from "types";
import { Strapi4Response } from "@nuxtjs/strapi";

const { create } = useStrapi4();

const title = ref("");
const content = ref("");

definePageMeta({
  middleware: "strapi-auth",
});

const onSubmit = async () => {
  await create<Strapi4Response<Post>>("posts", {
    title: title.value,
    content: content.value,
    user: useStrapiUser(),
  });
};
</script>
