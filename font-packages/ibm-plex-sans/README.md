# @expo-google-fonts/ibm-plex-sans

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/ibm-plex-sans)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/ibm-plex-sans)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/ibm-plex-sans)

This package lets you use the [**IBM Plex Sans**](https://fonts.google.com/specimen/IBM+Plex+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## IBM Plex Sans

![IBM Plex Sans](./font-family.png)

This font family contains [14 styles](#-gallery).

- `IBMPlexSans_Thin100`
- `IBMPlexSans_Thin100_Italic`
- `IBMPlexSans_ExtraLight200`
- `IBMPlexSans_ExtraLight200_Italic`
- `IBMPlexSans_Light300`
- `IBMPlexSans_Light300_Italic`
- `IBMPlexSans_Regular400`
- `IBMPlexSans_Regular400_Italic`
- `IBMPlexSans_Medium500`
- `IBMPlexSans_Medium500_Italic`
- `IBMPlexSans_SemiBold600`
- `IBMPlexSans_SemiBold600_Italic`
- `IBMPlexSans_Bold700`
- `IBMPlexSans_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/ibm-plex-sans expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  IBMPlexSans_Thin100,
  IBMPlexSans_Thin100_Italic,
  IBMPlexSans_ExtraLight200,
  IBMPlexSans_ExtraLight200_Italic,
  IBMPlexSans_Light300,
  IBMPlexSans_Light300_Italic,
  IBMPlexSans_Regular400,
  IBMPlexSans_Regular400_Italic,
  IBMPlexSans_Medium500,
  IBMPlexSans_Medium500_Italic,
  IBMPlexSans_SemiBold600,
  IBMPlexSans_SemiBold600_Italic,
  IBMPlexSans_Bold700,
  IBMPlexSans_Bold700_Italic,
} from '@expo-google-fonts/ibm-plex-sans';

export default () => {
  let [fontsLoaded] = useFonts({
    IBMPlexSans_Thin100,
    IBMPlexSans_Thin100_Italic,
    IBMPlexSans_ExtraLight200,
    IBMPlexSans_ExtraLight200_Italic,
    IBMPlexSans_Light300,
    IBMPlexSans_Light300_Italic,
    IBMPlexSans_Regular400,
    IBMPlexSans_Regular400_Italic,
    IBMPlexSans_Medium500,
    IBMPlexSans_Medium500_Italic,
    IBMPlexSans_SemiBold600,
    IBMPlexSans_SemiBold600_Italic,
    IBMPlexSans_Bold700,
    IBMPlexSans_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexSans_Thin100' }}>
          IBMPlexSans_Thin100
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexSans_Thin100_Italic' }}>
          IBMPlexSans_Thin100_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexSans_ExtraLight200' }}>
          IBMPlexSans_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexSans_ExtraLight200_Italic' }}>
          IBMPlexSans_ExtraLight200_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexSans_Light300' }}>
          IBMPlexSans_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexSans_Light300_Italic' }}>
          IBMPlexSans_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexSans_Regular400' }}>
          IBMPlexSans_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexSans_Regular400_Italic' }}>
          IBMPlexSans_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexSans_Medium500' }}>
          IBMPlexSans_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexSans_Medium500_Italic' }}>
          IBMPlexSans_Medium500_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexSans_SemiBold600' }}>
          IBMPlexSans_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexSans_SemiBold600_Italic' }}>
          IBMPlexSans_SemiBold600_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexSans_Bold700' }}>
          IBMPlexSans_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexSans_Bold700_Italic' }}>
          IBMPlexSans_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### IBMPlexSans_Thin100
![IBMPlexSans_Thin100](./813b794a62b57fce9544b834ad183c1e5175f1825c2fa2067d3480518d81f446.ttf.png)

##### IBMPlexSans_Thin100_Italic
![IBMPlexSans_Thin100_Italic](./550fbb9acc0447f5ddf482b1659912f8f4076179a59e288fd71dc1e7d86885c9.ttf.png)

##### IBMPlexSans_ExtraLight200
![IBMPlexSans_ExtraLight200](./f6209628705dc0331422f8e21345a1e1387a26fd07293496dbcc6a3551859177.ttf.png)

##### IBMPlexSans_ExtraLight200_Italic
![IBMPlexSans_ExtraLight200_Italic](./224494b659d44d626398ec8760d4b0e4ea459e0be556f8219de0ddf0f170cebb.ttf.png)

##### IBMPlexSans_Light300
![IBMPlexSans_Light300](./86b8f04cfeba166a0a6eed0b57970518f638c9745fea6212e6805b004579da75.ttf.png)

##### IBMPlexSans_Light300_Italic
![IBMPlexSans_Light300_Italic](./60e2fc65f3e87d1813c4a598c88cc21e21334a5b6b8e1d821dbb7b17edabbf21.ttf.png)

##### IBMPlexSans_Regular400
![IBMPlexSans_Regular400](./8cd70b2671db7396694b0e2a1a3a9859018db199711237cdf67322e3d9060bbf.ttf.png)

##### IBMPlexSans_Regular400_Italic
![IBMPlexSans_Regular400_Italic](./d7e4bb3b1d26be9695d85cfc1cdaef4376e22aca80f216e22c43c28ce7969ae0.ttf.png)

##### IBMPlexSans_Medium500
![IBMPlexSans_Medium500](./c8d348ccb6205cc4dd9833d972d8decd8b526df3d482aedc4aa47ae9f7bd46f1.ttf.png)

##### IBMPlexSans_Medium500_Italic
![IBMPlexSans_Medium500_Italic](./c576912fcd0266aba72ffcf4b1b7d770bdf1353f90c2a0bdc8686e8dd740eac6.ttf.png)

##### IBMPlexSans_SemiBold600
![IBMPlexSans_SemiBold600](./26aefb8b77b2efc1dd517b6c5baaca61435844c281e5a51125bd65213f2cc5e0.ttf.png)

##### IBMPlexSans_SemiBold600_Italic
![IBMPlexSans_SemiBold600_Italic](./1aeff1379a138b4aa07f5fd0066ca778f321b9a1c8f1b234d858812b684ebb66.ttf.png)

##### IBMPlexSans_Bold700
![IBMPlexSans_Bold700](./13670a62ca981b5bc10df4425d93c3c41647b8934455c891e16f9384881606ef.ttf.png)

##### IBMPlexSans_Bold700_Italic
![IBMPlexSans_Bold700_Italic](./64d98b387f5233a7cbc684f09cd4b5c622058a02d63fe1af27e247ee88e4573e.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/ibm-plex-sans` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [IBM Plex Sans page on Google Fonts](https://fonts.google.com/specimen/IBM+Plex+Sans) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [IBM Plex Sans on Google Fonts](https://fonts.google.com/specimen/IBM+Plex+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/ibm-plex-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/ibm-plex-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
