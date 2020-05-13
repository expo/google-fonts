# @expo-google-fonts/alegreya-sans-sc

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/alegreya-sans-sc)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/alegreya-sans-sc)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/alegreya-sans-sc)

This package lets you use the [**Alegreya Sans SC**](https://fonts.google.com/specimen/Alegreya+Sans+SC) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Alegreya Sans SC

![Alegreya Sans SC](./font-family.png)

This font family contains [14 styles](#-gallery).

- `AlegreyaSansSC_100Thin`
- `AlegreyaSansSC_100Thin_Italic`
- `AlegreyaSansSC_300Light`
- `AlegreyaSansSC_300Light_Italic`
- `AlegreyaSansSC_400Regular`
- `AlegreyaSansSC_400Regular_Italic`
- `AlegreyaSansSC_500Medium`
- `AlegreyaSansSC_500Medium_Italic`
- `AlegreyaSansSC_700Bold`
- `AlegreyaSansSC_700Bold_Italic`
- `AlegreyaSansSC_800ExtraBold`
- `AlegreyaSansSC_800ExtraBold_Italic`
- `AlegreyaSansSC_900Black`
- `AlegreyaSansSC_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/alegreya-sans-sc expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  AlegreyaSansSC_100Thin,
  AlegreyaSansSC_100Thin_Italic,
  AlegreyaSansSC_300Light,
  AlegreyaSansSC_300Light_Italic,
  AlegreyaSansSC_400Regular,
  AlegreyaSansSC_400Regular_Italic,
  AlegreyaSansSC_500Medium,
  AlegreyaSansSC_500Medium_Italic,
  AlegreyaSansSC_700Bold,
  AlegreyaSansSC_700Bold_Italic,
  AlegreyaSansSC_800ExtraBold,
  AlegreyaSansSC_800ExtraBold_Italic,
  AlegreyaSansSC_900Black,
  AlegreyaSansSC_900Black_Italic,
} from '@expo-google-fonts/alegreya-sans-sc';

export default () => {
  let [fontsLoaded] = useFonts({
    AlegreyaSansSC_100Thin,
    AlegreyaSansSC_100Thin_Italic,
    AlegreyaSansSC_300Light,
    AlegreyaSansSC_300Light_Italic,
    AlegreyaSansSC_400Regular,
    AlegreyaSansSC_400Regular_Italic,
    AlegreyaSansSC_500Medium,
    AlegreyaSansSC_500Medium_Italic,
    AlegreyaSansSC_700Bold,
    AlegreyaSansSC_700Bold_Italic,
    AlegreyaSansSC_800ExtraBold,
    AlegreyaSansSC_800ExtraBold_Italic,
    AlegreyaSansSC_900Black,
    AlegreyaSansSC_900Black_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'AlegreyaSansSC_100Thin' }}>
          AlegreyaSansSC_100Thin
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AlegreyaSansSC_100Thin_Italic' }}>
          AlegreyaSansSC_100Thin_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AlegreyaSansSC_300Light' }}>
          AlegreyaSansSC_300Light
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AlegreyaSansSC_300Light_Italic' }}>
          AlegreyaSansSC_300Light_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AlegreyaSansSC_400Regular' }}>
          AlegreyaSansSC_400Regular
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AlegreyaSansSC_400Regular_Italic' }}>
          AlegreyaSansSC_400Regular_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AlegreyaSansSC_500Medium' }}>
          AlegreyaSansSC_500Medium
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AlegreyaSansSC_500Medium_Italic' }}>
          AlegreyaSansSC_500Medium_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AlegreyaSansSC_700Bold' }}>
          AlegreyaSansSC_700Bold
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AlegreyaSansSC_700Bold_Italic' }}>
          AlegreyaSansSC_700Bold_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AlegreyaSansSC_800ExtraBold' }}>
          AlegreyaSansSC_800ExtraBold
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'AlegreyaSansSC_800ExtraBold_Italic' }}>
          AlegreyaSansSC_800ExtraBold_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AlegreyaSansSC_900Black' }}>
          AlegreyaSansSC_900Black
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AlegreyaSansSC_900Black_Italic' }}>
          AlegreyaSansSC_900Black_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### AlegreyaSansSC_100Thin
![AlegreyaSansSC_100Thin](./AlegreyaSansSC_100Thin.ttf.png)

##### AlegreyaSansSC_100Thin_Italic
![AlegreyaSansSC_100Thin_Italic](./AlegreyaSansSC_100Thin_Italic.ttf.png)

##### AlegreyaSansSC_300Light
![AlegreyaSansSC_300Light](./AlegreyaSansSC_300Light.ttf.png)

##### AlegreyaSansSC_300Light_Italic
![AlegreyaSansSC_300Light_Italic](./AlegreyaSansSC_300Light_Italic.ttf.png)

##### AlegreyaSansSC_400Regular
![AlegreyaSansSC_400Regular](./AlegreyaSansSC_400Regular.ttf.png)

##### AlegreyaSansSC_400Regular_Italic
![AlegreyaSansSC_400Regular_Italic](./AlegreyaSansSC_400Regular_Italic.ttf.png)

##### AlegreyaSansSC_500Medium
![AlegreyaSansSC_500Medium](./AlegreyaSansSC_500Medium.ttf.png)

##### AlegreyaSansSC_500Medium_Italic
![AlegreyaSansSC_500Medium_Italic](./AlegreyaSansSC_500Medium_Italic.ttf.png)

##### AlegreyaSansSC_700Bold
![AlegreyaSansSC_700Bold](./AlegreyaSansSC_700Bold.ttf.png)

##### AlegreyaSansSC_700Bold_Italic
![AlegreyaSansSC_700Bold_Italic](./AlegreyaSansSC_700Bold_Italic.ttf.png)

##### AlegreyaSansSC_800ExtraBold
![AlegreyaSansSC_800ExtraBold](./AlegreyaSansSC_800ExtraBold.ttf.png)

##### AlegreyaSansSC_800ExtraBold_Italic
![AlegreyaSansSC_800ExtraBold_Italic](./AlegreyaSansSC_800ExtraBold_Italic.ttf.png)

##### AlegreyaSansSC_900Black
![AlegreyaSansSC_900Black](./AlegreyaSansSC_900Black.ttf.png)

##### AlegreyaSansSC_900Black_Italic
![AlegreyaSansSC_900Black_Italic](./AlegreyaSansSC_900Black_Italic.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/alegreya-sans-sc` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Alegreya Sans SC page on Google Fonts](https://fonts.google.com/specimen/Alegreya+Sans+SC) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Alegreya Sans SC on Google Fonts](https://fonts.google.com/specimen/Alegreya+Sans+SC)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/alegreya-sans-sc)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/alegreya-sans-sc)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
