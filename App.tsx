import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
// import AnimatedSplash from "./lib/AnimatedSplash";
import AnimatedSplash from "react-native-animated-splash-screen";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  }, []);
  return (
    <>
      <AnimatedSplash
        logoWidht={150}
        logoHeight={150}
        isLoaded={isLoaded}
        backgroundColor={"#262626"}
        logoImage={require("./assets/logo.png")}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff",
          }}
        >
          <Text style={{ color: "#000", fontSize: 30, textAlign: 'center'}}>{`Home\nPage`}</Text>
        </View>
      </AnimatedSplash>
    </>
  );
};

export default App;