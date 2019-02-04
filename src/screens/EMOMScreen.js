import React, { Component } from 'react';
import { 
    ScrollView, 
    View, 
    Text, 
    TextInput,  
    Image, 
    KeyboardAvoidingView,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import Select from '../components/Select'
import Title from '../components/Title'
import Timer from '../components/Timer'
import ProgressBar from '../components/ProgressBar'
import BackgroundProgress from '../components/BackgroundProgress'
//import Sound from 'react-native-sound'

//const alert = require('../../assets/sounds/alert.wav')

class EMOMScreen extends Component {

    state = {
        alerts: 0,
        cowntdown: 1,
        time: '15',

        isRunning: false,
        cowntdownValue: 5,
        count: 0
    }

    play = () => {
        this.setState({ isRunning: true })
        const count = () => {
            this.setState({ count: this.state.count + 1 }, () => {
                if (this.state.count === parseInt(this.state.time) * 60) {
                    clearInterval(this.countTimer)
                }
            })
        }
        if (this.state.cowntdown === 1) {
            this.cowntdownTimer = setInterval(() => {
                this.setState({ cowntdownValue: this.state.cowntdownValue - 1 }, () => {                    
                    if (this.state.cowntdownValue === 0) {
                        clearInterval(this.cowntdownTimer)
                        this.countTimer = setInterval(count, 100)    
                    }
                })
            }, 1000);
        } else {
            this.countTimer = setInterval(count, 100)    
        }
    }

    componentDidMount() {
        //Sound.setCategory('Playback', true)
        //this.alert = new Sound(alert)
    }

    render() {  
        if (this.state.isRunning) {
            const percMinute = parseInt(((this.state.count % 60) / 60) * 100)
            const percTime = parseInt((this.state.count / 60) / parseInt(this.state.time) * 100)
            return (
                <BackgroundProgress percentage={percMinute}>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Timer time={this.state.count}/>
                        <ProgressBar percentage={percTime}/>
                        <Timer time={this.state.time * 60 - this.state.count} type={'text2'}/>
                    </View>
                </BackgroundProgress>
            )
        } 
        return (
            <KeyboardAvoidingView style={{ flex: 1 }}>
                <ScrollView style={styles.container}>
                    <Title style={{ paddingTop: 125 }} title="EMOM" subtitle="Every Minute on the Minute" />
                    <Image style={{ margin: 20, alignSelf: 'center' }} source={require('../../assets/settings-cog.png')} />
                    <Select 
                        label='Alertas:'
                        current={this.state.alerts}
                        options={[
                            { id: 0, label: 'off' },
                            { id: 15, label: '15s' },
                            { id: 30, label: '30s' }, 
                            { id: 45, label: '45s' }
                        ]}
                        onSelect={opt => this.setState({ alerts: opt })}
                    />
                    <Select 
                        label='Contagem regressiva:'
                        current={this.state.cowntdown}
                        options={[
                            { id: 1, label: 'sim' },
                            { id: 0, label: 'não' }
                        ]}
                        onSelect={opt => this.setState({ cowntdown: opt })}
                    />
                    <View>
                        <Text style={styles.label}>Quantos minutos:</Text>
                        <TextInput style={styles.input} keyboardType='numeric' value={this.state.time} onChangeText={ text => this.setState({ time: text })}/>
                    </View>
                    <View style={{ alignSelf: 'center' }}>
                        <TouchableOpacity onPress={ () => this.play() }>
                            <Image source={require('../../assets/btn-play.png')} />
                        </TouchableOpacity>
                    </View>
                    <Text>Testar</Text>
                </ScrollView>
            </KeyboardAvoidingView>
        )
    }    
}

EMOMScreen.navigationOptions = {
    header: null
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#DA3047',
        flex: 1
    },
    label: {
        textAlign: 'center',
        color: '#fff',
        fontFamily: 'Ubuntu-Regular',
        fontSize: 24
    },
    input: {
        textAlign: 'center',
        color: '#000',
        fontFamily: 'Ubuntu-Regular',
        fontSize: 48
    }
})

export default EMOMScreen