<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<%-- 
    Document   : home
    Created on : 02-03-2022, 00:01:15
    Author     : dclon
--%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="model.Slider"%>
<%@page import="model.Album"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
        <link rel="stylesheet" href="css/app.css">
        <link href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" rel="stylesheet">
    </head>
    <body>
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
                <div class="header__logo"><a class="header-brand" href="./home"><img src="./img/core-img/logo.png" alt=""></a>
                </div>
                <div class="menu-nav">
                    <ul class="header__nav-moblie">
                        <li><a class="current" href="./home">Home </a></li>
                        <li><a href="./vpop">Nhạc Việt Nam </a></li>
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
                            <li><a class="current" href="./home">Home </a></li>
                            <li><a href="./vpop">Nhạc Việt Nam </a></li>
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
        <section id="slider">
            <% int index = -1; %>
            <c:forEach var="slider" items="${requestScope.sliders}">
                <% index++; %>
                <div class="slider__item bg-overlay bg-img slider__item-<%=index %> <% if (index == 1) { %> active <% } %>" style="background-image: url('${slider.album.image}');">
                    <div class="container">
                        <div class="slider__content">
                            <div class="slider__wellcome"> 
                                <h1 class="slider__heading">${slider.heading}</h1>
                                <p class="slider__text">${slider.text}</p>
                                <div class="slider__group--btn">
                                    <div class="btn filter">Subscribe with iTunes</div>
                                    <div class="btn btn--second filter">Subscribe with RSS</div>
                                </div>
                            </div>
                            <div class="slider__player player song-item" data-path="${slider.album.path}">
                                <div class="player__img bg-img" style="background-image: url('${slider.album.image}');">
                                    <div class="song-img--hover"></div>
                                </div>
                                <div class="player__content">
                                    <div class="player__info">
                                        <p class="player__date">${slider.album.t_create}</p>
                                        <h1 class="player__name song-name">${slider.album.name}</h1>
                                        <p class="player__text"><span class="player__author">${slider.album.author} | </span><span class="player__category">${slider.album.category} | </span><span class="player_duration">00:${slider.album.duration}</span></p>
                                    </div>
                                    <div class="player__control">
                                        <div class="play"><i class="fas fa-play-circle"></i></div>
                                        <div class="pause active"><i class="fas fa-pause-circle"></i></div><span class="currenTime">00:00</span>
                                        <div class="sidebarTime--bg">
                                            <div class="sidebarTime--current"> </div>
                                        </div><span class="duration">${slider.album.duration}</span>
                                        <div class="volume">
                                            <div class="volume__icon"> <i class="mute fas fa-volume-slash"></i><i class="volume--low fas fa-volume active"></i><i class="volume--hight fas fa-volume-up"></i></div>
                                        </div>
                                        <div class="volume__silebar--bg">
                                            <div class="volume__silebar--current"></div>
                                        </div>
                                    </div>
                                    <div class="like-share-download">
                                        <div class="option like"><i class="fas fa-heart"> <span>Like</span></i></div>
                                        <div class="div">
                                            <div class="option share"> <i class="fas fa-share-alt"> <span>Share</span></i></div>
                                            <div class="option download"><i class="fas fa-download"> <span>Download</span></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </c:forEach>


        </section>
        <section id="recommend">
            <div class="container">
                <h1 class="text-center">Lựa chọn của Loustic</h1>
                <div class="line center-block"></div>
                <div class="group-tab__name text-center">
                    <h3>Vpop </h3>
                    <h3>US-UK </h3>
                    <h3>Lofi </h3>
                </div>
                <div class="group-tab__content">
                    <div class="tab__container">
                        <div class="tab__heading">
                            <h2>Bài Hát</h2>
                            <div class="btn-group">
                                <div class="btn btn--second btn-addList option"> <i class="fas fa-download"> <span>Tải về</span></i></div>
                                <div class="btn btn-playAll"> <i class="fas fa-play"><span>Phát tất cả</span></i></div>
                            </div>
                        </div>
                        <div class="tab__content vpop-tab active">
                            <div class="container__slide hide-on-mobile">
                                <div class="container__slide-show">
                                    <% index = 0;%>
                                    <c:forEach var="album" items="${requestScope.albums_Vpop}">
                                        <% index++;%>
                                        <div class="container__slide-item <% switch(index){
                                                case 1: %>first<% break;
                                                case 2: %>second<% break;
                                                case 3: %>third<% break;
                                                default: %>fourth<% break;
                                             } %>">
                                            <div class="container__slide-img" style="background: url('${album.image}') no-repeat center center / cover">
                                            </div>
                                        </div>
                                    </c:forEach>
                                </div>
                            </div>
                            <div class="tab__container-list">
                                <div class="play-list scroll-overflow">
                                    <c:forEach var="album" items="${requestScope.albums_Vpop}">
                                        <div class="song-item" data-path="${album.path}">
                                            <div class="song-content">
                                                <div class="song-img bg-img" style="background-image: url('${album.image}');">
                                                    <div class="song-img--hover"><i class="fas fa-play"></i></div>
                                                </div>
                                                <div class="song-info"> 
                                                    <h2 class="song-name">${album.name}</h2>
                                                    <div class="song-author">${album.author}</div>
                                                </div>
                                            </div>
                                            <div class="song-duration">${album.duration}</div>
                                            <div class="player__content">
                                                <div class="player__control"> 
                                                    <div class="play"><i class="fas fa-play-circle"></i></div>
                                                    <div class="pause active"><i class="fas fa-pause-circle"></i></div><span class="currenTime">00:00</span>
                                                    <div class="sidebarTime--bg">
                                                        <div class="sidebarTime--current"></div>
                                                    </div><span class="duration">${album.duration}</span>
                                                </div>
                                            </div>
                                            <div class="song-option"> 
                                                <div class="option addList"> <i class="fas fa-plus"></i></div>
                                                <div class="option like"> <i class="far fa-heart"></i></div>
                                            </div>
                                        </div>
                                    </c:forEach>
                                </div>
                            </div>
                        </div>
                        <div class="tab__content usuk-tab">
                            <div class="container__slide hide-on-mobile">
                                <div class="container__slide-show">
                                    <% index = 0;%>
                                    <c:forEach var="album" items="${requestScope.albums_USUK}">
                                        <% index++;%>
                                        <div class="container__slide-item <% switch(index){
                                                case 1: %>first<% break;
                                                case 2: %>second<% break;
                                                case 3: %>third<% break;
                                                default: %>fourth<% break;
                                             } %>">
                                            <div class="container__slide-img" style="background: url('${album.image}') no-repeat center center / cover">
                                            </div>
                                        </div>
                                    </c:forEach>
                                </div>
                            </div>
                            <div class="tab__container-list">
                                <div class="play-list scroll-overflow"> 
                                    <c:forEach var="album" items="${requestScope.albums_USUK}">
                                        <div class="song-item" data-path="${album.path}">
                                            <div class="song-content">
                                                <div class="song-img bg-img" style="background-image: url('${album.image}');">
                                                    <div class="song-img--hover"><i class="fas fa-play"></i></div>
                                                </div>
                                                <div class="song-info"> 
                                                    <h2 class="song-name">${album.name}</h2>
                                                    <div class="song-author">${album.author}</div>
                                                </div>
                                            </div>
                                            <div class="song-duration">${album.duration}</div>
                                            <div class="player__content">
                                                <div class="player__control"> 
                                                    <div class="play"><i class="fas fa-play-circle"></i></div>
                                                    <div class="pause active"><i class="fas fa-pause-circle"></i></div><span class="currenTime">00:00</span>
                                                    <div class="sidebarTime--bg">
                                                        <div class="sidebarTime--current"></div>
                                                    </div><span class="duration">${album.duration}</span>
                                                </div>
                                            </div>
                                            <div class="song-option"> 
                                                <div class="option addList"> <i class="fas fa-plus"></i></div>
                                                <div class="option like"> <i class="far fa-heart"></i></div>
                                            </div>
                                        </div>
                                    </c:forEach>
                                </div>
                            </div>
                        </div>
                        <div class="tab__content lofi-tab">
                            <div class="container__slide hide-on-mobile">
                                <div class="container__slide-show">
                                    <% index = 0;%>
                                    <c:forEach var="album" items="${requestScope.albums_Lofi}">
                                        <% index++;%>
                                        <div class="container__slide-item <% switch(index){
                                                case 1: %>first<% break;
                                                case 2: %>second<% break;
                                                case 3: %>third<% break;
                                                default: %>fourth<% break;
                                             } %>">
                                            <div class="container__slide-img" style="background: url('${album.image}') no-repeat center center / cover">
                                            </div>
                                        </div>
                                    </c:forEach>
                                </div>
                            </div>
                            <div class="tab__container-list">
                                <div class="play-list scroll-overflow">
                                    <c:forEach var="album" items="${requestScope.albums_Lofi}">
                                        <div class="song-item" data-path="${album.path}">
                                            <div class="song-content">
                                                <div class="song-img bg-img" style="background-image: url('${album.image}');">
                                                    <div class="song-img--hover"><i class="fas fa-play"></i></div>
                                                </div>
                                                <div class="song-info"> 
                                                    <h2 class="song-name">${album.name}</h2>
                                                    <div class="song-author">${album.author}</div>
                                                </div>
                                            </div>
                                            <div class="song-duration">${album.duration}</div>
                                            <div class="player__content">
                                                <div class="player__control"> 
                                                    <div class="play"><i class="fas fa-play-circle"></i></div>
                                                    <div class="pause active"><i class="fas fa-pause-circle"></i></div><span class="currenTime">00:00</span>
                                                    <div class="sidebarTime--bg">
                                                        <div class="sidebarTime--current"></div>
                                                    </div><span class="duration">${album.duration}</span>
                                                </div>
                                            </div>
                                            <div class="song-option"> 
                                                <div class="option addList"> <i class="fas fa-plus"></i></div>
                                                <div class="option like"> <i class="far fa-heart"></i></div>
                                            </div>
                                        </div>
                                    </c:forEach>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="newletter">
            <div class="jarallax bg-overlay bg-img" style="background-image: url('./img/core-img/newletter.png');">
                <div class="container newletter__container">
                    <div class="newletter__content">
                        <h1>Sign Up To Newsletter</h1>
                        <p>Subscribe to receive info on our latest news and episodes</p>
                    </div>
                    <div class="newletter__subcribe">
                        <form action="" method="method">
                            <input type="text" placeholder="Your Email">
                            <input type="submit" value="SUBCRIBE">
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <section id="footer">
            <div class="container footer__container">
                <div class="footer__about">
                    <h2>About Us</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                    <p>&copy; Copyright &copy; 2022 <span>Nguyen Van Long</span></p>
                </div>
                <ul class="footer__categories">
                    <h2>Categories</h2>
                    <li><a href="#">Entrepreneurship </a></li>
                    <li><a href="#">Media </a></li>
                    <li><a href="#">Tech </a></li>
                    <li> <a href="#">Tutorials </a></li>
                </ul>
                <div class="footer_social">
                    <h2>Follow Us</h2>
                    <ul class="media">
                        <li><a class="fab fa-facebook" href="#"> </a></li>
                        <li><a class="fab fa-twitter" href="#"> </a></li>
                        <li><a class="fab fa-pinterest" href="#"> </a></li>
                        <li><a class="fab fa-instagram" href="#"> </a></li>
                        <li><a class="fab fa-youtube" href="#"> </a></li>
                    </ul>
                    <ul class="store">
                        <li> <a href=""><img src="./img/core-img/app-store.png" alt=""></a></li>
                        <li> <a href=""><img src="./img/core-img/google-play.png" alt=""></a></li>
                    </ul>
                </div>
            </div>
        </section>
        <section id="toast"></section>
        <audio id="audio" src=""> </audio>
        <script src="./node_modules/jarallax/dist/jarallax.min.js"></script>
        <script src="./js/app_demo.js"></script>
    </body>
</html>
