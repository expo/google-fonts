# @expo-google-fonts/sniglet

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/sniglet)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/sniglet)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/sniglet)

This package lets you use the [**Sniglet**](https://fonts.google.com/specimen/Sniglet) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Sniglet

![Sniglet](./font-family.png)

This font family contains [2 styles](#-gallery).

- `Sniglet_Regular400`
- `Sniglet_ExtraBold800`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/sniglet expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Sniglet_Regular400, Sniglet_ExtraBold800 } from '@expo-google-fonts/sniglet';

export default () => {
  let [fontsLoaded] = useFonts({
    Sniglet_Regular400,
    Sniglet_ExtraBold800,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Sniglet_Regular400' }}>
          Sniglet_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Sniglet_ExtraBold800' }}>
          Sniglet_ExtraBold800
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Sniglet_Regular400
![Sniglet_Regular400](./106613b6566b3b9a696c095879b31e220c39d60c508dae033b5f3680aaa48732.ttf.png)

##### Sniglet_ExtraBold800
![Sniglet_ExtraBold800](./439b0ab4a7a1d2a1328cc8eb52d10167325643f9c15a187d3d7650cdd15cf896.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/sniglet` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Sniglet page on Google Fonts](https://fonts.google.com/specimen/Sniglet) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Sniglet on Google Fonts](https://fonts.google.com/specimen/Sniglet)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/sniglet)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/sniglet)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This entire directory, including this README, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
