# @expo-google-fonts/arapey

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/arapey)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/arapey)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/arapey)

This package lets you use the [**Arapey**](https://fonts.google.com/specimen/Arapey) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Arapey

![Arapey](./font-family.png)

This font family contains [2 styles](#-gallery).

- `Arapey_Regular400`
- `Arapey_Regular400_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/arapey expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Arapey_Regular400, Arapey_Regular400_Italic } from '@expo-google-fonts/arapey';

export default () => {
  let [fontsLoaded] = useFonts({
    Arapey_Regular400,
    Arapey_Regular400_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Arapey_Regular400' }}>
          Arapey_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Arapey_Regular400_Italic' }}>
          Arapey_Regular400_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Arapey_Regular400
![Arapey_Regular400](./8d4786e233fac8fe0069ba6efaa828eb2fffef7b1d21a92a6d4f250ae9710415.ttf.png)

##### Arapey_Regular400_Italic
![Arapey_Regular400_Italic](./10f469eeecd1cca95a1881d5fbd920abff25911a343caf957f7b2a0e3d4de390.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/arapey` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Arapey page on Google Fonts](https://fonts.google.com/specimen/Arapey) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Arapey on Google Fonts](https://fonts.google.com/specimen/Arapey)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/arapey)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/arapey)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This entire directory, including this README, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
