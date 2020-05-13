# @expo-google-fonts/chakra-petch

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/chakra-petch)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/chakra-petch)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/chakra-petch)

This package lets you use the [**Chakra Petch**](https://fonts.google.com/specimen/Chakra+Petch) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Chakra Petch

![Chakra Petch](./font-family.png)

This font family contains [10 styles](#-gallery).

- `ChakraPetch_300Light`
- `ChakraPetch_300Light_Italic`
- `ChakraPetch_400Regular`
- `ChakraPetch_400Regular_Italic`
- `ChakraPetch_500Medium`
- `ChakraPetch_500Medium_Italic`
- `ChakraPetch_600SemiBold`
- `ChakraPetch_600SemiBold_Italic`
- `ChakraPetch_700Bold`
- `ChakraPetch_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/chakra-petch expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  ChakraPetch_300Light,
  ChakraPetch_300Light_Italic,
  ChakraPetch_400Regular,
  ChakraPetch_400Regular_Italic,
  ChakraPetch_500Medium,
  ChakraPetch_500Medium_Italic,
  ChakraPetch_600SemiBold,
  ChakraPetch_600SemiBold_Italic,
  ChakraPetch_700Bold,
  ChakraPetch_700Bold_Italic,
} from '@expo-google-fonts/chakra-petch';

export default () => {
  let [fontsLoaded] = useFonts({
    ChakraPetch_300Light,
    ChakraPetch_300Light_Italic,
    ChakraPetch_400Regular,
    ChakraPetch_400Regular_Italic,
    ChakraPetch_500Medium,
    ChakraPetch_500Medium_Italic,
    ChakraPetch_600SemiBold,
    ChakraPetch_600SemiBold_Italic,
    ChakraPetch_700Bold,
    ChakraPetch_700Bold_Italic,
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
            fontFamily: 'ChakraPetch_300Light',
          }}>
          Chakra Petch Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'ChakraPetch_300Light_Italic',
          }}>
          Chakra Petch Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'ChakraPetch_400Regular',
          }}>
          Chakra Petch Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'ChakraPetch_400Regular_Italic',
          }}>
          Chakra Petch Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'ChakraPetch_500Medium',
          }}>
          Chakra Petch Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'ChakraPetch_500Medium_Italic',
          }}>
          Chakra Petch Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'ChakraPetch_600SemiBold',
          }}>
          Chakra Petch Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'ChakraPetch_600SemiBold_Italic',
          }}>
          Chakra Petch Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'ChakraPetch_700Bold',
          }}>
          Chakra Petch Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'ChakraPetch_700Bold_Italic',
          }}>
          Chakra Petch Bold Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### ChakraPetch_300Light
![ChakraPetch_300Light](./ChakraPetch_300Light.ttf.png)

##### ChakraPetch_300Light_Italic
![ChakraPetch_300Light_Italic](./ChakraPetch_300Light_Italic.ttf.png)

##### ChakraPetch_400Regular
![ChakraPetch_400Regular](./ChakraPetch_400Regular.ttf.png)

##### ChakraPetch_400Regular_Italic
![ChakraPetch_400Regular_Italic](./ChakraPetch_400Regular_Italic.ttf.png)

##### ChakraPetch_500Medium
![ChakraPetch_500Medium](./ChakraPetch_500Medium.ttf.png)

##### ChakraPetch_500Medium_Italic
![ChakraPetch_500Medium_Italic](./ChakraPetch_500Medium_Italic.ttf.png)

##### ChakraPetch_600SemiBold
![ChakraPetch_600SemiBold](./ChakraPetch_600SemiBold.ttf.png)

##### ChakraPetch_600SemiBold_Italic
![ChakraPetch_600SemiBold_Italic](./ChakraPetch_600SemiBold_Italic.ttf.png)

##### ChakraPetch_700Bold
![ChakraPetch_700Bold](./ChakraPetch_700Bold.ttf.png)

##### ChakraPetch_700Bold_Italic
![ChakraPetch_700Bold_Italic](./ChakraPetch_700Bold_Italic.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/chakra-petch` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Chakra Petch page on Google Fonts](https://fonts.google.com/specimen/Chakra+Petch) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Chakra Petch on Google Fonts](https://fonts.google.com/specimen/Chakra+Petch)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/chakra-petch)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/chakra-petch)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
