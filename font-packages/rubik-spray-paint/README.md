# @expo-google-fonts/rubik-spray-paint

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/rubik-spray-paint)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/rubik-spray-paint)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/rubik-spray-paint)

This package lets you use the [**Rubik Spray Paint**](https://fonts.google.com/specimen/Rubik+Spray+Paint) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Rubik Spray Paint

![Rubik Spray Paint](./font-family.png)

This font family contains [1 style](#-gallery).

- `RubikSprayPaint_400Regular`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
npx expo install @expo-google-fonts/rubik-spray-paint expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, RubikSprayPaint_400Regular } from '@expo-google-fonts/rubik-spray-paint';

export default () => {
  let [fontsLoaded] = useFonts({
    RubikSprayPaint_400Regular,
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
            fontFamily: 'RubikSprayPaint_400Regular',
          }}>
          Rubik Spray Paint Regular
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![RubikSprayPaint_400Regular](./RubikSprayPaint_400Regular.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/rubik-spray-paint` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Rubik Spray Paint page on Google Fonts](https://fonts.google.com/specimen/Rubik+Spray+Paint) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Rubik Spray Paint on Google Fonts](https://fonts.google.com/specimen/Rubik+Spray+Paint)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/rubik-spray-paint)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/rubik-spray-paint)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
