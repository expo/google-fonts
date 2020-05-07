# @expo-google-fonts/bellota-text

This package lets you use the [**Bellota Text**](https://fonts.google.com/specimen/Bellota+Text) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Bellota Text

![Bellota Text](./font-family.png)

This font family contains [6 styles](#gallery).

- `BellotaText_Light300`
- `BellotaText_Light300_Italic`
- `BellotaText_Regular400`
- `BellotaText_Regular400_Italic`
- `BellotaText_Bold700`
- `BellotaText_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/bellota-text expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  BellotaText_Light300,
  BellotaText_Light300_Italic,
  BellotaText_Regular400,
  BellotaText_Regular400_Italic,
  BellotaText_Bold700,
  BellotaText_Bold700_Italic,
} from '@expo-google-fonts/bellota-text';

export default () => {
  let [fontsLoaded] = useFonts({
    BellotaText_Light300,
    BellotaText_Light300_Italic,
    BellotaText_Regular400,
    BellotaText_Regular400_Italic,
    BellotaText_Bold700,
    BellotaText_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'BellotaText_Light300' }}>
          BellotaText_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BellotaText_Light300_Italic' }}>
          BellotaText_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BellotaText_Regular400' }}>
          BellotaText_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BellotaText_Regular400_Italic' }}>
          BellotaText_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BellotaText_Bold700' }}>
          BellotaText_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BellotaText_Bold700_Italic' }}>
          BellotaText_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### BellotaText_Light300
![BellotaText_Light300](./a0643b4ed7b9e5fe0a6023e98e3c731ac5ed3dd6a93688e6d319415902455806.ttf.png)

##### BellotaText_Light300_Italic
![BellotaText_Light300_Italic](./e0b3916debc6fdfc7a7fd3129785215a68039360ca58fff2137a5855ee962138.ttf.png)

##### BellotaText_Regular400
![BellotaText_Regular400](./bd71701b5f03e11645c6c76521346bb0658b950d8e568f92dbad4c0f832775eb.ttf.png)

##### BellotaText_Regular400_Italic
![BellotaText_Regular400_Italic](./cab1408381b8c09a1322d14913d773a9ecd2af835363efced81df2db8aa5107b.ttf.png)

##### BellotaText_Bold700
![BellotaText_Bold700](./4c08136cdca5423cf6e4f79255b1d8968b3ce107c396b03445f6c49c286dd349.ttf.png)

##### BellotaText_Bold700_Italic
![BellotaText_Bold700_Italic](./ec9c1edafbe6c75409ba2200628821ee1f0dbad581d6f79db100aeb366b12ee4.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## Links

- [Bellota Text on Google Fonts](https://fonts.google.com/specimen/Bellota+Text)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/bellota-text)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/bellota-text)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
