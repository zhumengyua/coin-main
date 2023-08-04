<template>
  <div class="mainIndex">
    <div class="header">
    </div>
    <div class="content">
      <swiper @slideChange="onSlideChange" :navigation="true" :modules="modules" class="mySwiper">
        <swiper-slide v-for="item in dataList" :ket="item.id" class="swiperBox">
          <a :href="item.href" :title="item.name" target="_blank">


            <img :src="getinfoImg(item.id)" />
          </a>
        </swiper-slide>
      </swiper>
      <div class="listBox">
        <div v-for="item in dataList" class="list" :key="item.href">

          <div v-show="activeIndex===(item.id-1)" class="active"></div>
          <a>
            {{ item.name }}
          </a>
        </div>


      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const modules = ref([Navigation]);

const getinfoImg = (name) => {
  return `./${name}.png`;
};


const dataList = [
  { id: 1, name: "玻璃的艺术（欧洲玻璃艺术史珍品展）", href: "https://www.museum24h.com/360/bolideyishu/" },
  { id: 2, name: "《金石书画》系列展览第一期", href: "https://www.museum24h.com/360/jinshishuhua/" },
  { id: 3, name: "守望千年——唐宋元书画珍品特展", href: "https://www.museum24h.com/360/shouwang/" },
  { id: 4, name: "心放俗外——定州静志静众佛塔地宫文物展", href: "https://www.museum24h.com/360/xinfangsuwai/" },
  { id: 5, name: "越地长歌——浙江历史文化陈列", href: "https://www.museum24h.com/360/yuedichangge/" },
  { id: 6, name: "中兴纪胜——南宋风物观止", href: "http://139.9.158.248:7999/ZheJiangShengBo/DigitalMus/HDView" },
  { id: 7, name: "越中佛传——东南佛教盛事胜迹圣物", href: "https://www.museum24h.com/360/yzfc/" },
  { id: 8, name: "漂海闻见——15世纪朝鲜儒士崔溥眼中的江南", href: "http://360.at720.com/170418/?sid=s03" },
  { id: 9, name: "楮墨方圆", href: "https://www.museum24h.com/360/chumofangyuan/" },
  { id: 10, name: "越王时代", href: "https://www.museum24h.com/360/yuewangshidai/" },
  { id: 11, name: "同舟风雨", href: "https://www.museum24h.com/360/tongzhoufengyu/" },
  { id: 12, name: "徐谓礼文书", href: "https://www.museum24h.com/360/xuweiliwenshu/" },
  { id: 13, name: "古物影", href: "https://www.museum24h.com/360/guwuying/" }
];

const activeIndex = ref(0);
const onSlideChange = (data) => {
  console.log(data.activeIndex);
  activeIndex.value = data.activeIndex;
};

</script>

<style scoped lang="scss">
@import url('/font/font.css');
// Import Swiper styles
.mainIndex {
  width: 100%;
  //height: 100%;
  height: 100vh;

}

.header {
  width: 100vw;
  height: 617px;
  background: url("/bg.png") no-repeat;
  background-size: contain;
  position: absolute;
  left: 0;
  top: 0;

}

.content {
  //width: 70%;
  height: 550px;
  //margin: 0 auto;
  //padding-top: 1%;
  //bottom: 10px;
  position: absolute;
  bottom: 10px;
  left: calc(50% - 5.6em);

  .mySwiper {
    position: relative;
    z-index: 2;
    width: 8.5em;
    height: 5.33em;
    display: flex;
    margin: 0;
    float: left;

    .swiperBox {
      width: 8em;
      margin: 0 auto;
      text-align: center;
    }

    ::v-deep .swiper-button-prev, ::v-deep .swiper-button-next {
      font-size: 12px;
      width: 40px;
      height: 40px;
      color: black;
      background-color: rgba(255, 255, 255, 0.5);
      border-radius: 50%;
    }

    ::v-deep .swiper-button-prev:after, ::v-deep .swiper-button-next:after {
      font-size: 14px !important;

    }
  }

  .listBox {
    width: 4em;
    height: 5.35em;
    background-color: #415763;
    background-image: url("logo.png");
    background-repeat: no-repeat;
    background-position: right bottom;
    float: left;
    margin-left: -30px;
    position: relative;

    .list {
      width: 100%;
      margin-top: 14px;
    }

    .list > a {
      display: block;
      font-size: 0.14em;
      color: white;
      width: 82%;
      text-align: left;
      margin: 0 auto;
      height: 24px;
      z-index: 2;
      position: relative;
      font-family: pfM;
      //padding-left: 40px;
      margin-left: calc(12% + 20px);
    }

    .list:first-child {
      margin-top: 28px;
    }

    .active {
      width: 90%;
      margin-left: 0;
      height: 24px;
      position: absolute;
      z-index: 1;
      background: url("/arrow.png"), linear-gradient(to right, #d1d48d, #555f44, rgba(85, 95, 68, 0.24));
      //background-image: url("/arrow.png");
      background-repeat: no-repeat;
      background-position: 10%;
      //background-size: 100%;
    }
  }

}

</style>
