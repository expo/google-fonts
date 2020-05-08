# @expo-google-fonts/volkhov

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/volkhov)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/volkhov)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/volkhov)

This package lets you use the [**Volkhov**](https://fonts.google.com/specimen/Volkhov) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Volkhov

![Volkhov](./font-family.png)

This font family contains [4 styles](#-gallery).

- `Volkhov_Regular400`
- `Volkhov_Regular400_Italic`
- `Volkhov_Bold700`
- `Volkhov_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/volkhov expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Volkhov_Regular400,
  Volkhov_Regular400_Italic,
  Volkhov_Bold700,
  Volkhov_Bold700_Italic,
} from '@expo-google-fonts/volkhov';

export default () => {
  let [fontsLoaded] = useFonts({
    Volkhov_Regular400,
    Volkhov_Regular400_Italic,
    Volkhov_Bold700,
    Volkhov_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Volkhov_Regular400' }}>
          Volkhov_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Volkhov_Regular400_Italic' }}>
          Volkhov_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Volkhov_Bold700' }}>
          Volkhov_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Volkhov_Bold700_Italic' }}>
          Volkhov_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Volkhov_Regular400
![Volkhov_Regular400](./a3fa059553ab62381a8974ef60376b4bad0e91f2d72092094e74fb1c2fcca886.ttf.png)

##### Volkhov_Regular400_Italic
![Volkhov_Regular400_Italic](./7d27f866b8f11b00603bcc07b2e7ae49e4405fde4b3db227065ad57f92b8953c.ttf.png)

##### Volkhov_Bold700
![Volkhov_Bold700](./f24fe6c57bdf816d9c6e09602548002ca61aca7eec23b40635c4a46f84347d47.ttf.png)

##### Volkhov_Bold700_Italic
![Volkhov_Bold700_Italic](./0db6f541c0e1a1f792feaacd69708e50b99aabf1ada6028e80fca14cfafe030c.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/volkhov` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Volkhov page on Google Fonts](https://fonts.google.com/specimen/Volkhov) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Volkhov on Google Fonts](https://fonts.google.com/specimen/Volkhov)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/volkhov)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/volkhov)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
