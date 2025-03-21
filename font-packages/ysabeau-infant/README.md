# @expo-google-fonts/ysabeau-infant

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/ysabeau-infant)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/ysabeau-infant)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/ysabeau-infant)

This package lets you use the [**Ysabeau Infant**](https://fonts.google.com/specimen/Ysabeau+Infant) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Ysabeau Infant

![Ysabeau Infant](./font-family.png)

This font family contains [18 styles](#-gallery).

- `YsabeauInfant_100Thin`
- `YsabeauInfant_200ExtraLight`
- `YsabeauInfant_300Light`
- `YsabeauInfant_400Regular`
- `YsabeauInfant_500Medium`
- `YsabeauInfant_600SemiBold`
- `YsabeauInfant_700Bold`
- `YsabeauInfant_800ExtraBold`
- `YsabeauInfant_900Black`
- `YsabeauInfant_100Thin_Italic`
- `YsabeauInfant_200ExtraLight_Italic`
- `YsabeauInfant_300Light_Italic`
- `YsabeauInfant_400Regular_Italic`
- `YsabeauInfant_500Medium_Italic`
- `YsabeauInfant_600SemiBold_Italic`
- `YsabeauInfant_700Bold_Italic`
- `YsabeauInfant_800ExtraBold_Italic`
- `YsabeauInfant_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/ysabeau-infant expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, YsabeauInfant_100Thin, YsabeauInfant_200ExtraLight, YsabeauInfant_300Light, YsabeauInfant_400Regular, YsabeauInfant_500Medium, YsabeauInfant_600SemiBold, YsabeauInfant_700Bold, YsabeauInfant_800ExtraBold, YsabeauInfant_900Black, YsabeauInfant_100Thin_Italic, YsabeauInfant_200ExtraLight_Italic, YsabeauInfant_300Light_Italic, YsabeauInfant_400Regular_Italic, YsabeauInfant_500Medium_Italic, YsabeauInfant_600SemiBold_Italic, YsabeauInfant_700Bold_Italic, YsabeauInfant_800ExtraBold_Italic, YsabeauInfant_900Black_Italic } from '@expo-google-fonts/ysabeau-infant';

export default () => {

  let [fontsLoaded] = useFonts({
    YsabeauInfant_100Thin, 
    YsabeauInfant_200ExtraLight, 
    YsabeauInfant_300Light, 
    YsabeauInfant_400Regular, 
    YsabeauInfant_500Medium, 
    YsabeauInfant_600SemiBold, 
    YsabeauInfant_700Bold, 
    YsabeauInfant_800ExtraBold, 
    YsabeauInfant_900Black, 
    YsabeauInfant_100Thin_Italic, 
    YsabeauInfant_200ExtraLight_Italic, 
    YsabeauInfant_300Light_Italic, 
    YsabeauInfant_400Regular_Italic, 
    YsabeauInfant_500Medium_Italic, 
    YsabeauInfant_600SemiBold_Italic, 
    YsabeauInfant_700Bold_Italic, 
    YsabeauInfant_800ExtraBold_Italic, 
    YsabeauInfant_900Black_Italic
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
          fontFamily: "YsabeauInfant_100Thin"
        }}>
          Ysabeau Infant Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "YsabeauInfant_200ExtraLight"
        }}>
          Ysabeau Infant Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "YsabeauInfant_300Light"
        }}>
          Ysabeau Infant Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "YsabeauInfant_400Regular"
        }}>
          Ysabeau Infant Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "YsabeauInfant_500Medium"
        }}>
          Ysabeau Infant Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "YsabeauInfant_600SemiBold"
        }}>
          Ysabeau Infant Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "YsabeauInfant_700Bold"
        }}>
          Ysabeau Infant Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "YsabeauInfant_800ExtraBold"
        }}>
          Ysabeau Infant Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "YsabeauInfant_900Black"
        }}>
          Ysabeau Infant Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "YsabeauInfant_100Thin_Italic"
        }}>
          Ysabeau Infant Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "YsabeauInfant_200ExtraLight_Italic"
        }}>
          Ysabeau Infant Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "YsabeauInfant_300Light_Italic"
        }}>
          Ysabeau Infant Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "YsabeauInfant_400Regular_Italic"
        }}>
          Ysabeau Infant Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "YsabeauInfant_500Medium_Italic"
        }}>
          Ysabeau Infant Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "YsabeauInfant_600SemiBold_Italic"
        }}>
          Ysabeau Infant Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "YsabeauInfant_700Bold_Italic"
        }}>
          Ysabeau Infant Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "YsabeauInfant_800ExtraBold_Italic"
        }}>
          Ysabeau Infant Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "YsabeauInfant_900Black_Italic"
        }}>
          Ysabeau Infant Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![YsabeauInfant_100Thin](./YsabeauInfant_100Thin.ttf.png)|![YsabeauInfant_200ExtraLight](./YsabeauInfant_200ExtraLight.ttf.png)|![YsabeauInfant_300Light](./YsabeauInfant_300Light.ttf.png)||
|![YsabeauInfant_400Regular](./YsabeauInfant_400Regular.ttf.png)|![YsabeauInfant_500Medium](./YsabeauInfant_500Medium.ttf.png)|![YsabeauInfant_600SemiBold](./YsabeauInfant_600SemiBold.ttf.png)||
|![YsabeauInfant_700Bold](./YsabeauInfant_700Bold.ttf.png)|![YsabeauInfant_800ExtraBold](./YsabeauInfant_800ExtraBold.ttf.png)|![YsabeauInfant_900Black](./YsabeauInfant_900Black.ttf.png)||
|![YsabeauInfant_100Thin_Italic](./YsabeauInfant_100Thin_Italic.ttf.png)|![YsabeauInfant_200ExtraLight_Italic](./YsabeauInfant_200ExtraLight_Italic.ttf.png)|![YsabeauInfant_300Light_Italic](./YsabeauInfant_300Light_Italic.ttf.png)||
|![YsabeauInfant_400Regular_Italic](./YsabeauInfant_400Regular_Italic.ttf.png)|![YsabeauInfant_500Medium_Italic](./YsabeauInfant_500Medium_Italic.ttf.png)|![YsabeauInfant_600SemiBold_Italic](./YsabeauInfant_600SemiBold_Italic.ttf.png)||
|![YsabeauInfant_700Bold_Italic](./YsabeauInfant_700Bold_Italic.ttf.png)|![YsabeauInfant_800ExtraBold_Italic](./YsabeauInfant_800ExtraBold_Italic.ttf.png)|![YsabeauInfant_900Black_Italic](./YsabeauInfant_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/ysabeau-infant` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Ysabeau Infant page on Google Fonts](https://fonts.google.com/specimen/Ysabeau+Infant) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Ysabeau Infant on Google Fonts](https://fonts.google.com/specimen/Ysabeau+Infant)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/ysabeau-infant)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/ysabeau-infant)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
