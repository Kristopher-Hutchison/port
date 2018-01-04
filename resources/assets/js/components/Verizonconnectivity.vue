<template>

     <div class="container project-content view-content">

        <div class="row portfolio-box">

            <div class="col-sm-6 project-nav">
                <router-link to="/portfolio/pear-reports">
                    <span class="nav-anim">&larr;</span> prev
                </router-link>
            </div>
            <div class="col-sm-6 project-nav text-right">
                <router-link to="/portfolio/mwl">
                    next <span class="nav-anim">&rarr;</span>
                </router-link>
            </div>


            <!-- <div class="col"></div> -->
            <div class="col">
                <div class="row project-title">
                    <div class="col-sm-11">
                        <h2 class="project-title">Verizon - Connectivity</h2>
                    </div>
                    <div class="col-sm-1 text-right">
                        <router-link class="close-btn" to="/portfolio">
                            <svg enable-background="new 0 0 100 100" id="Layer_1" version="1.1" viewBox="0 0 100 100" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon fill="#010101" points="77.6,21.1 49.6,49.2 21.5,21.1 19.6,23 47.6,51.1 19.6,79.2 21.5,81.1 49.6,53 77.6,81.1 79.6,79.2   51.5,51.1 79.6,23 "/></svg>
                            
                        </router-link>
                    </div>
                </div>
                <slick ref="slick">
                    <img src="/images/verizon-connectivity/home.jpg">
                </slick>

                <div class="row project-info">
                    <div class="col">
                        <h3>Responsibilities</h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                    </div>
                </div>

                <div class="row project-info">
                    <div class="col">
                        <h3>Tech</h3>
                        <ul>
                            <li>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</li>
                            <li>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</li>
                            <li>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</li>
                        </ul>
                    </div>
                </div>

                <div class="row project-info">
                    <div class="col">
                        <h3>Notes</h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                    </div>
                </div>

                <div class="row project-info">
                    <div class="col">
                        <div class="btn btn-primary"><a href="http://www.verizonenterprise.com/products/networking/connectivity/mid-digital-roadmap/" target="_blank">Visit Site</a></div>
                    </div>
                </div>

            </div>
            <!-- <div class="col"></div> -->
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