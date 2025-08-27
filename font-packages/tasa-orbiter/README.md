# @expo-google-fonts/tasa-orbiter

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/tasa-orbiter)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/tasa-orbiter)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/tasa-orbiter)

This package lets you use the [**TASA Orbiter**](https://fonts.google.com/specimen/TASA+Orbiter) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## TASA Orbiter

![TASA Orbiter](./font-family.png)

This font family contains [5 styles](#-gallery).

- `TASAOrbiter_400Regular`
- `TASAOrbiter_500Medium`
- `TASAOrbiter_600SemiBold`
- `TASAOrbiter_700Bold`
- `TASAOrbiter_800ExtraBold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/tasa-orbiter expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/tasa-orbiter/useFonts';
import { TASAOrbiter_400Regular } from '@expo-google-fonts/tasa-orbiter/400Regular';
import { TASAOrbiter_500Medium } from '@expo-google-fonts/tasa-orbiter/500Medium';
import { TASAOrbiter_600SemiBold } from '@expo-google-fonts/tasa-orbiter/600SemiBold';
import { TASAOrbiter_700Bold } from '@expo-google-fonts/tasa-orbiter/700Bold';
import { TASAOrbiter_800ExtraBold } from '@expo-google-fonts/tasa-orbiter/800ExtraBold';

export default () => {

  let [fontsLoaded] = useFonts({
    TASAOrbiter_400Regular, 
    TASAOrbiter_500Medium, 
    TASAOrbiter_600SemiBold, 
    TASAOrbiter_700Bold, 
    TASAOrbiter_800ExtraBold
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "TASAOrbiter_400Regular"
        }}>
          TASA Orbiter Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "TASAOrbiter_500Medium"
        }}>
          TASA Orbiter Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "TASAOrbiter_600SemiBold"
        }}>
          TASA Orbiter Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "TASAOrbiter_700Bold"
        }}>
          TASA Orbiter Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "TASAOrbiter_800ExtraBold"
        }}>
          TASA Orbiter Extra Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![TASAOrbiter_400Regular](./400Regular/TASAOrbiter_400Regular.ttf.png)|![TASAOrbiter_500Medium](./500Medium/TASAOrbiter_500Medium.ttf.png)|![TASAOrbiter_600SemiBold](./600SemiBold/TASAOrbiter_600SemiBold.ttf.png)||
|![TASAOrbiter_700Bold](./700Bold/TASAOrbiter_700Bold.ttf.png)|![TASAOrbiter_800ExtraBold](./800ExtraBold/TASAOrbiter_800ExtraBold.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/tasa-orbiter` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [TASA Orbiter page on Google Fonts](https://fonts.google.com/specimen/TASA+Orbiter) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [TASA Orbiter on Google Fonts](https://fonts.google.com/specimen/TASA+Orbiter)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/tasa-orbiter)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/tasa-orbiter)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
