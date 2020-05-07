# @expo-google-fonts/rubik

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/rubik)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/rubik)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/rubik)

This package lets you use the [**Rubik**](https://fonts.google.com/specimen/Rubik) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Rubik

![Rubik](./font-family.png)

This font family contains [10 styles](#gallery).

- `Rubik_Light300`
- `Rubik_Light300_Italic`
- `Rubik_Regular400`
- `Rubik_Regular400_Italic`
- `Rubik_Medium500`
- `Rubik_Medium500_Italic`
- `Rubik_Bold700`
- `Rubik_Bold700_Italic`
- `Rubik_Black900`
- `Rubik_Black900_Italic`

## 🔡 Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/rubik expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Rubik_Light300,
  Rubik_Light300_Italic,
  Rubik_Regular400,
  Rubik_Regular400_Italic,
  Rubik_Medium500,
  Rubik_Medium500_Italic,
  Rubik_Bold700,
  Rubik_Bold700_Italic,
  Rubik_Black900,
  Rubik_Black900_Italic,
} from '@expo-google-fonts/rubik';

export default () => {
  let [fontsLoaded] = useFonts({
    Rubik_Light300,
    Rubik_Light300_Italic,
    Rubik_Regular400,
    Rubik_Regular400_Italic,
    Rubik_Medium500,
    Rubik_Medium500_Italic,
    Rubik_Bold700,
    Rubik_Bold700_Italic,
    Rubik_Black900,
    Rubik_Black900_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Rubik_Light300' }}>
          Rubik_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Rubik_Light300_Italic' }}>
          Rubik_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Rubik_Regular400' }}>
          Rubik_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Rubik_Regular400_Italic' }}>
          Rubik_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Rubik_Medium500' }}>
          Rubik_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Rubik_Medium500_Italic' }}>
          Rubik_Medium500_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Rubik_Bold700' }}>
          Rubik_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Rubik_Bold700_Italic' }}>
          Rubik_Bold700_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Rubik_Black900' }}>
          Rubik_Black900
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Rubik_Black900_Italic' }}>
          Rubik_Black900_Italic
        </Text>
      </View>
    );
  }
};

```

## 📖 Gallery

##### Rubik_Light300
![Rubik_Light300](./d06ee1ddd9a38ecea7c204c94d69e670e155c7e5f6b9ca5bdbbc851871397569.ttf.png)

##### Rubik_Light300_Italic
![Rubik_Light300_Italic](./39eb0e8cc0f4f0f949cd7ab1192004ad43fa616ab0ba09ba2f1c5e975b6ed29f.ttf.png)

##### Rubik_Regular400
![Rubik_Regular400](./1441b864d5f661c6ad072120b1ee340e6c799fab34f7d408ec3fbf11f41f3ea0.ttf.png)

##### Rubik_Regular400_Italic
![Rubik_Regular400_Italic](./1daca2e29940a75b3f1d4f3d7bb0356f63332d3013133093e3a75295dcdaf781.ttf.png)

##### Rubik_Medium500
![Rubik_Medium500](./334711470701a9df2e7c93bcc418d6d16e8844ed0bf4ae4411f588cdb913869a.ttf.png)

##### Rubik_Medium500_Italic
![Rubik_Medium500_Italic](./131d5d182158888dbccfcf0de7726b6a878bdb7eb60bbc96fb8a42561abc6b8c.ttf.png)

##### Rubik_Bold700
![Rubik_Bold700](./395804d64aff5eda80de3c9e8fc2ffe482af2f6483707546f9fb8c3b14e747d9.ttf.png)

##### Rubik_Bold700_Italic
![Rubik_Bold700_Italic](./7dc9a621668992ae25fd33cb83bc658c0bd8e2068c92524544164c3ba79737b6.ttf.png)

##### Rubik_Black900
![Rubik_Black900](./f660cd5e361c3f00ea913d713f53325c9248887d961ee7a130335fc796750fff.ttf.png)

##### Rubik_Black900_Italic
![Rubik_Black900_Italic](./1e373f9418d94e2ae6e4b31972520bf13c7b93e0811f8621d0ce8d72e0576c9b.ttf.png)


## 🖥️ Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## ⚖️ License

The `@expo-google-fonts/rubik` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Rubik page on Google Fonts](https://fonts.google.com/specimen/Rubik) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Rubik on Google Fonts](https://fonts.google.com/specimen/Rubik)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/rubik)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/rubik)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
