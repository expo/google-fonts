# @expo-google-fonts/montserrat-subrayada

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/montserrat-subrayada)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/montserrat-subrayada)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/montserrat-subrayada)

This package lets you use the [**Montserrat Subrayada**](https://fonts.google.com/specimen/Montserrat+Subrayada) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Montserrat Subrayada

![Montserrat Subrayada](./font-family.png)

This font family contains [2 styles](#gallery).

- `MontserratSubrayada_Regular400`
- `MontserratSubrayada_Bold700`

## 🔡 Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/montserrat-subrayada expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  MontserratSubrayada_Regular400,
  MontserratSubrayada_Bold700,
} from '@expo-google-fonts/montserrat-subrayada';

export default () => {
  let [fontsLoaded] = useFonts({
    MontserratSubrayada_Regular400,
    MontserratSubrayada_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'MontserratSubrayada_Regular400' }}>
          MontserratSubrayada_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'MontserratSubrayada_Bold700' }}>
          MontserratSubrayada_Bold700
        </Text>
      </View>
    );
  }
};

```

## 📖 Gallery

##### MontserratSubrayada_Regular400
![MontserratSubrayada_Regular400](./bcf81f50b96cbae5ccbd3337f693c53bbbe2bb5717bb8637eeaf4d5dff5699c4.ttf.png)

##### MontserratSubrayada_Bold700
![MontserratSubrayada_Bold700](./6a2a4c0ee5aade485aa6bf9a1a43b1ef3fe0aa5dda27e70b0b9abe7625562124.ttf.png)


## 🖥️ Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## ⚖️ License

The `@expo-google-fonts/montserrat-subrayada` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Montserrat Subrayada page on Google Fonts](https://fonts.google.com/specimen/Montserrat+Subrayada) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Montserrat Subrayada on Google Fonts](https://fonts.google.com/specimen/Montserrat+Subrayada)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/montserrat-subrayada)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/montserrat-subrayada)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
