import { USERS } from "./USERS";

export const POSTS = [
  {
    imageURL: "https://i.pinimg.com/564x/f1/ea/c3/f1eac3f5ca4193759e66b5e96127a887.jpg",
    user: USERS[0].user,
    likes: 7840,
    caption: "Navigating the digital realm, one keystroke at a time.",
    profilepic: USERS[0].image1,
    comment: [
      {
        usercomment: "eve",
        text: "Wow, amazing!",
      },
      {
        user: "zoe",
        text: "Hey! Really cool",
      },
    ],
  },
  {
    imageURL: "https://i.pinimg.com/564x/e0/95/07/e09507eca9b4348d3dff6da70f589a86.jpg",
    user: USERS[1].user,
    likes: 7840,
    caption: "Coding my way through life",
    profilepic: USERS[1].image2, 
    comment: [
      {
        user: "eve",
        text: "Wow, amazing!",
      },
      {
        user: "zoe",
        text: "Hey! Really cool",
      },
    ],
  },
  {
    imageURL:
      "https://i.pinimg.com/564x/fe/85/0f/fe850ff6c3b8700abcfc8bc30ecbf891.jpg",
    user: USERS[3].user,
    likes: 7840,
    caption: "Train Ride to Hogwarts",
    profilepic: USERS[3].image3,
    comment: [
      {
        user: "eve",
        text: "Wow, amazing!",
      },
      {
        user: "zoe",
        text: "Hey! Really cool",
      },
    ],
  },
];
