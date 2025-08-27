# @expo-google-fonts/tasa-explorer

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/tasa-explorer)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/tasa-explorer)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/tasa-explorer)

This package lets you use the [**TASA Explorer**](https://fonts.google.com/specimen/TASA+Explorer) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## TASA Explorer

![TASA Explorer](./font-family.png)

This font family contains [5 styles](#-gallery).

- `TASAExplorer_400Regular`
- `TASAExplorer_500Medium`
- `TASAExplorer_600SemiBold`
- `TASAExplorer_700Bold`
- `TASAExplorer_800ExtraBold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/tasa-explorer expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/tasa-explorer/useFonts';
import { TASAExplorer_400Regular } from '@expo-google-fonts/tasa-explorer/400Regular';
import { TASAExplorer_500Medium } from '@expo-google-fonts/tasa-explorer/500Medium';
import { TASAExplorer_600SemiBold } from '@expo-google-fonts/tasa-explorer/600SemiBold';
import { TASAExplorer_700Bold } from '@expo-google-fonts/tasa-explorer/700Bold';
import { TASAExplorer_800ExtraBold } from '@expo-google-fonts/tasa-explorer/800ExtraBold';

export default () => {

  let [fontsLoaded] = useFonts({
    TASAExplorer_400Regular, 
    TASAExplorer_500Medium, 
    TASAExplorer_600SemiBold, 
    TASAExplorer_700Bold, 
    TASAExplorer_800ExtraBold
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
          fontFamily: "TASAExplorer_400Regular"
        }}>
          TASA Explorer Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "TASAExplorer_500Medium"
        }}>
          TASA Explorer Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "TASAExplorer_600SemiBold"
        }}>
          TASA Explorer Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "TASAExplorer_700Bold"
        }}>
          TASA Explorer Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "TASAExplorer_800ExtraBold"
        }}>
          TASA Explorer Extra Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![TASAExplorer_400Regular](./400Regular/TASAExplorer_400Regular.ttf.png)|![TASAExplorer_500Medium](./500Medium/TASAExplorer_500Medium.ttf.png)|![TASAExplorer_600SemiBold](./600SemiBold/TASAExplorer_600SemiBold.ttf.png)||
|![TASAExplorer_700Bold](./700Bold/TASAExplorer_700Bold.ttf.png)|![TASAExplorer_800ExtraBold](./800ExtraBold/TASAExplorer_800ExtraBold.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/tasa-explorer` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [TASA Explorer page on Google Fonts](https://fonts.google.com/specimen/TASA+Explorer) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [TASA Explorer on Google Fonts](https://fonts.google.com/specimen/TASA+Explorer)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/tasa-explorer)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/tasa-explorer)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
