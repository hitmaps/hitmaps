<template>
  <div class="level-select">
    <div class="site-container">
      <div class="row">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
              <li class="breadcrumb-item">
                  <router-link :to="{name: 'home'}">
                      <i class="far fa-home"></i>
                      Home
                  </router-link>
              </li>
              <li class="breadcrumb-item active">
                  {{ game.fullName }}
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
                      "name": "{{ game.fullName }}",
                      "item": "{{ $domain }}/{{ game.slug }}"
                  }]
              }
          </script>
        </nav>
      </div>
      <div class="text-center">
              <img :src="'/cdn/png/logos/' + game.slug + '.png'" class="img-fluid">
              <h2>{{ game.tagline }}</h2>
      </div>
      <div class="row">
        <div v-for="location in locations" :key="location.id" class="location col-lg col-md-6" 
        v-bind:style="{background: 'url(/cdn/webp/locations/' + game.slug + '/' + location.slug + '.webp) no-repeat center'}">
            <router-link :to="{ name: 'mission-select', params: { slug: game.slug, location: location.slug }}">
                <p>&nbsp;</p>
                <div class="location-info">
                    <h4>{{ location.destinationCountry }}</h4>
                    <h3>{{ location.destination }}</h3>
                </div>
            </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'level-select',
  data () {
    return {
      game: {},
      locations: []
    }
  },
  created: function() {
    this.$http.get(this.$domain +"/api/v1/games/" + this.$route.params.slug).then(resp => this.game = resp.data[0])
    this.$http.get(this.$domain + "/api/v1/games/" + this.$route.params.slug + "/locations").then(resp => this.locations = resp.data)
  }
}
</script>

<style lang="scss" scoped>
.level-select {
  > a {
    text-decoration: none;
    display: block;
    margin: 20px;
  }

  /* Locations page */
  .site-container {
    padding-right: 50px;
    padding-left: 50px;
    margin-right: auto;
    margin-left: auto;
  }

  @media (min-width: 992px) {
    .location {
      height: 500px;
    }
  }


  @media (max-width: 991px) {
    .location {
      height: 300px;
      margin-bottom: 20px;
    }
  }

  .location {
    color: white;
    margin-left: 3px;
    margin-right: 3px;



    &:hover {
      .location-info {
        color: white;
        background: rgb(252, 0, 59);
      }

      box-shadow: 2px 2px 2px #000;
    }

    .location-info {
      padding: 15px;
      background: white;
      color: #000;
      text-shadow: none;
    }
  }

  .location > a  {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-left: -15px;
    margin-right: -15px;
    text-decoration: none;

    > p {
      flex-grow: 1;
    }
  }

  img {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  h2 {
    text-transform: uppercase;
    color: #fff;
    font-weight: bolder;
    margin-bottom: 20px;
  }
}
</style>
