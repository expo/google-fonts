# @expo-google-fonts/kadwa

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/kadwa)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/kadwa)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/kadwa)

This package lets you use the [**Kadwa**](https://fonts.google.com/specimen/Kadwa) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Kadwa

![Kadwa](./font-family.png)

This font family contains [2 styles](#-gallery).

- `Kadwa_Regular400`
- `Kadwa_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/kadwa expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Kadwa_Regular400, Kadwa_Bold700 } from '@expo-google-fonts/kadwa';

export default () => {
  let [fontsLoaded] = useFonts({
    Kadwa_Regular400,
    Kadwa_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Kadwa_Regular400' }}>
          Kadwa_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Kadwa_Bold700' }}>
          Kadwa_Bold700
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Kadwa_Regular400
![Kadwa_Regular400](./5b5f18ab4eefeddcf41f6246b7bdc63d6971c57ff6d628b86fc955f8eacc2e01.ttf.png)

##### Kadwa_Bold700
![Kadwa_Bold700](./2355f2b7cea1ab51a7388a8586f175dbb411a58e530e26b1f86b5a62ca80faa2.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/kadwa` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Kadwa page on Google Fonts](https://fonts.google.com/specimen/Kadwa) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Kadwa on Google Fonts](https://fonts.google.com/specimen/Kadwa)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/kadwa)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/kadwa)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This entire directory, including this README, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
