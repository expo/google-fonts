# @expo-google-fonts/gayathri

This package lets you use the [**Gayathri**](https://fonts.google.com/specimen/Gayathri) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Gayathri

![Gayathri](./font-family.png)

This font family contains [3 styles](#gallery).

- `Gayathri_Thin100`
- `Gayathri_Regular400`
- `Gayathri_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/gayathri expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Gayathri_Thin100,
  Gayathri_Regular400,
  Gayathri_Bold700,
} from '@expo-google-fonts/gayathri';

export default () => {
  let [fontsLoaded] = useFonts({
    Gayathri_Thin100,
    Gayathri_Regular400,
    Gayathri_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Gayathri_Thin100' }}>
          Gayathri_Thin100
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Gayathri_Regular400' }}>
          Gayathri_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Gayathri_Bold700' }}>
          Gayathri_Bold700
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Gayathri_Thin100
![Gayathri_Thin100](./6d8dba16325ef843155b024f792235ef54403fc4ce39f71ffe50c6a7cca110da.ttf.png)

##### Gayathri_Regular400
![Gayathri_Regular400](./d5538d385b6f28efddc8cc7d5e5cf0dcbe3243febfcb81ba4112a03ab5901d1e.ttf.png)

##### Gayathri_Bold700
![Gayathri_Bold700](./dac84e865cf4bf1f5f2bd54100f9b5ded81e0b2e3904ba8a3a6a992df1c13627.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## Links

- [Gayathri on Google Fonts](https://fonts.google.com/specimen/Gayathri)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/gayathri)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/gayathri)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
