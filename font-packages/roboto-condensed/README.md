# @expo-google-fonts/roboto-condensed

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/roboto-condensed)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/roboto-condensed)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/roboto-condensed)

This package lets you use the [**Roboto Condensed**](https://fonts.google.com/specimen/Roboto+Condensed) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Roboto Condensed

![Roboto Condensed](./font-family.png)

This font family contains [6 styles](#gallery).

- `RobotoCondensed_Light300`
- `RobotoCondensed_Light300_Italic`
- `RobotoCondensed_Regular400`
- `RobotoCondensed_Regular400_Italic`
- `RobotoCondensed_Bold700`
- `RobotoCondensed_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/roboto-condensed expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  RobotoCondensed_Light300,
  RobotoCondensed_Light300_Italic,
  RobotoCondensed_Regular400,
  RobotoCondensed_Regular400_Italic,
  RobotoCondensed_Bold700,
  RobotoCondensed_Bold700_Italic,
} from '@expo-google-fonts/roboto-condensed';

export default () => {
  let [fontsLoaded] = useFonts({
    RobotoCondensed_Light300,
    RobotoCondensed_Light300_Italic,
    RobotoCondensed_Regular400,
    RobotoCondensed_Regular400_Italic,
    RobotoCondensed_Bold700,
    RobotoCondensed_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'RobotoCondensed_Light300' }}>
          RobotoCondensed_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'RobotoCondensed_Light300_Italic' }}>
          RobotoCondensed_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'RobotoCondensed_Regular400' }}>
          RobotoCondensed_Regular400
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'RobotoCondensed_Regular400_Italic' }}>
          RobotoCondensed_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'RobotoCondensed_Bold700' }}>
          RobotoCondensed_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'RobotoCondensed_Bold700_Italic' }}>
          RobotoCondensed_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### RobotoCondensed_Light300
![RobotoCondensed_Light300](./779b7e4fc31ca5d743e125a1799e9c79dc6ac4ec6e87ca8668ddbe5a157114d7.ttf.png)

##### RobotoCondensed_Light300_Italic
![RobotoCondensed_Light300_Italic](./f3f74b2f03d3c52f24982b0c06b087165cebeeff210f3db18314a3cede24d9c5.ttf.png)

##### RobotoCondensed_Regular400
![RobotoCondensed_Regular400](./a0e62c76df9173512c94484b3994d83d2b4648dadb8ea6104f3656a3b60f25bc.ttf.png)

##### RobotoCondensed_Regular400_Italic
![RobotoCondensed_Regular400_Italic](./271bd0834c4b4fdb5c9c023bbb4067bb29b29e248cd45f845be792f649d30934.ttf.png)

##### RobotoCondensed_Bold700
![RobotoCondensed_Bold700](./75a8116fe33c85a153cc824951286cc88ea5c5278e72f1ad56bf94693e9302e7.ttf.png)

##### RobotoCondensed_Bold700_Italic
![RobotoCondensed_Bold700_Italic](./6aeda8628b19ddf4671e2e3710998ea138a2cd845f54640bb82f89acad0bbaf6.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/roboto-condensed` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Roboto Condensed page on Google Fonts](https://fonts.google.com/specimen/Roboto+Condensed) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Roboto Condensed on Google Fonts](https://fonts.google.com/specimen/Roboto+Condensed)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/roboto-condensed)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/roboto-condensed)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
