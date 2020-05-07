# @expo-google-fonts/nanum-gothic

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/nanum-gothic)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/nanum-gothic)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/nanum-gothic)

This package lets you use the [**Nanum Gothic**](https://fonts.google.com/specimen/Nanum+Gothic) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Nanum Gothic

![Nanum Gothic](./font-family.png)

This font family contains [3 styles](#gallery).

- `NanumGothic_Regular400`
- `NanumGothic_Bold700`
- `NanumGothic_ExtraBold800`

## 🔡 Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/nanum-gothic expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  NanumGothic_Regular400,
  NanumGothic_Bold700,
  NanumGothic_ExtraBold800,
} from '@expo-google-fonts/nanum-gothic';

export default () => {
  let [fontsLoaded] = useFonts({
    NanumGothic_Regular400,
    NanumGothic_Bold700,
    NanumGothic_ExtraBold800,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'NanumGothic_Regular400' }}>
          NanumGothic_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'NanumGothic_Bold700' }}>
          NanumGothic_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'NanumGothic_ExtraBold800' }}>
          NanumGothic_ExtraBold800
        </Text>
      </View>
    );
  }
};

```

## 📖 Gallery

##### NanumGothic_Regular400
![NanumGothic_Regular400](./384554f92bd4d754bd8750f8885c456c5264d6814731376178dd0727fcf2d98c.ttf.png)

##### NanumGothic_Bold700
![NanumGothic_Bold700](./66257cb7dbb7d38dd5d9b0c7a1f9df7ae828f4a2a79a37070603405220e9f32b.ttf.png)

##### NanumGothic_ExtraBold800
![NanumGothic_ExtraBold800](./560717e4c667f1bdf58f6426ef133e74637eb3c1868feff814bb8a5b707e6880.ttf.png)


## 🖥️ Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## ⚖️ License

The `@expo-google-fonts/nanum-gothic` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Nanum Gothic page on Google Fonts](https://fonts.google.com/specimen/Nanum+Gothic) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Nanum Gothic on Google Fonts](https://fonts.google.com/specimen/Nanum+Gothic)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/nanum-gothic)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/nanum-gothic)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
