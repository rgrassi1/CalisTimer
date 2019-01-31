import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

class Select extends Component {
    state = { current: '' }

    componentDidMount() {
        this.setState({ current: this.props.current })
    }

    handlePress = opt => () => {
        this.setState({ current: opt.id })

        if (this.props.onSelect) {
            this.props.onSelect(opt.id)
        }
    }

    render() {
        const { current } = this.state
        const { options, label } = this.props
        return (
            <View>
                <Text style={styles.label}>{label}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    {
                        options.map( opt => {
                            return (
                                <TouchableOpacity 
                                    key={opt.id}
                                    style={[styles.opt, opt.id === current ? styles.optSelected : null]}
                                    onPress={this.handlePress(opt)}
                                >
                                    <Text style={styles.optLabel}>{opt.label}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    label: {
        textAlign: 'center',
        color: '#fff',
        fontFamily: 'Ubuntu-Regular',
        fontSize: 24
    },
    opt: {
        padding: 10
    },
    optSelected: {
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        borderRadius: 5
    },
    optLabel: {
        color: '#fff',
        fontFamily: 'Ubuntu-Regular',
        fontSize: 24
    }
})

export default Select