import { Image, TouchableOpacity, View, Text} from "react-native";
import React from "react";
import styles from "./styles";

export function Header() {
    return (
        <View style={styles.container}>

            <TouchableOpacity>
                <Image
                    source={require('../../assets/LogoText.png')}
                    style={styles.logo}
                />
            </TouchableOpacity>

            <View style={styles.containerIcons}>
                <TouchableOpacity>
                    <Image
                        source={require('../../assets/NewPostIcon.png')}
                        style={styles.icons}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={require('../../assets/ActivityIcon.png')}
                        style={styles.icons}
                    />
                </TouchableOpacity>
                

                <TouchableOpacity>
                    <Image
                        source={require('../../assets/ChatIcon.png')}
                        style={styles.icons}
                    />
                </TouchableOpacity>
                <View style={styles.unreadContainer}>
                <Text style={styles.unreadText}>11</Text>
                </View>
            </View>

        </View>
    )
}