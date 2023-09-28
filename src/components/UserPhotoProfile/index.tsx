import React from "react";
import { Image } from "react-native";
import styles from './styles'
import { PostProps } from "../Post";

const UserPhotoProfile: React.FC<PostProps> = ({ post }) => {
    return(
        <Image
        source={{ uri: post.profilepic }}
        style={styles.userImg}
        />
    )   
}

export default UserPhotoProfile