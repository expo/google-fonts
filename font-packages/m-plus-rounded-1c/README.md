# @expo-google-fonts/m-plus-rounded-1c

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/m-plus-rounded-1c)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/m-plus-rounded-1c)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/m-plus-rounded-1c)

This package lets you use the [**M PLUS Rounded 1c**](https://fonts.google.com/specimen/M+PLUS+Rounded+1c) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## M PLUS Rounded 1c

![M PLUS Rounded 1c](./font-family.png)

This font family contains [7 styles](#-gallery).

- `MPLUSRounded1c_Thin100`
- `MPLUSRounded1c_Light300`
- `MPLUSRounded1c_Regular400`
- `MPLUSRounded1c_Medium500`
- `MPLUSRounded1c_Bold700`
- `MPLUSRounded1c_ExtraBold800`
- `MPLUSRounded1c_Black900`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/m-plus-rounded-1c expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  MPLUSRounded1c_Thin100,
  MPLUSRounded1c_Light300,
  MPLUSRounded1c_Regular400,
  MPLUSRounded1c_Medium500,
  MPLUSRounded1c_Bold700,
  MPLUSRounded1c_ExtraBold800,
  MPLUSRounded1c_Black900,
  useFonts,
} from '@expo-google-fonts/m-plus-rounded-1c';

export default () => {
  let [fontsLoaded] = useFonts({
    MPLUSRounded1c_Thin100,
    MPLUSRounded1c_Light300,
    MPLUSRounded1c_Regular400,
    MPLUSRounded1c_Medium500,
    MPLUSRounded1c_Bold700,
    MPLUSRounded1c_ExtraBold800,
    MPLUSRounded1c_Black900,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'MPLUSRounded1c_Thin100' }}>
          MPLUSRounded1c_Thin100
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'MPLUSRounded1c_Light300' }}>
          MPLUSRounded1c_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'MPLUSRounded1c_Regular400' }}>
          MPLUSRounded1c_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'MPLUSRounded1c_Medium500' }}>
          MPLUSRounded1c_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'MPLUSRounded1c_Bold700' }}>
          MPLUSRounded1c_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'MPLUSRounded1c_ExtraBold800' }}>
          MPLUSRounded1c_ExtraBold800
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'MPLUSRounded1c_Black900' }}>
          MPLUSRounded1c_Black900
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### MPLUSRounded1c_Thin100
![MPLUSRounded1c_Thin100](./6d028025ec621f30d69f25f3b121f0eb6e4678e96d47f16d760f1fcf59248d2c.ttf.png)

##### MPLUSRounded1c_Light300
![MPLUSRounded1c_Light300](./8e6655c0fc1e40abbfe6631bef1b71cf55ed1f706c0d130fa9fc82cfb1a644c7.ttf.png)

##### MPLUSRounded1c_Regular400
![MPLUSRounded1c_Regular400](./ff70cb1f3f4fe4691c6ec7c7725c4a0aa37e2d1fa2704d659c9efcd304a6bb24.ttf.png)

##### MPLUSRounded1c_Medium500
![MPLUSRounded1c_Medium500](./a6066483cf3c5b68c17d69a4a957e9a50dbe366ac10cbf88a9f3776744ec5048.ttf.png)

##### MPLUSRounded1c_Bold700
![MPLUSRounded1c_Bold700](./c9070409f93c9e7a46a302d0205de1c15bdde3b59f65c32ff73315592afaf17e.ttf.png)

##### MPLUSRounded1c_ExtraBold800
![MPLUSRounded1c_ExtraBold800](./a7b92c0902d7c3f543a4ecc04c44c8cf62f26c4bcc92ecb26e40ef9849277e61.ttf.png)

##### MPLUSRounded1c_Black900
![MPLUSRounded1c_Black900](./cadad2376795cd1bcdaae984a16f1fef7e2f18ca27fd2493f32f620867a1ef05.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/m-plus-rounded-1c` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [M PLUS Rounded 1c page on Google Fonts](https://fonts.google.com/specimen/M+PLUS+Rounded+1c) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [M PLUS Rounded 1c on Google Fonts](https://fonts.google.com/specimen/M+PLUS+Rounded+1c)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/m-plus-rounded-1c)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/m-plus-rounded-1c)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
