# @expo-google-fonts/catamaran

This package lets you use the [**Catamaran**](https://fonts.google.com/specimen/Catamaran) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Catamaran

![Catamaran](./font-family.png)

This font family contains [9 styles](#gallery).

- `Catamaran_Thin100`
- `Catamaran_ExtraLight200`
- `Catamaran_Light300`
- `Catamaran_Regular400`
- `Catamaran_Medium500`
- `Catamaran_SemiBold600`
- `Catamaran_Bold700`
- `Catamaran_ExtraBold800`
- `Catamaran_Black900`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/catamaran expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Catamaran_Thin100,
  Catamaran_ExtraLight200,
  Catamaran_Light300,
  Catamaran_Regular400,
  Catamaran_Medium500,
  Catamaran_SemiBold600,
  Catamaran_Bold700,
  Catamaran_ExtraBold800,
  Catamaran_Black900,
} from '@expo-google-fonts/catamaran';

export default () => {
  let [fontsLoaded] = useFonts({
    Catamaran_Thin100,
    Catamaran_ExtraLight200,
    Catamaran_Light300,
    Catamaran_Regular400,
    Catamaran_Medium500,
    Catamaran_SemiBold600,
    Catamaran_Bold700,
    Catamaran_ExtraBold800,
    Catamaran_Black900,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Catamaran_Thin100' }}>
          Catamaran_Thin100
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Catamaran_ExtraLight200' }}>
          Catamaran_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Catamaran_Light300' }}>
          Catamaran_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Catamaran_Regular400' }}>
          Catamaran_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Catamaran_Medium500' }}>
          Catamaran_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Catamaran_SemiBold600' }}>
          Catamaran_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Catamaran_Bold700' }}>
          Catamaran_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Catamaran_ExtraBold800' }}>
          Catamaran_ExtraBold800
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Catamaran_Black900' }}>
          Catamaran_Black900
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Catamaran_Thin100
![Catamaran_Thin100](./e8e9d704be93826d9781f133277934bb6184afd9522b149f005c78f5d89e62ac.ttf.png)

##### Catamaran_ExtraLight200
![Catamaran_ExtraLight200](./3f24bc068d63c199fab01e5c0690d6e034f485057c3c19571b656e705a78756b.ttf.png)

##### Catamaran_Light300
![Catamaran_Light300](./853537ef3cef46cebdd3f2ee0f94b33861095d50b2584d6f96a47725f6f4b79d.ttf.png)

##### Catamaran_Regular400
![Catamaran_Regular400](./6af095039ae2cc21b9f8e147b290dc6fae99dd4f45843dd262a9e30557dd4e65.ttf.png)

##### Catamaran_Medium500
![Catamaran_Medium500](./2b80fad7d7ef99a42af9235090775e879520d07fb7b3deda4986a64c81be4a96.ttf.png)

##### Catamaran_SemiBold600
![Catamaran_SemiBold600](./d77e1072b0d92cfa66cc458ff7e053b1e33cfa9dd663fb52f75062ba9a134122.ttf.png)

##### Catamaran_Bold700
![Catamaran_Bold700](./47d32e32345049db4c0f41c0ffba707afcf0ac18cb7000817fd26ae811255728.ttf.png)

##### Catamaran_ExtraBold800
![Catamaran_ExtraBold800](./342bd0052b9b81ca6df68a9cdda635ad6f77c796e37045545bfa1d0a071c0bc8.ttf.png)

##### Catamaran_Black900
![Catamaran_Black900](./fa466db090fa897764fa413a006d0c4f7a975a118db3de634988a14f674446cb.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Catamaran on Google Fonts](https://fonts.google.com/specimen/Catamaran)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/catamaran)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/catamaran)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
