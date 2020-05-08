# @expo-google-fonts/blinker

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/blinker)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/blinker)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/blinker)

This package lets you use the [**Blinker**](https://fonts.google.com/specimen/Blinker) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Blinker

![Blinker](./font-family.png)

This font family contains [8 styles](#-gallery).

- `Blinker_Thin100`
- `Blinker_ExtraLight200`
- `Blinker_Light300`
- `Blinker_Regular400`
- `Blinker_SemiBold600`
- `Blinker_Bold700`
- `Blinker_ExtraBold800`
- `Blinker_Black900`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/blinker expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Blinker_Thin100,
  Blinker_ExtraLight200,
  Blinker_Light300,
  Blinker_Regular400,
  Blinker_SemiBold600,
  Blinker_Bold700,
  Blinker_ExtraBold800,
  Blinker_Black900,
} from '@expo-google-fonts/blinker';

export default () => {
  let [fontsLoaded] = useFonts({
    Blinker_Thin100,
    Blinker_ExtraLight200,
    Blinker_Light300,
    Blinker_Regular400,
    Blinker_SemiBold600,
    Blinker_Bold700,
    Blinker_ExtraBold800,
    Blinker_Black900,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Blinker_Thin100' }}>
          Blinker_Thin100
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Blinker_ExtraLight200' }}>
          Blinker_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Blinker_Light300' }}>
          Blinker_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Blinker_Regular400' }}>
          Blinker_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Blinker_SemiBold600' }}>
          Blinker_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Blinker_Bold700' }}>
          Blinker_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Blinker_ExtraBold800' }}>
          Blinker_ExtraBold800
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Blinker_Black900' }}>
          Blinker_Black900
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Blinker_Thin100
![Blinker_Thin100](./7c240948a3fc8d5d8689c3a63f7f8ebc6306f7c85e807823569843f0f54195f9.ttf.png)

##### Blinker_ExtraLight200
![Blinker_ExtraLight200](./2a79a8324609cc2b3bcdaec6541902337b886042ed55c471dbb6f257c65b280f.ttf.png)

##### Blinker_Light300
![Blinker_Light300](./3dd96a764325a06a02dcd84be7a03f3a2f2b6808e40d63328015690bf81f6c96.ttf.png)

##### Blinker_Regular400
![Blinker_Regular400](./51b0da89566f911a7458b35be7b50dd97cb0ac23dff1eeb067b4d64a79911f3c.ttf.png)

##### Blinker_SemiBold600
![Blinker_SemiBold600](./a51856bff19a13b746d4d2d4b3ebb07157b40df14a94c526837c9e5586337f01.ttf.png)

##### Blinker_Bold700
![Blinker_Bold700](./6eba9015f99f6f510f713d65f3f324ba543c2e9d3bc5eac9cbdd446b738eda1f.ttf.png)

##### Blinker_ExtraBold800
![Blinker_ExtraBold800](./d898f7f6b1fb3ed914d6dfaa20bc29b0f94d293822df46b2a78b5759f2637549.ttf.png)

##### Blinker_Black900
![Blinker_Black900](./1d02003dcc4ca64b3de96560fffcdd9e05125270589caabebc0da78d05d0f61e.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/blinker` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Blinker page on Google Fonts](https://fonts.google.com/specimen/Blinker) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Blinker on Google Fonts](https://fonts.google.com/specimen/Blinker)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/blinker)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/blinker)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This entire directory, including this README, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
