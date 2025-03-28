# @expo-google-fonts/podkova

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/podkova)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/podkova)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/podkova)

This package lets you use the [**Podkova**](https://fonts.google.com/specimen/Podkova) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Podkova

![Podkova](./font-family.png)

This font family contains [5 styles](#-gallery).

- `Podkova_400Regular`
- `Podkova_500Medium`
- `Podkova_600SemiBold`
- `Podkova_700Bold`
- `Podkova_800ExtraBold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/podkova expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/podkova/useFonts';
import { Podkova_400Regular } from '@expo-google-fonts/podkova/400Regular';
import { Podkova_500Medium } from '@expo-google-fonts/podkova/500Medium';
import { Podkova_600SemiBold } from '@expo-google-fonts/podkova/600SemiBold';
import { Podkova_700Bold } from '@expo-google-fonts/podkova/700Bold';
import { Podkova_800ExtraBold } from '@expo-google-fonts/podkova/800ExtraBold';

export default () => {

  let [fontsLoaded] = useFonts({
    Podkova_400Regular, 
    Podkova_500Medium, 
    Podkova_600SemiBold, 
    Podkova_700Bold, 
    Podkova_800ExtraBold
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
          fontFamily: "Podkova_400Regular"
        }}>
          Podkova Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Podkova_500Medium"
        }}>
          Podkova Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Podkova_600SemiBold"
        }}>
          Podkova Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Podkova_700Bold"
        }}>
          Podkova Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Podkova_800ExtraBold"
        }}>
          Podkova Extra Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Podkova_400Regular](./400Regular/Podkova_400Regular.ttf.png)|![Podkova_500Medium](./500Medium/Podkova_500Medium.ttf.png)|![Podkova_600SemiBold](./600SemiBold/Podkova_600SemiBold.ttf.png)||
|![Podkova_700Bold](./700Bold/Podkova_700Bold.ttf.png)|![Podkova_800ExtraBold](./800ExtraBold/Podkova_800ExtraBold.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/podkova` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Podkova page on Google Fonts](https://fonts.google.com/specimen/Podkova) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Podkova on Google Fonts](https://fonts.google.com/specimen/Podkova)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/podkova)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/podkova)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
