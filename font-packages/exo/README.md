# @expo-google-fonts/exo

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/exo)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/exo)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/exo)

This package lets you use the [**Exo**](https://fonts.google.com/specimen/Exo) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Exo

![Exo](./font-family.png)

This font family contains [18 styles](#-gallery).

- `Exo_100Thin`
- `Exo_200ExtraLight`
- `Exo_300Light`
- `Exo_400Regular`
- `Exo_500Medium`
- `Exo_600SemiBold`
- `Exo_700Bold`
- `Exo_800ExtraBold`
- `Exo_900Black`
- `Exo_100Thin_Italic`
- `Exo_200ExtraLight_Italic`
- `Exo_300Light_Italic`
- `Exo_400Regular_Italic`
- `Exo_500Medium_Italic`
- `Exo_600SemiBold_Italic`
- `Exo_700Bold_Italic`
- `Exo_800ExtraBold_Italic`
- `Exo_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/exo expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  Exo_100Thin,
  Exo_200ExtraLight,
  Exo_300Light,
  Exo_400Regular,
  Exo_500Medium,
  Exo_600SemiBold,
  Exo_700Bold,
  Exo_800ExtraBold,
  Exo_900Black,
  Exo_100Thin_Italic,
  Exo_200ExtraLight_Italic,
  Exo_300Light_Italic,
  Exo_400Regular_Italic,
  Exo_500Medium_Italic,
  Exo_600SemiBold_Italic,
  Exo_700Bold_Italic,
  Exo_800ExtraBold_Italic,
  Exo_900Black_Italic,
} from '@expo-google-fonts/exo';

export default () => {
  let [fontsLoaded] = useFonts({
    Exo_100Thin,
    Exo_200ExtraLight,
    Exo_300Light,
    Exo_400Regular,
    Exo_500Medium,
    Exo_600SemiBold,
    Exo_700Bold,
    Exo_800ExtraBold,
    Exo_900Black,
    Exo_100Thin_Italic,
    Exo_200ExtraLight_Italic,
    Exo_300Light_Italic,
    Exo_400Regular_Italic,
    Exo_500Medium_Italic,
    Exo_600SemiBold_Italic,
    Exo_700Bold_Italic,
    Exo_800ExtraBold_Italic,
    Exo_900Black_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Exo_100Thin' }}>Exo_100Thin</Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Exo_200ExtraLight' }}>
          Exo_200ExtraLight
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Exo_300Light' }}>Exo_300Light</Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Exo_400Regular' }}>
          Exo_400Regular
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Exo_500Medium' }}>
          Exo_500Medium
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Exo_600SemiBold' }}>
          Exo_600SemiBold
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Exo_700Bold' }}>Exo_700Bold</Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Exo_800ExtraBold' }}>
          Exo_800ExtraBold
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Exo_900Black' }}>Exo_900Black</Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Exo_100Thin_Italic' }}>
          Exo_100Thin_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Exo_200ExtraLight_Italic' }}>
          Exo_200ExtraLight_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Exo_300Light_Italic' }}>
          Exo_300Light_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Exo_400Regular_Italic' }}>
          Exo_400Regular_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Exo_500Medium_Italic' }}>
          Exo_500Medium_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Exo_600SemiBold_Italic' }}>
          Exo_600SemiBold_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Exo_700Bold_Italic' }}>
          Exo_700Bold_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Exo_800ExtraBold_Italic' }}>
          Exo_800ExtraBold_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Exo_900Black_Italic' }}>
          Exo_900Black_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Exo_100Thin
![Exo_100Thin](./Exo_100Thin.ttf.png)

##### Exo_200ExtraLight
![Exo_200ExtraLight](./Exo_200ExtraLight.ttf.png)

##### Exo_300Light
![Exo_300Light](./Exo_300Light.ttf.png)

##### Exo_400Regular
![Exo_400Regular](./Exo_400Regular.ttf.png)

##### Exo_500Medium
![Exo_500Medium](./Exo_500Medium.ttf.png)

##### Exo_600SemiBold
![Exo_600SemiBold](./Exo_600SemiBold.ttf.png)

##### Exo_700Bold
![Exo_700Bold](./Exo_700Bold.ttf.png)

##### Exo_800ExtraBold
![Exo_800ExtraBold](./Exo_800ExtraBold.ttf.png)

##### Exo_900Black
![Exo_900Black](./Exo_900Black.ttf.png)

##### Exo_100Thin_Italic
![Exo_100Thin_Italic](./Exo_100Thin_Italic.ttf.png)

##### Exo_200ExtraLight_Italic
![Exo_200ExtraLight_Italic](./Exo_200ExtraLight_Italic.ttf.png)

##### Exo_300Light_Italic
![Exo_300Light_Italic](./Exo_300Light_Italic.ttf.png)

##### Exo_400Regular_Italic
![Exo_400Regular_Italic](./Exo_400Regular_Italic.ttf.png)

##### Exo_500Medium_Italic
![Exo_500Medium_Italic](./Exo_500Medium_Italic.ttf.png)

##### Exo_600SemiBold_Italic
![Exo_600SemiBold_Italic](./Exo_600SemiBold_Italic.ttf.png)

##### Exo_700Bold_Italic
![Exo_700Bold_Italic](./Exo_700Bold_Italic.ttf.png)

##### Exo_800ExtraBold_Italic
![Exo_800ExtraBold_Italic](./Exo_800ExtraBold_Italic.ttf.png)

##### Exo_900Black_Italic
![Exo_900Black_Italic](./Exo_900Black_Italic.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/exo` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Exo page on Google Fonts](https://fonts.google.com/specimen/Exo) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Exo on Google Fonts](https://fonts.google.com/specimen/Exo)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/exo)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/exo)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
