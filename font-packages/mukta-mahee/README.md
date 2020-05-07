# @expo-google-fonts/mukta-mahee

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/mukta-mahee)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/mukta-mahee)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/mukta-mahee)

This package lets you use the [**Mukta Mahee**](https://fonts.google.com/specimen/Mukta+Mahee) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Mukta Mahee

![Mukta Mahee](./font-family.png)

This font family contains [7 styles](#gallery).

- `MuktaMahee_ExtraLight200`
- `MuktaMahee_Light300`
- `MuktaMahee_Regular400`
- `MuktaMahee_Medium500`
- `MuktaMahee_SemiBold600`
- `MuktaMahee_Bold700`
- `MuktaMahee_ExtraBold800`

## 🔡 Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/mukta-mahee expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  MuktaMahee_ExtraLight200,
  MuktaMahee_Light300,
  MuktaMahee_Regular400,
  MuktaMahee_Medium500,
  MuktaMahee_SemiBold600,
  MuktaMahee_Bold700,
  MuktaMahee_ExtraBold800,
} from '@expo-google-fonts/mukta-mahee';

export default () => {
  let [fontsLoaded] = useFonts({
    MuktaMahee_ExtraLight200,
    MuktaMahee_Light300,
    MuktaMahee_Regular400,
    MuktaMahee_Medium500,
    MuktaMahee_SemiBold600,
    MuktaMahee_Bold700,
    MuktaMahee_ExtraBold800,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'MuktaMahee_ExtraLight200' }}>
          MuktaMahee_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'MuktaMahee_Light300' }}>
          MuktaMahee_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'MuktaMahee_Regular400' }}>
          MuktaMahee_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'MuktaMahee_Medium500' }}>
          MuktaMahee_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'MuktaMahee_SemiBold600' }}>
          MuktaMahee_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'MuktaMahee_Bold700' }}>
          MuktaMahee_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'MuktaMahee_ExtraBold800' }}>
          MuktaMahee_ExtraBold800
        </Text>
      </View>
    );
  }
};

```

## 📖 Gallery

##### MuktaMahee_ExtraLight200
![MuktaMahee_ExtraLight200](./deb2926281b06e4d02371cd3f6f4883d13a38514549e581c6269cb16250c5a63.ttf.png)

##### MuktaMahee_Light300
![MuktaMahee_Light300](./448813ce747d7ccc8e7b380c48932fe537454f9a86ac18052fa515874298334e.ttf.png)

##### MuktaMahee_Regular400
![MuktaMahee_Regular400](./e185695b95ca5300e131bf6cf64a2442b7517874432a1a82f968ee61ed116717.ttf.png)

##### MuktaMahee_Medium500
![MuktaMahee_Medium500](./e224c5c38bb5fe5efb69e8392dfd476427211ddb37a97f4fd77b807d5aad8b7c.ttf.png)

##### MuktaMahee_SemiBold600
![MuktaMahee_SemiBold600](./f2c62fede24e5fe712f6f59500c550749c89e47b21cb749ea96f447ace17a57a.ttf.png)

##### MuktaMahee_Bold700
![MuktaMahee_Bold700](./0bde54d9dc9448b8d81abd2d849dade4e04c4b7c4ec8565ccb09e80f0fd2be99.ttf.png)

##### MuktaMahee_ExtraBold800
![MuktaMahee_ExtraBold800](./561a2604bd143dc10cc3499ba4e3c7eef16b6705db72db31da22ad356b76feb5.ttf.png)


## 🖥️ Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## ⚖️ License

The `@expo-google-fonts/mukta-mahee` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Mukta Mahee page on Google Fonts](https://fonts.google.com/specimen/Mukta+Mahee) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Mukta Mahee on Google Fonts](https://fonts.google.com/specimen/Mukta+Mahee)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/mukta-mahee)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/mukta-mahee)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
