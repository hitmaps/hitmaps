<template>
  <div>
    <header class="row">
      <div class="col text-center site-header">
              <h1>Interactive Maps For</h1>
              <img src="/cdn/png/logos/hitman2.png" class="img-fluid">
          </div>
    </header>
    <div class="row dashboard">
      <div class="game col-lg" v-for="game in games" :key="game.id" 
      v-bind:style="{ background: 'url(cdn/webp/backgrounds/'+ game.slug + '.webp) center no-repeat', backgroundSize: 'cover'}">
        <router-link :to="{ name: 'level-select', params: { slug: game.slug }}">
                    <p>&nbsp;</p>
                    <div class="game-info">
                        <div class="image">
                            <img src="/img/game-icons/campaign.png" class="normal img-fluid" alt="Campaign Icon">
                            <img src="/img/game-icons/campaign-inverted.png" class="inverted img-fluid" alt="Campaign Icon">
                        </div>
                        <div class="text">
                            <h2>Campaign</h2>
                            <h1>{{ game.fullName }}</h1>
                        </div>
                    </div>
          </router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  data () {
    return {
      games: []
    }
  },
  created: function () {
      console.log("Test")
      this.$http.get("http://"+ window.location.hostname +"/api/v1/games").then(resp => this.games = resp.data)
  }
}
</script>
<style lang="scss" scoped>
  .site-header {
  margin: 0 20px;
  }

  header {
    font-family: 'Roboto', 'Arial', sans-serif;
    color: #fff;
    font-weight: bolder;
    margin-top: 20px;

    h1 {
      text-transform: uppercase;
    }

    h2 {
      margin-top: 20px;
    }
  }

  @media (min-width: 992px) {
  .game, .elusive-target {
    height: 500px;
  }
}



@media (max-width: 991px) {
  .game, .elusive-target {
    height: 300px;
    margin-bottom: 20px;
  }
}

.dashboard {
  margin: 40px;

  .game, .elusive-target {
    display: flex;
    flex-direction: column;
    color: white;
    margin-left: 3px;
    margin-right: 3px;


    &:hover {
      .game-info, .elusive-target-info {
        color: white;
        background: rgb(252, 0, 59);

        h2 {
          color: white;
        }

        .image img {
          &.normal {
            display: none;
          }

          &.inverted {
            display: block;
          }
        }
      }

      box-shadow: 2px 2px 2px #000;
    }

    .game-info, .elusive-target-info {
      padding: 15px;
      background: white;
      color: #000;
      text-shadow: none;

      h2 {
        color: #ff003c;
      }

      .image {
        display: inline-block;
        vertical-align: top;

        img {
          height: 48px;
          width: 48px;

          &.normal {
            display: block;
          }

          &.inverted {
            display: none;
          }
        }
      }

      .text {
        display: inline-block;
        text-transform: uppercase;

        h1 {
          font-size: 1.5rem;
          margin-bottom: 0;
        }

        h2 {
          font-size: 1rem;
          margin-bottom: 0;
        }
      }
    }
  }

  .game > a, .elusive-target > a  {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-left: -15px;
    margin-right: -15px;
    text-decoration: none;

    > p:first-child {
      flex-grow: 1;
    }
  }

  .elusive-target {
    .countdown {
      padding: 15px 15px 0;
      margin-bottom: 1rem;

      img {
        width: 48px;
        height: 48px;
      }

      .timer {
        display: inline-block;
        vertical-align: middle;

        .target-arrives {
          color: #fff;
          line-height: 0;
          display: none;
        }

        #elusive-countdown {
          color: #fef30a;
          font-size: 2rem;
          vertical-align: middle;
          font-weight: 600;
        }

        &.not-playable {
          vertical-align: bottom;

          .target-arrives {
            display: block;
          }

          #elusive-countdown {
            line-height: 33px;
            margin-top: 7px;
          }
        }
      }
    }
  }
}
</style>

