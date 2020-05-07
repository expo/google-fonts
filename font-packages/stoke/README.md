# @expo-google-fonts/stoke

This package lets you use the [**Stoke**](https://fonts.google.com/specimen/Stoke) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Stoke

![Stoke](./font-family.png)

This font family contains [2 styles](#gallery).

- `Stoke_Light300`
- `Stoke_Regular400`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/stoke expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Stoke_Light300, Stoke_Regular400 } from '@expo-google-fonts/stoke';

export default () => {
  let [fontsLoaded] = useFonts({
    Stoke_Light300,
    Stoke_Regular400,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Stoke_Light300' }}>
          Stoke_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Stoke_Regular400' }}>
          Stoke_Regular400
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Stoke_Light300
![Stoke_Light300](./d452122746813947edb624edec6a876538c722d14e0fe96ba0524f09e515f3b6.ttf.png)

##### Stoke_Regular400
![Stoke_Regular400](./fcfdfb02835f6966c5279db21b784abc2cfe9e1ec03d8c4452852483fb8f17c1.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## Links

- [Stoke on Google Fonts](https://fonts.google.com/specimen/Stoke)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/stoke)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/stoke)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
