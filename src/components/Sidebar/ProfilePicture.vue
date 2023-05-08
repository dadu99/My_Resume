<template>
  <div class="text-md-center">
      <v-avatar color="grey" size="250" rounded="50">
        <v-img cover :src="mainImage" alt="Darius Baciu"></v-img>
      </v-avatar>
  </div>

</template>

<script>
import profilePic from "@/assets/dbaciu_copy.jpg";

export default {
  name: "ProfilePicture",

  setup() {
    return {
      mainImage: profilePic,

    };
  },
}
</script>

<style scoped lang="scss">
.profile-picture {
  object-fit: cover;
  width: 120px;
  height: 160px;
  border-radius: 60%;
}

</style>
