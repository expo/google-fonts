# @expo-google-fonts/varta

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/varta)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/varta)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/varta)

This package lets you use the [**Varta**](https://fonts.google.com/specimen/Varta) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Varta

![Varta](./font-family.png)

This font family contains [5 styles](#-gallery).

- `Varta_300Light`
- `Varta_400Regular`
- `Varta_500Medium`
- `Varta_600SemiBold`
- `Varta_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/varta expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/varta/useFonts';
import { Varta_300Light } from '@expo-google-fonts/varta/300Light';
import { Varta_400Regular } from '@expo-google-fonts/varta/400Regular';
import { Varta_500Medium } from '@expo-google-fonts/varta/500Medium';
import { Varta_600SemiBold } from '@expo-google-fonts/varta/600SemiBold';
import { Varta_700Bold } from '@expo-google-fonts/varta/700Bold';

export default () => {

  let [fontsLoaded] = useFonts({
    Varta_300Light, 
    Varta_400Regular, 
    Varta_500Medium, 
    Varta_600SemiBold, 
    Varta_700Bold
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
          fontFamily: "Varta_300Light"
        }}>
          Varta Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Varta_400Regular"
        }}>
          Varta Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Varta_500Medium"
        }}>
          Varta Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Varta_600SemiBold"
        }}>
          Varta Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Varta_700Bold"
        }}>
          Varta Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Varta_300Light](./300Light/Varta_300Light.ttf.png)|![Varta_400Regular](./400Regular/Varta_400Regular.ttf.png)|![Varta_500Medium](./500Medium/Varta_500Medium.ttf.png)||
|![Varta_600SemiBold](./600SemiBold/Varta_600SemiBold.ttf.png)|![Varta_700Bold](./700Bold/Varta_700Bold.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/varta` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Varta page on Google Fonts](https://fonts.google.com/specimen/Varta) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Varta on Google Fonts](https://fonts.google.com/specimen/Varta)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/varta)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/varta)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
