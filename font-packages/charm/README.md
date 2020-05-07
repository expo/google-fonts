# @expo-google-fonts/charm

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/charm)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/charm)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/charm)

This package lets you use the [**Charm**](https://fonts.google.com/specimen/Charm) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Charm

![Charm](./font-family.png)

This font family contains [2 styles](#gallery).

- `Charm_Regular400`
- `Charm_Bold700`

## 🔡 Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/charm expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Charm_Regular400, Charm_Bold700 } from '@expo-google-fonts/charm';

export default () => {
  let [fontsLoaded] = useFonts({
    Charm_Regular400,
    Charm_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Charm_Regular400' }}>
          Charm_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Charm_Bold700' }}>
          Charm_Bold700
        </Text>
      </View>
    );
  }
};

```

## 📖 Gallery

##### Charm_Regular400
![Charm_Regular400](./b2803aafd875584dcb262e1eddd8dc7542342f4d2d76ac5f9b06c6b5e2bae18f.ttf.png)

##### Charm_Bold700
![Charm_Bold700](./40f34767fa59a87e641da20236b9966135321cb03c1ed68d88a6234d432d2604.ttf.png)


## 🖥️ Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## ⚖️ License

The `@expo-google-fonts/charm` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Charm page on Google Fonts](https://fonts.google.com/specimen/Charm) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Charm on Google Fonts](https://fonts.google.com/specimen/Charm)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/charm)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/charm)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
