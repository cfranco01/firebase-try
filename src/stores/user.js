import { defineStore } from "pinia";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebaseConfig";
import router from "../router";
import { h } from "vue";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    userData: "null",
    loadingUser: false
  }),
  actions: {
    async registerUser(email, password) {
        this.loadingUser = true
        try {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        this.userData = { email: user.email, uid: user.uid };
        router.push("/");
      } catch (error) {
            console.log(error);
      } finally {
            this.loadingUser = false
      }
    },
    async loginUser(email, password) {
        this.loadingUser = true
        try {
        const { user } = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        this.userData = { email: user.email, uid: user.uid };
        router.push("/");
      } catch (error) {
            console.log(error);
      } finally {
            this.loadingUser = false;
      }
    },
    async logoutUser() {
      try {
        await signOut(auth);
        this.userData = null;
        router.push("/login");
      } catch (error) {
            console.log(error);
      } 
    },
  },
});
