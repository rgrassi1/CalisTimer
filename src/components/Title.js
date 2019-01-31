import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Title = props => {
    return (
        <View>
            <Text style={[styles.title, props.style]}>{props.title}</Text>
            <Text style={styles.subtitle}>{props.subtitle}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Ubuntu-Bold', 
        fontSize: 48, 
        textAlign: 'center', 
        color: '#fff'
    },
    subtitle: {
        fontFamily: 'Ubuntu-Regular',
        fontSize: 14, 
        textAlign: 'center', 
        color: '#fff'        
    }
})

export default Title