<template>

     <div class="container view-content">

        <div class="row">
            <div class="col-md-4">
                one
            </div>
            <div class="col-md-4">
                two
            </div>
            <div class="col-md-4">
                three<br>four
            </div>
        </div>
    </div>

</template>

<style>
    .fade-enter-active {
      transition: opacity .5s
    }
    .fade-leave-active {
        transition: opacity 0s;
    }
    .fade-enter, .fade-leave-active {
      opacity: 0
    }
</style>

<script>

    export default{
    }
</script>