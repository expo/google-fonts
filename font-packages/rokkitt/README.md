# @expo-google-fonts/rokkitt

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/rokkitt)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/rokkitt)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/rokkitt)

This package lets you use the [**Rokkitt**](https://fonts.google.com/specimen/Rokkitt) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Rokkitt

![Rokkitt](./font-family.png)

This font family contains [9 styles](#gallery).

- `Rokkitt_Thin100`
- `Rokkitt_ExtraLight200`
- `Rokkitt_Light300`
- `Rokkitt_Regular400`
- `Rokkitt_Medium500`
- `Rokkitt_SemiBold600`
- `Rokkitt_Bold700`
- `Rokkitt_ExtraBold800`
- `Rokkitt_Black900`

## 🔡 Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/rokkitt expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Rokkitt_Thin100,
  Rokkitt_ExtraLight200,
  Rokkitt_Light300,
  Rokkitt_Regular400,
  Rokkitt_Medium500,
  Rokkitt_SemiBold600,
  Rokkitt_Bold700,
  Rokkitt_ExtraBold800,
  Rokkitt_Black900,
} from '@expo-google-fonts/rokkitt';

export default () => {
  let [fontsLoaded] = useFonts({
    Rokkitt_Thin100,
    Rokkitt_ExtraLight200,
    Rokkitt_Light300,
    Rokkitt_Regular400,
    Rokkitt_Medium500,
    Rokkitt_SemiBold600,
    Rokkitt_Bold700,
    Rokkitt_ExtraBold800,
    Rokkitt_Black900,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Rokkitt_Thin100' }}>
          Rokkitt_Thin100
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Rokkitt_ExtraLight200' }}>
          Rokkitt_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Rokkitt_Light300' }}>
          Rokkitt_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Rokkitt_Regular400' }}>
          Rokkitt_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Rokkitt_Medium500' }}>
          Rokkitt_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Rokkitt_SemiBold600' }}>
          Rokkitt_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Rokkitt_Bold700' }}>
          Rokkitt_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Rokkitt_ExtraBold800' }}>
          Rokkitt_ExtraBold800
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Rokkitt_Black900' }}>
          Rokkitt_Black900
        </Text>
      </View>
    );
  }
};

```

## 📖 Gallery

##### Rokkitt_Thin100
![Rokkitt_Thin100](./9a0a1b138370aa3841a848edde26bd7045ac2a5a0f13a513b247417c3489811c.ttf.png)

##### Rokkitt_ExtraLight200
![Rokkitt_ExtraLight200](./840d357a7d06133d859000a071917c4ea92f02d0f001f247137046392166ff1b.ttf.png)

##### Rokkitt_Light300
![Rokkitt_Light300](./19b250411cba0e1bc39378cf1e47ecbd217b7b52e845159655611f9cce3f016f.ttf.png)

##### Rokkitt_Regular400
![Rokkitt_Regular400](./d605b424de78054bd585518d8a4e136ab863ab5f3110ee43cb0745bca0f94eb3.ttf.png)

##### Rokkitt_Medium500
![Rokkitt_Medium500](./c3ce457383a5f17f5736ecff7d423f0d5e1f10ba000e7a78145fef0d293439c7.ttf.png)

##### Rokkitt_SemiBold600
![Rokkitt_SemiBold600](./710018ab00f1b7534021eb425d0afa5cd1ccc82a3d91a174d7f359afac93f384.ttf.png)

##### Rokkitt_Bold700
![Rokkitt_Bold700](./76808b96844704a6d75bee1943315ea236557fc6fb1a239ec5fcee6f9c5fcd58.ttf.png)

##### Rokkitt_ExtraBold800
![Rokkitt_ExtraBold800](./1e99689267ca0778d003215820f88badff6b9986410c8b9d07d2c857c6e04beb.ttf.png)

##### Rokkitt_Black900
![Rokkitt_Black900](./a8cf419d654432575866170e1d718f434f7f5cfa52673194ae8fc3d08cbefe92.ttf.png)


## 🖥️ Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## ⚖️ License

The `@expo-google-fonts/rokkitt` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Rokkitt page on Google Fonts](https://fonts.google.com/specimen/Rokkitt) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Rokkitt on Google Fonts](https://fonts.google.com/specimen/Rokkitt)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/rokkitt)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/rokkitt)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
