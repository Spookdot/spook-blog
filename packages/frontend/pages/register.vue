<template>
  <p>E-Mail Adress</p>
  <input type="text" v-model="email" />
  <p>E-Mail Adress</p>
  <input type="text" v-model="confirmEmail" />
  <p>Username</p>
  <input type="text" v-model="username" />
  <p>Password</p>
  <input type="password" v-model="password" />
  <p>Confirm password</p>
  <input type="text" v-model="confirmPassword" />
  <button type="submit" v-on:click="onSubmit">Login</button><br />
  <NuxtLink to="forgotPassword">Forgot password</NuxtLink>
</template>

<script setup lang="ts">
const router = useRouter();
const { register } = useStrapiAuth();

let email = "";
let username = "";
let password = "";
let confirmEmail = "";
let confirmPassword = "";

const onSubmit = async () => {
  if (confirmPassword != password) {
    alert("Passwords do not match");
    return;
  }
  if (confirmEmail != email) {
    alert("Emails do not match");
    return;
  }

  try {
    await register({ username, email, password });

    navigateTo("/");
  } catch (e) {}
};
</script>
