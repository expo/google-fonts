# @expo-google-fonts/puritan

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/puritan)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/puritan)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/puritan)

This package lets you use the [**Puritan**](https://fonts.google.com/specimen/Puritan) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Puritan

![Puritan](./font-family.png)

This font family contains [4 styles](#-gallery).

- `Puritan_400Regular`
- `Puritan_400Regular_Italic`
- `Puritan_700Bold`
- `Puritan_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/puritan expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/puritan/useFonts';
import { Puritan_400Regular } from '@expo-google-fonts/puritan/400Regular';
import { Puritan_400Regular_Italic } from '@expo-google-fonts/puritan/400Regular_Italic';
import { Puritan_700Bold } from '@expo-google-fonts/puritan/700Bold';
import { Puritan_700Bold_Italic } from '@expo-google-fonts/puritan/700Bold_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    Puritan_400Regular, 
    Puritan_400Regular_Italic, 
    Puritan_700Bold, 
    Puritan_700Bold_Italic
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
          fontFamily: "Puritan_400Regular"
        }}>
          Puritan Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Puritan_400Regular_Italic"
        }}>
          Puritan Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Puritan_700Bold"
        }}>
          Puritan Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Puritan_700Bold_Italic"
        }}>
          Puritan Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Puritan_400Regular](./400Regular/Puritan_400Regular.ttf.png)|![Puritan_400Regular_Italic](./400Regular_Italic/Puritan_400Regular_Italic.ttf.png)|![Puritan_700Bold](./700Bold/Puritan_700Bold.ttf.png)||
|![Puritan_700Bold_Italic](./700Bold_Italic/Puritan_700Bold_Italic.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/puritan` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Puritan page on Google Fonts](https://fonts.google.com/specimen/Puritan) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Puritan on Google Fonts](https://fonts.google.com/specimen/Puritan)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/puritan)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/puritan)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
