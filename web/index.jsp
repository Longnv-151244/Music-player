<%-- 
    Document   : home
    Created on : 02-03-2022, 00:01:15
    Author     : dclon
--%>

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
                <div class="header__logo"><a class="header-brand" href="index.html"><img src="./img/core-img/logo.png" alt=""></a>
                </div>
                <div class="menu-nav">
                    <ul class="header__nav-moblie">
                        <li><a class="current" href="./index.html">Home </a></li>
                        <li><a href="./vpop.html">Nhạc Việt Nam </a></li>
                        <li><a href="./usuk.html">Nhạc Quốc Tế </a></li>
                        <li><a href="./lofi.html">Lofi </a></li>
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
                    <div class="header__logo"><a class="header-brand" href="index.html"><img src="./img/core-img/logo.png"
                                                                                             alt=""></a></div>
                    <div class="header__menu">
                        <ul class="header__nav">
                            <li><a class="current" href="./index.html">Home </a></li>
                            <li><a href="./vpop.html">Nhạc Việt Nam </a></li>
                            <li><a href="./usuk.html">Nhạc Quốc Tế </a></li>
                            <li><a href="./lofi.html">Lofi </a></li>
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
        <section id="slider"></section>
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
                                <div class="container__slide-show"></div>
                            </div>
                            <div class="tab__container-list">
                                <div class="play-list scroll-overflow"> </div>
                            </div>
                        </div>
                        <div class="tab__content usuk-tab">
                            <div class="container__slide hide-on-mobile">
                                <div class="container__slide-show"></div>
                            </div>
                            <div class="tab__container-list">
                                <div class="play-list scroll-overflow"> </div>
                            </div>
                        </div>
                        <div class="tab__content lofi-tab">
                            <div class="container__slide hide-on-mobile">
                                <div class="container__slide-show"></div>
                            </div>
                            <div class="tab__container-list">
                                <div class="play-list scroll-overflow"></div>
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
        <script src="./js/app.js"></script>
    </body>
</html>