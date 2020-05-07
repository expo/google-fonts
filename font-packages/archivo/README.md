# @expo-google-fonts/archivo

This package lets you use the [**Archivo**](https://fonts.google.com/specimen/Archivo) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Archivo

![Archivo](./font-family.png)

This font family contains [8 styles](#gallery).

- `Archivo_Regular400`
- `Archivo_Regular400_Italic`
- `Archivo_Medium500`
- `Archivo_Medium500_Italic`
- `Archivo_SemiBold600`
- `Archivo_SemiBold600_Italic`
- `Archivo_Bold700`
- `Archivo_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/archivo expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Archivo_Regular400,
  Archivo_Regular400_Italic,
  Archivo_Medium500,
  Archivo_Medium500_Italic,
  Archivo_SemiBold600,
  Archivo_SemiBold600_Italic,
  Archivo_Bold700,
  Archivo_Bold700_Italic,
} from '@expo-google-fonts/archivo';

export default () => {
  let [fontsLoaded] = useFonts({
    Archivo_Regular400,
    Archivo_Regular400_Italic,
    Archivo_Medium500,
    Archivo_Medium500_Italic,
    Archivo_SemiBold600,
    Archivo_SemiBold600_Italic,
    Archivo_Bold700,
    Archivo_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Archivo_Regular400' }}>
          Archivo_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Archivo_Regular400_Italic' }}>
          Archivo_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Archivo_Medium500' }}>
          Archivo_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Archivo_Medium500_Italic' }}>
          Archivo_Medium500_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Archivo_SemiBold600' }}>
          Archivo_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Archivo_SemiBold600_Italic' }}>
          Archivo_SemiBold600_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Archivo_Bold700' }}>
          Archivo_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Archivo_Bold700_Italic' }}>
          Archivo_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Archivo_Regular400
![Archivo_Regular400](./e3992a886b3891c9b073cf3e46b1c578cb31ab065cf9b5e07f6fc2a0200a495f.ttf.png)

##### Archivo_Regular400_Italic
![Archivo_Regular400_Italic](./8af059c64838f116e4c8afda7a5c344815c3fe3c2111749d7281a046087dfb8a.ttf.png)

##### Archivo_Medium500
![Archivo_Medium500](./455a61b80b447af7647cb7bbbef6de06c3c3031d0ecbb2619fa9cffa73871e76.ttf.png)

##### Archivo_Medium500_Italic
![Archivo_Medium500_Italic](./c266aeada4adba34caec3d404c7953743cf0327123506b66cde56cf556ad2ddf.ttf.png)

##### Archivo_SemiBold600
![Archivo_SemiBold600](./7ad030ef4465b1be7229c5326d24955683bea533c9646e4ed2773cd30697d031.ttf.png)

##### Archivo_SemiBold600_Italic
![Archivo_SemiBold600_Italic](./453878357ed380bea09e3661badd4636234be8794956428236bc3a166d84fc92.ttf.png)

##### Archivo_Bold700
![Archivo_Bold700](./5c37a5634c5b7802983e322dcc187d5b4bc26e238dd61828a71f184592b9032f.ttf.png)

##### Archivo_Bold700_Italic
![Archivo_Bold700_Italic](./12b65a3c8f63eb390f4acb0a6ade0ac245782113ddc2e397c216c3605fc245f8.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## Links

- [Archivo on Google Fonts](https://fonts.google.com/specimen/Archivo)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/archivo)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/archivo)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
