<template>
    <div class="container">
        <nav>
            <h1>
                <img class="nav-logo" src="~image/logo.png" alt="">
            </h1>
            <component :is="currentView">
            </component>
            <!--burger-menu-->
            <div class="burger">
                <input class="burger-check" id="burger-check" type="checkbox">
                <label for="burger-check" class="burger-button"></label>
                <nav class="burger-nav">
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Stuffs</a>
                        </li>
                        <li>
                            <a href="#">Other stuffs</a>
                        </li>
                        <li>
                            <a href="#">Cats</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </nav>
    </div>
</template>

<script>
import HeaderMenu from './HeaderMenu.vue';
import UserMenu from './UserMenu.vue';

export default {
    computed: {
        currentView() {
            return this.$store.state.user == '' ? HeaderMenu : UserMenu;
        }
    }
};
</script>

<style lang="scss">
nav {
    height: 100%;
    max-height: 100%;
    font-size: 1.8rem;

    .burger {
        float: right;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        .burger-check {
            display: none;
        }

        $burger--thickness: 4px;
        .burger-button {
            $width: 28px;

            display: inline-block;
            border: 0;
            background: none;
            outline: 0;
            padding: 0;
            cursor: pointer;

            border-bottom: $burger--thickness solid currentColor;
            width: $width;

            transition: border-bottom 1s ease-in-out;
            -webkit-transition: border-bottom 1s ease-in-out; // Fix for extra space in Firefox
            @include media(">=768px") {
                display: none;
            }

            &::-moz-focus-inner {
                border: 0;
                padding: 0;
            }

            &:before {
                content: "";
                display: block;
                border-bottom: $burger--thickness solid currentColor;
                width: 100%;
                margin-bottom: 5px;
                transition: transform 0.5s ease-in-out;
                -webkit-transition: -webkit-transform 0.5s ease-in-out;
            }

            &:after {
                content: "";
                display: block;
                border-bottom: $burger--thickness solid currentColor;
                width: 100%;
                margin-bottom: 5px;
                transition: transform 0.5s ease-in-out;
                -webkit-transition: -webkit-transform 0.5s ease-in-out;
            }
        }

        $navigation__transition: max-height 0.5s ease-in-out;
        .burger-nav {
            position: fixed;
            top: 80px;
            left: 0;
            width: 100%;
            overflow: hidden;
            max-height: 0;
            height: auto;
            z-index: 550;

            @include media(">=768px") {
                display: none;
            }

            transition: $navigation__transition;

            ul {
                margin: 0;
                padding: 0;

                li {
                    list-style: none;
                    font-size: 1.2rem;
                    padding: 5px 0;
                    height: 20px;
                    line-height: 20px;

                    a {
                        text-decoration: none;

                        &:hover {
                            text-decoration: underline;
                        }
                    }
                }
            }
        }

        .burger-check:checked~.burger-nav {
            max-height: 500px;
            transition: $navigation__transition;
        }
    }

    h1 {
        width: 80px;
        height: 80px;
    }

    h1,
    .nav-logo {
        max-width: 80px;
        max-height: 80px;
        /*vertical-align: sub;*/
    }

    h1 {
        float: left;
        margin: 0;
    }
}
</style>

