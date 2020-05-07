# @expo-google-fonts/work-sans

This package lets you use the [**Work Sans**](https://fonts.google.com/specimen/Work+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Work Sans

![Work Sans](./font-family.png)

This font family contains [9 styles](#gallery).

- `WorkSans_Thin100`
- `WorkSans_ExtraLight200`
- `WorkSans_Light300`
- `WorkSans_Regular400`
- `WorkSans_Medium500`
- `WorkSans_SemiBold600`
- `WorkSans_Bold700`
- `WorkSans_ExtraBold800`
- `WorkSans_Black900`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/work-sans expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  WorkSans_Thin100,
  WorkSans_ExtraLight200,
  WorkSans_Light300,
  WorkSans_Regular400,
  WorkSans_Medium500,
  WorkSans_SemiBold600,
  WorkSans_Bold700,
  WorkSans_ExtraBold800,
  WorkSans_Black900,
} from '@expo-google-fonts/work-sans';

export default () => {
  let [fontsLoaded] = useFonts({
    WorkSans_Thin100,
    WorkSans_ExtraLight200,
    WorkSans_Light300,
    WorkSans_Regular400,
    WorkSans_Medium500,
    WorkSans_SemiBold600,
    WorkSans_Bold700,
    WorkSans_ExtraBold800,
    WorkSans_Black900,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'WorkSans_Thin100' }}>
          WorkSans_Thin100
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'WorkSans_ExtraLight200' }}>
          WorkSans_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'WorkSans_Light300' }}>
          WorkSans_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'WorkSans_Regular400' }}>
          WorkSans_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'WorkSans_Medium500' }}>
          WorkSans_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'WorkSans_SemiBold600' }}>
          WorkSans_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'WorkSans_Bold700' }}>
          WorkSans_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'WorkSans_ExtraBold800' }}>
          WorkSans_ExtraBold800
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'WorkSans_Black900' }}>
          WorkSans_Black900
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### WorkSans_Thin100
![WorkSans_Thin100](./54ff7c3cb9bfd181e1d18d089ab9bba3059dd6f49d35bfde19c23e0920ec6f2c.ttf.png)

##### WorkSans_ExtraLight200
![WorkSans_ExtraLight200](./1fa02ec2601b669a35f4c2d946f2e52353bcf619ad2a080c8786f607f013359c.ttf.png)

##### WorkSans_Light300
![WorkSans_Light300](./63d2d7d98c9844e182c80865616936a3c0e95d9c9b7097e09401ccc07723afa7.ttf.png)

##### WorkSans_Regular400
![WorkSans_Regular400](./cf9e214b6a140d6d260a7a91283acecf80168bd0b46628222447e9b5e01300a2.ttf.png)

##### WorkSans_Medium500
![WorkSans_Medium500](./1ca28e13541a38be971563ecc74ed68ad07134d3ea3afe92a9c120783868b69d.ttf.png)

##### WorkSans_SemiBold600
![WorkSans_SemiBold600](./a7415d89db9339059ee631263f3cd47af702c172d1b020fa359df0e5a4930e6b.ttf.png)

##### WorkSans_Bold700
![WorkSans_Bold700](./d41209fc541bdf9f9bac4659e46565edc93459f6c6f7213015af82b7d3e7e00b.ttf.png)

##### WorkSans_ExtraBold800
![WorkSans_ExtraBold800](./c9cca774aabfe453b9c2759953dedeb20f16d6eb28c0ba7690a170580c338d72.ttf.png)

##### WorkSans_Black900
![WorkSans_Black900](./7cdc1c327ea835b192ef17b0f0bff1a16fc58f8ab00bc318b41912f4758b2905.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## Links

- [Work Sans on Google Fonts](https://fonts.google.com/specimen/Work+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/work-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/work-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
