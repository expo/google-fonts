# @expo-google-fonts/matangi

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/matangi)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/matangi)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/matangi)

This package lets you use the [**Matangi**](https://fonts.google.com/specimen/Matangi) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Matangi

![Matangi](./font-family.png)

This font family contains [7 styles](#-gallery).

- `Matangi_300Light`
- `Matangi_400Regular`
- `Matangi_500Medium`
- `Matangi_600SemiBold`
- `Matangi_700Bold`
- `Matangi_800ExtraBold`
- `Matangi_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/matangi expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/matangi/useFonts';
import { Matangi_300Light } from '@expo-google-fonts/matangi/300Light';
import { Matangi_400Regular } from '@expo-google-fonts/matangi/400Regular';
import { Matangi_500Medium } from '@expo-google-fonts/matangi/500Medium';
import { Matangi_600SemiBold } from '@expo-google-fonts/matangi/600SemiBold';
import { Matangi_700Bold } from '@expo-google-fonts/matangi/700Bold';
import { Matangi_800ExtraBold } from '@expo-google-fonts/matangi/800ExtraBold';
import { Matangi_900Black } from '@expo-google-fonts/matangi/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    Matangi_300Light, 
    Matangi_400Regular, 
    Matangi_500Medium, 
    Matangi_600SemiBold, 
    Matangi_700Bold, 
    Matangi_800ExtraBold, 
    Matangi_900Black
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
          fontFamily: "Matangi_300Light"
        }}>
          Matangi Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Matangi_400Regular"
        }}>
          Matangi Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Matangi_500Medium"
        }}>
          Matangi Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Matangi_600SemiBold"
        }}>
          Matangi Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Matangi_700Bold"
        }}>
          Matangi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Matangi_800ExtraBold"
        }}>
          Matangi Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Matangi_900Black"
        }}>
          Matangi Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Matangi_300Light](./300Light/Matangi_300Light.ttf.png)|![Matangi_400Regular](./400Regular/Matangi_400Regular.ttf.png)|![Matangi_500Medium](./500Medium/Matangi_500Medium.ttf.png)||
|![Matangi_600SemiBold](./600SemiBold/Matangi_600SemiBold.ttf.png)|![Matangi_700Bold](./700Bold/Matangi_700Bold.ttf.png)|![Matangi_800ExtraBold](./800ExtraBold/Matangi_800ExtraBold.ttf.png)||
|![Matangi_900Black](./900Black/Matangi_900Black.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/matangi` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Matangi page on Google Fonts](https://fonts.google.com/specimen/Matangi) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Matangi on Google Fonts](https://fonts.google.com/specimen/Matangi)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/matangi)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/matangi)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
