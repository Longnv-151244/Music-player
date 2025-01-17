USE [master]
GO
/****** Object:  Database [MusicPlayer]    Script Date: 21/03/2022 10:49:25 SA ******/
CREATE DATABASE [MusicPlayer] ON  PRIMARY 
( NAME = N'MusicPlayer', FILENAME = N'c:\Program Files\Microsoft SQL Server\MSSQL10_50.MSSQLSERVER\MSSQL\DATA\MusicPlayer.mdf' , SIZE = 2304KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'MusicPlayer_log', FILENAME = N'c:\Program Files\Microsoft SQL Server\MSSQL10_50.MSSQLSERVER\MSSQL\DATA\MusicPlayer_log.LDF' , SIZE = 576KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [MusicPlayer] SET COMPATIBILITY_LEVEL = 100
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [MusicPlayer].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [MusicPlayer] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [MusicPlayer] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [MusicPlayer] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [MusicPlayer] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [MusicPlayer] SET ARITHABORT OFF 
GO
ALTER DATABASE [MusicPlayer] SET AUTO_CLOSE ON 
GO
ALTER DATABASE [MusicPlayer] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [MusicPlayer] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [MusicPlayer] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [MusicPlayer] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [MusicPlayer] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [MusicPlayer] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [MusicPlayer] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [MusicPlayer] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [MusicPlayer] SET  ENABLE_BROKER 
GO
ALTER DATABASE [MusicPlayer] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [MusicPlayer] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [MusicPlayer] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [MusicPlayer] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [MusicPlayer] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [MusicPlayer] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [MusicPlayer] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [MusicPlayer] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [MusicPlayer] SET  MULTI_USER 
GO
ALTER DATABASE [MusicPlayer] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [MusicPlayer] SET DB_CHAINING OFF 
GO
USE [MusicPlayer]
GO
/****** Object:  Table [dbo].[Action]    Script Date: 21/03/2022 10:49:25 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Action](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](16) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Albums]    Script Date: 21/03/2022 10:49:25 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Albums](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](64) NOT NULL,
	[author] [nvarchar](64) NOT NULL,
	[category_ID] [int] NOT NULL,
	[duration] [varchar](10) NOT NULL,
	[image] [varchar](255) NULL,
	[path] [varchar](255) NOT NULL,
	[t_create] [smalldatetime] NOT NULL,
	[t_lastUpdate] [smalldatetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Background]    Script Date: 21/03/2022 10:49:25 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Background](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](16) NOT NULL,
	[path] [varchar](255) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Category]    Script Date: 21/03/2022 10:49:25 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Category](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](32) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[history_Album]    Script Date: 21/03/2022 10:49:25 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[history_Album](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[user_ID] [int] NOT NULL,
	[user_name] [varchar](32) NOT NULL,
	[album_ID] [int] NOT NULL,
	[album_name] [nvarchar](64) NOT NULL,
	[t_lastUpdate] [smalldatetime] NOT NULL,
	[action_ID] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[liked]    Script Date: 21/03/2022 10:49:25 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[liked](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[user_ID] [int] NOT NULL,
	[album_ID] [int] NOT NULL,
	[t_lastUpdate] [smalldatetime] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Message]    Script Date: 21/03/2022 10:49:25 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Message](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](32) NULL,
	[describe] [nvarchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Roles]    Script Date: 21/03/2022 10:49:25 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Roles](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](32) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Slider]    Script Date: 21/03/2022 10:49:25 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Slider](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[album_ID] [int] NOT NULL,
	[heading] [nvarchar](255) NULL,
	[text] [nvarchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 21/03/2022 10:49:25 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[username] [varchar](32) NOT NULL,
	[password] [varchar](32) NOT NULL,
	[first_name] [nvarchar](16) NULL,
	[last_name] [nvarchar](16) NULL,
	[avatar] [varchar](255) NULL,
	[role_ID] [int] NOT NULL,
	[t_create] [smalldatetime] NOT NULL,
	[t_lastOnline] [smalldatetime] NULL,
	[email] [varchar](64) NOT NULL,
	[status] [bit] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Action] ON 

INSERT [dbo].[Action] ([id], [name]) VALUES (1, N'View')
INSERT [dbo].[Action] ([id], [name]) VALUES (2, N'Create')
INSERT [dbo].[Action] ([id], [name]) VALUES (3, N'Update')
INSERT [dbo].[Action] ([id], [name]) VALUES (4, N'Delete')
SET IDENTITY_INSERT [dbo].[Action] OFF
GO
SET IDENTITY_INSERT [dbo].[Albums] ON 

INSERT [dbo].[Albums] ([id], [name], [author], [category_ID], [duration], [image], [path], [t_create], [t_lastUpdate]) VALUES (1, N'Đế vương', N'Đình Dũng', 1, N'04:22', N'./img/song-img/vpop/de-vuong.jpg', N'./song-mp3/vpop/de-vuong.mp3', CAST(N'2022-02-22T13:25:00' AS SmallDateTime), CAST(N'2022-03-21T10:10:00' AS SmallDateTime))
INSERT [dbo].[Albums] ([id], [name], [author], [category_ID], [duration], [image], [path], [t_create], [t_lastUpdate]) VALUES (2, N'#Catena ', N'Tóc Tiên, Tourliver', 1, N'04:29', N'./img/song-img/vpop/catena.jpg', N'./song-mp3/vpop/catena.mp3', CAST(N'2022-02-22T13:25:00' AS SmallDateTime), CAST(N'2022-03-14T15:27:00' AS SmallDateTime))
INSERT [dbo].[Albums] ([id], [name], [author], [category_ID], [duration], [image], [path], [t_create], [t_lastUpdate]) VALUES (3, N'Anh ơi ở lại ', N'ChiPu', 1, N'05:41', N'./img/song-img/vpop/anh-oi-o-lai.jpg', N'./song-mp3/vpop/anh-oi-o-lai.mp3', CAST(N'2022-02-22T13:25:00' AS SmallDateTime), CAST(N'2022-03-14T15:34:00' AS SmallDateTime))
INSERT [dbo].[Albums] ([id], [name], [author], [category_ID], [duration], [image], [path], [t_create], [t_lastUpdate]) VALUES (4, N'Ái nộ', N'Masew, Khôi Vũ', 1, N'03:20', N'./img/song-img/vpop/ai-no.jpg', N'./song-mp3/vpop/ai-no.mp3', CAST(N'2022-02-22T13:25:00' AS SmallDateTime), CAST(N'2022-03-11T13:50:00' AS SmallDateTime))
INSERT [dbo].[Albums] ([id], [name], [author], [category_ID], [duration], [image], [path], [t_create], [t_lastUpdate]) VALUES (5, N'Thê lương ', N'Phúc Chinh', 1, N'05:13', N'./img/song-img/vpop/the-luong.jpg', N'./song-mp3/vpop/the-luong.mp3', CAST(N'2022-02-22T13:25:00' AS SmallDateTime), CAST(N'2022-03-14T15:32:00' AS SmallDateTime))
INSERT [dbo].[Albums] ([id], [name], [author], [category_ID], [duration], [image], [path], [t_create], [t_lastUpdate]) VALUES (6, N'SG đau lòng quá', N'Hứa Kim Tuyền, Hoàng Duyên', 1, N'05:08', N'./img/song-img/vpop/sg-dau-long-qua.jpg', N'./song-mp3/vpop/sg-dau-long-qua.mp3', CAST(N'2022-02-22T13:25:00' AS SmallDateTime), CAST(N'2022-03-14T00:07:00' AS SmallDateTime))
INSERT [dbo].[Albums] ([id], [name], [author], [category_ID], [duration], [image], [path], [t_create], [t_lastUpdate]) VALUES (7, N'Cưới thôi ?', N'Masiu, Masew', 1, N'03:01', N'./img/song-img/vpop/cuoi-thoi.jpg', N'./song-mp3/vpop/cuoi-thoi.mp3', CAST(N'2022-02-22T13:25:00' AS SmallDateTime), CAST(N'2022-03-14T15:35:00' AS SmallDateTime))
INSERT [dbo].[Albums] ([id], [name], [author], [category_ID], [duration], [image], [path], [t_create], [t_lastUpdate]) VALUES (8, N'Thức giấc', N'DaLAB', 1, N'04:29', N'./img/song-img/vpop/thuc-giac.jpg', N'./song-mp3/vpop/thuc-giac.mp3', CAST(N'2022-02-22T13:25:00' AS SmallDateTime), CAST(N'2022-03-11T13:50:00' AS SmallDateTime))
INSERT [dbo].[Albums] ([id], [name], [author], [category_ID], [duration], [image], [path], [t_create], [t_lastUpdate]) VALUES (9, N'Đi về nhà', N'Đen, Justa Tee', 1, N'03:25', N'./img/song-img/vpop/di-ve-nha.jpg', N'./song-mp3/vpop/di-ve-nha.mp3', CAST(N'2022-02-22T13:25:00' AS SmallDateTime), CAST(N'2022-03-14T09:25:00' AS SmallDateTime))
INSERT [dbo].[Albums] ([id], [name], [author], [category_ID], [duration], [image], [path], [t_create], [t_lastUpdate]) VALUES (10, N'Gieo quẻ', N'Đen, Hoàng Thùy Linh', 1, N'04:19', N'./img/song-img/vpop/gieo-que.jpg', N'./song-mp3/vpop/gieo-que.mp3', CAST(N'2022-02-22T13:25:00' AS SmallDateTime), CAST(N'2022-03-11T13:50:00' AS SmallDateTime))
INSERT [dbo].[Albums] ([id], [name], [author], [category_ID], [duration], [image], [path], [t_create], [t_lastUpdate]) VALUES (11, N'Mang tiền về cho mẹ', N'Đen', 1, N'06:41', N'./img/song-img/vpop/mang-tien-ve-cho-me.jpg', N'./song-mp3/vpop/mang-tien-ve-cho-me.mp3', CAST(N'2022-02-22T13:25:00' AS SmallDateTime), CAST(N'2022-03-11T13:50:00' AS SmallDateTime))
INSERT [dbo].[Albums] ([id], [name], [author], [category_ID], [duration], [image], [path], [t_create], [t_lastUpdate]) VALUES (12, N'Rap chậm thôi', N'RPT MCK, RPT Jinn, RZ Ma$', 1, N'04:09', N'./img/song-img/vpop/rap-cham-thoi.jpg', N'./song-mp3/vpop/rap-cham-thoi.mp3', CAST(N'2022-02-22T13:25:00' AS SmallDateTime), CAST(N'2022-03-11T13:50:00' AS SmallDateTime))
INSERT [dbo].[Albums] ([id], [name], [author], [category_ID], [duration], [image], [path], [t_create], [t_lastUpdate]) VALUES (13, N'Thủ đô Cypher', N'RPT MCK, Low G,...', 1, N'02:54', N'./img/song-img/vpop/thu-do-cypher.jpg', N'./song-mp3/vpop/thu-do-cypher.mp3', CAST(N'2022-02-22T13:25:00' AS SmallDateTime), CAST(N'2022-03-11T13:50:00' AS SmallDateTime))
INSERT [dbo].[Albums] ([id], [name], [author], [category_ID], [duration], [image], [path], [t_create], [t_lastUpdate]) VALUES (14, N'Tháng năm', N'SooBin', 1, N'03:56', N'./img/song-img/vpop/thang-nam.jpg', N'./song-mp3/vpop/thang-nam.mp3', CAST(N'2022-02-22T13:25:00' AS SmallDateTime), CAST(N'2022-03-11T13:50:00' AS SmallDateTime))
INSERT [dbo].[Albums] ([id], [name], [author], [category_ID], [duration], [image], [path], [t_create], [t_lastUpdate]) VALUES (15, N'Chiều hôm ấy', N'JayKii', 1, N'05:17', N'./img/song-img/vpop/chieu-hom-ay.jpg', N'./song-mp3/vpop/chieu-hom-ay.mp3', CAST(N'2022-02-22T13:25:00' AS SmallDateTime), CAST(N'2022-03-14T09:44:00' AS SmallDateTime))
INSERT [dbo].[Albums] ([id], [name], [author], [category_ID], [duration], [image], [path], [t_create], [t_lastUpdate]) VALUES (16, N'Nàng thơ', N'Hoàng Dũng', 1, N'05:21', N'./img/song-img/vpop/nang-tho.jpg', N'./song-mp3/vpop/nang-tho.mp3', CAST(N'2022-02-22T13:25:00' AS SmallDateTime), CAST(N'2022-03-21T10:18:00' AS SmallDateTime))
INSERT [dbo].[Albums] ([id], [name], [author], [category_ID], [duration], [image], [path], [t_create], [t_lastUpdate]) VALUES (17, N'Dân chơi xóm', N'RPT MCK, Justa Tee', 1, N'03:30', N'./img/song-img/vpop/dan-choi-xom.jpg', N'./song-mp3/vpop/dan-choi-xom.mp3', CAST(N'2022-02-22T13:25:00' AS SmallDateTime), CAST(N'2022-03-11T13:50:00' AS SmallDateTime))
INSERT [dbo].[Albums] ([id], [name], [author], [category_ID], [duration], [image], [path], [t_create], [t_lastUpdate]) VALUES (18, N'Memories', N'Maroon 5', 2, N'03:15', N'./img/song-img/us-uk/memories.jpg', N'./song-mp3/us-uk/memories.mp3', CAST(N'2022-02-22T13:25:00' AS SmallDateTime), CAST(N'2022-03-14T21:48:00' AS SmallDateTime))
INSERT [dbo].[Albums] ([id], [name], [author], [category_ID], [duration], [image], [path], [t_create], [t_lastUpdate]) VALUES (19, N'On my way', N'Alan Walker, Sabrina,..', 2, N'03:36', N'./img/song-img/us-uk/on-my-way.jpg', N'./song-mp3/us-uk/on-my-way.mp3', CAST(N'2022-02-22T13:25:00' AS SmallDateTime), CAST(N'2022-03-11T13:50:00' AS SmallDateTime))
INSERT [dbo].[Albums] ([id], [name], [author], [category_ID], [duration], [image], [path], [t_create], [t_lastUpdate]) VALUES (20, N'Señorita', N'Shawn Mendes, Camila,..', 2, N'03:25', N'./img/song-img/us-uk/senorita.jpg', N'./song-mp3/us-uk/senorita.mp3', CAST(N'2022-02-22T13:25:00' AS SmallDateTime), CAST(N'2022-03-11T13:50:00' AS SmallDateTime))
INSERT [dbo].[Albums] ([id], [name], [author], [category_ID], [duration], [image], [path], [t_create], [t_lastUpdate]) VALUES (21, N'Im Not Her', N'Clara Mae', 2, N'03:12', N'./img/song-img/us-uk/im-not-her.jpg', N'./song-mp3/us-uk/im-not-her.mp3', CAST(N'2022-02-22T13:25:00' AS SmallDateTime), CAST(N'2022-03-11T13:50:00' AS SmallDateTime))
INSERT [dbo].[Albums] ([id], [name], [author], [category_ID], [duration], [image], [path], [t_create], [t_lastUpdate]) VALUES (22, N'Someone You Loved ', N'Lewis Capaldi', 2, N'03:01', N'./img/song-img/us-uk/someone-you-loved.jpg', N'./song-mp3/us-uk/someone-you-loved.mp3', CAST(N'2022-02-22T13:25:00' AS SmallDateTime), CAST(N'2022-03-17T23:37:00' AS SmallDateTime))
INSERT [dbo].[Albums] ([id], [name], [author], [category_ID], [duration], [image], [path], [t_create], [t_lastUpdate]) VALUES (23, N'Dont Wanna Know', N'Maroon 5', 2, N'06:18', N'./img/song-img/us-uk/dont-wanna-know.jpg', N'./song-mp3/us-uk/dont-wanna-know.mp3', CAST(N'2022-02-22T13:25:00' AS SmallDateTime), CAST(N'2022-03-11T13:50:00' AS SmallDateTime))
INSERT [dbo].[Albums] ([id], [name], [author], [category_ID], [duration], [image], [path], [t_create], [t_lastUpdate]) VALUES (24, N'Blinding Lights', N'The Weeknd', 2, N'03:23', N'./img/song-img/us-uk/blinding-lights.jpg', N'./song-mp3/us-uk/blinding-lights.mp3', CAST(N'2022-02-22T13:25:00' AS SmallDateTime), CAST(N'2022-03-11T13:50:00' AS SmallDateTime))
INSERT [dbo].[Albums] ([id], [name], [author], [category_ID], [duration], [image], [path], [t_create], [t_lastUpdate]) VALUES (25, N'Dusk Till Dawn', N'ZAYN  Sia', 2, N'03:55', N'./img/song-img/us-uk/dusk-till-dawn.jpg', N'./song-mp3/us-uk/dusk-till-dawn.mp3', CAST(N'2022-02-22T13:25:00' AS SmallDateTime), CAST(N'2022-03-11T13:50:00' AS SmallDateTime))
INSERT [dbo].[Albums] ([id], [name], [author], [category_ID], [duration], [image], [path], [t_create], [t_lastUpdate]) VALUES (26, N'Cheap Thrills', N'Sia', 2, N'04:05', N'./img/song-img/us-uk/cheap-thrills.jpg', N'./song-mp3/us-uk/cheap-thrills.mp3', CAST(N'2022-02-22T13:25:00' AS SmallDateTime), CAST(N'2022-03-11T13:50:00' AS SmallDateTime))
INSERT [dbo].[Albums] ([id], [name], [author], [category_ID], [duration], [image], [path], [t_create], [t_lastUpdate]) VALUES (27, N'Treat You Better', N'Shawn Mendes', 2, N'04:16', N'./img/song-img/us-uk/treat-you-better.jpg', N'./song-mp3/us-uk/treat-you-better.mp3', CAST(N'2022-02-22T13:25:00' AS SmallDateTime), CAST(N'2022-03-11T13:50:00' AS SmallDateTime))
INSERT [dbo].[Albums] ([id], [name], [author], [category_ID], [duration], [image], [path], [t_create], [t_lastUpdate]) VALUES (28, N'Shape of You', N'Ed Sheeran', 2, N'04:23', N'./img/song-img/us-uk/shape-of-you.jpg', N'./song-mp3/us-uk/shape-of-you.mp3', CAST(N'2022-02-22T13:25:00' AS SmallDateTime), CAST(N'2022-03-11T13:50:00' AS SmallDateTime))
INSERT [dbo].[Albums] ([id], [name], [author], [category_ID], [duration], [image], [path], [t_create], [t_lastUpdate]) VALUES (29, N'Hello', N'Adele', 2, N'06:06', N'./img/song-img/us-uk/hello.jpg', N'./song-mp3/us-uk/hello.mp3', CAST(N'2022-02-22T13:25:00' AS SmallDateTime), CAST(N'2022-03-11T13:50:00' AS SmallDateTime))
INSERT [dbo].[Albums] ([id], [name], [author], [category_ID], [duration], [image], [path], [t_create], [t_lastUpdate]) VALUES (30, N'Yummy', N'Justin Bieber', 2, N'03:50', N'./img/song-img/us-uk/yummy.jpg', N'./song-mp3/us-uk/yummy.mp3', CAST(N'2022-02-22T13:25:00' AS SmallDateTime), CAST(N'2022-03-11T13:50:00' AS SmallDateTime))
INSERT [dbo].[Albums] ([id], [name], [author], [category_ID], [duration], [image], [path], [t_create], [t_lastUpdate]) VALUES (31, N'Send My Love', N'Adele', 2, N'02:22', N'./img/song-img/us-uk/send-my-love.jpg', N'./song-mp3/us-uk/send-my-love.mp3', CAST(N'2022-02-22T13:25:00' AS SmallDateTime), CAST(N'2022-03-11T13:50:00' AS SmallDateTime))
INSERT [dbo].[Albums] ([id], [name], [author], [category_ID], [duration], [image], [path], [t_create], [t_lastUpdate]) VALUES (32, N'FRIENDS', N'Marshmello, AnneMarie', 2, N'03:51', N'./img/song-img/us-uk/friends.jpg', N'./song-mp3/us-uk/friends.mp3', CAST(N'2022-02-22T13:25:00' AS SmallDateTime), CAST(N'2022-03-11T13:50:00' AS SmallDateTime))
INSERT [dbo].[Albums] ([id], [name], [author], [category_ID], [duration], [image], [path], [t_create], [t_lastUpdate]) VALUES (33, N'Nothin On You', N'BoB, Bruno Mars', 3, N'03:50', N'./img/song-img/lofi/nothin-on-you.jpg', N'./song-mp3/lofi/nothin-on-you.mp3', CAST(N'2022-02-22T13:25:00' AS SmallDateTime), CAST(N'2022-03-13T23:23:00' AS SmallDateTime))
INSERT [dbo].[Albums] ([id], [name], [author], [category_ID], [duration], [image], [path], [t_create], [t_lastUpdate]) VALUES (34, N'Lemon Tree ', N'Fools Garden', 3, N'03:44', N'./img/song-img/lofi/lemon-tree.jpg', N'./song-mp3/lofi/lemon-tree.mp3', CAST(N'2022-02-22T13:25:00' AS SmallDateTime), CAST(N'2022-03-14T00:17:00' AS SmallDateTime))
INSERT [dbo].[Albums] ([id], [name], [author], [category_ID], [duration], [image], [path], [t_create], [t_lastUpdate]) VALUES (35, N'At My Worst', N'Pink Sweat', 3, N'03:05', N'./img/song-img/lofi/at-my-worst.jpg', N'./song-mp3/lofi/at-my-worst.mp3', CAST(N'2022-02-22T13:25:00' AS SmallDateTime), CAST(N'2022-03-11T13:50:00' AS SmallDateTime))
INSERT [dbo].[Albums] ([id], [name], [author], [category_ID], [duration], [image], [path], [t_create], [t_lastUpdate]) VALUES (36, N'Mood', N'24kGoldn', 3, N'02:30', N'./img/song-img/lofi/mood.jpg', N'./song-mp3/lofi/mood.mp3', CAST(N'2022-02-22T13:25:00' AS SmallDateTime), CAST(N'2022-03-11T13:50:00' AS SmallDateTime))
INSERT [dbo].[Albums] ([id], [name], [author], [category_ID], [duration], [image], [path], [t_create], [t_lastUpdate]) VALUES (37, N'SugarCrash', N'ElyOtto', 3, N'01:20', N'./img/song-img/lofi/sugarcrash.jpg', N'./song-mp3/lofi/sugarcrash.mp3', CAST(N'2022-02-22T13:25:00' AS SmallDateTime), CAST(N'2022-03-11T13:50:00' AS SmallDateTime))
INSERT [dbo].[Albums] ([id], [name], [author], [category_ID], [duration], [image], [path], [t_create], [t_lastUpdate]) VALUES (38, N'Positions', N'Ariana Grande', 3, N'02:57', N'./img/song-img/lofi/positions.jpg', N'./song-mp3/lofi/positions.mp3', CAST(N'2022-02-22T13:25:00' AS SmallDateTime), CAST(N'2022-03-11T13:50:00' AS SmallDateTime))
INSERT [dbo].[Albums] ([id], [name], [author], [category_ID], [duration], [image], [path], [t_create], [t_lastUpdate]) VALUES (39, N'I Love You Baby', N'Frank Sinatra', 3, N'03:56', N'./img/song-img/lofi/i-love-you-baby.jpg', N'./song-mp3/lofi/i-love-you-baby.mp3', CAST(N'2022-02-22T13:25:00' AS SmallDateTime), CAST(N'2022-03-11T13:50:00' AS SmallDateTime))
INSERT [dbo].[Albums] ([id], [name], [author], [category_ID], [duration], [image], [path], [t_create], [t_lastUpdate]) VALUES (40, N'What A Wonderful World', N'Louis Armstrong', 3, N'02:17', N'./img/song-img/lofi/what-a-wonderful-world.jpg', N'./song-mp3/lofi/what-a-wonderful-world.mp3', CAST(N'2022-02-22T13:25:00' AS SmallDateTime), CAST(N'2022-03-11T13:50:00' AS SmallDateTime))
INSERT [dbo].[Albums] ([id], [name], [author], [category_ID], [duration], [image], [path], [t_create], [t_lastUpdate]) VALUES (41, N'I Want To Hold Your', N'The Beatles', 3, N'02:36', N'./img/song-img/lofi/i-want-to-hold-your.jpg', N'./song-mp3/lofi/i-want-to-hold-your.mp3', CAST(N'2022-02-22T13:25:00' AS SmallDateTime), CAST(N'2022-03-11T13:50:00' AS SmallDateTime))
INSERT [dbo].[Albums] ([id], [name], [author], [category_ID], [duration], [image], [path], [t_create], [t_lastUpdate]) VALUES (42, N'Death Bed Coffee', N'Powfu', 3, N'02:53', N'./img/song-img/lofi/death-bed-coffee.jpg', N'./song-mp3/lofi/death-bed-coffee.mp3', CAST(N'2022-02-22T13:25:00' AS SmallDateTime), CAST(N'2022-03-11T13:50:00' AS SmallDateTime))
INSERT [dbo].[Albums] ([id], [name], [author], [category_ID], [duration], [image], [path], [t_create], [t_lastUpdate]) VALUES (43, N'Cant Help Falling In Love ', N'Elvis Presley', 3, N'03:00', N'./img/song-img/lofi/cant-help-falling-in-love.jpg', N'./song-mp3/lofi/cant-help-falling-in-love.mp3', CAST(N'2022-02-22T13:25:00' AS SmallDateTime), CAST(N'2022-03-14T00:22:00' AS SmallDateTime))
INSERT [dbo].[Albums] ([id], [name], [author], [category_ID], [duration], [image], [path], [t_create], [t_lastUpdate]) VALUES (44, N'Crystal Dolphin', N'Engelwood', 3, N'01:53', N'./img/song-img/lofi/crystal-dolphin.jpg', N'./song-mp3/lofi/crystal-dolphin.mp3', CAST(N'2022-02-22T13:25:00' AS SmallDateTime), CAST(N'2022-03-11T13:50:00' AS SmallDateTime))
INSERT [dbo].[Albums] ([id], [name], [author], [category_ID], [duration], [image], [path], [t_create], [t_lastUpdate]) VALUES (45, N'Someone You Loved', N'Lewis Capaldi', 3, N'03:01', N'./img/song-img/lofi/someone-you-loved.jpg', N'./song-mp3/lofi/someone-you-loved.mp3', CAST(N'2022-02-22T13:25:00' AS SmallDateTime), CAST(N'2022-03-11T13:50:00' AS SmallDateTime))
INSERT [dbo].[Albums] ([id], [name], [author], [category_ID], [duration], [image], [path], [t_create], [t_lastUpdate]) VALUES (46, N'Let Me Down Slowly', N'Alec Benjamin', 3, N'02:57', N'./img/song-img/lofi/let-me-down-slowly.jpg', N'./song-mp3/lofi/let-me-down-slowly.mp3', CAST(N'2022-02-22T13:25:00' AS SmallDateTime), CAST(N'2022-03-11T13:50:00' AS SmallDateTime))
INSERT [dbo].[Albums] ([id], [name], [author], [category_ID], [duration], [image], [path], [t_create], [t_lastUpdate]) VALUES (47, N'Star Shopping', N'Lil Peep, Kryptik', 3, N'02:22', N'./img/song-img/lofi/star-shopping.jpg', N'./song-mp3/lofi/star-shopping.mp3', CAST(N'2022-02-22T13:25:00' AS SmallDateTime), CAST(N'2022-03-11T13:50:00' AS SmallDateTime))
INSERT [dbo].[Albums] ([id], [name], [author], [category_ID], [duration], [image], [path], [t_create], [t_lastUpdate]) VALUES (48, N'Be Like That', N'Kane Brown, Swae Lee', 3, N'03:11', N'./img/song-img/lofi/be-like-that.jpg', N'./song-mp3/lofi/be-like-that.mp3', CAST(N'2022-02-22T13:25:00' AS SmallDateTime), CAST(N'2022-03-11T13:50:00' AS SmallDateTime))
INSERT [dbo].[Albums] ([id], [name], [author], [category_ID], [duration], [image], [path], [t_create], [t_lastUpdate]) VALUES (49, N'Runaway', N'AURORA', 3, N'04:08', N'./img/song-img/lofi/runaway.jpg', N'./song-mp3/lofi/runaway.mp3', CAST(N'2022-02-22T13:25:00' AS SmallDateTime), CAST(N'2022-03-11T13:50:00' AS SmallDateTime))
INSERT [dbo].[Albums] ([id], [name], [author], [category_ID], [duration], [image], [path], [t_create], [t_lastUpdate]) VALUES (50, N'OK', N'BINZ', 1, N'02:34', N'./img/song-img/vpop/ok.jpg', N'./song-mp3/vpop/ok.mp3', CAST(N'2016-10-07T13:25:00' AS SmallDateTime), CAST(N'2022-03-11T13:50:00' AS SmallDateTime))
INSERT [dbo].[Albums] ([id], [name], [author], [category_ID], [duration], [image], [path], [t_create], [t_lastUpdate]) VALUES (51, N'Bài Này Chill Phết', N'Đen, MIN', 1, N'04:33', N'./img/song-img/vpop/bai-nay-child-phet.jpg', N'./song-mp3/vpop/bai-nay-child-phet.mp3', CAST(N'2018-10-25T13:25:00' AS SmallDateTime), CAST(N'2022-03-11T13:50:00' AS SmallDateTime))
INSERT [dbo].[Albums] ([id], [name], [author], [category_ID], [duration], [image], [path], [t_create], [t_lastUpdate]) VALUES (52, N'Perfect', N'Ed Sheeran', 2, N'04:39', N'./img/song-img/us-uk/perfect.jpg', N'./song-mp3/us-uk/perfect.mp3', CAST(N'2016-08-18T13:25:00' AS SmallDateTime), CAST(N'2022-03-11T13:50:00' AS SmallDateTime))
INSERT [dbo].[Albums] ([id], [name], [author], [category_ID], [duration], [image], [path], [t_create], [t_lastUpdate]) VALUES (53, N'Legends Never Die', N'Against The Current', 2, N'02:59', N'./img/song-img/us-uk/legends-never-die.jpg', N'./song-mp3/us-uk/legends-never-die.mp3', CAST(N'2017-09-09T13:25:00' AS SmallDateTime), CAST(N'2022-03-11T13:50:00' AS SmallDateTime))
INSERT [dbo].[Albums] ([id], [name], [author], [category_ID], [duration], [image], [path], [t_create], [t_lastUpdate]) VALUES (54, N'The Girl Ive Never Met', N'Gustixa', 3, N'04:33', N'./img/song-img/lofi/the-girl-ive-never-met.jpg', N'./song-mp3/lofi/the-girl-ive-never-met.mp3', CAST(N'2019-06-20T13:25:00' AS SmallDateTime), CAST(N'2022-03-11T13:50:00' AS SmallDateTime))
INSERT [dbo].[Albums] ([id], [name], [author], [category_ID], [duration], [image], [path], [t_create], [t_lastUpdate]) VALUES (55, N'Surrender', N'Natalie Taylor', 3, N'03:39', N'./img/song-img/lofi/surrender.jpg', N'./song-mp3/lofi/surrender.mp3', CAST(N'2019-10-19T13:25:00' AS SmallDateTime), CAST(N'2022-03-11T13:50:00' AS SmallDateTime))
SET IDENTITY_INSERT [dbo].[Albums] OFF
GO
SET IDENTITY_INSERT [dbo].[Background] ON 

INSERT [dbo].[Background] ([id], [name], [path]) VALUES (1, N'Bg-1', N'./img/bg-gif/gif-1.gif')
INSERT [dbo].[Background] ([id], [name], [path]) VALUES (2, N'Bg-2', N'./img/bg-gif/gif-2.gif')
INSERT [dbo].[Background] ([id], [name], [path]) VALUES (3, N'Bg-3', N'./img/bg-gif/gif-3.gif')
INSERT [dbo].[Background] ([id], [name], [path]) VALUES (4, N'Bg-4', N'./img/bg-gif/gif-4.gif')
INSERT [dbo].[Background] ([id], [name], [path]) VALUES (5, N'Bg-5', N'./img/bg-gif/gif-5.gif')
INSERT [dbo].[Background] ([id], [name], [path]) VALUES (6, N'Bg-6', N'./img/bg-gif/gif-6.gif')
INSERT [dbo].[Background] ([id], [name], [path]) VALUES (7, N'Bg-7', N'./img/bg-gif/gif-7.gif')
INSERT [dbo].[Background] ([id], [name], [path]) VALUES (8, N'Bg-8', N'./img/bg-gif/gif-8.gif')
INSERT [dbo].[Background] ([id], [name], [path]) VALUES (9, N'Bg-9', N'./img/bg-gif/gif-9.gif')
INSERT [dbo].[Background] ([id], [name], [path]) VALUES (10, N'Bg-10', N'./img/bg-gif/gif-10.gif')
INSERT [dbo].[Background] ([id], [name], [path]) VALUES (11, N'Bg-11', N'./img/bg-gif/gif-11.gif')
INSERT [dbo].[Background] ([id], [name], [path]) VALUES (12, N'Bg-12', N'./img/bg-gif/gif-12.gif')
INSERT [dbo].[Background] ([id], [name], [path]) VALUES (13, N'Bg-13', N'./img/bg-gif/gif-13.gif')
INSERT [dbo].[Background] ([id], [name], [path]) VALUES (14, N'Bg-14', N'./img/bg-gif/gif-14.gif')
INSERT [dbo].[Background] ([id], [name], [path]) VALUES (15, N'Bg-15', N'./img/bg-gif/gif-15.gif')
INSERT [dbo].[Background] ([id], [name], [path]) VALUES (16, N'Bg-16', N'./img/bg-gif/gif-16.gif')
INSERT [dbo].[Background] ([id], [name], [path]) VALUES (17, N'Bg-17', N'./img/bg-gif/gif-17.gif')
INSERT [dbo].[Background] ([id], [name], [path]) VALUES (18, N'Bg-18', N'./img/bg-gif/gif-18.gif')
INSERT [dbo].[Background] ([id], [name], [path]) VALUES (19, N'Bg-19', N'./img/bg-gif/gif-19.gif')
INSERT [dbo].[Background] ([id], [name], [path]) VALUES (20, N'Bg-20', N'./img/bg-gif/gif-20.gif')
INSERT [dbo].[Background] ([id], [name], [path]) VALUES (21, N'Bg-21', N'./img/bg-gif/gif-21.gif')
INSERT [dbo].[Background] ([id], [name], [path]) VALUES (22, N'Bg-22', N'./img/bg-gif/gif-22.gif')
INSERT [dbo].[Background] ([id], [name], [path]) VALUES (23, N'Bg-23', N'./img/bg-gif/gif-23.gif')
INSERT [dbo].[Background] ([id], [name], [path]) VALUES (24, N'Bg-24', N'./img/bg-gif/gif-24.gif')
INSERT [dbo].[Background] ([id], [name], [path]) VALUES (25, N'Bg-25', N'./img/bg-gif/gif-25.gif')
INSERT [dbo].[Background] ([id], [name], [path]) VALUES (26, N'Bg-26', N'./img/bg-gif/gif-26.gif')
INSERT [dbo].[Background] ([id], [name], [path]) VALUES (27, N'Bg-27', N'./img/bg-gif/gif-27.gif')
INSERT [dbo].[Background] ([id], [name], [path]) VALUES (28, N'Bg-28', N'./img/bg-gif/gif-28.gif')
INSERT [dbo].[Background] ([id], [name], [path]) VALUES (29, N'Bg-29', N'./img/bg-gif/gif-29.gif')
INSERT [dbo].[Background] ([id], [name], [path]) VALUES (30, N'Bg-30', N'./img/bg-gif/gif-30.gif')
INSERT [dbo].[Background] ([id], [name], [path]) VALUES (31, N'Bg-31', N'./img/bg-gif/gif-31.gif')
INSERT [dbo].[Background] ([id], [name], [path]) VALUES (32, N'Bg-32', N'./img/bg-gif/gif-32.gif')
INSERT [dbo].[Background] ([id], [name], [path]) VALUES (33, N'Bg-33', N'./img/bg-gif/gif-33.gif')
INSERT [dbo].[Background] ([id], [name], [path]) VALUES (34, N'Bg-34', N'./img/bg-gif/gif-34.gif')
INSERT [dbo].[Background] ([id], [name], [path]) VALUES (35, N'Bg-35', N'./img/bg-gif/gif-35.gif')
INSERT [dbo].[Background] ([id], [name], [path]) VALUES (36, N'Bg-36', N'./img/bg-gif/gif-36.gif')
INSERT [dbo].[Background] ([id], [name], [path]) VALUES (37, N'Bg-37', N'./img/bg-gif/gif-37.gif')
INSERT [dbo].[Background] ([id], [name], [path]) VALUES (38, N'Bg-38', N'./img/bg-gif/gif-38.gif')
INSERT [dbo].[Background] ([id], [name], [path]) VALUES (39, N'Bg-39', N'./img/bg-gif/gif-39.gif')
INSERT [dbo].[Background] ([id], [name], [path]) VALUES (40, N'Bg-40', N'./img/bg-gif/gif-40.gif')
SET IDENTITY_INSERT [dbo].[Background] OFF
GO
SET IDENTITY_INSERT [dbo].[Category] ON 

INSERT [dbo].[Category] ([id], [name]) VALUES (1, N'Vpop')
INSERT [dbo].[Category] ([id], [name]) VALUES (2, N'US-UK')
INSERT [dbo].[Category] ([id], [name]) VALUES (3, N'Lofi')
SET IDENTITY_INSERT [dbo].[Category] OFF
GO
SET IDENTITY_INSERT [dbo].[history_Album] ON 

INSERT [dbo].[history_Album] ([id], [user_ID], [user_name], [album_ID], [album_name], [t_lastUpdate], [action_ID]) VALUES (1, 3, N'admin_manager_1', -1, N'Nguyen Van A', CAST(N'2022-03-17T23:53:00' AS SmallDateTime), 2)
INSERT [dbo].[history_Album] ([id], [user_ID], [user_name], [album_ID], [album_name], [t_lastUpdate], [action_ID]) VALUES (2, 3, N'admin_manager_1', 68, N'Nguyen Van B', CAST(N'2022-03-17T23:54:00' AS SmallDateTime), 3)
INSERT [dbo].[history_Album] ([id], [user_ID], [user_name], [album_ID], [album_name], [t_lastUpdate], [action_ID]) VALUES (3, 3, N'admin_manager_1', 68, N'Nguyen Van B', CAST(N'2022-03-17T23:54:00' AS SmallDateTime), 4)
INSERT [dbo].[history_Album] ([id], [user_ID], [user_name], [album_ID], [album_name], [t_lastUpdate], [action_ID]) VALUES (4, 3, N'admin_manager_1', 1, N'Đế vương', CAST(N'2022-03-21T10:10:00' AS SmallDateTime), 3)
INSERT [dbo].[history_Album] ([id], [user_ID], [user_name], [album_ID], [album_name], [t_lastUpdate], [action_ID]) VALUES (5, 3, N'admin_manager_1', -1, N'Nguyen Van A', CAST(N'2022-03-21T10:11:00' AS SmallDateTime), 2)
INSERT [dbo].[history_Album] ([id], [user_ID], [user_name], [album_ID], [album_name], [t_lastUpdate], [action_ID]) VALUES (6, 3, N'admin_manager_1', -1, N'Nguyen Van A', CAST(N'2022-03-21T10:12:00' AS SmallDateTime), 2)
INSERT [dbo].[history_Album] ([id], [user_ID], [user_name], [album_ID], [album_name], [t_lastUpdate], [action_ID]) VALUES (7, 3, N'admin_manager_1', 16, N'Nàng thơ', CAST(N'2022-03-21T10:18:00' AS SmallDateTime), 3)
INSERT [dbo].[history_Album] ([id], [user_ID], [user_name], [album_ID], [album_name], [t_lastUpdate], [action_ID]) VALUES (8, 3, N'admin_manager_1', 69, N'Nguyen Van A', CAST(N'2022-03-21T10:18:00' AS SmallDateTime), 4)
SET IDENTITY_INSERT [dbo].[history_Album] OFF
GO
SET IDENTITY_INSERT [dbo].[liked] ON 

INSERT [dbo].[liked] ([id], [user_ID], [album_ID], [t_lastUpdate]) VALUES (1, 1, 1, CAST(N'2022-02-22T13:25:00' AS SmallDateTime))
INSERT [dbo].[liked] ([id], [user_ID], [album_ID], [t_lastUpdate]) VALUES (2, 1, 5, CAST(N'2022-03-14T22:25:00' AS SmallDateTime))
INSERT [dbo].[liked] ([id], [user_ID], [album_ID], [t_lastUpdate]) VALUES (3, 1, 3, CAST(N'2022-03-14T22:32:00' AS SmallDateTime))
INSERT [dbo].[liked] ([id], [user_ID], [album_ID], [t_lastUpdate]) VALUES (4, 1, 7, CAST(N'2022-03-14T22:33:00' AS SmallDateTime))
INSERT [dbo].[liked] ([id], [user_ID], [album_ID], [t_lastUpdate]) VALUES (5, 1, 2, CAST(N'2022-03-14T23:13:00' AS SmallDateTime))
INSERT [dbo].[liked] ([id], [user_ID], [album_ID], [t_lastUpdate]) VALUES (6, 1, 9, CAST(N'2022-03-14T23:14:00' AS SmallDateTime))
INSERT [dbo].[liked] ([id], [user_ID], [album_ID], [t_lastUpdate]) VALUES (7, 1, 11, CAST(N'2022-03-14T23:17:00' AS SmallDateTime))
INSERT [dbo].[liked] ([id], [user_ID], [album_ID], [t_lastUpdate]) VALUES (8, 5, 4, CAST(N'2022-03-14T23:24:00' AS SmallDateTime))
INSERT [dbo].[liked] ([id], [user_ID], [album_ID], [t_lastUpdate]) VALUES (12, 5, 22, CAST(N'2022-03-14T23:48:00' AS SmallDateTime))
INSERT [dbo].[liked] ([id], [user_ID], [album_ID], [t_lastUpdate]) VALUES (14, 5, 1, CAST(N'2022-03-15T00:43:00' AS SmallDateTime))
INSERT [dbo].[liked] ([id], [user_ID], [album_ID], [t_lastUpdate]) VALUES (15, 5, 2, CAST(N'2022-03-15T00:43:00' AS SmallDateTime))
INSERT [dbo].[liked] ([id], [user_ID], [album_ID], [t_lastUpdate]) VALUES (16, 5, 3, CAST(N'2022-03-15T00:43:00' AS SmallDateTime))
INSERT [dbo].[liked] ([id], [user_ID], [album_ID], [t_lastUpdate]) VALUES (17, 5, 5, CAST(N'2022-03-15T00:43:00' AS SmallDateTime))
INSERT [dbo].[liked] ([id], [user_ID], [album_ID], [t_lastUpdate]) VALUES (18, 5, 6, CAST(N'2022-03-15T00:43:00' AS SmallDateTime))
INSERT [dbo].[liked] ([id], [user_ID], [album_ID], [t_lastUpdate]) VALUES (19, 5, 7, CAST(N'2022-03-15T00:43:00' AS SmallDateTime))
INSERT [dbo].[liked] ([id], [user_ID], [album_ID], [t_lastUpdate]) VALUES (20, 5, 8, CAST(N'2022-03-15T00:43:00' AS SmallDateTime))
INSERT [dbo].[liked] ([id], [user_ID], [album_ID], [t_lastUpdate]) VALUES (21, 5, 9, CAST(N'2022-03-15T00:43:00' AS SmallDateTime))
INSERT [dbo].[liked] ([id], [user_ID], [album_ID], [t_lastUpdate]) VALUES (22, 5, 10, CAST(N'2022-03-15T00:43:00' AS SmallDateTime))
INSERT [dbo].[liked] ([id], [user_ID], [album_ID], [t_lastUpdate]) VALUES (23, 5, 11, CAST(N'2022-03-15T00:43:00' AS SmallDateTime))
INSERT [dbo].[liked] ([id], [user_ID], [album_ID], [t_lastUpdate]) VALUES (24, 5, 13, CAST(N'2022-03-15T00:43:00' AS SmallDateTime))
INSERT [dbo].[liked] ([id], [user_ID], [album_ID], [t_lastUpdate]) VALUES (25, 5, 12, CAST(N'2022-03-15T00:43:00' AS SmallDateTime))
INSERT [dbo].[liked] ([id], [user_ID], [album_ID], [t_lastUpdate]) VALUES (26, 5, 15, CAST(N'2022-03-15T00:43:00' AS SmallDateTime))
INSERT [dbo].[liked] ([id], [user_ID], [album_ID], [t_lastUpdate]) VALUES (27, 1, 18, CAST(N'2022-03-15T00:46:00' AS SmallDateTime))
INSERT [dbo].[liked] ([id], [user_ID], [album_ID], [t_lastUpdate]) VALUES (28, 1, 19, CAST(N'2022-03-15T00:46:00' AS SmallDateTime))
INSERT [dbo].[liked] ([id], [user_ID], [album_ID], [t_lastUpdate]) VALUES (29, 1, 20, CAST(N'2022-03-15T00:46:00' AS SmallDateTime))
INSERT [dbo].[liked] ([id], [user_ID], [album_ID], [t_lastUpdate]) VALUES (30, 1, 21, CAST(N'2022-03-15T00:46:00' AS SmallDateTime))
INSERT [dbo].[liked] ([id], [user_ID], [album_ID], [t_lastUpdate]) VALUES (31, 1, 24, CAST(N'2022-03-15T00:46:00' AS SmallDateTime))
INSERT [dbo].[liked] ([id], [user_ID], [album_ID], [t_lastUpdate]) VALUES (32, 1, 23, CAST(N'2022-03-15T00:46:00' AS SmallDateTime))
INSERT [dbo].[liked] ([id], [user_ID], [album_ID], [t_lastUpdate]) VALUES (33, 1, 27, CAST(N'2022-03-15T00:46:00' AS SmallDateTime))
INSERT [dbo].[liked] ([id], [user_ID], [album_ID], [t_lastUpdate]) VALUES (34, 1, 26, CAST(N'2022-03-15T00:46:00' AS SmallDateTime))
INSERT [dbo].[liked] ([id], [user_ID], [album_ID], [t_lastUpdate]) VALUES (35, 1, 25, CAST(N'2022-03-15T00:46:00' AS SmallDateTime))
INSERT [dbo].[liked] ([id], [user_ID], [album_ID], [t_lastUpdate]) VALUES (36, 1, 28, CAST(N'2022-03-15T00:46:00' AS SmallDateTime))
INSERT [dbo].[liked] ([id], [user_ID], [album_ID], [t_lastUpdate]) VALUES (37, 1, 30, CAST(N'2022-03-15T00:46:00' AS SmallDateTime))
INSERT [dbo].[liked] ([id], [user_ID], [album_ID], [t_lastUpdate]) VALUES (38, 1, 32, CAST(N'2022-03-15T00:47:00' AS SmallDateTime))
INSERT [dbo].[liked] ([id], [user_ID], [album_ID], [t_lastUpdate]) VALUES (39, 1, 53, CAST(N'2022-03-15T00:47:00' AS SmallDateTime))
INSERT [dbo].[liked] ([id], [user_ID], [album_ID], [t_lastUpdate]) VALUES (40, 1, 33, CAST(N'2022-03-15T00:47:00' AS SmallDateTime))
INSERT [dbo].[liked] ([id], [user_ID], [album_ID], [t_lastUpdate]) VALUES (41, 1, 34, CAST(N'2022-03-15T00:47:00' AS SmallDateTime))
INSERT [dbo].[liked] ([id], [user_ID], [album_ID], [t_lastUpdate]) VALUES (42, 1, 36, CAST(N'2022-03-15T00:47:00' AS SmallDateTime))
INSERT [dbo].[liked] ([id], [user_ID], [album_ID], [t_lastUpdate]) VALUES (43, 1, 38, CAST(N'2022-03-15T00:47:00' AS SmallDateTime))
INSERT [dbo].[liked] ([id], [user_ID], [album_ID], [t_lastUpdate]) VALUES (44, 1, 39, CAST(N'2022-03-15T00:47:00' AS SmallDateTime))
INSERT [dbo].[liked] ([id], [user_ID], [album_ID], [t_lastUpdate]) VALUES (45, 1, 40, CAST(N'2022-03-15T00:47:00' AS SmallDateTime))
INSERT [dbo].[liked] ([id], [user_ID], [album_ID], [t_lastUpdate]) VALUES (46, 1, 43, CAST(N'2022-03-15T00:47:00' AS SmallDateTime))
INSERT [dbo].[liked] ([id], [user_ID], [album_ID], [t_lastUpdate]) VALUES (47, 1, 44, CAST(N'2022-03-15T00:47:00' AS SmallDateTime))
INSERT [dbo].[liked] ([id], [user_ID], [album_ID], [t_lastUpdate]) VALUES (48, 1, 46, CAST(N'2022-03-15T00:47:00' AS SmallDateTime))
INSERT [dbo].[liked] ([id], [user_ID], [album_ID], [t_lastUpdate]) VALUES (50, 4, 21, CAST(N'2022-03-15T14:30:00' AS SmallDateTime))
INSERT [dbo].[liked] ([id], [user_ID], [album_ID], [t_lastUpdate]) VALUES (51, 4, 18, CAST(N'2022-03-15T14:30:00' AS SmallDateTime))
INSERT [dbo].[liked] ([id], [user_ID], [album_ID], [t_lastUpdate]) VALUES (52, 4, 26, CAST(N'2022-03-15T14:30:00' AS SmallDateTime))
INSERT [dbo].[liked] ([id], [user_ID], [album_ID], [t_lastUpdate]) VALUES (53, 4, 24, CAST(N'2022-03-15T14:30:00' AS SmallDateTime))
INSERT [dbo].[liked] ([id], [user_ID], [album_ID], [t_lastUpdate]) VALUES (54, 4, 28, CAST(N'2022-03-15T14:30:00' AS SmallDateTime))
INSERT [dbo].[liked] ([id], [user_ID], [album_ID], [t_lastUpdate]) VALUES (55, 4, 30, CAST(N'2022-03-15T14:30:00' AS SmallDateTime))
INSERT [dbo].[liked] ([id], [user_ID], [album_ID], [t_lastUpdate]) VALUES (58, 1, 4, CAST(N'2022-03-20T23:19:00' AS SmallDateTime))
INSERT [dbo].[liked] ([id], [user_ID], [album_ID], [t_lastUpdate]) VALUES (59, 6, 4, CAST(N'2022-03-20T23:26:00' AS SmallDateTime))
INSERT [dbo].[liked] ([id], [user_ID], [album_ID], [t_lastUpdate]) VALUES (60, 6, 6, CAST(N'2022-03-20T23:27:00' AS SmallDateTime))
SET IDENTITY_INSERT [dbo].[liked] OFF
GO
SET IDENTITY_INSERT [dbo].[Message] ON 

INSERT [dbo].[Message] ([id], [name], [describe]) VALUES (1, N'login_1', N'Login successfull!')
INSERT [dbo].[Message] ([id], [name], [describe]) VALUES (2, N'login_2', N'Username or password is invalid!')
INSERT [dbo].[Message] ([id], [name], [describe]) VALUES (3, N'update_user_1', N'Update successfull!')
INSERT [dbo].[Message] ([id], [name], [describe]) VALUES (4, N'update_user_2', N'Password is invalid!')
INSERT [dbo].[Message] ([id], [name], [describe]) VALUES (5, N'update_user_3', N'New-password is not same the verify-password!')
INSERT [dbo].[Message] ([id], [name], [describe]) VALUES (6, N'login_3', N'User is not authorized to access this site!')
SET IDENTITY_INSERT [dbo].[Message] OFF
GO
SET IDENTITY_INSERT [dbo].[Roles] ON 

INSERT [dbo].[Roles] ([id], [name]) VALUES (1, N'User')
INSERT [dbo].[Roles] ([id], [name]) VALUES (2, N'Admin')
INSERT [dbo].[Roles] ([id], [name]) VALUES (3, N'Admin Manager')
SET IDENTITY_INSERT [dbo].[Roles] OFF
GO
SET IDENTITY_INSERT [dbo].[Slider] ON 

INSERT [dbo].[Slider] ([id], [album_ID], [heading], [text]) VALUES (1, 50, N'Listen Now', N'Listen to deep, lyrical V-Pop songs together!')
INSERT [dbo].[Slider] ([id], [album_ID], [heading], [text]) VALUES (2, 52, N'Discover Today', N'Discover today with upbeat US-UK music!')
INSERT [dbo].[Slider] ([id], [album_ID], [heading], [text]) VALUES (3, 54, N'Subscribe Today', N'Sign up to follow the gentle lofi music, relax after work!')
INSERT [dbo].[Slider] ([id], [album_ID], [heading], [text]) VALUES (4, 51, N'Listen Now', N'Listen to deep, lyrical V-Pop songs together!')
INSERT [dbo].[Slider] ([id], [album_ID], [heading], [text]) VALUES (5, 53, N'Discover Today', N'Discover today with upbeat US-UK music!')
INSERT [dbo].[Slider] ([id], [album_ID], [heading], [text]) VALUES (6, 55, N'Subscribe Today', N'Sign up to follow the gentle lofi music, relax after work!')
SET IDENTITY_INSERT [dbo].[Slider] OFF
GO
SET IDENTITY_INSERT [dbo].[Users] ON 

INSERT [dbo].[Users] ([id], [username], [password], [first_name], [last_name], [avatar], [role_ID], [t_create], [t_lastOnline], [email], [status]) VALUES (1, N'user_1', N'admin123', N'Long ', N'Nguyen ', N'./img/core-img/avatar-default-1.jpg', 1, CAST(N'2022-02-22T13:25:00' AS SmallDateTime), CAST(N'2022-03-21T09:48:00' AS SmallDateTime), N'user_1@gmail.com', 1)
INSERT [dbo].[Users] ([id], [username], [password], [first_name], [last_name], [avatar], [role_ID], [t_create], [t_lastOnline], [email], [status]) VALUES (2, N'admin_1', N'admin123', N'Marcel ', N' Ward', N'./img/core-img/avatar-default-1.jpg', 2, CAST(N'2022-02-22T13:25:00' AS SmallDateTime), CAST(N'2022-03-21T09:48:00' AS SmallDateTime), N'admin_1@gmail.com', 0)
INSERT [dbo].[Users] ([id], [username], [password], [first_name], [last_name], [avatar], [role_ID], [t_create], [t_lastOnline], [email], [status]) VALUES (3, N'admin_manager_1', N'admin123', N'Admin', N'Manager', N'./img/core-img/avatar-default-1.jpg', 3, CAST(N'2022-02-22T13:25:00' AS SmallDateTime), CAST(N'2022-03-21T10:44:00' AS SmallDateTime), N'admin_manager_1@gmail.com', 1)
INSERT [dbo].[Users] ([id], [username], [password], [first_name], [last_name], [avatar], [role_ID], [t_create], [t_lastOnline], [email], [status]) VALUES (4, N'user_2', N'admin123', NULL, NULL, N'./img/core-img/avatar-default-1.jpg', 2, CAST(N'2022-03-09T15:31:00' AS SmallDateTime), CAST(N'2022-03-15T14:30:00' AS SmallDateTime), N'user_2@gmail.com', 1)
INSERT [dbo].[Users] ([id], [username], [password], [first_name], [last_name], [avatar], [role_ID], [t_create], [t_lastOnline], [email], [status]) VALUES (5, N'user_3', N'admin123', N'Long', N'Nguyen', N'./img/core-img/avatar-default-1.jpg', 1, CAST(N'2022-03-09T15:38:00' AS SmallDateTime), CAST(N'2022-03-20T23:33:00' AS SmallDateTime), N'user_3@gmail.com', 1)
INSERT [dbo].[Users] ([id], [username], [password], [first_name], [last_name], [avatar], [role_ID], [t_create], [t_lastOnline], [email], [status]) VALUES (6, N'user_4', N'admin123', N'Long', NULL, N'./img/core-img/avatar-default-1.jpg', 1, CAST(N'2022-03-09T20:43:00' AS SmallDateTime), CAST(N'2022-03-20T23:34:00' AS SmallDateTime), N'user_4@gmail.com', 1)
SET IDENTITY_INSERT [dbo].[Users] OFF
GO
ALTER TABLE [dbo].[Users] ADD  DEFAULT ('./img/core-img/avatar-default-1.jpg') FOR [avatar]
GO
ALTER TABLE [dbo].[Users] ADD  DEFAULT ((0)) FOR [status]
GO
ALTER TABLE [dbo].[Albums]  WITH CHECK ADD FOREIGN KEY([category_ID])
REFERENCES [dbo].[Category] ([id])
GO
ALTER TABLE [dbo].[history_Album]  WITH CHECK ADD FOREIGN KEY([action_ID])
REFERENCES [dbo].[Action] ([id])
GO
ALTER TABLE [dbo].[liked]  WITH CHECK ADD FOREIGN KEY([album_ID])
REFERENCES [dbo].[Albums] ([id])
GO
ALTER TABLE [dbo].[liked]  WITH CHECK ADD FOREIGN KEY([user_ID])
REFERENCES [dbo].[Users] ([id])
GO
ALTER TABLE [dbo].[Slider]  WITH CHECK ADD FOREIGN KEY([album_ID])
REFERENCES [dbo].[Albums] ([id])
GO
ALTER TABLE [dbo].[Users]  WITH CHECK ADD FOREIGN KEY([role_ID])
REFERENCES [dbo].[Roles] ([id])
GO
USE [master]
GO
ALTER DATABASE [MusicPlayer] SET  READ_WRITE 
GO
