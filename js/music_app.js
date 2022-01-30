const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = {
  currentIndex: -1,
  lastIndex_Play: 0,
  isPlaying: false,

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
            <div class="song-item">
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
                    <div class="like"><i class="far fa-heart"></i></div>
                    <div class="download"><i class="fas fa-download"></i></div>
                </div>
            </div>
                    `;
    });
    return htmls;
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
  },

  defineProperties: function () {
    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.listSong[this.currentIndex];
      },
    });
  },

  handleEvent: function () {
    const mobileToggle = Array.from($$(".mobile-toggle"));
    const settingBg_icon = $(".settingBg__icon");
    const playlist_BtnOpen = $(".main__playlist .open");
    const playlist_BtnClose = $(".main__playlist .close");
    const playlist_Content = $(".main__playlist .playlist__content");
    const playlist_TabName = Array.from($$(".playlist_grouptab span"));
    const playlist_TabContent = Array.from($$(".tab__container-list"));
    const settingBg_item = Array.from($$(".main__settingBg .bg-item"));

    const _this = this;

    // Xu ly event nav mobile devices
    for (let i = 0; i < mobileToggle.length; i++) {
      mobileToggle[i].onclick = function () {
        mobileToggle.forEach((e) => {
          e.classList.toggle("menu-on");
        });
        $(".header-mobile").classList.toggle("menu-on");
      };
    }

    settingBg_icon.onclick = function () {
      $(".settingBg__container").classList.toggle("active");
    };

    playlist_BtnOpen.onclick = function () {
      playlist_BtnOpen.classList.remove("active");
      playlist_BtnClose.classList.add("active");
      playlist_Content.classList.add("active");
    };

    playlist_BtnClose.onclick = function () {
      playlist_BtnOpen.classList.add("active");
      playlist_BtnClose.classList.remove("active");
      playlist_Content.classList.remove("active");
    };

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
  },

  //   setDefaultApp: function () {
  //     this.setVolumeDefault();
  //     this.loadCurrentSong();
  //   },

  //   setVolumeDefault: function () {
  //     audio.volume = 0.2;
  //   },

  //   loadCurrentSong: function () {
  //     if (this.currentIndex === -1) {
  //       audio.src = this.listSong[0].path;
  //     } else {
  //       audio.src = this.currentSong.path;
  //     }
  //   },

  start: function () {
    this.render();
    this.defineProperties();
    // this.setDefaultApp();
    this.handleEvent();
  },
};
app.start();
