<template>
    <div
        class="modal game-modal fade"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
        v-bind="$attrs"
        :id="id"
    >
        <div class="modal-dialog modal-xl" role="document" :class="fullscreen ? 'fullscreen' : ''">
            <div class="modal-content">
                <div class="modal-header" v-if="modalTitle">
                    <h5 class="modal-title"
                        :id="id"
                        v-if="modalTitle"
                        v-html="modalTitle"></h5>
                    <button type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                            v-if="dismissable">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body d-flex flex-column" :style="flush ? 'padding: 0' : ''">
                    <slot></slot>
                </div>
                <div class="modal-footer">
                    <slot name="modal-footer"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Modal',
    props: {
        id: String,
        dismissable: Boolean,
        fullscreen: Boolean,
        modalTitle: String,
        flush: Boolean
    }
}
</script>

<style lang="scss">
.game-modal {
    background: rgba(0, 0, 0, 0.5);

    .modal-dialog {
        &.fullscreen {
            width: 95%;
            max-width: 95%;
        }

        .modal-content {
            background: transparent;
            border: none;

            .modal-header {
                font-family: 'nimbus_sans_lbold', sans-serif;
                text-transform: uppercase;
                border-bottom: none;
                border-radius: 0;

                background: $modal-background;
                color: $modal-text-color;

                h5 {
                    font-size: 1.5rem;
                }

                .close {
                    color: $modal-text-color;
                }
            }

            .modal-body {
                background: $modal-background;
                color: $modal-text-color;

                td {
                    color: $modal-text-color;
                }
            }

            .modal-footer {
                border-top: none;
                padding-left: 0;
                padding-right: 0;
                padding-top: 10px;
                display: block;

                > :last-child {
                    margin: 0;
                }

                #enroll-button {
                    margin-bottom: 10px;
                }
            }
        }
    }
}
</style>
