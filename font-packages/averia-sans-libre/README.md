# @expo-google-fonts/averia-sans-libre

This package lets you use the [**Averia Sans Libre**](https://fonts.google.com/specimen/Averia+Sans+Libre) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.2

## Averia Sans Libre

![Averia Sans Libre](./font-family.png)

This font family contains [6 styles](#gallery).

- `AveriaSansLibre_Light300`
- `AveriaSansLibre_Light300_Italic`
- `AveriaSansLibre_Regular400`
- `AveriaSansLibre_Regular400_Italic`
- `AveriaSansLibre_Bold700`
- `AveriaSansLibre_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
yarn add @expo-google-fonts/averia-sans-libre expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  AveriaSansLibre_Light300,
  AveriaSansLibre_Light300_Italic,
  AveriaSansLibre_Regular400,
  AveriaSansLibre_Regular400_Italic,
  AveriaSansLibre_Bold700,
  AveriaSansLibre_Bold700_Italic,
} from '@expo-google-fonts/averia-sans-libre';

export default () => {
  let [fontsLoaded] = useFonts({
    AveriaSansLibre_Light300,
    AveriaSansLibre_Light300_Italic,
    AveriaSansLibre_Regular400,
    AveriaSansLibre_Regular400_Italic,
    AveriaSansLibre_Bold700,
    AveriaSansLibre_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'AveriaSansLibre_Light300' }}>
          AveriaSansLibre_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AveriaSansLibre_Light300_Italic' }}>
          AveriaSansLibre_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AveriaSansLibre_Regular400' }}>
          AveriaSansLibre_Regular400
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'AveriaSansLibre_Regular400_Italic' }}>
          AveriaSansLibre_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AveriaSansLibre_Bold700' }}>
          AveriaSansLibre_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AveriaSansLibre_Bold700_Italic' }}>
          AveriaSansLibre_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### AveriaSansLibre_Light300
![AveriaSansLibre_Light300](./452436a08a43ba5da912a2ed71aa4e0c67ae680532317c5affb99278cedc4eb8.ttf.png)

##### AveriaSansLibre_Light300_Italic
![AveriaSansLibre_Light300_Italic](./056589edb0d0f068b768b9b9f6361bb5c4a2d53a33006288c9d089b1e6421f66.ttf.png)

##### AveriaSansLibre_Regular400
![AveriaSansLibre_Regular400](./c5f843350837023c845544f24fa59e8c71cbe7bc284c0ea4127aa872c4fcac41.ttf.png)

##### AveriaSansLibre_Regular400_Italic
![AveriaSansLibre_Regular400_Italic](./a79e7e7aecba032e6272d99a93c69868328db8d34091d1c70ccfd4a839f70489.ttf.png)

##### AveriaSansLibre_Bold700
![AveriaSansLibre_Bold700](./e8af8ea3669721038ea729e975cadce19a0032e981378e23c8377e2faf979aca.ttf.png)

##### AveriaSansLibre_Bold700_Italic
![AveriaSansLibre_Bold700_Italic](./0509fc7d0b873424deb4340ab1bafca704241ecfda08cdafeab623999d12bdfd.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Averia Sans Libre on Google Fonts](https://fonts.google.com/specimen/Averia+Sans+Libre)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/averia-sans-libre)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/averia-sans-libre)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
