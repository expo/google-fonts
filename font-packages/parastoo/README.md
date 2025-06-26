# @expo-google-fonts/parastoo

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/parastoo)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/parastoo)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/parastoo)

This package lets you use the [**Parastoo**](https://fonts.google.com/specimen/Parastoo) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Parastoo

![Parastoo](./font-family.png)

This font family contains [4 styles](#-gallery).

- `Parastoo_400Regular`
- `Parastoo_500Medium`
- `Parastoo_600SemiBold`
- `Parastoo_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/parastoo expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/parastoo/useFonts';
import { Parastoo_400Regular } from '@expo-google-fonts/parastoo/400Regular';
import { Parastoo_500Medium } from '@expo-google-fonts/parastoo/500Medium';
import { Parastoo_600SemiBold } from '@expo-google-fonts/parastoo/600SemiBold';
import { Parastoo_700Bold } from '@expo-google-fonts/parastoo/700Bold';

export default () => {

  let [fontsLoaded] = useFonts({
    Parastoo_400Regular, 
    Parastoo_500Medium, 
    Parastoo_600SemiBold, 
    Parastoo_700Bold
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
          fontFamily: "Parastoo_400Regular"
        }}>
          Parastoo Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Parastoo_500Medium"
        }}>
          Parastoo Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Parastoo_600SemiBold"
        }}>
          Parastoo Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Parastoo_700Bold"
        }}>
          Parastoo Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Parastoo_400Regular](./400Regular/Parastoo_400Regular.ttf.png)|![Parastoo_500Medium](./500Medium/Parastoo_500Medium.ttf.png)|![Parastoo_600SemiBold](./600SemiBold/Parastoo_600SemiBold.ttf.png)||
|![Parastoo_700Bold](./700Bold/Parastoo_700Bold.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/parastoo` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Parastoo page on Google Fonts](https://fonts.google.com/specimen/Parastoo) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Parastoo on Google Fonts](https://fonts.google.com/specimen/Parastoo)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/parastoo)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/parastoo)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
