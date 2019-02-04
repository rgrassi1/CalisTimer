import React from 'react'
import { View } from 'react-native'

const BackgroundProgressBar = props => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 - (props.percentage / 100), backgroundColor: '#D6304A' }}/>
                <View style={{ flex: props.percentage / 100, backgroundColor: '#2F0E12' }}/>
            </View>
            <View style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0 }}>
                {props.children}
            </View>
        </View>    
    )
}

export default BackgroundProgressBar
