import React from 'react'
import {Text, Button, View} from 'react-native'

export default (props) => {
    return(
        <View>
        <Text>Login</Text>
        <Button 
        title="Ke Home"
        onPress= { () => {
            props.navigation.navigate('Home')
        }}
        />
        </View>
    )
}