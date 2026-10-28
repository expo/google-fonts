# @expo-google-fonts/castoro

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/castoro)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/castoro)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/castoro)

This package lets you use the [**Castoro**](https://fonts.google.com/specimen/Castoro) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Castoro

![Castoro](./font-family.png)

This font family contains [8 styles](#-gallery).

- `Castoro_400Regular`
- `Castoro_500Medium`
- `Castoro_600SemiBold`
- `Castoro_700Bold`
- `Castoro_400Regular_Italic`
- `Castoro_500Medium_Italic`
- `Castoro_600SemiBold_Italic`
- `Castoro_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/castoro expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/castoro/useFonts';
import { Castoro_400Regular } from '@expo-google-fonts/castoro/400Regular';
import { Castoro_500Medium } from '@expo-google-fonts/castoro/500Medium';
import { Castoro_600SemiBold } from '@expo-google-fonts/castoro/600SemiBold';
import { Castoro_700Bold } from '@expo-google-fonts/castoro/700Bold';
import { Castoro_400Regular_Italic } from '@expo-google-fonts/castoro/400Regular_Italic';
import { Castoro_500Medium_Italic } from '@expo-google-fonts/castoro/500Medium_Italic';
import { Castoro_600SemiBold_Italic } from '@expo-google-fonts/castoro/600SemiBold_Italic';
import { Castoro_700Bold_Italic } from '@expo-google-fonts/castoro/700Bold_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    Castoro_400Regular, 
    Castoro_500Medium, 
    Castoro_600SemiBold, 
    Castoro_700Bold, 
    Castoro_400Regular_Italic, 
    Castoro_500Medium_Italic, 
    Castoro_600SemiBold_Italic, 
    Castoro_700Bold_Italic
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
          fontFamily: "Castoro_400Regular"
        }}>
          Castoro Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Castoro_500Medium"
        }}>
          Castoro Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Castoro_600SemiBold"
        }}>
          Castoro Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Castoro_700Bold"
        }}>
          Castoro Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Castoro_400Regular_Italic"
        }}>
          Castoro Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Castoro_500Medium_Italic"
        }}>
          Castoro Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Castoro_600SemiBold_Italic"
        }}>
          Castoro Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Castoro_700Bold_Italic"
        }}>
          Castoro Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Castoro_400Regular](./400Regular/Castoro_400Regular.ttf.png)|![Castoro_500Medium](./500Medium/Castoro_500Medium.ttf.png)|![Castoro_600SemiBold](./600SemiBold/Castoro_600SemiBold.ttf.png)||
|![Castoro_700Bold](./700Bold/Castoro_700Bold.ttf.png)|![Castoro_400Regular_Italic](./400Regular_Italic/Castoro_400Regular_Italic.ttf.png)|![Castoro_500Medium_Italic](./500Medium_Italic/Castoro_500Medium_Italic.ttf.png)||
|![Castoro_600SemiBold_Italic](./600SemiBold_Italic/Castoro_600SemiBold_Italic.ttf.png)|![Castoro_700Bold_Italic](./700Bold_Italic/Castoro_700Bold_Italic.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/castoro` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Castoro page on Google Fonts](https://fonts.google.com/specimen/Castoro) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Castoro on Google Fonts](https://fonts.google.com/specimen/Castoro)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/castoro)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/castoro)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
