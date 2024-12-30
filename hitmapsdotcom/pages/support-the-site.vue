<template>
    <Head>
        <Title>Support the Site</Title>
    </Head>
    <div
        class="content"
        style="background: url('https://media.hitmaps.com/img/hitman3/backgrounds/menu_bg.jpg') no-repeat center center fixed; background-size: cover"
    >
        <div class="inner-content">
            <h1>Support the Site</h1>
            <h2>Ways to Say, "Thanks!"</h2>
            <hr>
            <h3>Ko-fi</h3>
            <p>
                I have recently created a Ko-fi page for all of my works (not just HITMAPS™). By becoming a supporter,
                you will receive certain perks. Both one-time and membership (monthly) contributions are possible with Ko-fi.
            </p>
            <a href="https://ko-fi.com/mrmike227" class="btn patreon-button">
                <icon name="cib:ko-fi"/>
                Become a Supporter
            </a>
            <h4>Current Supporters:</h4>
            <div v-if="supportersPending"><i>Loading...</i></div>
            <div v-else-if="!supporters.length"><i>No recurring supporters at this time 🙁</i></div>
            <div class="row supporters" v-else>
                <div class="col-md-4 col-sm-12" v-for="supporter in recurringContributors">
                    <patron :name="supporter.name" :tier="supporter.tier" :legacy="supporter.legacySupporter"/>
                </div>
            </div>
            <h4>One-Time Contributors:</h4>
            <p v-if="supportersPending"><i>Loading...</i></p>
            <p v-else-if="!oneTimeSupporters.length"><i>No one-time supporters at this time 🙁</i></p>
            <ul v-else>
                <li v-for="supporter in oneTimeSupporters">
                    {{ supporter.name }} - {{ formatCurrency(supporter.oneTimeContributions) }}
                </li>
            </ul>
            <h3 style="margin-top: 20px;">PayPal</h3>
            <p>
                I previously accepted tips/contributions via PayPal. Since Ko-fi allows both one-time and monthly
                contributions, I no longer accept contributions via PayPal.
            </p>
            <p>Previous Donors (contribution amounts are cumulative):</p>
            <ul>
                <li>David Thompson - {{ formatCurrency(50) }}</li>
                <li>Alexander White - {{ formatCurrency(40) }}</li>
                <li>Finikyu - {{ formatCurrency(25) }}</li>
                <li>Frote7 - {{ formatCurrency(21.23) }}</li>
                <li>TimothyMark - {{ formatCurrency(10.47) }}</li>
                <li>GKPunk - {{ formatCurrency(10) }}</li>
                <li>Jonathan Rokosz - {{ formatCurrency(10) }}</li>
                <li>Spencer Sabet - {{ formatCurrency(6) }}</li>
                <li>Brian McKenzie - {{ formatCurrency(5.55) }}</li>
                <li>srm022 - {{ formatCurrency(5) }}</li>
                <li>Derek Ashel - {{ formatCurrency(5) }}</li>
                <li>Esther de Bruin - {{ formatCurrency(5) }}</li>
                <li>Somdy Alafac - {{ formatCurrency(5) }}</li>
                <li>Gabriel Caballero - {{ formatCurrency(4.7) }}</li>
                <li>Nikjojo - {{ formatCurrency(3) }}</li>
            </ul>
        </div>
        <div class="home-button">
            <nuxt-link to="/">
                <game-button>
                    <game-icon icon="story" font-style="normal" />
                    Home
                </game-button>
            </nuxt-link>
        </div>
    </div>
</template>

<script setup>
//region SEO
useSeoMeta({
    ogTitle: () => Utils.siteTitle('Support the Site')
});

const config = useRuntimeConfig();
const supporters = ref(null);
const { data: supportersData, pending: supportersPending } = await useFetch(`${config.public.apiDomain}/api/supporters`, {
    lazy: true,
    server: false
});
watch(supportersData, newData => {
    supporters.value = newData.data;
    console.log(supporters.value);
});

const recurringContributors = computed(() => {
    if (!supporters.value) {
        return [];
    }

    return supporters.value.filter(x => x.recurringContributor);
});
const oneTimeSupporters = computed(() => {
    if (!supporters.value) {
        return [];
    }

    return supporters.value.filter(x => !x.recurringContributor);
});

function formatCurrency(value) {
    return Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(value);
}
//endregion
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
                background: $support-the-site;
                color: #fff;

                &:hover {
                    background: $support-the-site-hover;
                }
            }
        }

        .supporters > div {
            margin-bottom: 10px;
        }
    }
}
</style>
