# @expo-google-fonts/cairo

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/cairo)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/cairo)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/cairo)

This package lets you use the [**Cairo**](https://fonts.google.com/specimen/Cairo) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Cairo

![Cairo](./font-family.png)

This font family contains [6 styles](#-gallery).

- `Cairo_ExtraLight200`
- `Cairo_Light300`
- `Cairo_Regular400`
- `Cairo_SemiBold600`
- `Cairo_Bold700`
- `Cairo_Black900`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/cairo expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Cairo_ExtraLight200,
  Cairo_Light300,
  Cairo_Regular400,
  Cairo_SemiBold600,
  Cairo_Bold700,
  Cairo_Black900,
} from '@expo-google-fonts/cairo';

export default () => {
  let [fontsLoaded] = useFonts({
    Cairo_ExtraLight200,
    Cairo_Light300,
    Cairo_Regular400,
    Cairo_SemiBold600,
    Cairo_Bold700,
    Cairo_Black900,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Cairo_ExtraLight200' }}>
          Cairo_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Cairo_Light300' }}>
          Cairo_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Cairo_Regular400' }}>
          Cairo_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Cairo_SemiBold600' }}>
          Cairo_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Cairo_Bold700' }}>
          Cairo_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Cairo_Black900' }}>
          Cairo_Black900
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Cairo_ExtraLight200
![Cairo_ExtraLight200](./4f4138b4fc3c1369eee1151ad813f76e1b371364feb318c2dfed606c6c7a98dc.ttf.png)

##### Cairo_Light300
![Cairo_Light300](./22d57a326952ad111119348fad278153f66b456e3f1e1b3eba074a4dc167f96e.ttf.png)

##### Cairo_Regular400
![Cairo_Regular400](./1537c4e5a58de46dea37716791ce13157250bce598772e19adbf07abdaa2f5c0.ttf.png)

##### Cairo_SemiBold600
![Cairo_SemiBold600](./1f5b7f284695e2fd50ce750d2a479bcbdc7f701be3c33893f0773866193c8fba.ttf.png)

##### Cairo_Bold700
![Cairo_Bold700](./56f0547834a0a361e7216604988268770c085dcbd6f3241778f613b02d6db926.ttf.png)

##### Cairo_Black900
![Cairo_Black900](./4cf0e64d282c925bd689d2224fc9f34075e4586dbbebdbfa585ebab25a42059c.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/cairo` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Cairo page on Google Fonts](https://fonts.google.com/specimen/Cairo) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Cairo on Google Fonts](https://fonts.google.com/specimen/Cairo)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/cairo)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/cairo)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
