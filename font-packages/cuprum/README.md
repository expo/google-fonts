# @expo-google-fonts/cuprum

This package lets you use the [**Cuprum**](https://fonts.google.com/specimen/Cuprum) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Cuprum

![Cuprum](./font-family.png)

This font family contains [4 styles](#gallery).

- `Cuprum_Regular400`
- `Cuprum_Regular400_Italic`
- `Cuprum_Bold700`
- `Cuprum_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/cuprum expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Cuprum_Regular400,
  Cuprum_Regular400_Italic,
  Cuprum_Bold700,
  Cuprum_Bold700_Italic,
} from '@expo-google-fonts/cuprum';

export default () => {
  let [fontsLoaded] = useFonts({
    Cuprum_Regular400,
    Cuprum_Regular400_Italic,
    Cuprum_Bold700,
    Cuprum_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Cuprum_Regular400' }}>
          Cuprum_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Cuprum_Regular400_Italic' }}>
          Cuprum_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Cuprum_Bold700' }}>
          Cuprum_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Cuprum_Bold700_Italic' }}>
          Cuprum_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Cuprum_Regular400
![Cuprum_Regular400](./bddf1f3b7162539ab2c939e699c275d83ee353437fc657257d945347dce5c66d.ttf.png)

##### Cuprum_Regular400_Italic
![Cuprum_Regular400_Italic](./27d4e15720e86dcbe0f0f3e93656c40e57203137b143f5a396d8a56e654963c8.ttf.png)

##### Cuprum_Bold700
![Cuprum_Bold700](./0a3719a13307973f16e4ebfb3980da3f7d190316e71ada51aa42650b95524c97.ttf.png)

##### Cuprum_Bold700_Italic
![Cuprum_Bold700_Italic](./9bac99436b2027f87f8c0f692398a62b76be18874fbda4ea2b56aaa99553e6b2.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## Links

- [Cuprum on Google Fonts](https://fonts.google.com/specimen/Cuprum)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/cuprum)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/cuprum)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
