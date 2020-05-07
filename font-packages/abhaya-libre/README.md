# @expo-google-fonts/abhaya-libre

This package lets you use the [**Abhaya Libre**](https://fonts.google.com/specimen/Abhaya+Libre) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Abhaya Libre

![Abhaya Libre](./font-family.png)

This font family contains [5 styles](#gallery).

- `AbhayaLibre_Regular400`
- `AbhayaLibre_Medium500`
- `AbhayaLibre_SemiBold600`
- `AbhayaLibre_Bold700`
- `AbhayaLibre_ExtraBold800`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/abhaya-libre expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  AbhayaLibre_Regular400,
  AbhayaLibre_Medium500,
  AbhayaLibre_SemiBold600,
  AbhayaLibre_Bold700,
  AbhayaLibre_ExtraBold800,
} from '@expo-google-fonts/abhaya-libre';

export default () => {
  let [fontsLoaded] = useFonts({
    AbhayaLibre_Regular400,
    AbhayaLibre_Medium500,
    AbhayaLibre_SemiBold600,
    AbhayaLibre_Bold700,
    AbhayaLibre_ExtraBold800,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'AbhayaLibre_Regular400' }}>
          AbhayaLibre_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AbhayaLibre_Medium500' }}>
          AbhayaLibre_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AbhayaLibre_SemiBold600' }}>
          AbhayaLibre_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AbhayaLibre_Bold700' }}>
          AbhayaLibre_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AbhayaLibre_ExtraBold800' }}>
          AbhayaLibre_ExtraBold800
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### AbhayaLibre_Regular400
![AbhayaLibre_Regular400](./f8e1a260e8a56f8cdb2e2401be9e3a6903026becbf134336b9c8f6b2e2490cd5.ttf.png)

##### AbhayaLibre_Medium500
![AbhayaLibre_Medium500](./ff52a780878fd838b81f8c96e548f49d7bbd4f92cb0a3dc68eb3f852ca3f3fd4.ttf.png)

##### AbhayaLibre_SemiBold600
![AbhayaLibre_SemiBold600](./e3be63e1c52229673f453da3c6abd79dc0011d02fd57da38489880434556aa77.ttf.png)

##### AbhayaLibre_Bold700
![AbhayaLibre_Bold700](./1c7bdb109ab0e98ef91a41ec55825dcb97c2ea2e9274c67dde899104f5b59878.ttf.png)

##### AbhayaLibre_ExtraBold800
![AbhayaLibre_ExtraBold800](./9457be94f81fc73b59af3e850d0dcb91790d60078cbdc252da50881c615173aa.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## Links

- [Abhaya Libre on Google Fonts](https://fonts.google.com/specimen/Abhaya+Libre)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/abhaya-libre)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/abhaya-libre)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
