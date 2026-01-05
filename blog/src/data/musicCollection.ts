export interface Music {
  year: number;
  title: string;
  type: "album" | "ep" | "single";
  spotify: string;
  imageUrl: string;
  ownedFormats: ("vinyl" | "cd" | "digital")[];
}

export interface Artist {
  name: string;
  discography: Music[];
}

export const discography: Artist[] = [
  /*

  Template:

  (use for image: https://open.spotify.com/oembed?url=)

  TODO: make tool

  {
    name: "",
    discography: [
      {
        year: ,
        title: "",
        type: "album",
        spotify: "",
        imageUrl: "",
        ownedFormats: ["digital"],
      },
    ],
  },

  */
  {
    name: "Haken",
    discography: [
      {
        year: 2023,
        title: "Fauna",
        type: "album",
        spotify: "https://open.spotify.com/album/62Z9kh3RuUnkXrnyhHWJPX?si=eWdrf2eTQwK6JLrbnbKqkA",
        imageUrl:
          "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e022462afd15267d50cc8bf4ad5",
        ownedFormats: ["vinyl", "cd"],
      },
    ],
  },
  {
    name: "Karmanjakah",
    discography: [
      {
        year: 2023,
        title: "Ancient Skills EP",
        type: "ep",
        spotify: "https://open.spotify.com/album/2yB1l588RxtccxkZWuvk6c?si=qTKeFQnHTQSKuEeIFJG-fw",
        imageUrl:
          "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e028f86cfa717e235b459f14093",
        ownedFormats: ["digital"],
      },
    ],
  },
  {
    name: "King Crimson",
    discography: [
      {
        year: 1969,
        title: "In The Court Of The Crimson King",
        type: "album",
        spotify: "https://open.spotify.com/album/75ol9OP8bJaRqzGimpFHDm?si=Jsk3oiiDRN6wDstzJhxQHQ",
        imageUrl:
          "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02da7b326bd7ffa7b6b95b0660",
        ownedFormats: ["cd"],
      },
    ],
  },
  {
    name: "Vildhjarta",
    discography: [
      {
        year: 2025,
        title: "+ där skogen sjunger under evighetens granar +",
        type: "album",
        spotify: "https://open.spotify.com/album/509CFsKMmX9wl3xfOTdDsj?si=I3114-ljS7GXnmzvLcA9wQ",
        imageUrl:
          "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0261fa758346662db3af3d8c02",
        ownedFormats: ["cd"],
      },
    ],
  },
  {
    name: "VOLA",
    discography: [
      {
        year: 2024,
        title: "Friend Of A Phantom",
        type: "album",
        spotify: "https://open.spotify.com/album/2Ry1qg9QGKAoAVImEjreSX?si=YfFz-9BvQ8yDngFmZAFl0g",
        imageUrl:
          "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02e83f5d91704572a70fde854a",
        ownedFormats: ["cd"],
      },
      {
        year: 2018,
        title: "Applause Of A Distant Crowd",
        type: "album",
        spotify: "https://open.spotify.com/album/7d2thhwsgrAZLdUiYmAX6N?si=Sn2BCAa3RJCPp8nDFt37kw",
        imageUrl:
          "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0227102750cd4002416015dadc",
        ownedFormats: ["digital"],
      },
    ],
  },
  {
    name: "Porcupine Tree",
    discography: [
      {
        year: 2005,
        title: "Deadwing",
        type: "album",
        spotify: "https://open.spotify.com/album/4KjiLTzsKesak66EAPLO36?si=vuoWPkKHQt6mnAAAx13DjQ",
        imageUrl:
          "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02d9c15b02d0da8be6b0a82645",
        ownedFormats: ["cd"],
      },
      {
        year: 2002,
        title: "In Abstentia",
        type: "album",
        spotify: "https://open.spotify.com/album/5P7PsE8GmEB5TswXHMAySc?si=ZpFKkbBlRCSDQ8Cu44JhGA",
        imageUrl:
          "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e025e3e7d276f8263ffa43124b5",
        ownedFormats: ["cd"],
      },
    ],
  },
  {
    name: "Steven Wilson",
    discography: [
      {
        year: 2025,
        title: "The Overview",
        type: "album",
        spotify: "https://open.spotify.com/album/3xOcExpIWzroZldcdc212q?si=WQJUGJKSQKK3Ht3XGnT6Cg",
        imageUrl:
          "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02a1840c841435255cb587bb3b",
        ownedFormats: ["cd"],
      },
      {
        year: 2017,
        title: "To The Bone",
        type: "album",
        spotify: "https://open.spotify.com/album/1ahl6UmqCDuNy6rJVfRKeC?si=ZQJCPcR4Tf-RUYu6O47hWw",
        imageUrl:
          "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e022d98afe7647cff8d3ae94be3",
        ownedFormats: ["cd"],
      },
      {
        year: 2015,
        title: "Hand. Cannot. Erase.",
        type: "album",
        spotify: "https://open.spotify.com/album/6P7vL4vGgyrD7q9VR9BcnV?si=tvt4y4tWRxWX4xoX6LtOIg",
        imageUrl:
          "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0259fee416d114b30583afef48",
        ownedFormats: ["cd"],
      },
      {
        year: 2013,
        title: "The Raven That Refused To Sing (and Other Stories)",
        type: "album",
        spotify: "https://open.spotify.com/album/2xJFvV7JzoYYMere5rqjVf?si=QDU7sE8jS8Or86HVvIapUw",
        imageUrl:
          "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02957ae146a564181e7bbbfbd2",
        ownedFormats: ["cd"],
      },
    ],
  },
  {
    name: "Miles Davis",
    discography: [
      {
        year: 1969,
        title: "In A Silent Way",
        type: "album",
        spotify: "https://open.spotify.com/album/0Hs3BomCdwIWRhgT57x22T?si=EfP3XwyVReqOA-Ym0gQ2FQ",
        imageUrl:
          "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02b49905712678a33f50da4f1b",
        ownedFormats: ["cd"],
      },
    ],
  },
  {
    name: "Mirar",
    discography: [
      {
        year: 2025,
        title: "Ascension",
        type: "album",
        spotify: "https://open.spotify.com/album/6eS23i4CUnkQph9azKMWYE?si=0aq_0uOfRvCWpiD2orz0IA",
        imageUrl:
          "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e027dff6f53b2b854e99eca27e3",
        ownedFormats: ["digital"],
      },
      {
        year: 2024,
        title: "Mare",
        type: "ep",
        spotify: "https://open.spotify.com/album/7MDMBadUvE61SEwGapi43t?si=5JKZvF9MQbGmn4RpWF__Dw",
        imageUrl:
          "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02bb8a9cb338d62d0460617b29",
        ownedFormats: ["digital"],
      },
      {
        year: 2023,
        title: "Night Prayers",
        type: "single",
        spotify: "https://open.spotify.com/album/2h2TVMtrg2l5EIHDnrfbBl?si=ScVbQKySRaa1i9mLpTqyvg",
        imageUrl:
          "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02a2efdff2e9b55853dd902ffe",
        ownedFormats: ["digital"],
      },
    ],
  },
  {
    name: "Sigur Rós",
    discography: [
      {
        year: 2023,
        title: "ÁTTA",
        type: "album",
        spotify: "https://open.spotify.com/album/4QHM0MaR2dPDWIaKhTt7hd?si=xxdLGmtPRyS5MZIrOr8AaA",
        imageUrl:
          "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0282d80d64cd843e0e1c54019f",
        ownedFormats: ["digital"],
      },
    ],
  },
  {
    name: "Spiritbox",
    discography: [
      {
        year: 2021,
        title: "Eternal Blue",
        type: "album",
        spotify: "https://open.spotify.com/album/6cZ39G1mahxDAGfoPzDllb?si=jm0FxK2pTlmcohY-DuPi7Q",
        imageUrl:
          "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e020006a537a6e19505ca5593eb",
        ownedFormats: ["digital"],
      },
      {
        year: 2025,
        title: "Tsunami Sea",
        type: "album",
        spotify: "https://open.spotify.com/album/79sg58t1vRpcxudpP9uPtg?si=vVLbfQndTZK2nwLYTNxtqQ",
        imageUrl:
          "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02ca5c3280d995a78c34bdf210",
        ownedFormats: ["cd"],
      },
      {
        year: 2019,
        title: "Singles Collection",
        type: "ep",
        spotify: "https://open.spotify.com/album/2qyxvqq9X7ncfHNdZajbPC?si=cC4umsIvQpqMPlErQe6pvg",
        imageUrl:
          "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0265b717e1c0265bd1e629eaa6",
        ownedFormats: ["digital"],
      },
    ],
  },
];
