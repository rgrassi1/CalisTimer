import React from 'react'
import { View } from 'react-native'

const ProgressBar = props => {
    const { color, percentage, height } = props
    return (
        <View style={{ 
            width: percentage ? `${percentage}%` : '1%', 
            height: height ? height : 5, 
            backgroundColor: color ? color : '#fff' }}>
        </View>
    )    
}

export default ProgressBar