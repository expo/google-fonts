# @expo-google-fonts/inria-serif

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/inria-serif)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/inria-serif)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/inria-serif)

This package lets you use the [**Inria Serif**](https://fonts.google.com/specimen/Inria+Serif) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Inria Serif

![Inria Serif](./font-family.png)

This font family contains [6 styles](#-gallery).

- `InriaSerif_Light300`
- `InriaSerif_Light300_Italic`
- `InriaSerif_Regular400`
- `InriaSerif_Regular400_Italic`
- `InriaSerif_Bold700`
- `InriaSerif_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/inria-serif expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  InriaSerif_Light300,
  InriaSerif_Light300_Italic,
  InriaSerif_Regular400,
  InriaSerif_Regular400_Italic,
  InriaSerif_Bold700,
  InriaSerif_Bold700_Italic,
} from '@expo-google-fonts/inria-serif';

export default () => {
  let [fontsLoaded] = useFonts({
    InriaSerif_Light300,
    InriaSerif_Light300_Italic,
    InriaSerif_Regular400,
    InriaSerif_Regular400_Italic,
    InriaSerif_Bold700,
    InriaSerif_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'InriaSerif_Light300' }}>
          InriaSerif_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'InriaSerif_Light300_Italic' }}>
          InriaSerif_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'InriaSerif_Regular400' }}>
          InriaSerif_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'InriaSerif_Regular400_Italic' }}>
          InriaSerif_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'InriaSerif_Bold700' }}>
          InriaSerif_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'InriaSerif_Bold700_Italic' }}>
          InriaSerif_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### InriaSerif_Light300
![InriaSerif_Light300](./843b3e9e758e66cd88535ad2c67fba727e83e342a871227e9d6dd1640acbd496.ttf.png)

##### InriaSerif_Light300_Italic
![InriaSerif_Light300_Italic](./f4537cff635316910c2b9f1449b29caaa2d9aaf852dc13bd2d82adc9070e861d.ttf.png)

##### InriaSerif_Regular400
![InriaSerif_Regular400](./3e86dfe8f6fc1e2431b0a39040b2dc845fe91b448d1a75733f8a2e1d8dd54586.ttf.png)

##### InriaSerif_Regular400_Italic
![InriaSerif_Regular400_Italic](./911f907aefd837c9e50f383f376f437fef8b69dee712ca4f5513ffc70769cc5a.ttf.png)

##### InriaSerif_Bold700
![InriaSerif_Bold700](./ee42dcf7120d640f7b28930c80818aaec0e114784ea1935fbf0721429519d6c5.ttf.png)

##### InriaSerif_Bold700_Italic
![InriaSerif_Bold700_Italic](./503bdc8982bd9fc8af24dadb68f8e5304ddeb3d2aa5f9135811977c9b4c4eb80.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/inria-serif` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Inria Serif page on Google Fonts](https://fonts.google.com/specimen/Inria+Serif) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Inria Serif on Google Fonts](https://fonts.google.com/specimen/Inria+Serif)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/inria-serif)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/inria-serif)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This entire directory, including this README, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
