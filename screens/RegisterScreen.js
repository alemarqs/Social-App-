import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, StatusBar } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import * as firebase from 'firebase'

export default class RegisterScreen extends React.Component {

    static navigationOptions = {
        headerShown: false,
    };


    state = {
        name: "",
        email: "",
        password: "",
        errorMessage: null
    }

    handleSignUp = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(userCredentials => {
                return userCredentials.user.updateProfile({
                    displayName: this.state.name
                });
            })
            .catch(error => this.setState({ errorMessage: error.message }));
    }



    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content"></StatusBar>

                <Image source={require('../assets/authHeader.png')}
                    style={{ width: 500, height: 373, marginTop: -200, marginLeft: -50 }}></Image>

                <Image source={require('../assets/authFooter.png')}
                    style={{ position: "absolute", width: 500, height: 373, bottom: -270, right: -170, opacity: 0.3 }}></Image>

                <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.goBack()}>
                    <Ionicons name="ios-arrow-round-back" size={32} color="#FFF"></Ionicons>
                </TouchableOpacity>

                <View style={{ position: "absolute", top: 64, alignItems: "center", width: "100%" }}>
                    <Text style={styles.greeting}>
                        {'Olá!\n Cadastre-se para começar.'}
                    </Text>
                    <TouchableOpacity style={styles.avatar}>
                        <Ionicons
                            name="md-add" size={40} color="#FFF" style={{ marginTop: 6, marginLeft: 2 }}></Ionicons>
                    </TouchableOpacity>
                </View>

                <View style={styles.errorMessage}>
                    <View style={{ marginTop: 90 }}>
                        {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                    </View>
                </View>

                <View style={styles.form}>
                    <View style={{ marginTop: 32 }}>
                        <Text style={styles.inputTitle}>Nome completo: </Text>
                        <TextInput style={styles.input}
                            autoCapitalize="none"
                            onChangeText={name => this.setState({ name })}
                            value={this.state.name}></TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={styles.inputTitle}>Email: </Text>
                        <TextInput style={styles.input}
                            autoCapitalize="none"
                            onChangeText={email => this.setState({ email })}
                            value={this.state.email}></TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <View>
                            <Text style={styles.inputTitle}>Senha: </Text>
                            <TextInput style={styles.input}
                                secureTextEntry
                                autoCapitalize="none"
                                onChangeText={password => this.setState({ password })}
                                value={this.state.password}
                            ></TextInput>
                        </View>

                    </View>
                </View>

                <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
                    <Text style={{ color: 'white', fontWeight: "500" }}>Cadastrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ alignSelf: "center", marginTop: 32 }}>
                    <Text style={{ color: "#414959", fontSize: 13 }}>
                        Novo por aqui? <Text style={{ fontWeight: "500", color: "#E9446A" }}
                            onPress={() => this.props.navigation.navigate("Login")}>Entrar.</Text>
                    </Text>
                </TouchableOpacity>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    greeting: {
        fontSize: 18,
        fontWeight: "400",
        textAlign: "center"
    },
    errorMessage: {
        height: 72,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30,
    },
    error: {
        color: "#E9446A",
        fontSize: 13,
        fontWeight: "600",
        textAlign: "center"
    },
    form: {
        marginBottom: 48,
        marginHorizontal: 30
    },
    inputTitle: {
        color: "#8A8F9E",
        fontSize: 10,
        textTransform: "uppercase"
    },
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F3D"
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: "#ff787f",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center"
    },
    back: {
        position: "absolute",
        top: 48,
        left: 20,
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: "rgba(21, 22, 48, 0.1)",
        alignItems: "center",
        justifyContent: "center",
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: "#E1E2E6",
        marginTop: 15,
        justifyContent: "center",
        alignItems: "center"
    }
})