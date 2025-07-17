# @expo-google-fonts/bitcount-grid-single

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/bitcount-grid-single)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/bitcount-grid-single)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/bitcount-grid-single)

This package lets you use the [**Bitcount Grid Single**](https://fonts.google.com/specimen/Bitcount+Grid+Single) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Bitcount Grid Single

![Bitcount Grid Single](./font-family.png)

This font family contains [9 styles](#-gallery).

- `BitcountGridSingle_100Thin`
- `BitcountGridSingle_200ExtraLight`
- `BitcountGridSingle_300Light`
- `BitcountGridSingle_400Regular`
- `BitcountGridSingle_500Medium`
- `BitcountGridSingle_600SemiBold`
- `BitcountGridSingle_700Bold`
- `BitcountGridSingle_800ExtraBold`
- `BitcountGridSingle_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/bitcount-grid-single expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/bitcount-grid-single/useFonts';
import { BitcountGridSingle_100Thin } from '@expo-google-fonts/bitcount-grid-single/100Thin';
import { BitcountGridSingle_200ExtraLight } from '@expo-google-fonts/bitcount-grid-single/200ExtraLight';
import { BitcountGridSingle_300Light } from '@expo-google-fonts/bitcount-grid-single/300Light';
import { BitcountGridSingle_400Regular } from '@expo-google-fonts/bitcount-grid-single/400Regular';
import { BitcountGridSingle_500Medium } from '@expo-google-fonts/bitcount-grid-single/500Medium';
import { BitcountGridSingle_600SemiBold } from '@expo-google-fonts/bitcount-grid-single/600SemiBold';
import { BitcountGridSingle_700Bold } from '@expo-google-fonts/bitcount-grid-single/700Bold';
import { BitcountGridSingle_800ExtraBold } from '@expo-google-fonts/bitcount-grid-single/800ExtraBold';
import { BitcountGridSingle_900Black } from '@expo-google-fonts/bitcount-grid-single/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    BitcountGridSingle_100Thin, 
    BitcountGridSingle_200ExtraLight, 
    BitcountGridSingle_300Light, 
    BitcountGridSingle_400Regular, 
    BitcountGridSingle_500Medium, 
    BitcountGridSingle_600SemiBold, 
    BitcountGridSingle_700Bold, 
    BitcountGridSingle_800ExtraBold, 
    BitcountGridSingle_900Black
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
          fontFamily: "BitcountGridSingle_100Thin"
        }}>
          Bitcount Grid Single Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountGridSingle_200ExtraLight"
        }}>
          Bitcount Grid Single Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountGridSingle_300Light"
        }}>
          Bitcount Grid Single Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountGridSingle_400Regular"
        }}>
          Bitcount Grid Single Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountGridSingle_500Medium"
        }}>
          Bitcount Grid Single Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountGridSingle_600SemiBold"
        }}>
          Bitcount Grid Single Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountGridSingle_700Bold"
        }}>
          Bitcount Grid Single Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountGridSingle_800ExtraBold"
        }}>
          Bitcount Grid Single Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountGridSingle_900Black"
        }}>
          Bitcount Grid Single Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![BitcountGridSingle_100Thin](./100Thin/BitcountGridSingle_100Thin.ttf.png)|![BitcountGridSingle_200ExtraLight](./200ExtraLight/BitcountGridSingle_200ExtraLight.ttf.png)|![BitcountGridSingle_300Light](./300Light/BitcountGridSingle_300Light.ttf.png)||
|![BitcountGridSingle_400Regular](./400Regular/BitcountGridSingle_400Regular.ttf.png)|![BitcountGridSingle_500Medium](./500Medium/BitcountGridSingle_500Medium.ttf.png)|![BitcountGridSingle_600SemiBold](./600SemiBold/BitcountGridSingle_600SemiBold.ttf.png)||
|![BitcountGridSingle_700Bold](./700Bold/BitcountGridSingle_700Bold.ttf.png)|![BitcountGridSingle_800ExtraBold](./800ExtraBold/BitcountGridSingle_800ExtraBold.ttf.png)|![BitcountGridSingle_900Black](./900Black/BitcountGridSingle_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/bitcount-grid-single` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Bitcount Grid Single page on Google Fonts](https://fonts.google.com/specimen/Bitcount+Grid+Single) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Bitcount Grid Single on Google Fonts](https://fonts.google.com/specimen/Bitcount+Grid+Single)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/bitcount-grid-single)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/bitcount-grid-single)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
