# @expo-google-fonts/ibm-plex-sans

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/ibm-plex-sans)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/ibm-plex-sans)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/ibm-plex-sans)

This package lets you use the [**IBM Plex Sans**](https://fonts.google.com/specimen/IBM+Plex+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## IBM Plex Sans

![IBM Plex Sans](./font-family.png)

This font family contains [14 styles](#-gallery).

- `IBMPlexSans_100Thin`
- `IBMPlexSans_100Thin_Italic`
- `IBMPlexSans_200ExtraLight`
- `IBMPlexSans_200ExtraLight_Italic`
- `IBMPlexSans_300Light`
- `IBMPlexSans_300Light_Italic`
- `IBMPlexSans_400Regular`
- `IBMPlexSans_400Regular_Italic`
- `IBMPlexSans_500Medium`
- `IBMPlexSans_500Medium_Italic`
- `IBMPlexSans_600SemiBold`
- `IBMPlexSans_600SemiBold_Italic`
- `IBMPlexSans_700Bold`
- `IBMPlexSans_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/ibm-plex-sans expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  IBMPlexSans_100Thin,
  IBMPlexSans_100Thin_Italic,
  IBMPlexSans_200ExtraLight,
  IBMPlexSans_200ExtraLight_Italic,
  IBMPlexSans_300Light,
  IBMPlexSans_300Light_Italic,
  IBMPlexSans_400Regular,
  IBMPlexSans_400Regular_Italic,
  IBMPlexSans_500Medium,
  IBMPlexSans_500Medium_Italic,
  IBMPlexSans_600SemiBold,
  IBMPlexSans_600SemiBold_Italic,
  IBMPlexSans_700Bold,
  IBMPlexSans_700Bold_Italic,
} from '@expo-google-fonts/ibm-plex-sans';

export default () => {
  let [fontsLoaded] = useFonts({
    IBMPlexSans_100Thin,
    IBMPlexSans_100Thin_Italic,
    IBMPlexSans_200ExtraLight,
    IBMPlexSans_200ExtraLight_Italic,
    IBMPlexSans_300Light,
    IBMPlexSans_300Light_Italic,
    IBMPlexSans_400Regular,
    IBMPlexSans_400Regular_Italic,
    IBMPlexSans_500Medium,
    IBMPlexSans_500Medium_Italic,
    IBMPlexSans_600SemiBold,
    IBMPlexSans_600SemiBold_Italic,
    IBMPlexSans_700Bold,
    IBMPlexSans_700Bold_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexSans_100Thin' }}>
          IBMPlexSans_100Thin
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexSans_100Thin_Italic' }}>
          IBMPlexSans_100Thin_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexSans_200ExtraLight' }}>
          IBMPlexSans_200ExtraLight
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexSans_200ExtraLight_Italic' }}>
          IBMPlexSans_200ExtraLight_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexSans_300Light' }}>
          IBMPlexSans_300Light
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexSans_300Light_Italic' }}>
          IBMPlexSans_300Light_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexSans_400Regular' }}>
          IBMPlexSans_400Regular
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexSans_400Regular_Italic' }}>
          IBMPlexSans_400Regular_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexSans_500Medium' }}>
          IBMPlexSans_500Medium
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexSans_500Medium_Italic' }}>
          IBMPlexSans_500Medium_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexSans_600SemiBold' }}>
          IBMPlexSans_600SemiBold
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexSans_600SemiBold_Italic' }}>
          IBMPlexSans_600SemiBold_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexSans_700Bold' }}>
          IBMPlexSans_700Bold
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexSans_700Bold_Italic' }}>
          IBMPlexSans_700Bold_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### IBMPlexSans_100Thin
![IBMPlexSans_100Thin](./IBMPlexSans_100Thin.ttf.png)

##### IBMPlexSans_100Thin_Italic
![IBMPlexSans_100Thin_Italic](./IBMPlexSans_100Thin_Italic.ttf.png)

##### IBMPlexSans_200ExtraLight
![IBMPlexSans_200ExtraLight](./IBMPlexSans_200ExtraLight.ttf.png)

##### IBMPlexSans_200ExtraLight_Italic
![IBMPlexSans_200ExtraLight_Italic](./IBMPlexSans_200ExtraLight_Italic.ttf.png)

##### IBMPlexSans_300Light
![IBMPlexSans_300Light](./IBMPlexSans_300Light.ttf.png)

##### IBMPlexSans_300Light_Italic
![IBMPlexSans_300Light_Italic](./IBMPlexSans_300Light_Italic.ttf.png)

##### IBMPlexSans_400Regular
![IBMPlexSans_400Regular](./IBMPlexSans_400Regular.ttf.png)

##### IBMPlexSans_400Regular_Italic
![IBMPlexSans_400Regular_Italic](./IBMPlexSans_400Regular_Italic.ttf.png)

##### IBMPlexSans_500Medium
![IBMPlexSans_500Medium](./IBMPlexSans_500Medium.ttf.png)

##### IBMPlexSans_500Medium_Italic
![IBMPlexSans_500Medium_Italic](./IBMPlexSans_500Medium_Italic.ttf.png)

##### IBMPlexSans_600SemiBold
![IBMPlexSans_600SemiBold](./IBMPlexSans_600SemiBold.ttf.png)

##### IBMPlexSans_600SemiBold_Italic
![IBMPlexSans_600SemiBold_Italic](./IBMPlexSans_600SemiBold_Italic.ttf.png)

##### IBMPlexSans_700Bold
![IBMPlexSans_700Bold](./IBMPlexSans_700Bold.ttf.png)

##### IBMPlexSans_700Bold_Italic
![IBMPlexSans_700Bold_Italic](./IBMPlexSans_700Bold_Italic.ttf.png)


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
