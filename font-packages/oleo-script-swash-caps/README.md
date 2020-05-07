# @expo-google-fonts/oleo-script-swash-caps

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/oleo-script-swash-caps)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/oleo-script-swash-caps)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/oleo-script-swash-caps)

This package lets you use the [**Oleo Script Swash Caps**](https://fonts.google.com/specimen/Oleo+Script+Swash+Caps) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Oleo Script Swash Caps

![Oleo Script Swash Caps](./font-family.png)

This font family contains [2 styles](#gallery).

- `OleoScriptSwashCaps_Regular400`
- `OleoScriptSwashCaps_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/oleo-script-swash-caps expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  OleoScriptSwashCaps_Regular400,
  OleoScriptSwashCaps_Bold700,
} from '@expo-google-fonts/oleo-script-swash-caps';

export default () => {
  let [fontsLoaded] = useFonts({
    OleoScriptSwashCaps_Regular400,
    OleoScriptSwashCaps_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'OleoScriptSwashCaps_Regular400' }}>
          OleoScriptSwashCaps_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'OleoScriptSwashCaps_Bold700' }}>
          OleoScriptSwashCaps_Bold700
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### OleoScriptSwashCaps_Regular400
![OleoScriptSwashCaps_Regular400](./9375d47eb832ce8884342c974dccc6d94746d0e57dd79232ee81a5ab8c9d36a5.ttf.png)

##### OleoScriptSwashCaps_Bold700
![OleoScriptSwashCaps_Bold700](./fefbbb389f88ec3c2fdca446b6cd4543a073c75e48b59a1ca1c1fc03ef8756b1.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/oleo-script-swash-caps` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Oleo Script Swash Caps page on Google Fonts](https://fonts.google.com/specimen/Oleo+Script+Swash+Caps) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Oleo Script Swash Caps on Google Fonts](https://fonts.google.com/specimen/Oleo+Script+Swash+Caps)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/oleo-script-swash-caps)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/oleo-script-swash-caps)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
