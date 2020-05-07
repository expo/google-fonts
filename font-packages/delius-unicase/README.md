# @expo-google-fonts/delius-unicase

This package lets you use the [**Delius Unicase**](https://fonts.google.com/specimen/Delius+Unicase) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Delius Unicase

![Delius Unicase](./font-family.png)

This font family contains [2 styles](#gallery).

- `DeliusUnicase_Regular400`
- `DeliusUnicase_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/delius-unicase expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { DeliusUnicase_Regular400, DeliusUnicase_Bold700 } from '@expo-google-fonts/delius-unicase';

export default () => {
  let [fontsLoaded] = useFonts({
    DeliusUnicase_Regular400,
    DeliusUnicase_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'DeliusUnicase_Regular400' }}>
          DeliusUnicase_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'DeliusUnicase_Bold700' }}>
          DeliusUnicase_Bold700
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### DeliusUnicase_Regular400
![DeliusUnicase_Regular400](./3bbebd3cb94431156468b1ce457ee032a1f68d964171655b60f5ae2ecf0243cb.ttf.png)

##### DeliusUnicase_Bold700
![DeliusUnicase_Bold700](./f761b09efebd15e0a91eabc186d565aec75f56f2b04f9cb1ed1f72d91be340ef.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## Links

- [Delius Unicase on Google Fonts](https://fonts.google.com/specimen/Delius+Unicase)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/delius-unicase)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/delius-unicase)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
