import React, { useState } from "react";
import { TouchableOpacity, View, Text, Image, Modal } from "react-native";
import { PostProps } from "../Post";
import styles from "./styles";
import { USERS } from "../../../data/USERS";

interface ProfileHeaderProps extends PostProps {
  selectedUser: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ post, selectedUser }) => {
  const [activeModal, setActiveModal] = useState(false);

  const handleModal = () => {
    setActiveModal(!activeModal);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.userNameHeader}>
          username
        </Text>
        <TouchableOpacity onPress={handleModal}>
          <Image
            style={styles.imgMenu}
            source={require('../../assets/Menu.png')}
          />
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={activeModal}
        onRequestClose={() => setActiveModal(!activeModal)}
      >
        <View style={styles.containerModal}>
          <View style={styles.outerView}>
            <TouchableOpacity onPress={handleModal}>
              <Image
                source={require('../../assets/ModalClose.png')}
                style={styles.modalClose}
              />
              <View style={{ paddingHorizontal: 20 }}>
                <TouchableOpacity style={{ borderBottomWidth: 1 }}>
                  <Text style={styles.modalInsideText}>Configuração e privacidade</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ borderBottomWidth: 1 }}>
                  <Text style={styles.modalInsideText}>Sua atividade</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ borderBottomWidth: 1 }}>
                  <Text style={styles.modalInsideText}>Itens arquivados</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ borderBottomWidth: 1 }}>
                  <Text style={styles.modalInsideText}>QR code</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ borderBottomWidth: 1 }}>
                  <Text style={styles.modalInsideText}>Salvos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ borderBottomWidth: 1 }}>
                  <Text style={styles.modalInsideText}>Amigos próximos</Text>
                </TouchableOpacity><TouchableOpacity style={{ borderBottomWidth: 1 }}>
                  <Text style={styles.modalInsideText}>Encontrar pessoas</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export const Profile: React.FC<PostProps> = ({ post }) => {
  return (
    <View style={styles.containerProfileHeader}>
      {USERS.map((profile, index) => (
        <View key={index}>
          <Image
            source={{ uri: profile.image1 }}
            style={styles.userPhoto}
          />
          <Text
            style={styles.userNameProfile}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {profile.user1}
          </Text>
          <Text
            style={styles.userBioProfile}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {profile.bio1}
          </Text>
        </View>
      ))}
     <TouchableOpacity style={styles.editProfileButton}>
        <Text style={styles.editProfileButtonText}>Editar Perfil</Text>
      </TouchableOpacity>
    </View>
  );
}


export default ProfileHeader;
