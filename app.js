import React from "react"
import { Window, App, View } from "proton-native"

import MyComponent from './components/MyComponent'

const Main = (props) => {
  return (
    <App>
      <Window margined title="Test" style={{ width: 300, height: 500, backgroundColor: "white", color: 'black' }}>
        <View>
          <MyComponent />
        </View>
      </Window>
    </App>
  )
}

export default Main


