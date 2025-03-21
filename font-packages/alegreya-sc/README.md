# @expo-google-fonts/alegreya-sc

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/alegreya-sc)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/alegreya-sc)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/alegreya-sc)

This package lets you use the [**Alegreya SC**](https://fonts.google.com/specimen/Alegreya+SC) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Alegreya SC

![Alegreya SC](./font-family.png)

This font family contains [10 styles](#-gallery).

- `AlegreyaSC_400Regular`
- `AlegreyaSC_400Regular_Italic`
- `AlegreyaSC_500Medium`
- `AlegreyaSC_500Medium_Italic`
- `AlegreyaSC_700Bold`
- `AlegreyaSC_700Bold_Italic`
- `AlegreyaSC_800ExtraBold`
- `AlegreyaSC_800ExtraBold_Italic`
- `AlegreyaSC_900Black`
- `AlegreyaSC_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
npx expo install @expo-google-fonts/alegreya-sc expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  AlegreyaSC_400Regular,
  AlegreyaSC_400Regular_Italic,
  AlegreyaSC_500Medium,
  AlegreyaSC_500Medium_Italic,
  AlegreyaSC_700Bold,
  AlegreyaSC_700Bold_Italic,
  AlegreyaSC_800ExtraBold,
  AlegreyaSC_800ExtraBold_Italic,
  AlegreyaSC_900Black,
  AlegreyaSC_900Black_Italic,
} from '@expo-google-fonts/alegreya-sc';

export default () => {
  let [fontsLoaded] = useFonts({
    AlegreyaSC_400Regular,
    AlegreyaSC_400Regular_Italic,
    AlegreyaSC_500Medium,
    AlegreyaSC_500Medium_Italic,
    AlegreyaSC_700Bold,
    AlegreyaSC_700Bold_Italic,
    AlegreyaSC_800ExtraBold,
    AlegreyaSC_800ExtraBold_Italic,
    AlegreyaSC_900Black,
    AlegreyaSC_900Black_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AlegreyaSC_400Regular',
          }}>
          Alegreya SC Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AlegreyaSC_400Regular_Italic',
          }}>
          Alegreya SC Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AlegreyaSC_500Medium',
          }}>
          Alegreya SC Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AlegreyaSC_500Medium_Italic',
          }}>
          Alegreya SC Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AlegreyaSC_700Bold',
          }}>
          Alegreya SC Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AlegreyaSC_700Bold_Italic',
          }}>
          Alegreya SC Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AlegreyaSC_800ExtraBold',
          }}>
          Alegreya SC Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AlegreyaSC_800ExtraBold_Italic',
          }}>
          Alegreya SC Extra Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AlegreyaSC_900Black',
          }}>
          Alegreya SC Black
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AlegreyaSC_900Black_Italic',
          }}>
          Alegreya SC Black Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![AlegreyaSC_400Regular](./AlegreyaSC_400Regular.ttf.png)|![AlegreyaSC_400Regular_Italic](./AlegreyaSC_400Regular_Italic.ttf.png)|![AlegreyaSC_500Medium](./AlegreyaSC_500Medium.ttf.png)||
|![AlegreyaSC_500Medium_Italic](./AlegreyaSC_500Medium_Italic.ttf.png)|![AlegreyaSC_700Bold](./AlegreyaSC_700Bold.ttf.png)|![AlegreyaSC_700Bold_Italic](./AlegreyaSC_700Bold_Italic.ttf.png)||
|![AlegreyaSC_800ExtraBold](./AlegreyaSC_800ExtraBold.ttf.png)|![AlegreyaSC_800ExtraBold_Italic](./AlegreyaSC_800ExtraBold_Italic.ttf.png)|![AlegreyaSC_900Black](./AlegreyaSC_900Black.ttf.png)||
|![AlegreyaSC_900Black_Italic](./AlegreyaSC_900Black_Italic.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/alegreya-sc` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Alegreya SC page on Google Fonts](https://fonts.google.com/specimen/Alegreya+SC) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Alegreya SC on Google Fonts](https://fonts.google.com/specimen/Alegreya+SC)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/alegreya-sc)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/alegreya-sc)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
