# @expo-google-fonts/turret-road

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/turret-road)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/turret-road)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/turret-road)

This package lets you use the [**Turret Road**](https://fonts.google.com/specimen/Turret+Road) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Turret Road

![Turret Road](./font-family.png)

This font family contains [6 styles](#-gallery).

- `TurretRoad_200ExtraLight`
- `TurretRoad_300Light`
- `TurretRoad_400Regular`
- `TurretRoad_500Medium`
- `TurretRoad_700Bold`
- `TurretRoad_800ExtraBold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/turret-road expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  TurretRoad_200ExtraLight,
  TurretRoad_300Light,
  TurretRoad_400Regular,
  TurretRoad_500Medium,
  TurretRoad_700Bold,
  TurretRoad_800ExtraBold,
} from '@expo-google-fonts/turret-road';

export default () => {
  let [fontsLoaded] = useFonts({
    TurretRoad_200ExtraLight,
    TurretRoad_300Light,
    TurretRoad_400Regular,
    TurretRoad_500Medium,
    TurretRoad_700Bold,
    TurretRoad_800ExtraBold,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'TurretRoad_200ExtraLight',
          }}>
          Turret Road Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'TurretRoad_300Light',
          }}>
          Turret Road Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'TurretRoad_400Regular',
          }}>
          Turret Road Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'TurretRoad_500Medium',
          }}>
          Turret Road Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'TurretRoad_700Bold',
          }}>
          Turret Road Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'TurretRoad_800ExtraBold',
          }}>
          Turret Road Extra Bold
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### TurretRoad_200ExtraLight
![TurretRoad_200ExtraLight](./TurretRoad_200ExtraLight.ttf.png)

##### TurretRoad_300Light
![TurretRoad_300Light](./TurretRoad_300Light.ttf.png)

##### TurretRoad_400Regular
![TurretRoad_400Regular](./TurretRoad_400Regular.ttf.png)

##### TurretRoad_500Medium
![TurretRoad_500Medium](./TurretRoad_500Medium.ttf.png)

##### TurretRoad_700Bold
![TurretRoad_700Bold](./TurretRoad_700Bold.ttf.png)

##### TurretRoad_800ExtraBold
![TurretRoad_800ExtraBold](./TurretRoad_800ExtraBold.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/turret-road` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Turret Road page on Google Fonts](https://fonts.google.com/specimen/Turret+Road) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Turret Road on Google Fonts](https://fonts.google.com/specimen/Turret+Road)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/turret-road)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/turret-road)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
