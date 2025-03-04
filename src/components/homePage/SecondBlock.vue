<template>
<div class="wrapper">
    <div class="content">
        <div class="text">Почему выберают<br> нас?</div>
        <div class="left">
            <div class="interface">
                <div class="interface-content">
                    <div class="interface-text">
                        <span class="one">1</span>
                        <span class="one-title">Простой интерфейс</span>
                    </div>
                    <div class="interface-context">
                        <span>Мы сделали наш сайт интуитивно понятным, чтобы вы могли легко начать</span>
                    </div>
                </div>
                <div class="interface-bottom">
                    <div class="inteface-bottom-text"><span>Отслеживать свои финансы без лишних усилий.</span></div>
                </div>
            </div>
            <div class="analysis">
                <div class="analysis-top"></div>
            </div>
        </div>
        <div class="center">
            <span class="five">5</span>
            <span class="mobile">Мобильное <br>приложение</span>
            <span class="mobile-text">
                Отслеживайте<br> 
                свои финансы в<br> 
                любое время и в<br> 
                любом месте с<br> 
                помощью нашего<br> 
                мобильного<br> 
                приложения.
            </span>
        </div>
        <div class="right">
            <div class="target">
                <div class="target-bottom"></div>
            </div>
            <div class="safety">
                <div class="safety-top"></div>
            </div>
        </div>
    </div>
</div>
</template>


<style scoped>
.wrapper{
    padding-top: 92px;
    /* padding-bottom: 108px; */
    padding-left: 51px;
    padding-right: 51px;
    top: -241px;
    position: relative;
}
.content{
    width: 100%;
    height: 813px;
    background: #E2E2E2;
    border-radius: 45px;
    padding: 112px 50px;
    padding-bottom: 50px;
    display: flex;
    justify-content: space-between;
    gap: 32px;
}
.text{
    color: #000000;
    font-size: 64px;
    text-align: center;
    position: absolute;
    top: 98px;
    left: 15%;
    right: 15%;
    white-space: pre-line;
}
.interface-content{
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-around;
    z-index: 1;
}
.interface-text{
    display: flex;
    align-items: center;
    gap: 18px;
    padding-left: 51px;
}
.interface-context{
    z-index: 1;
    font-weight: 300;
    font-size: 24px;
    line-height: 28.8px;
    letter-spacing: 0%;
    color: #FFFFFF;
    padding-left: 10px;
}
.inteface-bottom-text{
    z-index: 1;
    position: relative;
    font-weight: 300;
    font-size: 24px;
    line-height: 28.8px;
    letter-spacing: 0%;
    color: #FFFFFF;
    padding-left: 10px;
    text-align: center;
}
.one{
    color: #ffffff;
    font-size: 96px;
    font-weight: 600;
    height: auto;
}
.one-title{
    color: #b5182d;
    font-size: 40px;
    text-align: center;
}
.five {
    color: #ffffff;
    font-size: 96px;
    font-weight: 600;
    height: auto;
}
.center{
    background: #1E1E27;
    box-shadow: 0px 0px 32.5px 0px #00000040;
    width: auto;
    height: 539px;
    position: relative;
    margin-top: 90px;
    padding-top: 26px;
    padding-bottom: 46px;
    padding-left: 57px;
    padding-right: 57px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 31px;
    border-radius: 73px;
}
.mobile{
    color: #b5182d;
    font-size: 40px;
    text-align: center;
}
.mobile-text{
    font-family: Roboto Slab;
    font-weight: 300;
    font-size: 24px;
    line-height: 30.64px;
    letter-spacing: 0%;
    text-align: center;
    color: #FFFFFF;
    white-space: pre;
}
.left {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    width: 45%;
    height: auto;
}
.interface {
    width: 100%;
    background: #1E1E27;
    height: 37%;
    border-top-left-radius: 85px;
    border-top-right-radius: 85px;
    border-bottom-right-radius: 85px;
    position: relative;
}
.interface-bottom{
    position: absolute;
    background: #1E1E27;
    width: 40%;
    height: 66%;
    bottom: -65%;
    border-bottom-left-radius: 85px;
    border-bottom-right-radius: 85px;
}
.interface-bottom::before{
    content: "";
    position: absolute;
    width: 90px;
    height: 90px;
    background: transparent;
    border-radius: 50%;
    top: 0px;
    right: -90px;
    box-shadow: -40px -40px 0 #1E1E27;
    z-index: 0;
}
.analysis {
    width: 100%;
    background: #1E1E27;
    height: 37%;
    border-bottom-left-radius: 85px;
    border-bottom-right-radius: 85px;
    border-top-left-radius: 85px;
    position: relative;
}
.analysis-top{
    position: absolute;
    background: #1E1E27;
    width: 40%;
    height: 66%;
    top: -65%;
    right: 0px;
    border-top-left-radius: 85px;
    border-top-right-radius: 85px;
}
.analysis-top::after{
    content: "";
    position: absolute;
    width: 90px;
    height: 90px;
    background: transparent;
    border-radius: 50%;
    bottom: 0px;
    left: -90px;
    box-shadow: 40px 40px 0 #1E1E27;}
.right {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    width: 45%;
    height: auto;
}
.target {
    width: 100%;
    background: #1E1E27;
    height: 37%;
    border-top-left-radius: 85px;
    border-top-right-radius: 85px;
    border-bottom-left-radius: 85px;
    position: relative;
}
.target-bottom{
    position: absolute;
    background: #1E1E27;
    width: 40%;
    height: 66%;
    bottom: -65%;
    right: 0px;
    border-bottom-left-radius: 85px;
    border-bottom-right-radius: 85px;
}
.target-bottom::before{
    content: "";
    position: absolute;
    width: 90px;
    height: 90px;
    background: transparent;
    border-radius: 50%;
    top: 0px;
    left: -90px;
    box-shadow: 40px -40px 0 #1E1E27;
}
.safety {
    width: 100%;
    background: #1E1E27;
    height: 37%;
    border-bottom-left-radius: 85px;
    border-bottom-right-radius: 85px;
    border-top-right-radius: 85px;
    position: relative;
}
.safety-top{
    position: absolute;
    background: #1E1E27;
    width: 40%;
    height: 66%;
    top: -65%;
    left: 0px;
    border-top-left-radius: 85px;
    border-top-right-radius: 85px;
}
.safety-top::after{
    content: "";
    position: absolute;
    width: 90px;
    height: 90px;
    background: transparent;
    border-radius: 50%;
    bottom: 0px;
    right: -89px;
    box-shadow: -40px 40px 0 #1E1E27;}

</style>

<script setup>

</script>