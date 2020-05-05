# @expo-google-fonts/titillium-web

This package lets you use the [**Titillium Web**](https://fonts.google.com/specimen/Titillium+Web) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.2

## Titillium Web

![Titillium Web](./font-family.png)

This font family contains [11 styles](#gallery).

- `TitilliumWeb_ExtraLight200`
- `TitilliumWeb_ExtraLight200_Italic`
- `TitilliumWeb_Light300`
- `TitilliumWeb_Light300_Italic`
- `TitilliumWeb_Regular400`
- `TitilliumWeb_Regular400_Italic`
- `TitilliumWeb_SemiBold600`
- `TitilliumWeb_SemiBold600_Italic`
- `TitilliumWeb_Bold700`
- `TitilliumWeb_Bold700_Italic`
- `TitilliumWeb_Black900`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
yarn add @expo-google-fonts/titillium-web expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  TitilliumWeb_ExtraLight200,
  TitilliumWeb_ExtraLight200_Italic,
  TitilliumWeb_Light300,
  TitilliumWeb_Light300_Italic,
  TitilliumWeb_Regular400,
  TitilliumWeb_Regular400_Italic,
  TitilliumWeb_SemiBold600,
  TitilliumWeb_SemiBold600_Italic,
  TitilliumWeb_Bold700,
  TitilliumWeb_Bold700_Italic,
  TitilliumWeb_Black900,
} from '@expo-google-fonts/titillium-web';

export default () => {
  let [fontsLoaded] = useFonts({
    TitilliumWeb_ExtraLight200,
    TitilliumWeb_ExtraLight200_Italic,
    TitilliumWeb_Light300,
    TitilliumWeb_Light300_Italic,
    TitilliumWeb_Regular400,
    TitilliumWeb_Regular400_Italic,
    TitilliumWeb_SemiBold600,
    TitilliumWeb_SemiBold600_Italic,
    TitilliumWeb_Bold700,
    TitilliumWeb_Bold700_Italic,
    TitilliumWeb_Black900,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'TitilliumWeb_ExtraLight200' }}>
          TitilliumWeb_ExtraLight200
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'TitilliumWeb_ExtraLight200_Italic' }}>
          TitilliumWeb_ExtraLight200_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'TitilliumWeb_Light300' }}>
          TitilliumWeb_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'TitilliumWeb_Light300_Italic' }}>
          TitilliumWeb_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'TitilliumWeb_Regular400' }}>
          TitilliumWeb_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'TitilliumWeb_Regular400_Italic' }}>
          TitilliumWeb_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'TitilliumWeb_SemiBold600' }}>
          TitilliumWeb_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'TitilliumWeb_SemiBold600_Italic' }}>
          TitilliumWeb_SemiBold600_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'TitilliumWeb_Bold700' }}>
          TitilliumWeb_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'TitilliumWeb_Bold700_Italic' }}>
          TitilliumWeb_Bold700_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'TitilliumWeb_Black900' }}>
          TitilliumWeb_Black900
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### TitilliumWeb_ExtraLight200
![TitilliumWeb_ExtraLight200](./19772d85bad94abc7a76fc4a64849db9638e9c00e7e0dadd3872a583b74adbe3.ttf.png)

##### TitilliumWeb_ExtraLight200_Italic
![TitilliumWeb_ExtraLight200_Italic](./a39917b8e97b8433f10dae6821885f087662f1062a48a366f2f2f287c74ecb6c.ttf.png)

##### TitilliumWeb_Light300
![TitilliumWeb_Light300](./7da8c41b9e519ca322471fc0bdcc15a795423fb09cbf094a6787142218ec1c9e.ttf.png)

##### TitilliumWeb_Light300_Italic
![TitilliumWeb_Light300_Italic](./f0ff528b94c980870d32757c89817e790c119bea9de817d49334ba1a3f04ef9a.ttf.png)

##### TitilliumWeb_Regular400
![TitilliumWeb_Regular400](./ba6d03922294b498b3e57ace654a9ee6715c33081cd24c1df56004ca64ba6e66.ttf.png)

##### TitilliumWeb_Regular400_Italic
![TitilliumWeb_Regular400_Italic](./d785f9b4efc2d7f91a854d36930d269122091296e25a46cc7931e2cd717567d5.ttf.png)

##### TitilliumWeb_SemiBold600
![TitilliumWeb_SemiBold600](./8c9b215a8e543b09a087afec74223fb41a74378deb5b83c8457630d03f0b5fc3.ttf.png)

##### TitilliumWeb_SemiBold600_Italic
![TitilliumWeb_SemiBold600_Italic](./e43b57298b99f0da6d3bfa3de072e88a539bf01332c5232e8e29dfee09cb859c.ttf.png)

##### TitilliumWeb_Bold700
![TitilliumWeb_Bold700](./10e8c4207611b16691202b4204f5fbd4e27aa240a45dbb2ca91f63f341056539.ttf.png)

##### TitilliumWeb_Bold700_Italic
![TitilliumWeb_Bold700_Italic](./dd23a74d333a9694f51ccb193efddc8d38e892053eca374882e2fe4043181559.ttf.png)

##### TitilliumWeb_Black900
![TitilliumWeb_Black900](./742f14f17526638a90f24974f5222008c89acabe2c636deb378ba287cf381bc6.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Titillium Web on Google Fonts](https://fonts.google.com/specimen/Titillium+Web)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/titillium-web)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/titillium-web)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
