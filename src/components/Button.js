import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const Button = props => {
    return (
        <TouchableOpacity onPress={props.onPress} style={props.style}>
            <Text style={{ color: '#fff', fontSize: 24, textAlign: 'center' }}>{props.children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#fff',
        fontSize: 24,
        textAlign: 'center',
        fontFamily: 'Ubuntu-Regular'
    }
})

export default Button
