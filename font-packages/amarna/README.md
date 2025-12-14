# @expo-google-fonts/amarna

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/amarna)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/amarna)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/amarna)

This package lets you use the [**Amarna**](https://fonts.google.com/specimen/Amarna) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Amarna

![Amarna](./font-family.png)

This font family contains [14 styles](#-gallery).

- `Amarna_100Thin`
- `Amarna_200ExtraLight`
- `Amarna_300Light`
- `Amarna_400Regular`
- `Amarna_500Medium`
- `Amarna_600SemiBold`
- `Amarna_700Bold`
- `Amarna_100Thin_Italic`
- `Amarna_200ExtraLight_Italic`
- `Amarna_300Light_Italic`
- `Amarna_400Regular_Italic`
- `Amarna_500Medium_Italic`
- `Amarna_600SemiBold_Italic`
- `Amarna_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/amarna expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/amarna/useFonts';
import { Amarna_100Thin } from '@expo-google-fonts/amarna/100Thin';
import { Amarna_200ExtraLight } from '@expo-google-fonts/amarna/200ExtraLight';
import { Amarna_300Light } from '@expo-google-fonts/amarna/300Light';
import { Amarna_400Regular } from '@expo-google-fonts/amarna/400Regular';
import { Amarna_500Medium } from '@expo-google-fonts/amarna/500Medium';
import { Amarna_600SemiBold } from '@expo-google-fonts/amarna/600SemiBold';
import { Amarna_700Bold } from '@expo-google-fonts/amarna/700Bold';
import { Amarna_100Thin_Italic } from '@expo-google-fonts/amarna/100Thin_Italic';
import { Amarna_200ExtraLight_Italic } from '@expo-google-fonts/amarna/200ExtraLight_Italic';
import { Amarna_300Light_Italic } from '@expo-google-fonts/amarna/300Light_Italic';
import { Amarna_400Regular_Italic } from '@expo-google-fonts/amarna/400Regular_Italic';
import { Amarna_500Medium_Italic } from '@expo-google-fonts/amarna/500Medium_Italic';
import { Amarna_600SemiBold_Italic } from '@expo-google-fonts/amarna/600SemiBold_Italic';
import { Amarna_700Bold_Italic } from '@expo-google-fonts/amarna/700Bold_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    Amarna_100Thin, 
    Amarna_200ExtraLight, 
    Amarna_300Light, 
    Amarna_400Regular, 
    Amarna_500Medium, 
    Amarna_600SemiBold, 
    Amarna_700Bold, 
    Amarna_100Thin_Italic, 
    Amarna_200ExtraLight_Italic, 
    Amarna_300Light_Italic, 
    Amarna_400Regular_Italic, 
    Amarna_500Medium_Italic, 
    Amarna_600SemiBold_Italic, 
    Amarna_700Bold_Italic
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
          fontFamily: "Amarna_100Thin"
        }}>
          Amarna Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Amarna_200ExtraLight"
        }}>
          Amarna Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Amarna_300Light"
        }}>
          Amarna Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Amarna_400Regular"
        }}>
          Amarna Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Amarna_500Medium"
        }}>
          Amarna Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Amarna_600SemiBold"
        }}>
          Amarna Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Amarna_700Bold"
        }}>
          Amarna Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Amarna_100Thin_Italic"
        }}>
          Amarna Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Amarna_200ExtraLight_Italic"
        }}>
          Amarna Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Amarna_300Light_Italic"
        }}>
          Amarna Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Amarna_400Regular_Italic"
        }}>
          Amarna Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Amarna_500Medium_Italic"
        }}>
          Amarna Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Amarna_600SemiBold_Italic"
        }}>
          Amarna Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Amarna_700Bold_Italic"
        }}>
          Amarna Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Amarna_100Thin](./100Thin/Amarna_100Thin.ttf.png)|![Amarna_200ExtraLight](./200ExtraLight/Amarna_200ExtraLight.ttf.png)|![Amarna_300Light](./300Light/Amarna_300Light.ttf.png)||
|![Amarna_400Regular](./400Regular/Amarna_400Regular.ttf.png)|![Amarna_500Medium](./500Medium/Amarna_500Medium.ttf.png)|![Amarna_600SemiBold](./600SemiBold/Amarna_600SemiBold.ttf.png)||
|![Amarna_700Bold](./700Bold/Amarna_700Bold.ttf.png)|![Amarna_100Thin_Italic](./100Thin_Italic/Amarna_100Thin_Italic.ttf.png)|![Amarna_200ExtraLight_Italic](./200ExtraLight_Italic/Amarna_200ExtraLight_Italic.ttf.png)||
|![Amarna_300Light_Italic](./300Light_Italic/Amarna_300Light_Italic.ttf.png)|![Amarna_400Regular_Italic](./400Regular_Italic/Amarna_400Regular_Italic.ttf.png)|![Amarna_500Medium_Italic](./500Medium_Italic/Amarna_500Medium_Italic.ttf.png)||
|![Amarna_600SemiBold_Italic](./600SemiBold_Italic/Amarna_600SemiBold_Italic.ttf.png)|![Amarna_700Bold_Italic](./700Bold_Italic/Amarna_700Bold_Italic.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/amarna` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Amarna page on Google Fonts](https://fonts.google.com/specimen/Amarna) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Amarna on Google Fonts](https://fonts.google.com/specimen/Amarna)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/amarna)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/amarna)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
