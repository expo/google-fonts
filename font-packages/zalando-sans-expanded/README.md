# @expo-google-fonts/zalando-sans-expanded

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/zalando-sans-expanded)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/zalando-sans-expanded)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/zalando-sans-expanded)

This package lets you use the [**Zalando Sans Expanded**](https://fonts.google.com/specimen/Zalando+Sans+Expanded) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Zalando Sans Expanded

![Zalando Sans Expanded](./font-family.png)

This font family contains [16 styles](#-gallery).

- `ZalandoSansExpanded_200ExtraLight`
- `ZalandoSansExpanded_300Light`
- `ZalandoSansExpanded_400Regular`
- `ZalandoSansExpanded_500Medium`
- `ZalandoSansExpanded_600SemiBold`
- `ZalandoSansExpanded_700Bold`
- `ZalandoSansExpanded_800ExtraBold`
- `ZalandoSansExpanded_900Black`
- `ZalandoSansExpanded_200ExtraLight_Italic`
- `ZalandoSansExpanded_300Light_Italic`
- `ZalandoSansExpanded_400Regular_Italic`
- `ZalandoSansExpanded_500Medium_Italic`
- `ZalandoSansExpanded_600SemiBold_Italic`
- `ZalandoSansExpanded_700Bold_Italic`
- `ZalandoSansExpanded_800ExtraBold_Italic`
- `ZalandoSansExpanded_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/zalando-sans-expanded expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/zalando-sans-expanded/useFonts';
import { ZalandoSansExpanded_200ExtraLight } from '@expo-google-fonts/zalando-sans-expanded/200ExtraLight';
import { ZalandoSansExpanded_300Light } from '@expo-google-fonts/zalando-sans-expanded/300Light';
import { ZalandoSansExpanded_400Regular } from '@expo-google-fonts/zalando-sans-expanded/400Regular';
import { ZalandoSansExpanded_500Medium } from '@expo-google-fonts/zalando-sans-expanded/500Medium';
import { ZalandoSansExpanded_600SemiBold } from '@expo-google-fonts/zalando-sans-expanded/600SemiBold';
import { ZalandoSansExpanded_700Bold } from '@expo-google-fonts/zalando-sans-expanded/700Bold';
import { ZalandoSansExpanded_800ExtraBold } from '@expo-google-fonts/zalando-sans-expanded/800ExtraBold';
import { ZalandoSansExpanded_900Black } from '@expo-google-fonts/zalando-sans-expanded/900Black';
import { ZalandoSansExpanded_200ExtraLight_Italic } from '@expo-google-fonts/zalando-sans-expanded/200ExtraLight_Italic';
import { ZalandoSansExpanded_300Light_Italic } from '@expo-google-fonts/zalando-sans-expanded/300Light_Italic';
import { ZalandoSansExpanded_400Regular_Italic } from '@expo-google-fonts/zalando-sans-expanded/400Regular_Italic';
import { ZalandoSansExpanded_500Medium_Italic } from '@expo-google-fonts/zalando-sans-expanded/500Medium_Italic';
import { ZalandoSansExpanded_600SemiBold_Italic } from '@expo-google-fonts/zalando-sans-expanded/600SemiBold_Italic';
import { ZalandoSansExpanded_700Bold_Italic } from '@expo-google-fonts/zalando-sans-expanded/700Bold_Italic';
import { ZalandoSansExpanded_800ExtraBold_Italic } from '@expo-google-fonts/zalando-sans-expanded/800ExtraBold_Italic';
import { ZalandoSansExpanded_900Black_Italic } from '@expo-google-fonts/zalando-sans-expanded/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    ZalandoSansExpanded_200ExtraLight, 
    ZalandoSansExpanded_300Light, 
    ZalandoSansExpanded_400Regular, 
    ZalandoSansExpanded_500Medium, 
    ZalandoSansExpanded_600SemiBold, 
    ZalandoSansExpanded_700Bold, 
    ZalandoSansExpanded_800ExtraBold, 
    ZalandoSansExpanded_900Black, 
    ZalandoSansExpanded_200ExtraLight_Italic, 
    ZalandoSansExpanded_300Light_Italic, 
    ZalandoSansExpanded_400Regular_Italic, 
    ZalandoSansExpanded_500Medium_Italic, 
    ZalandoSansExpanded_600SemiBold_Italic, 
    ZalandoSansExpanded_700Bold_Italic, 
    ZalandoSansExpanded_800ExtraBold_Italic, 
    ZalandoSansExpanded_900Black_Italic
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
          fontFamily: "ZalandoSansExpanded_200ExtraLight"
        }}>
          Zalando Sans Expanded Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ZalandoSansExpanded_300Light"
        }}>
          Zalando Sans Expanded Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ZalandoSansExpanded_400Regular"
        }}>
          Zalando Sans Expanded Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ZalandoSansExpanded_500Medium"
        }}>
          Zalando Sans Expanded Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ZalandoSansExpanded_600SemiBold"
        }}>
          Zalando Sans Expanded Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ZalandoSansExpanded_700Bold"
        }}>
          Zalando Sans Expanded Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ZalandoSansExpanded_800ExtraBold"
        }}>
          Zalando Sans Expanded Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ZalandoSansExpanded_900Black"
        }}>
          Zalando Sans Expanded Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ZalandoSansExpanded_200ExtraLight_Italic"
        }}>
          Zalando Sans Expanded Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ZalandoSansExpanded_300Light_Italic"
        }}>
          Zalando Sans Expanded Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ZalandoSansExpanded_400Regular_Italic"
        }}>
          Zalando Sans Expanded Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ZalandoSansExpanded_500Medium_Italic"
        }}>
          Zalando Sans Expanded Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ZalandoSansExpanded_600SemiBold_Italic"
        }}>
          Zalando Sans Expanded Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ZalandoSansExpanded_700Bold_Italic"
        }}>
          Zalando Sans Expanded Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ZalandoSansExpanded_800ExtraBold_Italic"
        }}>
          Zalando Sans Expanded Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ZalandoSansExpanded_900Black_Italic"
        }}>
          Zalando Sans Expanded Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![ZalandoSansExpanded_200ExtraLight](./200ExtraLight/ZalandoSansExpanded_200ExtraLight.ttf.png)|![ZalandoSansExpanded_300Light](./300Light/ZalandoSansExpanded_300Light.ttf.png)|![ZalandoSansExpanded_400Regular](./400Regular/ZalandoSansExpanded_400Regular.ttf.png)||
|![ZalandoSansExpanded_500Medium](./500Medium/ZalandoSansExpanded_500Medium.ttf.png)|![ZalandoSansExpanded_600SemiBold](./600SemiBold/ZalandoSansExpanded_600SemiBold.ttf.png)|![ZalandoSansExpanded_700Bold](./700Bold/ZalandoSansExpanded_700Bold.ttf.png)||
|![ZalandoSansExpanded_800ExtraBold](./800ExtraBold/ZalandoSansExpanded_800ExtraBold.ttf.png)|![ZalandoSansExpanded_900Black](./900Black/ZalandoSansExpanded_900Black.ttf.png)|![ZalandoSansExpanded_200ExtraLight_Italic](./200ExtraLight_Italic/ZalandoSansExpanded_200ExtraLight_Italic.ttf.png)||
|![ZalandoSansExpanded_300Light_Italic](./300Light_Italic/ZalandoSansExpanded_300Light_Italic.ttf.png)|![ZalandoSansExpanded_400Regular_Italic](./400Regular_Italic/ZalandoSansExpanded_400Regular_Italic.ttf.png)|![ZalandoSansExpanded_500Medium_Italic](./500Medium_Italic/ZalandoSansExpanded_500Medium_Italic.ttf.png)||
|![ZalandoSansExpanded_600SemiBold_Italic](./600SemiBold_Italic/ZalandoSansExpanded_600SemiBold_Italic.ttf.png)|![ZalandoSansExpanded_700Bold_Italic](./700Bold_Italic/ZalandoSansExpanded_700Bold_Italic.ttf.png)|![ZalandoSansExpanded_800ExtraBold_Italic](./800ExtraBold_Italic/ZalandoSansExpanded_800ExtraBold_Italic.ttf.png)||
|![ZalandoSansExpanded_900Black_Italic](./900Black_Italic/ZalandoSansExpanded_900Black_Italic.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/zalando-sans-expanded` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Zalando Sans Expanded page on Google Fonts](https://fonts.google.com/specimen/Zalando+Sans+Expanded) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Zalando Sans Expanded on Google Fonts](https://fonts.google.com/specimen/Zalando+Sans+Expanded)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/zalando-sans-expanded)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/zalando-sans-expanded)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
