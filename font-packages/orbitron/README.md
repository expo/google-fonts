# @expo-google-fonts/orbitron

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/orbitron)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/orbitron)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/orbitron)

This package lets you use the [**Orbitron**](https://fonts.google.com/specimen/Orbitron) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Orbitron

![Orbitron](./font-family.png)

This font family contains [4 styles](#gallery).

- `Orbitron_Regular400`
- `Orbitron_Medium500`
- `Orbitron_Bold700`
- `Orbitron_Black900`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/orbitron expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Orbitron_Regular400,
  Orbitron_Medium500,
  Orbitron_Bold700,
  Orbitron_Black900,
} from '@expo-google-fonts/orbitron';

export default () => {
  let [fontsLoaded] = useFonts({
    Orbitron_Regular400,
    Orbitron_Medium500,
    Orbitron_Bold700,
    Orbitron_Black900,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Orbitron_Regular400' }}>
          Orbitron_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Orbitron_Medium500' }}>
          Orbitron_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Orbitron_Bold700' }}>
          Orbitron_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Orbitron_Black900' }}>
          Orbitron_Black900
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Orbitron_Regular400
![Orbitron_Regular400](./92d53d02a61d246157ee4ac3e2668206b546a454087e25530c48918b92bfce32.ttf.png)

##### Orbitron_Medium500
![Orbitron_Medium500](./1c174158cbedc3b8323f310b03842e82bc72c5fd2d5327ee80671506188cc6cc.ttf.png)

##### Orbitron_Bold700
![Orbitron_Bold700](./baf59aa462bae9b1e738270aa2b901810db31788e78774046146f315809bc1a6.ttf.png)

##### Orbitron_Black900
![Orbitron_Black900](./3853d940cd873a88dc5e24918311876228ef02a6216677db898c41efccc598f0.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/orbitron` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Orbitron page on Google Fonts](https://fonts.google.com/specimen/Orbitron) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Orbitron on Google Fonts](https://fonts.google.com/specimen/Orbitron)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/orbitron)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/orbitron)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
