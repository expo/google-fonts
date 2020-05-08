# @expo-google-fonts/martel

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/martel)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/martel)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/martel)

This package lets you use the [**Martel**](https://fonts.google.com/specimen/Martel) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Martel

![Martel](./font-family.png)

This font family contains [7 styles](#-gallery).

- `Martel_ExtraLight200`
- `Martel_Light300`
- `Martel_Regular400`
- `Martel_SemiBold600`
- `Martel_Bold700`
- `Martel_ExtraBold800`
- `Martel_Black900`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/martel expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Martel_ExtraLight200,
  Martel_Light300,
  Martel_Regular400,
  Martel_SemiBold600,
  Martel_Bold700,
  Martel_ExtraBold800,
  Martel_Black900,
} from '@expo-google-fonts/martel';

export default () => {
  let [fontsLoaded] = useFonts({
    Martel_ExtraLight200,
    Martel_Light300,
    Martel_Regular400,
    Martel_SemiBold600,
    Martel_Bold700,
    Martel_ExtraBold800,
    Martel_Black900,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Martel_ExtraLight200' }}>
          Martel_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Martel_Light300' }}>
          Martel_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Martel_Regular400' }}>
          Martel_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Martel_SemiBold600' }}>
          Martel_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Martel_Bold700' }}>
          Martel_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Martel_ExtraBold800' }}>
          Martel_ExtraBold800
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Martel_Black900' }}>
          Martel_Black900
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Martel_ExtraLight200
![Martel_ExtraLight200](./c4024da71647bc66c6880037b41d29ad5ae7b5426518ad225ee14562d6dae75a.ttf.png)

##### Martel_Light300
![Martel_Light300](./138cff935a5284819d91b6908fed6fc1cb770eddf8d812c17ef1dc6092010fb9.ttf.png)

##### Martel_Regular400
![Martel_Regular400](./0bd68a5be6ee9107bc21ade86bd0199d47d96c7895a7a1c2c3080377779b268a.ttf.png)

##### Martel_SemiBold600
![Martel_SemiBold600](./d22af0f3a51da296280637f9124f2579cf8b495c74ce080f84aca6ad6c12c889.ttf.png)

##### Martel_Bold700
![Martel_Bold700](./5b81175087fcd5061785115771a9e1c7ab3c69ca0de682426b8338a372e23153.ttf.png)

##### Martel_ExtraBold800
![Martel_ExtraBold800](./3e03eaab1b6ec761214d4dc76edf835a3eafc1c7170942a240f46c25a571bd41.ttf.png)

##### Martel_Black900
![Martel_Black900](./8d00654db8f5901e4a51129ff21160fe34513ff2284309ccd0b00cc79684c7cb.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/martel` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Martel page on Google Fonts](https://fonts.google.com/specimen/Martel) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Martel on Google Fonts](https://fonts.google.com/specimen/Martel)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/martel)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/martel)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
