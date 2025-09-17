# @expo-google-fonts/bitcount-grid-single-ink

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/bitcount-grid-single-ink)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/bitcount-grid-single-ink)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/bitcount-grid-single-ink)

This package lets you use the [**Bitcount Grid Single Ink**](https://fonts.google.com/specimen/Bitcount+Grid+Single+Ink) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Bitcount Grid Single Ink

![Bitcount Grid Single Ink](./font-family.png)

This font family contains [9 styles](#-gallery).

- `BitcountGridSingleInk_100Thin`
- `BitcountGridSingleInk_200ExtraLight`
- `BitcountGridSingleInk_300Light`
- `BitcountGridSingleInk_400Regular`
- `BitcountGridSingleInk_500Medium`
- `BitcountGridSingleInk_600SemiBold`
- `BitcountGridSingleInk_700Bold`
- `BitcountGridSingleInk_800ExtraBold`
- `BitcountGridSingleInk_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/bitcount-grid-single-ink expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/bitcount-grid-single-ink/useFonts';
import { BitcountGridSingleInk_100Thin } from '@expo-google-fonts/bitcount-grid-single-ink/100Thin';
import { BitcountGridSingleInk_200ExtraLight } from '@expo-google-fonts/bitcount-grid-single-ink/200ExtraLight';
import { BitcountGridSingleInk_300Light } from '@expo-google-fonts/bitcount-grid-single-ink/300Light';
import { BitcountGridSingleInk_400Regular } from '@expo-google-fonts/bitcount-grid-single-ink/400Regular';
import { BitcountGridSingleInk_500Medium } from '@expo-google-fonts/bitcount-grid-single-ink/500Medium';
import { BitcountGridSingleInk_600SemiBold } from '@expo-google-fonts/bitcount-grid-single-ink/600SemiBold';
import { BitcountGridSingleInk_700Bold } from '@expo-google-fonts/bitcount-grid-single-ink/700Bold';
import { BitcountGridSingleInk_800ExtraBold } from '@expo-google-fonts/bitcount-grid-single-ink/800ExtraBold';
import { BitcountGridSingleInk_900Black } from '@expo-google-fonts/bitcount-grid-single-ink/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    BitcountGridSingleInk_100Thin, 
    BitcountGridSingleInk_200ExtraLight, 
    BitcountGridSingleInk_300Light, 
    BitcountGridSingleInk_400Regular, 
    BitcountGridSingleInk_500Medium, 
    BitcountGridSingleInk_600SemiBold, 
    BitcountGridSingleInk_700Bold, 
    BitcountGridSingleInk_800ExtraBold, 
    BitcountGridSingleInk_900Black
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
          fontFamily: "BitcountGridSingleInk_100Thin"
        }}>
          Bitcount Grid Single Ink Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountGridSingleInk_200ExtraLight"
        }}>
          Bitcount Grid Single Ink Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountGridSingleInk_300Light"
        }}>
          Bitcount Grid Single Ink Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountGridSingleInk_400Regular"
        }}>
          Bitcount Grid Single Ink Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountGridSingleInk_500Medium"
        }}>
          Bitcount Grid Single Ink Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountGridSingleInk_600SemiBold"
        }}>
          Bitcount Grid Single Ink Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountGridSingleInk_700Bold"
        }}>
          Bitcount Grid Single Ink Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountGridSingleInk_800ExtraBold"
        }}>
          Bitcount Grid Single Ink Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountGridSingleInk_900Black"
        }}>
          Bitcount Grid Single Ink Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![BitcountGridSingleInk_100Thin](./100Thin/BitcountGridSingleInk_100Thin.ttf.png)|![BitcountGridSingleInk_200ExtraLight](./200ExtraLight/BitcountGridSingleInk_200ExtraLight.ttf.png)|![BitcountGridSingleInk_300Light](./300Light/BitcountGridSingleInk_300Light.ttf.png)||
|![BitcountGridSingleInk_400Regular](./400Regular/BitcountGridSingleInk_400Regular.ttf.png)|![BitcountGridSingleInk_500Medium](./500Medium/BitcountGridSingleInk_500Medium.ttf.png)|![BitcountGridSingleInk_600SemiBold](./600SemiBold/BitcountGridSingleInk_600SemiBold.ttf.png)||
|![BitcountGridSingleInk_700Bold](./700Bold/BitcountGridSingleInk_700Bold.ttf.png)|![BitcountGridSingleInk_800ExtraBold](./800ExtraBold/BitcountGridSingleInk_800ExtraBold.ttf.png)|![BitcountGridSingleInk_900Black](./900Black/BitcountGridSingleInk_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/bitcount-grid-single-ink` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Bitcount Grid Single Ink page on Google Fonts](https://fonts.google.com/specimen/Bitcount+Grid+Single+Ink) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Bitcount Grid Single Ink on Google Fonts](https://fonts.google.com/specimen/Bitcount+Grid+Single+Ink)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/bitcount-grid-single-ink)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/bitcount-grid-single-ink)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
