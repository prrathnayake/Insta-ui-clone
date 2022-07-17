import React from "react";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

export default function NewChatPerson() {

    const [tick, setTick] = React.useState(false)
    
  return (
    <>
      {tick ? (
        <FontAwesome5
          name="check-circle"
          size={24}
          color="black"
          onPress={() => setTick(!tick)}
        />
      ) : (
        <Entypo
          name="circle"
          size={24}
          color="black"
          onPress={() => setTick(!tick)}
        />
      )}
    </>
  );
}
