# @expo-google-fonts/funnel-sans

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/funnel-sans)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/funnel-sans)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/funnel-sans)

This package lets you use the [**Funnel Sans**](https://fonts.google.com/specimen/Funnel+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Funnel Sans

![Funnel Sans](./font-family.png)

This font family contains [12 styles](#-gallery).

- `FunnelSans_300Light`
- `FunnelSans_400Regular`
- `FunnelSans_500Medium`
- `FunnelSans_600SemiBold`
- `FunnelSans_700Bold`
- `FunnelSans_800ExtraBold`
- `FunnelSans_300Light_Italic`
- `FunnelSans_400Regular_Italic`
- `FunnelSans_500Medium_Italic`
- `FunnelSans_600SemiBold_Italic`
- `FunnelSans_700Bold_Italic`
- `FunnelSans_800ExtraBold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/funnel-sans expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, FunnelSans_300Light, FunnelSans_400Regular, FunnelSans_500Medium, FunnelSans_600SemiBold, FunnelSans_700Bold, FunnelSans_800ExtraBold, FunnelSans_300Light_Italic, FunnelSans_400Regular_Italic, FunnelSans_500Medium_Italic, FunnelSans_600SemiBold_Italic, FunnelSans_700Bold_Italic, FunnelSans_800ExtraBold_Italic } from '@expo-google-fonts/funnel-sans';

export default () => {

  let [fontsLoaded] = useFonts({
    FunnelSans_300Light, 
    FunnelSans_400Regular, 
    FunnelSans_500Medium, 
    FunnelSans_600SemiBold, 
    FunnelSans_700Bold, 
    FunnelSans_800ExtraBold, 
    FunnelSans_300Light_Italic, 
    FunnelSans_400Regular_Italic, 
    FunnelSans_500Medium_Italic, 
    FunnelSans_600SemiBold_Italic, 
    FunnelSans_700Bold_Italic, 
    FunnelSans_800ExtraBold_Italic
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
          fontFamily: "FunnelSans_300Light"
        }}>
          Funnel Sans Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FunnelSans_400Regular"
        }}>
          Funnel Sans Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FunnelSans_500Medium"
        }}>
          Funnel Sans Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FunnelSans_600SemiBold"
        }}>
          Funnel Sans Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FunnelSans_700Bold"
        }}>
          Funnel Sans Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FunnelSans_800ExtraBold"
        }}>
          Funnel Sans Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FunnelSans_300Light_Italic"
        }}>
          Funnel Sans Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FunnelSans_400Regular_Italic"
        }}>
          Funnel Sans Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FunnelSans_500Medium_Italic"
        }}>
          Funnel Sans Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FunnelSans_600SemiBold_Italic"
        }}>
          Funnel Sans Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FunnelSans_700Bold_Italic"
        }}>
          Funnel Sans Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FunnelSans_800ExtraBold_Italic"
        }}>
          Funnel Sans Extra Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![FunnelSans_300Light](./FunnelSans_300Light.ttf.png)|![FunnelSans_400Regular](./FunnelSans_400Regular.ttf.png)|![FunnelSans_500Medium](./FunnelSans_500Medium.ttf.png)||
|![FunnelSans_600SemiBold](./FunnelSans_600SemiBold.ttf.png)|![FunnelSans_700Bold](./FunnelSans_700Bold.ttf.png)|![FunnelSans_800ExtraBold](./FunnelSans_800ExtraBold.ttf.png)||
|![FunnelSans_300Light_Italic](./FunnelSans_300Light_Italic.ttf.png)|![FunnelSans_400Regular_Italic](./FunnelSans_400Regular_Italic.ttf.png)|![FunnelSans_500Medium_Italic](./FunnelSans_500Medium_Italic.ttf.png)||
|![FunnelSans_600SemiBold_Italic](./FunnelSans_600SemiBold_Italic.ttf.png)|![FunnelSans_700Bold_Italic](./FunnelSans_700Bold_Italic.ttf.png)|![FunnelSans_800ExtraBold_Italic](./FunnelSans_800ExtraBold_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/funnel-sans` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Funnel Sans page on Google Fonts](https://fonts.google.com/specimen/Funnel+Sans) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Funnel Sans on Google Fonts](https://fonts.google.com/specimen/Funnel+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/funnel-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/funnel-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
