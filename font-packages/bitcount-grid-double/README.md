# @expo-google-fonts/bitcount-grid-double

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/bitcount-grid-double)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/bitcount-grid-double)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/bitcount-grid-double)

This package lets you use the [**Bitcount Grid Double**](https://fonts.google.com/specimen/Bitcount+Grid+Double) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Bitcount Grid Double

![Bitcount Grid Double](./font-family.png)

This font family contains [9 styles](#-gallery).

- `BitcountGridDouble_100Thin`
- `BitcountGridDouble_200ExtraLight`
- `BitcountGridDouble_300Light`
- `BitcountGridDouble_400Regular`
- `BitcountGridDouble_500Medium`
- `BitcountGridDouble_600SemiBold`
- `BitcountGridDouble_700Bold`
- `BitcountGridDouble_800ExtraBold`
- `BitcountGridDouble_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/bitcount-grid-double expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/bitcount-grid-double/useFonts';
import { BitcountGridDouble_100Thin } from '@expo-google-fonts/bitcount-grid-double/100Thin';
import { BitcountGridDouble_200ExtraLight } from '@expo-google-fonts/bitcount-grid-double/200ExtraLight';
import { BitcountGridDouble_300Light } from '@expo-google-fonts/bitcount-grid-double/300Light';
import { BitcountGridDouble_400Regular } from '@expo-google-fonts/bitcount-grid-double/400Regular';
import { BitcountGridDouble_500Medium } from '@expo-google-fonts/bitcount-grid-double/500Medium';
import { BitcountGridDouble_600SemiBold } from '@expo-google-fonts/bitcount-grid-double/600SemiBold';
import { BitcountGridDouble_700Bold } from '@expo-google-fonts/bitcount-grid-double/700Bold';
import { BitcountGridDouble_800ExtraBold } from '@expo-google-fonts/bitcount-grid-double/800ExtraBold';
import { BitcountGridDouble_900Black } from '@expo-google-fonts/bitcount-grid-double/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    BitcountGridDouble_100Thin, 
    BitcountGridDouble_200ExtraLight, 
    BitcountGridDouble_300Light, 
    BitcountGridDouble_400Regular, 
    BitcountGridDouble_500Medium, 
    BitcountGridDouble_600SemiBold, 
    BitcountGridDouble_700Bold, 
    BitcountGridDouble_800ExtraBold, 
    BitcountGridDouble_900Black
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
          fontFamily: "BitcountGridDouble_100Thin"
        }}>
          Bitcount Grid Double Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountGridDouble_200ExtraLight"
        }}>
          Bitcount Grid Double Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountGridDouble_300Light"
        }}>
          Bitcount Grid Double Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountGridDouble_400Regular"
        }}>
          Bitcount Grid Double Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountGridDouble_500Medium"
        }}>
          Bitcount Grid Double Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountGridDouble_600SemiBold"
        }}>
          Bitcount Grid Double Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountGridDouble_700Bold"
        }}>
          Bitcount Grid Double Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountGridDouble_800ExtraBold"
        }}>
          Bitcount Grid Double Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountGridDouble_900Black"
        }}>
          Bitcount Grid Double Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![BitcountGridDouble_100Thin](./100Thin/BitcountGridDouble_100Thin.ttf.png)|![BitcountGridDouble_200ExtraLight](./200ExtraLight/BitcountGridDouble_200ExtraLight.ttf.png)|![BitcountGridDouble_300Light](./300Light/BitcountGridDouble_300Light.ttf.png)||
|![BitcountGridDouble_400Regular](./400Regular/BitcountGridDouble_400Regular.ttf.png)|![BitcountGridDouble_500Medium](./500Medium/BitcountGridDouble_500Medium.ttf.png)|![BitcountGridDouble_600SemiBold](./600SemiBold/BitcountGridDouble_600SemiBold.ttf.png)||
|![BitcountGridDouble_700Bold](./700Bold/BitcountGridDouble_700Bold.ttf.png)|![BitcountGridDouble_800ExtraBold](./800ExtraBold/BitcountGridDouble_800ExtraBold.ttf.png)|![BitcountGridDouble_900Black](./900Black/BitcountGridDouble_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/bitcount-grid-double` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Bitcount Grid Double page on Google Fonts](https://fonts.google.com/specimen/Bitcount+Grid+Double) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Bitcount Grid Double on Google Fonts](https://fonts.google.com/specimen/Bitcount+Grid+Double)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/bitcount-grid-double)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/bitcount-grid-double)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
