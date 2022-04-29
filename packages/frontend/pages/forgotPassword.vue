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

const email = ref("");
const emailSent = ref(false);

const onSubmit = async () => {
  try {
    await forgotPassword({ email: email.value });

    emailSent.value = true;
  } catch (e) {}
};
</script>
