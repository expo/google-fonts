# @expo-google-fonts/funnel-display

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/funnel-display)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/funnel-display)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/funnel-display)

This package lets you use the [**Funnel Display**](https://fonts.google.com/specimen/Funnel+Display) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Funnel Display

![Funnel Display](./font-family.png)

This font family contains [6 styles](#-gallery).

- `FunnelDisplay_300Light`
- `FunnelDisplay_400Regular`
- `FunnelDisplay_500Medium`
- `FunnelDisplay_600SemiBold`
- `FunnelDisplay_700Bold`
- `FunnelDisplay_800ExtraBold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/funnel-display expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, FunnelDisplay_300Light, FunnelDisplay_400Regular, FunnelDisplay_500Medium, FunnelDisplay_600SemiBold, FunnelDisplay_700Bold, FunnelDisplay_800ExtraBold } from '@expo-google-fonts/funnel-display';

export default () => {

  let [fontsLoaded] = useFonts({
    FunnelDisplay_300Light, 
    FunnelDisplay_400Regular, 
    FunnelDisplay_500Medium, 
    FunnelDisplay_600SemiBold, 
    FunnelDisplay_700Bold, 
    FunnelDisplay_800ExtraBold
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FunnelDisplay_300Light"
        }}>
          Funnel Display Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FunnelDisplay_400Regular"
        }}>
          Funnel Display Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FunnelDisplay_500Medium"
        }}>
          Funnel Display Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FunnelDisplay_600SemiBold"
        }}>
          Funnel Display Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FunnelDisplay_700Bold"
        }}>
          Funnel Display Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FunnelDisplay_800ExtraBold"
        }}>
          Funnel Display Extra Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![FunnelDisplay_300Light](./FunnelDisplay_300Light.ttf.png)|![FunnelDisplay_400Regular](./FunnelDisplay_400Regular.ttf.png)|![FunnelDisplay_500Medium](./FunnelDisplay_500Medium.ttf.png)||
|![FunnelDisplay_600SemiBold](./FunnelDisplay_600SemiBold.ttf.png)|![FunnelDisplay_700Bold](./FunnelDisplay_700Bold.ttf.png)|![FunnelDisplay_800ExtraBold](./FunnelDisplay_800ExtraBold.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/funnel-display` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Funnel Display page on Google Fonts](https://fonts.google.com/specimen/Funnel+Display) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Funnel Display on Google Fonts](https://fonts.google.com/specimen/Funnel+Display)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/funnel-display)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/funnel-display)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
