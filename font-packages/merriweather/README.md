# @expo-google-fonts/merriweather

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/merriweather)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/merriweather)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/merriweather)

This package lets you use the [**Merriweather**](https://fonts.google.com/specimen/Merriweather) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Merriweather

![Merriweather](./font-family.png)

This font family contains [8 styles](#gallery).

- `Merriweather_Light300`
- `Merriweather_Light300_Italic`
- `Merriweather_Regular400`
- `Merriweather_Regular400_Italic`
- `Merriweather_Bold700`
- `Merriweather_Bold700_Italic`
- `Merriweather_Black900`
- `Merriweather_Black900_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/merriweather expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Merriweather_Light300,
  Merriweather_Light300_Italic,
  Merriweather_Regular400,
  Merriweather_Regular400_Italic,
  Merriweather_Bold700,
  Merriweather_Bold700_Italic,
  Merriweather_Black900,
  Merriweather_Black900_Italic,
} from '@expo-google-fonts/merriweather';

export default () => {
  let [fontsLoaded] = useFonts({
    Merriweather_Light300,
    Merriweather_Light300_Italic,
    Merriweather_Regular400,
    Merriweather_Regular400_Italic,
    Merriweather_Bold700,
    Merriweather_Bold700_Italic,
    Merriweather_Black900,
    Merriweather_Black900_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Merriweather_Light300' }}>
          Merriweather_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Merriweather_Light300_Italic' }}>
          Merriweather_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Merriweather_Regular400' }}>
          Merriweather_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Merriweather_Regular400_Italic' }}>
          Merriweather_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Merriweather_Bold700' }}>
          Merriweather_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Merriweather_Bold700_Italic' }}>
          Merriweather_Bold700_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Merriweather_Black900' }}>
          Merriweather_Black900
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Merriweather_Black900_Italic' }}>
          Merriweather_Black900_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Merriweather_Light300
![Merriweather_Light300](./8e88a5324d8b8b44503a016700f8509fb935a78d5668c821daa0092bfea21493.ttf.png)

##### Merriweather_Light300_Italic
![Merriweather_Light300_Italic](./328531f24df7325999a988ae9020486990b3f719e0380ebc4c92287bf487a8ff.ttf.png)

##### Merriweather_Regular400
![Merriweather_Regular400](./7c2d3ddfee4c635410c77868a5443efcbf7f660b64d159ba2cbd7d03f43e02f3.ttf.png)

##### Merriweather_Regular400_Italic
![Merriweather_Regular400_Italic](./ec0e385dcae93a7bfa85adcf27ca8465f179fba9a112e05f07384561b29a4b1a.ttf.png)

##### Merriweather_Bold700
![Merriweather_Bold700](./853dd62f5464fdb7677eeceedf17f771b710501d4fb15dd7076912d7430e92e3.ttf.png)

##### Merriweather_Bold700_Italic
![Merriweather_Bold700_Italic](./acca91ffc59368ee6894a41c9c417f5d2ec9f03c2c181b8e90013e49a401caf4.ttf.png)

##### Merriweather_Black900
![Merriweather_Black900](./aeb362f6ad7c32d24b6a96265394b98c1da77b6620d79ecace57a083ff21c9d2.ttf.png)

##### Merriweather_Black900_Italic
![Merriweather_Black900_Italic](./c6aef6fa65ac3afe1f4e813c13cc623329ddae356f8fa330370e3f1cd754f928.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/merriweather` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Merriweather page on Google Fonts](https://fonts.google.com/specimen/Merriweather) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Merriweather on Google Fonts](https://fonts.google.com/specimen/Merriweather)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/merriweather)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/merriweather)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
