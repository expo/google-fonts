# @expo-google-fonts/nanum-gothic-coding

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/nanum-gothic-coding)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/nanum-gothic-coding)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/nanum-gothic-coding)

This package lets you use the [**Nanum Gothic Coding**](https://fonts.google.com/specimen/Nanum+Gothic+Coding) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Nanum Gothic Coding

![Nanum Gothic Coding](./font-family.png)

This font family contains [2 styles](#-gallery).

- `NanumGothicCoding_Regular400`
- `NanumGothicCoding_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/nanum-gothic-coding expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  NanumGothicCoding_Regular400,
  NanumGothicCoding_Bold700,
} from '@expo-google-fonts/nanum-gothic-coding';

export default () => {
  let [fontsLoaded] = useFonts({
    NanumGothicCoding_Regular400,
    NanumGothicCoding_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'NanumGothicCoding_Regular400' }}>
          NanumGothicCoding_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'NanumGothicCoding_Bold700' }}>
          NanumGothicCoding_Bold700
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### NanumGothicCoding_Regular400
![NanumGothicCoding_Regular400](./87aa4e424fb41b2eb66974966afbb9b9d113444c73ddfec8d9960d1c9f15ca2a.ttf.png)

##### NanumGothicCoding_Bold700
![NanumGothicCoding_Bold700](./bfd061e7ac41bb2ac41c1b32e194b64a92ea19253afc0008d1a5e58e330434f9.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/nanum-gothic-coding` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Nanum Gothic Coding page on Google Fonts](https://fonts.google.com/specimen/Nanum+Gothic+Coding) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Nanum Gothic Coding on Google Fonts](https://fonts.google.com/specimen/Nanum+Gothic+Coding)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/nanum-gothic-coding)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/nanum-gothic-coding)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
