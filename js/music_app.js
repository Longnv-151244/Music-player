const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const audio = $("#audio");
const repeat = $(".main__player .repeat");
const prev = $(".main__player .prev");
const play = $(".main__player .play");
const pause = $(".main__player .pause");
const next = $(".main__player .next");
const random = $(".main__player .random");
const songNamePlayer = $(".main__player .song-name");
const songAuthorPlayer = $(".main__player .song-author");
const songImgPlayer = $(".main__player .song-img");
const songDurationPlayer = $(".main__player .durationTime");
const currentTime = $(".currenTime");
const sidebarTime = $(".sidebarTime--current");
const sidebarBg = $(".sidebarTime--bg");
const volumeMute = $(".mute");
const volumeLow = $(".volume--low");
const volumeHight = $(".volume--hight");
const volumSideBg = $(".volume__silebar--bg");
const volumSide = $(".volume__silebar--current");
const loginMain = $("#login");
const loginContainer = $(".login__container");
const toast = $("#toast");

const app = {
  currentIndex: 0,
  lastIndex_Play: 0,
  isPlaying: false,
  isRandom: false,
  isRepeat: false,

  nextSong: function () {
    this.currentIndex++;
    if (this.currentIndex >= this.listSong.length) {
      this.currentIndex = 0;
    }
    this.loadCurrentSong();
  },
  prevSong: function () {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.listSong.length - 1;
    }
    this.loadCurrentSong();
  },
  playRandomSong: function () {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * this.listSong.length);
    } while (newIndex === this.currentIndex);

    this.currentIndex = newIndex;
    this.loadCurrentSong();
  },

  toastIcons: {
    success: "fas fa-check-circle",
    info: "fas fa-info-circle",
    warning: "fas fa-exclamation-circle",
    error: "fas fa-exclamation-circle",
  },

  listBg: [
    {
      ID: 1,
      img: "./img/bg-gif/gif-1.gif",
    },
    {
      ID: 2,
      img: "./img/bg-gif/gif-2.gif",
    },
    {
      ID: 3,
      img: "./img/bg-gif/gif-3.gif",
    },
    {
      ID: 4,
      img: "./img/bg-gif/gif-4.gif",
    },
    {
      ID: 5,
      img: "./img/bg-gif/gif-5.gif",
    },
    {
      ID: 6,
      img: "./img/bg-gif/gif-6.gif",
    },
    {
      ID: 7,
      img: "./img/bg-gif/gif-7.gif",
    },
    {
      ID: 8,
      img: "./img/bg-gif/gif-8.gif",
    },
    {
      ID: 9,
      img: "./img/bg-gif/gif-9.gif",
    },
    {
      ID: 10,
      img: "./img/bg-gif/gif-10.gif",
    },
    {
      ID: 11,
      img: "./img/bg-gif/gif-11.gif",
    },
    {
      ID: 12,
      img: "./img/bg-gif/gif-12.gif",
    },
    {
      ID: 13,
      img: "./img/bg-gif/gif-13.gif",
    },
    {
      ID: 14,
      img: "./img/bg-gif/gif-14.gif",
    },
    {
      ID: 15,
      img: "./img/bg-gif/gif-15.gif",
    },
    {
      ID: 16,
      img: "./img/bg-gif/gif-16.gif",
    },
    {
      ID: 17,
      img: "./img/bg-gif/gif-17.gif",
    },
    {
      ID: 18,
      img: "./img/bg-gif/gif-18.gif",
    },
    {
      ID: 19,
      img: "./img/bg-gif/gif-19.gif",
    },
    {
      ID: 20,
      img: "./img/bg-gif/gif-20.gif",
    },
    {
      ID: 21,
      img: "./img/bg-gif/gif-21.gif",
    },
    {
      ID: 22,
      img: "./img/bg-gif/gif-22.gif",
    },
    {
      ID: 23,
      img: "./img/bg-gif/gif-23.gif",
    },
    {
      ID: 24,
      img: "./img/bg-gif/gif-24.gif",
    },
    {
      ID: 25,
      img: "./img/bg-gif/gif-25.gif",
    },
    {
      ID: 26,
      img: "./img/bg-gif/gif-26.gif",
    },
    {
      ID: 27,
      img: "./img/bg-gif/gif-27.gif",
    },
    {
      ID: 28,
      img: "./img/bg-gif/gif-28.gif",
    },
    {
      ID: 29,
      img: "./img/bg-gif/gif-29.gif",
    },
    {
      ID: 30,
      img: "./img/bg-gif/gif-30.gif",
    },
    {
      ID: 31,
      img: "./img/bg-gif/gif-31.gif",
    },
    {
      ID: 32,
      img: "./img/bg-gif/gif-32.gif",
    },
    {
      ID: 33,
      img: "./img/bg-gif/gif-33.gif",
    },
    {
      ID: 34,
      img: "./img/bg-gif/gif-34.gif",
    },
    {
      ID: 35,
      img: "./img/bg-gif/gif-35.gif",
    },
    {
      ID: 36,
      img: "./img/bg-gif/gif-36.gif",
    },
    {
      ID: 37,
      img: "./img/bg-gif/gif-37.gif",
    },
    {
      ID: 38,
      img: "./img/bg-gif/gif-38.gif",
    },
    {
      ID: 39,
      img: "./img/bg-gif/gif-39.gif",
    },
    {
      ID: 40,
      img: "./img/bg-gif/gif-40.gif",
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

  getHtmls_Playlist_ListSong: function (e) {
    htmls = e.map((song, index) => {
      return `
            <div class="song-item data-index="${index}">
                <div class="song-content">
                    <div class="song-img bg-img" style="background-image: url('${song.image}');');">
                        <div class="song-img--hover"><i class="fas fa-play"></i></div>
                    </div>
                    <div class="song-info">
                        <h2 class="song-name">${song.name}</h2>
                        <div class="song-author">${song.author}</div>
                    </div>
                </div>
                <div class="song-duration">${song.duration}</div>
                <div class="song-option">
                    <div class="option like"><i class ="far fa-heart"></i></div>
                    <div class="option download"><i class="fas fa-download"></i></div>
                </div>
            </div>
                    `;
    });
    return htmls;
  },

  getHtmls_Bg: function () {
    html = this.listBg.map((e) => {
      return `
      <div class="bg-item bg-img" style="background-image: url(${e.img});"></div>
      `;
    });
    return html;
  },

  rederSettingBg: function () {
    const Htmls_Bg = this.getHtmls_Bg();
    $(".main__settingBg .settingBg__list-item").innerHTML = Htmls_Bg.join("");
  },

  renderPlaylist: function () {
    //   Page Vpop
    // Tab Waitting
    if ($("#vpop")) {
      const Htmls_Vpop_Playlist_ListSong_Watting =
        this.getHtmls_Playlist_ListSong(this.listSongRecommend_Vpop);
      $("#vpop .watting_list .play-list").innerHTML =
        Htmls_Vpop_Playlist_ListSong_Watting.join("");
      // Tab Love_List
      const Htmls_Vpop_Playlist_ListSong_Love = this.getHtmls_Playlist_ListSong(
        this.listSongRecommend_Vpop
      );
      $("#vpop .love_list .play-list").innerHTML =
        Htmls_Vpop_Playlist_ListSong_Love.join("");
    }

    //   Page Us-UK
    // Tab Waitting
    if ($("#us-uk")) {
      const Htmls_USUK_Playlist_ListSong_Watting =
        this.getHtmls_Playlist_ListSong(this.listSongRecommend_USUK);
      $("#us-uk .watting_list .play-list").innerHTML =
        Htmls_USUK_Playlist_ListSong_Watting.join("");
      // Tab Love_List
      const Htmls_USUK_Playlist_ListSong_Love = this.getHtmls_Playlist_ListSong(
        this.listSongRecommend_USUK
      );
      $("#us-uk .love_list .play-list").innerHTML =
        Htmls_USUK_Playlist_ListSong_Love.join("");
    }

    //   Page Lofi
    // Tab Waitting
    if ($("#lofi")) {
      const Htmls_Lofi_Playlist_ListSong_Watting =
        this.getHtmls_Playlist_ListSong(this.listSongRecommend_Lofi);
      $("#lofi .watting_list .play-list").innerHTML =
        Htmls_Lofi_Playlist_ListSong_Watting.join("");
      // Tab Love_List
      const Htmls_Lofi_Playlist_ListSong_Love = this.getHtmls_Playlist_ListSong(
        this.listSongRecommend_Lofi
      );
      $("#lofi .love_list .play-list").innerHTML =
        Htmls_Lofi_Playlist_ListSong_Love.join("");
    }
  },

  render: function () {
    this.renderPlaylist();
    this.rederSettingBg();
  },

  defineProperties: function () {
    Object.defineProperty(this, "listSong", {
      get: function () {
        if ($("#vpop")) {
          return this.listSongRecommend_Vpop;
        } else if ($("#us-uk")) {
          return this.listSongRecommend_USUK;
        } else {
          return this.listSongRecommend_Lofi;
        }
      },
    });

    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.listSong[this.currentIndex];
      },
    });
  },

  handleEvent: function () {
    const mobileToggle = Array.from($$(".mobile-toggle"));
    const settingBg_icon = $(".settingBg__icon");
    const playlist_Icon = Array.from($$(".playlist__icon > *"));
    const playlist_BtnOpen = $(".main__playlist .open");
    const playlist_BtnClose = $(".main__playlist .close");
    const playlist_Content = $(".main__playlist .playlist__content");
    const playlist_TabName = Array.from($$(".playlist_grouptab span"));
    const playlist_TabContent = Array.from($$(".tab__container-list"));
    const settingBg_item = Array.from($$(".main__settingBg .bg-item"));
    const songItem = Array.from($$(".play-list .song-item"));
    const playImg = Array.from($$(".play-list .song-img--hover"));
    const songName = Array.from($$(".play-list .song-name"));
    const login = Array.from($$(".login"));
    const options_Request = Array.from($$(".option"));

    // Event for login
    function showLogin() {
      loginMain.classList.add("active");
    }

    function hideLogin() {
      loginMain.classList.remove("active");
    }

    login.forEach((element) => {
      element.addEventListener("click", showLogin);
    });

    loginMain.addEventListener("click", hideLogin);

    loginContainer.onclick = function (event) {
      event.stopPropagation();
    };

    $(".singin__name").onclick = function () {
      $(".singin__name").classList.add("active");
      $(".singin").classList.add("active");
      $(".singup").classList.remove("active");
      $(".singup__name").classList.remove("active");
    };

    $(".singup__name").onclick = function () {
      $(".singin").classList.remove("active");
      $(".singin__name").classList.remove("active");
      $(".singup__name").classList.add("active");
      $(".singup").classList.add("active");
    };

    // Xu ly toast
    function createToast(toastData) {
      const toastChild = document.createElement("div");
      toastChild.classList.add("toast", `toast--${toastData.type}`);
      toastChild.innerHTML = `
                    <div class="toast__container"> 
                      <div class="toast__icon"> <i class="${toastData.icon}"></i></div>
                      <div class="toast__content"> 
                        <div class="toast__heading">${toastData.heading}</div>
                        <div class="toast__text">${toastData.text}</div>
                      </div>
                      <div class="toast__close"> <i class="fas fa-times-square"></i></div>
                    </div>
                `;
      toast.appendChild(toastChild);

      // Auto remove toast
      const autoRemoveId = setTimeout(function () {
        toast.removeChild(toastChild);
      }, toastData.duration);

      // Remove toast when clicked
      toastChild.onclick = function (e) {
        if (e.target.closest(".toast__close")) {
          toast.removeChild(toastChild);
          clearTimeout(autoRemoveId);
        }
      };
    }

    if (!this.isLogin) {
      options_Request.forEach((option) => {
        option.onclick = function () {
          const toastData = {
            type: "error",
            icon: _this.toastIcons.error,
            heading: "Thất bại!",
            text: "Bạn cần đăng nhập để sử dụng chức năng này!!",
            duration: 5000,
          };
          createToast(toastData);
        };
      });
    }

    const _this = this;
    songItem[this.currentIndex].classList.add("active");

    // Xu ly event nav mobile devices
    for (let i = 0; i < mobileToggle.length; i++) {
      mobileToggle[i].onclick = function () {
        mobileToggle.forEach((e) => {
          e.classList.toggle("menu-on");
        });
        $(".header-mobile").classList.toggle("menu-on");
      };
    }

    // Setting onclick
    settingBg_icon.onclick = function () {
      $(".settingBg__container").classList.toggle("active");
    };

    // Open - Close Playlist
    for (let i = 0; i < playlist_Icon.length; i++) {
      playlist_Icon[i].onclick = function () {
        playlist_BtnOpen.classList.toggle("active");
        playlist_BtnClose.classList.toggle("active");
        playlist_Content.classList.toggle("active");
      };
    }

    // Click tab Playlist
    for (let i = 0; i < playlist_TabName.length; i++) {
      playlist_TabName[i].onclick = function () {
        for (let j = 0; j < playlist_TabName.length; j++) {
          playlist_TabName[j].classList.remove("active");
          playlist_TabContent[j].classList.remove("active");
        }
        playlist_TabName[i].classList.add("active");
        playlist_TabContent[i].classList.add("active");
      };
    }

    for (let i = 0; i < settingBg_item.length; i++) {
      settingBg_item[i].onclick = function () {
        $(".main__bg").style.backgroundImage = this.style.backgroundImage;
      };
    }

    for (let i = 0; i < songItem.length; i++) {
      playImg[i].onclick = function () {
        pause.classList.remove("active");
        play.classList.add("active");
        playImg[i].style.visibility = "hidden";
        if (i === _this.currentIndex) {
          audio.play();
          cdThumbAnimate.play();
        } else {
          songItem[_this.currentIndex].classList.remove("active");
          songItem[i].classList.add("active");
          playImg[_this.currentIndex].style.visibility = "visible";
          sidebarTime.style.width = "0%";
          currentTime.innerHTML = "00:00";
          _this.currentIndex = i;
          _this.loadCurrentSong();
          audio.play();
          cdThumbAnimate.play();
          console.log(i);
        }
      };

      songName[i].onclick = function () {
        playImg[i].click();
      };
    }

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
        sidebarTime.style.width = `${progressPercent}%`;
        currentTime.innerHTML = `${formatTime(audio.currentTime)}`;
      }
    };

    // Xử lý khi tua song
    sidebarBg.onclick = function (e) {
      const seekProcess = e.pageX - this.offsetLeft;
      let progressPercent = (seekProcess / this.offsetWidth) * 100;
      progressPercent = Math.ceil(progressPercent);
      // sidebarTime[i].style.width = `${progressPercent}%`;
      const seekTime = (progressPercent * audio.duration) / 100;
      audio.currentTime = seekTime;
      console.log(sidebarBg);
    };

    function resetVolume() {
      volumeMute.classList.remove("active");
      volumeLow.classList.remove("active");
      volumeHight.classList.remove("active");
    }

    function mute() {
      audio.volume = 0;
      volumSide.style.width = "0%";
      resetVolume();
      volumeMute.classList.add("active");
    }
    // Xy ly xu kien volumeSide onclick
    volumSideBg.onclick = function (e) {
      const seekProcess = e.pageX - this.offsetLeft;
      let progressPercent = (seekProcess / this.offsetWidth) * 100;
      progressPercent = Math.ceil(progressPercent);
      audio.volume = progressPercent / 100;
      volumSide.style.width = `${progressPercent}%`;
      resetVolume();
      if (progressPercent === 0) {
        volumeMute.classList.add("active");
      } else if (progressPercent >= 0 && progressPercent <= 50) {
        volumeLow.classList.add("active");
      } else {
        volumeHight.classList.add("active");
      }
    };

    // Xu ly khi an Icon Volume
    volumeLow.onclick = function () {
      mute();
    };
    volumeHight.onclick = function () {
      mute();
    };

    const cdThumbAnimate = songImgPlayer.animate(
      [{ transform: "rotate(360deg)" }],
      {
        duration: 10000, // 10 seconds
        iterations: Infinity,
      }
    );
    cdThumbAnimate.pause();

    play.onclick = function () {
      pause.classList.remove("active");
      play.classList.add("active");
      playImg[_this.currentIndex].style.visibility = "hidden";
      audio.play();
      cdThumbAnimate.play();
      console.log(audio);
    };

    pause.onclick = function () {
      pause.classList.add("active");
      play.classList.remove("active");
      playImg[_this.currentIndex].style.visibility = "visible";
      audio.pause();
      cdThumbAnimate.pause();
    };

    random.onclick = function (e) {
      _this.isRandom = !_this.isRandom;
      // _this.setConfig("isRandom", _this.isRandom);
      random.classList.toggle("active", _this.isRandom);
    };

    // Xử lý lặp lại một song
    // Single-parallel repeat processing
    repeat.onclick = function (e) {
      _this.isRepeat = !_this.isRepeat;
      // _this.setConfig("isRepeat", _this.isRepeat);
      repeat.classList.toggle("active", _this.isRepeat);
    };

    next.onclick = function () {
      songItem[_this.currentIndex].classList.remove("active");
      playImg[_this.currentIndex].style.visibility = "visible";
      if (_this.isRandom) {
        _this.playRandomSong();
      } else {
        _this.nextSong();
      }
      songItem[_this.currentIndex].classList.add("active");
      playImg[_this.currentIndex].style.visibility = "hidden";
      audio.play();
    };

    prev.onclick = function () {
      songItem[_this.currentIndex].classList.remove("active");
      playImg[_this.currentIndex].style.visibility = "visible";
      if (_this.isRandom) {
        _this.playRandomSong();
      } else {
        _this.prevSong();
      }
      songItem[_this.currentIndex].classList.add("active");
      playImg[_this.currentIndex].style.visibility = "hidden";
      audio.play();
    };

    audio.onended = function () {
      if (_this.isRepeat) {
        audio.play();
      } else {
        next.click();
      }
    };
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
    songNamePlayer.innerHTML = this.currentSong.name;
    songAuthorPlayer.innerHTML = this.currentSong.author;
    songDurationPlayer.innerHTML = this.currentSong.duration;
    songImgPlayer.style.backgroundImage = `url("${this.currentSong.image}")`;
  },

  start: function () {
    this.render();
    this.defineProperties();
    this.setDefaultApp();
    this.handleEvent();
  },
};
app.start();
