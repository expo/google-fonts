# @expo-google-fonts/source-code-pro

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/source-code-pro)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/source-code-pro)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/source-code-pro)

This package lets you use the [**Source Code Pro**](https://fonts.google.com/specimen/Source+Code+Pro) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Source Code Pro

![Source Code Pro](./font-family.png)

This font family contains [7 styles](#-gallery).

- `SourceCodePro_ExtraLight200`
- `SourceCodePro_Light300`
- `SourceCodePro_Regular400`
- `SourceCodePro_Medium500`
- `SourceCodePro_SemiBold600`
- `SourceCodePro_Bold700`
- `SourceCodePro_Black900`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/source-code-pro expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  SourceCodePro_ExtraLight200,
  SourceCodePro_Light300,
  SourceCodePro_Regular400,
  SourceCodePro_Medium500,
  SourceCodePro_SemiBold600,
  SourceCodePro_Bold700,
  SourceCodePro_Black900,
} from '@expo-google-fonts/source-code-pro';

export default () => {
  let [fontsLoaded] = useFonts({
    SourceCodePro_ExtraLight200,
    SourceCodePro_Light300,
    SourceCodePro_Regular400,
    SourceCodePro_Medium500,
    SourceCodePro_SemiBold600,
    SourceCodePro_Bold700,
    SourceCodePro_Black900,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'SourceCodePro_ExtraLight200' }}>
          SourceCodePro_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'SourceCodePro_Light300' }}>
          SourceCodePro_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'SourceCodePro_Regular400' }}>
          SourceCodePro_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'SourceCodePro_Medium500' }}>
          SourceCodePro_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'SourceCodePro_SemiBold600' }}>
          SourceCodePro_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'SourceCodePro_Bold700' }}>
          SourceCodePro_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'SourceCodePro_Black900' }}>
          SourceCodePro_Black900
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### SourceCodePro_ExtraLight200
![SourceCodePro_ExtraLight200](./5a618360951a8134d26923216c53da2cee51d55e6e2ca0003ecfe111b701bae5.ttf.png)

##### SourceCodePro_Light300
![SourceCodePro_Light300](./e0184502d4eb4b41dcd3d65fecad4fcf8b6b46f13967b60ac98eedcc43aacb30.ttf.png)

##### SourceCodePro_Regular400
![SourceCodePro_Regular400](./2d1bcd5038af1287746b7b1d1a4db65f091b3e9811428076d43a73121893922d.ttf.png)

##### SourceCodePro_Medium500
![SourceCodePro_Medium500](./18daf5f11e4f1462c2a5b5f8e439dfce5a846e27eff21a622f9031f58d257aa2.ttf.png)

##### SourceCodePro_SemiBold600
![SourceCodePro_SemiBold600](./807061463bc4cdacd2299a10cc0b7862e4a925cb984fec0016307fea9df6aa78.ttf.png)

##### SourceCodePro_Bold700
![SourceCodePro_Bold700](./51b4ad25947aa6ab4e72faea203ad4b74e4de08b9bbc4d254cdd9dc26dfc2d19.ttf.png)

##### SourceCodePro_Black900
![SourceCodePro_Black900](./677bde76eea8889e4ec713ec738f7fadd150aee2ffca36efb65946a45e6b93cc.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/source-code-pro` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Source Code Pro page on Google Fonts](https://fonts.google.com/specimen/Source+Code+Pro) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Source Code Pro on Google Fonts](https://fonts.google.com/specimen/Source+Code+Pro)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/source-code-pro)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/source-code-pro)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This entire directory, including this README, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
