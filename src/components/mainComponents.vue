<script>


export default {
    data(){
        
        return{
            Array : [1,2,3,4]
        }
    }
        

}
</script>


<template>
    <div class="content">
        <div class="serch">
            <h1>搜尋:</h1>
            <input type="search" placeholder="搜尋問卷名稱">

        </div>

        <div class="time">
            <h1>統計時間:</h1>
            <input type="date" class="dateInput">
            <h1>到</h1>
            <input type="date" class="dateInput">
            <button>搜尋</button>

        </div>
        <div class="iconArea">
            <div class="iconChild One">

                <i class="fa-solid fa-trash-can"></i>
                <i class="fa-solid fa-plus"></i>


            </div>
            <div class="iconChild Two">
                <p>開放中 : </p>
                <i class="fa-regular fa-circle-check"></i>

            </div>
            <div class="iconChild Three">

                <p>已關閉:</p>
                <i class="fa-regular fa-circle-xmark"></i>


            </div>
            <div class="iconChild Four">
                <p>尚未開始:</p>
                <i class="fa-solid fa-spinner"></i>
            </div>
            <div class="iconChild Five">
                <P>未發布:</P>
                <i class="fa-solid fa-person-running"></i>


            </div>
        </div>

        <table class="content-table">

            <thead>
                <tr>
                    <th> </th>
                    <th>編號</th>
                    <th>問卷名稱</th>
                    <th>狀態</th>
                    <th>開始時間</th>
                    <th>結束時間</th>
                    <th>編輯</th>

                </tr>
            <tbody>
                <tr>
                    <td><input type="checkbox"></td>
                    <td>1</td>
                    <td>問卷一</td>
                    <td><i class="fa-regular fa-circle-check"></i></td>
                    <td>2024/7/23</td>
                    <td>2024/8/25</td>
                    <td class="GO">GO!</td>

                </tr>
                <tr>
                    <td><input type="checkbox"></td>
                    <td>2</td>
                    <td>問卷二</td>
                    <td><i class="fa-regular fa-circle-check"></i></td>
                    <td>2024/7/23</td>
                    <td>2024/8/25</td>
                    <td class="GO">GO!</td>

                </tr>
                <tr>
                    <td><input type="checkbox"></td>
                    <td>3</td>
                    <td>問卷三</td>
                    <td><i class="fa-regular fa-circle-check"></i></td>
                    <td>2024/7/23</td>
                    <td>2024/8/25</td>
                    <td class="GO">GO!</td>

                </tr>
                <tr>
                    <td><input type="checkbox"></td>
                    <td>4</td>
                    <td>問卷四</td>
                    <td><i class="fa-regular fa-circle-check"></i></td>
                    <td>2024/7/23</td>
                    <td>2024/8/25</td>
                    <td class="GO">GO!</td>

                </tr>
                <tr>
                    <td><input type="checkbox"></td>
                    <td>5</td>
                    <td>問卷五</td>
                    <td><i class="fa-regular fa-circle-check"></i></td>
                    <td>2024/7/23</td>
                    <td>2024/8/25</td>
                    <td class="GO">GO!</td>

                </tr>
                <tr>
                    <td><input type="checkbox"></td>
                    <td>6</td>
                    <td>問卷六</td>
                    <td><i class="fa-regular fa-circle-check"></i></td>
                    <td>2024/7/23</td>
                    <td>2024/8/25</td>
                    <td class="GO">GO!</td>

                </tr>
                <tr>
                    <td><input type="checkbox"></td>
                    <td>7</td>
                    <td>問卷七</td>
                    <td><i class="fa-regular fa-circle-check"></i></td>
                    <td>2024/7/23</td>
                    <td>2024/8/25</td>
                    <td class="GO">GO!</td>

                </tr>
                <tr>
                    <td><input type="checkbox"></td>
                    <td>8</td>
                    <td>問卷八</td>
                    <td><i class="fa-regular fa-circle-check"></i></td>
                    <td>2024/7/23</td>
                    <td>2024/8/25</td>
                    <td class="GO">GO!</td>

                </tr>
                <tr>
                    <td><input type="checkbox"></td>
                    <td>9</td>
                    <td>問卷九</td>
                    <td><i class="fa-regular fa-circle-check"></i></td>
                    <td>2024/7/23</td>
                    <td>2024/8/25</td>
                    <td class="GO">GO!</td>

                </tr>
                <tr>
                    <td><input type="checkbox"></td>
                    <td>10</td>
                    <td>問卷十</td>
                    <td><i class="fa-regular fa-circle-check"></i></td>
                    <td>2024/7/23</td>
                    <td>2024/8/25</td>
                    <td class="GO">GO!</td>

                </tr>

            </tbody>
            </thead>

        </table>






    </div>





</template>


<style scoped lang="scss">
$mainColor: #FFF3D9;
$secondColor: #C85250;
$textColor: #E9EAE0;


.content {

    width: 100%;
    height: 160dvh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #FFF3D9;
    padding-top: 0;

}

.serch {
    width: 100%;
    height: 4%;
    display: flex;
    justify-content: left;
    align-items: center;
    margin-top: 1%;
    padding-left: 2%;



    h1 {
        width: 10%;


    }

    input {
        width: 50%;
        height: 100%;
        font-size: 35px;


        &::placeholder {
            color: black;
            padding-left: 25%;
            opacity: 0.5;

        }

        &:focus {
            outline: none;

        }
    }
}

.time {

    width: 100%;
    height: 3%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 15%;
    margin-bottom: 10%;

    .dateInput {
        width: 35%;
        height: 100%;
        font-size: 25px;
        padding-left: 10%;
    }

    button {
        width: 80px;
        height: 100%;
        font-size: 25px;
        background: $secondColor;
        color: #E9EAE0;
        border-radius: 15%;
        cursor: pointer;
        transition: 0.1s;


        &:hover {
            color: $secondColor;
            background: white
        }

        &:active {
            scale: 0.6;




        }

    }
}

.iconArea {

    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0;
    align-items: center;

    .iconChild {

        height: 100%;
        width: 20%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;


        i {
            font-size: 48px;
            margin-right: 15%;
        }

        p {
            font-size: 30px;

        }



    }


}


.content-table {

    border-collapse: collapse;

    margin: 25px 0;

    min-width: 100%;
    min-height: 34%;

    font-size: 30px;




    th {

        background: $secondColor;
        color: white;
        font-weight: bold;
        text-align: center;
        border-right: 2px solid white;

    }

    td {
        border-right: 2px solid $secondColor ;
        padding: 15px, 15px;
        text-align: center;
    }

    tbody,
    tr {
        border-bottom: 2px solid $secondColor ;
    }

    input {
        width: 80px;
        height: 20px;
        accent-color: $secondColor;
    }


    
    .GO{

        width: 10%;
        height: 10%;
        transform: 1s;
        cursor: pointer;
        &::before{
            content: "\f04b";
            
            font-size: 25px;
            
            font-weight: 500;
            
            font-family: "FontAwesome";
            
            color: $secondColor;
            
            opacity: 0;}
            
            &:hover::before{
                opacity: 1;
                
            }

            &:hover{
                scale: 1.2;
                transform: 0.5;
                color: $secondColor;
            }

            
            
        }
    }
    


</style>
