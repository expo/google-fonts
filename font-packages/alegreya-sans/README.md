# @expo-google-fonts/alegreya-sans

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/alegreya-sans)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/alegreya-sans)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/alegreya-sans)

This package lets you use the [**Alegreya Sans**](https://fonts.google.com/specimen/Alegreya+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Alegreya Sans

![Alegreya Sans](./font-family.png)

This font family contains [14 styles](#-gallery).

- `AlegreyaSans_100Thin`
- `AlegreyaSans_100Thin_Italic`
- `AlegreyaSans_300Light`
- `AlegreyaSans_300Light_Italic`
- `AlegreyaSans_400Regular`
- `AlegreyaSans_400Regular_Italic`
- `AlegreyaSans_500Medium`
- `AlegreyaSans_500Medium_Italic`
- `AlegreyaSans_700Bold`
- `AlegreyaSans_700Bold_Italic`
- `AlegreyaSans_800ExtraBold`
- `AlegreyaSans_800ExtraBold_Italic`
- `AlegreyaSans_900Black`
- `AlegreyaSans_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/alegreya-sans expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  AlegreyaSans_100Thin,
  AlegreyaSans_100Thin_Italic,
  AlegreyaSans_300Light,
  AlegreyaSans_300Light_Italic,
  AlegreyaSans_400Regular,
  AlegreyaSans_400Regular_Italic,
  AlegreyaSans_500Medium,
  AlegreyaSans_500Medium_Italic,
  AlegreyaSans_700Bold,
  AlegreyaSans_700Bold_Italic,
  AlegreyaSans_800ExtraBold,
  AlegreyaSans_800ExtraBold_Italic,
  AlegreyaSans_900Black,
  AlegreyaSans_900Black_Italic,
} from '@expo-google-fonts/alegreya-sans';

export default () => {
  let [fontsLoaded] = useFonts({
    AlegreyaSans_100Thin,
    AlegreyaSans_100Thin_Italic,
    AlegreyaSans_300Light,
    AlegreyaSans_300Light_Italic,
    AlegreyaSans_400Regular,
    AlegreyaSans_400Regular_Italic,
    AlegreyaSans_500Medium,
    AlegreyaSans_500Medium_Italic,
    AlegreyaSans_700Bold,
    AlegreyaSans_700Bold_Italic,
    AlegreyaSans_800ExtraBold,
    AlegreyaSans_800ExtraBold_Italic,
    AlegreyaSans_900Black,
    AlegreyaSans_900Black_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'AlegreyaSans_100Thin' }}>
          AlegreyaSans_100Thin
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AlegreyaSans_100Thin_Italic' }}>
          AlegreyaSans_100Thin_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AlegreyaSans_300Light' }}>
          AlegreyaSans_300Light
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AlegreyaSans_300Light_Italic' }}>
          AlegreyaSans_300Light_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AlegreyaSans_400Regular' }}>
          AlegreyaSans_400Regular
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AlegreyaSans_400Regular_Italic' }}>
          AlegreyaSans_400Regular_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AlegreyaSans_500Medium' }}>
          AlegreyaSans_500Medium
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AlegreyaSans_500Medium_Italic' }}>
          AlegreyaSans_500Medium_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AlegreyaSans_700Bold' }}>
          AlegreyaSans_700Bold
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AlegreyaSans_700Bold_Italic' }}>
          AlegreyaSans_700Bold_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AlegreyaSans_800ExtraBold' }}>
          AlegreyaSans_800ExtraBold
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AlegreyaSans_800ExtraBold_Italic' }}>
          AlegreyaSans_800ExtraBold_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AlegreyaSans_900Black' }}>
          AlegreyaSans_900Black
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AlegreyaSans_900Black_Italic' }}>
          AlegreyaSans_900Black_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### AlegreyaSans_100Thin
![AlegreyaSans_100Thin](./AlegreyaSans_100Thin.ttf.png)

##### AlegreyaSans_100Thin_Italic
![AlegreyaSans_100Thin_Italic](./AlegreyaSans_100Thin_Italic.ttf.png)

##### AlegreyaSans_300Light
![AlegreyaSans_300Light](./AlegreyaSans_300Light.ttf.png)

##### AlegreyaSans_300Light_Italic
![AlegreyaSans_300Light_Italic](./AlegreyaSans_300Light_Italic.ttf.png)

##### AlegreyaSans_400Regular
![AlegreyaSans_400Regular](./AlegreyaSans_400Regular.ttf.png)

##### AlegreyaSans_400Regular_Italic
![AlegreyaSans_400Regular_Italic](./AlegreyaSans_400Regular_Italic.ttf.png)

##### AlegreyaSans_500Medium
![AlegreyaSans_500Medium](./AlegreyaSans_500Medium.ttf.png)

##### AlegreyaSans_500Medium_Italic
![AlegreyaSans_500Medium_Italic](./AlegreyaSans_500Medium_Italic.ttf.png)

##### AlegreyaSans_700Bold
![AlegreyaSans_700Bold](./AlegreyaSans_700Bold.ttf.png)

##### AlegreyaSans_700Bold_Italic
![AlegreyaSans_700Bold_Italic](./AlegreyaSans_700Bold_Italic.ttf.png)

##### AlegreyaSans_800ExtraBold
![AlegreyaSans_800ExtraBold](./AlegreyaSans_800ExtraBold.ttf.png)

##### AlegreyaSans_800ExtraBold_Italic
![AlegreyaSans_800ExtraBold_Italic](./AlegreyaSans_800ExtraBold_Italic.ttf.png)

##### AlegreyaSans_900Black
![AlegreyaSans_900Black](./AlegreyaSans_900Black.ttf.png)

##### AlegreyaSans_900Black_Italic
![AlegreyaSans_900Black_Italic](./AlegreyaSans_900Black_Italic.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/alegreya-sans` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Alegreya Sans page on Google Fonts](https://fonts.google.com/specimen/Alegreya+Sans) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Alegreya Sans on Google Fonts](https://fonts.google.com/specimen/Alegreya+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/alegreya-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/alegreya-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
