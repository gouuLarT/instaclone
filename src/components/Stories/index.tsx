import { ScrollView, Text, View, Image } from "react-native"
import { USERS } from "../../../data/USERS"
import styles from "./styles"

export function Stories() {
  return (
    <View style={{ marginBottom: 13 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => (
          <View key={index} style={{ alignItems: 'center' }}>
            <Image
              source={{ uri: story.image }}
              style={styles.stories} />
            <Text style={{ color: 'black' }}>{
              story.user.length > 11 ? story.user.slice(0, 10).toLowerCase() + '...' : story.user.toLowerCase()
            }</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}