# @expo-google-fonts/mitr

This package lets you use the [**Mitr**](https://fonts.google.com/specimen/Mitr) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.2

## Mitr

![Mitr](./font-family.png)

This font family contains [6 styles](#gallery).

- `Mitr_ExtraLight200`
- `Mitr_Light300`
- `Mitr_Regular400`
- `Mitr_Medium500`
- `Mitr_SemiBold600`
- `Mitr_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
yarn add @expo-google-fonts/mitr expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Mitr_ExtraLight200,
  Mitr_Light300,
  Mitr_Regular400,
  Mitr_Medium500,
  Mitr_SemiBold600,
  Mitr_Bold700,
} from '@expo-google-fonts/mitr';

export default () => {
  let [fontsLoaded] = useFonts({
    Mitr_ExtraLight200,
    Mitr_Light300,
    Mitr_Regular400,
    Mitr_Medium500,
    Mitr_SemiBold600,
    Mitr_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Mitr_ExtraLight200' }}>
          Mitr_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Mitr_Light300' }}>
          Mitr_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Mitr_Regular400' }}>
          Mitr_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Mitr_Medium500' }}>
          Mitr_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Mitr_SemiBold600' }}>
          Mitr_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Mitr_Bold700' }}>Mitr_Bold700</Text>
      </View>
    );
  }
};

```

## Gallery

##### Mitr_ExtraLight200
![Mitr_ExtraLight200](./13aa43b100ddb2ef3f574409c44d5148c96e262d636030f3546632afc8bec583.ttf.png)

##### Mitr_Light300
![Mitr_Light300](./42aaeccd38bab09aab541391f181cf90544aed031b28240064e03a597d820aff.ttf.png)

##### Mitr_Regular400
![Mitr_Regular400](./51a838bb86fd8ae3d3b14861b86090b8e590d6cec16828f5ff85cc29e255fdd4.ttf.png)

##### Mitr_Medium500
![Mitr_Medium500](./a8c0fad121eecc6ccc06afd51a3ed04b7632eabd778490fabe406d010d492fb6.ttf.png)

##### Mitr_SemiBold600
![Mitr_SemiBold600](./f52b41a04226fd35e8292e4074e68cf18847a0b362d1ea41038b6cebcad7953c.ttf.png)

##### Mitr_Bold700
![Mitr_Bold700](./302b58d18b982fe3745338cc6ea87e5868436d2ba962262423c98cac9d161c47.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Mitr on Google Fonts](https://fonts.google.com/specimen/Mitr)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/mitr)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/mitr)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
