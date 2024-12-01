<template>
    <div class="supporter">
        <template v-if="link">
            <a :href="link">
                <div class="row patron-card">
                    <div v-if="image && false" class="col-3 patron-image"
                         :style="`background: url('${image}') center center / cover no-repeat`">
                    </div>
                    <div class="name-and-tier">
                        <p class="patron-name">{{ name }}</p>
                        <p>{{ tier }}</p>
                    </div>
                </div>
            </a>
        </template>
        <template v-else>
            <div class="patron-card">
                <div v-if="image && false" class="col-3 patron-image"
                     :style="`background: url('${image}') center center / cover no-repeat`">
                </div>
                <div class="name-and-tier">
                    <p class="patron-name">{{ name }}</p>
                    <p class="tier">{{ tier }}</p>
                    <p v-if="legacy"><i>Legacy Patreon Supporter</i></p>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    name: "Patron",
    props: {
        link: null,
        image: null,
        name: null,
        tier: null,
        legacy: {
            type: Boolean,
            required: false,
            default: false
        }
    }
}
</script>

<style lang="scss" scoped>
a {
    color: white;
}

.supporter {
    background: rgba(255, 255, 255, .1);

    .patron-card {
        padding-left: 10px;

        .patron-image {
            text-align: right;

            img {
                height: 100px;
                max-height: 100px;
            }
        }

        .name-and-tier {
            display: flex;
            flex-direction: column;
            justify-content: center;

            .patron-name {
                font-weight: bolder;
                font-size: 1.4rem;
                margin-bottom: 0;
            }

            .tier {
                font-weight: 200;
            }

            p {
                margin-bottom: 0;
            }
        }
    }
}
</style>
