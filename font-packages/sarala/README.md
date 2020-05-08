# @expo-google-fonts/sarala

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/sarala)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/sarala)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/sarala)

This package lets you use the [**Sarala**](https://fonts.google.com/specimen/Sarala) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Sarala

![Sarala](./font-family.png)

This font family contains [2 styles](#-gallery).

- `Sarala_Regular400`
- `Sarala_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/sarala expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Sarala_Regular400, Sarala_Bold700 } from '@expo-google-fonts/sarala';

export default () => {
  let [fontsLoaded] = useFonts({
    Sarala_Regular400,
    Sarala_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Sarala_Regular400' }}>
          Sarala_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Sarala_Bold700' }}>
          Sarala_Bold700
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Sarala_Regular400
![Sarala_Regular400](./a9d80ed2e5dae04bd639f269f2f43d7fa0b65ef816a0abb64bbcae03db7a59bb.ttf.png)

##### Sarala_Bold700
![Sarala_Bold700](./2b0699ce4a9bd9eb0f091d571c8992f4ff81d558ef3b60edd81a71a081a6420f.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/sarala` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Sarala page on Google Fonts](https://fonts.google.com/specimen/Sarala) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Sarala on Google Fonts](https://fonts.google.com/specimen/Sarala)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/sarala)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/sarala)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This entire directory, including this README, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
