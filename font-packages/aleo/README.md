# @expo-google-fonts/aleo

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/aleo)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/aleo)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/aleo)

This package lets you use the [**Aleo**](https://fonts.google.com/specimen/Aleo) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Aleo

![Aleo](./font-family.png)

This font family contains [6 styles](#-gallery).

- `Aleo_Light300`
- `Aleo_Light300_Italic`
- `Aleo_Regular400`
- `Aleo_Regular400_Italic`
- `Aleo_Bold700`
- `Aleo_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/aleo expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Aleo_Light300,
  Aleo_Light300_Italic,
  Aleo_Regular400,
  Aleo_Regular400_Italic,
  Aleo_Bold700,
  Aleo_Bold700_Italic,
} from '@expo-google-fonts/aleo';

export default () => {
  let [fontsLoaded] = useFonts({
    Aleo_Light300,
    Aleo_Light300_Italic,
    Aleo_Regular400,
    Aleo_Regular400_Italic,
    Aleo_Bold700,
    Aleo_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Aleo_Light300' }}>
          Aleo_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Aleo_Light300_Italic' }}>
          Aleo_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Aleo_Regular400' }}>
          Aleo_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Aleo_Regular400_Italic' }}>
          Aleo_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Aleo_Bold700' }}>Aleo_Bold700</Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Aleo_Bold700_Italic' }}>
          Aleo_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Aleo_Light300
![Aleo_Light300](./8844034f7614859b836238cb530853c190b011335edbfc9fd9dbb15669134bcb.ttf.png)

##### Aleo_Light300_Italic
![Aleo_Light300_Italic](./9d41d1b8e554c18ef31b39cd96576f58048ab1dacd1e03dd349c3f471917ab43.ttf.png)

##### Aleo_Regular400
![Aleo_Regular400](./4124c4a19546d618079ccad928418735907b0eff5c68a0faf16b8fd3ec1d5bc2.ttf.png)

##### Aleo_Regular400_Italic
![Aleo_Regular400_Italic](./7662bf685a6bddd2908c8392229aac54817f3666c9915cec596880a13eef66c9.ttf.png)

##### Aleo_Bold700
![Aleo_Bold700](./d20df7d3bc69a847115b4c7f6de4db4d8aa878a8ad3ccc70a83b9beb9d29826c.ttf.png)

##### Aleo_Bold700_Italic
![Aleo_Bold700_Italic](./0277e97f9c04c3812b3987b151b56953251d09574f7f649b461074b2439a4026.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/aleo` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Aleo page on Google Fonts](https://fonts.google.com/specimen/Aleo) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Aleo on Google Fonts](https://fonts.google.com/specimen/Aleo)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/aleo)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/aleo)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
