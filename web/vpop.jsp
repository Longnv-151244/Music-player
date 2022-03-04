<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%-- 
    Document   : vpop
    Created on : 02-03-2022, 00:05:57
    Author     : dclon
--%>
<%@page import="model.Album"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
        <link rel="stylesheet" href="css/app.css">
        <link href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" rel="stylesheet">
    </head>
    <body>
        <section id="vpop">
            <section class="bg-overlay" id="login">
                <div class="login__container">
                    <div class="login__nav">
                        <h1 class="singin__name active">Sign in </h1><span>/</span>
                        <h1 class="singup__name">Sign up </h1>
                    </div>
                    <div class="login__content">
                        <div class="singin active">
                            <form action="#">
                                <div class="social-container"><a class="social" href="#"><i class="fab fa-facebook-f"></i></a><a
                                        class="social" href="#"><i class="fab fa-google-plus-g"></i></a><a class="social" href="#"><i
                                            class="fab fa-linkedin-in"></i></a></div><span>or use your account</span>
                                <input type="email" placeholder="Email">
                                <input type="password" placeholder="Password"><a class="forgot" href="#">Forgot your password?</a>
                                <button class="btn">Sign In</button>
                            </form>
                        </div>
                        <div class="singup">
                            <form action="#">
                                <div class="social-container"><a class="social" href="#"><i class="fab fa-facebook-f"></i></a><a
                                        class="social" href="#"><i class="fab fa-google-plus-g"></i></a><a class="social" href="#"><i
                                            class="fab fa-linkedin-in"></i></a></div><span>or use your email for registration</span>
                                <input type="text" placeholder="Name">
                                <input type="email" placeholder="Email">
                                <input type="password" placeholder="Password">
                                <button class="btn">Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section id="header">
                <div class="header-mobile">
                    <div class="mobile-toggle"><i class="far fa-times close"></i></div>
                    <div class="header__logo"><a class="header-brand" href="./home"><img src="./img/core-img/logo.png"
                                                                                         alt=""></a></div>
                    <div class="menu-nav">
                        <ul class="header__nav-moblie">
                            <li><a href="./home">Home </a></li>
                            <li><a class="current" href="./vpop">Nhạc Việt Nam </a></li>
                            <li><a href="./us-uk">Nhạc Quốc Tế </a></li>
                            <li><a href="./lofi">Lofi </a></li>
                            <li class="login">Đăng nhập</li>
                        </ul>
                        <div class="header__search">
                            <form action="" method="post">
                                <input type="text" name="header-search" placeholder="Search and hit enter...">
                                <button class="btn" type="submit"> <i class="fa fa-search"> </i></button>
                            </form>
                        </div>
                        <ul class="header__social">
                            <li><a class="fab fa-facebook" href="#"> </a></li>
                            <li><a class="fab fa-twitter" href="#"> </a></li>
                            <li><a class="fab fa-pinterest" href="#"> </a></li>
                            <li><a class="fab fa-instagram" href="#"> </a></li>
                            <li><a class="fab fa-youtube" href="#"></a></li>
                        </ul>
                    </div>
                </div>
                <div class="header__container container-fluid">
                    <div class="header__content">
                        <div class="header__logo"><a class="header-brand" href="./home"><img src="./img/core-img/logo.png"
                                                                                             alt=""></a></div>
                        <div class="header__menu">
                            <ul class="header__nav">
                                <li><a href="./home">Home </a></li>
                                <li><a class="current" href="./vpop">Nhạc Việt Nam </a></li>
                                <li><a href="./us-uk">Nhạc Quốc Tế </a></li>
                                <li><a href="./lofi">Lofi </a></li>
                            </ul>
                            <div class="header__search">
                                <form action="" method="post">
                                    <input type="text" name="header-search" placeholder="Search and hit enter...">
                                    <button class="btn" type="submit"> <i class="fa fa-search"> </i></button>
                                </form>
                            </div>
                            <ul class="header__social">
                                <li><a class="fab fa-facebook" href="#"> </a></li>
                                <li><a class="fab fa-twitter" href="#"> </a></li>
                                <li><a class="fab fa-pinterest" href="#"> </a></li>
                                <li><a class="fab fa-instagram" href="#"> </a></li>
                                <li><a class="fab fa-youtube" href="#"></a></li>
                                <li class="login">Đăng nhập </li>
                            </ul>
                        </div>
                        <div class="mobile-toggle"><i class="far fa-bars open"></i><i class="far fa-times close"> </i></div>
                    </div>
                    <div class="header__background"></div>
                </div>
            </section>
            <section id="main">
                <div class="main__bg bg-img" style="background-image: url('./img/bg-gif/gif-10.gif');">
                    <div class="main__settingBg">
                        <div class="settingBg__icon"> <i class="fas fa-sliders-h"></i></div>
                        <div class="settingBg__container">
                            <div class="settingBg__content">
                                <h2 class="settingBg__heading">Setup BackGround</h2>
                                <div class="settingBg__list-item">
                                    <c:forEach var="bg" items="${requestScope.bgs}">
                                        <div class="bg-item bg-img" style="background-image: url(${bg.path});"></div>
                                    </c:forEach>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="main__player">
                        <div class="player__song">
                            <div class="song-img bg-img"></div>
                            <div class="song-info">
                                <div class="song-name"> </div>
                                <div class="song-author"> </div>
                            </div>
                        </div>
                        <div class="player__control">
                            <div class="control">
                                <div class="repeat"><i class="fas fa-repeat"></i></div>
                                <div class="prev"> <i class="fas fa-fast-backward"></i></div>
                                <div class="play"><i class="fas fa-play-circle"></i></div>
                                <div class="pause active"><i class="fas fa-pause-circle"></i></div>
                                <div class="next"> <i class="fas fa-fast-forward"></i></div>
                                <div class="random"><i class="fas fa-random"></i></div>
                            </div>
                            <div class="duration">
                                <div class="currenTime">00:00</div>
                                <div class="sidebarTime--bg">
                                    <div class="sidebarTime--current"></div>
                                </div>
                                <div class="durationTime"></div>
                            </div>
                        </div>
                        <div class="player__option">
                            <div class="volume">
                                <div class="volume__icon"><i class="mute fas fa-volume-slash"></i><i
                                        class="volume--low fas fa-volume active"></i><i class="volume--hight fas fa-volume-up"></i></div>
                                <div class="volume__silebar--bg">
                                    <div class="volume__silebar--current"></div>
                                </div>
                            </div>
                            <div class="option__content">
                                <div class="like option"><i class="far fa-heart"></i><i class="fas fa-heart"></i></div>
                                <div class="download option"><i class="fas fa-download"></i></div>
                            </div>
                        </div>
                    </div>
                    <div class="main__playlist">
                        <div class="playlist__icon">
                            <div class="open active"><i class="fad fa-angle-double-left"></i></div>
                            <div class="close"><i class="fad fa-angle-double-right"></i></div>
                        </div>
                        <div class="playlist__content">
                            <div class="playlist_grouptab"><span class="watting_list__name active">Danh sách phát</span><span
                                    class="love_list__name">Danh sách Playlist</span></div>
                            <div class="watting_list tab__container-list active">
                                <div class="play-list scroll-overflow">
                                    <c:forEach var="song" items="${requestScope.albums}">
                                        <div class="song-item" data-path="${song.path}">
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
                                            <div class="song-option">
                                                <div class="option like"><i class ="far fa-heart"></i></div>
                                                <div class="option download"><i class="fas fa-download"></i></div>
                                            </div>
                                        </div>
                                    </c:forEach>
                                </div>
                            </div>
                            <div class="love_list tab__container-list">
                                <div class="login active">
                                    <div class="login__heading">Đăng nhập để khám phá những playlist dành riêng cho chính bạn.</div>
                                    <div class="login__content active"><img src="./img/core-img/google_logo.png" alt=""><span>Đăng
                                            nhập</span></div>
                                </div>
                                <div class="play-list scroll-overflow"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="toast"></section>
            <audio id="audio" src=""> </audio>
            <script src="./js/music_app.js"></script>
        </section>
    </body>
</html>