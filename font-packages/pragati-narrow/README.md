# @expo-google-fonts/pragati-narrow

This package lets you use the [**Pragati Narrow**](https://fonts.google.com/specimen/Pragati+Narrow) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Pragati Narrow

![Pragati Narrow](./font-family.png)

This font family contains [2 styles](#gallery).

- `PragatiNarrow_Regular400`
- `PragatiNarrow_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/pragati-narrow expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { PragatiNarrow_Regular400, PragatiNarrow_Bold700 } from '@expo-google-fonts/pragati-narrow';

export default () => {
  let [fontsLoaded] = useFonts({
    PragatiNarrow_Regular400,
    PragatiNarrow_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'PragatiNarrow_Regular400' }}>
          PragatiNarrow_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'PragatiNarrow_Bold700' }}>
          PragatiNarrow_Bold700
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### PragatiNarrow_Regular400
![PragatiNarrow_Regular400](./1778fbb91f3825af5daf5dfe6d44737ee48e6c63a95f25348b39ccb9fcda8fb6.ttf.png)

##### PragatiNarrow_Bold700
![PragatiNarrow_Bold700](./9e7b8eb47eaef49ea50a19115bddfaf35aebf2f4577f8a3b9cab531595bc97ef.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## Links

- [Pragati Narrow on Google Fonts](https://fonts.google.com/specimen/Pragati+Narrow)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/pragati-narrow)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/pragati-narrow)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
