# @expo-google-fonts/averia-sans-libre

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/averia-sans-libre)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/averia-sans-libre)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/averia-sans-libre)

This package lets you use the [**Averia Sans Libre**](https://fonts.google.com/specimen/Averia+Sans+Libre) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Averia Sans Libre

![Averia Sans Libre](./font-family.png)

This font family contains [6 styles](#-gallery).

- `AveriaSansLibre_300Light`
- `AveriaSansLibre_300Light_Italic`
- `AveriaSansLibre_400Regular`
- `AveriaSansLibre_400Regular_Italic`
- `AveriaSansLibre_700Bold`
- `AveriaSansLibre_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/averia-sans-libre expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/averia-sans-libre/useFonts';
import { AveriaSansLibre_300Light } from '@expo-google-fonts/averia-sans-libre/300Light';
import { AveriaSansLibre_300Light_Italic } from '@expo-google-fonts/averia-sans-libre/300Light_Italic';
import { AveriaSansLibre_400Regular } from '@expo-google-fonts/averia-sans-libre/400Regular';
import { AveriaSansLibre_400Regular_Italic } from '@expo-google-fonts/averia-sans-libre/400Regular_Italic';
import { AveriaSansLibre_700Bold } from '@expo-google-fonts/averia-sans-libre/700Bold';
import { AveriaSansLibre_700Bold_Italic } from '@expo-google-fonts/averia-sans-libre/700Bold_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    AveriaSansLibre_300Light, 
    AveriaSansLibre_300Light_Italic, 
    AveriaSansLibre_400Regular, 
    AveriaSansLibre_400Regular_Italic, 
    AveriaSansLibre_700Bold, 
    AveriaSansLibre_700Bold_Italic
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
          fontFamily: "AveriaSansLibre_300Light"
        }}>
          Averia Sans Libre Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AveriaSansLibre_300Light_Italic"
        }}>
          Averia Sans Libre Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AveriaSansLibre_400Regular"
        }}>
          Averia Sans Libre Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AveriaSansLibre_400Regular_Italic"
        }}>
          Averia Sans Libre Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AveriaSansLibre_700Bold"
        }}>
          Averia Sans Libre Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AveriaSansLibre_700Bold_Italic"
        }}>
          Averia Sans Libre Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![AveriaSansLibre_300Light](./300Light/AveriaSansLibre_300Light.ttf.png)|![AveriaSansLibre_300Light_Italic](./300Light_Italic/AveriaSansLibre_300Light_Italic.ttf.png)|![AveriaSansLibre_400Regular](./400Regular/AveriaSansLibre_400Regular.ttf.png)||
|![AveriaSansLibre_400Regular_Italic](./400Regular_Italic/AveriaSansLibre_400Regular_Italic.ttf.png)|![AveriaSansLibre_700Bold](./700Bold/AveriaSansLibre_700Bold.ttf.png)|![AveriaSansLibre_700Bold_Italic](./700Bold_Italic/AveriaSansLibre_700Bold_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/averia-sans-libre` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Averia Sans Libre page on Google Fonts](https://fonts.google.com/specimen/Averia+Sans+Libre) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Averia Sans Libre on Google Fonts](https://fonts.google.com/specimen/Averia+Sans+Libre)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/averia-sans-libre)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/averia-sans-libre)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
