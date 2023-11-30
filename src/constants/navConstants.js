import symbol from "../assets/symbol.svg";

export const propEditorNav = [
  {
    id: "navCabinet",
    title: "Кабінет",
    navigation: "cabinet",
    picture: `${symbol}#icon-cabinet`,
  },
  {
    id: "navMessages",
    title: "Повідомлення",
    navigation: "messages",
    picture: `${symbol}#icon-mail`,
  },
  {
    id: "navMedia",
    title: "Медіатека",
    navigation: "medialibrary",
    picture: `${symbol}#icon-rmediaTec`,
    menu: [
      {
        id: "genres",
        title: "Жанри",
        navigation: "medialibrary/genres",
        picture: `${symbol}#icon-music-album`,
      },
      {
        id: "shops",
        title: "Заклади",
        navigation: "medialibrary/shops",
        picture: `${symbol}#icon-build`,
      },
      {
        id: "newPlaylists",
        title: "Нові плейлисти",
        navigation: "medialibrary/newplaylists",
        picture: `${symbol}#icon-playlist`,
      },
      {
        id: "newTracks",
        title: "Нові пісні",
        navigation: "medialibrary/newtracks",
        picture: `${symbol}#icon-song`,
      },
    ],
  },

  {
    id: "navAllMusic",
    title: "Вся музика",
    navigation: "allmusic",
    picture: `${symbol}#icon-allMusic`,
  },
];

export const propAdminNav = [
  {
    id: "navCabinet",
    title: "Кабінет",
    navigation: "cabinet",
    picture: `${symbol}#icon-cabinet`,
  },
  {
    id: "navMessages",
    title: "Повідомлення",
    navigation: "messages",
    picture: `${symbol}#icon-mail`,
  },
  {
    id: "navUsers",
    title: "Користувачі",
    navigation: "users",
    picture: `${symbol}#icon-list`,
  },

  {
    id: "navOnline",
    title: "Онлайн",
    navigation: "online",
    picture: `${symbol}#icon-online`,
  },
  {
    id: "navAnalytics",
    title: "Аналітика",
    navigation: "analytics",
    picture: `${symbol}#icon-analytics`,
  },
];

export const propUserNav = [
  {
    id: "navCabinet",
    title: "Кабінет",
    navigation: "cabinet",
    picture: `${symbol}#icon-cabinet`,
  },
  {
    id: "navMyPlaylists",
    title: "Мої плейлисти",
    navigation: "myplaylists",
    picture: `${symbol}#icon-playlist`,
  },
  {
    id: "navMessages",
    title: "Повідомлення",
    navigation: "messages",
    picture: `${symbol}#icon-mail`,
  },

  {
    id: "navMedia",
    title: "Медіатека",
    navigation: "medialibrary",
    picture: `${symbol}#icon-rmediaTec`,
  },
];
