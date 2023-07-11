<template>
    <div class="text-md-center">
        <div class="avatar">
            <v-avatar color="grey" size="150" rounded="50">
                <v-img cover :src="mainImage" alt="Darius Baciu"></v-img>
            </v-avatar>
        </div>
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

.avatar {
  padding-top: 2vh;
  transform: translatey(0px);
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-20px);
  }
  100% {
    transform: translatey(0px);
  }
}

@media only screen and (max-width: 740px) {
  .avatar {
    display: flex;
    justify-content: center;
    padding-top: 3vh;
  }
}
</style>
