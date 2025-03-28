# @expo-google-fonts/playfair

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/playfair)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/playfair)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/playfair)

This package lets you use the [**Playfair**](https://fonts.google.com/specimen/Playfair) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Playfair

![Playfair](./font-family.png)

This font family contains [14 styles](#-gallery).

- `Playfair_300Light`
- `Playfair_400Regular`
- `Playfair_500Medium`
- `Playfair_600SemiBold`
- `Playfair_700Bold`
- `Playfair_800ExtraBold`
- `Playfair_900Black`
- `Playfair_300Light_Italic`
- `Playfair_400Regular_Italic`
- `Playfair_500Medium_Italic`
- `Playfair_600SemiBold_Italic`
- `Playfair_700Bold_Italic`
- `Playfair_800ExtraBold_Italic`
- `Playfair_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/playfair expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/playfair/useFonts';
import { Playfair_300Light } from '@expo-google-fonts/playfair/300Light';
import { Playfair_400Regular } from '@expo-google-fonts/playfair/400Regular';
import { Playfair_500Medium } from '@expo-google-fonts/playfair/500Medium';
import { Playfair_600SemiBold } from '@expo-google-fonts/playfair/600SemiBold';
import { Playfair_700Bold } from '@expo-google-fonts/playfair/700Bold';
import { Playfair_800ExtraBold } from '@expo-google-fonts/playfair/800ExtraBold';
import { Playfair_900Black } from '@expo-google-fonts/playfair/900Black';
import { Playfair_300Light_Italic } from '@expo-google-fonts/playfair/300Light_Italic';
import { Playfair_400Regular_Italic } from '@expo-google-fonts/playfair/400Regular_Italic';
import { Playfair_500Medium_Italic } from '@expo-google-fonts/playfair/500Medium_Italic';
import { Playfair_600SemiBold_Italic } from '@expo-google-fonts/playfair/600SemiBold_Italic';
import { Playfair_700Bold_Italic } from '@expo-google-fonts/playfair/700Bold_Italic';
import { Playfair_800ExtraBold_Italic } from '@expo-google-fonts/playfair/800ExtraBold_Italic';
import { Playfair_900Black_Italic } from '@expo-google-fonts/playfair/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    Playfair_300Light, 
    Playfair_400Regular, 
    Playfair_500Medium, 
    Playfair_600SemiBold, 
    Playfair_700Bold, 
    Playfair_800ExtraBold, 
    Playfair_900Black, 
    Playfair_300Light_Italic, 
    Playfair_400Regular_Italic, 
    Playfair_500Medium_Italic, 
    Playfair_600SemiBold_Italic, 
    Playfair_700Bold_Italic, 
    Playfair_800ExtraBold_Italic, 
    Playfair_900Black_Italic
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
          fontFamily: "Playfair_300Light"
        }}>
          Playfair Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Playfair_400Regular"
        }}>
          Playfair Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Playfair_500Medium"
        }}>
          Playfair Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Playfair_600SemiBold"
        }}>
          Playfair Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Playfair_700Bold"
        }}>
          Playfair Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Playfair_800ExtraBold"
        }}>
          Playfair Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Playfair_900Black"
        }}>
          Playfair Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Playfair_300Light_Italic"
        }}>
          Playfair Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Playfair_400Regular_Italic"
        }}>
          Playfair Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Playfair_500Medium_Italic"
        }}>
          Playfair Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Playfair_600SemiBold_Italic"
        }}>
          Playfair Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Playfair_700Bold_Italic"
        }}>
          Playfair Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Playfair_800ExtraBold_Italic"
        }}>
          Playfair Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Playfair_900Black_Italic"
        }}>
          Playfair Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Playfair_300Light](./300Light/Playfair_300Light.ttf.png)|![Playfair_400Regular](./400Regular/Playfair_400Regular.ttf.png)|![Playfair_500Medium](./500Medium/Playfair_500Medium.ttf.png)||
|![Playfair_600SemiBold](./600SemiBold/Playfair_600SemiBold.ttf.png)|![Playfair_700Bold](./700Bold/Playfair_700Bold.ttf.png)|![Playfair_800ExtraBold](./800ExtraBold/Playfair_800ExtraBold.ttf.png)||
|![Playfair_900Black](./900Black/Playfair_900Black.ttf.png)|![Playfair_300Light_Italic](./300Light_Italic/Playfair_300Light_Italic.ttf.png)|![Playfair_400Regular_Italic](./400Regular_Italic/Playfair_400Regular_Italic.ttf.png)||
|![Playfair_500Medium_Italic](./500Medium_Italic/Playfair_500Medium_Italic.ttf.png)|![Playfair_600SemiBold_Italic](./600SemiBold_Italic/Playfair_600SemiBold_Italic.ttf.png)|![Playfair_700Bold_Italic](./700Bold_Italic/Playfair_700Bold_Italic.ttf.png)||
|![Playfair_800ExtraBold_Italic](./800ExtraBold_Italic/Playfair_800ExtraBold_Italic.ttf.png)|![Playfair_900Black_Italic](./900Black_Italic/Playfair_900Black_Italic.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/playfair` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Playfair page on Google Fonts](https://fonts.google.com/specimen/Playfair) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Playfair on Google Fonts](https://fonts.google.com/specimen/Playfair)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/playfair)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/playfair)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
