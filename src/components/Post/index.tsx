import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ImageSourcePropType, Modal, FlatList } from "react-native";
import { Divider } from 'react-native-elements';
import UserPhoto from "../UserPhoto";
import styles from "./styles";

export interface Comment {
  text: string;
  user: string;
  profilepic: string;
}

export interface PostProps {
  post: {
    bio: string;
    imageURL: string;
    user: string;
    profilepic: string;
    imageurl: string;
    likes: number;
    caption: string;
    comment: string | { user: string; comment: string }[];
  };
}

const Post: React.FC<PostProps> = ({ post }) => {

  return (
    <View style={{ marginLeft: 10 }}>
      <Divider
        width={1}
        orientation="vertical"
        style={{ marginBottom: 5 }} />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{ marginTop: 15 }}>
        <PostFooter post={post} />
        <View style={{ marginLeft: 10 }}>
          <Likes post={post} />
          <Caption post={post} />
          <CommentSection post={post} />
        </View>
      </View>
    </View>
  )
}

const PostHeader: React.FC<PostProps> = ({ post }) => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin: 5
      }}
    >
      <UserPhoto post={post} />
      <Text
        style=
        {{
          color: '#262626',
          fontWeight: '600',
          paddingRight: 290
        }}
      >{post.user}
      </Text>
      <View>
        <Text style={{ color: '#262626', fontWeight: '900', marginRight: 8 }}>...</Text>
      </View>
    </View>
  );
}

const PostImage: React.FC<PostProps> = ({ post }) => {
  return (
    <View style={{ width: '100%', height: 450 }}>
      <Image
        source={{ uri: post.imageURL }}
        style={{ height: '100%', resizeMode: 'cover', marginRight: 5 }}
      />
    </View>
  )
}

const PostIcons = [
  {
    name: 'Like',
    imageurl: require('../../assets/Like.png')
  },
  {
    name: 'Comment',
    imageurl: require('../../assets/Comment.png')
  },
  {
    name: 'Share',
    imageurl: require('../../assets/SharePosts.png')
  },
  {
    name: 'Save',
    imageurl: require('../../assets/Save.png')
  },
]

const PostFooter: React.FC<PostProps> = ({ post }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginLeft: 10 }}>
      <View style={{ flexDirection: 'row' }}>
        <Icon imageurl={PostIcons[0].imageurl} />
        <Icon imageurl={PostIcons[1].imageurl} />
        <Icon imageurl={PostIcons[2].imageurl} />
      </View>
      <View style={{}}>
        <Icon imageurl={PostIcons[3].imageurl} />
      </View>
    </View>
  );
}

const Icon = ({ imageurl }: { imageurl: ImageSourcePropType }) => (
  <TouchableOpacity>
    <Image
      style={{
        width: 20,
        resizeMode: 'contain',
        height: 20,
        marginRight: 15
      }}
      source={imageurl}
    />
  </TouchableOpacity>
)

const Likes: React.FC<PostProps> = ({ post }) => {
  return (
    <View style={{ flexDirection: 'row', marginTop: 10 }}>
      <Text style={{ fontWeight: '500' }}>{post.likes.toString()} likes</Text>
    </View>
  )
}

const Caption: React.FC<PostProps> = ({ post }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  const maxLength = 70;
  return (
    <View style={{ flexDirection: 'row', marginTop: 5 }}>
      <Text style={{ marginRight: 5, fontWeight: 'bold' }}>
        {post.user}
      </Text>
      <Text numberOfLines={isExpanded ? 0 : 2}>
        {isExpanded ? post.caption : (post.caption.length > maxLength ? post.caption.substring(0, maxLength) + "..." : post.caption)}
      </Text>
      {post.caption.length > maxLength && (
        <TouchableOpacity onPress={toggleText}>
          <Text style={{ color: 'blue' }}>{isExpanded ? "Less" : "More"}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const CommentSection: React.FC<PostProps> = ({ post }) => {
  const [modalActive, setModalActive] = useState(false);

  const openModal = () => {
    setModalActive(true);
  };

  const closeModal = () => {
    setModalActive(false);
  };

  const comments = post.comment;

  if (comments && comments.length > 0) {
    return (
      <View style={{ marginTop: 5 }}>
        <TouchableOpacity onPress={openModal}>
          <Text style={{ color: '#00000080' }}>
            View {comments.length > 1 ? 'all' : ''} {comments.length}
            {comments.length > 1 ? ' comments' : ' comment'}
          </Text>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalActive}
          onRequestClose={closeModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <FlatList
                data={comments as unknown as Comment[]}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (

                  <View style={styles.commentsContainer}>
                    <UserPhoto post={post} />
                    <Text style={styles.userNameModal}>{item.user}</Text>
                    <Text style={styles.textCommentModal}>{item.text}</Text>
                  </View>
                )}
              />
              <TouchableOpacity onPress={closeModal} style={styles.closeModal}>
              <Image source={require('../../assets/ModalClose.png')} style={styles.closeModal}/>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  } else {
    return null;
  }
};


export default Post;