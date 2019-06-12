<template>
    <div class="modal game-modal fade"
         tabindex="-1"
         role="dialog"
         aria-hidden="true"
         v-bind="$attrs"
         :id="id"
    >
        <div class="modal-dialog modal-xl" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" :id="id" v-if="modalTitle" v-html="modalTitle"></h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" v-if="dismissable">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body d-flex flex-column">
                    <slot></slot>
                    <!--<div class="row">
                        <div
                                v-if="
                                        elusiveTarget.videoBriefingUrl != null
                                    "
                                class="col-xl"
                        >
                            <div
                                    class="embed-responsive embed-responsive-16by9"
                            >
                                <iframe
                                        :src="
                                                elusiveTarget.videoBriefingUrl
                                            "
                                        class="embed-responsive-item"
                                        frameborder="0"
                                        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen
                                ></iframe>
                            </div>
                        </div>
                        <div class="col-xl">
                            <p v-html="elusiveTarget.briefing"></p>
                        </div>
                    </div>-->
                </div>
                <div class="modal-footer">
                    <slot name="modal-footer"></slot>
                    <!--<button
                            type="button"
                            class="btn btn-block btn-secondary"
                            data-dismiss="modal"
                    >
                        <img
                                src="/img/game-icons/modal-close.png"
                                class="normal img-fluid"
                                alt="Notification Icon"
                        />
                        <img
                                src="/img/game-icons/modal-close-inverted.png"
                                class="inverted img-fluid"
                                alt="Notification Icon"
                        />
                        Close
                    </button>-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Modal",
        props: {
            id: String,
            dismissable: Boolean,
            modalTitle: String
        }
    }
</script>

<style lang="scss">
    .game-modal {
        .modal-content {
            background: transparent;
            border: none;

            .modal-header {
                font-family: 'nimbus_sans_lbold', sans-serif;
                text-transform: uppercase;
                border-bottom: none;
                border-radius: 0;

                background: #fff;

                h5 {
                    font-size: 1.5rem;
                }
            }

            .modal-body {
                background: #fff;
            }

            .modal-footer {
                border-top: none;
                padding-left: 0;
                padding-right: 0;
                padding-top: 10px;
                display: block;

                > :not(:first-child) {
                    margin: 0;
                }

                #enroll-button {
                    margin-bottom: 10px;
                }

                .btn-block {
                    border-radius: 0;
                    text-transform: uppercase;
                    background: #fff;
                    color: #000;
                    font-family: 'nimbus_sans_lbold', sans-serif;
                    text-align: left;
                    font-size: 1.3rem;
                    transition: none;

                    img {
                        max-height: 32px;
                        max-width: 32px;
                        vertical-align: top;

                        &.normal {
                            display: inline-block;
                        }

                        &.inverted {
                            display: none;
                        }
                    }

                    &:hover {
                        background: #ff003c;
                        color: #fff;

                        img {
                            &.normal {
                                display: none;
                            }

                            &.inverted {
                                display: inline-block;
                            }
                        }
                    }
                }
            }
        }
    }
</style>