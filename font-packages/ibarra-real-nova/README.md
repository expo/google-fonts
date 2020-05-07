# @expo-google-fonts/ibarra-real-nova

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/ibarra-real-nova)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/ibarra-real-nova)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/ibarra-real-nova)

This package lets you use the [**Ibarra Real Nova**](https://fonts.google.com/specimen/Ibarra+Real+Nova) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Ibarra Real Nova

![Ibarra Real Nova](./font-family.png)

This font family contains [6 styles](#gallery).

- `IbarraRealNova_Regular400`
- `IbarraRealNova_Regular400_Italic`
- `IbarraRealNova_SemiBold600`
- `IbarraRealNova_SemiBold600_Italic`
- `IbarraRealNova_Bold700`
- `IbarraRealNova_Bold700_Italic`

## 🔡 Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/ibarra-real-nova expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  IbarraRealNova_Regular400,
  IbarraRealNova_Regular400_Italic,
  IbarraRealNova_SemiBold600,
  IbarraRealNova_SemiBold600_Italic,
  IbarraRealNova_Bold700,
  IbarraRealNova_Bold700_Italic,
} from '@expo-google-fonts/ibarra-real-nova';

export default () => {
  let [fontsLoaded] = useFonts({
    IbarraRealNova_Regular400,
    IbarraRealNova_Regular400_Italic,
    IbarraRealNova_SemiBold600,
    IbarraRealNova_SemiBold600_Italic,
    IbarraRealNova_Bold700,
    IbarraRealNova_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'IbarraRealNova_Regular400' }}>
          IbarraRealNova_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'IbarraRealNova_Regular400_Italic' }}>
          IbarraRealNova_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'IbarraRealNova_SemiBold600' }}>
          IbarraRealNova_SemiBold600
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'IbarraRealNova_SemiBold600_Italic' }}>
          IbarraRealNova_SemiBold600_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'IbarraRealNova_Bold700' }}>
          IbarraRealNova_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'IbarraRealNova_Bold700_Italic' }}>
          IbarraRealNova_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## 📖 Gallery

##### IbarraRealNova_Regular400
![IbarraRealNova_Regular400](./fa62d319d71f5e7580a79ee36ecae3548c35a0e2d7892f8695afa7e237a3b660.ttf.png)

##### IbarraRealNova_Regular400_Italic
![IbarraRealNova_Regular400_Italic](./0f9205ed765c8774cf31fd539aee83f11aec36439f0fd12bfab29a491352b9f7.ttf.png)

##### IbarraRealNova_SemiBold600
![IbarraRealNova_SemiBold600](./91c844d08ae013b372d204d91e5dd37e879057e12a50150929228512c78eec5d.ttf.png)

##### IbarraRealNova_SemiBold600_Italic
![IbarraRealNova_SemiBold600_Italic](./77e539a16bef74671e0c9ea382e533233bfa3f2b0219d2bd7d2d11db7502dc23.ttf.png)

##### IbarraRealNova_Bold700
![IbarraRealNova_Bold700](./a2ae8b1765ec3d56c893888f27607c49f613d48918f01ed3034e7c5119269948.ttf.png)

##### IbarraRealNova_Bold700_Italic
![IbarraRealNova_Bold700_Italic](./be0a49f8da3aff4a325e615fb9bd69330b92f562ff4c805471e29bca7ec57e72.ttf.png)


## 🖥️ Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## ⚖️ License

The `@expo-google-fonts/ibarra-real-nova` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Ibarra Real Nova page on Google Fonts](https://fonts.google.com/specimen/Ibarra+Real+Nova) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Ibarra Real Nova on Google Fonts](https://fonts.google.com/specimen/Ibarra+Real+Nova)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/ibarra-real-nova)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/ibarra-real-nova)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
