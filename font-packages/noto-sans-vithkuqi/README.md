# @expo-google-fonts/noto-sans-vithkuqi

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-sans-vithkuqi)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-sans-vithkuqi)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-sans-vithkuqi)

This package lets you use the [**Noto Sans Vithkuqi**](https://fonts.google.com/specimen/Noto+Sans+Vithkuqi) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Sans Vithkuqi

![Noto Sans Vithkuqi](./font-family.png)

This font family contains [4 styles](#-gallery).

- `NotoSansVithkuqi_400Regular`
- `NotoSansVithkuqi_500Medium`
- `NotoSansVithkuqi_600SemiBold`
- `NotoSansVithkuqi_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/noto-sans-vithkuqi expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, NotoSansVithkuqi_400Regular, NotoSansVithkuqi_500Medium, NotoSansVithkuqi_600SemiBold, NotoSansVithkuqi_700Bold } from '@expo-google-fonts/noto-sans-vithkuqi';

export default () => {

  let [fontsLoaded] = useFonts({
    NotoSansVithkuqi_400Regular, 
    NotoSansVithkuqi_500Medium, 
    NotoSansVithkuqi_600SemiBold, 
    NotoSansVithkuqi_700Bold
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
          fontFamily: "NotoSansVithkuqi_400Regular"
        }}>
          Noto Sans Vithkuqi Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansVithkuqi_500Medium"
        }}>
          Noto Sans Vithkuqi Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansVithkuqi_600SemiBold"
        }}>
          Noto Sans Vithkuqi Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansVithkuqi_700Bold"
        }}>
          Noto Sans Vithkuqi Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSansVithkuqi_400Regular](./NotoSansVithkuqi_400Regular.ttf.png)|![NotoSansVithkuqi_500Medium](./NotoSansVithkuqi_500Medium.ttf.png)|![NotoSansVithkuqi_600SemiBold](./NotoSansVithkuqi_600SemiBold.ttf.png)||
|![NotoSansVithkuqi_700Bold](./NotoSansVithkuqi_700Bold.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/noto-sans-vithkuqi` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Sans Vithkuqi page on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Vithkuqi) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Sans Vithkuqi on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Vithkuqi)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-sans-vithkuqi)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-sans-vithkuqi)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
