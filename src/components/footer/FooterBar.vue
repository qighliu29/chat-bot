<template>
    <div class="container footer-area">
        <div class="footer-inner">
            <ul>
                <li>
                    <a href="./index.html">Index Page</a>
                </li>
            </ul>
            <div class="copyright">©Copyright</div>
        </div>
        <div class="social-area">
            <a href="">
                <i class="fa fa-twitter fa-3x" aria-hidden="true"></i>
            </a>
        </div>
    </div>
</template>

<style lang="scss">
.footer-area {
    padding: 30px 20px;
    flex-direction: column;
    display: flex;

    @include media(">=768px") {
        padding: 50px 10px;
        flex-direction: row;
        justify-content: space-between;
    }

    .footer-inner {
        margin-bottom: 2.5rem;

        @include media(">=768px") {
            margin-bottom: 0;
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0 0 2.5rem 0;

            a {
                text-decoration: none;
                outline: none;
                font-size: 1.5rem;
                color: #8d9aa8;
                font-weight: normal;
            }
        }
    }

    .copyright {
        color: #8d9aa8;
        font-size: 14px;
    }

    .social-area {
        align-self: center;

        @include media(">=768px") {
            align-self: flex-end;
        }

        a {
            color: gray;
            &:hover {
                color: white;
            }
        }
    }
}
</style>
