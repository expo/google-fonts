# @expo-google-fonts/darker-grotesque

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/darker-grotesque)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/darker-grotesque)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/darker-grotesque)

This package lets you use the [**Darker Grotesque**](https://fonts.google.com/specimen/Darker+Grotesque) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Darker Grotesque

![Darker Grotesque](./font-family.png)

This font family contains [7 styles](#gallery).

- `DarkerGrotesque_Light300`
- `DarkerGrotesque_Regular400`
- `DarkerGrotesque_Medium500`
- `DarkerGrotesque_SemiBold600`
- `DarkerGrotesque_Bold700`
- `DarkerGrotesque_ExtraBold800`
- `DarkerGrotesque_Black900`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/darker-grotesque expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  DarkerGrotesque_Light300,
  DarkerGrotesque_Regular400,
  DarkerGrotesque_Medium500,
  DarkerGrotesque_SemiBold600,
  DarkerGrotesque_Bold700,
  DarkerGrotesque_ExtraBold800,
  DarkerGrotesque_Black900,
} from '@expo-google-fonts/darker-grotesque';

export default () => {
  let [fontsLoaded] = useFonts({
    DarkerGrotesque_Light300,
    DarkerGrotesque_Regular400,
    DarkerGrotesque_Medium500,
    DarkerGrotesque_SemiBold600,
    DarkerGrotesque_Bold700,
    DarkerGrotesque_ExtraBold800,
    DarkerGrotesque_Black900,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'DarkerGrotesque_Light300' }}>
          DarkerGrotesque_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'DarkerGrotesque_Regular400' }}>
          DarkerGrotesque_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'DarkerGrotesque_Medium500' }}>
          DarkerGrotesque_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'DarkerGrotesque_SemiBold600' }}>
          DarkerGrotesque_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'DarkerGrotesque_Bold700' }}>
          DarkerGrotesque_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'DarkerGrotesque_ExtraBold800' }}>
          DarkerGrotesque_ExtraBold800
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'DarkerGrotesque_Black900' }}>
          DarkerGrotesque_Black900
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### DarkerGrotesque_Light300
![DarkerGrotesque_Light300](./f789e82ef267fb0b5f0798267ba5e3340b661840b52e1de87f7830b7d87a180e.ttf.png)

##### DarkerGrotesque_Regular400
![DarkerGrotesque_Regular400](./60303e0b600c0176b00422a680228f744d38795fbd8d35344f494b02400628c1.ttf.png)

##### DarkerGrotesque_Medium500
![DarkerGrotesque_Medium500](./a6e1eb6614b97b3298d1d253f5ed4399556da5b06bb191596cebfc813bdd3505.ttf.png)

##### DarkerGrotesque_SemiBold600
![DarkerGrotesque_SemiBold600](./3e516ad3d1d4cec56249227f367cba1e2830faa7cedbcf49abca81e7c202b434.ttf.png)

##### DarkerGrotesque_Bold700
![DarkerGrotesque_Bold700](./b56136288e57809ada8707a74f6756261c3763b3a2686398738c1fd25f157d9c.ttf.png)

##### DarkerGrotesque_ExtraBold800
![DarkerGrotesque_ExtraBold800](./cf5f4f44b908aeed8723415a103b1ad9c5550388d2c8e139adab630a61a74712.ttf.png)

##### DarkerGrotesque_Black900
![DarkerGrotesque_Black900](./eae6b24bfd325c090ef4a304519707f58942487ea7e118bfe036175f8c4690aa.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/darker-grotesque` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Darker Grotesque page on Google Fonts](https://fonts.google.com/specimen/Darker+Grotesque) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Darker Grotesque on Google Fonts](https://fonts.google.com/specimen/Darker+Grotesque)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/darker-grotesque)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/darker-grotesque)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
