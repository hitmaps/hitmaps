<template>
    <div class="site-container">
        <header class="row">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <router-link :to="{name: 'home'}">
                            <i class="far fa-home"></i>
                            Home
                        </router-link>
                    </li>
                    <li class="breadcrumb-item">
                        <router-link :to="{ name: 'level-select', params: { slug: location.game }}">
                            {{ game.fullName }}</router-link>
                    </li>
                    <li class="breadcrumb-item active">
                        {{ location.destination }} ({{ location.destinationCountry }})
                    </li>
                </ol>
                <script type="application/ld+json">
                    {
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [{
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Home",
                            "item": "{{ $domain }}"
                        },
                        {
                            "@type": "ListItem",
                            "position": 2,
                            "name": "{{ game.FullName }}",
                            "item": "{{ $domain }}/{{ location.game }}"
                        },
                        {
                            "@type": "ListItem",
                            "position": 3,
                            "name": "{{ location.destination }} ({{ location.destinationCountry }})",
                            "item": "{{ $domain }}/{{ location.game }}/{{ location.slug }}"
                        }]
                    }
                </script>
            </nav>
        </header>
        <div v-for="mission in missions" :key="mission.id" class="row mission justify-content-center">
            <div class="col-lg-4 name"
            :style="{ backgroundImage: 'url(/cdn/'+ generateUrl(mission) + ')', backgroundSize: 'cover',  backgroundRepeat: 'no-repeat'}">
                <p>&nbsp;</p>
                <h3>
                    <img src="/img/game-icons/mission.png" class="img-fluid" alt="Mission Icon">
                    {{ mission.name }}
                </h3>
            </div>
            <div v-for="difficulty in mission.difficulties" :key="difficulty" class="col-lg difficulty">
                <router-link :to="{ name: 'map-view', params: { slug: location.game, location: location.slug, mission: mission.slug, difficulty: difficulty.toLowerCase() }}">
                    <img :src="'/img/game-icons/' + difficulty.toLowerCase() + '.png'" :alt=" difficulty + ' Icon'" class="normal img-fluid">
                    <img :src="'/img/game-icons/' + difficulty.toLowerCase() + '-inverted.png'" :alt="difficulty + ' Icon'" class="inverted img-fluid">
                    <p>{{ difficulty == 'Standard' ? mission.name : difficulty }}</p>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'mission-select',
    data () {
        return {
            location: {},
            game: [],
            missions: []
        }
    },
    methods: {
        generateUrl: function(mission) {
            if(mission !== "Elusive Target") {
                return "png/mission-thumbnails/" + this.game.slug + "/" + mission.slug + ".png"
            }
        }
    },
    created: function () {
        this.$http.get(this.$domain +"/api/v1/games/" + this.$route.params.slug).then(resp => this.game = resp.data[0])
        this.$http.get(this.$domain +"/api/v1/games/" + this.$route.params.slug + "/locations/" + this.$route.params.location).then(resp => this.location = resp.data[0])
        this.$http.get(this.$domain + "/api/v1/games/" + this.$route.params.slug + "/locations/" + this.$route.params.location + "/missions").then(resp => this.missions = resp.data)
    }
}
</script>

<style lang="scss" scoped>
    header {
    text-shadow:
      -1px -1px 0 #000,
      1px -1px 0 #000,
      -1px 1px 0 #000,
      1px 1px 0 #000;
  }

  .mission {
    margin-bottom: 10px;

    @media (max-width: 991px) {
      .name {
        height: 250px;
      }
    }

    .name {
      border: solid 1px #fff;
      color: #fff;
      display: flex;
      flex-direction: column;

      > p {
        flex-grow: 1;
      }

      img {
        width: 32px;
        height: 32px;
        margin-top: 0;
        margin-bottom: 0;
      }

      margin-right: 5px;
    }

    @media (min-width: 992px) {
      .difficulty {
        text-align: center;
        background: #fff;
        padding-left: 0;
        padding-right: 0;
        margin-right: 5px;

        > a {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
          padding-left: 15px;
          padding-right: 15px;
          color: #000;
          font-size: 1.5rem;

          img {
            margin: 20px auto;
          }

          img.normal {
            display: block;
            max-height: 100px;
            max-width: 100px;
          }

          img.inverted {
            display: none;
            max-height: 100px;
            max-width: 100px;
          }

          &:hover {
            background: #ff003c;
            text-decoration: none;
            color: #fff;

            img.normal {
              display: none;
            }

            img.inverted {
              display: block;
            }
          }
        }
      }
    }

    @media (max-width: 991px) {
      .name {
        margin-right: 0;
      }

      .difficulty {
        &:nth-child(odd) {
          background: #fff;
        }

        &:nth-child(even) {
          background: #eee;
        }

        > a {
          img.normal {
            display: inline-block;
            max-height: 32px;
            max-width: 32px;
          }

          img.inverted {
            display: none;
            max-height: 32px;
            max-width: 32px;
          }

          &:hover {
            text-decoration: none;
            color: #000;
          }

          p {
            display: inline-block;
          }
        }
      }
    }
  }
</style>


