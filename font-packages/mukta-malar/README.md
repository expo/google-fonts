# @expo-google-fonts/mukta-malar

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/mukta-malar)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/mukta-malar)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/mukta-malar)

This package lets you use the [**Mukta Malar**](https://fonts.google.com/specimen/Mukta+Malar) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Mukta Malar

![Mukta Malar](./font-family.png)

This font family contains [7 styles](#gallery).

- `MuktaMalar_ExtraLight200`
- `MuktaMalar_Light300`
- `MuktaMalar_Regular400`
- `MuktaMalar_Medium500`
- `MuktaMalar_SemiBold600`
- `MuktaMalar_Bold700`
- `MuktaMalar_ExtraBold800`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/mukta-malar expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  MuktaMalar_ExtraLight200,
  MuktaMalar_Light300,
  MuktaMalar_Regular400,
  MuktaMalar_Medium500,
  MuktaMalar_SemiBold600,
  MuktaMalar_Bold700,
  MuktaMalar_ExtraBold800,
} from '@expo-google-fonts/mukta-malar';

export default () => {
  let [fontsLoaded] = useFonts({
    MuktaMalar_ExtraLight200,
    MuktaMalar_Light300,
    MuktaMalar_Regular400,
    MuktaMalar_Medium500,
    MuktaMalar_SemiBold600,
    MuktaMalar_Bold700,
    MuktaMalar_ExtraBold800,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'MuktaMalar_ExtraLight200' }}>
          MuktaMalar_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'MuktaMalar_Light300' }}>
          MuktaMalar_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'MuktaMalar_Regular400' }}>
          MuktaMalar_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'MuktaMalar_Medium500' }}>
          MuktaMalar_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'MuktaMalar_SemiBold600' }}>
          MuktaMalar_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'MuktaMalar_Bold700' }}>
          MuktaMalar_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'MuktaMalar_ExtraBold800' }}>
          MuktaMalar_ExtraBold800
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### MuktaMalar_ExtraLight200
![MuktaMalar_ExtraLight200](./9ae35f34ee0aecd84455b8074812b101d5d11bc4ae0ada4a90c3e6963cf1b93c.ttf.png)

##### MuktaMalar_Light300
![MuktaMalar_Light300](./2d5b4747199d5f755d4d21f2dfb23f52cbeba3d94d82a526575d63a6be36c99b.ttf.png)

##### MuktaMalar_Regular400
![MuktaMalar_Regular400](./e58544a43eef9e9b107ca973ca2d3233a1e15b8eddffcc73a3cb767a82c86fd6.ttf.png)

##### MuktaMalar_Medium500
![MuktaMalar_Medium500](./05e1d0c09c615550bb87408248e0d42ce654f55e0757f1fa6f4f93323f8c8121.ttf.png)

##### MuktaMalar_SemiBold600
![MuktaMalar_SemiBold600](./e4f26dcbc25c0f26d1fce4a3558f4aacdf8089148a638079c3353f6049ae21e9.ttf.png)

##### MuktaMalar_Bold700
![MuktaMalar_Bold700](./bacffc5f82b7219e1a4ff85b030aca1a5f805e0a1224534a6f2bfb01e4bd61cc.ttf.png)

##### MuktaMalar_ExtraBold800
![MuktaMalar_ExtraBold800](./848b7be10b4d701ac02f5f2208071858aa399b564d503cd2e4ca428d25886da9.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/mukta-malar` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Mukta Malar page on Google Fonts](https://fonts.google.com/specimen/Mukta+Malar) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Mukta Malar on Google Fonts](https://fonts.google.com/specimen/Mukta+Malar)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/mukta-malar)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/mukta-malar)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
