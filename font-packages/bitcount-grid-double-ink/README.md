# @expo-google-fonts/bitcount-grid-double-ink

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/bitcount-grid-double-ink)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/bitcount-grid-double-ink)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/bitcount-grid-double-ink)

This package lets you use the [**Bitcount Grid Double Ink**](https://fonts.google.com/specimen/Bitcount+Grid+Double+Ink) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Bitcount Grid Double Ink

![Bitcount Grid Double Ink](./font-family.png)

This font family contains [9 styles](#-gallery).

- `BitcountGridDoubleInk_100Thin`
- `BitcountGridDoubleInk_200ExtraLight`
- `BitcountGridDoubleInk_300Light`
- `BitcountGridDoubleInk_400Regular`
- `BitcountGridDoubleInk_500Medium`
- `BitcountGridDoubleInk_600SemiBold`
- `BitcountGridDoubleInk_700Bold`
- `BitcountGridDoubleInk_800ExtraBold`
- `BitcountGridDoubleInk_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/bitcount-grid-double-ink expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/bitcount-grid-double-ink/useFonts';
import { BitcountGridDoubleInk_100Thin } from '@expo-google-fonts/bitcount-grid-double-ink/100Thin';
import { BitcountGridDoubleInk_200ExtraLight } from '@expo-google-fonts/bitcount-grid-double-ink/200ExtraLight';
import { BitcountGridDoubleInk_300Light } from '@expo-google-fonts/bitcount-grid-double-ink/300Light';
import { BitcountGridDoubleInk_400Regular } from '@expo-google-fonts/bitcount-grid-double-ink/400Regular';
import { BitcountGridDoubleInk_500Medium } from '@expo-google-fonts/bitcount-grid-double-ink/500Medium';
import { BitcountGridDoubleInk_600SemiBold } from '@expo-google-fonts/bitcount-grid-double-ink/600SemiBold';
import { BitcountGridDoubleInk_700Bold } from '@expo-google-fonts/bitcount-grid-double-ink/700Bold';
import { BitcountGridDoubleInk_800ExtraBold } from '@expo-google-fonts/bitcount-grid-double-ink/800ExtraBold';
import { BitcountGridDoubleInk_900Black } from '@expo-google-fonts/bitcount-grid-double-ink/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    BitcountGridDoubleInk_100Thin, 
    BitcountGridDoubleInk_200ExtraLight, 
    BitcountGridDoubleInk_300Light, 
    BitcountGridDoubleInk_400Regular, 
    BitcountGridDoubleInk_500Medium, 
    BitcountGridDoubleInk_600SemiBold, 
    BitcountGridDoubleInk_700Bold, 
    BitcountGridDoubleInk_800ExtraBold, 
    BitcountGridDoubleInk_900Black
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
          fontFamily: "BitcountGridDoubleInk_100Thin"
        }}>
          Bitcount Grid Double Ink Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountGridDoubleInk_200ExtraLight"
        }}>
          Bitcount Grid Double Ink Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountGridDoubleInk_300Light"
        }}>
          Bitcount Grid Double Ink Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountGridDoubleInk_400Regular"
        }}>
          Bitcount Grid Double Ink Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountGridDoubleInk_500Medium"
        }}>
          Bitcount Grid Double Ink Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountGridDoubleInk_600SemiBold"
        }}>
          Bitcount Grid Double Ink Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountGridDoubleInk_700Bold"
        }}>
          Bitcount Grid Double Ink Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountGridDoubleInk_800ExtraBold"
        }}>
          Bitcount Grid Double Ink Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountGridDoubleInk_900Black"
        }}>
          Bitcount Grid Double Ink Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![BitcountGridDoubleInk_100Thin](./100Thin/BitcountGridDoubleInk_100Thin.ttf.png)|![BitcountGridDoubleInk_200ExtraLight](./200ExtraLight/BitcountGridDoubleInk_200ExtraLight.ttf.png)|![BitcountGridDoubleInk_300Light](./300Light/BitcountGridDoubleInk_300Light.ttf.png)||
|![BitcountGridDoubleInk_400Regular](./400Regular/BitcountGridDoubleInk_400Regular.ttf.png)|![BitcountGridDoubleInk_500Medium](./500Medium/BitcountGridDoubleInk_500Medium.ttf.png)|![BitcountGridDoubleInk_600SemiBold](./600SemiBold/BitcountGridDoubleInk_600SemiBold.ttf.png)||
|![BitcountGridDoubleInk_700Bold](./700Bold/BitcountGridDoubleInk_700Bold.ttf.png)|![BitcountGridDoubleInk_800ExtraBold](./800ExtraBold/BitcountGridDoubleInk_800ExtraBold.ttf.png)|![BitcountGridDoubleInk_900Black](./900Black/BitcountGridDoubleInk_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/bitcount-grid-double-ink` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Bitcount Grid Double Ink page on Google Fonts](https://fonts.google.com/specimen/Bitcount+Grid+Double+Ink) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Bitcount Grid Double Ink on Google Fonts](https://fonts.google.com/specimen/Bitcount+Grid+Double+Ink)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/bitcount-grid-double-ink)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/bitcount-grid-double-ink)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
