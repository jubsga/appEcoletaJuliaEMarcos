import React, { useState } from'react';
import{ View, Image, ImageBackground, StyleSheet, Text, TextInput } from'react-native';
import{ Feather as Icon } from'@expo/vector-icons';
import{ RectButton } from'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function Home() {

    const navegation = useNavigation();

    function handleNavegationToPoints(){
        navegation.navigate('Points');
    }
    return(
        <ImageBackground source={require('../../assets/home-background.png')}
            style={styles.container}
            imageStyle={{ width: 274, height: 368}}
        >

            <View style={styles.main}>
                <Image style={{ width: 182, height: 44}}
                    source={require('../../assets/logo.png')}/>

                <Text style={styles.title}>
                    Seu marketplace de coleta de residuos
                </Text>

                <Text style={styles.description}>
                    Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente
                </Text>
            </View>

            <View style={styles.footer}>

                    <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    />

                    <TextInput style={styles.input}
                    placeholder="Senha"
                    autoCorrect={false}
                    />

                    <RectButton style={styles.button} onPress={handleNavegationToPoints}>
                        <View style={styles.buttonIcon}>
                            <Icon name="arrow-right"color="#FFF"size={24}/>
                        </View>

                        <Text style={styles.buttonText}>Entrar</Text>
                    </RectButton>
            </View>
    </ImageBackground>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
        backgroundColor: '#F0F0F5'
    },
    
    main: {
        flex: 1,
        justifyContent: 'center'
    },

    title: {
        color: '#322153',
        fontSize: 32,
        fontFamily: 'Ubuntu_700Bold',
        maxWidth: 260,
        marginTop: 64
    },
    
    description: {
        color: '#6C6C80',
        fontSize: 16,
        marginTop: 16,
        fontFamily: 'Roboto_400Regular',
        maxWidth: 260,
        ineHeight: 24
        },
        
    footer: {

    },

    select: {

    },

    input: {
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginBottom: 8,
        paddingHorizontal: 24,
        fontSize: 16
    },

    button: {
        backgroundColor: '#34CB79', 
        height: 60,
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: 8
    },
    buttonIcon: {
        height: 60,
        width: 60,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFF',
        fontFamily: 'Roboto_500Medium',
        fontSize: 16
    }
    });