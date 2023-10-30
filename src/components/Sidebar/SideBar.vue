<template>
    <div class="sideBar_section">
        <v-card color="#A9B388"
                class="mx-auto sidebar_section_content">
            <v-card-text fluid fill-height>
                <ProfilePicture></ProfilePicture>

                <div class="text-sm-center text-center mb-4 mt-3">
                    <h1 class="profile-name">
                        Baciu <span class="my-name">Nicolae-Darius</span>
                    </h1>
                    <span class="quotation-resume-dbn">
                     A challenge-loving web developer
                  </span>
                </div>
            </v-card-text>

            <sidebar-section :options="sections.info"></sidebar-section>
            <sidebar-section :options="sections.socials"></sidebar-section>

            <sidebar-section :options="sections.hobbies">
                <template v-slot:item="{item}">
                    <v-chip class="hobbies-in-line">
                        <v-avatar>
                            <v-icon>
                                {{ item.icon }}
                            </v-icon>
                        </v-avatar>
                        {{ item.text }}
                    </v-chip>
                </template>
            </sidebar-section>

            <sidebar-section :options="sections.languages">
                <template v-slot:items="{items}">
                    <v-container pa-0>
                        <v-layout wrap class="text-xs-center screen-sm">
                            <template v-for="(item, i) in items" :key="i">
                                <v-flex md3 sm4 xs6>
                                    <v-progress-circular rotate="360"
                                                         size="79"
                                                         width="3"
                                                         :model-value="item.value"
                                                         color="#C4661F"
                                                         class="ma-2">
                                        {{ item.text }}
                                    </v-progress-circular>
                                </v-flex>
                            </template>
                        </v-layout>
                    </v-container>
                </template>
            </sidebar-section>
            <sidebar-section :options="sections.certifications">
                <template v-slot:item="{item}">
                    <v-card class="hobbies-in-line">
                        <li>{{ item.skill }}</li>
                    </v-card>
                </template>
            </sidebar-section>

            <sidebar-section :options="sections.organisationalSkills">
                <template v-slot:item="{item}">
                    <v-card class="hobbies-in-line">
                        <li>{{ item.skill }}</li>
                    </v-card>
                </template>
            </sidebar-section>

            <sidebar-section :options="sections.communicationSkills">
                <template v-slot:item="{item}">
                    <v-card class="hobbies-in-line">
                        <li>{{ item.skill }}</li>
                    </v-card>
                </template>
            </sidebar-section>
        </v-card>
    </div>

</template>


<script>
import ProfilePicture from "../Sidebar/ProfilePicture.vue";
import SidebarSection from "../Sidebar/Section.vue";

export default {
    name: "SideBar",
    components: {SidebarSection, ProfilePicture},

    data() {
        return {
            sections: {
                info: {
                    title: 'INFO',
                    items: [
                        {
                            name: 'Email',
                            icon: 'mdi-email',
                            text: 'baciu.darius01@gmail.com',
                        },
                        {
                            name: 'Website',
                            icon: 'mdi-web',
                            text: 'https://dariusbaciu.netlify.app',
                        },
                        {
                            name: 'Birth Date',
                            icon: 'mdi-cake-variant',
                            text: 'Nov 21, 1996',
                        },
                        {
                            name: 'Location',
                            icon: 'mdi-map-marker',
                            text: 'Sibiu, Romania',
                        },
                    ],
                },
                socials: {
                    title: 'SOCIALS',
                    items: [
                        {
                            icon: 'mdi-github',
                            text: 'GitHub profile',
                            link: 'https://github.com/dadu99',
                        },
                        {
                            icon: 'mdi-linkedin',
                            text: 'Linkedin profile',
                            link: 'https://www.linkedin.com/in/baciu-nicolae-darius-a5a91a15a/',
                        },
                        {
                            icon: 'mdi-twitter',
                            text: 'Twitter profile',
                            link: 'https://twitter.com/DariusDarius01',
                        },
                        {
                            icon: 'mdi-instagram',
                            text: 'Instagram profile',
                            link: 'https://www.instagram.com/dariusbaciu_/',
                        },
                    ],
                },
                hobbies: {
                    title: 'HOBBIES',
                    items: [
                        {
                            icon: 'mdi-image-filter-hdr',
                            text: 'Nature',
                        },
                        {
                            icon: 'mdi-tennis-ball',
                            text: 'Tennis',
                        },
                        {
                            icon: 'mdi mdi-soccer',
                            text: 'Football',
                        },
                        {
                            icon: 'mdi-car-back',
                            text: 'Cars',
                        },
                        {
                            icon: 'mdi mdi-dumbbell',
                            text: 'Gym',
                        },
                        {
                            icon: 'mdi-biohazard',
                            text: 'Challenges',
                        },
                    ],
                },
                languages: {
                    title: 'LANGUAGES',
                    items: [
                        {
                            text: 'Romanian',
                            value: 100,
                        },
                        {
                            text: 'English',
                            value: 75,
                        },
                        {
                            text: 'German',
                            value: 40,
                        },
                    ],
                },
                organisationalSkills: {
                    title: "ORGANISATIONAL SKILLS",
                    items: [
                        {
                            skillIndex: 0,
                            skill: 'Good organizational skills and a great sense of responsibility'
                        },
                        {
                            skillIndex: 1,
                            skill: 'Able to prioritize tasks and mange time effectively'
                        },
                        {
                            skillIndex: 2,
                            skill: 'Highly organized and detail-oriented, able to maintain a clear overview of multiple projects at once'
                        },
                        {
                            skillIndex: 3,
                            skill: 'Proficient in debugging and\n' +
                                'troubleshooting the existing\n' +
                                'codebase of a project'
                        },
                        {
                            skillIndex: 4,
                            skill: 'Experienced in working under pressure and able to remain calm and focused during challenging situations'
                        },
                    ],
                },
                communicationSkills: {
                    title: "COMMUNICATION SKILLS",
                    items: [
                        {
                            skillIndex: 0,
                            skill: 'Good communication acquired through involvement in projects, conducted successful presentations of the projects'
                        },
                        {
                            skillIndex: 1,
                            skill: 'Good listening to customer needs and understanding colleague\'s perspectives when working collaboratively in teams.'
                        },
                        {
                            skillIndex: 2,
                            skill: 'Writing professional emails, reports, or other documents (User guides).'
                        },
                        {
                            skillIndex: 3,
                            skill: 'Collaborated with cross- functional teams using Microsoft Teams, Google Meet, Skype, Slack'
                        },
                    ],
                },
                certifications: {
                    title: "CERTIFICATES",
                    items: [
                        {
                            index: 0,
                            skill: 'JavaScript Essential Training - Sep 2023'
                        },
                        {
                            index: 1,
                            skill: 'Git Essential Training - Sep 2023'
                        },
                        {
                            index: 2,
                            skill: 'Dynamics 365 Fundamentals (MB-901) – Nov 2020'
                        },
                        {
                            index: 3,
                            skill: 'CCNA (Cisco Certified Network Associate) – CCNA Routing and Switching: Introduction to Networks (CCNA I) – February 2019'
                        },
                        {
                            index: 4,
                            skill: 'CCNA Routing and Switching: Routing and Switching Essentials (CCNA II) – July 2019;'
                        },
                        {
                            index: 5,
                            skill: 'European Computer Driving License (ECDL) Core Certificate – Feb 2016'
                        }
                    ],
                },
            },
        }
    }
}
</script>

<style scoped lang="scss">
.sideBar_section {
  .sidebar_section_content {
    max-width: 22vw;

    .quotation-resume-dbn {
      font-weight: 300;
      line-height: 40px;
    }
  }

  .profile-name, .quotation-resume-dbn {
    text-align: center;
  }

  .profile-name {
    line-height: 30px;
  }

  .hobbies-in-line {
    box-shadow: none;
    background-color: #A9B388;
    padding: 9px !important;
    margin-left: 5px !important;
    margin-right: 5px !important;
    margin-bottom: 5px !important;
    border: none;
  }
}

@media only screen and (max-width: 1440px) {
  .sideBar_section {
    .sidebar_section_content {
      max-width: 18vw;

      .quotation-resume-dbn {
        line-height: 20px;
      }

      .screen-sm {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }
  }
}

@media only screen and (max-width: 1024px) {
  .sideBar_section {
    .sidebar_section_content {
      max-width: 23vw;
    }
  }
}

@media only screen and (max-width: 740px) {
  .sideBar_section {
    .sidebar_section_content {
      max-width: 100%;
    }
  }
}
</style>
