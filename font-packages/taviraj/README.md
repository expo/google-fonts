# @expo-google-fonts/taviraj

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/taviraj)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/taviraj)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/taviraj)

This package lets you use the [**Taviraj**](https://fonts.google.com/specimen/Taviraj) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Taviraj

![Taviraj](./font-family.png)

This font family contains [18 styles](#-gallery).

- `Taviraj_Thin100`
- `Taviraj_Thin100_Italic`
- `Taviraj_ExtraLight200`
- `Taviraj_ExtraLight200_Italic`
- `Taviraj_Light300`
- `Taviraj_Light300_Italic`
- `Taviraj_Regular400`
- `Taviraj_Regular400_Italic`
- `Taviraj_Medium500`
- `Taviraj_Medium500_Italic`
- `Taviraj_SemiBold600`
- `Taviraj_SemiBold600_Italic`
- `Taviraj_Bold700`
- `Taviraj_Bold700_Italic`
- `Taviraj_ExtraBold800`
- `Taviraj_ExtraBold800_Italic`
- `Taviraj_Black900`
- `Taviraj_Black900_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/taviraj expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  Taviraj_Thin100,
  Taviraj_Thin100_Italic,
  Taviraj_ExtraLight200,
  Taviraj_ExtraLight200_Italic,
  Taviraj_Light300,
  Taviraj_Light300_Italic,
  Taviraj_Regular400,
  Taviraj_Regular400_Italic,
  Taviraj_Medium500,
  Taviraj_Medium500_Italic,
  Taviraj_SemiBold600,
  Taviraj_SemiBold600_Italic,
  Taviraj_Bold700,
  Taviraj_Bold700_Italic,
  Taviraj_ExtraBold800,
  Taviraj_ExtraBold800_Italic,
  Taviraj_Black900,
  Taviraj_Black900_Italic,
  useFonts,
} from '@expo-google-fonts/taviraj';

export default () => {
  let [fontsLoaded] = useFonts({
    Taviraj_Thin100,
    Taviraj_Thin100_Italic,
    Taviraj_ExtraLight200,
    Taviraj_ExtraLight200_Italic,
    Taviraj_Light300,
    Taviraj_Light300_Italic,
    Taviraj_Regular400,
    Taviraj_Regular400_Italic,
    Taviraj_Medium500,
    Taviraj_Medium500_Italic,
    Taviraj_SemiBold600,
    Taviraj_SemiBold600_Italic,
    Taviraj_Bold700,
    Taviraj_Bold700_Italic,
    Taviraj_ExtraBold800,
    Taviraj_ExtraBold800_Italic,
    Taviraj_Black900,
    Taviraj_Black900_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Taviraj_Thin100' }}>
          Taviraj_Thin100
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Taviraj_Thin100_Italic' }}>
          Taviraj_Thin100_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Taviraj_ExtraLight200' }}>
          Taviraj_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Taviraj_ExtraLight200_Italic' }}>
          Taviraj_ExtraLight200_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Taviraj_Light300' }}>
          Taviraj_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Taviraj_Light300_Italic' }}>
          Taviraj_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Taviraj_Regular400' }}>
          Taviraj_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Taviraj_Regular400_Italic' }}>
          Taviraj_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Taviraj_Medium500' }}>
          Taviraj_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Taviraj_Medium500_Italic' }}>
          Taviraj_Medium500_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Taviraj_SemiBold600' }}>
          Taviraj_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Taviraj_SemiBold600_Italic' }}>
          Taviraj_SemiBold600_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Taviraj_Bold700' }}>
          Taviraj_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Taviraj_Bold700_Italic' }}>
          Taviraj_Bold700_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Taviraj_ExtraBold800' }}>
          Taviraj_ExtraBold800
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Taviraj_ExtraBold800_Italic' }}>
          Taviraj_ExtraBold800_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Taviraj_Black900' }}>
          Taviraj_Black900
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Taviraj_Black900_Italic' }}>
          Taviraj_Black900_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Taviraj_Thin100
![Taviraj_Thin100](./52fbea14874ede87677741ccb667e42f7f7032e15c8b1a97be9fb092777027f3.ttf.png)

##### Taviraj_Thin100_Italic
![Taviraj_Thin100_Italic](./d637ee5b1965213b2d0a0e00861b1be03c91e65b536d89344ca8311230055a55.ttf.png)

##### Taviraj_ExtraLight200
![Taviraj_ExtraLight200](./0f7c36cf8282e0201e715b76951dfdbbb3cbfd0205738f51c9ecf4317214ac1d.ttf.png)

##### Taviraj_ExtraLight200_Italic
![Taviraj_ExtraLight200_Italic](./595da34fe677c807a56dbef57b36441f4cd9de4747ca13a95bc88dd802565032.ttf.png)

##### Taviraj_Light300
![Taviraj_Light300](./b164693b28772a83e0ba3ea3b0795121a18396d1d22e4896f1f49fc90acc48b0.ttf.png)

##### Taviraj_Light300_Italic
![Taviraj_Light300_Italic](./4835b3444e501b13a94cc6e04b4b19278bf42fae51e45998c0b41de8111b0727.ttf.png)

##### Taviraj_Regular400
![Taviraj_Regular400](./cc53748aefd7d7a100dafa7ee826dbe17e7e14c04500e79b83a7960d0e379305.ttf.png)

##### Taviraj_Regular400_Italic
![Taviraj_Regular400_Italic](./9dd995b1166e87570dc10d6a2afb2e5bdc5a0a8897063971ff30f8be824cbdb0.ttf.png)

##### Taviraj_Medium500
![Taviraj_Medium500](./8088b428c6a34c587047b747ef8b7e12084beb84bd154855e5c2d5038047e712.ttf.png)

##### Taviraj_Medium500_Italic
![Taviraj_Medium500_Italic](./f38fc8738bdc33986e0ef3c36e4c1af93939c40aee8d6db38f93edcefac57482.ttf.png)

##### Taviraj_SemiBold600
![Taviraj_SemiBold600](./60262effd08d123f96e4ab6a7b67e4bdf366592724ab6211ea76e298b32de956.ttf.png)

##### Taviraj_SemiBold600_Italic
![Taviraj_SemiBold600_Italic](./c32503bb0fe3a7c346743b68f48dba5c7de00074f0b33e16f2e1e34686a75575.ttf.png)

##### Taviraj_Bold700
![Taviraj_Bold700](./df6e4ecf9639e7dc02de4f99c5c63ebf641345e361470a40c48179c0dc47de55.ttf.png)

##### Taviraj_Bold700_Italic
![Taviraj_Bold700_Italic](./e3ea04696627c46a58fa5ef27becd6ba6de21760fbeda60718e5ea072290165b.ttf.png)

##### Taviraj_ExtraBold800
![Taviraj_ExtraBold800](./aff20cbaad70c21cda602d83dcf1df3e91122111271040a17451c90f91c0bc44.ttf.png)

##### Taviraj_ExtraBold800_Italic
![Taviraj_ExtraBold800_Italic](./ce78de38f72b4be9e1af07713b59f4497cc2677898bd647e19679c6b10bd16d7.ttf.png)

##### Taviraj_Black900
![Taviraj_Black900](./75383093cb1afbe41275d2188c2d57c958f8fb94eff2dc57382eb5c77ca82138.ttf.png)

##### Taviraj_Black900_Italic
![Taviraj_Black900_Italic](./181f5aa6c3cfc77afd3dbcbc58dd4a621984f78739969774a7f939caee61b936.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/taviraj` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Taviraj page on Google Fonts](https://fonts.google.com/specimen/Taviraj) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Taviraj on Google Fonts](https://fonts.google.com/specimen/Taviraj)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/taviraj)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/taviraj)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
