# @expo-google-fonts/cousine

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/cousine)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/cousine)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/cousine)

This package lets you use the [**Cousine**](https://fonts.google.com/specimen/Cousine) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Cousine

![Cousine](./font-family.png)

This font family contains [4 styles](#-gallery).

- `Cousine_400Regular`
- `Cousine_400Regular_Italic`
- `Cousine_700Bold`
- `Cousine_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
npx expo install @expo-google-fonts/cousine expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Cousine_400Regular,
  Cousine_400Regular_Italic,
  Cousine_700Bold,
  Cousine_700Bold_Italic,
} from '@expo-google-fonts/cousine';

export default () => {
  let [fontsLoaded] = useFonts({
    Cousine_400Regular,
    Cousine_400Regular_Italic,
    Cousine_700Bold,
    Cousine_700Bold_Italic,
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
            fontFamily: 'Cousine_400Regular',
          }}>
          Cousine Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Cousine_400Regular_Italic',
          }}>
          Cousine Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Cousine_700Bold',
          }}>
          Cousine Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Cousine_700Bold_Italic',
          }}>
          Cousine Bold Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![Cousine_400Regular](./Cousine_400Regular.ttf.png)|![Cousine_400Regular_Italic](./Cousine_400Regular_Italic.ttf.png)|![Cousine_700Bold](./Cousine_700Bold.ttf.png)||
|![Cousine_700Bold_Italic](./Cousine_700Bold_Italic.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/cousine` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Cousine page on Google Fonts](https://fonts.google.com/specimen/Cousine) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Cousine on Google Fonts](https://fonts.google.com/specimen/Cousine)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/cousine)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/cousine)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
