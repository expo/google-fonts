# @expo-google-fonts/mukta-vaani

This package lets you use the [**Mukta Vaani**](https://fonts.google.com/specimen/Mukta+Vaani) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Mukta Vaani

![Mukta Vaani](./font-family.png)

This font family contains [7 styles](#gallery).

- `MuktaVaani_ExtraLight200`
- `MuktaVaani_Light300`
- `MuktaVaani_Regular400`
- `MuktaVaani_Medium500`
- `MuktaVaani_SemiBold600`
- `MuktaVaani_Bold700`
- `MuktaVaani_ExtraBold800`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/mukta-vaani expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  MuktaVaani_ExtraLight200,
  MuktaVaani_Light300,
  MuktaVaani_Regular400,
  MuktaVaani_Medium500,
  MuktaVaani_SemiBold600,
  MuktaVaani_Bold700,
  MuktaVaani_ExtraBold800,
} from '@expo-google-fonts/mukta-vaani';

export default () => {
  let [fontsLoaded] = useFonts({
    MuktaVaani_ExtraLight200,
    MuktaVaani_Light300,
    MuktaVaani_Regular400,
    MuktaVaani_Medium500,
    MuktaVaani_SemiBold600,
    MuktaVaani_Bold700,
    MuktaVaani_ExtraBold800,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'MuktaVaani_ExtraLight200' }}>
          MuktaVaani_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'MuktaVaani_Light300' }}>
          MuktaVaani_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'MuktaVaani_Regular400' }}>
          MuktaVaani_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'MuktaVaani_Medium500' }}>
          MuktaVaani_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'MuktaVaani_SemiBold600' }}>
          MuktaVaani_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'MuktaVaani_Bold700' }}>
          MuktaVaani_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'MuktaVaani_ExtraBold800' }}>
          MuktaVaani_ExtraBold800
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### MuktaVaani_ExtraLight200
![MuktaVaani_ExtraLight200](./29b1cbb5d158be22b06c5c6af360d55da720b6c8a7b9b218dd184cbfc2a97885.ttf.png)

##### MuktaVaani_Light300
![MuktaVaani_Light300](./b273ecb298d23bd198fdcf92d8137f3bb392abc1843e055c814580f254f3a4d2.ttf.png)

##### MuktaVaani_Regular400
![MuktaVaani_Regular400](./89cee2e2edc87643ff46594bc56da0b32e9f4fd9acb8b87979dda5d4da2bccb6.ttf.png)

##### MuktaVaani_Medium500
![MuktaVaani_Medium500](./5da49257aaa42ad92f5abf8235b58834033471554455112dea55a3a00761f1c0.ttf.png)

##### MuktaVaani_SemiBold600
![MuktaVaani_SemiBold600](./7f14d4f17f14c4106a7fe56a9e591a9ef7d89e8dee221d5b4d359cac2667f138.ttf.png)

##### MuktaVaani_Bold700
![MuktaVaani_Bold700](./6e1e0572586f30b3b9b794997b0b26cc725d41d3348eda988662d14d1fdc89b4.ttf.png)

##### MuktaVaani_ExtraBold800
![MuktaVaani_ExtraBold800](./09f9de8c00ef147925056cf61c1d7e324b50fd29b1fe15c95500c506ddd79aeb.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Mukta Vaani on Google Fonts](https://fonts.google.com/specimen/Mukta+Vaani)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/mukta-vaani)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/mukta-vaani)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
