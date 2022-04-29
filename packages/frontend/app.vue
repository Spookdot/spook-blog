<template>
  <div>
    <NuxtLink class="link" to="/">Homepage</NuxtLink>
    <NuxtLink class="link" to="/login">Login</NuxtLink>
    <NuxtLink class="link" to="/register">Register</NuxtLink>
    <NuxtLink class="link" to="/post/new">New Post</NuxtLink>
  </div>
  <div>
    <NuxtPage />
  </div>
</template>

<style>
.link {
  margin: 0 0.25rem;
}
</style>
