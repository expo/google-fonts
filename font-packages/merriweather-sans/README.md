# @expo-google-fonts/merriweather-sans

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/merriweather-sans)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/merriweather-sans)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/merriweather-sans)

This package lets you use the [**Merriweather Sans**](https://fonts.google.com/specimen/Merriweather+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Merriweather Sans

![Merriweather Sans](./font-family.png)

This font family contains [12 styles](#-gallery).

- `MerriweatherSans_300Light`
- `MerriweatherSans_400Regular`
- `MerriweatherSans_500Medium`
- `MerriweatherSans_600SemiBold`
- `MerriweatherSans_700Bold`
- `MerriweatherSans_800ExtraBold`
- `MerriweatherSans_300Light_Italic`
- `MerriweatherSans_400Regular_Italic`
- `MerriweatherSans_500Medium_Italic`
- `MerriweatherSans_600SemiBold_Italic`
- `MerriweatherSans_700Bold_Italic`
- `MerriweatherSans_800ExtraBold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/merriweather-sans expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/merriweather-sans/useFonts';
import { MerriweatherSans_300Light } from '@expo-google-fonts/merriweather-sans/300Light';
import { MerriweatherSans_400Regular } from '@expo-google-fonts/merriweather-sans/400Regular';
import { MerriweatherSans_500Medium } from '@expo-google-fonts/merriweather-sans/500Medium';
import { MerriweatherSans_600SemiBold } from '@expo-google-fonts/merriweather-sans/600SemiBold';
import { MerriweatherSans_700Bold } from '@expo-google-fonts/merriweather-sans/700Bold';
import { MerriweatherSans_800ExtraBold } from '@expo-google-fonts/merriweather-sans/800ExtraBold';
import { MerriweatherSans_300Light_Italic } from '@expo-google-fonts/merriweather-sans/300Light_Italic';
import { MerriweatherSans_400Regular_Italic } from '@expo-google-fonts/merriweather-sans/400Regular_Italic';
import { MerriweatherSans_500Medium_Italic } from '@expo-google-fonts/merriweather-sans/500Medium_Italic';
import { MerriweatherSans_600SemiBold_Italic } from '@expo-google-fonts/merriweather-sans/600SemiBold_Italic';
import { MerriweatherSans_700Bold_Italic } from '@expo-google-fonts/merriweather-sans/700Bold_Italic';
import { MerriweatherSans_800ExtraBold_Italic } from '@expo-google-fonts/merriweather-sans/800ExtraBold_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    MerriweatherSans_300Light, 
    MerriweatherSans_400Regular, 
    MerriweatherSans_500Medium, 
    MerriweatherSans_600SemiBold, 
    MerriweatherSans_700Bold, 
    MerriweatherSans_800ExtraBold, 
    MerriweatherSans_300Light_Italic, 
    MerriweatherSans_400Regular_Italic, 
    MerriweatherSans_500Medium_Italic, 
    MerriweatherSans_600SemiBold_Italic, 
    MerriweatherSans_700Bold_Italic, 
    MerriweatherSans_800ExtraBold_Italic
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
          fontFamily: "MerriweatherSans_300Light"
        }}>
          Merriweather Sans Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MerriweatherSans_400Regular"
        }}>
          Merriweather Sans Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MerriweatherSans_500Medium"
        }}>
          Merriweather Sans Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MerriweatherSans_600SemiBold"
        }}>
          Merriweather Sans Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MerriweatherSans_700Bold"
        }}>
          Merriweather Sans Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MerriweatherSans_800ExtraBold"
        }}>
          Merriweather Sans Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MerriweatherSans_300Light_Italic"
        }}>
          Merriweather Sans Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MerriweatherSans_400Regular_Italic"
        }}>
          Merriweather Sans Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MerriweatherSans_500Medium_Italic"
        }}>
          Merriweather Sans Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MerriweatherSans_600SemiBold_Italic"
        }}>
          Merriweather Sans Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MerriweatherSans_700Bold_Italic"
        }}>
          Merriweather Sans Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MerriweatherSans_800ExtraBold_Italic"
        }}>
          Merriweather Sans Extra Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![MerriweatherSans_300Light](./300Light/MerriweatherSans_300Light.ttf.png)|![MerriweatherSans_400Regular](./400Regular/MerriweatherSans_400Regular.ttf.png)|![MerriweatherSans_500Medium](./500Medium/MerriweatherSans_500Medium.ttf.png)||
|![MerriweatherSans_600SemiBold](./600SemiBold/MerriweatherSans_600SemiBold.ttf.png)|![MerriweatherSans_700Bold](./700Bold/MerriweatherSans_700Bold.ttf.png)|![MerriweatherSans_800ExtraBold](./800ExtraBold/MerriweatherSans_800ExtraBold.ttf.png)||
|![MerriweatherSans_300Light_Italic](./300Light_Italic/MerriweatherSans_300Light_Italic.ttf.png)|![MerriweatherSans_400Regular_Italic](./400Regular_Italic/MerriweatherSans_400Regular_Italic.ttf.png)|![MerriweatherSans_500Medium_Italic](./500Medium_Italic/MerriweatherSans_500Medium_Italic.ttf.png)||
|![MerriweatherSans_600SemiBold_Italic](./600SemiBold_Italic/MerriweatherSans_600SemiBold_Italic.ttf.png)|![MerriweatherSans_700Bold_Italic](./700Bold_Italic/MerriweatherSans_700Bold_Italic.ttf.png)|![MerriweatherSans_800ExtraBold_Italic](./800ExtraBold_Italic/MerriweatherSans_800ExtraBold_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/merriweather-sans` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Merriweather Sans page on Google Fonts](https://fonts.google.com/specimen/Merriweather+Sans) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Merriweather Sans on Google Fonts](https://fonts.google.com/specimen/Merriweather+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/merriweather-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/merriweather-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
