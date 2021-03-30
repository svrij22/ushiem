<template>
    <div>
        <div v-b-toggle.sidebar-right>
            <div class="menu-btn">
                <v-icon name="bars" scale="2" class="mr-2"/>
                Menu
            </div>
        </div>

        <b-sidebar id="sidebar-right"
                   title="Menu"
                   right
                   bg-variant="dark"
                   text-variant="light"
                   shadow="sm"
                   backdrop>
                <b-list-group bg-variant="dark">
                    <b-list-group-item href="#" @click="$router.push('/')">Home</b-list-group-item>
                    <b-list-group-item href="#" @click="$router.push('/ontwerpen')">Ontwerpen</b-list-group-item>
                    <b-list-group-item href="#" @click="$router.push('/aanleg')">Aanleg</b-list-group-item>
                    <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
                    <b-list-group-item>Vestibulum at eros</b-list-group-item>
                </b-list-group>
        </b-sidebar>
    </div>
</template>

<script>
    export default {
        name: "SideBarComponent"
    }
</script>

<style scoped>
    .b-sidebar{
        transition: 3s!important;
    }

    .menu-btn{
        color: #6d6d6d;
        display: flex;
        font-size: 20px;
        align-items: center;
    }

    .list-group-item{
        background-color: unset!important;
        border-color: #716b6b !important;
        border-left: none!important;
        border-right: none!important;
        text-align: left;
        color: white;
    }

    .list-group-item:hover{
        background-color: #262d34 !important;
        color: white;
    }
</style>