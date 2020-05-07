# @expo-google-fonts/martel-sans

This package lets you use the [**Martel Sans**](https://fonts.google.com/specimen/Martel+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Martel Sans

![Martel Sans](./font-family.png)

This font family contains [7 styles](#gallery).

- `MartelSans_ExtraLight200`
- `MartelSans_Light300`
- `MartelSans_Regular400`
- `MartelSans_SemiBold600`
- `MartelSans_Bold700`
- `MartelSans_ExtraBold800`
- `MartelSans_Black900`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/martel-sans expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  MartelSans_ExtraLight200,
  MartelSans_Light300,
  MartelSans_Regular400,
  MartelSans_SemiBold600,
  MartelSans_Bold700,
  MartelSans_ExtraBold800,
  MartelSans_Black900,
} from '@expo-google-fonts/martel-sans';

export default () => {
  let [fontsLoaded] = useFonts({
    MartelSans_ExtraLight200,
    MartelSans_Light300,
    MartelSans_Regular400,
    MartelSans_SemiBold600,
    MartelSans_Bold700,
    MartelSans_ExtraBold800,
    MartelSans_Black900,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'MartelSans_ExtraLight200' }}>
          MartelSans_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'MartelSans_Light300' }}>
          MartelSans_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'MartelSans_Regular400' }}>
          MartelSans_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'MartelSans_SemiBold600' }}>
          MartelSans_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'MartelSans_Bold700' }}>
          MartelSans_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'MartelSans_ExtraBold800' }}>
          MartelSans_ExtraBold800
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'MartelSans_Black900' }}>
          MartelSans_Black900
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### MartelSans_ExtraLight200
![MartelSans_ExtraLight200](./1fc958d478da9b8b19e77c989d4fb6dbbd2f412a15b122ba72a2b11ee450907f.ttf.png)

##### MartelSans_Light300
![MartelSans_Light300](./2115f8757576a27c80ccede4ba84e8febb53a0ec9f63840ab713b4d5e848f950.ttf.png)

##### MartelSans_Regular400
![MartelSans_Regular400](./f782be9e1cecfb4c75dd0bb7a8d88dce2794738a35bf5532079d99d4d529502d.ttf.png)

##### MartelSans_SemiBold600
![MartelSans_SemiBold600](./52f4a456d3927808cd2aa64f46cd6d63f7a938b904b289f66ab69c0db2e884a7.ttf.png)

##### MartelSans_Bold700
![MartelSans_Bold700](./fcf8c1bb73f62f8c3e86ed5126daf3eb4ee130c49e70f7ebdcaf27ae635bfc1b.ttf.png)

##### MartelSans_ExtraBold800
![MartelSans_ExtraBold800](./0860874935148b1b8ffd9705d6ccef02322d3972a1bf7a38e63a65cf542e6395.ttf.png)

##### MartelSans_Black900
![MartelSans_Black900](./9145c71bcab8472ba22b19f9e4e898639945be5fed13f10cd4d399fd5eac5a83.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## Links

- [Martel Sans on Google Fonts](https://fonts.google.com/specimen/Martel+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/martel-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/martel-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
