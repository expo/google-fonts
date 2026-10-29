# @expo-google-fonts/redaction-20

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/redaction-20)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/redaction-20)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/redaction-20)

This package lets you use the [**Redaction 20**](https://fonts.google.com/specimen/Redaction+20) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Redaction 20

![Redaction 20](./font-family.png)

This font family contains [3 styles](#-gallery).

- `Redaction20_400Regular`
- `Redaction20_400Regular_Italic`
- `Redaction20_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/redaction-20 expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/redaction-20/useFonts';
import { Redaction20_400Regular } from '@expo-google-fonts/redaction-20/400Regular';
import { Redaction20_400Regular_Italic } from '@expo-google-fonts/redaction-20/400Regular_Italic';
import { Redaction20_700Bold } from '@expo-google-fonts/redaction-20/700Bold';

export default () => {

  let [fontsLoaded] = useFonts({
    Redaction20_400Regular, 
    Redaction20_400Regular_Italic, 
    Redaction20_700Bold
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
          fontFamily: "Redaction20_400Regular"
        }}>
          Redaction 20 Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Redaction20_400Regular_Italic"
        }}>
          Redaction 20 Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Redaction20_700Bold"
        }}>
          Redaction 20 Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Redaction20_400Regular](./400Regular/Redaction20_400Regular.ttf.png)|![Redaction20_400Regular_Italic](./400Regular_Italic/Redaction20_400Regular_Italic.ttf.png)|![Redaction20_700Bold](./700Bold/Redaction20_700Bold.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/redaction-20` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Redaction 20 page on Google Fonts](https://fonts.google.com/specimen/Redaction+20) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Redaction 20 on Google Fonts](https://fonts.google.com/specimen/Redaction+20)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/redaction-20)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/redaction-20)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
