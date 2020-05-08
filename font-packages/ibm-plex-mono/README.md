# @expo-google-fonts/ibm-plex-mono

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/ibm-plex-mono)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/ibm-plex-mono)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/ibm-plex-mono)

This package lets you use the [**IBM Plex Mono**](https://fonts.google.com/specimen/IBM+Plex+Mono) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## IBM Plex Mono

![IBM Plex Mono](./font-family.png)

This font family contains [14 styles](#-gallery).

- `IBMPlexMono_Thin100`
- `IBMPlexMono_Thin100_Italic`
- `IBMPlexMono_ExtraLight200`
- `IBMPlexMono_ExtraLight200_Italic`
- `IBMPlexMono_Light300`
- `IBMPlexMono_Light300_Italic`
- `IBMPlexMono_Regular400`
- `IBMPlexMono_Regular400_Italic`
- `IBMPlexMono_Medium500`
- `IBMPlexMono_Medium500_Italic`
- `IBMPlexMono_SemiBold600`
- `IBMPlexMono_SemiBold600_Italic`
- `IBMPlexMono_Bold700`
- `IBMPlexMono_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/ibm-plex-mono expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  IBMPlexMono_Thin100,
  IBMPlexMono_Thin100_Italic,
  IBMPlexMono_ExtraLight200,
  IBMPlexMono_ExtraLight200_Italic,
  IBMPlexMono_Light300,
  IBMPlexMono_Light300_Italic,
  IBMPlexMono_Regular400,
  IBMPlexMono_Regular400_Italic,
  IBMPlexMono_Medium500,
  IBMPlexMono_Medium500_Italic,
  IBMPlexMono_SemiBold600,
  IBMPlexMono_SemiBold600_Italic,
  IBMPlexMono_Bold700,
  IBMPlexMono_Bold700_Italic,
} from '@expo-google-fonts/ibm-plex-mono';

export default () => {
  let [fontsLoaded] = useFonts({
    IBMPlexMono_Thin100,
    IBMPlexMono_Thin100_Italic,
    IBMPlexMono_ExtraLight200,
    IBMPlexMono_ExtraLight200_Italic,
    IBMPlexMono_Light300,
    IBMPlexMono_Light300_Italic,
    IBMPlexMono_Regular400,
    IBMPlexMono_Regular400_Italic,
    IBMPlexMono_Medium500,
    IBMPlexMono_Medium500_Italic,
    IBMPlexMono_SemiBold600,
    IBMPlexMono_SemiBold600_Italic,
    IBMPlexMono_Bold700,
    IBMPlexMono_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexMono_Thin100' }}>
          IBMPlexMono_Thin100
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexMono_Thin100_Italic' }}>
          IBMPlexMono_Thin100_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexMono_ExtraLight200' }}>
          IBMPlexMono_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexMono_ExtraLight200_Italic' }}>
          IBMPlexMono_ExtraLight200_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexMono_Light300' }}>
          IBMPlexMono_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexMono_Light300_Italic' }}>
          IBMPlexMono_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexMono_Regular400' }}>
          IBMPlexMono_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexMono_Regular400_Italic' }}>
          IBMPlexMono_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexMono_Medium500' }}>
          IBMPlexMono_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexMono_Medium500_Italic' }}>
          IBMPlexMono_Medium500_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexMono_SemiBold600' }}>
          IBMPlexMono_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexMono_SemiBold600_Italic' }}>
          IBMPlexMono_SemiBold600_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexMono_Bold700' }}>
          IBMPlexMono_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexMono_Bold700_Italic' }}>
          IBMPlexMono_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### IBMPlexMono_Thin100
![IBMPlexMono_Thin100](./0b176030119e3bf8008cc3a1ab395de2490609893cbf42c9ad93a1b97131c1ad.ttf.png)

##### IBMPlexMono_Thin100_Italic
![IBMPlexMono_Thin100_Italic](./49cc21b7b1c2e02aec83be236218fc1bf64c43ab6693d02e5f57dc5c4d580a42.ttf.png)

##### IBMPlexMono_ExtraLight200
![IBMPlexMono_ExtraLight200](./84f407c2acc498e7797432543eba48500150e851182f2706d2a48e4fc61aef13.ttf.png)

##### IBMPlexMono_ExtraLight200_Italic
![IBMPlexMono_ExtraLight200_Italic](./973e67e339972330580f84b47bc69af70b6ffb871605061a2c44830772432449.ttf.png)

##### IBMPlexMono_Light300
![IBMPlexMono_Light300](./7860eafcb749cd16c35f7d63a81d0d83919b82475eeb29338cd5eea961a4bbfd.ttf.png)

##### IBMPlexMono_Light300_Italic
![IBMPlexMono_Light300_Italic](./ad14a6133399a3b691d1311e56718da47fe30d69f6f48d68f43c25f62084f4d0.ttf.png)

##### IBMPlexMono_Regular400
![IBMPlexMono_Regular400](./4e5360e6435ca0fda23ac8bde947e30a690395bedc6a0e0f9b360aceeb490851.ttf.png)

##### IBMPlexMono_Regular400_Italic
![IBMPlexMono_Regular400_Italic](./8b7513201954154b316d56ba7185e0f58200a044e0150145e17d797a98dcbb52.ttf.png)

##### IBMPlexMono_Medium500
![IBMPlexMono_Medium500](./8bea2481c75885bfb6d132add1b2ac6d4ccdbedfa94dda1d4dc34e7d00ca8ffd.ttf.png)

##### IBMPlexMono_Medium500_Italic
![IBMPlexMono_Medium500_Italic](./eb363301d9364248dd094562021ed86fc2b1b9e2351f313c635e72b14d98179f.ttf.png)

##### IBMPlexMono_SemiBold600
![IBMPlexMono_SemiBold600](./b6f0266c5d40d72cd5d4051aaa3dc1836d7874fc40471cae205892e07fdd87ad.ttf.png)

##### IBMPlexMono_SemiBold600_Italic
![IBMPlexMono_SemiBold600_Italic](./48174c08a0c28ee87d255c8380c23b2beca649d5ed46c8287c5062304417209b.ttf.png)

##### IBMPlexMono_Bold700
![IBMPlexMono_Bold700](./089c2f087950891775cef79553f8c15f825bea671e0a1323f495354feb06d3b3.ttf.png)

##### IBMPlexMono_Bold700_Italic
![IBMPlexMono_Bold700_Italic](./3fdca15f4f471d5ef3f57c790ad9b09474ab6d24e75f300f10c9eb8219ddad39.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/ibm-plex-mono` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [IBM Plex Mono page on Google Fonts](https://fonts.google.com/specimen/IBM+Plex+Mono) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [IBM Plex Mono on Google Fonts](https://fonts.google.com/specimen/IBM+Plex+Mono)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/ibm-plex-mono)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/ibm-plex-mono)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
