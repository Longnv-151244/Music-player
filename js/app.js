jarallax(document.querySelectorAll(".jarallax"), {
  speed: 0.2,
});

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const audio = $("#audio");
const tabName = Array.from($$("#recommend .group-tab__name h3"));
const tabContent = Array.from($$("#recommend .tab__content"));

const app = {
  currentIndex: -1,
  lastIndex_Play: 0,
  isPlaying: false,
  currentSlider: 0,
  currentTab: 0,
  // data
  listSongSlider: [
    {
      name: "OK",
      author: "BINZ",
      category: "Vpop",
      duration: "02:34",
      date: "December 7, 2018",
      image: "./img/song-img/list-slider/song-1.jpg",
      path: "./song-mp3/list-slider/song-1.mp3",
    },
    {
      name: "Perfect",
      author: "Ed Sheeran",
      category: "US-UK",
      duration: "04:39",
      date: "August 18, 2016",
      image: "./img/song-img/list-slider/song-2.jpg",
      path: "./song-mp3/list-slider/song-2.mp3",
    },
    {
      name: "The Girl I've Never Met",
      author: "Gustixa",
      category: "Lofi",
      duration: "04:33",
      date: "June 20, 2019",
      image: "./img/song-img/list-slider/song-3.jpg",
      path: "./song-mp3/list-slider/song-3.mp3",
    },
    {
      name: "Bài Này Chill Phết",
      author: "Đen, MIN",
      category: "Vpop",
      duration: "04:33",
      date: "December 25, 2018",
      image: "./img/song-img/list-slider/song-4.jpg",
      path: "./song-mp3/list-slider/song-4.mp3",
    },
    {
      name: "Legends Never Die",
      author: "Against The Current",
      category: "US-UK",
      duration: "02:59",
      date: "September 09, 2017",
      image: "./img/song-img/list-slider/song-5.jpg",
      path: "./song-mp3/list-slider/song-5.mp3",
    },
    {
      name: "Surrender",
      author: "Natalie Taylor",
      category: "Lofi",
      duration: "03:39",
      date: "July 09, 2019",
      image: "./img/song-img/list-slider/song-6.jpg",
      path: "./song-mp3/list-slider/song-6.mp3",
    },
  ],

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

  listSongRecommend_Lofi: [
    {
      name: "Nothin On You",
      author: "BoB, Bruno Mars",
      duration: "03:50",
      image: "./img/song-img/lofi/song-1.jpg",
      path: "./song-mp3/lofi/song-1.mp3",
    },
    {
      name: "Lemon Tree",
      author: "Fools Garden",
      duration: "03:44",
      image: "./img/song-img/lofi/song-2.jpg",
      path: "./song-mp3/lofi/song-2.mp3",
    },
    {
      name: "At My Worst",
      author: "Pink Sweat",
      duration: "03:05",
      image: "./img/song-img/lofi/song-3.jpg",
      path: "./song-mp3/lofi/song-3.mp3",
    },
    {
      name: "Mood",
      author: "24kGoldn",
      duration: "02:30",
      image: "./img/song-img/lofi/song-4.jpg",
      path: "./song-mp3/lofi/song-4.mp3",
    },
    {
      name: "SugarCrash",
      author: "ElyOtto",
      duration: "01:20",
      image: "./img/song-img/lofi/song-5.jpg",
      path: "./song-mp3/lofi/song-5.mp3",
    },
    {
      name: "Positions",
      author: "Ariana Grande",
      duration: "02:57",
      image: "./img/song-img/lofi/song-6.jpg",
      path: "./song-mp3/lofi/song-6.mp3",
    },
    {
      name: "I Love You Baby",
      author: "Frank Sinatra",
      duration: "03:56",
      image: "./img/song-img/lofi/song-7.jpg",
      path: "./song-mp3/lofi/song-7.mp3",
    },
    {
      name: "What A Wonderful World",
      author: "Louis Armstrong",
      duration: "02:17",
      image: "./img/song-img/lofi/song-8.jpg",
      path: "./song-mp3/lofi/song-8.mp3",
    },
    {
      name: "I Want To Hold Your",
      author: "The Beatles",
      duration: "02:36",
      image: "./img/song-img/lofi/song-9.jpg",
      path: "./song-mp3/lofi/song-9.mp3",
    },
    {
      name: "Death Bed Coffee",
      author: "Powfu",
      duration: "02:53",
      image: "./img/song-img/lofi/song-10.jpg",
      path: "./song-mp3/lofi/song-10.mp3",
    },
    {
      name: "Cant Help Falling In Love",
      author: "Elvis Presley",
      duration: "03:00",
      image: "./img/song-img/lofi/song-11.jpg",
      path: "./song-mp3/lofi/song-11.mp3",
    },
    {
      name: "Crystal Dolphin",
      author: "Engelwood",
      duration: "01:53",
      image: "./img/song-img/lofi/song-12.jpg",
      path: "./song-mp3/lofi/song-12.mp3",
    },
    {
      name: "Someone You Loved",
      author: "Lewis Capaldi",
      duration: "03:01",
      image: "./img/song-img/lofi/song-13.jpg",
      path: "./song-mp3/lofi/song-13.mp3",
    },
    {
      name: "Let Me Down Slowly",
      author: "Alec Benjamin",
      duration: "02:57",
      image: "./img/song-img/lofi/song-14.jpg",
      path: "./song-mp3/lofi/song-14.mp3",
    },
    {
      name: "Star Shopping",
      author: "Lil Peep, Kryptik",
      duration: "02:22",
      image: "./img/song-img/lofi/song-15.jpg",
      path: "./song-mp3/lofi/song-15.mp3",
    },
    {
      name: "Be Like That",
      author: "Kane Brown, Swae Lee",
      duration: "03:11",
      image: "./img/song-img/lofi/song-16.jpg",
      path: "./song-mp3/lofi/song-16.mp3",
    },
    {
      name: "Runaway",
      author: "AURORA",
      duration: "04:08",
      image: "./img/song-img/lofi/song-17.jpg",
      path: "./song-mp3/lofi/song-17.mp3",
    },
  ],

  Slider_Content: {
    Vpop: {
      heading: "Listen Now",
      content: "Listen to deep, lyrical V-Pop songs together!",
    },
    "US-UK": {
      heading: "Discover Today",
      content: "Discover today with upbeat US-UK music!",
    },
    Lofi: {
      heading: "Subscribe Today",
      content: "Sign up to follow the gentle lofi music, relax after work!",
    },
  },
  getHtmls_Slider: function (e) {
    htmls = e.map((song, index) => {
      return `
      <div class="slider__item bg-overlay bg-img slider__item-${index} ${
        index === this.currentSlider ? "active" : ""
      }" style="background-image: url('${song.image}');">
        <div class="container">
          <div class="slider__content">
            <div class="slider__wellcome"> 
              <h1 class="slider__heading">${
                this.Slider_Content[song.category].heading
              }</h1>
              <p class="slider__text">${
                this.Slider_Content[song.category].content
              }</p>
              <div class="slider__group--btn">
                <div class="btn filter">Subscribe with iTunes</div>
                <div class="btn btn--second filter">Subscribe with RSS</div>
              </div>
            </div>
            <div class="slider__player player song-item">
              <div class="player__img bg-img" style="background-image: url('${
                song.image
              }');">
                <div class="song-img--hover"></div>
              </div>
              <div class="player__content">
                <div class="player__info">
                  <p class="player__date">${song.date}</p>
                  <h1 class="player__name song-name">${song.name}</h1>
                  <p class="player__text"><span class="player__author">${
                    song.author
                  } | </span><span class="player__category">${
        song.category
      } | </span><span class="player_duration">00:${song.duration}</span></p>
                </div>
                <div class="player__control">
                  <div class="play"><i class="fas fa-play-circle"></i></div>
                  <div class="pause active"><i class="fas fa-pause-circle"></i></div><span class="currenTime">00:00</span>
                  <div class="sidebarTime--bg">
                    <div class="sidebarTime--current"> </div>
                  </div><span class="duration">${song.duration}</span>
                  <div class="volume">
                    <div class="volume__icon"> <i class="mute fas fa-volume-slash"></i><i class="volume--low fas fa-volume active"></i><i class="volume--hight fas fa-volume-up"></i></div>
                  </div>
                  <div class="volume__silebar--bg">
                    <div class="volume__silebar--current"></div>
                  </div>
                </div>
                <div class="like-share-download">
                  <div class="like"><i class="fas fa-heart"> <span>Like(29)</span></i></div>
                  <div class="div">
                    <div class="share"> <i class="fas fa-share-alt"> <span>Share(04)</span></i></div>
                    <div class="download"><i class="fas fa-download"> <span>Download(12)</span></i></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
                    `;
    });
    return htmls;
  },

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
        }') no-repeat center center / cover">
        </div>
      </div>
                    `;
    });
    return htmls;
  },

  renderSlider: function () {
    const Htmls_Slider = this.getHtmls_Slider(this.listSongSlider);
    $("#slider").innerHTML = Htmls_Slider.join("");
  },

  renderRecommendList: function () {
    // Tab Vpop
    const Htmls_Recommend_ListSong_Vpop = this.getHtmls_Recommend_ListSong(
      this.listSongRecommend_Vpop
    );
    $(".vpop-tab .play-list").innerHTML =
      Htmls_Recommend_ListSong_Vpop.join("");

    const Htmls_Recommend_SlideSong_Vpop = this.getHtmls_Recommend_SlideSong(
      this.listSongRecommend_Vpop
    );
    $(".vpop-tab .container__slide-show").innerHTML =
      Htmls_Recommend_SlideSong_Vpop.join("");

    // Tab USUK
    const Htmls_Recommend_ListSong_USUK = this.getHtmls_Recommend_ListSong(
      this.listSongRecommend_USUK
    );
    $(".usuk-tab .play-list").innerHTML =
      Htmls_Recommend_ListSong_USUK.join("");

    const Htmls_Recommend_SlideSong_USUK = this.getHtmls_Recommend_SlideSong(
      this.listSongRecommend_USUK
    );
    $(".usuk-tab .container__slide-show").innerHTML =
      Htmls_Recommend_SlideSong_USUK.join("");

    // Tab Lofi
    const Htmls_Recommend_ListSong_Lofi = this.getHtmls_Recommend_ListSong(
      this.listSongRecommend_Lofi
    );
    $(".lofi-tab .play-list").innerHTML =
      Htmls_Recommend_ListSong_Lofi.join("");

    const Htmls_Recommend_SlideSong_Lofi = this.getHtmls_Recommend_SlideSong(
      this.listSongRecommend_Lofi
    );
    $(".lofi-tab .container__slide-show").innerHTML =
      Htmls_Recommend_SlideSong_Lofi.join("");
  },

  render: function () {
    this.renderRecommendList();
    this.renderSlider();
  },

  defineProperties: function () {
    Object.defineProperty(this, "listSong", {
      get: function () {
        const listSong = [
          ...this.listSongSlider,
          ...this.listSongRecommend_Vpop,
          ...this.listSongRecommend_USUK,
          ...this.listSongRecommend_Lofi,
        ];
        return listSong;
      },
    });

    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.listSong[this.currentIndex];
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
    const mobileToggle = Array.from($$(".mobile-toggle"));
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
        if (_this.currentIndex != -1) {
          pause[_this.currentIndex].click();
        }
        pause[i].classList.remove("active");
        play[i].classList.add("active");
        playImg[i].style.visibility = "hidden";
        if (i === _this.currentIndex) {
          audio.play();
        } else {
          if (_this.currentIndex != -1) {
            sidebarTime[_this.currentIndex].style.width = "0%";
            currentTime[_this.currentIndex].innerHTML = "00:00";
          }
          _this.currentIndex = i;
          playImg[i].click();
          _this.loadCurrentSong();
          audio.play();
          // const loadSong = new Promise((resolve, reject) => {
          //   _this.loadCurrentSong();
          //   resolve();
          // });
          // loadSong.then(function () {
          //   _this.loadCurrentSong();
          //   console.log(audio);
          //   audio.play();
          // });
        }
      };

      // Xu ly pauseBtn onClick
      pause[i].onclick = function () {
        pause[i].classList.add("active");
        play[i].classList.remove("active");
        playImg[i].style.visibility = "visible";
        audio.pause();
      };

      // Xu ly playImg onClick
      playImg[i].onclick = function () {
        songItem.forEach((element) => {
          element.classList.remove("active");
        });
        songItem[i].classList.add("active");
        play[i].click();
      };

      // Xy ly su kien songName onClick
      songName[i].onclick = function () {
        play[i].click();
      };

      function formatTime(seconds) {
        minutes = Math.floor(seconds / 60);
        minutes = minutes >= 10 ? minutes : "0" + minutes;
        seconds = Math.floor(seconds % 60);
        seconds = seconds >= 10 ? seconds : "0" + seconds;
        return minutes + ":" + seconds;
      }

      // Xy ly khi tiến độ bài hát thay đổi
      audio.ontimeupdate = function () {
        if (audio.duration) {
          let progressPercent = Math.floor(
            (audio.currentTime / audio.duration) * 100
          );
          sidebarTime[_this.currentIndex].style.width = `${progressPercent}%`;
          currentTime[_this.currentIndex].innerHTML = `${formatTime(
            audio.currentTime
          )}`;
        }
      };

      // Xử lý khi tua song
      sidebarBg[i].onclick = function (e) {
        if (i !== _this.currentIndex) {
          play[i].click();
        } else {
          const seekProcess = e.pageX - this.offsetLeft;
          let progressPercent = (seekProcess / this.offsetWidth) * 100;
          progressPercent = Math.ceil(progressPercent);
          // sidebarTime[i].style.width = `${progressPercent}%`;
          const seekTime = (progressPercent * audio.duration) / 100;
          audio.currentTime = seekTime;
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
    }

    tabName[this.currentTab].classList.add("active");
    // Xu ly event chuyen tab Recommended
    for (let i = 0; i < tabName.length; i++) {
      tabName[i].onclick = function () {
        tabName[_this.currentTab].classList.remove("active");
        tabContent[_this.currentTab].classList.remove("active");
        _this.currentTab = i;
        tabContent[i].classList.add("active");
        tabName[i].classList.add("active");
      };
    }

    // Xu ly event nav mobile devices
    for (let i = 0; i < mobileToggle.length; i++) {
      mobileToggle[i].onclick = function () {
        mobileToggle.forEach((e) => {
          e.classList.toggle("menu-on");
        });
        $(".header-mobile").classList.toggle("menu-on");
      };
    }

    // Xu ly khi end bai hat
    audio.onended = function () {
      play[_this.currentIndex + 1].click();
      if (_this.currentSlider !== _this.currentIndex) {
        _this.handleSlider();
      }
    };
  },

  handleSlider: function () {
    $(`.slider__item-${this.currentSlider}`).classList.remove("active");
    this.currentSlider++;
    if (this.currentSlider >= this.listSongSlider.length) {
      this.currentSlider = 0;
    }
    $(`.slider__item-${this.currentSlider}`).classList.add("active");
  },

  imgSlide_Index: [2, 2, 2],
  handleSlide_Recommend: function (index) {
    let tab = "";
    switch (index) {
      case 0:
        tab = ".vpop-tab";
        break;
      case 1:
        tab = ".usuk-tab";
        break;
      case 2:
        tab = ".lofi-tab";
        break;
    }
    const slideImgs = $$(`${tab} .container__slide-item`);
    const slideImgFirst = $(`${tab} .container__slide-item.first`);
    const slideImgSecond = $(`${tab} .container__slide-item.second`);
    const slideImgThird = slideImgs[this.imgSlide_Index[index]];
    const slideImgFourth =
      slideImgs[
        this.imgSlide_Index[index] === slideImgs.length - 1
          ? 0
          : this.imgSlide_Index[index] + 1
      ];
    slideImgFourth.classList.replace("fourth", "third");
    slideImgThird.classList.replace("third", "second");
    slideImgSecond.classList.replace("second", "first");
    slideImgFirst.classList.replace("first", "fourth");
    this.imgSlide_Index[index]++;
    if (this.imgSlide_Index[index] >= slideImgs.length) {
      this.imgSlide_Index[index] = 0;
    }
    setTimeout(() => {
      this.handleSlide_Recommend(index);
    }, 2000);
  },

  handleSlide: function () {
    tabContent.forEach((tab, index) => {
      this.handleSlide_Recommend(index);
    });
    // this.handleSlider();
    setInterval(() => {
      if (this.currentSlider !== this.currentIndex) {
        this.handleSlider();
      }
    }, 5000);
  },

  setDefaultApp: function () {
    this.setVolumeDefault();
    this.loadCurrentSong();
  },

  setVolumeDefault: function () {
    audio.volume = 0.2;
  },

  loadCurrentSong: function () {
    if (this.currentIndex === -1) {
      audio.src = this.listSong[0].path;
    } else {
      audio.src = this.currentSong.path;
    }
  },

  start: function () {
    this.render();
    this.defineProperties();
    this.setDefaultApp();
    this.handleEvent();
    this.handleSlide();
  },
};
app.start();
