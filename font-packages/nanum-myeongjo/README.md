# @expo-google-fonts/nanum-myeongjo

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/nanum-myeongjo)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/nanum-myeongjo)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/nanum-myeongjo)

This package lets you use the [**Nanum Myeongjo**](https://fonts.google.com/specimen/Nanum+Myeongjo) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Nanum Myeongjo

![Nanum Myeongjo](./font-family.png)

This font family contains [3 styles](#gallery).

- `NanumMyeongjo_Regular400`
- `NanumMyeongjo_Bold700`
- `NanumMyeongjo_ExtraBold800`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/nanum-myeongjo expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  NanumMyeongjo_Regular400,
  NanumMyeongjo_Bold700,
  NanumMyeongjo_ExtraBold800,
} from '@expo-google-fonts/nanum-myeongjo';

export default () => {
  let [fontsLoaded] = useFonts({
    NanumMyeongjo_Regular400,
    NanumMyeongjo_Bold700,
    NanumMyeongjo_ExtraBold800,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'NanumMyeongjo_Regular400' }}>
          NanumMyeongjo_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'NanumMyeongjo_Bold700' }}>
          NanumMyeongjo_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'NanumMyeongjo_ExtraBold800' }}>
          NanumMyeongjo_ExtraBold800
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### NanumMyeongjo_Regular400
![NanumMyeongjo_Regular400](./3df71af0cacc55f9ee8f8e5e35a48672e379aefb187f3ae133a8fd5100c3810f.ttf.png)

##### NanumMyeongjo_Bold700
![NanumMyeongjo_Bold700](./c78488cd4af94bf04459b776f90fbe7942e11af15dda46bd856a1abc0523ae11.ttf.png)

##### NanumMyeongjo_ExtraBold800
![NanumMyeongjo_ExtraBold800](./2da8166e69673863a98b44792cb5b54e1a13b597c11dca437783e5a9336cfa9c.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/nanum-myeongjo` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Nanum Myeongjo page on Google Fonts](https://fonts.google.com/specimen/Nanum+Myeongjo) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Nanum Myeongjo on Google Fonts](https://fonts.google.com/specimen/Nanum+Myeongjo)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/nanum-myeongjo)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/nanum-myeongjo)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
