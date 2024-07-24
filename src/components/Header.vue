<script>
import { RouterLink, } from 'vue-router'
export default {
    components: {
        RouterLink

    }
}
</script>

<template>
    <div class="headerArea">
        <RouterLink class="routeItem" to="/"><i class="fa-solid fa-house house"></i></RouterLink>
        <div class="itemArea">
            <RouterLink class="routeItem" to="/Login">

                Login
            </RouterLink>
            <RouterLink class="routeItem" to="/SignUp">

                Sign up

            </RouterLink>
            <RouterLink class="routeItem member" to="/Mmeber">

                Member
            </RouterLink>
        </div>


    </div>

</template>

<style scoped lang="scss">
$mainColor: #FFF3D9;
$secondColor: #C85250;
$textColor: #E9EAE0;

.headerArea {
    width: 100%;
    height: 15vh;
    background: $secondColor;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    border-radius: 1%;


    .itemArea {
        height: 100%;
        width: 30%;
        display: flex;
        position: absolute;
        align-items: center;
        justify-content: space-around;
        right: 0;


        .routeItem {
            height: 100%;
            width: 100%;
            font-size: 18px;
            color: #E9EAE0;
            text-decoration: none;
            cursor: pointer;
            margin: 5%;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            position: relative;

        }

        .routeItem::before {

            content: "\f04b";

            font-size: 18px;

            font-weight: 500;

            font-family: "FontAwesome";

            color: white;

            opacity: 0;
        }

        .routeItem:hover::before {

            opacity: 1;
        }
    }

    .house {
















    

        font-size: 45px;
        color: #E9EAE0;
        position: absolute;
        top: 30%
    }
}
</style>