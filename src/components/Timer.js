import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

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
        <Text>{formatter(minutes)}:{formatter(seconds)}</Text>
    )
}

const styles = StyleSheet.create({

})

export default Timer