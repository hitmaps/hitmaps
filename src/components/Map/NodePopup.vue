<template>
    <div>
        <div class="image-and-name" :class="`game-${this.game.slug}`" :style="backgroundCss" v-if="node.image">
            <p class="flex-push">&nbsp;</p>
            <div class="name">{{ node.name }}</div>
            <div class="group">{{ node.group }}</div>
        </div>
        <div class="no-image" v-else>
            <div class="name">{{ node.name }}</div>
            <div class="group">{{ node.group }}</div>
        </div>
        <div class="target" v-if="node.target !== null && node.target !== '' && node.targetIcon !== ''">
            <i class="far" :class="node.targetIcon"></i>
            <span>{{ node.target }}</span>
        </div>
        <div class="notes">
            <div v-for="note in node.notes" :class="note.type">
                <div class="in-game-description">{{ $t('map.in-game-description') }}</div>
                <div>{{ note.text }}</div>
            </div>
        </div>
        <div v-if="loggedIn">
            <button class="btn btn-danger btn-sm" @click="$emit('delete-node', node.id)">
                <i class="fas fa-times"></i>
            </button>
            <button class="btn btn-warning btn-sm" @click="$emit('edit-node', node.id)">
                <i class="fas fa-pencil-alt"></i>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "NodePopup",
    props: {
        game: Object,
        node: Object,
        loggedIn: Boolean
    },
    computed: {
        backgroundCss() {
            if (!this.node.image) {
                return '';
            }

            let backgroundCss = `background-image: url(${this.node.image})`;

            if (this.game.slug === 'absolution') {
                backgroundCss += ', radial-gradient(#69696a, #171718)';
            }

            return backgroundCss;
        }
    }
}
</script>

<style lang="scss" scoped>
    .image-and-name {
        background-position-x: center;
        background-position-y: center;
        background-size: cover;
        height: 200px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        display: flex;
        flex-direction: column;
        text-shadow: 2px 2px #000;

        .flex-push {
            flex-grow: 1;
        }

        .name {
            color: #fff;
            text-transform: uppercase;
            padding: 5px 10px;
            font-size: 1.3em;
            font-weight: bolder;
            background: rgba(0,0,0,.4);
        }

        .group {
            color: #fff;
            text-transform: uppercase;
            font-weight: bolder;
            padding: 0 10px 5px;
            background: rgba(0,0,0,.4);
        }

        &.game-absolution {
            background-color: #000;
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
        }
    }

    .no-image {
        .name {
            color: #000;
            text-transform: uppercase;
            padding: 10px 10px 0;
            font-size: 1.3em;
            font-weight: bolder;
        }

        .group {
            color: #aaa;
            text-transform: uppercase;
            font-weight: bolder;
            padding: 0 10px;
        }
    }

    .target {
        padding: 0 10px;
        color: #666;
    }

    .notes {
        margin-top: 10px;
        margin-bottom: 10px;

        > div {
            padding: 10px;
            white-space: pre-line;

            &:not(:last-child) {
                margin-bottom: 10px;
            }
        }

        .requirement {
            .in-game-description {
                display: none;
            }

            color: #721c24;
            background: #f8d7da;
            border-left: solid 3px #d00000;
        }

        .warning {
            .in-game-description {
                display: none;
            }

            color: #856404;
            background: #fff3cd;
            border-left: solid 3px #ffa500;
        }

        .info {
            .in-game-description {
                display: none;
            }

            color: #0c5460;
            background: #b7d4ff;
            border-left: solid 3px #0000e0;
        }

        .description {
            .in-game-description {
                text-transform: uppercase;
                font-weight: bolder;
                color: #404040;
            }

            color: #666;
            background: #e4e4e4;
            border-left: solid 3px #666666;
        }
    }

    [data-action='delete-btn'] {
        margin-left: 10px;
    }
</style>