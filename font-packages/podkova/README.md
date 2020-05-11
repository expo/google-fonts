# @expo-google-fonts/podkova

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/podkova)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/podkova)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/podkova)

This package lets you use the [**Podkova**](https://fonts.google.com/specimen/Podkova) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Podkova

![Podkova](./font-family.png)

This font family contains [5 styles](#-gallery).

- `Podkova_Regular400`
- `Podkova_Medium500`
- `Podkova_SemiBold600`
- `Podkova_Bold700`
- `Podkova_ExtraBold800`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/podkova expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  Podkova_Regular400,
  Podkova_Medium500,
  Podkova_SemiBold600,
  Podkova_Bold700,
  Podkova_ExtraBold800,
  useFonts,
} from '@expo-google-fonts/podkova';

export default () => {
  let [fontsLoaded] = useFonts({
    Podkova_Regular400,
    Podkova_Medium500,
    Podkova_SemiBold600,
    Podkova_Bold700,
    Podkova_ExtraBold800,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Podkova_Regular400' }}>
          Podkova_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Podkova_Medium500' }}>
          Podkova_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Podkova_SemiBold600' }}>
          Podkova_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Podkova_Bold700' }}>
          Podkova_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Podkova_ExtraBold800' }}>
          Podkova_ExtraBold800
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Podkova_Regular400
![Podkova_Regular400](./0add25e02638273bd9b4fcf35c8b76256a3a4e03952c161c48592fae22c5fc34.ttf.png)

##### Podkova_Medium500
![Podkova_Medium500](./3f02b4ccaed0ce6f2b29a1a9a6a7d4277651708435bc6f85466d43b1f7946980.ttf.png)

##### Podkova_SemiBold600
![Podkova_SemiBold600](./0cc312c8ebd6612b3c99e662d435f1299506dd87fe2eda68b3a99a77910ff84b.ttf.png)

##### Podkova_Bold700
![Podkova_Bold700](./18a450ac10399ddda8864f93d96f61b5d636d2d450b6ce5b67ed4247c24b8fb4.ttf.png)

##### Podkova_ExtraBold800
![Podkova_ExtraBold800](./f608ec4d8cd807e20ea8e24c392d1d2a7480b32148f5ad72b5c133b6f630b8f6.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/podkova` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Podkova page on Google Fonts](https://fonts.google.com/specimen/Podkova) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Podkova on Google Fonts](https://fonts.google.com/specimen/Podkova)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/podkova)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/podkova)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
