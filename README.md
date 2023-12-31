### React Native Splash Screen Example

React Native Splash Screen (**RELEASE** APK) - Instant boot up of Splash Screen  
<img src="SplashScreen_Release.gif" height="500"/>

React Native Splash Screen (**DEBUG** APK) - 2 to 5 seconds of black screen during boot up of Splash Screen
<img src="SplashScreen_Debug_BlackScreen.gif" height="500"/>

## Installation
> yarn add react-native-animated-splash-screen

Files edited:
1. App.tsx

## Hide the first default splash screen
2. android\app\src\main\res\values\styles.xml - Edited :9 to :12
``` 
    <style name="Theme.RemoveSplashScreenTheme" parent="@style/AppTheme">
        <item name="android:windowIsTranslucent">true</item>
    </style>
```

3. android\app\src\main\AndroidManifest.xml - Edited :12  
``` 
    android:theme="@style/Theme.RemoveSplashScreenTheme" 
```

4. Build_Release_APK.sh

## Run Debug APK on emulator/phone
> yarn android  

For Debug version of APK, upon clicking on your app icon to boot up, you will see a black screen for few seconds on first launch, and then you will see the splash screen immediately.

## Run Release APK on emulator/phone
> source Build_Release_APK.sh

For Release version of APK, upon clicking on your app icon to boot up, you will NOT see a black screen for few seconds on first launch, the app will boot/start up in less than 1 second, and then you will see the splash screen immediately.

## License

Library 'react-native-animated-splash-screen' is licensed under [The MIT License](https://mit-license.org/). 

## Credits
Regarding main project 'react-native-animated-splash-screen', please refer to 'https://github.com/fabio-alss-freitas/react-native-animated-splash-screen'
