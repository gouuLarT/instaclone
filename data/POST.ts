import { USERS } from "./USERS";

export const POSTS = [
    {
        imageURL: 'https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp',
        user: USERS[0].user,
        likes: 7840,
        caption: 'Train Ride to Hogwarts',
        profilepic: USERS[0].image,
        coments: [
            {
                user: 'eve',
                comment: 'Wow, amazing!'
            },
            {
                user: 'zoe',
                comment: 'Hey! Really cool'
            }
        ]
    }
]