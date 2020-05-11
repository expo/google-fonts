# @expo-google-fonts/cherry-cream-soda

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/cherry-cream-soda)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/cherry-cream-soda)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/cherry-cream-soda)

This package lets you use the [**Cherry Cream Soda**](https://fonts.google.com/specimen/Cherry+Cream+Soda) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Cherry Cream Soda

![Cherry Cream Soda](./font-family.png)

This font family contains [1 style](#-gallery).

- `CherryCreamSoda_Regular400`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/cherry-cream-soda expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { CherryCreamSoda_Regular400, useFonts } from '@expo-google-fonts/cherry-cream-soda';

export default () => {
  let [fontsLoaded] = useFonts({
    CherryCreamSoda_Regular400,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'CherryCreamSoda_Regular400' }}>
          CherryCreamSoda_Regular400
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### CherryCreamSoda_Regular400
![CherryCreamSoda_Regular400](./47e79c87ca78a16fd9c841454bdf7ea5a7485a08a7f78baddcc83bbc2f510729.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/cherry-cream-soda` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Cherry Cream Soda page on Google Fonts](https://fonts.google.com/specimen/Cherry+Cream+Soda) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Cherry Cream Soda on Google Fonts](https://fonts.google.com/specimen/Cherry+Cream+Soda)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/cherry-cream-soda)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/cherry-cream-soda)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
