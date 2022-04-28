<template>
  <p>E-Mail Address</p>
  <input type="text" v-model="email" />
  <input type="button" value="Send" @click="onSubmit" />
  <p v-if="emailSent">
    An E-Mail has been sent to your E-Mail Address. Please check your inbox and
    spam
  </p>
</template>

<script setup lang="ts">
const { forgotPassword } = useStrapiAuth();

let email = "";
let emailSent = false;

const onSubmit = async () => {
  try {
    await forgotPassword({ email });

    emailSent = true;
  } catch (e) {}
};
</script>
