# @expo-google-fonts/public-sans

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/public-sans)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/public-sans)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/public-sans)

This package lets you use the [**Public Sans**](https://fonts.google.com/specimen/Public+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Public Sans

![Public Sans](./font-family.png)

This font family contains [18 styles](#-gallery).

- `PublicSans_Thin100`
- `PublicSans_ExtraLight200`
- `PublicSans_Light300`
- `PublicSans_Regular400`
- `PublicSans_Medium500`
- `PublicSans_SemiBold600`
- `PublicSans_Bold700`
- `PublicSans_ExtraBold800`
- `PublicSans_Black900`
- `PublicSans_Thin100_Italic`
- `PublicSans_ExtraLight200_Italic`
- `PublicSans_Light300_Italic`
- `PublicSans_Regular400_Italic`
- `PublicSans_Medium500_Italic`
- `PublicSans_SemiBold600_Italic`
- `PublicSans_Bold700_Italic`
- `PublicSans_ExtraBold800_Italic`
- `PublicSans_Black900_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/public-sans expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  PublicSans_Thin100,
  PublicSans_ExtraLight200,
  PublicSans_Light300,
  PublicSans_Regular400,
  PublicSans_Medium500,
  PublicSans_SemiBold600,
  PublicSans_Bold700,
  PublicSans_ExtraBold800,
  PublicSans_Black900,
  PublicSans_Thin100_Italic,
  PublicSans_ExtraLight200_Italic,
  PublicSans_Light300_Italic,
  PublicSans_Regular400_Italic,
  PublicSans_Medium500_Italic,
  PublicSans_SemiBold600_Italic,
  PublicSans_Bold700_Italic,
  PublicSans_ExtraBold800_Italic,
  PublicSans_Black900_Italic,
  useFonts,
} from '@expo-google-fonts/public-sans';

export default () => {
  let [fontsLoaded] = useFonts({
    PublicSans_Thin100,
    PublicSans_ExtraLight200,
    PublicSans_Light300,
    PublicSans_Regular400,
    PublicSans_Medium500,
    PublicSans_SemiBold600,
    PublicSans_Bold700,
    PublicSans_ExtraBold800,
    PublicSans_Black900,
    PublicSans_Thin100_Italic,
    PublicSans_ExtraLight200_Italic,
    PublicSans_Light300_Italic,
    PublicSans_Regular400_Italic,
    PublicSans_Medium500_Italic,
    PublicSans_SemiBold600_Italic,
    PublicSans_Bold700_Italic,
    PublicSans_ExtraBold800_Italic,
    PublicSans_Black900_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'PublicSans_Thin100' }}>
          PublicSans_Thin100
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'PublicSans_ExtraLight200' }}>
          PublicSans_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'PublicSans_Light300' }}>
          PublicSans_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'PublicSans_Regular400' }}>
          PublicSans_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'PublicSans_Medium500' }}>
          PublicSans_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'PublicSans_SemiBold600' }}>
          PublicSans_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'PublicSans_Bold700' }}>
          PublicSans_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'PublicSans_ExtraBold800' }}>
          PublicSans_ExtraBold800
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'PublicSans_Black900' }}>
          PublicSans_Black900
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'PublicSans_Thin100_Italic' }}>
          PublicSans_Thin100_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'PublicSans_ExtraLight200_Italic' }}>
          PublicSans_ExtraLight200_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'PublicSans_Light300_Italic' }}>
          PublicSans_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'PublicSans_Regular400_Italic' }}>
          PublicSans_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'PublicSans_Medium500_Italic' }}>
          PublicSans_Medium500_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'PublicSans_SemiBold600_Italic' }}>
          PublicSans_SemiBold600_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'PublicSans_Bold700_Italic' }}>
          PublicSans_Bold700_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'PublicSans_ExtraBold800_Italic' }}>
          PublicSans_ExtraBold800_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'PublicSans_Black900_Italic' }}>
          PublicSans_Black900_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### PublicSans_Thin100
![PublicSans_Thin100](./bbeb9408fbfe9d5d9ce8fbafbfc03c6b6cdf568002d0617c5ba2e7a7ed4e2927.ttf.png)

##### PublicSans_ExtraLight200
![PublicSans_ExtraLight200](./c5315eae10703301b7f62e88a7de796fcf6d0e22ce0484906b2a75717045d602.ttf.png)

##### PublicSans_Light300
![PublicSans_Light300](./c24444db34cbde1fe26eee9e01a5aeecaa2d5d04d760b016effb1efaaeca1eab.ttf.png)

##### PublicSans_Regular400
![PublicSans_Regular400](./a43ba20728262f80018c0f9cb41348b11a7a0f7ce4cec9524908f09a1ba9fc10.ttf.png)

##### PublicSans_Medium500
![PublicSans_Medium500](./3bd3b338d1c2daf799f2856f74a39cee09cfc8dd65a08a77dae77e3fdcee5516.ttf.png)

##### PublicSans_SemiBold600
![PublicSans_SemiBold600](./1ba049c8f5505f644eeedde917f31244fbce5797f1daa0bc6ad7dee626cdd493.ttf.png)

##### PublicSans_Bold700
![PublicSans_Bold700](./b64cde6ef854e50377acd226084a3b56da54c708c4b6b56b0e6efdbd6725e2eb.ttf.png)

##### PublicSans_ExtraBold800
![PublicSans_ExtraBold800](./a88f82d3a4c9ff1ef0ddd06d1f62a10636942fb2461837a8555c5a0c6c362c84.ttf.png)

##### PublicSans_Black900
![PublicSans_Black900](./d59239c8e796e666d395620e22b7a4456496e2593b03448fca6ea8d8fc7697df.ttf.png)

##### PublicSans_Thin100_Italic
![PublicSans_Thin100_Italic](./b7e9ab1ba3ba765f5775306a4f4f66df2fc253782bdca66c44b36e09b4a65ced.ttf.png)

##### PublicSans_ExtraLight200_Italic
![PublicSans_ExtraLight200_Italic](./ce8d4637dcc7693ff3984ca3de2859af73e35a18142f87dff9fb8c3e2f9e8fa3.ttf.png)

##### PublicSans_Light300_Italic
![PublicSans_Light300_Italic](./1c6bac423bb2503db975062139990578c28e1b744fdf169b762f0ae69e4f5ad2.ttf.png)

##### PublicSans_Regular400_Italic
![PublicSans_Regular400_Italic](./ed1d4975a041ddce0d086e9b30feb0d85236d1e95edeed6848841f480af24a49.ttf.png)

##### PublicSans_Medium500_Italic
![PublicSans_Medium500_Italic](./a66352215ff1f71f3e0c04d07175608a1992529cf83d389cea2e601a72d4e90f.ttf.png)

##### PublicSans_SemiBold600_Italic
![PublicSans_SemiBold600_Italic](./b2bdd1391e967996ae11ed929fa55e3811b4928bcdd356295d10ae67cef03949.ttf.png)

##### PublicSans_Bold700_Italic
![PublicSans_Bold700_Italic](./056bab577fca8b802ca1629b53e48d0b66c5e0d7568553c4c85bc0107d87c865.ttf.png)

##### PublicSans_ExtraBold800_Italic
![PublicSans_ExtraBold800_Italic](./9e40fa8d8ef6e8979ff49e3f9220489c0961ca308a318f3400b176a6594877e9.ttf.png)

##### PublicSans_Black900_Italic
![PublicSans_Black900_Italic](./0b536907db7c2710ae92a77a16a1a413f3527e60b0fcc442d4f74513b6249e69.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/public-sans` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Public Sans page on Google Fonts](https://fonts.google.com/specimen/Public+Sans) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Public Sans on Google Fonts](https://fonts.google.com/specimen/Public+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/public-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/public-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
