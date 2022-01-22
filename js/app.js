jarallax(document.querySelectorAll(".jarallax"), {
  speed: 0.2,
});

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const audio = $("#audio");
// const play = Array.from($$(".play"));
// const pause = Array.from($$(".pause"));
// const sidebarBg = Array.from($$(".sidebarTime--bg"));
// const sidebarTime = Array.from($$(".sidebarTime--current"));
// const currentTime = Array.from($$(".currenTime"));
// const volumSideBg = Array.from($$(".volume__silebar--bg"));
// const volumSide = Array.from($$(".volume__silebar--current"));
// const songName = Array.from($$(".song-name"));
// const playImg = Array.from($$(".song-img--hover"));
// const songItem = Array.from($$(".song-item"));
// const volumeMute = Array.from($$(".mute"));
// const volumeLow = Array.from($$(".volume--low"));
// const volumeHight = Array.from($$(".volume--hight"));

const app = {
  currentIndex: 0,
  lastIndex_Play: 0,
  isPlaying: false,

  // data
  listSongRecommend_Vpop: [
    {
      name: "Đế vương",
      author: "Đình Dũng",
      duration: "04:22",
      image: "./img/song-img/vpop/song-1.jpg",
      path: "./song-mp3/vpop/song-1.mp3",
    },
    {
      name: "#Catena",
      author: "Tóc Tiên, Tourliver",
      duration: "04:29",
      image: "./img/song-img/vpop/song-2.jpg",
      path: "./song-mp3/vpop/song-2.mp3",
    },
    {
      name: "Anh ơi ở lại",
      author: "ChiPu",
      duration: "05:41",
      image: "./img/song-img/vpop/song-3.jpg",
      path: "./song-mp3/vpop/song-3.mp3",
    },
    {
      name: "Ái nộ",
      author: "Masew, Khôi Vũ",
      duration: "03:20",
      image: "./img/song-img/vpop/song-4.jpg",
      path: "./song-mp3/vpop/song-4.mp3",
    },
    {
      name: "Thê lương",
      author: "Phúc Chinh",
      duration: "05:13",
      image: "./img/song-img/vpop/song-5.jpg",
      path: "./song-mp3/vpop/song-5.mp3",
    },
    {
      name: "SG đau lòng quá",
      author: "Hứa Kim Tuyền, Hoàng Duyên",
      duration: "05:08",
      image: "./img/song-img/vpop/song-6.jpg",
      path: "./song-mp3/vpop/song-6.mp3",
    },
    {
      name: "Cưới thôi",
      author: "Masiu, Masew",
      duration: "03:01",
      image: "./img/song-img/vpop/song-7.jpg",
      path: "./song-mp3/vpop/song-7.mp3",
    },
    {
      name: "Thức giấc",
      author: "DaLAB",
      duration: "04:29",
      image: "./img/song-img/vpop/song-8.jpg",
      path: "./song-mp3/vpop/song-8.mp3",
    },
    {
      name: "Đi về nhà",
      author: "Đen, Justa Tee ",
      duration: "03:25",
      image: "./img/song-img/vpop/song-9.jpg",
      path: "./song-mp3/vpop/song-9.mp3",
    },
    {
      name: "Gieo quẻ",
      author: "Đen, Hoàng Thùy Linh",
      duration: "04:19",
      image: "./img/song-img/vpop/song-10.jpg",
      path: "./song-mp3/vpop/song-10.mp3",
    },
    {
      name: "Mang tiền về cho mẹ",
      author: "Đen",
      duration: "06:41",
      image: "./img/song-img/vpop/song-11.jpg",
      path: "./song-mp3/vpop/song-11.mp3",
    },
    {
      name: "Rap chậm thôi",
      author: "RPT MCK, RPT Jinn, RZ Ma$",
      duration: "04:09",
      image: "./img/song-img/vpop/song-12.jpg",
      path: "./song-mp3/vpop/song-12.mp3",
    },
    {
      name: "Thủ đô Cypher",
      author: "RPT MCK, Low G,...",
      duration: "02:54",
      image: "./img/song-img/vpop/song-13.jpg",
      path: "./song-mp3/vpop/song-13.mp3",
    },
    {
      name: "Tháng năm",
      author: "SooBin",
      duration: "03:56",
      image: "./img/song-img/vpop/song-14.jpg",
      path: "./song-mp3/vpop/song-14.mp3",
    },
    {
      name: "#CCTVLC",
      author: "Phan Mạnh Quỳnh",
      duration: "05:04",
      image: "./img/song-img/vpop/song-15.jpg",
      path: "./song-mp3/vpop/song-15.mp3",
    },
    {
      name: "Chiều hôm ấy",
      author: "JayKii",
      duration: "05:17",
      image: "./img/song-img/vpop/song-16.jpg",
      path: "./song-mp3/vpop/song-16.mp3",
    },
    {
      name: "Nàng thơ",
      author: "Hoàng Dũng",
      duration: "05:21",
      image: "./img/song-img/vpop/song-17.jpg",
      path: "./song-mp3/vpop/song-17.mp3",
    },
    {
      name: "Dân chơi xóm",
      author: "RPT MCK, Justa Tee",
      duration: "03:30",
      image: "./img/song-img/vpop/song-18.jpg",
      path: "./song-mp3/vpop/song-18.mp3",
    },
  ],

  listSongRecommend_USUK: [
    {
      name: "Memories",
      author: "Maroon 5",
      duration: "03:15",
      image: "./img/song-img/us-uk/song-1.jpg",
      path: "./song-mp3/us-uk/song-1.mp3",
    },
    {
      name: "On my way",
      author: "Alan Walker, Sabrina,..",
      duration: "03:36",
      image: "./img/song-img/us-uk/song-2.jpg",
      path: "./song-mp3/us-uk/song-2.mp3",
    },
    {
      name: "Señorita",
      author: "Shawn Mendes, Camila,..",
      duration: "03:25",
      image: "./img/song-img/us-uk/song-3.jpg",
      path: "./song-mp3/us-uk/song-3.mp3",
    },
    {
      name: "Im Not Her",
      author: "Clara Mae",
      duration: "03:12",
      image: "./img/song-img/us-uk/song-4.jpg",
      path: "./song-mp3/us-uk/song-4.mp3",
    },
    {
      name: "Someone You Loved ",
      author: "Lewis Capaldi",
      duration: "03:01",
      image: "./img/song-img/us-uk/song-5.jpg",
      path: "./song-mp3/us-uk/song-5.mp3",
    },
    {
      name: "Dont Wanna Know",
      author: "Maroon 5",
      duration: "06:18",
      image: "./img/song-img/us-uk/song-6.jpg",
      path: "./song-mp3/us-uk/song-6.mp3",
    },
    {
      name: "Blinding Lights",
      author: "- The Weeknd",
      duration: "03:23",
      image: "./img/song-img/us-uk/song-7.jpg",
      path: "./song-mp3/us-uk/song-7.mp3",
    },
    {
      name: "Dusk Till Dawn",
      author: "ZAYN  Sia",
      duration: "03:55",
      image: "./img/song-img/us-uk/song-8.jpg",
      path: "./song-mp3/us-uk/song-8.mp3",
    },
    {
      name: "Cheap Thrills",
      author: "Sia",
      duration: "04:05",
      image: "./img/song-img/us-uk/song-9.jpg",
      path: "./song-mp3/us-uk/song-9.mp3",
    },
    {
      name: "Treat You Better",
      author: "Shawn Mendes",
      duration: "04:16",
      image: "./img/song-img/us-uk/song-10.jpg",
      path: "./song-mp3/us-uk/song-10.mp3",
    },
    {
      name: "Shape of You",
      author: "Ed Sheeran",
      duration: "04:23",
      image: "./img/song-img/us-uk/song-11.jpg",
      path: "./song-mp3/us-uk/song-11.mp3",
    },
    {
      name: "Hello",
      author: "Adele",
      duration: "06:06",
      image: "./img/song-img/us-uk/song-12.jpg",
      path: "./song-mp3/us-uk/song-12.mp3",
    },
    {
      name: "Yummy",
      author: "Justin Bieber",
      duration: "03:50",
      image: "./img/song-img/us-uk/song-13.jpg",
      path: "./song-mp3/us-uk/song-13.mp3",
    },
    {
      name: "Send My Love",
      author: "Adele",
      duration: "02:22",
      image: "./img/song-img/us-uk/song-14.jpg",
      path: "./song-mp3/us-uk/song-14.mp3",
    },
    {
      name: "FRIENDS",
      author: "Marshmello, AnneMarie",
      duration: "03:51",
      image: "./img/song-img/us-uk/song-15.jpg",
      path: "./song-mp3/us-uk/song-15.mp3",
    },
  ],

  getHtmls_Recommend_ListSong: function (e) {
    htmls = e.map((song, index) => {
      return `
            <div class="song-item ">
              <div class="song-content">
                <div class="song-img bg-img" style="background-image: url('${song.image}');">
                  <div class="song-img--hover"><i class="fas fa-play"></i></div>
                </div>
                <div class="song-info"> 
                  <h2 class="song-name">${song.name}</h2>
                  <div class="song-author">${song.author}</div>
                </div>
              </div>
              <div class="song-duration">${song.duration}</div>
              <div class="player__content">
                <div class="player__control"> 
                  <div class="play"><i class="fas fa-play-circle"></i></div>
                  <div class="pause active"><i class="fas fa-pause-circle"></i></div><span class="currenTime">00:00</span>
                  <div class="sidebarTime--bg">
                    <div class="sidebarTime--current"></div>
                  </div><span class="duration">${song.duration}</span>
                </div>
              </div>
              <div class="song-option"> 
                <div class="addList"> <i class="fas fa-plus"></i></div>
                <div class="like"> <i class="far fa-heart"></i></div>
              </div>
            </div>
                    `;
    });
    return htmls;
  },

  getHtmls_Recommend_SlideSong: function (e) {
    htmls = e.map((song, index) => {
      return `
      <div class="container__slide-item ${index === 0 ? "first" : ""} ${
        index === 1 ? "second" : ""
      } ${index === 2 ? "third" : ""} ${index > 2 ? "fourth" : ""}">
        <div class="container__slide-img" style="background: url('${
          song.image
        }') no-repeat center center / cover"></div></div>
                    `;
    });
    return htmls;
  },

  renderRecommendList: function () {
    const _this = this;
    const Htmls_Recommend_ListSong_Vpop = this.getHtmls_Recommend_ListSong(
      _this.listSongRecommend_Vpop
    );
    $(".vpop-tab .play-list").innerHTML =
      Htmls_Recommend_ListSong_Vpop.join("");

    const Htmls_Recommend_SlideSong_Vpop = this.getHtmls_Recommend_SlideSong(
      _this.listSongRecommend_Vpop
    );
    $(".vpop-tab .container__slide-show").innerHTML =
      Htmls_Recommend_SlideSong_Vpop.join("");

    // Tab USUK
    const Htmls_Recommend_ListSong_USUK = this.getHtmls_Recommend_ListSong(
      _this.listSongRecommend_USUK
    );
    $(".usuk-tab .play-list").innerHTML =
      Htmls_Recommend_ListSong_USUK.join("");

    const Htmls_Recommend_SlideSong_USUK = this.getHtmls_Recommend_SlideSong(
      _this.listSongRecommend_USUK
    );
    $(".usuk-tab .container__slide-show").innerHTML =
      Htmls_Recommend_SlideSong_USUK.join("");
  },

  render: function () {
    this.renderRecommendList();
  },

  defineProperties: function () {
    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.listSongRecommend[this.currentIndex];
      },
    });
  },
  // Xu ly events
  handleEvent: function () {
    const play = Array.from($$(".play"));
    const pause = Array.from($$(".pause"));
    const sidebarBg = Array.from($$(".sidebarTime--bg"));
    const sidebarTime = Array.from($$(".sidebarTime--current"));
    const currentTime = Array.from($$(".currenTime"));
    const volumSideBg = Array.from($$(".volume__silebar--bg"));
    const volumSide = Array.from($$(".volume__silebar--current"));
    const songName = Array.from($$(".song-name"));
    const playImg = Array.from($$(".song-img--hover"));
    const songItem = Array.from($$(".song-item"));
    const volumeMute = Array.from($$(".mute"));
    const volumeLow = Array.from($$(".volume--low"));
    const volumeHight = Array.from($$(".volume--hight"));
    const _this = this;
    // Xu ly su kien khi scroll
    document.onscroll = function () {
      const scrollTop = document.documentElement.scrollTop;
      const headerBg = $(".header__background");
      headerBg.style.opacity = scrollTop > 200 ? "1" : "0";
    };

    // Xu ly cac su kien ve play music
    for (let i = 0; i < play.length; i++) {
      // Xu ly playBtn onClick
      play[i].onclick = function () {
        pause[_this.currentIndex].onclick();
        pause[i].classList.remove("active");
        play[i].classList.add("active");
        playImg[i].style.visibility = "hidden";
        if (i === _this.currentIndex) {
          // audio.play();
        } else {
          sidebarTime[_this.currentIndex].style.width = "0%";
          _this.currentIndex = i;
          playImg[i].onclick();
          // _this.loadCurrentSong();
          // audio.play();
        }
      };

      // Xu ly pauseBtn onClick
      pause[i].onclick = function () {
        pause[i].classList.add("active");
        play[i].classList.remove("active");
        playImg[i].style.visibility = "visible";
        // audio.pause();
      };

      // Xu ly playImg onClick
      playImg[i].onclick = function () {
        songItem.forEach((element) => {
          element.classList.remove("active");
        });
        songItem[i].classList.add("active");
        play[i].onclick();
      };

      // Xy ly su kien songName onClick
      songName[i].onclick = function () {
        play[i].onclick();
      };

      // Xy ly khi tiến độ bài hát thay đổi
      audio.ontimeupdate = function () {
        if (audio.duration) {
          let progressPercent = Math.floor(
            (audio.currentTime / audio.duration) * 100
          );
          sidebarTime[_this.currentIndex].style.width = `${progressPercent}%`;
          currentTime[_this.currentIndex].innerHTML = `${audio.currentTime}`;
        }
      };

      // Xử lý khi tua song
      sidebarBg[i].onclick = function (e) {
        const seekProcess = e.pageX - this.offsetLeft;
        let progressPercent = (seekProcess / this.offsetWidth) * 100;
        progressPercent = Math.ceil(progressPercent);
        if (i !== _this.currentIndex) {
          play[i].onclick();
        }
        // sidebarTime[i].style.width = `${progressPercent}%`;
        const seekTime = (progressPercent * audio.duration) / 100;
        audio.currentTime = seekTime;
      };

      // Xử lý khi onmousemove sidebar
      sidebarBg[i].onmousemove = function (e) {
        const seekProcess = e.pageX - this.offsetLeft;
        let progressPercent = (seekProcess / this.offsetWidth) * 100;
        progressPercent = Math.ceil(progressPercent);
        if (i === _this.currentIndex) {
          sidebarTime[i].style.width = `${progressPercent}%`;
        }
        // const seekTime = (progressPercent * audio.duration) / 100;
        // audio.currentTime = seekTime;
      };

      // Xử lý khi onmouseleave sidebar
      sidebarBg[i].onmouseleave = function (e) {
        if (audio.duration) {
          let progressPercent = Math.floor(
            (audio.currentTime / audio.duration) * 100
          );
          sidebarTime[i].style.width = `${progressPercent}`;
        }
      };
    }

    // Xu ly cac su kien ve volume
    function resetVolume(i) {
      volumeMute[i].classList.remove("active");
      volumeLow[i].classList.remove("active");
      volumeHight[i].classList.remove("active");
    }

    function mute(i) {
      audio.volume = 0;
      volumSide[i].style.width = "0%";
      resetVolume(i);
      volumeMute[i].classList.add("active");
    }
    for (let i = 0; i < volumSideBg.length; i++) {
      // Xy ly xu kien volumeSide onclick
      volumSideBg[i].onclick = function (e) {
        const seekProcess = e.pageX - this.offsetLeft;
        let progressPercent = (seekProcess / this.offsetWidth) * 100;
        progressPercent = Math.ceil(progressPercent);
        audio.volume = progressPercent / 100;
        volumSide[i].style.width = `${progressPercent}%`;
        resetVolume(i);
        if (progressPercent === 0) {
          volumeMute[i].classList.add("active");
        } else if (progressPercent >= 0 && progressPercent <= 50) {
          volumeLow[i].classList.add("active");
        } else {
          volumeHight[i].classList.add("active");
        }
      };

      // Xu ly khi an Icon Volume
      volumeLow[i].onclick = function () {
        mute(i);
      };
      volumeHight[i].onclick = function () {
        mute(i);
      };
      // volumeLow[i].addEventListener("click", mute());
    }
    // Xu ly khi end bai hat
    audio.onended = function () {
      play[_this.currentIndex + 1].onclick();
    };
  },

  imgSlide_Index: 2,
  handleSlide_Recommend: function (tab) {
    const _this = this;
    const slideImgs = $$(`${tab} .container__slide-item`);
    const slideImgFirst = $(`${tab} .container__slide-item.first`);
    const slideImgSecond = $(`${tab} .container__slide-item.second`);
    const slideImgThird = slideImgs[_this.imgSlide_Index];
    const slideImgFourth =
      slideImgs[
        _this.imgSlide_Index === slideImgs.length - 1
          ? 0
          : _this.imgSlide_Index + 1
      ];
    slideImgFourth.classList.replace("fourth", "third");
    slideImgThird.classList.replace("third", "second");
    slideImgSecond.classList.replace("second", "first");
    slideImgFirst.classList.replace("first", "fourth");
    _this.imgSlide_Index++;
    console.log(slideImgs);
    if (_this.imgSlide_Index >= slideImgs.length) {
      _this.imgSlide_Index = 0;
    }
  },

  handleSlide: function () {
    setInterval(() => {
      this.handleSlide_Recommend(".vpop-tab");
    }, 2000);
    setInterval(() => {
      this.handleSlide_Recommend(".usuk-tab");
    }, 2000);
  },

  setDefaultApp: function () {
    this.setVolumeDefault();
    this.loadCurrentSong();
  },

  setVolumeDefault: function () {
    audio.volume = 0.2;
  },

  loadCurrentSong: function () {
    audio.src = this.currentSong.path;
  },

  start: function () {
    this.render();
    this.handleEvent();
    this.handleSlide();
    // this.setDefaultApp()
  },
};
app.start();
