<template>
    <div class="container">
        <nav>
            <h1>
                <img class="nav-logo" src="https://wordimpress.com/assets/wordpressIcon2.png" alt="">
            </h1>
            <!--menu items-->
            <slot></slot>
        </nav>
    </div>
</template>

<style lang="scss">
.nav-logo {
    max-width: 80px;
    max-height: 80px;
    /*vertical-align: sub;*/
}

h1 {
    float: left;
    margin: 0;
}
</style>

