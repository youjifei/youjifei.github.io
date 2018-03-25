<template>
	<div id="container" v-bind:class="isPhone ? 'isPhone':''">
        <div class="containerTop">
            <img class="paw" src="../images/paw2.jpg" alt="">
            {{title}}
        </div>
        <slot></slot>
	</div>
</template>
<script>
	export default{
		data(){
			return {

			}
		},
        props:{
            'title':{
                type:[String,Number],
            }
        },
		computed:{
			isPhone:function(){
				return this.$store.state.isPhone;
			}
		},
	}
</script>
<style type="text/css" lang="scss">
	@import "../../base/base";

	#container{
        .containerTop{
            height: 54px;
            line-height: 54px;
            font-size: 20px;
            line-height: 54px;
            color:$green-base;
            font-weight: bold;
            background-image: url(../images/line.png);
            background-repeat: repeat-x;
            background-position: bottom;
            img{
                float:left;
                margin:12px 12px 0 5px;
            }
        }
		&.isPhone{
			.containerTop{
				text-align: center;
				img{
					float:none;
					margin:0;
					position: relative;
					top:5px;
				}
			}
		}
	}
</style>
