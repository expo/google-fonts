# @expo-google-fonts/gentium-basic

This package lets you use the [**Gentium Basic**](https://fonts.google.com/specimen/Gentium+Basic) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Gentium Basic

![Gentium Basic](./font-family.png)

This font family contains [4 styles](#gallery).

- `GentiumBasic_Regular400`
- `GentiumBasic_Regular400_Italic`
- `GentiumBasic_Bold700`
- `GentiumBasic_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/gentium-basic expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  GentiumBasic_Regular400,
  GentiumBasic_Regular400_Italic,
  GentiumBasic_Bold700,
  GentiumBasic_Bold700_Italic,
} from '@expo-google-fonts/gentium-basic';

export default () => {
  let [fontsLoaded] = useFonts({
    GentiumBasic_Regular400,
    GentiumBasic_Regular400_Italic,
    GentiumBasic_Bold700,
    GentiumBasic_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'GentiumBasic_Regular400' }}>
          GentiumBasic_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'GentiumBasic_Regular400_Italic' }}>
          GentiumBasic_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'GentiumBasic_Bold700' }}>
          GentiumBasic_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'GentiumBasic_Bold700_Italic' }}>
          GentiumBasic_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### GentiumBasic_Regular400
![GentiumBasic_Regular400](./86bcf47467c7c966ff4e8c216451273329982a4bbf3477b33615c1e5ff916fb2.ttf.png)

##### GentiumBasic_Regular400_Italic
![GentiumBasic_Regular400_Italic](./d84eb1ad32e37c3f5e4a8eeaf077b66ec63a516eb0a631a71b3b17b0d6c43de1.ttf.png)

##### GentiumBasic_Bold700
![GentiumBasic_Bold700](./33b22faef221568e2734ae86ee972b4499a967b00f6d6ae128b1649a904044d7.ttf.png)

##### GentiumBasic_Bold700_Italic
![GentiumBasic_Bold700_Italic](./b1ea05dbd54b903a6206abbb48c0183924236546ddb457db2f97273aa1d47fcd.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Gentium Basic on Google Fonts](https://fonts.google.com/specimen/Gentium+Basic)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/gentium-basic)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/gentium-basic)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
