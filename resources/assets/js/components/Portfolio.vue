<template>

     <div class="container view-content project-list">

        <div class="row">

            <div class="col-md-4">
                <router-link to="/portfolio/ctgc" class="project-link">
                    <h2 class="project-title">CTGC</h2>
                    <img src="/images/ctgc/cover.jpg">
                </router-link>
            </div>
            <div class="col-md-4">
                <router-link to="/portfolio/vmware" class="project-link">
                    <h2 class="project-title">VMware Jedi Promo</h2>
                    <img src="/images/vmware/cover.jpg">
                </router-link>
            </div>
            <div class="col-md-4">
                <router-link to="/portfolio/cisco" class="project-link">
                    <h2 class="project-title">Cisco - Infinite Video</h2>
                    <img src="/images/cisco/cover.jpg">
                </router-link>
            </div>

            <div class="col-md-4">
                <router-link to="/portfolio/canned-pears" class="project-link">
                    <h2 class="project-title">PNW Canned Pears</h2>
                    <img src="/images/canned-pears/cover.jpg">
                </router-link>
            </div>
            <div class="col-md-4">
                <router-link to="/portfolio/verizon-meet" class="project-link">
                    <h2 class="project-title">Verizon - Meet with Ease</h2>
                    <img src="/images/verizon-meet/cover.jpg">
                </router-link>
            </div>
             <div class="col-md-4">
                <router-link to="/portfolio/pear-reports" class="project-link">
                    <h2 class="project-title">USA Pears - Intl. Reports</h2>
                    <img src="/images/pear-reports/cover.jpg">
                </router-link>
            </div>

            <div class="col-md-4">
                <router-link to="/portfolio/verizon-connectivity" class="project-link">
                    <h2 class="project-title">Verizon - Connectivity</h2>
                    <img src="/images/verizon-connectivity/cover.jpg">
                </router-link>
            </div>
            <div class="col-md-4">
                <router-link to="/portfolio/mwl" class="project-link">
                    <h2 class="project-title">MWL - Membership System</h2>
                    <img src="/images/mwl/cover.jpg">
                </router-link>
            </div>
            <div class="col-md-4">
                <router-link to="/portfolio/sweetango" class="project-link">
                    <h2 class="project-title">Sweetango</h2>
                    <img src="/images/sweetango/cover.jpg">
                </router-link>
            </div>

            <div class="col-md-4">
                <router-link to="/portfolio/naturipe" class="project-link">
                    <h2 class="project-title">Naturipe Farms</h2>
                    <img src="/images/naturipe/cover.jpg">
                </router-link>
            </div>
            <div class="col-md-4">
                <router-link to="/portfolio/imbibe" class="project-link">
                    <h2 class="project-title">Imbibe Magazine</h2>
                    <img src="/images/imbibe/cover.jpg">
                </router-link>
            </div>
            <div class="col-md-4">
                <router-link to="/portfolio/mine" class="project-link">
                    <h2 class="project-title">This Site</h2>
                    <img src="/images/mine/cover.jpg">
                </router-link>
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