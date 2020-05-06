# @expo-google-fonts/crimson-text

This package lets you use the [**Crimson Text**](https://fonts.google.com/specimen/Crimson+Text) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Crimson Text

![Crimson Text](./font-family.png)

This font family contains [6 styles](#gallery).

- `CrimsonText_Regular400`
- `CrimsonText_Regular400_Italic`
- `CrimsonText_SemiBold600`
- `CrimsonText_SemiBold600_Italic`
- `CrimsonText_Bold700`
- `CrimsonText_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/crimson-text expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  CrimsonText_Regular400,
  CrimsonText_Regular400_Italic,
  CrimsonText_SemiBold600,
  CrimsonText_SemiBold600_Italic,
  CrimsonText_Bold700,
  CrimsonText_Bold700_Italic,
} from '@expo-google-fonts/crimson-text';

export default () => {
  let [fontsLoaded] = useFonts({
    CrimsonText_Regular400,
    CrimsonText_Regular400_Italic,
    CrimsonText_SemiBold600,
    CrimsonText_SemiBold600_Italic,
    CrimsonText_Bold700,
    CrimsonText_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'CrimsonText_Regular400' }}>
          CrimsonText_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'CrimsonText_Regular400_Italic' }}>
          CrimsonText_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'CrimsonText_SemiBold600' }}>
          CrimsonText_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'CrimsonText_SemiBold600_Italic' }}>
          CrimsonText_SemiBold600_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'CrimsonText_Bold700' }}>
          CrimsonText_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'CrimsonText_Bold700_Italic' }}>
          CrimsonText_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### CrimsonText_Regular400
![CrimsonText_Regular400](./883d56072155a485051564cd3019bb34a608ddfa0553e2295413e7a59c67bd28.ttf.png)

##### CrimsonText_Regular400_Italic
![CrimsonText_Regular400_Italic](./33025a7588fc7f2ca1b8eb2b599e2420ad23278ee100a8f7e11c881d385af57a.ttf.png)

##### CrimsonText_SemiBold600
![CrimsonText_SemiBold600](./37e75069b54a5c937eec2ba3fd3d193e3825fab2122bef2b86d86bc5ff1caab3.ttf.png)

##### CrimsonText_SemiBold600_Italic
![CrimsonText_SemiBold600_Italic](./15672e6c5d2b277c8dee2e6dcbffc17d3ba0c9a3018c446e199636f68dd227b1.ttf.png)

##### CrimsonText_Bold700
![CrimsonText_Bold700](./c6bfa338154c86d462eef6a8dc69f2443ecc35740bbdc2f2da06e7599c037cbc.ttf.png)

##### CrimsonText_Bold700_Italic
![CrimsonText_Bold700_Italic](./c79dc3f51f37e16300b571c6835d06bff022a018b65d9ea69f1f897137acc238.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Crimson Text on Google Fonts](https://fonts.google.com/specimen/Crimson+Text)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/crimson-text)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/crimson-text)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
