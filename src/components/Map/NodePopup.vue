<template>
    <modal id="popover-modal" tabindex="-1" flush>
        <div v-if="node" class="popover-content">
            <div class="image" v-if="node.image">
                <img :src="node.image" class="img-fluid">
            </div>
            <div class="details" :class="node.image ? '' : 'no-image'">
                <div class="icon-and-details">
                    <div class="icon" v-if="fontIconForNodeSubgroup !== 'corrupt'">
                        <game-icon :icon="fontIconForNodeSubgroup" font-style="solid"/>
                    </div>
                    <div class="inner-details">
                        <p class="group" v-if="node.name !== ''">{{ node.subgroup === 'agency-pickup' ? agencyPickupName : node.group }}</p>
                        <p class="name">{{ node.name === '' ? node.group : node.name }}</p>
                    </div>
                </div>
                <div class="description" v-if="descriptionNote">
                    {{ descriptionNote.text }}
                </div>
                <div class="notes" v-if="node.notes.filter(note => note.type !== 'description').length">
                    <div v-for="note in node.notes.filter(note => note.type !== 'description')" class="note" :class="note.type">
                        <div class="type">{{ getLocalizedNoteType(note) }}</div>
                        <div>{{ note.text }}</div>
                    </div>
                </div>
                <div class="target" v-if="node.target !== null && node.target !== '' && node.subgroup !== 'agency-pickup'">
                    <game-icon v-if="fontIconForActionTarget" :icon="fontIconForActionTarget" font-style="normal" />
                    <div class="header-and-target">
                        <div>{{ actionTextForActionTarget }}</div>
                        <div class="action-or-npc-name">{{ node.target }}</div>
                    </div>
                </div>
            </div>
        </div>
        <template v-slot:modal-footer>
            <template v-if="loggedIn && editorState === 'ITEMS'">
                <div class="edit-delete-buttons">
                    <div class="edit">
                        <game-button data-dismiss="modal" @click="$emit('edit-node', node.id)">
                            <game-icon icon="edit" font-style="normal"/>
                            {{ $t('map.edit') }}
                        </game-button>
                    </div>
                    <div class="delete">
                        <game-button @click="showConfirmDeletion" v-if="!showingConfirmDeletion">
                            <game-icon icon="trash" font-style="normal"/>
                            {{ $t('map.delete') }}
                        </game-button>
                        <game-button @click="deleteNode" v-if="showingConfirmDeletion" :disabled="blockDeleteButton">
                            <game-icon icon="arrow-right" font-style="normal"/>
                            {{ $t('map.confirm-item-deletion-title', { item: 'Node' }) }}
                        </game-button>
                    </div>
                </div>
            </template>
            <game-button data-dismiss="modal">
                <game-icon icon="failed" font-style="normal"/>
                {{ $t('form.close') }}
            </game-button>
        </template>
    </modal>
</template>

<script>
import Modal from "../Modal";
import GameIcon from "../GameIcon";
import GameButton from "../GameButton";
export default {
    name: "NodePopup",
    components: {GameButton, GameIcon, Modal},
    props: {
        game: Object,
        node: Object,
        loggedIn: Boolean,
        editorState: String
    },
    data() {
        return {
            showingConfirmDeletion: false,
            blockDeleteButton: false
        }
    },
    computed: {
        agencyPickupName() {
            // TODO Localize
            return this.node.icon === 'agency-pickup' ? 'Agency Pickup' : 'Hidden Stash';
        },
        descriptionNote() {
            return this.node.notes.find(node => node.type === 'description');
        },
        backgroundCss() {
            if (!this.node.image) {
                return '';
            }

            let backgroundCss;
            if (this.game.slug === 'absolution') {
                backgroundCss = `background-image: url('${this.node.image}'), radial-gradient(#69696a, #171718)`;
            } else {
                backgroundCss = `background: url('${this.node.image}') center center / cover no-repeat`;
            }

            return backgroundCss;
        },
        actionTextForActionTarget() {
            if (this.node.icon === 'poison') {
                return this.$t('map.npc');
            }

            if (['interaction', 'sabotage', 'distraction', 'alarm'].includes(this.node.subgroup)) {
                return this.$t('map.action');
            }

            return null;
        },
        fontIconForActionTarget() {
            if (this.node.icon === 'poison') {
                return 'npc';
            }

            if (['interaction', 'sabotage', 'distraction', 'alarm'].includes(this.node.subgroup)) {
                return 'settings';
            }

            return null;
        },
        fontIconForNodeSubgroup() {
            switch (this.node.subgroup) {
                case 'sabotage':
                case 'explosive':
                    return 'explosive';
                case 'distraction':
                    return 'distraction';
                case 'poison':
                case 'poison-weapon':
                    return 'poison';
                case 'misc-item':
                    return this.getMiscItemIcon(this.node);
                case 'intel':
                case 'camera-intel':
                    return 'intel';
                case 'disguise':
                    return 'disguise';
                case 'blend-in':
                    return 'emote';
                case 'conceal-item':
                case 'weapon-crate':
                    return 'loadout';
                case 'locked-door':
                    return 'locked';
                case 'interaction':
                    return 'tool';
                case 'alarm':
                    return 'online';
                case 'frisk':
                    return 'frisk';
                case 'location':
                    return 'story';
                case 'lethal-melee':
                case 'non-lethal-melee':
                    return 'melee';
                case 'firearm':
                    return 'concealed-weapon';
                case 'ammo':
                    return 'difficulty-3';
                case 'starting-location':
                    return 'starting';
                case 'exit-location':
                    return 'exit';
                case 'agency-pickup':
                    return 'stash-point-empty';
                case 'area':
                    return 'info';
                case 'passage':
                    return 'arrow-right';
                case 'up-pipe':
                case 'up-stair':
                    return 'elevation';
                default:
                    return 'corrupt';
            }
        }
    },
    methods: {
        resetDeletionState() {
            this.showingConfirmDeletion = false;
        },
        getLocalizedNoteType(note) {
            return note.type === 'info' ? this.$t('map.information') : this.$t(`map.${note.type}`);
        },
        getMiscItemIcon(node) {
            if (node.icon.includes('key')) {
                return 'key';
            }

            return 'challenge-category-item';
        },
        showConfirmDeletion() {
            this.showingConfirmDeletion = true;
        },
        deleteNode() {
            this.blockDeleteButton = true;
            this.$http.delete(`${this.$domain}/api/nodes/${this.node.id}`)
                .then(_ => {
                    this.blockDeleteButton = false;
                    this.showingConfirmDeletion = false;
                    $('#edit-item-modal').modal('hide');
                    this.$toast.success({
                        message: 'Item deleted!'
                    });
                    this.$emit('delete-node', this.node.id);
                }).catch(_ => {
                    this.blockDeleteButton = false;
                    this.showingConfirmDeletion = false;
                    this.$toast.error({
                        message: 'Failed to delete item!'
                    });
                });
        }
    }
}
</script>

<style lang="scss" scoped>
.popover-content {
    display: flex;

    @media(max-width: 991px) {
        flex-direction: column;
    }

    .image {
        @media(min-width: 992px) {
            width: 45%;
        }
        @media(max-width: 991px) {
            width: 100%;
        }
    }

    .details {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        @media(min-width: 992px) {
            width: 55%;

            &.no-image {
                width: 100%;
            }
        }
        @media(max-width: 991px) {
            width: 100%;
        }

        padding: 25px 20px;


        .icon-and-details {
            display: flex;

            .inner-details {
                margin-left: 10px;

                p {
                    margin-bottom: 0;
                    text-transform: uppercase;

                    &.group {
                        font-weight: 100;
                        font-size: 16px;
                        line-height: 16px;
                    }

                    &.name {
                        font-weight: 600;
                        line-height: 32px;
                        font-size: 32px;
                    }
                }
            }
        }

        .description {
            border-top: dotted 1px #fff;
            margin-top: 15px;
            padding-top: 10px;
        }

        .target {
            margin-top: 10px;
            display: flex;

            i {
                display: inline-block;
                font-size: 24px;
                align-self: flex-start;
            }

            > div {
                display: inline-block;
                margin-left: 10px;
                text-transform: uppercase;

                font-weight: 100;
                font-size: 16px;
                line-height: 16px;

                .action-or-npc-name {
                    font-weight: 600;
                    line-height: 22px;
                    font-size: 22px;
                }
            }
        }
    }
}

.edit-delete-buttons {
    display: flex;
    margin-right: 0;

    .edit {
        margin-right: 5px;
        flex-grow: 1;
    }

    .delete {
        margin-left: 5px;
        flex-grow: 1;

        > button {
            background: #dc3545;
        }
    }
}

.notes {
    border-top: dotted 1px #fff;
    margin-top: 10px;

    > div {
        margin-top: 5px;
        padding: 10px;
        white-space: pre-line;

        &:first-child {
            margin-top: 10px;
        }
    }

    .note {
        background: rgb(58,63,73);

        .type {
            font-weight: bolder;
            text-transform: uppercase;
        }
    }

    .requirement {
        .in-game-description {
            display: none;
        }

        border-left: solid 3px #d00000;
    }

    .warning {
        .in-game-description {
            display: none;
        }

        border-left: solid 3px #ffa500;
    }

    .info {
        .in-game-description {
            display: none;
        }

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
</style>