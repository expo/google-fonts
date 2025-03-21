# @expo-google-fonts/crimson-pro

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/crimson-pro)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/crimson-pro)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/crimson-pro)

This package lets you use the [**Crimson Pro**](https://fonts.google.com/specimen/Crimson+Pro) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Crimson Pro

![Crimson Pro](./font-family.png)

This font family contains [16 styles](#-gallery).

- `CrimsonPro_200ExtraLight`
- `CrimsonPro_300Light`
- `CrimsonPro_400Regular`
- `CrimsonPro_500Medium`
- `CrimsonPro_600SemiBold`
- `CrimsonPro_700Bold`
- `CrimsonPro_800ExtraBold`
- `CrimsonPro_900Black`
- `CrimsonPro_200ExtraLight_Italic`
- `CrimsonPro_300Light_Italic`
- `CrimsonPro_400Regular_Italic`
- `CrimsonPro_500Medium_Italic`
- `CrimsonPro_600SemiBold_Italic`
- `CrimsonPro_700Bold_Italic`
- `CrimsonPro_800ExtraBold_Italic`
- `CrimsonPro_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/crimson-pro expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, CrimsonPro_200ExtraLight, CrimsonPro_300Light, CrimsonPro_400Regular, CrimsonPro_500Medium, CrimsonPro_600SemiBold, CrimsonPro_700Bold, CrimsonPro_800ExtraBold, CrimsonPro_900Black, CrimsonPro_200ExtraLight_Italic, CrimsonPro_300Light_Italic, CrimsonPro_400Regular_Italic, CrimsonPro_500Medium_Italic, CrimsonPro_600SemiBold_Italic, CrimsonPro_700Bold_Italic, CrimsonPro_800ExtraBold_Italic, CrimsonPro_900Black_Italic } from '@expo-google-fonts/crimson-pro';

export default () => {

  let [fontsLoaded] = useFonts({
    CrimsonPro_200ExtraLight, 
    CrimsonPro_300Light, 
    CrimsonPro_400Regular, 
    CrimsonPro_500Medium, 
    CrimsonPro_600SemiBold, 
    CrimsonPro_700Bold, 
    CrimsonPro_800ExtraBold, 
    CrimsonPro_900Black, 
    CrimsonPro_200ExtraLight_Italic, 
    CrimsonPro_300Light_Italic, 
    CrimsonPro_400Regular_Italic, 
    CrimsonPro_500Medium_Italic, 
    CrimsonPro_600SemiBold_Italic, 
    CrimsonPro_700Bold_Italic, 
    CrimsonPro_800ExtraBold_Italic, 
    CrimsonPro_900Black_Italic
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
          fontFamily: "CrimsonPro_200ExtraLight"
        }}>
          Crimson Pro Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "CrimsonPro_300Light"
        }}>
          Crimson Pro Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "CrimsonPro_400Regular"
        }}>
          Crimson Pro Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "CrimsonPro_500Medium"
        }}>
          Crimson Pro Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "CrimsonPro_600SemiBold"
        }}>
          Crimson Pro Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "CrimsonPro_700Bold"
        }}>
          Crimson Pro Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "CrimsonPro_800ExtraBold"
        }}>
          Crimson Pro Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "CrimsonPro_900Black"
        }}>
          Crimson Pro Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "CrimsonPro_200ExtraLight_Italic"
        }}>
          Crimson Pro Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "CrimsonPro_300Light_Italic"
        }}>
          Crimson Pro Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "CrimsonPro_400Regular_Italic"
        }}>
          Crimson Pro Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "CrimsonPro_500Medium_Italic"
        }}>
          Crimson Pro Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "CrimsonPro_600SemiBold_Italic"
        }}>
          Crimson Pro Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "CrimsonPro_700Bold_Italic"
        }}>
          Crimson Pro Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "CrimsonPro_800ExtraBold_Italic"
        }}>
          Crimson Pro Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "CrimsonPro_900Black_Italic"
        }}>
          Crimson Pro Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![CrimsonPro_200ExtraLight](./CrimsonPro_200ExtraLight.ttf.png)|![CrimsonPro_300Light](./CrimsonPro_300Light.ttf.png)|![CrimsonPro_400Regular](./CrimsonPro_400Regular.ttf.png)||
|![CrimsonPro_500Medium](./CrimsonPro_500Medium.ttf.png)|![CrimsonPro_600SemiBold](./CrimsonPro_600SemiBold.ttf.png)|![CrimsonPro_700Bold](./CrimsonPro_700Bold.ttf.png)||
|![CrimsonPro_800ExtraBold](./CrimsonPro_800ExtraBold.ttf.png)|![CrimsonPro_900Black](./CrimsonPro_900Black.ttf.png)|![CrimsonPro_200ExtraLight_Italic](./CrimsonPro_200ExtraLight_Italic.ttf.png)||
|![CrimsonPro_300Light_Italic](./CrimsonPro_300Light_Italic.ttf.png)|![CrimsonPro_400Regular_Italic](./CrimsonPro_400Regular_Italic.ttf.png)|![CrimsonPro_500Medium_Italic](./CrimsonPro_500Medium_Italic.ttf.png)||
|![CrimsonPro_600SemiBold_Italic](./CrimsonPro_600SemiBold_Italic.ttf.png)|![CrimsonPro_700Bold_Italic](./CrimsonPro_700Bold_Italic.ttf.png)|![CrimsonPro_800ExtraBold_Italic](./CrimsonPro_800ExtraBold_Italic.ttf.png)||
|![CrimsonPro_900Black_Italic](./CrimsonPro_900Black_Italic.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/crimson-pro` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Crimson Pro page on Google Fonts](https://fonts.google.com/specimen/Crimson+Pro) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Crimson Pro on Google Fonts](https://fonts.google.com/specimen/Crimson+Pro)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/crimson-pro)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/crimson-pro)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
