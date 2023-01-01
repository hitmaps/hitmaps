<template>
    <div
        class="content"
        style="background: url('https://media.hitmaps.com/img/hitman3/backgrounds/menu_bg.jpg') no-repeat center center fixed; background-size: cover"
    >
        <div class="inner-content">
            <h1>Support the Site</h1>
            <h2>Ways to Say "Thanks!"</h2>
            <hr>
            <h3>Patreon</h3>
            <p>
                I have recently created a Patreon page for all of my works (not just HITMAPS™️). By becoming a patron,
                you will receive certain perks. Becoming a patron will result in a monthly contribution. Simply click
                the button below to become a patron.
            </p>
            <a href="https://www.patreon.com/mrmike227" class="btn patreon-button">
                <i class="fab fa-patreon"></i>
                Become a Patron
            </a>
            <h4>Current Patrons:</h4>
            <div class="col-sm-12">
                <div class="row">
                    <div class="col-sm-3">
                        <patron link="https://notex.app" name="Notex" tier="Assassin"/>
                    </div>
                    <div class="col-sm-1"></div>
                    <div class="col-sm-3">
                        <patron name="Some Random Person" tier="Assassin"/>
                    </div>
                    <div class="col-sm-1"></div>
                    <div class="col-sm-3">
                        <patron name="ChromeX" tier="Assassin" />
                    </div>
                </div>
                <div class="row" style="margin-top: 20px">
                    <div class="col-sm-3">
                        <patron link="https://twitch.tv/nezukoschans" name="Nezuko Chan" tier="Assassin" />
                    </div>
                    <div class="col-sm-1"></div>
                    <div class="col-sm-3">
                        <patron name="Fe2o3" tier="Assassin" />
                    </div>
                </div>
            </div>
            <h3 style="margin-top: 20px;">PayPal</h3>
            <p>
                I currently accept tips/contributions via PayPal. Simply click the button below to make a contribution.
                Unless otherwise stated, these contributions are not tax-deductible in any way. You will be credited
                below with your donation.
            </p>
            <p>Previous Donors (contribution amounts are cumulative):</p>
            <ul>
                <li>David Thompson - 50.00 USD</li>
                <li>Finikyu - 25.00 USD</li>
                <li>Frote7 - 21.23 USD</li>
                <li>TimothyMark - 10.47 USD</li>
                <li>GKPunk - 10.00 USD</li>
                <li>Jonathan Rokosz - 10.00 USD</li>
                <li>Spencer Sabet - 6.00 USD</li>
                <li>Brian McKenzie - 5.55 USD</li>
                <li>Derek Ashel - 5.00 USD</li>
                <li>Esther de Bruin - 5.00 USD</li>
                <li>Somdy Alafac - 5.00 USD</li>
                <li>Nikjojo - 3.00 USD</li>
            </ul>
            <!-- region PayPal Button -->
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="SE5ALRGBQCCUW" />
                <button type="submit" class="btn paypal-button">
                    <i class="fab fa-paypal"></i>
                    Send Contribution via PayPal
                </button>
                <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
            </form>
            <!-- endregion -->
        </div>
        <div class="home-button">
            <router-link :to="{ name: 'home' }">
                <game-button>
                    <game-icon icon="story" font-style="normal" />
                    Home
                </game-button>
            </router-link>
        </div>
    </div>
</template>

<script>
import GameButton from "../components/GameButton";
import GameIcon from "../components/GameIcon";
import Patron from "../components/Patron";
export default {
    name: 'support-the-site',
    components: {Patron, GameIcon, GameButton},
    pageTitle: 'Support the Site',
}
</script>

<style lang="scss" scoped>
.content {
    > .home-button {
        margin: 20px;

        a:hover {
            text-decoration: none;
        }
    }

    > .inner-content {
        background-color: $content-background;
        color: $content-text;
        margin: 20px;
        padding: 20px;
        font-family: 'nimbus_sans_lbold', sans-serif;

        hr {
            background: $content-text;
        }

        h1 {
            text-transform: uppercase;
        }

        h2 {
            font-size: 1.25rem;
        }

        p, ul {
            font-family: 'Roboto', 'Arial', sans-serif;
            font-weight: lighter;
        }

        a {
            color: $content-text;

            &.patreon-button {
                margin-bottom: 20px;
                border-radius: 0;
                background: #e7705c;
                color: #fff;

                &:hover {
                    background: #cd685c;
                }
            }
        }

        .paypal-button {
            border-radius: 0;
            background: #00457c;
            color: #fff;

            &:hover {
                background: #003060;
            }
        }
    }
}

#ppBody {
    font-size: 11pt;
    width: 100%;
    margin: 0 auto;
    text-align: justify;
}

#ppHeader {
    font-size: 21pt;
    width: 100%;
    margin: 0 auto;
}

.ppConsistencies {
    display: none;
}
</style>
