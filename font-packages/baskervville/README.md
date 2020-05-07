# @expo-google-fonts/baskervville

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/baskervville)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/baskervville)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/baskervville)

This package lets you use the [**Baskervville**](https://fonts.google.com/specimen/Baskervville) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Baskervville

![Baskervville](./font-family.png)

This font family contains [2 styles](#gallery).

- `Baskervville_Regular400`
- `Baskervville_Regular400_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/baskervville expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Baskervville_Regular400,
  Baskervville_Regular400_Italic,
} from '@expo-google-fonts/baskervville';

export default () => {
  let [fontsLoaded] = useFonts({
    Baskervville_Regular400,
    Baskervville_Regular400_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Baskervville_Regular400' }}>
          Baskervville_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Baskervville_Regular400_Italic' }}>
          Baskervville_Regular400_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Baskervville_Regular400
![Baskervville_Regular400](./4f83292ed3ada742c822e6b55c57b05a68a0d27b136b872ed2cb3edaf2dd778c.ttf.png)

##### Baskervville_Regular400_Italic
![Baskervville_Regular400_Italic](./fdcacb6cacae51af7ce0b4bc57b4400feedcf38a9e21898b144205607cd15185.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/baskervville` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Baskervville page on Google Fonts](https://fonts.google.com/specimen/Baskervville) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Baskervville on Google Fonts](https://fonts.google.com/specimen/Baskervville)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/baskervville)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/baskervville)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
