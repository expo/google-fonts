# @expo-google-fonts/anonymous-pro

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/anonymous-pro)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/anonymous-pro)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/anonymous-pro)

This package lets you use the [**Anonymous Pro**](https://fonts.google.com/specimen/Anonymous+Pro) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Anonymous Pro

![Anonymous Pro](./font-family.png)

This font family contains [4 styles](#-gallery).

- `AnonymousPro_Regular400`
- `AnonymousPro_Regular400_Italic`
- `AnonymousPro_Bold700`
- `AnonymousPro_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/anonymous-pro expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  AnonymousPro_Regular400,
  AnonymousPro_Regular400_Italic,
  AnonymousPro_Bold700,
  AnonymousPro_Bold700_Italic,
} from '@expo-google-fonts/anonymous-pro';

export default () => {
  let [fontsLoaded] = useFonts({
    AnonymousPro_Regular400,
    AnonymousPro_Regular400_Italic,
    AnonymousPro_Bold700,
    AnonymousPro_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'AnonymousPro_Regular400' }}>
          AnonymousPro_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AnonymousPro_Regular400_Italic' }}>
          AnonymousPro_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AnonymousPro_Bold700' }}>
          AnonymousPro_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AnonymousPro_Bold700_Italic' }}>
          AnonymousPro_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### AnonymousPro_Regular400
![AnonymousPro_Regular400](./9ca7beef0b5eb5c9e72533cd45bc1e4f41c8272dc2335f22d3649e32a795995f.ttf.png)

##### AnonymousPro_Regular400_Italic
![AnonymousPro_Regular400_Italic](./71ce3ee6476a91f9e89e9f8010d9ea13314306b645af3e8d7b7add697e6f0d3e.ttf.png)

##### AnonymousPro_Bold700
![AnonymousPro_Bold700](./d00937283f3b530bee6700e02cfabfbb96b833d42559d48fc5fdfcfde2ff5b39.ttf.png)

##### AnonymousPro_Bold700_Italic
![AnonymousPro_Bold700_Italic](./60f1f3cae99bbc1323cdcdf9af6a0127d5b4684ef675e6836fa3034a297dc16a.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/anonymous-pro` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Anonymous Pro page on Google Fonts](https://fonts.google.com/specimen/Anonymous+Pro) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Anonymous Pro on Google Fonts](https://fonts.google.com/specimen/Anonymous+Pro)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/anonymous-pro)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/anonymous-pro)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This entire directory, including this README, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
