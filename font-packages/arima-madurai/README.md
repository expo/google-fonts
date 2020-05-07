# @expo-google-fonts/arima-madurai

This package lets you use the [**Arima Madurai**](https://fonts.google.com/specimen/Arima+Madurai) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Arima Madurai

![Arima Madurai](./font-family.png)

This font family contains [8 styles](#gallery).

- `ArimaMadurai_Thin100`
- `ArimaMadurai_ExtraLight200`
- `ArimaMadurai_Light300`
- `ArimaMadurai_Regular400`
- `ArimaMadurai_Medium500`
- `ArimaMadurai_Bold700`
- `ArimaMadurai_ExtraBold800`
- `ArimaMadurai_Black900`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/arima-madurai expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  ArimaMadurai_Thin100,
  ArimaMadurai_ExtraLight200,
  ArimaMadurai_Light300,
  ArimaMadurai_Regular400,
  ArimaMadurai_Medium500,
  ArimaMadurai_Bold700,
  ArimaMadurai_ExtraBold800,
  ArimaMadurai_Black900,
} from '@expo-google-fonts/arima-madurai';

export default () => {
  let [fontsLoaded] = useFonts({
    ArimaMadurai_Thin100,
    ArimaMadurai_ExtraLight200,
    ArimaMadurai_Light300,
    ArimaMadurai_Regular400,
    ArimaMadurai_Medium500,
    ArimaMadurai_Bold700,
    ArimaMadurai_ExtraBold800,
    ArimaMadurai_Black900,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'ArimaMadurai_Thin100' }}>
          ArimaMadurai_Thin100
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'ArimaMadurai_ExtraLight200' }}>
          ArimaMadurai_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'ArimaMadurai_Light300' }}>
          ArimaMadurai_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'ArimaMadurai_Regular400' }}>
          ArimaMadurai_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'ArimaMadurai_Medium500' }}>
          ArimaMadurai_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'ArimaMadurai_Bold700' }}>
          ArimaMadurai_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'ArimaMadurai_ExtraBold800' }}>
          ArimaMadurai_ExtraBold800
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'ArimaMadurai_Black900' }}>
          ArimaMadurai_Black900
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### ArimaMadurai_Thin100
![ArimaMadurai_Thin100](./20fe984789a290b9c540b82d788511cf37e7dcb0c94a3f808ed8a9980ce92262.ttf.png)

##### ArimaMadurai_ExtraLight200
![ArimaMadurai_ExtraLight200](./4ea122a5616110be9d6b0719ff9a8e5d87a5bb067671e53f60e9e2f34151a054.ttf.png)

##### ArimaMadurai_Light300
![ArimaMadurai_Light300](./e9bb6dffdcb0e85ac571c284727a1ff484951f065ccff0e42668f232709bcfd0.ttf.png)

##### ArimaMadurai_Regular400
![ArimaMadurai_Regular400](./72a8a5252b9293d6af843e90bdda0f995b86531cb25d7a2489b5b58e7c495575.ttf.png)

##### ArimaMadurai_Medium500
![ArimaMadurai_Medium500](./b608979162b4bce202e22f3cba5768ef3c5f96294c41e1d36229b02393a70cf7.ttf.png)

##### ArimaMadurai_Bold700
![ArimaMadurai_Bold700](./f9809fc1ba075315f2526aba738bb8c4bfb8af33451d402a57eae3edbdbe45b6.ttf.png)

##### ArimaMadurai_ExtraBold800
![ArimaMadurai_ExtraBold800](./030889c403dcab9b3a79394ed59d1d1da7d0dbafae26fc8c6d1b870d7732c997.ttf.png)

##### ArimaMadurai_Black900
![ArimaMadurai_Black900](./25561cbe875f9bad0c96c060f2a1f8108ba709366496e68ff510efdf5930429f.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## Links

- [Arima Madurai on Google Fonts](https://fonts.google.com/specimen/Arima+Madurai)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/arima-madurai)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/arima-madurai)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
