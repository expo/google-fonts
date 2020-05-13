# @expo-google-fonts/nunito-sans

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/nunito-sans)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/nunito-sans)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/nunito-sans)

This package lets you use the [**Nunito Sans**](https://fonts.google.com/specimen/Nunito+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Nunito Sans

![Nunito Sans](./font-family.png)

This font family contains [14 styles](#-gallery).

- `NunitoSans_200ExtraLight`
- `NunitoSans_200ExtraLight_Italic`
- `NunitoSans_300Light`
- `NunitoSans_300Light_Italic`
- `NunitoSans_400Regular`
- `NunitoSans_400Regular_Italic`
- `NunitoSans_600SemiBold`
- `NunitoSans_600SemiBold_Italic`
- `NunitoSans_700Bold`
- `NunitoSans_700Bold_Italic`
- `NunitoSans_800ExtraBold`
- `NunitoSans_800ExtraBold_Italic`
- `NunitoSans_900Black`
- `NunitoSans_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/nunito-sans expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  NunitoSans_200ExtraLight,
  NunitoSans_200ExtraLight_Italic,
  NunitoSans_300Light,
  NunitoSans_300Light_Italic,
  NunitoSans_400Regular,
  NunitoSans_400Regular_Italic,
  NunitoSans_600SemiBold,
  NunitoSans_600SemiBold_Italic,
  NunitoSans_700Bold,
  NunitoSans_700Bold_Italic,
  NunitoSans_800ExtraBold,
  NunitoSans_800ExtraBold_Italic,
  NunitoSans_900Black,
  NunitoSans_900Black_Italic,
} from '@expo-google-fonts/nunito-sans';

export default () => {
  let [fontsLoaded] = useFonts({
    NunitoSans_200ExtraLight,
    NunitoSans_200ExtraLight_Italic,
    NunitoSans_300Light,
    NunitoSans_300Light_Italic,
    NunitoSans_400Regular,
    NunitoSans_400Regular_Italic,
    NunitoSans_600SemiBold,
    NunitoSans_600SemiBold_Italic,
    NunitoSans_700Bold,
    NunitoSans_700Bold_Italic,
    NunitoSans_800ExtraBold,
    NunitoSans_800ExtraBold_Italic,
    NunitoSans_900Black,
    NunitoSans_900Black_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'NunitoSans_200ExtraLight' }}>
          NunitoSans_200ExtraLight
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'NunitoSans_200ExtraLight_Italic' }}>
          NunitoSans_200ExtraLight_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'NunitoSans_300Light' }}>
          NunitoSans_300Light
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'NunitoSans_300Light_Italic' }}>
          NunitoSans_300Light_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'NunitoSans_400Regular' }}>
          NunitoSans_400Regular
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'NunitoSans_400Regular_Italic' }}>
          NunitoSans_400Regular_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'NunitoSans_600SemiBold' }}>
          NunitoSans_600SemiBold
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'NunitoSans_600SemiBold_Italic' }}>
          NunitoSans_600SemiBold_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'NunitoSans_700Bold' }}>
          NunitoSans_700Bold
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'NunitoSans_700Bold_Italic' }}>
          NunitoSans_700Bold_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'NunitoSans_800ExtraBold' }}>
          NunitoSans_800ExtraBold
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'NunitoSans_800ExtraBold_Italic' }}>
          NunitoSans_800ExtraBold_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'NunitoSans_900Black' }}>
          NunitoSans_900Black
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'NunitoSans_900Black_Italic' }}>
          NunitoSans_900Black_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### NunitoSans_200ExtraLight
![NunitoSans_200ExtraLight](./NunitoSans_200ExtraLight.ttf.png)

##### NunitoSans_200ExtraLight_Italic
![NunitoSans_200ExtraLight_Italic](./NunitoSans_200ExtraLight_Italic.ttf.png)

##### NunitoSans_300Light
![NunitoSans_300Light](./NunitoSans_300Light.ttf.png)

##### NunitoSans_300Light_Italic
![NunitoSans_300Light_Italic](./NunitoSans_300Light_Italic.ttf.png)

##### NunitoSans_400Regular
![NunitoSans_400Regular](./NunitoSans_400Regular.ttf.png)

##### NunitoSans_400Regular_Italic
![NunitoSans_400Regular_Italic](./NunitoSans_400Regular_Italic.ttf.png)

##### NunitoSans_600SemiBold
![NunitoSans_600SemiBold](./NunitoSans_600SemiBold.ttf.png)

##### NunitoSans_600SemiBold_Italic
![NunitoSans_600SemiBold_Italic](./NunitoSans_600SemiBold_Italic.ttf.png)

##### NunitoSans_700Bold
![NunitoSans_700Bold](./NunitoSans_700Bold.ttf.png)

##### NunitoSans_700Bold_Italic
![NunitoSans_700Bold_Italic](./NunitoSans_700Bold_Italic.ttf.png)

##### NunitoSans_800ExtraBold
![NunitoSans_800ExtraBold](./NunitoSans_800ExtraBold.ttf.png)

##### NunitoSans_800ExtraBold_Italic
![NunitoSans_800ExtraBold_Italic](./NunitoSans_800ExtraBold_Italic.ttf.png)

##### NunitoSans_900Black
![NunitoSans_900Black](./NunitoSans_900Black.ttf.png)

##### NunitoSans_900Black_Italic
![NunitoSans_900Black_Italic](./NunitoSans_900Black_Italic.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/nunito-sans` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Nunito Sans page on Google Fonts](https://fonts.google.com/specimen/Nunito+Sans) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Nunito Sans on Google Fonts](https://fonts.google.com/specimen/Nunito+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/nunito-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/nunito-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
