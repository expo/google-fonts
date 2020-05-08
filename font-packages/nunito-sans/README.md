# @expo-google-fonts/nunito-sans

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/nunito-sans)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/nunito-sans)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/nunito-sans)

This package lets you use the [**Nunito Sans**](https://fonts.google.com/specimen/Nunito+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Nunito Sans

![Nunito Sans](./font-family.png)

This font family contains [14 styles](#-gallery).

- `NunitoSans_ExtraLight200`
- `NunitoSans_ExtraLight200_Italic`
- `NunitoSans_Light300`
- `NunitoSans_Light300_Italic`
- `NunitoSans_Regular400`
- `NunitoSans_Regular400_Italic`
- `NunitoSans_SemiBold600`
- `NunitoSans_SemiBold600_Italic`
- `NunitoSans_Bold700`
- `NunitoSans_Bold700_Italic`
- `NunitoSans_ExtraBold800`
- `NunitoSans_ExtraBold800_Italic`
- `NunitoSans_Black900`
- `NunitoSans_Black900_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/nunito-sans expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  NunitoSans_ExtraLight200,
  NunitoSans_ExtraLight200_Italic,
  NunitoSans_Light300,
  NunitoSans_Light300_Italic,
  NunitoSans_Regular400,
  NunitoSans_Regular400_Italic,
  NunitoSans_SemiBold600,
  NunitoSans_SemiBold600_Italic,
  NunitoSans_Bold700,
  NunitoSans_Bold700_Italic,
  NunitoSans_ExtraBold800,
  NunitoSans_ExtraBold800_Italic,
  NunitoSans_Black900,
  NunitoSans_Black900_Italic,
} from '@expo-google-fonts/nunito-sans';

export default () => {
  let [fontsLoaded] = useFonts({
    NunitoSans_ExtraLight200,
    NunitoSans_ExtraLight200_Italic,
    NunitoSans_Light300,
    NunitoSans_Light300_Italic,
    NunitoSans_Regular400,
    NunitoSans_Regular400_Italic,
    NunitoSans_SemiBold600,
    NunitoSans_SemiBold600_Italic,
    NunitoSans_Bold700,
    NunitoSans_Bold700_Italic,
    NunitoSans_ExtraBold800,
    NunitoSans_ExtraBold800_Italic,
    NunitoSans_Black900,
    NunitoSans_Black900_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'NunitoSans_ExtraLight200' }}>
          NunitoSans_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'NunitoSans_ExtraLight200_Italic' }}>
          NunitoSans_ExtraLight200_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'NunitoSans_Light300' }}>
          NunitoSans_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'NunitoSans_Light300_Italic' }}>
          NunitoSans_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'NunitoSans_Regular400' }}>
          NunitoSans_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'NunitoSans_Regular400_Italic' }}>
          NunitoSans_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'NunitoSans_SemiBold600' }}>
          NunitoSans_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'NunitoSans_SemiBold600_Italic' }}>
          NunitoSans_SemiBold600_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'NunitoSans_Bold700' }}>
          NunitoSans_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'NunitoSans_Bold700_Italic' }}>
          NunitoSans_Bold700_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'NunitoSans_ExtraBold800' }}>
          NunitoSans_ExtraBold800
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'NunitoSans_ExtraBold800_Italic' }}>
          NunitoSans_ExtraBold800_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'NunitoSans_Black900' }}>
          NunitoSans_Black900
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'NunitoSans_Black900_Italic' }}>
          NunitoSans_Black900_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### NunitoSans_ExtraLight200
![NunitoSans_ExtraLight200](./70c2474c36bf599083e387d302c27f28e5439ccd1d15425222ba9855b31f6e11.ttf.png)

##### NunitoSans_ExtraLight200_Italic
![NunitoSans_ExtraLight200_Italic](./c77baab8ad61508949ffaf4c0fc2381d7f31ddc2f12f24bd32fda15d0f02970a.ttf.png)

##### NunitoSans_Light300
![NunitoSans_Light300](./5af44ca8126245c16771271ce081fc4c5f5801d190ca549007575c51ec1c91da.ttf.png)

##### NunitoSans_Light300_Italic
![NunitoSans_Light300_Italic](./acfe4eb8ed22882df2b122cfe78b0bd761d3025ed62826d5335856d565237582.ttf.png)

##### NunitoSans_Regular400
![NunitoSans_Regular400](./3b369d5939d0bdfcbe583bb27259c6f6616b01b0948a86dade1dd3ec128c3898.ttf.png)

##### NunitoSans_Regular400_Italic
![NunitoSans_Regular400_Italic](./988d1d496236aa9ab3e63745e0d5d82783762ea4d3a21d1940ffa2ff7111b664.ttf.png)

##### NunitoSans_SemiBold600
![NunitoSans_SemiBold600](./62d9b0c17a7423bf90868c8da851ce9b40f15422fe0604d85f036703a60f6807.ttf.png)

##### NunitoSans_SemiBold600_Italic
![NunitoSans_SemiBold600_Italic](./79fc6cab022106d0daaf1abc5b854c8a876df8e831445c71bc095e8be2a9bd1a.ttf.png)

##### NunitoSans_Bold700
![NunitoSans_Bold700](./471cb67b6491aee31f19c1ba10edb324872722bfd6b848706ba31614fe6e1655.ttf.png)

##### NunitoSans_Bold700_Italic
![NunitoSans_Bold700_Italic](./cf6f24fcf4a51b61957a7b72cb3e4c38fc3a9260e5323ee20a7b24bb2c522255.ttf.png)

##### NunitoSans_ExtraBold800
![NunitoSans_ExtraBold800](./7778244928e2e17a87dc2b7bf3a424a284ce6d4cdd2bd9a3f27fbbb31e7a1dcb.ttf.png)

##### NunitoSans_ExtraBold800_Italic
![NunitoSans_ExtraBold800_Italic](./c0bbb1deb95af6b335d94ee8dd132d4ba26aaee59cd749c84bf1c7609a164748.ttf.png)

##### NunitoSans_Black900
![NunitoSans_Black900](./76da9a3301eb15a1f2488e15b4385547bcde1c10b13035937296cef72d4deee6.ttf.png)

##### NunitoSans_Black900_Italic
![NunitoSans_Black900_Italic](./1ef6bb692fd273ef402051d20962975c507172596da00ed72faf7907d1e00118.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/nunito-sans` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Nunito Sans page on Google Fonts](https://fonts.google.com/specimen/Nunito+Sans) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Nunito Sans on Google Fonts](https://fonts.google.com/specimen/Nunito+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/nunito-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/nunito-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
