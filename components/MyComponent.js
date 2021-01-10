import React, { useState } from 'react'

const fetch = require("node-fetch");

import { View, Text, Button, TextInput, Image } from "proton-native"

///
/// Component displays basic components
///
const MyComponent = (props) => {

  const [cnt, setCnt] = useState(0)
  const [txt, settxt] = useState("")
  const [imgUrl, setImgUrl] = useState("../img/placeholder.jpg")

  const handleClick = (e) => {
    const c = cnt + 1
    setCnt(c)
  }

  const handleTxtChange = (value) => {
    settxt(value)
  }

  const fetchData = async () => {
    const url = "https://api.randomuser.me/"
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    console.log(data.results[0])
    setImgUrl(data.results[0].picture.large)
  }

  ////////////////////////////////////////

  return (
    <View>
      <Text style={{fontSize: 30}}> { cnt } </Text>

      <Button onPress={() => handleClick()} title="Add one" />
      
      <View style={{width: "100%", height: 200, border: "1px solid green"}}>
        <Image    
          source={{
            uri: imgUrl,
          }}
          style={{width: "100%", height: 200}}
        />
      </View>
      
      <Button onPress={ fetchData } title="Fetch image" />
      
      <Text style={{fontSize: 14}}> { "Set input:" } </Text>  
      <TextInput 
        value={ txt }
        onChangeText={ handleTxtChange }
      />
      <Text style={{fontSize: 30}}> { txt } </Text>
    
    </View>
  )
}

export default MyComponent