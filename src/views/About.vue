<template>
    <div
        class="content"
        style="background: url('/img/jpg/backgrounds/loading.jpg') no-repeat center center fixed; background-size: cover"
    >
        <div class="inner-content">
            <h1>About</h1>
            <h2>Some History and FAQs</h2>
            <hr>
            <h3>Hi There!</h3>
            <img src="//pbs.twimg.com/profile_images/1126837815445270529/e4RHHooR_400x400.png"
                 height="100" width="100"
                 alt="Picture of MrMike"
                 class="img-fluid"
                 style="display: inline-block; vertical-align: text-bottom">
            <p style="display: inline-block;margin-left: 5px;">I'm Mike Koch (MrMike), creator of hitman2maps.com. I'm currently working as a web developer while
                working on hitman2maps.com in my spare time.</p>
            <p>I started working on hitman2maps.com a month or so before HITMAN&trade; 2 was released, as I was not
            seeing any progress made on hitmanmaps.com. By building a site that allows outside contributions, maps
            for all six starting locations were created far faster than I could ever imagine.</p>
            <h3>FAQs</h3>
            <p><b>Are you affiliated with IO Interactive or hitmanmaps.com?</b></p>
            <p>Nope. Not at all. hitmanmaps.com was created by Winterbirds, which heavily influenced hitman2maps.com,
            as I wanted to provide a similar user experience to what hitmanmaps.com users were used to using.  However,
                I've never spoken to Winterbirds.</p>
            <p><b>Are you available for hire?</b></p>
            <p>Please check https://mikeko.ch to see if I'm currently available for hire.</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'about',
    title: 'About',
}
</script>

<style lang="scss">
.content {
    padding: 20px;

    > .inner-content {
        background-color: white;
        padding: 20px;
        font-family: 'nimbus_sans_lbold', sans-serif;

        h1 {
            text-transform: uppercase;
        }

        h2 {
            font-size: 1.25rem;
        }

        p {
            font-family: 'Roboto', 'Arial', sans-serif;
            font-weight: lighter;
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
