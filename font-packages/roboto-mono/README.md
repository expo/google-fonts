# @expo-google-fonts/roboto-mono

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/roboto-mono)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/roboto-mono)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/roboto-mono)

This package lets you use the [**Roboto Mono**](https://fonts.google.com/specimen/Roboto+Mono) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Roboto Mono

![Roboto Mono](./font-family.png)

This font family contains [10 styles](#-gallery).

- `RobotoMono_Thin100`
- `RobotoMono_Thin100_Italic`
- `RobotoMono_Light300`
- `RobotoMono_Light300_Italic`
- `RobotoMono_Regular400`
- `RobotoMono_Regular400_Italic`
- `RobotoMono_Medium500`
- `RobotoMono_Medium500_Italic`
- `RobotoMono_Bold700`
- `RobotoMono_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/roboto-mono expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  RobotoMono_Thin100,
  RobotoMono_Thin100_Italic,
  RobotoMono_Light300,
  RobotoMono_Light300_Italic,
  RobotoMono_Regular400,
  RobotoMono_Regular400_Italic,
  RobotoMono_Medium500,
  RobotoMono_Medium500_Italic,
  RobotoMono_Bold700,
  RobotoMono_Bold700_Italic,
} from '@expo-google-fonts/roboto-mono';

export default () => {
  let [fontsLoaded] = useFonts({
    RobotoMono_Thin100,
    RobotoMono_Thin100_Italic,
    RobotoMono_Light300,
    RobotoMono_Light300_Italic,
    RobotoMono_Regular400,
    RobotoMono_Regular400_Italic,
    RobotoMono_Medium500,
    RobotoMono_Medium500_Italic,
    RobotoMono_Bold700,
    RobotoMono_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'RobotoMono_Thin100' }}>
          RobotoMono_Thin100
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'RobotoMono_Thin100_Italic' }}>
          RobotoMono_Thin100_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'RobotoMono_Light300' }}>
          RobotoMono_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'RobotoMono_Light300_Italic' }}>
          RobotoMono_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'RobotoMono_Regular400' }}>
          RobotoMono_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'RobotoMono_Regular400_Italic' }}>
          RobotoMono_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'RobotoMono_Medium500' }}>
          RobotoMono_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'RobotoMono_Medium500_Italic' }}>
          RobotoMono_Medium500_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'RobotoMono_Bold700' }}>
          RobotoMono_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'RobotoMono_Bold700_Italic' }}>
          RobotoMono_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### RobotoMono_Thin100
![RobotoMono_Thin100](./e54b0e2606a8e454e92c100a791d8b71811e052d42fe4b32896466b8f0be270e.ttf.png)

##### RobotoMono_Thin100_Italic
![RobotoMono_Thin100_Italic](./3eb07be624d5ec7a80bcb5820f19fe80008142212ee07cfa2bf9a5b70f94a6a2.ttf.png)

##### RobotoMono_Light300
![RobotoMono_Light300](./1c9d3d466aab107a76ff737ac20edaf327476dbcc6c6dbd77a00094bc79727bf.ttf.png)

##### RobotoMono_Light300_Italic
![RobotoMono_Light300_Italic](./0f72866d63d772ac722b847dfc2d8ae72d00e74b69f1b95374f6f71677a4cb05.ttf.png)

##### RobotoMono_Regular400
![RobotoMono_Regular400](./e3284818a33743fb9474240557d229c111ec2b584d14913e5d32af7b74487458.ttf.png)

##### RobotoMono_Regular400_Italic
![RobotoMono_Regular400_Italic](./3d8daba697d824c67c2e385af80a546763d80262785e6adb2e681c714782fb22.ttf.png)

##### RobotoMono_Medium500
![RobotoMono_Medium500](./c451bd3c919883e57c526d2c2bfa3e98dfd63411a8b872828891908ba78ad63b.ttf.png)

##### RobotoMono_Medium500_Italic
![RobotoMono_Medium500_Italic](./e78535fb7ee0b0f96d74454e5c73e28c62d48423449a97f0d749ec7c920fa921.ttf.png)

##### RobotoMono_Bold700
![RobotoMono_Bold700](./107b5dac259223182470928048382c0cef0d4b668d0775ac03c0a44c847ea2c7.ttf.png)

##### RobotoMono_Bold700_Italic
![RobotoMono_Bold700_Italic](./6551cac967c818689406cd0ca591d8a251a88cbff6790b5ea3c0e3aa2f541668.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/roboto-mono` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Roboto Mono page on Google Fonts](https://fonts.google.com/specimen/Roboto+Mono) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Roboto Mono on Google Fonts](https://fonts.google.com/specimen/Roboto+Mono)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/roboto-mono)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/roboto-mono)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This entire directory, including this README, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
