import React from 'react'
import { View } from 'react-native'
import { styles } from './TimeLine.styles'
export function TimeLine(props) {
    const { videoStatus } = props
    const totalTime = videoStatus.durationMillis
    const currentTime = videoStatus.positionMillis
    const progress = (currentTime * 100) / totalTime
    const lineStyle = {
        width: `${progress}%`
    }
    return (
        <View style={[styles.content, lineStyle]} />
    )
}