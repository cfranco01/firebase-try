<template>
  <div>
    <h1>Home</h1>
  </div>
</template>

<script setup>
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";

onAuthStateChanged(auth, (user) => {
  console.log(user);
});
</script>
