<script>

</script>


<template>
    <div class="content">
        <div class="title">
            <h1>PLEASE</h1>
            <h1>LOGIN</h1>
            <h1>FIRST</h1>
        </div>

        <div class="InputArea">
            <div class=" main Account">
                <h1>Account</h1>
                <h1>:</h1>
                <input type="text" placeholder="ACCOUNT">
            </div>

            <div class=" main Password">
                <h1>Password</h1>
                <h1 class="dot2">:</h1>

                <input type="text" placeholder="PASSWORD">
            </div>
        </div>



        <div class="login">

            <h1>LOGIN</h1>
            <i class="fa-solid fa-arrow-right"></i>
        </div>
    </div>

</template>


<style scoped lang="scss">
$mainColor: #FFF3D9;
$secondColor: #C85250;
$textColor: #E9EAE0;

.content {


    width: 100%;
    height: 155dvh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #FFF3D9;
    position: relative;

    .title {
        font-size: 65px;
        color: #C85250;
        width: 30%;
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 5%;
        animation: heartbeat 2.5s ease infinite;

        @keyframes heartbeat {
            0% {
                transform: scale(1);

                opacity: 1;
            }

            50% {
                transform: scale(0.5);
                opacity: 1;
            }

            100% {

                transform: scale(1);
                opacity: 1;
            }


        }
    }

    .InputArea {
        width: 100%;
        height: 40%;
        display: flex;
        flex-direction: column;

        justify-content: space-evenly;
        align-items: center;
        margin-top: 35%;

        .main {
            display: flex;
            width: 100%;
            height: 15%;

            justify-content: space-around;
            align-items: center;
            font-size: 40px;

            input {

                height: 100%;
                width: 58%;
                font-size: 70px;

                &::placeholder {
                    color: black;
                    font-size: 70px;
                    opacity: 0.5;
                    padding-left: 35%;
                    padding-bottom: 15%;

                }

                &:focus {
                    outline: none;
                }


            }



            .dot2 {

                margin-left: -3%;
            }








        }

    }

    .login {
        width: 40%;
        height: 10%;
        display: flex;
        font-size: 55px;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        &:hover {
            animation: heartbeat 1.5s ease infinite;
            color: #C85250;
        }

        @keyframes heartbeat {
            0% {
                transform: scale(1);

                opacity: 1;
            }

            50% {
                transform: scale(1.4);
                opacity: 1;
            }

            100% {

                transform: scale(1);
                opacity: 1;
            }


        }


        i {
            font-size: 100px;
            margin-left: 4%;

        }
    }
}
</style>