# @expo-google-fonts/ysabeau-office

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/ysabeau-office)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/ysabeau-office)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/ysabeau-office)

This package lets you use the [**Ysabeau Office**](https://fonts.google.com/specimen/Ysabeau+Office) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Ysabeau Office

![Ysabeau Office](./font-family.png)

This font family contains [18 styles](#-gallery).

- `YsabeauOffice_100Thin`
- `YsabeauOffice_200ExtraLight`
- `YsabeauOffice_300Light`
- `YsabeauOffice_400Regular`
- `YsabeauOffice_500Medium`
- `YsabeauOffice_600SemiBold`
- `YsabeauOffice_700Bold`
- `YsabeauOffice_800ExtraBold`
- `YsabeauOffice_900Black`
- `YsabeauOffice_100Thin_Italic`
- `YsabeauOffice_200ExtraLight_Italic`
- `YsabeauOffice_300Light_Italic`
- `YsabeauOffice_400Regular_Italic`
- `YsabeauOffice_500Medium_Italic`
- `YsabeauOffice_600SemiBold_Italic`
- `YsabeauOffice_700Bold_Italic`
- `YsabeauOffice_800ExtraBold_Italic`
- `YsabeauOffice_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/ysabeau-office expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, YsabeauOffice_100Thin, YsabeauOffice_200ExtraLight, YsabeauOffice_300Light, YsabeauOffice_400Regular, YsabeauOffice_500Medium, YsabeauOffice_600SemiBold, YsabeauOffice_700Bold, YsabeauOffice_800ExtraBold, YsabeauOffice_900Black, YsabeauOffice_100Thin_Italic, YsabeauOffice_200ExtraLight_Italic, YsabeauOffice_300Light_Italic, YsabeauOffice_400Regular_Italic, YsabeauOffice_500Medium_Italic, YsabeauOffice_600SemiBold_Italic, YsabeauOffice_700Bold_Italic, YsabeauOffice_800ExtraBold_Italic, YsabeauOffice_900Black_Italic } from '@expo-google-fonts/ysabeau-office';

export default () => {

  let [fontsLoaded] = useFonts({
    YsabeauOffice_100Thin, 
    YsabeauOffice_200ExtraLight, 
    YsabeauOffice_300Light, 
    YsabeauOffice_400Regular, 
    YsabeauOffice_500Medium, 
    YsabeauOffice_600SemiBold, 
    YsabeauOffice_700Bold, 
    YsabeauOffice_800ExtraBold, 
    YsabeauOffice_900Black, 
    YsabeauOffice_100Thin_Italic, 
    YsabeauOffice_200ExtraLight_Italic, 
    YsabeauOffice_300Light_Italic, 
    YsabeauOffice_400Regular_Italic, 
    YsabeauOffice_500Medium_Italic, 
    YsabeauOffice_600SemiBold_Italic, 
    YsabeauOffice_700Bold_Italic, 
    YsabeauOffice_800ExtraBold_Italic, 
    YsabeauOffice_900Black_Italic
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
          fontFamily: "YsabeauOffice_100Thin"
        }}>
          Ysabeau Office Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "YsabeauOffice_200ExtraLight"
        }}>
          Ysabeau Office Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "YsabeauOffice_300Light"
        }}>
          Ysabeau Office Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "YsabeauOffice_400Regular"
        }}>
          Ysabeau Office Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "YsabeauOffice_500Medium"
        }}>
          Ysabeau Office Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "YsabeauOffice_600SemiBold"
        }}>
          Ysabeau Office Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "YsabeauOffice_700Bold"
        }}>
          Ysabeau Office Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "YsabeauOffice_800ExtraBold"
        }}>
          Ysabeau Office Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "YsabeauOffice_900Black"
        }}>
          Ysabeau Office Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "YsabeauOffice_100Thin_Italic"
        }}>
          Ysabeau Office Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "YsabeauOffice_200ExtraLight_Italic"
        }}>
          Ysabeau Office Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "YsabeauOffice_300Light_Italic"
        }}>
          Ysabeau Office Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "YsabeauOffice_400Regular_Italic"
        }}>
          Ysabeau Office Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "YsabeauOffice_500Medium_Italic"
        }}>
          Ysabeau Office Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "YsabeauOffice_600SemiBold_Italic"
        }}>
          Ysabeau Office Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "YsabeauOffice_700Bold_Italic"
        }}>
          Ysabeau Office Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "YsabeauOffice_800ExtraBold_Italic"
        }}>
          Ysabeau Office Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "YsabeauOffice_900Black_Italic"
        }}>
          Ysabeau Office Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![YsabeauOffice_100Thin](./YsabeauOffice_100Thin.ttf.png)|![YsabeauOffice_200ExtraLight](./YsabeauOffice_200ExtraLight.ttf.png)|![YsabeauOffice_300Light](./YsabeauOffice_300Light.ttf.png)||
|![YsabeauOffice_400Regular](./YsabeauOffice_400Regular.ttf.png)|![YsabeauOffice_500Medium](./YsabeauOffice_500Medium.ttf.png)|![YsabeauOffice_600SemiBold](./YsabeauOffice_600SemiBold.ttf.png)||
|![YsabeauOffice_700Bold](./YsabeauOffice_700Bold.ttf.png)|![YsabeauOffice_800ExtraBold](./YsabeauOffice_800ExtraBold.ttf.png)|![YsabeauOffice_900Black](./YsabeauOffice_900Black.ttf.png)||
|![YsabeauOffice_100Thin_Italic](./YsabeauOffice_100Thin_Italic.ttf.png)|![YsabeauOffice_200ExtraLight_Italic](./YsabeauOffice_200ExtraLight_Italic.ttf.png)|![YsabeauOffice_300Light_Italic](./YsabeauOffice_300Light_Italic.ttf.png)||
|![YsabeauOffice_400Regular_Italic](./YsabeauOffice_400Regular_Italic.ttf.png)|![YsabeauOffice_500Medium_Italic](./YsabeauOffice_500Medium_Italic.ttf.png)|![YsabeauOffice_600SemiBold_Italic](./YsabeauOffice_600SemiBold_Italic.ttf.png)||
|![YsabeauOffice_700Bold_Italic](./YsabeauOffice_700Bold_Italic.ttf.png)|![YsabeauOffice_800ExtraBold_Italic](./YsabeauOffice_800ExtraBold_Italic.ttf.png)|![YsabeauOffice_900Black_Italic](./YsabeauOffice_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/ysabeau-office` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Ysabeau Office page on Google Fonts](https://fonts.google.com/specimen/Ysabeau+Office) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Ysabeau Office on Google Fonts](https://fonts.google.com/specimen/Ysabeau+Office)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/ysabeau-office)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/ysabeau-office)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
