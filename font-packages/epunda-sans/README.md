# @expo-google-fonts/epunda-sans

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/epunda-sans)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/epunda-sans)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/epunda-sans)

This package lets you use the [**Epunda Sans**](https://fonts.google.com/specimen/Epunda+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Epunda Sans

![Epunda Sans](./font-family.png)

This font family contains [14 styles](#-gallery).

- `EpundaSans_300Light`
- `EpundaSans_400Regular`
- `EpundaSans_500Medium`
- `EpundaSans_600SemiBold`
- `EpundaSans_700Bold`
- `EpundaSans_800ExtraBold`
- `EpundaSans_900Black`
- `EpundaSans_300Light_Italic`
- `EpundaSans_400Regular_Italic`
- `EpundaSans_500Medium_Italic`
- `EpundaSans_600SemiBold_Italic`
- `EpundaSans_700Bold_Italic`
- `EpundaSans_800ExtraBold_Italic`
- `EpundaSans_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/epunda-sans expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/epunda-sans/useFonts';
import { EpundaSans_300Light } from '@expo-google-fonts/epunda-sans/300Light';
import { EpundaSans_400Regular } from '@expo-google-fonts/epunda-sans/400Regular';
import { EpundaSans_500Medium } from '@expo-google-fonts/epunda-sans/500Medium';
import { EpundaSans_600SemiBold } from '@expo-google-fonts/epunda-sans/600SemiBold';
import { EpundaSans_700Bold } from '@expo-google-fonts/epunda-sans/700Bold';
import { EpundaSans_800ExtraBold } from '@expo-google-fonts/epunda-sans/800ExtraBold';
import { EpundaSans_900Black } from '@expo-google-fonts/epunda-sans/900Black';
import { EpundaSans_300Light_Italic } from '@expo-google-fonts/epunda-sans/300Light_Italic';
import { EpundaSans_400Regular_Italic } from '@expo-google-fonts/epunda-sans/400Regular_Italic';
import { EpundaSans_500Medium_Italic } from '@expo-google-fonts/epunda-sans/500Medium_Italic';
import { EpundaSans_600SemiBold_Italic } from '@expo-google-fonts/epunda-sans/600SemiBold_Italic';
import { EpundaSans_700Bold_Italic } from '@expo-google-fonts/epunda-sans/700Bold_Italic';
import { EpundaSans_800ExtraBold_Italic } from '@expo-google-fonts/epunda-sans/800ExtraBold_Italic';
import { EpundaSans_900Black_Italic } from '@expo-google-fonts/epunda-sans/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    EpundaSans_300Light, 
    EpundaSans_400Regular, 
    EpundaSans_500Medium, 
    EpundaSans_600SemiBold, 
    EpundaSans_700Bold, 
    EpundaSans_800ExtraBold, 
    EpundaSans_900Black, 
    EpundaSans_300Light_Italic, 
    EpundaSans_400Regular_Italic, 
    EpundaSans_500Medium_Italic, 
    EpundaSans_600SemiBold_Italic, 
    EpundaSans_700Bold_Italic, 
    EpundaSans_800ExtraBold_Italic, 
    EpundaSans_900Black_Italic
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
          fontFamily: "EpundaSans_300Light"
        }}>
          Epunda Sans Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "EpundaSans_400Regular"
        }}>
          Epunda Sans Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "EpundaSans_500Medium"
        }}>
          Epunda Sans Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "EpundaSans_600SemiBold"
        }}>
          Epunda Sans Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "EpundaSans_700Bold"
        }}>
          Epunda Sans Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "EpundaSans_800ExtraBold"
        }}>
          Epunda Sans Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "EpundaSans_900Black"
        }}>
          Epunda Sans Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "EpundaSans_300Light_Italic"
        }}>
          Epunda Sans Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "EpundaSans_400Regular_Italic"
        }}>
          Epunda Sans Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "EpundaSans_500Medium_Italic"
        }}>
          Epunda Sans Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "EpundaSans_600SemiBold_Italic"
        }}>
          Epunda Sans Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "EpundaSans_700Bold_Italic"
        }}>
          Epunda Sans Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "EpundaSans_800ExtraBold_Italic"
        }}>
          Epunda Sans Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "EpundaSans_900Black_Italic"
        }}>
          Epunda Sans Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![EpundaSans_300Light](./300Light/EpundaSans_300Light.ttf.png)|![EpundaSans_400Regular](./400Regular/EpundaSans_400Regular.ttf.png)|![EpundaSans_500Medium](./500Medium/EpundaSans_500Medium.ttf.png)||
|![EpundaSans_600SemiBold](./600SemiBold/EpundaSans_600SemiBold.ttf.png)|![EpundaSans_700Bold](./700Bold/EpundaSans_700Bold.ttf.png)|![EpundaSans_800ExtraBold](./800ExtraBold/EpundaSans_800ExtraBold.ttf.png)||
|![EpundaSans_900Black](./900Black/EpundaSans_900Black.ttf.png)|![EpundaSans_300Light_Italic](./300Light_Italic/EpundaSans_300Light_Italic.ttf.png)|![EpundaSans_400Regular_Italic](./400Regular_Italic/EpundaSans_400Regular_Italic.ttf.png)||
|![EpundaSans_500Medium_Italic](./500Medium_Italic/EpundaSans_500Medium_Italic.ttf.png)|![EpundaSans_600SemiBold_Italic](./600SemiBold_Italic/EpundaSans_600SemiBold_Italic.ttf.png)|![EpundaSans_700Bold_Italic](./700Bold_Italic/EpundaSans_700Bold_Italic.ttf.png)||
|![EpundaSans_800ExtraBold_Italic](./800ExtraBold_Italic/EpundaSans_800ExtraBold_Italic.ttf.png)|![EpundaSans_900Black_Italic](./900Black_Italic/EpundaSans_900Black_Italic.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/epunda-sans` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Epunda Sans page on Google Fonts](https://fonts.google.com/specimen/Epunda+Sans) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Epunda Sans on Google Fonts](https://fonts.google.com/specimen/Epunda+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/epunda-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/epunda-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
