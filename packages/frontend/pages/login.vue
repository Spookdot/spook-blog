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

const identifier = ref("");
const password = ref("");

const onSubmit = async () => {
  try {
    await login({ identifier: identifier.value, password: password.value });

    navigateTo("/");
  } catch (e) {
    alert(e.error.message);
  }
};
</script>
