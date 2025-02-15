# @expo-google-fonts/reddit-sans

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/reddit-sans)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/reddit-sans)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/reddit-sans)

This package lets you use the [**Reddit Sans**](https://fonts.google.com/specimen/Reddit+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Reddit Sans

![Reddit Sans](./font-family.png)

This font family contains [16 styles](#-gallery).

- `RedditSans_200ExtraLight`
- `RedditSans_300Light`
- `RedditSans_400Regular`
- `RedditSans_500Medium`
- `RedditSans_600SemiBold`
- `RedditSans_700Bold`
- `RedditSans_800ExtraBold`
- `RedditSans_900Black`
- `RedditSans_200ExtraLight_Italic`
- `RedditSans_300Light_Italic`
- `RedditSans_400Regular_Italic`
- `RedditSans_500Medium_Italic`
- `RedditSans_600SemiBold_Italic`
- `RedditSans_700Bold_Italic`
- `RedditSans_800ExtraBold_Italic`
- `RedditSans_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/reddit-sans expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  RedditSans_200ExtraLight,
  RedditSans_300Light,
  RedditSans_400Regular,
  RedditSans_500Medium,
  RedditSans_600SemiBold,
  RedditSans_700Bold,
  RedditSans_800ExtraBold,
  RedditSans_900Black,
  RedditSans_200ExtraLight_Italic,
  RedditSans_300Light_Italic,
  RedditSans_400Regular_Italic,
  RedditSans_500Medium_Italic,
  RedditSans_600SemiBold_Italic,
  RedditSans_700Bold_Italic,
  RedditSans_800ExtraBold_Italic,
  RedditSans_900Black_Italic,
} from '@expo-google-fonts/reddit-sans';

export default () => {
  let [fontsLoaded] = useFonts({
    RedditSans_200ExtraLight,
    RedditSans_300Light,
    RedditSans_400Regular,
    RedditSans_500Medium,
    RedditSans_600SemiBold,
    RedditSans_700Bold,
    RedditSans_800ExtraBold,
    RedditSans_900Black,
    RedditSans_200ExtraLight_Italic,
    RedditSans_300Light_Italic,
    RedditSans_400Regular_Italic,
    RedditSans_500Medium_Italic,
    RedditSans_600SemiBold_Italic,
    RedditSans_700Bold_Italic,
    RedditSans_800ExtraBold_Italic,
    RedditSans_900Black_Italic,
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
            fontFamily: 'RedditSans_200ExtraLight',
          }}>
          Reddit Sans Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'RedditSans_300Light',
          }}>
          Reddit Sans Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'RedditSans_400Regular',
          }}>
          Reddit Sans Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'RedditSans_500Medium',
          }}>
          Reddit Sans Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'RedditSans_600SemiBold',
          }}>
          Reddit Sans Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'RedditSans_700Bold',
          }}>
          Reddit Sans Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'RedditSans_800ExtraBold',
          }}>
          Reddit Sans Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'RedditSans_900Black',
          }}>
          Reddit Sans Black
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'RedditSans_200ExtraLight_Italic',
          }}>
          Reddit Sans Extra Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'RedditSans_300Light_Italic',
          }}>
          Reddit Sans Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'RedditSans_400Regular_Italic',
          }}>
          Reddit Sans Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'RedditSans_500Medium_Italic',
          }}>
          Reddit Sans Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'RedditSans_600SemiBold_Italic',
          }}>
          Reddit Sans Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'RedditSans_700Bold_Italic',
          }}>
          Reddit Sans Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'RedditSans_800ExtraBold_Italic',
          }}>
          Reddit Sans Extra Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'RedditSans_900Black_Italic',
          }}>
          Reddit Sans Black Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![RedditSans_200ExtraLight](./RedditSans_200ExtraLight.ttf.png)|![RedditSans_300Light](./RedditSans_300Light.ttf.png)|![RedditSans_400Regular](./RedditSans_400Regular.ttf.png)||
|![RedditSans_500Medium](./RedditSans_500Medium.ttf.png)|![RedditSans_600SemiBold](./RedditSans_600SemiBold.ttf.png)|![RedditSans_700Bold](./RedditSans_700Bold.ttf.png)||
|![RedditSans_800ExtraBold](./RedditSans_800ExtraBold.ttf.png)|![RedditSans_900Black](./RedditSans_900Black.ttf.png)|![RedditSans_200ExtraLight_Italic](./RedditSans_200ExtraLight_Italic.ttf.png)||
|![RedditSans_300Light_Italic](./RedditSans_300Light_Italic.ttf.png)|![RedditSans_400Regular_Italic](./RedditSans_400Regular_Italic.ttf.png)|![RedditSans_500Medium_Italic](./RedditSans_500Medium_Italic.ttf.png)||
|![RedditSans_600SemiBold_Italic](./RedditSans_600SemiBold_Italic.ttf.png)|![RedditSans_700Bold_Italic](./RedditSans_700Bold_Italic.ttf.png)|![RedditSans_800ExtraBold_Italic](./RedditSans_800ExtraBold_Italic.ttf.png)||
|![RedditSans_900Black_Italic](./RedditSans_900Black_Italic.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/reddit-sans` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Reddit Sans page on Google Fonts](https://fonts.google.com/specimen/Reddit+Sans) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Reddit Sans on Google Fonts](https://fonts.google.com/specimen/Reddit+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/reddit-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/reddit-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
