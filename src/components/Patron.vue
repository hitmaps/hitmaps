<template>
    <div>
        <template v-if="link">
            <a :href="link">
                <div class="row patron-card">
                    <div v-if="image" class="col-3 patron-image"
                         :style="`background: url('${image}') center center / cover no-repeat`">
                    </div>
                    <div class="name-and-tier" :class="image ? 'col-9' : 'col-12'">
                        <p class="patron-name">{{ name }}</p>
                        <p>{{ tier }}</p>
                    </div>
                </div>
            </a>
        </template>
        <template v-else>
            <div class="row patron-card">
                <div v-if="image" class="col-3 patron-image"
                     :style="`background: url('${image}') center center / cover no-repeat`">
                </div>
                <div class="name-and-tier" :class="image ? 'col-9' : 'col-12'">
                    <p class="patron-name">{{ name }}</p>
                    <p class="tier">{{ tier }}</p>
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
            tier: null
        }
    }
</script>

<style lang="scss" scoped>
    a {
        color: white;
    }

    .patron-card {
        height: 100px;

        .patron-image {
            text-align: right;

            img {
                height: 100px;
                max-height: 100px;
            }
        }

        .name-and-tier {
            background: rgba(255, 255, 255, .1);
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
        }
    }
</style>
