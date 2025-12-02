# @expo-google-fonts/kedebideri

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/kedebideri)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/kedebideri)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/kedebideri)

This package lets you use the [**Kedebideri**](https://fonts.google.com/specimen/Kedebideri) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Kedebideri

![Kedebideri](./font-family.png)

This font family contains [6 styles](#-gallery).

- `Kedebideri_400Regular`
- `Kedebideri_500Medium`
- `Kedebideri_600SemiBold`
- `Kedebideri_700Bold`
- `Kedebideri_800ExtraBold`
- `Kedebideri_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/kedebideri expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/kedebideri/useFonts';
import { Kedebideri_400Regular } from '@expo-google-fonts/kedebideri/400Regular';
import { Kedebideri_500Medium } from '@expo-google-fonts/kedebideri/500Medium';
import { Kedebideri_600SemiBold } from '@expo-google-fonts/kedebideri/600SemiBold';
import { Kedebideri_700Bold } from '@expo-google-fonts/kedebideri/700Bold';
import { Kedebideri_800ExtraBold } from '@expo-google-fonts/kedebideri/800ExtraBold';
import { Kedebideri_900Black } from '@expo-google-fonts/kedebideri/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    Kedebideri_400Regular, 
    Kedebideri_500Medium, 
    Kedebideri_600SemiBold, 
    Kedebideri_700Bold, 
    Kedebideri_800ExtraBold, 
    Kedebideri_900Black
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
          fontFamily: "Kedebideri_400Regular"
        }}>
          Kedebideri Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Kedebideri_500Medium"
        }}>
          Kedebideri Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Kedebideri_600SemiBold"
        }}>
          Kedebideri Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Kedebideri_700Bold"
        }}>
          Kedebideri Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Kedebideri_800ExtraBold"
        }}>
          Kedebideri Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Kedebideri_900Black"
        }}>
          Kedebideri Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Kedebideri_400Regular](./400Regular/Kedebideri_400Regular.ttf.png)|![Kedebideri_500Medium](./500Medium/Kedebideri_500Medium.ttf.png)|![Kedebideri_600SemiBold](./600SemiBold/Kedebideri_600SemiBold.ttf.png)||
|![Kedebideri_700Bold](./700Bold/Kedebideri_700Bold.ttf.png)|![Kedebideri_800ExtraBold](./800ExtraBold/Kedebideri_800ExtraBold.ttf.png)|![Kedebideri_900Black](./900Black/Kedebideri_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/kedebideri` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Kedebideri page on Google Fonts](https://fonts.google.com/specimen/Kedebideri) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Kedebideri on Google Fonts](https://fonts.google.com/specimen/Kedebideri)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/kedebideri)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/kedebideri)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
