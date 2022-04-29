<template>
  <p>E-Mail Adress</p>
  <input type="text" v-model="email" />
  <p>Confirm E-Mail Adress</p>
  <input type="text" v-model="confirmEmail" />
  <p>Username</p>
  <input type="text" v-model="username" />
  <p>Password</p>
  <input type="password" v-model="password" />
  <p>Confirm password</p>
  <input type="password" v-model="confirmPassword" />
  <button type="submit" v-on:click="onSubmit">Register</button><br />
</template>

<script setup lang="ts">
const router = useRouter();
const { register } = useStrapiAuth();

const email = ref("");
const username = ref("");
const password = ref("");
const confirmEmail = ref("");
const confirmPassword = ref("");

const onSubmit = async () => {
  if (confirmPassword.value != password.value) {
    alert("Passwords do not match");
    return;
  }
  if (confirmEmail.value != email.value) {
    alert("Emails do not match");
    return;
  }

  try {
    await register({
      email: email.value,
      username: username.value,
      password: password.value,
    });

    navigateTo("/");
  } catch (e) {
    console.log(e);
    alert(e.error.message);
  }
};
</script>
