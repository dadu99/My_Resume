<template>
  <v-card color="primary">
    <v-card-text>
      <ProfilePicture></ProfilePicture>

      <div class="text-sm-center mb-4 mt-3">
        <h1 class="profile-name">
          Baciu <span class="my-name">Nicolae-Darius</span>
        </h1>
        <span class="qoute-resume">
          A challenge-loving web developer
        </span>
      </div>
    </v-card-text>

  </v-card>
</template>


<script>
import ProfilePicture from "@/components/Sidebar/ProfilePicture";

export default {
  name: "SideBar",
  components: {ProfilePicture},

  data() {
    return {
      sections: {
        info: {
          title: 'INFO',
          items: [
            {
              name: 'Email',
              icon: 'mdi-email',
              text: 'mail',
            },
            {
              name: 'Website',
              icon: 'mdi-web',
              text: 'site',
            },
            {
              name: 'Birth Date',
              icon: 'mdi-cake-variant',
              text: 'Now 21, 1996',
            },
            {
              name: 'Habitation',
              icon: 'mdi-map-marker',
              text: 'Sibiu, Romania',
            },
          ],
        },
        socials: {
          title: 'SOCIALS',
          items: [
            {
              icon: 'mdi-github-circle',
              text: 'github.com/AmirrezaNasiri',
              link: 'https://github.com/AmirrezaNasiri',
            },
            {
              icon: 'mdi-linkedin-box',
              text: 'linkedin.com/in/amirreza-nasiri',
              link: 'https://linkedin.com/in/amirreza-nasiri',
            },
            {
              icon: 'mdi-twitter',
              text: 'twitter.com/Amirreza_Nasiri',
              link: 'https://twitter.com/Amirreza_Nasiri',
            },
            {
              icon: 'mdi-instagram',
              text: 'instagram.com/amirreza.n96',
              link: 'https://instagram.com/amirreza.n96',
            },
          ],
        },
        hobbies: {
          title: 'HOBBIES',
          items: [

            {
              icon: 'mdi-bullseye',
              text: 'Getting out of Safe Zone',
            },
            {
              icon: 'mdi-biohazard',
              text: 'Challenges',
            },
            {
              icon: 'mdi-bike',
              text: 'Cycling',
            },
            {
              icon: 'mdi-image-filter-hdr',
              text: 'Nature',
            },
            {
              icon: 'mdi-auto-fix',
              text: 'Hacking Stuffs',
            },
            {
              icon: 'mdi-teach',
              text: 'Teaching',
            },
            {
              icon: 'mdi-karate',
              text: 'Sports',
            },
            {
              icon: 'mdi-music',
              text: 'Music',
            },
            {
              icon: 'mdi-account-group',
              text: 'Leadership',
            },
            {
              icon: 'mdi-book-open-page-variant',
              text: 'Books',
            },
            {
              icon: 'mdi-android-debug-bridge',
              text: 'Tickling Bugs!',
            },
          ],
        },
        languages: {
          title: 'LANGUAGES',
          items: [
            {
              text: 'English',
              value: 70,
            },
            {
              text: 'German',
              value: 45,
            },
          ],
        },
      },
    }
  }
}
</script>

<style scoped lang="scss">

.profile-name, .qoute-resume {
  text-align: center;
}

.profile-name {

}

.qoute-resume {
  font-weight: 400;
  line-height: 40px;
}
</style>
