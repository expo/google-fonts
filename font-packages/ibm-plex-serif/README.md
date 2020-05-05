# @expo-google-fonts/ibm-plex-serif

This package lets you use the [**IBM Plex Serif**](https://fonts.google.com/specimen/IBM+Plex+Serif) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.2

## IBM Plex Serif

![IBM Plex Serif](./font-family.png)

This font family contains [14 styles](#gallery).

- `IBMPlexSerif_Thin100`
- `IBMPlexSerif_Thin100_Italic`
- `IBMPlexSerif_ExtraLight200`
- `IBMPlexSerif_ExtraLight200_Italic`
- `IBMPlexSerif_Light300`
- `IBMPlexSerif_Light300_Italic`
- `IBMPlexSerif_Regular400`
- `IBMPlexSerif_Regular400_Italic`
- `IBMPlexSerif_Medium500`
- `IBMPlexSerif_Medium500_Italic`
- `IBMPlexSerif_SemiBold600`
- `IBMPlexSerif_SemiBold600_Italic`
- `IBMPlexSerif_Bold700`
- `IBMPlexSerif_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
yarn add @expo-google-fonts/ibm-plex-serif expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  IBMPlexSerif_Thin100,
  IBMPlexSerif_Thin100_Italic,
  IBMPlexSerif_ExtraLight200,
  IBMPlexSerif_ExtraLight200_Italic,
  IBMPlexSerif_Light300,
  IBMPlexSerif_Light300_Italic,
  IBMPlexSerif_Regular400,
  IBMPlexSerif_Regular400_Italic,
  IBMPlexSerif_Medium500,
  IBMPlexSerif_Medium500_Italic,
  IBMPlexSerif_SemiBold600,
  IBMPlexSerif_SemiBold600_Italic,
  IBMPlexSerif_Bold700,
  IBMPlexSerif_Bold700_Italic,
} from '@expo-google-fonts/ibm-plex-serif';

export default () => {
  let [fontsLoaded] = useFonts({
    IBMPlexSerif_Thin100,
    IBMPlexSerif_Thin100_Italic,
    IBMPlexSerif_ExtraLight200,
    IBMPlexSerif_ExtraLight200_Italic,
    IBMPlexSerif_Light300,
    IBMPlexSerif_Light300_Italic,
    IBMPlexSerif_Regular400,
    IBMPlexSerif_Regular400_Italic,
    IBMPlexSerif_Medium500,
    IBMPlexSerif_Medium500_Italic,
    IBMPlexSerif_SemiBold600,
    IBMPlexSerif_SemiBold600_Italic,
    IBMPlexSerif_Bold700,
    IBMPlexSerif_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexSerif_Thin100' }}>
          IBMPlexSerif_Thin100
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexSerif_Thin100_Italic' }}>
          IBMPlexSerif_Thin100_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexSerif_ExtraLight200' }}>
          IBMPlexSerif_ExtraLight200
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexSerif_ExtraLight200_Italic' }}>
          IBMPlexSerif_ExtraLight200_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexSerif_Light300' }}>
          IBMPlexSerif_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexSerif_Light300_Italic' }}>
          IBMPlexSerif_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexSerif_Regular400' }}>
          IBMPlexSerif_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexSerif_Regular400_Italic' }}>
          IBMPlexSerif_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexSerif_Medium500' }}>
          IBMPlexSerif_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexSerif_Medium500_Italic' }}>
          IBMPlexSerif_Medium500_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexSerif_SemiBold600' }}>
          IBMPlexSerif_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexSerif_SemiBold600_Italic' }}>
          IBMPlexSerif_SemiBold600_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexSerif_Bold700' }}>
          IBMPlexSerif_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexSerif_Bold700_Italic' }}>
          IBMPlexSerif_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### IBMPlexSerif_Thin100
![IBMPlexSerif_Thin100](./a7d42efee4f1a7ac97d078340d6652728fe15929c68ba6d23cb2bb12c08ade3c.ttf.png)

##### IBMPlexSerif_Thin100_Italic
![IBMPlexSerif_Thin100_Italic](./2d6348f0337897dfd4f35a24aeb41df7d2026b073c6e62091ba3d4be45deccef.ttf.png)

##### IBMPlexSerif_ExtraLight200
![IBMPlexSerif_ExtraLight200](./22d162d23ce0e5ad78699d3f15d64aee792adff19238b2d5fff9ed6e4e2aeaa6.ttf.png)

##### IBMPlexSerif_ExtraLight200_Italic
![IBMPlexSerif_ExtraLight200_Italic](./eca320d0ebf030d252c42622bd633b638607e007a1106887d72c483f4ab3703b.ttf.png)

##### IBMPlexSerif_Light300
![IBMPlexSerif_Light300](./5b62452067d16ab5b1653fe5af7e516fd1d6a727050d37060d0f83941b25ff44.ttf.png)

##### IBMPlexSerif_Light300_Italic
![IBMPlexSerif_Light300_Italic](./66bf94992c7ae7e495fcd422302ec2554955bf1ee81cc891a365b889836f3386.ttf.png)

##### IBMPlexSerif_Regular400
![IBMPlexSerif_Regular400](./69cbfef212c06c3e226a30329e377aa4501105e862a1d1c6cd3fde2b6c15507d.ttf.png)

##### IBMPlexSerif_Regular400_Italic
![IBMPlexSerif_Regular400_Italic](./454337a7189c7dcf2a8c37a8d69c51ece177de9ba36cb5133fc924e7bfd7042b.ttf.png)

##### IBMPlexSerif_Medium500
![IBMPlexSerif_Medium500](./9700f2e4399528de12a7e7ec1551047d64261256a776bcdd963c55963568f4b9.ttf.png)

##### IBMPlexSerif_Medium500_Italic
![IBMPlexSerif_Medium500_Italic](./92215eb3720b2d7e6181a7f1a7f330fc9668b05e48e1160a1d0bde3d1ebd34d9.ttf.png)

##### IBMPlexSerif_SemiBold600
![IBMPlexSerif_SemiBold600](./85939ee252119c0a4249c1d780751347047ccdc1fe552595be038544c3792788.ttf.png)

##### IBMPlexSerif_SemiBold600_Italic
![IBMPlexSerif_SemiBold600_Italic](./4373c99de7c1eefefd7971019ac15ad2bc0db7cd3f62c3013925018d0586e38c.ttf.png)

##### IBMPlexSerif_Bold700
![IBMPlexSerif_Bold700](./fe6766f5ba5906651095f3917fbfa426cf5904f0f0c7490a7b6d246dae8d60b9.ttf.png)

##### IBMPlexSerif_Bold700_Italic
![IBMPlexSerif_Bold700_Italic](./8728efc5271b4928172f32a8701ff0e2cde5210bd8277aa95cd936d723eecceb.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [IBM Plex Serif on Google Fonts](https://fonts.google.com/specimen/IBM+Plex+Serif)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/ibm-plex-serif)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/ibm-plex-serif)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
