import React,{useState, useEffect} from 'react'
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Item, Input, Icon, } from 'native-base';
import { FlatList} from 'react-native'

import horoscop from '../utils/data.json'
export default (props) => {

    const [people, setPeople] = useState(horoscop)
    const [peopleShow, setPeopleShow] = useState(horoscop)
    

    useEffect(
        () => {
            setPeople(horoscop)
            setPeopleShow(horoscop)
          }, []
    )


    function search(event){
        if(event == "") {
            var newPeople = people
          } else {
            
            var newPeople = people.filter(person => {
              for (var i=0; i < person.title.length; i++) {
                  return person.title[i] == event
            }       
            })
          }
          setPeopleShow(newPeople)
    }
    return(
        <Container>
        <Header searchBar rounded>
        <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" 
              onChangeText={(e) => {
                return search(e)
              }}
            />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <Content>
          <List>
              <FlatList
              data={peopleShow}
              renderItem={ 
                  ({item, index}) => {
                    return (
                        <ListItem thumbnail>
                    <Left>
                      <Thumbnail 
                      style={{width:80, height:80}}
                      square source={{ uri: item.picture }} />
                    </Left>
                    <Body>
                      <Text>{item.title}</Text>
                    <Text note numberOfLines={1}>{item.date}</Text>
                    </Body>
                    <Right>
                      <Button 
                      onPress={ () => {
                          props.navigation.navigate('Detail')
                      } }
                      transparent>
                        <Text>View</Text>
                      </Button>
                    </Right>
                  </ListItem>
                    )
                  }
              }
              />
          </List>
        </Content>
      </Container>
    )
}