# @expo-google-fonts/spartan

This package lets you use the [**Spartan**](https://fonts.google.com/specimen/Spartan) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Spartan

![Spartan](./font-family.png)

This font family contains [9 styles](#gallery).

- `Spartan_Thin100`
- `Spartan_ExtraLight200`
- `Spartan_Light300`
- `Spartan_Regular400`
- `Spartan_Medium500`
- `Spartan_SemiBold600`
- `Spartan_Bold700`
- `Spartan_ExtraBold800`
- `Spartan_Black900`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/spartan expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Spartan_Thin100,
  Spartan_ExtraLight200,
  Spartan_Light300,
  Spartan_Regular400,
  Spartan_Medium500,
  Spartan_SemiBold600,
  Spartan_Bold700,
  Spartan_ExtraBold800,
  Spartan_Black900,
} from '@expo-google-fonts/spartan';

export default () => {
  let [fontsLoaded] = useFonts({
    Spartan_Thin100,
    Spartan_ExtraLight200,
    Spartan_Light300,
    Spartan_Regular400,
    Spartan_Medium500,
    Spartan_SemiBold600,
    Spartan_Bold700,
    Spartan_ExtraBold800,
    Spartan_Black900,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Spartan_Thin100' }}>
          Spartan_Thin100
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Spartan_ExtraLight200' }}>
          Spartan_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Spartan_Light300' }}>
          Spartan_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Spartan_Regular400' }}>
          Spartan_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Spartan_Medium500' }}>
          Spartan_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Spartan_SemiBold600' }}>
          Spartan_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Spartan_Bold700' }}>
          Spartan_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Spartan_ExtraBold800' }}>
          Spartan_ExtraBold800
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Spartan_Black900' }}>
          Spartan_Black900
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Spartan_Thin100
![Spartan_Thin100](./4869cf7b66d0abcfafa64d169a39a8d60f681ae939db8334f68920cadb32601d.ttf.png)

##### Spartan_ExtraLight200
![Spartan_ExtraLight200](./46bd04dc18fcff69cd6119022da0ed080ab1f747a043ae642cd1f09687377059.ttf.png)

##### Spartan_Light300
![Spartan_Light300](./8b99bb8f62db78d7bce20b083bd51aa4f624f859741f6d6cb1377c1b4e8849d3.ttf.png)

##### Spartan_Regular400
![Spartan_Regular400](./de5f4b08f5a84e557927cdef6b4a25c339dd1d76a2011f735151de162d44a19f.ttf.png)

##### Spartan_Medium500
![Spartan_Medium500](./d105bc50e2051f3f0a3e4ffd1bc4e0dc3d766607e557c3b6f1f26795a57176b5.ttf.png)

##### Spartan_SemiBold600
![Spartan_SemiBold600](./039cfc4f464367e72a155853e5a73a28674cb54d69def7e8a9e0079070d7f515.ttf.png)

##### Spartan_Bold700
![Spartan_Bold700](./322f9c7edf2eb6257b5f37642d91307f821dff6cc6d4ee33d4629189b43b164f.ttf.png)

##### Spartan_ExtraBold800
![Spartan_ExtraBold800](./60bd60c81e7531c33b4e0734ea135bd549841147edb59355003ac9b01c5dcfdb.ttf.png)

##### Spartan_Black900
![Spartan_Black900](./4fa2cc56e1f8204b4487730ab9ea24620b0649fe9ccd37048feebd3230c02cad.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Spartan on Google Fonts](https://fonts.google.com/specimen/Spartan)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/spartan)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/spartan)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
