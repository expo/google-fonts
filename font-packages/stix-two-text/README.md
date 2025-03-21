# @expo-google-fonts/stix-two-text

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/stix-two-text)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/stix-two-text)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/stix-two-text)

This package lets you use the [**STIX Two Text**](https://fonts.google.com/specimen/STIX+Two+Text) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## STIX Two Text

![STIX Two Text](./font-family.png)

This font family contains [8 styles](#-gallery).

- `STIXTwoText_400Regular`
- `STIXTwoText_500Medium`
- `STIXTwoText_600SemiBold`
- `STIXTwoText_700Bold`
- `STIXTwoText_400Regular_Italic`
- `STIXTwoText_500Medium_Italic`
- `STIXTwoText_600SemiBold_Italic`
- `STIXTwoText_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
npx expo install @expo-google-fonts/stix-two-text expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  STIXTwoText_400Regular,
  STIXTwoText_500Medium,
  STIXTwoText_600SemiBold,
  STIXTwoText_700Bold,
  STIXTwoText_400Regular_Italic,
  STIXTwoText_500Medium_Italic,
  STIXTwoText_600SemiBold_Italic,
  STIXTwoText_700Bold_Italic,
} from '@expo-google-fonts/stix-two-text';

export default () => {
  let [fontsLoaded] = useFonts({
    STIXTwoText_400Regular,
    STIXTwoText_500Medium,
    STIXTwoText_600SemiBold,
    STIXTwoText_700Bold,
    STIXTwoText_400Regular_Italic,
    STIXTwoText_500Medium_Italic,
    STIXTwoText_600SemiBold_Italic,
    STIXTwoText_700Bold_Italic,
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
            fontFamily: 'STIXTwoText_400Regular',
          }}>
          STIX Two Text Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'STIXTwoText_500Medium',
          }}>
          STIX Two Text Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'STIXTwoText_600SemiBold',
          }}>
          STIX Two Text Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'STIXTwoText_700Bold',
          }}>
          STIX Two Text Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'STIXTwoText_400Regular_Italic',
          }}>
          STIX Two Text Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'STIXTwoText_500Medium_Italic',
          }}>
          STIX Two Text Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'STIXTwoText_600SemiBold_Italic',
          }}>
          STIX Two Text Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'STIXTwoText_700Bold_Italic',
          }}>
          STIX Two Text Bold Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![STIXTwoText_400Regular](./STIXTwoText_400Regular.ttf.png)|![STIXTwoText_500Medium](./STIXTwoText_500Medium.ttf.png)|![STIXTwoText_600SemiBold](./STIXTwoText_600SemiBold.ttf.png)||
|![STIXTwoText_700Bold](./STIXTwoText_700Bold.ttf.png)|![STIXTwoText_400Regular_Italic](./STIXTwoText_400Regular_Italic.ttf.png)|![STIXTwoText_500Medium_Italic](./STIXTwoText_500Medium_Italic.ttf.png)||
|![STIXTwoText_600SemiBold_Italic](./STIXTwoText_600SemiBold_Italic.ttf.png)|![STIXTwoText_700Bold_Italic](./STIXTwoText_700Bold_Italic.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/stix-two-text` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [STIX Two Text page on Google Fonts](https://fonts.google.com/specimen/STIX+Two+Text) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [STIX Two Text on Google Fonts](https://fonts.google.com/specimen/STIX+Two+Text)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/stix-two-text)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/stix-two-text)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
