import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import Button from '../components/Button'

const HomeScreen = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>CalisTimer</Text>
            <Button style={styles.btn} onPress={() => props.navigation.navigate('EMOM')}>EMOM</Button>
            <Button style={styles.btn}>AMRAP</Button>
            <Button style={styles.btn}>Isometria</Button>
        </View>
    )
}

HomeScreen.navigationOptions = {
    header: null
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DA3047'
    },
    logo: {
        fontFamily: 'Ubuntu-Bold',
        textAlign: 'center', 
        color: '#fff', 
        fontSize: 48, 
        marginTop: 107, 
        marginBottom: 300        
    },
    btn: {
        padding: 20
    }
})

export default HomeScreen