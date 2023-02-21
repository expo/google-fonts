# @expo-google-fonts/gluten

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/gluten)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/gluten)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/gluten)

This package lets you use the [**Gluten**](https://fonts.google.com/specimen/Gluten) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Gluten

![Gluten](./font-family.png)

This font family contains [9 styles](#-gallery).

- `Gluten_100Thin`
- `Gluten_200ExtraLight`
- `Gluten_300Light`
- `Gluten_400Regular`
- `Gluten_500Medium`
- `Gluten_600SemiBold`
- `Gluten_700Bold`
- `Gluten_800ExtraBold`
- `Gluten_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/gluten expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Gluten_100Thin,
  Gluten_200ExtraLight,
  Gluten_300Light,
  Gluten_400Regular,
  Gluten_500Medium,
  Gluten_600SemiBold,
  Gluten_700Bold,
  Gluten_800ExtraBold,
  Gluten_900Black,
} from '@expo-google-fonts/gluten';

export default () => {
  let [fontsLoaded] = useFonts({
    Gluten_100Thin,
    Gluten_200ExtraLight,
    Gluten_300Light,
    Gluten_400Regular,
    Gluten_500Medium,
    Gluten_600SemiBold,
    Gluten_700Bold,
    Gluten_800ExtraBold,
    Gluten_900Black,
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
            fontFamily: 'Gluten_100Thin',
          }}>
          Gluten Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Gluten_200ExtraLight',
          }}>
          Gluten Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Gluten_300Light',
          }}>
          Gluten Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Gluten_400Regular',
          }}>
          Gluten Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Gluten_500Medium',
          }}>
          Gluten Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Gluten_600SemiBold',
          }}>
          Gluten Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Gluten_700Bold',
          }}>
          Gluten Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Gluten_800ExtraBold',
          }}>
          Gluten Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Gluten_900Black',
          }}>
          Gluten Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![Gluten_100Thin](./Gluten_100Thin.ttf.png)|![Gluten_200ExtraLight](./Gluten_200ExtraLight.ttf.png)|![Gluten_300Light](./Gluten_300Light.ttf.png)||
|![Gluten_400Regular](./Gluten_400Regular.ttf.png)|![Gluten_500Medium](./Gluten_500Medium.ttf.png)|![Gluten_600SemiBold](./Gluten_600SemiBold.ttf.png)||
|![Gluten_700Bold](./Gluten_700Bold.ttf.png)|![Gluten_800ExtraBold](./Gluten_800ExtraBold.ttf.png)|![Gluten_900Black](./Gluten_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/gluten` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Gluten page on Google Fonts](https://fonts.google.com/specimen/Gluten) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Gluten on Google Fonts](https://fonts.google.com/specimen/Gluten)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/gluten)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/gluten)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
