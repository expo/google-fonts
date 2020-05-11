# @expo-google-fonts/exo-2

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/exo-2)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/exo-2)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/exo-2)

This package lets you use the [**Exo 2**](https://fonts.google.com/specimen/Exo+2) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Exo 2

![Exo 2](./font-family.png)

This font family contains [18 styles](#-gallery).

- `Exo2_Thin100`
- `Exo2_Thin100_Italic`
- `Exo2_ExtraLight200`
- `Exo2_ExtraLight200_Italic`
- `Exo2_Light300`
- `Exo2_Light300_Italic`
- `Exo2_Regular400`
- `Exo2_Regular400_Italic`
- `Exo2_Medium500`
- `Exo2_Medium500_Italic`
- `Exo2_SemiBold600`
- `Exo2_SemiBold600_Italic`
- `Exo2_Bold700`
- `Exo2_Bold700_Italic`
- `Exo2_ExtraBold800`
- `Exo2_ExtraBold800_Italic`
- `Exo2_Black900`
- `Exo2_Black900_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/exo-2 expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  Exo2_Thin100,
  Exo2_Thin100_Italic,
  Exo2_ExtraLight200,
  Exo2_ExtraLight200_Italic,
  Exo2_Light300,
  Exo2_Light300_Italic,
  Exo2_Regular400,
  Exo2_Regular400_Italic,
  Exo2_Medium500,
  Exo2_Medium500_Italic,
  Exo2_SemiBold600,
  Exo2_SemiBold600_Italic,
  Exo2_Bold700,
  Exo2_Bold700_Italic,
  Exo2_ExtraBold800,
  Exo2_ExtraBold800_Italic,
  Exo2_Black900,
  Exo2_Black900_Italic,
  useFonts,
} from '@expo-google-fonts/exo-2';

export default () => {
  let [fontsLoaded] = useFonts({
    Exo2_Thin100,
    Exo2_Thin100_Italic,
    Exo2_ExtraLight200,
    Exo2_ExtraLight200_Italic,
    Exo2_Light300,
    Exo2_Light300_Italic,
    Exo2_Regular400,
    Exo2_Regular400_Italic,
    Exo2_Medium500,
    Exo2_Medium500_Italic,
    Exo2_SemiBold600,
    Exo2_SemiBold600_Italic,
    Exo2_Bold700,
    Exo2_Bold700_Italic,
    Exo2_ExtraBold800,
    Exo2_ExtraBold800_Italic,
    Exo2_Black900,
    Exo2_Black900_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Exo2_Thin100' }}>Exo2_Thin100</Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Exo2_Thin100_Italic' }}>
          Exo2_Thin100_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Exo2_ExtraLight200' }}>
          Exo2_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Exo2_ExtraLight200_Italic' }}>
          Exo2_ExtraLight200_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Exo2_Light300' }}>
          Exo2_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Exo2_Light300_Italic' }}>
          Exo2_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Exo2_Regular400' }}>
          Exo2_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Exo2_Regular400_Italic' }}>
          Exo2_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Exo2_Medium500' }}>
          Exo2_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Exo2_Medium500_Italic' }}>
          Exo2_Medium500_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Exo2_SemiBold600' }}>
          Exo2_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Exo2_SemiBold600_Italic' }}>
          Exo2_SemiBold600_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Exo2_Bold700' }}>Exo2_Bold700</Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Exo2_Bold700_Italic' }}>
          Exo2_Bold700_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Exo2_ExtraBold800' }}>
          Exo2_ExtraBold800
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Exo2_ExtraBold800_Italic' }}>
          Exo2_ExtraBold800_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Exo2_Black900' }}>
          Exo2_Black900
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Exo2_Black900_Italic' }}>
          Exo2_Black900_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Exo2_Thin100
![Exo2_Thin100](./f19c0e2523de9afe6da463f303aefcf3e38b416875d48ef6c98328379e1a61ce.ttf.png)

##### Exo2_Thin100_Italic
![Exo2_Thin100_Italic](./d39266e34642d4861ef777d4d3ae4150ae0b18b16d94713a78bb60cf03bf85b4.ttf.png)

##### Exo2_ExtraLight200
![Exo2_ExtraLight200](./dbf766d9b363fe87cee0afda4c59bc8a59f1c8d0a0d245063c720108d85dd9d6.ttf.png)

##### Exo2_ExtraLight200_Italic
![Exo2_ExtraLight200_Italic](./fb55978ca6abd55f49aab78def94b5c8b96bed1439a6dc4dae6dd1d0596ced50.ttf.png)

##### Exo2_Light300
![Exo2_Light300](./64d41ba51bf8991e5322fbc8d80e400281604f70cd061562aad4bdf6aedd582e.ttf.png)

##### Exo2_Light300_Italic
![Exo2_Light300_Italic](./110c181389ab4ffd19a1212a2c7b53e86dd2deefa76fbd3208663e85b34cd46e.ttf.png)

##### Exo2_Regular400
![Exo2_Regular400](./a0dfef91dddc6d2e9820c4faf4c31bfa1533f090efe935e91150ee1b4cc59f4f.ttf.png)

##### Exo2_Regular400_Italic
![Exo2_Regular400_Italic](./d7c5bd167ace5154cd5e8806a913d620cb479062db24c06433f7f38b3e6811cf.ttf.png)

##### Exo2_Medium500
![Exo2_Medium500](./f9b5326ebe6f800499e333e88b5d52d47d995cb1eb20ce541991deb5ae2792a4.ttf.png)

##### Exo2_Medium500_Italic
![Exo2_Medium500_Italic](./6abd6d5f1ca760d693fe03958a2e85de8ffeeabb5e2794bc2725ce8775807924.ttf.png)

##### Exo2_SemiBold600
![Exo2_SemiBold600](./8999193c1336c6f666fba9f56ec1d12485be48c9f31a2e97e00056b311d2b79a.ttf.png)

##### Exo2_SemiBold600_Italic
![Exo2_SemiBold600_Italic](./73cdbc23b75cf90b91216670334c663046fe0b9d08f39991d5b9d26942b358a0.ttf.png)

##### Exo2_Bold700
![Exo2_Bold700](./2fa1bb398f33123661ab6d19927457c499ee32ba16819269d005ec1a4343aaf5.ttf.png)

##### Exo2_Bold700_Italic
![Exo2_Bold700_Italic](./656cda11a815f2f5c7ef493608481f3ea6da47880dbcc3b6be65059319597393.ttf.png)

##### Exo2_ExtraBold800
![Exo2_ExtraBold800](./88f76cbd5e824b5c45fb8278750d69a37690ede91efd8901a27dc5f20c69de70.ttf.png)

##### Exo2_ExtraBold800_Italic
![Exo2_ExtraBold800_Italic](./fa96b010fc061593439675e03f0f7b4f36bcf4ef79b2f68d5820122313c84ac9.ttf.png)

##### Exo2_Black900
![Exo2_Black900](./78b737edc063f02e62ffc88e8b71820aa12f17972b3dc70d9cc6aa20cbf8bb81.ttf.png)

##### Exo2_Black900_Italic
![Exo2_Black900_Italic](./9c49337689c4c8e998cdfc92575356ddef9b8d31b07c19c2e7d466c806b5de15.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/exo-2` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Exo 2 page on Google Fonts](https://fonts.google.com/specimen/Exo+2) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Exo 2 on Google Fonts](https://fonts.google.com/specimen/Exo+2)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/exo-2)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/exo-2)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
