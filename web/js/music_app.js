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
const songItem = Array.from($$(".play-list .song-item"));
const mobileToggle = Array.from($$(".mobile-toggle"));

const settingBg_icon = $(".settingBg__icon");
const playlist_Icon = Array.from($$(".playlist__icon > *"));
const playlist_BtnOpen = $(".main__playlist .open");
const playlist_BtnClose = $(".main__playlist .close");
const playlist_Content = $(".main__playlist .playlist__content");
const playlist_TabName = Array.from($$(".playlist_grouptab span"));
const playlist_TabContent = Array.from($$(".tab__container-list"));
const settingBg_item = Array.from($$(".main__settingBg .bg-item"));
const playImg = Array.from($$(".play-list .song-img--hover"));
const songName = Array.from($$(".play-list .song-name"));
const login = Array.from($$(".login"));
const options_Request = Array.from($$(".option"));

const app = {
    currentIndex: 0,
    lastIndex_Play: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    listSong: songItem.map((song) => {
        return {
            name: song.querySelector(".song-name").innerText,
            author: song.querySelector(".song-author").innerText,
            duration: song.querySelector(".song-duration").innerText,
            image: song.querySelector(".song-img").style.backgroundImage,
            path: song.dataset.path,
        };
    }),
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

    render: function () {
    },

    defineProperties: function () {
        Object.defineProperty(this, "currentSong", {
            get: function () {
                return this.listSong[this.currentIndex];
            },
        });
    },

    handleEvent: function () {


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
                [{transform: "rotate(360deg)"}],
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
        songImgPlayer.style.backgroundImage = this.currentSong.image;
    },

    start: function () {
        this.render();
        this.defineProperties();
        this.setDefaultApp();
        this.handleEvent();
    },
};
app.start();
