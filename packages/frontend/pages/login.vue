<template>
  <p>Username</p>
  <input type="text" v-model="identifier" />
  <p>Password</p>
  <input type="password" v-model="password" />
  <button type="submit" v-on:click="onSubmit">Login</button>
  <NuxtLink to="forgotPassword">Forgot password</NuxtLink>
</template>

<script setup lang="ts">
const { login } = useStrapiAuth();
const router = useRouter();

let identifier = "";
let password = "";

const onSubmit = async () => {
  try {
    await login({ identifier, password });

    navigateTo("/");
  } catch (e) {}
};
</script>
