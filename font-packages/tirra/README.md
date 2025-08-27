# @expo-google-fonts/tirra

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/tirra)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/tirra)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/tirra)

This package lets you use the [**Tirra**](https://fonts.google.com/specimen/Tirra) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Tirra

![Tirra](./font-family.png)

This font family contains [6 styles](#-gallery).

- `Tirra_400Regular`
- `Tirra_500Medium`
- `Tirra_600SemiBold`
- `Tirra_700Bold`
- `Tirra_800ExtraBold`
- `Tirra_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/tirra expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/tirra/useFonts';
import { Tirra_400Regular } from '@expo-google-fonts/tirra/400Regular';
import { Tirra_500Medium } from '@expo-google-fonts/tirra/500Medium';
import { Tirra_600SemiBold } from '@expo-google-fonts/tirra/600SemiBold';
import { Tirra_700Bold } from '@expo-google-fonts/tirra/700Bold';
import { Tirra_800ExtraBold } from '@expo-google-fonts/tirra/800ExtraBold';
import { Tirra_900Black } from '@expo-google-fonts/tirra/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    Tirra_400Regular, 
    Tirra_500Medium, 
    Tirra_600SemiBold, 
    Tirra_700Bold, 
    Tirra_800ExtraBold, 
    Tirra_900Black
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
          fontFamily: "Tirra_400Regular"
        }}>
          Tirra Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Tirra_500Medium"
        }}>
          Tirra Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Tirra_600SemiBold"
        }}>
          Tirra Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Tirra_700Bold"
        }}>
          Tirra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Tirra_800ExtraBold"
        }}>
          Tirra Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Tirra_900Black"
        }}>
          Tirra Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Tirra_400Regular](./400Regular/Tirra_400Regular.ttf.png)|![Tirra_500Medium](./500Medium/Tirra_500Medium.ttf.png)|![Tirra_600SemiBold](./600SemiBold/Tirra_600SemiBold.ttf.png)||
|![Tirra_700Bold](./700Bold/Tirra_700Bold.ttf.png)|![Tirra_800ExtraBold](./800ExtraBold/Tirra_800ExtraBold.ttf.png)|![Tirra_900Black](./900Black/Tirra_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/tirra` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Tirra page on Google Fonts](https://fonts.google.com/specimen/Tirra) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Tirra on Google Fonts](https://fonts.google.com/specimen/Tirra)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/tirra)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/tirra)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
