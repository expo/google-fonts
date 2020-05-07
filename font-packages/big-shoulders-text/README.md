# @expo-google-fonts/big-shoulders-text

This package lets you use the [**Big Shoulders Text**](https://fonts.google.com/specimen/Big+Shoulders+Text) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Big Shoulders Text

![Big Shoulders Text](./font-family.png)

This font family contains [8 styles](#gallery).

- `BigShouldersText_Thin100`
- `BigShouldersText_Light300`
- `BigShouldersText_Regular400`
- `BigShouldersText_Medium500`
- `BigShouldersText_SemiBold600`
- `BigShouldersText_Bold700`
- `BigShouldersText_ExtraBold800`
- `BigShouldersText_Black900`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/big-shoulders-text expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  BigShouldersText_Thin100,
  BigShouldersText_Light300,
  BigShouldersText_Regular400,
  BigShouldersText_Medium500,
  BigShouldersText_SemiBold600,
  BigShouldersText_Bold700,
  BigShouldersText_ExtraBold800,
  BigShouldersText_Black900,
} from '@expo-google-fonts/big-shoulders-text';

export default () => {
  let [fontsLoaded] = useFonts({
    BigShouldersText_Thin100,
    BigShouldersText_Light300,
    BigShouldersText_Regular400,
    BigShouldersText_Medium500,
    BigShouldersText_SemiBold600,
    BigShouldersText_Bold700,
    BigShouldersText_ExtraBold800,
    BigShouldersText_Black900,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'BigShouldersText_Thin100' }}>
          BigShouldersText_Thin100
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BigShouldersText_Light300' }}>
          BigShouldersText_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BigShouldersText_Regular400' }}>
          BigShouldersText_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BigShouldersText_Medium500' }}>
          BigShouldersText_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BigShouldersText_SemiBold600' }}>
          BigShouldersText_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BigShouldersText_Bold700' }}>
          BigShouldersText_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BigShouldersText_ExtraBold800' }}>
          BigShouldersText_ExtraBold800
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BigShouldersText_Black900' }}>
          BigShouldersText_Black900
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### BigShouldersText_Thin100
![BigShouldersText_Thin100](./627d92b7b60e71b44920b0badb4fab35e76dc999346110b16b5503642b274d9c.ttf.png)

##### BigShouldersText_Light300
![BigShouldersText_Light300](./8aef88ac2024c3940f399eee0642162cf1880de4b3072c385da26169385aaff9.ttf.png)

##### BigShouldersText_Regular400
![BigShouldersText_Regular400](./3b28c250237404079c092e1f0bbe96a9877935f854758b23d0c596474d2dc0a9.ttf.png)

##### BigShouldersText_Medium500
![BigShouldersText_Medium500](./ceadafc7d9e2a44c734bb0219be7688bb6f03e1d0788f1a6fdaff25989c7c821.ttf.png)

##### BigShouldersText_SemiBold600
![BigShouldersText_SemiBold600](./891fff63a87492e0329b1ad1261d5d60e1e276099f63a26b28497f66fddb1e58.ttf.png)

##### BigShouldersText_Bold700
![BigShouldersText_Bold700](./089e74d0e80e3f820d20c2dadb61e35e88025df110b9bfdf6878dd0c88300f35.ttf.png)

##### BigShouldersText_ExtraBold800
![BigShouldersText_ExtraBold800](./c3090bbff39b913daac1ce49ed0afcd52cba93db2e114faba5840a983ff222f0.ttf.png)

##### BigShouldersText_Black900
![BigShouldersText_Black900](./6a6e0bec5c1e7d0a62882e4f6be1b781665211f69d499f61aa439ad6bb097e60.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## Links

- [Big Shoulders Text on Google Fonts](https://fonts.google.com/specimen/Big+Shoulders+Text)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/big-shoulders-text)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/big-shoulders-text)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
