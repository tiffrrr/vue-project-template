<template>
<button class='btn btn-l btn-primary' onclick="return false;" ontouchstart> i'm button</button>

</template>

<script>
export default {

}
</script>

<style lang='scss' scope>
// /*************************************
// button 通用設定
// **************************************/
// /*************************************
// 間距
// **************************************/
$bottomSafeArea:calc(16px - (-1)*env(safe-area-inset-bottom));
$bottomSafeAreaFallBack: 16px;
// txt
$bk:#191919;
$gy2:#585b66;
$gy3:#798099;
$gy4:#c0c0cc;

$wt:#fff;
$red:#dc4200;
$orange:#E36509;
$gold:#BA8432;
$green: #49A378;
$blue: #1E6EE5; //投資展望趨勢報告



// 背景
$bg:#f5f5fa;
$fill-info:#FBFBFB;
$fill-remind:#ECFEF3;
$fill-error:#FDF2F2;
$fill-warning:#FCF5E5;
$fill-reminder:#F0F5FB;

// 狀態
$error:#CA4D25;
$warn:#E7B159;
$success:#299488;
$success-light:#3EB97E;

// divider
$line1:#E4EAF5;
$line2:#cfcfdc;
$line-error:#F5C7B3;
$line-warning: #FBE7B3;
$line-reminder:#E7EDFA;

// icon-accounting
$icon-accounting-blue: #77ABF6;
$icon-accounting-orange: #FF8C67;
$icon-accounting-yellow: #C69E4F;
$icon-accounting-green: #5CD199;

// btn
$btn1:linear-gradient(90.86deg, #DC4200 5.79%, #FA5914 102.39%);
$btn2:#F0F3F7;
$btn3:#E2E2E2;

// 其它特殊色
$lv1:linear-gradient(177.01deg, rgba(255, 255, 255, 0) -18.68%, rgba(53, 60, 60, 0.25) 29.81%), linear-gradient(0deg, rgba(166, 197, 206, 0.55), rgba(166, 197, 206, 0.55)), linear-gradient(124.46deg, #F9FCFF 0.45%, #A8BCD9 21.78%, #C3D0EB 38.66%, #9BADCF 53.63%, #617498 79.31%);
$lv2:linear-gradient(337.63deg, rgba(54, 49, 47, 0.25) 56.53%, rgba(255, 255, 255, 0) 131.41%), linear-gradient(0deg, rgba(179, 158, 119, 0.55), rgba(179, 158, 119, 0.55)), linear-gradient(124.33deg, #FFFFFF 1.35%, #D0AD79 22.48%, #FBEEC8 38.39%, #E8B880 51.95%, #C5956A 86.69%);
$lv3:linear-gradient(175.52deg, rgba(255, 255, 255, 0) -37.17%, rgba(70, 60, 52, 0.25) 29.63%), linear-gradient(0deg, rgba(255, 218, 124, 0.55), rgba(255, 218, 124, 0.55)), linear-gradient(123.84deg, #F9EB6D 2.59%, #BE871C 28.87%, #EFCF7D 44.47%, #BD7D1E 57.45%, #8C4501 83.08%);

.btn{
    text-align: center;
    &:disabled{
        background: $btn2;
        border: 1px solid $line2;
        pointer-events: none;
        color: $gy4;
    }
    
}

button.icon{
    color: $bk;
}

.btn-primary{
    background: $btn1;
    // border: 1px solid rgba(0, 0, 0, 0.05);
    color: $wt;
    &:active{
        background: linear-gradient(90.86deg, #C13D05 5.79%, #C64812 102.39%);
        // border: 1px solid #FF6174;
        color: $wt;
    }

}
.btn-secondary{
    background-color: $wt;
    border: 1px solid $red;
    color: $red;
    &:active{
        background: #FFF5F0;
        border: 1px solid #C64812;
        color: #C64812;
    }
}

.btn-sub{
    background-color: $bg;
    color: $gy2;
}
// 14
@mixin txt-normal-s{
    font-weight: normal;
    font-size: 0.875rem;
    line-height: 20px;
}
// /*************************************
// 大中小button
// **************************************/
.btn-l{
    padding: 11px 10px;
    border-radius: 8px;
    width: 100%;
    height: 48px;
    &.btn-primary:not(:disabled){
        padding: 11px;
    }
}
.btn-m{
    padding: 4px 7px;
    border-radius: 8px;
    height: 36px;
    &.btn-primary:not(:disabled){
        padding: 4px 8px;
    }
}
.btn-s{
    @include txt-normal-s;
    padding: 2px 15px;
    min-width: 60px;
    border-radius: 8px;
    &.btn-primary:not(:disabled){
        padding: 2px 16px;  //-list中，三個字也要60px
    }
}
.btn-xs{
    @include txt-normal-s;
    padding: 2px 7px;
    min-width: 60px;
    border-radius: 8px;
    &.btn-primary:not(:disabled){
        padding: 2px 8px;  //-list中，三個字也要60px
    }
}




// /*************************************
// button 組合 - 上下排列
// **************************************/
.btn-box{
    text-align: center;
    .btn-secondary{
        margin-top: 12px;
    }
    .btn-box-txt{
        margin-top: 16px;
        text-align: center;
    }
}
// /*************************************
// button 組合 - 左右排列
// **************************************/
.btn-flex-box{
    display: flex;
    align-items: center;
    justify-content: space-between;
    .btn{
        width: calc(50% - 6px);
    }
}
// /*************************************
// button 外框 - fixed 底部
// **************************************/
.btn-box-fix-bottom{
    background-color: $bg;
    padding-top : 8px;
    padding-left : 12px;
    padding-right : 12px;
    padding-bottom: $bottomSafeAreaFallBack;
}
.page-bottom .btn-box-fix-bottom{
    padding-bottom: $bottomSafeArea; 
    &.btn-box-fix-bottom-shadow{
        box-shadow: 0px -3px 10px rgba(0, 0, 0, 0.05);
    }
}

// /*************************************
// button 外框 - 接續頁面內容
// **************************************/
.btn-box-page-bottom{
    margin-top: 32px;
}
// /*************************************
// button 外框 - 定位距離底部16px
// **************************************/
.btn-box-absolute-bottom{
    position: absolute;
    bottom: calc(16px - (-1)*env(safe-area-inset-bottom));
    width: calc(100% - 24px);
}
// /*************************************
// button 組合 - function-item + btn
// **************************************/
.btn-box-fix-bottom .btn-function-box{
    margin: 0px -4px;
}
.btn-function-box{
    display: flex;
    align-items: center;
    .function-item{
        min-width: 64px;
        width: 19.5%;
        @media screen and (max-width: 305px) {
            min-width: 56px;
        }
        .icon{
            margin: 0px auto 2px;
        }
        .function-item-txt{
            @include txt-normal-s;
            text-align: center;
        }
    }
    .function-btn-wrapper{
        flex-shrink: 1;
        flex-grow: 1;
        margin-left: 8px;
        // min-width: 107px;
    }
}
</style>