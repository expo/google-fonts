# @expo-google-fonts/taviraj

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/taviraj)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/taviraj)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/taviraj)

This package lets you use the [**Taviraj**](https://fonts.google.com/specimen/Taviraj) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Taviraj

![Taviraj](./font-family.png)

This font family contains [18 styles](#-gallery).

- `Taviraj_100Thin`
- `Taviraj_100Thin_Italic`
- `Taviraj_200ExtraLight`
- `Taviraj_200ExtraLight_Italic`
- `Taviraj_300Light`
- `Taviraj_300Light_Italic`
- `Taviraj_400Regular`
- `Taviraj_400Regular_Italic`
- `Taviraj_500Medium`
- `Taviraj_500Medium_Italic`
- `Taviraj_600SemiBold`
- `Taviraj_600SemiBold_Italic`
- `Taviraj_700Bold`
- `Taviraj_700Bold_Italic`
- `Taviraj_800ExtraBold`
- `Taviraj_800ExtraBold_Italic`
- `Taviraj_900Black`
- `Taviraj_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/taviraj expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/taviraj/useFonts';
import { Taviraj_100Thin } from '@expo-google-fonts/taviraj/100Thin';
import { Taviraj_100Thin_Italic } from '@expo-google-fonts/taviraj/100Thin_Italic';
import { Taviraj_200ExtraLight } from '@expo-google-fonts/taviraj/200ExtraLight';
import { Taviraj_200ExtraLight_Italic } from '@expo-google-fonts/taviraj/200ExtraLight_Italic';
import { Taviraj_300Light } from '@expo-google-fonts/taviraj/300Light';
import { Taviraj_300Light_Italic } from '@expo-google-fonts/taviraj/300Light_Italic';
import { Taviraj_400Regular } from '@expo-google-fonts/taviraj/400Regular';
import { Taviraj_400Regular_Italic } from '@expo-google-fonts/taviraj/400Regular_Italic';
import { Taviraj_500Medium } from '@expo-google-fonts/taviraj/500Medium';
import { Taviraj_500Medium_Italic } from '@expo-google-fonts/taviraj/500Medium_Italic';
import { Taviraj_600SemiBold } from '@expo-google-fonts/taviraj/600SemiBold';
import { Taviraj_600SemiBold_Italic } from '@expo-google-fonts/taviraj/600SemiBold_Italic';
import { Taviraj_700Bold } from '@expo-google-fonts/taviraj/700Bold';
import { Taviraj_700Bold_Italic } from '@expo-google-fonts/taviraj/700Bold_Italic';
import { Taviraj_800ExtraBold } from '@expo-google-fonts/taviraj/800ExtraBold';
import { Taviraj_800ExtraBold_Italic } from '@expo-google-fonts/taviraj/800ExtraBold_Italic';
import { Taviraj_900Black } from '@expo-google-fonts/taviraj/900Black';
import { Taviraj_900Black_Italic } from '@expo-google-fonts/taviraj/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    Taviraj_100Thin, 
    Taviraj_100Thin_Italic, 
    Taviraj_200ExtraLight, 
    Taviraj_200ExtraLight_Italic, 
    Taviraj_300Light, 
    Taviraj_300Light_Italic, 
    Taviraj_400Regular, 
    Taviraj_400Regular_Italic, 
    Taviraj_500Medium, 
    Taviraj_500Medium_Italic, 
    Taviraj_600SemiBold, 
    Taviraj_600SemiBold_Italic, 
    Taviraj_700Bold, 
    Taviraj_700Bold_Italic, 
    Taviraj_800ExtraBold, 
    Taviraj_800ExtraBold_Italic, 
    Taviraj_900Black, 
    Taviraj_900Black_Italic
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
          fontFamily: "Taviraj_100Thin"
        }}>
          Taviraj Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Taviraj_100Thin_Italic"
        }}>
          Taviraj Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Taviraj_200ExtraLight"
        }}>
          Taviraj Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Taviraj_200ExtraLight_Italic"
        }}>
          Taviraj Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Taviraj_300Light"
        }}>
          Taviraj Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Taviraj_300Light_Italic"
        }}>
          Taviraj Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Taviraj_400Regular"
        }}>
          Taviraj Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Taviraj_400Regular_Italic"
        }}>
          Taviraj Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Taviraj_500Medium"
        }}>
          Taviraj Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Taviraj_500Medium_Italic"
        }}>
          Taviraj Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Taviraj_600SemiBold"
        }}>
          Taviraj Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Taviraj_600SemiBold_Italic"
        }}>
          Taviraj Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Taviraj_700Bold"
        }}>
          Taviraj Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Taviraj_700Bold_Italic"
        }}>
          Taviraj Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Taviraj_800ExtraBold"
        }}>
          Taviraj Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Taviraj_800ExtraBold_Italic"
        }}>
          Taviraj Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Taviraj_900Black"
        }}>
          Taviraj Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Taviraj_900Black_Italic"
        }}>
          Taviraj Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Taviraj_100Thin](./100Thin/Taviraj_100Thin.ttf.png)|![Taviraj_100Thin_Italic](./100Thin_Italic/Taviraj_100Thin_Italic.ttf.png)|![Taviraj_200ExtraLight](./200ExtraLight/Taviraj_200ExtraLight.ttf.png)||
|![Taviraj_200ExtraLight_Italic](./200ExtraLight_Italic/Taviraj_200ExtraLight_Italic.ttf.png)|![Taviraj_300Light](./300Light/Taviraj_300Light.ttf.png)|![Taviraj_300Light_Italic](./300Light_Italic/Taviraj_300Light_Italic.ttf.png)||
|![Taviraj_400Regular](./400Regular/Taviraj_400Regular.ttf.png)|![Taviraj_400Regular_Italic](./400Regular_Italic/Taviraj_400Regular_Italic.ttf.png)|![Taviraj_500Medium](./500Medium/Taviraj_500Medium.ttf.png)||
|![Taviraj_500Medium_Italic](./500Medium_Italic/Taviraj_500Medium_Italic.ttf.png)|![Taviraj_600SemiBold](./600SemiBold/Taviraj_600SemiBold.ttf.png)|![Taviraj_600SemiBold_Italic](./600SemiBold_Italic/Taviraj_600SemiBold_Italic.ttf.png)||
|![Taviraj_700Bold](./700Bold/Taviraj_700Bold.ttf.png)|![Taviraj_700Bold_Italic](./700Bold_Italic/Taviraj_700Bold_Italic.ttf.png)|![Taviraj_800ExtraBold](./800ExtraBold/Taviraj_800ExtraBold.ttf.png)||
|![Taviraj_800ExtraBold_Italic](./800ExtraBold_Italic/Taviraj_800ExtraBold_Italic.ttf.png)|![Taviraj_900Black](./900Black/Taviraj_900Black.ttf.png)|![Taviraj_900Black_Italic](./900Black_Italic/Taviraj_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/taviraj` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Taviraj page on Google Fonts](https://fonts.google.com/specimen/Taviraj) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Taviraj on Google Fonts](https://fonts.google.com/specimen/Taviraj)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/taviraj)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/taviraj)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
