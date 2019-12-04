import React, { Component, useEffect, useState } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';

import axios from 'axios'

export default (props) => {

    const [desc, setDesc] = useState('')
    let param =  props.navigation.state.params.name.toLowerCase()

    let url = `http://horoscope-api.herokuapp.com/horoscope/today/${param}`
    useEffect(
        () => {
            axios.get(url).then(
                (res) => {
                    setDesc(res.data.horoscope)
                    
                }
            )
        }, []
    )
    return(
        <Container>
        <Header />
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: props.navigation.state.params.img}} />
                <Body>
                  <Text>{props.navigation.state.params.name}</Text>
                  <Text note>{props.navigation.state.params.date}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://media.realitatea.net/multimedia/image/201907/w728/horoscop_30_iulie_2019_51214100.jpg'}} style={{height: 200, width: 200, flex: 1}}/>
                <Text>
                  {desc}
                </Text>
              </Body>
            </CardItem>
            <CardItem>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
}