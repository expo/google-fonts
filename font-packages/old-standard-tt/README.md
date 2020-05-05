# @expo-google-fonts/old-standard-tt

This package lets you use the [**Old Standard TT**](https://fonts.google.com/specimen/Old+Standard+TT) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.2

## Old Standard TT

![Old Standard TT](./font-family.png)

This font family contains [3 styles](#gallery).

- `OldStandardTT_Regular400`
- `OldStandardTT_Regular400_Italic`
- `OldStandardTT_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
yarn add @expo-google-fonts/old-standard-tt expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  OldStandardTT_Regular400,
  OldStandardTT_Regular400_Italic,
  OldStandardTT_Bold700,
} from '@expo-google-fonts/old-standard-tt';

export default () => {
  let [fontsLoaded] = useFonts({
    OldStandardTT_Regular400,
    OldStandardTT_Regular400_Italic,
    OldStandardTT_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'OldStandardTT_Regular400' }}>
          OldStandardTT_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'OldStandardTT_Regular400_Italic' }}>
          OldStandardTT_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'OldStandardTT_Bold700' }}>
          OldStandardTT_Bold700
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### OldStandardTT_Regular400
![OldStandardTT_Regular400](./0fc6378f19416dfb6ed096305aeb6abee213fa26cbab142c18d51d02e9eeb452.ttf.png)

##### OldStandardTT_Regular400_Italic
![OldStandardTT_Regular400_Italic](./9510de290956127c311e2965471c31d5c34905c6172d5b9af444bf336c9d956d.ttf.png)

##### OldStandardTT_Bold700
![OldStandardTT_Bold700](./235d7e3e4dfc767cd24f3c17574e5fffc001f69a5af3942f47726c123762776a.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Old Standard TT on Google Fonts](https://fonts.google.com/specimen/Old+Standard+TT)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/old-standard-tt)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/old-standard-tt)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
