<template>
  <div style="margin-left: 330px">
    <div class="bg-overlay"></div>
    <div class="mainVideo min-w-full min-h-full">
      <video
        muted
        autoplay
        loop
        class="w-full h-full"
        style="max-width: 86%; margin-left: 16%"
      >
        <source src="../../assets/mainVideo2.mp4" type="video/mp4;" />
      </video>
    </div>

    <div class="mainSection" style="margin-left: 12%; margin-top: 17%">
      <div
        data-aos="fade-up"
        data-aos-ease="ease"
        data-aos-duration="2000"
        data-aos-delay="1000"
      >
        <p style="font-size: 1.4rem; font-family: BMHANNAAir_ttf">
          NOW SHOWING
        </p>
        <p
          class="avatarTitle"
          style="font-family: BMDOHYEON; line-height: 110%; margin-left: -7px"
        >
          슈퍼 마리오 <br />
          브라더스
        </p>
        <div class="avatarHead">
          <b-button variant="secondary" size="sm">ALL</b-button>
          <router-link
            :to="{ name: 'MovieDetail', params: { movie_id: 502356 } }"
          >
            <b-button variant="warning" size="sm" style="margin-left: 3rem"
              >Detail</b-button
            >
          </router-link>
          <p style="margin-left: 3rem">2023</p>
        </div>
        <p class="avatarText" style="font-family: BMHANNAAir_ttf">
          "따단-딴-따단-딴 ♫ 전 세계를 열광시킬 올 타임 슈퍼 어드벤처의 등장!<br />
          뉴욕의 평범한 배관공 형제 '마리오'와 ‘루이지’는 배수관 고장으로
          위기에<br />
          빠진 도시를 구하려다 미스터리한 초록색 파이프 안으로 빨려 들어가게
          되는데...
          <br />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// import IndexCarousel2D from "./IndexCarousel2D.vue";
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "IndexPage",
  components: {
    // IndexCarousel2D,
  },
  data() {
    return {
      videoUrl: "",
    };
  },
  computed: {
    inLogin() {
      return this.$store.getters.isLogin;
    },
  },
  created() {},
  methods: {
    InputGetEvent() {
      const baseURL = "https://www.googleapis.com/youtube/v3/search";

      axios
        .get(baseURL, {
          params: {
            key: "AIzaSyDvjcb7odUilSZEcCyXBY2rX9z0fTYYWvQ",
            part: "snippet",
            type: "video",
            q: "avatar2",
            maxResults: 1,
          },
        })
        .then((response) => {
          this.videoUrl = `https://www.youtube.com/embed/${response.data.items[0].id.videoId}?autoplay=1&mute=1`;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    addList() {
      if (this.isLogin) {
        this.$store.dispatch("addList");
      } else {
        Swal.fire("로그인이 필요한 서비스 입니다.", "", "error");
        this.$router.push({ name: "user" });
      }
    },
  },
};
</script>

<style>
@font-face {
  font-family: Staatliches;
  src: url(../../fonts/Staatliches-Regular.ttf);
}
@font-face {
  font-family: Netflix_Medium;
  src: url(../../fonts/Netflix_Medium.woff2);
}
@font-face {
  font-family: BMDOHYEON;
  src: url(../../fonts/BMDOHYEON_ttf.ttf);
}
@font-face {
  font-family: BMJUA;
  src: url(../../fonts/BMJUA_ttf.ttf);
}
@font-face {
  font-family: BMHANNAAir_ttf;
  src: url(../../fonts/BMHANNAAir_ttf.ttf);
}

.mainVideo {
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  overflow: hidden;
  margin: 0px;
  object-fit: fill;
  z-index: 0;
}

video {
  top: 0;
  width: 100%;
  height: 100%;
  position: relative;
}

.bg-overlay {
  display: block;
  position: absolute;
  top: 0;
  min-height: 150vh;
  content: " ";
  z-index: 3;
  backface-visibility: hidden;
  background: black;
  background: linear-gradient(77deg, rgba(248, 4, 4, 0.6), transparent 85%);
  opacity: 1;
}

.mainSection {
  color: white;
  text-align: center;
  position: absolute;
  top: 10%;
  left: 8%;
  font-family: Staatliches;
  text-align: left;
  font-size: 5rem;
  z-index: 3;
}

.avatarHead {
  font-family: Staatliches;
  font-size: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: baseline;
  z-index: 3;
}

.avatarText {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  line-height: 1.2rem;
  opacity: 0.8;
  margin-top: 1rem;
}

.avatarButtons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 4rem;
  font-size: 1rem;
  font-family: Netflix_Medium;
  font-weight: bold;
}
</style>
