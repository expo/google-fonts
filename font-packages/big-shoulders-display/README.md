# @expo-google-fonts/big-shoulders-display

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/big-shoulders-display)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/big-shoulders-display)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/big-shoulders-display)

This package lets you use the [**Big Shoulders Display**](https://fonts.google.com/specimen/Big+Shoulders+Display) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Big Shoulders Display

![Big Shoulders Display](./font-family.png)

This font family contains [8 styles](#gallery).

- `BigShouldersDisplay_Thin100`
- `BigShouldersDisplay_Light300`
- `BigShouldersDisplay_Regular400`
- `BigShouldersDisplay_Medium500`
- `BigShouldersDisplay_SemiBold600`
- `BigShouldersDisplay_Bold700`
- `BigShouldersDisplay_ExtraBold800`
- `BigShouldersDisplay_Black900`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/big-shoulders-display expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  BigShouldersDisplay_Thin100,
  BigShouldersDisplay_Light300,
  BigShouldersDisplay_Regular400,
  BigShouldersDisplay_Medium500,
  BigShouldersDisplay_SemiBold600,
  BigShouldersDisplay_Bold700,
  BigShouldersDisplay_ExtraBold800,
  BigShouldersDisplay_Black900,
} from '@expo-google-fonts/big-shoulders-display';

export default () => {
  let [fontsLoaded] = useFonts({
    BigShouldersDisplay_Thin100,
    BigShouldersDisplay_Light300,
    BigShouldersDisplay_Regular400,
    BigShouldersDisplay_Medium500,
    BigShouldersDisplay_SemiBold600,
    BigShouldersDisplay_Bold700,
    BigShouldersDisplay_ExtraBold800,
    BigShouldersDisplay_Black900,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'BigShouldersDisplay_Thin100' }}>
          BigShouldersDisplay_Thin100
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BigShouldersDisplay_Light300' }}>
          BigShouldersDisplay_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BigShouldersDisplay_Regular400' }}>
          BigShouldersDisplay_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BigShouldersDisplay_Medium500' }}>
          BigShouldersDisplay_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BigShouldersDisplay_SemiBold600' }}>
          BigShouldersDisplay_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BigShouldersDisplay_Bold700' }}>
          BigShouldersDisplay_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BigShouldersDisplay_ExtraBold800' }}>
          BigShouldersDisplay_ExtraBold800
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BigShouldersDisplay_Black900' }}>
          BigShouldersDisplay_Black900
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### BigShouldersDisplay_Thin100
![BigShouldersDisplay_Thin100](./243bc59e9459b35c35fa0bc5cc49219e1cbf248be840664569ca730a8a7a7e5e.ttf.png)

##### BigShouldersDisplay_Light300
![BigShouldersDisplay_Light300](./f9d601dd24fc0f4bb73ca5a9bc3fb23c2d744597df0f10a2894d566903ba1154.ttf.png)

##### BigShouldersDisplay_Regular400
![BigShouldersDisplay_Regular400](./0d1c3a1a7aca284022f6d11318ac148fe815d11c400a02d20e25768bbcf17f16.ttf.png)

##### BigShouldersDisplay_Medium500
![BigShouldersDisplay_Medium500](./782f7156f414a376945013c065917553e525e9f55dc801588c0f2f47406a51a3.ttf.png)

##### BigShouldersDisplay_SemiBold600
![BigShouldersDisplay_SemiBold600](./abf50d14f1c83beca50dbf4875c46279d06f2120f997bd0b3670236cf24bf1aa.ttf.png)

##### BigShouldersDisplay_Bold700
![BigShouldersDisplay_Bold700](./908c135c2591d12f000c0af1d59e56e72fb77beb39c1ba091505f250575b4ea6.ttf.png)

##### BigShouldersDisplay_ExtraBold800
![BigShouldersDisplay_ExtraBold800](./19b8e205eb51647a9245e28993f1aa99df1cdc107cab1e823db05dce048363ca.ttf.png)

##### BigShouldersDisplay_Black900
![BigShouldersDisplay_Black900](./71c2e1ad1b8e3abbf78e31165b5b054095b45b80cdd32410b9df8abaa45a631f.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/big-shoulders-display` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Big Shoulders Display page on Google Fonts](https://fonts.google.com/specimen/Big+Shoulders+Display) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Big Shoulders Display on Google Fonts](https://fonts.google.com/specimen/Big+Shoulders+Display)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/big-shoulders-display)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/big-shoulders-display)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
