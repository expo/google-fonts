# @expo-google-fonts/zalando-sans

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/zalando-sans)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/zalando-sans)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/zalando-sans)

This package lets you use the [**Zalando Sans**](https://fonts.google.com/specimen/Zalando+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Zalando Sans

![Zalando Sans](./font-family.png)

This font family contains [16 styles](#-gallery).

- `ZalandoSans_200ExtraLight`
- `ZalandoSans_300Light`
- `ZalandoSans_400Regular`
- `ZalandoSans_500Medium`
- `ZalandoSans_600SemiBold`
- `ZalandoSans_700Bold`
- `ZalandoSans_800ExtraBold`
- `ZalandoSans_900Black`
- `ZalandoSans_200ExtraLight_Italic`
- `ZalandoSans_300Light_Italic`
- `ZalandoSans_400Regular_Italic`
- `ZalandoSans_500Medium_Italic`
- `ZalandoSans_600SemiBold_Italic`
- `ZalandoSans_700Bold_Italic`
- `ZalandoSans_800ExtraBold_Italic`
- `ZalandoSans_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/zalando-sans expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/zalando-sans/useFonts';
import { ZalandoSans_200ExtraLight } from '@expo-google-fonts/zalando-sans/200ExtraLight';
import { ZalandoSans_300Light } from '@expo-google-fonts/zalando-sans/300Light';
import { ZalandoSans_400Regular } from '@expo-google-fonts/zalando-sans/400Regular';
import { ZalandoSans_500Medium } from '@expo-google-fonts/zalando-sans/500Medium';
import { ZalandoSans_600SemiBold } from '@expo-google-fonts/zalando-sans/600SemiBold';
import { ZalandoSans_700Bold } from '@expo-google-fonts/zalando-sans/700Bold';
import { ZalandoSans_800ExtraBold } from '@expo-google-fonts/zalando-sans/800ExtraBold';
import { ZalandoSans_900Black } from '@expo-google-fonts/zalando-sans/900Black';
import { ZalandoSans_200ExtraLight_Italic } from '@expo-google-fonts/zalando-sans/200ExtraLight_Italic';
import { ZalandoSans_300Light_Italic } from '@expo-google-fonts/zalando-sans/300Light_Italic';
import { ZalandoSans_400Regular_Italic } from '@expo-google-fonts/zalando-sans/400Regular_Italic';
import { ZalandoSans_500Medium_Italic } from '@expo-google-fonts/zalando-sans/500Medium_Italic';
import { ZalandoSans_600SemiBold_Italic } from '@expo-google-fonts/zalando-sans/600SemiBold_Italic';
import { ZalandoSans_700Bold_Italic } from '@expo-google-fonts/zalando-sans/700Bold_Italic';
import { ZalandoSans_800ExtraBold_Italic } from '@expo-google-fonts/zalando-sans/800ExtraBold_Italic';
import { ZalandoSans_900Black_Italic } from '@expo-google-fonts/zalando-sans/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    ZalandoSans_200ExtraLight, 
    ZalandoSans_300Light, 
    ZalandoSans_400Regular, 
    ZalandoSans_500Medium, 
    ZalandoSans_600SemiBold, 
    ZalandoSans_700Bold, 
    ZalandoSans_800ExtraBold, 
    ZalandoSans_900Black, 
    ZalandoSans_200ExtraLight_Italic, 
    ZalandoSans_300Light_Italic, 
    ZalandoSans_400Regular_Italic, 
    ZalandoSans_500Medium_Italic, 
    ZalandoSans_600SemiBold_Italic, 
    ZalandoSans_700Bold_Italic, 
    ZalandoSans_800ExtraBold_Italic, 
    ZalandoSans_900Black_Italic
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
          fontFamily: "ZalandoSans_200ExtraLight"
        }}>
          Zalando Sans Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ZalandoSans_300Light"
        }}>
          Zalando Sans Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ZalandoSans_400Regular"
        }}>
          Zalando Sans Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ZalandoSans_500Medium"
        }}>
          Zalando Sans Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ZalandoSans_600SemiBold"
        }}>
          Zalando Sans Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ZalandoSans_700Bold"
        }}>
          Zalando Sans Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ZalandoSans_800ExtraBold"
        }}>
          Zalando Sans Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ZalandoSans_900Black"
        }}>
          Zalando Sans Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ZalandoSans_200ExtraLight_Italic"
        }}>
          Zalando Sans Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ZalandoSans_300Light_Italic"
        }}>
          Zalando Sans Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ZalandoSans_400Regular_Italic"
        }}>
          Zalando Sans Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ZalandoSans_500Medium_Italic"
        }}>
          Zalando Sans Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ZalandoSans_600SemiBold_Italic"
        }}>
          Zalando Sans Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ZalandoSans_700Bold_Italic"
        }}>
          Zalando Sans Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ZalandoSans_800ExtraBold_Italic"
        }}>
          Zalando Sans Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ZalandoSans_900Black_Italic"
        }}>
          Zalando Sans Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![ZalandoSans_200ExtraLight](./200ExtraLight/ZalandoSans_200ExtraLight.ttf.png)|![ZalandoSans_300Light](./300Light/ZalandoSans_300Light.ttf.png)|![ZalandoSans_400Regular](./400Regular/ZalandoSans_400Regular.ttf.png)||
|![ZalandoSans_500Medium](./500Medium/ZalandoSans_500Medium.ttf.png)|![ZalandoSans_600SemiBold](./600SemiBold/ZalandoSans_600SemiBold.ttf.png)|![ZalandoSans_700Bold](./700Bold/ZalandoSans_700Bold.ttf.png)||
|![ZalandoSans_800ExtraBold](./800ExtraBold/ZalandoSans_800ExtraBold.ttf.png)|![ZalandoSans_900Black](./900Black/ZalandoSans_900Black.ttf.png)|![ZalandoSans_200ExtraLight_Italic](./200ExtraLight_Italic/ZalandoSans_200ExtraLight_Italic.ttf.png)||
|![ZalandoSans_300Light_Italic](./300Light_Italic/ZalandoSans_300Light_Italic.ttf.png)|![ZalandoSans_400Regular_Italic](./400Regular_Italic/ZalandoSans_400Regular_Italic.ttf.png)|![ZalandoSans_500Medium_Italic](./500Medium_Italic/ZalandoSans_500Medium_Italic.ttf.png)||
|![ZalandoSans_600SemiBold_Italic](./600SemiBold_Italic/ZalandoSans_600SemiBold_Italic.ttf.png)|![ZalandoSans_700Bold_Italic](./700Bold_Italic/ZalandoSans_700Bold_Italic.ttf.png)|![ZalandoSans_800ExtraBold_Italic](./800ExtraBold_Italic/ZalandoSans_800ExtraBold_Italic.ttf.png)||
|![ZalandoSans_900Black_Italic](./900Black_Italic/ZalandoSans_900Black_Italic.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/zalando-sans` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Zalando Sans page on Google Fonts](https://fonts.google.com/specimen/Zalando+Sans) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Zalando Sans on Google Fonts](https://fonts.google.com/specimen/Zalando+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/zalando-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/zalando-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
