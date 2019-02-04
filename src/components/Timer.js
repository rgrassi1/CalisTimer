import React from 'react'
import { Text, StyleSheet } from 'react-native'

const Timer = props => {
    const minutes = parseInt(props.time / 60)
    const seconds = parseInt(props.time % 60)
    const formatter = num => {
        if (num < 10) {
            return '0'+num
        } else {
            return num
        }
    }
    return (
        <Text style={ props.type === 'text2' ? styles.text2 : styles.text }>{formatter(minutes)}:{formatter(seconds)}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Ubuntu-Bold',
        fontSize: 96,
        textAlign: 'center',
        color: '#fff'
    },
    text2: {
        fontFamily: 'Ubuntu-Regular',
        fontSize: 24,
        textAlign: 'center',
        color: '#fff'
    }
})

export default Timer