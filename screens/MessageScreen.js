import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native'
import { Ionicons} from '@expo/vector-icons'

export default class MessageScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Mensagens </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"

    }
})